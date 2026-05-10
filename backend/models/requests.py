"""Request models for API endpoints."""
from pydantic import BaseModel, Field
from models.legal_state import NDAType, StartupStage


class NDAGenerateRequest(BaseModel):
    """Request body for NDA document generation."""

    disclosing_party: str = Field(..., min_length=1, max_length=200)
    receiving_party: str = Field(..., min_length=1, max_length=200)
    nda_type: NDAType
    purpose: str = Field(..., min_length=5, max_length=1000)
    confidentiality_duration_years: int = Field(..., ge=1, le=10)
    jurisdiction_state: str
    startup_stage: StartupStage
    governing_law: str = Field(default="India")
