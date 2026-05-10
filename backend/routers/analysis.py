"""Analysis router for red flag risk detection."""
import json
import logging

from fastapi import APIRouter, Depends, UploadFile, File, HTTPException, Request, status
from motor.motor_asyncio import AsyncIOMotorDatabase

from models.analysis import AnalysisResult
from services.document_parser import parse_and_chunk
from services.llm_client import get_llm_provider
from utils.auth import get_current_user
from utils.dependencies import get_db
from utils.logger import log_event

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/analysis", tags=["analysis"])

def extract_json_from_llm_response(text: str) -> dict:
    """Extract and parse JSON from the LLM response text."""
    try:
        # The LLM is instructed to output ONLY JSON, but sometimes it adds markdown
        text = text.strip()
        if text.startswith("```json"):
            text = text[7:]
        if text.endswith("```"):
            text = text[:-3]
        text = text.strip()
        return json.loads(text)
    except json.JSONDecodeError as e:
        logger.error(f"Failed to parse JSON from LLM: {text}")
        raise ValueError("Invalid JSON response from LLM") from e


@router.post("/red-flag", response_model=AnalysisResult)
async def analyze_document_red_flags(
    file: UploadFile = File(...),
    user_id: str = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_db)
):
    """Analyze a document for legal red flags. Requires authentication."""
    if not file.filename.lower().endswith(('.pdf', '.docx', '.txt')):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Only PDF, DOCX, and TXT files are supported."
        )

    try:
        # Read file contents
        contents = await file.read()
        
        # Parse and chunk text
        chunks = parse_and_chunk(contents, file.filename)
        
        if not chunks:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="No text could be extracted from the document."
            )
        
        llm = get_llm_provider()
        
        # Load prompt
        with open("prompts/red_flag_analysis.txt", "r", encoding="utf-8") as f:
            system_prompt = f.read()

        all_flags = []
        
        # Process up to 3 chunks to keep the response time reasonable for Phase 3
        chunks_to_process = chunks[:3]
        
        for chunk in chunks_to_process:
            llm_response = await llm.generate(
                system=system_prompt,
                user=f"Analyze this contract chunk:\n\n{chunk}",
                temperature=0.1
            )
            
            try:
                result_dict = extract_json_from_llm_response(llm_response)
                flags = result_dict.get("flags", [])
                all_flags.extend(flags)
            except Exception as e:
                logger.warning(f"Could not parse flags from chunk: {e}")
                continue

        # Log action
        await log_event(
            event_type="red_flag_analysis",
            session_id=user_id,
            data={"filename": file.filename, "flags_found": len(all_flags), "user_id": user_id}
        )
        
        return AnalysisResult(flags=all_flags)
        
    except ValueError as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e)
        )
    except Exception as e:
        logger.error(f"Error during analysis: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An error occurred during document analysis."
        )
