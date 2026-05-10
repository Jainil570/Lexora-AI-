"""Models for Red Flag Risk Analysis."""
from typing import List, Literal

from pydantic import BaseModel, Field

class RiskFlag(BaseModel):
    """A single identified risk flag."""
    clause_text: str = Field(description="The exact text of the clause.")
    risk_level: Literal["HIGH", "MEDIUM", "LOW"] = Field(description="The severity of the risk.")
    issue: str = Field(description="Why this is a risk.")
    suggested_revision: str = Field(description="How to fix or negotiate it.")

class AnalysisResult(BaseModel):
    """The result of a Red Flag Analysis."""
    flags: List[RiskFlag] = Field(default_factory=list)
