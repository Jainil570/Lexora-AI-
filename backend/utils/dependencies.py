"""Shared FastAPI dependencies."""
from fastapi import Request
from motor.motor_asyncio import AsyncIOMotorDatabase


def get_db(request: Request) -> AsyncIOMotorDatabase:
    """Get the MongoDB database instance from app state."""
    return request.app.state.db
