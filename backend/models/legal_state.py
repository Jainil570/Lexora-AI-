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


class EquityVestingSchedule(str, Enum):
    standard_4yr_1yr_cliff = "4yr_1yr_cliff"
    three_year_monthly = "3yr_monthly"
    two_year_monthly = "2yr_monthly"
    custom = "custom"


class FounderAgreementLegalState(BaseModel):
    """Structured legal state for Founder Agreement document generation."""

    session_id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    document_type: Literal["founder_agreement"] = "founder_agreement"

    # Company Details
    company_name: str = Field(..., min_length=1, max_length=200)
    company_type: str = Field(default="Private Limited Company")
    jurisdiction_state: str
    startup_stage: StartupStage

    # Founders
    founder_1_name: str = Field(..., min_length=1, max_length=200)
    founder_1_role: str = Field(..., min_length=1, max_length=100)
    founder_1_equity_percent: float = Field(..., ge=0, le=100)

    founder_2_name: str = Field(..., min_length=1, max_length=200)
    founder_2_role: str = Field(..., min_length=1, max_length=100)
    founder_2_equity_percent: float = Field(..., ge=0, le=100)

    # Vesting
    vesting_schedule: EquityVestingSchedule = EquityVestingSchedule.standard_4yr_1yr_cliff

    # Key Clauses
    ip_assignment: bool = Field(default=True, description="IP created by founders assigned to company")
    non_compete_duration_months: int = Field(default=24, ge=6, le=60)
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

    @field_validator("founder_2_equity_percent")
    @classmethod
    def validate_total_equity(cls, v: float, info) -> float:
        f1 = info.data.get("founder_1_equity_percent", 0)
        if f1 + v > 100:
            raise ValueError(
                f"Combined equity ({f1 + v}%) exceeds 100%. Adjust the split."
            )
        return v


# ─── ESOP Policy ────────────────────────────────────────────────────────────

class ESOPVestingType(str, Enum):
    cliff = "cliff"
    graded = "graded"
    milestone = "milestone"


class ESOPLegalState(BaseModel):
    """Structured legal state for ESOP Policy document generation."""

    session_id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    document_type: Literal["esop"] = "esop"

    company_name: str = Field(..., min_length=1, max_length=200)
    jurisdiction_state: str
    startup_stage: StartupStage

    total_esop_pool_percent: float = Field(..., ge=1, le=30, description="% of total share capital")
    vesting_type: ESOPVestingType = ESOPVestingType.graded
    vesting_period_years: int = Field(default=4, ge=1, le=6)
    cliff_period_months: int = Field(default=12, ge=0, le=24)
    exercise_price_inr: float = Field(default=1.0, ge=0)
    exercise_window_months: int = Field(default=36, ge=6, le=120)
    governing_law: str = Field(default="India")
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

    @field_validator("jurisdiction_state")
    @classmethod
    def validate_jurisdiction(cls, v: str) -> str:
        if v not in VALID_INDIAN_STATES:
            raise ValueError(f"Invalid Indian state: '{v}'.")
        return v


# ─── Vendor Contract ─────────────────────────────────────────────────────────

class ContractDuration(str, Enum):
    monthly = "monthly"
    quarterly = "quarterly"
    annual = "annual"
    fixed_term = "fixed_term"


class VendorContractLegalState(BaseModel):
    """Structured legal state for Vendor Contract document generation."""

    session_id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    document_type: Literal["vendor_contract"] = "vendor_contract"

    company_name: str = Field(..., min_length=1, max_length=200)
    vendor_name: str = Field(..., min_length=1, max_length=200)
    service_description: str = Field(..., min_length=10, max_length=1000)
    contract_value_inr: float = Field(..., ge=0)
    contract_duration: ContractDuration = ContractDuration.annual
    payment_terms_days: int = Field(default=30, ge=7, le=90)
    jurisdiction_state: str
    startup_stage: StartupStage
    sla_included: bool = Field(default=True)
    ip_ownership: str = Field(default="client", description="'client' or 'vendor' or 'shared'")
    governing_law: str = Field(default="India")
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

    @field_validator("jurisdiction_state")
    @classmethod
    def validate_jurisdiction(cls, v: str) -> str:
        if v not in VALID_INDIAN_STATES:
            raise ValueError(f"Invalid Indian state: '{v}'.")
        return v


# ─── Employment Agreement ────────────────────────────────────────────────────

class EmploymentType(str, Enum):
    full_time = "full_time"
    part_time = "part_time"
    contract = "contract"
    probation = "probation"


class EmploymentAgreementLegalState(BaseModel):
    """Structured legal state for Employment Agreement document generation."""

    session_id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    document_type: Literal["employment_agreement"] = "employment_agreement"

    company_name: str = Field(..., min_length=1, max_length=200)
    employee_name: str = Field(..., min_length=1, max_length=200)
    designation: str = Field(..., min_length=1, max_length=200)
    department: str = Field(..., min_length=1, max_length=100)
    ctc_annual_inr: float = Field(..., ge=0)
    employment_type: EmploymentType = EmploymentType.full_time
    probation_period_months: int = Field(default=3, ge=0, le=12)
    notice_period_days: int = Field(default=30, ge=0, le=180)
    work_location: str = Field(default="office")
    non_compete_months: int = Field(default=12, ge=0, le=24)
    jurisdiction_state: str
    startup_stage: StartupStage
    governing_law: str = Field(default="India")
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

    @field_validator("jurisdiction_state")
    @classmethod
    def validate_jurisdiction(cls, v: str) -> str:
        if v not in VALID_INDIAN_STATES:
            raise ValueError(f"Invalid Indian state: '{v}'.")
        return v
