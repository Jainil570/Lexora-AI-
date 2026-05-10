"""Documents router — handles document generation endpoints."""
import logging
from pathlib import Path

from fastapi import APIRouter, HTTPException, Depends, Request
from fastapi.responses import FileResponse

from models.legal_state import NDALegalState
from models.requests import NDAGenerateRequest
from models.responses import DocumentGenerateResponse
from services.document_generator import generate_nda
from services.file_exporter import generate_docx, generate_pdf
from utils.logger import log_event
from utils.auth import get_current_user

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/api/documents", tags=["documents"])


@router.post("/generate", response_model=DocumentGenerateResponse)
async def generate_document(
    request: NDAGenerateRequest,
    user_id: str = Depends(get_current_user)
):
    """Generate an NDA document from structured input."""
    # Build the validated legal state from request
    try:
        legal_state = NDALegalState(
            disclosing_party=request.disclosing_party,
            receiving_party=request.receiving_party,
            nda_type=request.nda_type,
            purpose=request.purpose,
            confidentiality_duration_years=request.confidentiality_duration_years,
            jurisdiction_state=request.jurisdiction_state,
            startup_stage=request.startup_stage,
            governing_law=request.governing_law,
        )
    except Exception as e:
        raise HTTPException(status_code=422, detail=str(e))

    await log_event(
        event_type="document_request_received",
        session_id=legal_state.session_id,
        data={"document_type": "nda", "request": request.model_dump(), "user_id": user_id},
    )

    # Generate document text via LLM
    try:
        generated_text = await generate_nda(legal_state)
    except RuntimeError as e:
        logger.error(f"LLM generation failed: {e}")
        await log_event(
            event_type="generation_failed",
            session_id=legal_state.session_id,
            error=str(e),
        )
        raise HTTPException(
            status_code=503,
            detail="Document generation service is temporarily unavailable. Please ensure Ollama is running and try again.",
        )

    # Generate DOCX and PDF files
    try:
        docx_path = generate_docx(generated_text, legal_state.session_id, "nda")
        pdf_path = generate_pdf(generated_text, legal_state.session_id, "nda")
    except Exception as e:
        logger.error(f"File export failed: {e}")
        raise HTTPException(
            status_code=500,
            detail="Failed to generate document files.",
        )

    await log_event(
        event_type="document_files_generated",
        session_id=legal_state.session_id,
        data={
            "docx_path": docx_path,
            "pdf_path": pdf_path,
            "user_id": user_id,
        },
    )

    # Build download URLs
    session_short = legal_state.session_id[:8]
    return DocumentGenerateResponse(
        session_id=legal_state.session_id,
        document_type="nda",
        preview_text=generated_text,
        docx_download_url=f"/api/documents/download/nda_{session_short}.docx",
        pdf_download_url=f"/api/documents/download/nda_{session_short}.pdf",
    )


@router.get("/download/{filename}")
async def download_file(filename: str):
    """Download a generated document file."""
    outputs_dir = Path(__file__).parent.parent / "outputs"
    file_path = outputs_dir / filename

    if not file_path.exists():
        raise HTTPException(status_code=404, detail="File not found")

    # Determine media type
    if filename.endswith(".docx"):
        media_type = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    elif filename.endswith(".pdf"):
        media_type = "application/pdf"
    else:
        media_type = "application/octet-stream"

    return FileResponse(
        path=str(file_path),
        filename=filename,
        media_type=media_type,
    )

@router.get("/history")
async def get_document_history(
    request: Request,
    user_id: str = Depends(get_current_user)
):
    """Fetch the user's generated documents history from audit logs."""
    db = request.app.state.db
    if db is None:
        return []

    # Find all successful generation events for this user
    cursor = db["audit_logs"].find(
        {
            "event_type": "document_files_generated",
            "data.user_id": user_id
        }
    ).sort("timestamp", -1).limit(50)

    history = []
    async for doc in cursor:
        session_id = doc.get("session_id")
        timestamp = doc.get("timestamp")
        data = doc.get("data", {})
        docx_path = data.get("docx_path", "")
        pdf_path = data.get("pdf_path", "")
        
        # Get the original request to find parties and type
        req_doc = await db["audit_logs"].find_one({
            "event_type": "document_request_received",
            "session_id": session_id
        })
        
        doc_type = "NDA"
        parties = "Unknown"
        if req_doc and "data" in req_doc and "request" in req_doc["data"]:
            req_data = req_doc["data"]["request"]
            doc_type = req_doc["data"].get("document_type", "nda").upper()
            parties = f"{req_data.get('disclosing_party', 'A')} & {req_data.get('receiving_party', 'B')}"

        session_short = session_id[:8] if session_id else ""
        history.append({
            "session_id": session_id,
            "filename": f"{doc_type}_V1_{session_short}.PDF",
            "document_type": doc_type,
            "parties": parties,
            "date": timestamp,
            "status": "COMPLETED",
            "risk": "LOW", # placeholder for future risk analysis
            "docx_url": f"/api/documents/download/{doc_type.lower()}_{session_short}.docx",
            "pdf_url": f"/api/documents/download/{doc_type.lower()}_{session_short}.pdf",
        })

    return history
