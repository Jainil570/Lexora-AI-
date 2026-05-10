"""Validators for legal state fields."""
from models.legal_state import VALID_INDIAN_STATES


def is_valid_indian_state(state: str) -> bool:
    """Check if a string is a valid Indian state or UT."""
    return state in VALID_INDIAN_STATES


def get_indian_states_list() -> list[str]:
    """Return the list of valid Indian states and UTs."""
    return list(VALID_INDIAN_STATES)
