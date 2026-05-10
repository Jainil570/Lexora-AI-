"""Pydantic models for legal state objects."""
import uuid
from datetime import datetime, timezone
from enum import Enum
from typing import Literal, Optional

from pydantic import BaseModel, Field, field_validator


class NDAType(str, Enum):
    mutual = "mutual"
    one_way = "one_way"


class StartupStage(str, Enum):
    idea = "idea"
    incorporated = "incorporated"
    seed = "seed"
    series_a = "series_a"


VALID_INDIAN_STATES = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Delhi", "Jammu and Kashmir", "Ladakh",
    "Chandigarh", "Puducherry", "Lakshadweep",
    "Dadra and Nagar Haveli and Daman and Diu", "Andaman and Nicobar Islands",
]


class NDALegalState(BaseModel):
    """Structured legal state for NDA document generation."""

    session_id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    document_type: Literal["nda"] = "nda"
    disclosing_party: str = Field(..., min_length=1, max_length=200)
    receiving_party: str = Field(..., min_length=1, max_length=200)
    nda_type: NDAType
    purpose: str = Field(..., min_length=5, max_length=1000)
    confidentiality_duration_years: int = Field(..., ge=1, le=10)
    jurisdiction_state: str
    startup_stage: StartupStage
    governing_law: str = Field(default="India")
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

    @field_validator("jurisdiction_state")
    @classmethod
    def validate_jurisdiction(cls, v: str) -> str:
        if v not in VALID_INDIAN_STATES:
            raise ValueError(
                f"Invalid Indian state: '{v}'. Must be one of the recognized Indian states/UTs."
            )
        return v
