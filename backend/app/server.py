"""FastAPI server configuration"""
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from app.api import web_api_router


def get_app():
    """Create an application with event handlers and routers"""

    app = FastAPI(
        title="EOSC Sandbox",
        description="EOSC Sandbox",
        version="1.0.0",
    )

    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    app.include_router(router=web_api_router, prefix="/api/web")

    return app
