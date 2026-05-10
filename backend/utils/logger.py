"""Audit logging to MongoDB."""
import logging
from datetime import datetime, timezone
from typing import Any, Dict, Optional

logger = logging.getLogger(__name__)

# Module-level reference to the MongoDB database
_db = None


def set_database(db):
    """Set the MongoDB database reference for logging."""
    global _db
    _db = db


async def log_event(
    event_type: str,
    session_id: str,
    data: Optional[Dict[str, Any]] = None,
    prompt_id: Optional[str] = None,
    error: Optional[str] = None,
) -> None:
    """Log an audit event to MongoDB audit_logs collection."""
    if _db is None:
        logger.warning("MongoDB not connected. Skipping audit log.")
        return

    log_entry = {
        "event_type": event_type,
        "session_id": session_id,
        "timestamp": datetime.now(timezone.utc),
        "prompt_id": prompt_id,
        "error": error,
        "data": data or {},
    }

    try:
        await _db["audit_logs"].insert_one(log_entry)
        logger.debug(f"Audit log: {event_type} for session {session_id}")
    except Exception as e:
        logger.error(f"Failed to write audit log: {e}")
