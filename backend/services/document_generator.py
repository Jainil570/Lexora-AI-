"""Document generator service — orchestrates legal state → prompt → LLM → text."""
import os
import logging
from pathlib import Path

from models.legal_state import NDALegalState
from services.llm_client import get_llm_provider
from utils.logger import log_event

logger = logging.getLogger(__name__)

PROMPTS_DIR = Path(__file__).parent.parent / "prompts"


def _load_prompt(filename: str) -> str:
    """Load a prompt template from the prompts directory."""
    prompt_path = PROMPTS_DIR / filename
    if not prompt_path.exists():
        raise FileNotFoundError(f"Prompt file not found: {prompt_path}")
    return prompt_path.read_text(encoding="utf-8")


def _build_nda_user_prompt(state: NDALegalState) -> str:
    """Build the user prompt from the NDA legal state."""
    nda_type_label = "Mutual" if state.nda_type.value == "mutual" else "One-Way"
    stage_label = state.startup_stage.value.replace("_", " ").title()

    return f"""Generate a {nda_type_label} Non-Disclosure Agreement with the following details:

- Disclosing Party: {state.disclosing_party}
- Receiving Party: {state.receiving_party}
- NDA Type: {nda_type_label}
- Purpose: {state.purpose}
- Confidentiality Duration: {state.confidentiality_duration_years} year(s)
- Jurisdiction: {state.jurisdiction_state}, India
- Startup Stage: {stage_label}
- Governing Law: Laws of India, with courts in {state.jurisdiction_state} having exclusive jurisdiction

Generate the complete NDA document now."""


async def generate_nda(state: NDALegalState) -> str:
    """Generate an NDA document from the validated legal state."""
    await log_event(
        event_type="generation_started",
        session_id=state.session_id,
        data={
            "document_type": "nda",
            "nda_type": state.nda_type.value,
            "startup_stage": state.startup_stage.value,
            "jurisdiction": state.jurisdiction_state,
        },
        prompt_id="nda_generation",
    )

    try:
        system_prompt = _load_prompt("nda_generation.txt")
        user_prompt = _build_nda_user_prompt(state)

        provider = get_llm_provider()
        generated_text = await provider.generate(
            system=system_prompt,
            user=user_prompt,
            temperature=0.15,
        )

        await log_event(
            event_type="generation_completed",
            session_id=state.session_id,
            data={
                "document_type": "nda",
                "text_length": len(generated_text),
            },
            prompt_id="nda_generation",
        )

        return generated_text

    except Exception as e:
        await log_event(
            event_type="generation_failed",
            session_id=state.session_id,
            error=str(e),
            prompt_id="nda_generation",
        )
        raise
