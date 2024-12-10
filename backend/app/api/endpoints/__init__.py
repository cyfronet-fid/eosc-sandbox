"""Routes for the UI"""

from fastapi import APIRouter

from .contact import router as contact_router

web_api_router = APIRouter()
web_api_router.include_router(contact_router)
