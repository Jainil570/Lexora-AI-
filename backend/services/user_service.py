"""User service for database operations."""
import uuid
from datetime import datetime, timezone
from typing import Optional

from motor.motor_asyncio import AsyncIOMotorDatabase
from fastapi import HTTPException, status

from models.user import UserCreate, UserInDB
from utils.auth import get_password_hash

async def create_user(db: AsyncIOMotorDatabase, user: UserCreate) -> UserInDB:
    """Create a new user in the database."""
    # Check if user already exists
    existing_user = await db["users"].find_one({"email": user.email})
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="User with this email already exists"
        )

    # Hash the password
    hashed_password = get_password_hash(user.password)

    # Create the user document
    user_id = str(uuid.uuid4())
    user_doc = UserInDB(
        id=user_id,
        email=user.email,
        full_name=user.full_name,
        company_name=user.company_name,
        created_at=datetime.now(timezone.utc),
        hashed_password=hashed_password
    )

    # Insert into database
    await db["users"].insert_one(user_doc.model_dump())

    return user_doc

async def get_user_by_email(db: AsyncIOMotorDatabase, email: str) -> Optional[UserInDB]:
    """Retrieve a user by their email address."""
    user_data = await db["users"].find_one({"email": email})
    if user_data:
        # Pydantic models ignore '_id' implicitly unless defined, which is fine
        return UserInDB(**user_data)
    return None

async def get_user_by_id(db: AsyncIOMotorDatabase, user_id: str) -> Optional[UserInDB]:
    """Retrieve a user by their ID."""
    user_data = await db["users"].find_one({"id": user_id})
    if user_data:
        return UserInDB(**user_data)
    return None
