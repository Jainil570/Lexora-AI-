"""User and Authentication models."""
import uuid
from datetime import datetime
from typing import Optional

from pydantic import BaseModel, EmailStr, Field


class UserCreate(BaseModel):
    """Model for registering a new user."""

    email: EmailStr
    password: str = Field(..., min_length=8)
    full_name: str = Field(..., min_length=2)
    company_name: Optional[str] = None


class UserLogin(BaseModel):
    """Model for logging in."""

    email: EmailStr
    password: str


class UserResponse(BaseModel):
    """Model for returning user data (password excluded)."""

    id: str
    email: EmailStr
    full_name: str
    company_name: Optional[str] = None
    created_at: datetime


class TokenResponse(BaseModel):
    """Model for JWT token response."""

    access_token: str
    token_type: str = "bearer"


class UserInDB(UserResponse):
    """Model for storing user data in database."""

    hashed_password: str
