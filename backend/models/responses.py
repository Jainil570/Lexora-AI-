"""Response models for API endpoints."""
from typing import Optional

from pydantic import BaseModel


class DocumentGenerateResponse(BaseModel):
    """Response body for document generation."""

    session_id: str
    document_type: str
    preview_text: str
    docx_download_url: str
    pdf_download_url: str
    message: str = "Document generated successfully"


class HealthResponse(BaseModel):
    """Response body for health check."""

    status: str = "ok"


class ErrorResponse(BaseModel):
    """Standard error response."""

    detail: str
    error_code: Optional[str] = None
