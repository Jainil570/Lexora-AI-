"""Request models for API endpoints."""
from pydantic import BaseModel, Field
from models.legal_state import (
    NDAType, StartupStage, EquityVestingSchedule,
    ESOPVestingType, ContractDuration, EmploymentType
)


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


class FounderAgreementGenerateRequest(BaseModel):
    """Request body for Founder Agreement document generation."""
    company_name: str = Field(..., min_length=1, max_length=200)
    company_type: str = Field(default="Private Limited Company")
    jurisdiction_state: str
    startup_stage: StartupStage
    founder_1_name: str = Field(..., min_length=1, max_length=200)
    founder_1_role: str = Field(..., min_length=1, max_length=100)
    founder_1_equity_percent: float = Field(..., ge=0, le=100)
    founder_2_name: str = Field(..., min_length=1, max_length=200)
    founder_2_role: str = Field(..., min_length=1, max_length=100)
    founder_2_equity_percent: float = Field(..., ge=0, le=100)
    vesting_schedule: EquityVestingSchedule = EquityVestingSchedule.standard_4yr_1yr_cliff
    ip_assignment: bool = True
    non_compete_duration_months: int = Field(default=24, ge=6, le=60)
    governing_law: str = Field(default="India")


class ESOPGenerateRequest(BaseModel):
    """Request body for ESOP Policy document generation."""
    company_name: str = Field(..., min_length=1, max_length=200)
    jurisdiction_state: str
    startup_stage: StartupStage
    total_esop_pool_percent: float = Field(..., ge=1, le=30)
    vesting_type: ESOPVestingType = ESOPVestingType.graded
    vesting_period_years: int = Field(default=4, ge=1, le=6)
    cliff_period_months: int = Field(default=12, ge=0, le=24)
    exercise_price_inr: float = Field(default=1.0, ge=0)
    exercise_window_months: int = Field(default=36, ge=6, le=120)
    governing_law: str = Field(default="India")


class VendorContractGenerateRequest(BaseModel):
    """Request body for Vendor Contract document generation."""
    company_name: str = Field(..., min_length=1, max_length=200)
    vendor_name: str = Field(..., min_length=1, max_length=200)
    service_description: str = Field(..., min_length=10, max_length=1000)
    contract_value_inr: float = Field(..., ge=0)
    contract_duration: ContractDuration = ContractDuration.annual
    payment_terms_days: int = Field(default=30, ge=7, le=90)
    jurisdiction_state: str
    startup_stage: StartupStage
    sla_included: bool = True
    ip_ownership: str = Field(default="client")
    governing_law: str = Field(default="India")


class EmploymentAgreementGenerateRequest(BaseModel):
    """Request body for Employment Agreement document generation."""
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
