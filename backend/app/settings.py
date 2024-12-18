# pylint: disable=too-few-public-methods
"""Configs for all the environments"""
import os
from typing import Literal

from dotenv import load_dotenv
from pydantic_settings import BaseSettings, SettingsConfigDict


EnvironmentType = Literal["dev", "test", "production"]
load_dotenv(os.path.join(os.path.dirname(__file__), "../.env"))


class GlobalSettings(BaseSettings):
    """Common configuration parameters shared between all environments"""

    ENVIRONMENT: EnvironmentType = "production"

    # Operational
    BACKEND_BASE_URL: str = "http://localhost:8000/"
    UI_BASE_URL: str = "http://localhost:4200/"

    EMAIL_SENDER: str = "noreply@example.com"
    EMAIL_RECEIVER: str = "admin@example.com"
    EMAIL_SMTP_SERVER: str = "smtp.example.com"
    EMAIL_SMTP_PORT: int = 587
    EMAIL_SMTP_USER: str = "username"
    EMAIL_SMTP_PASSWORD: str = "password"

    # Get config from .env
    model_config = SettingsConfigDict(
        env_file="../../../../transform-service/.env", env_file_encoding="utf-8"
    )


class ProductionSettings(GlobalSettings):
    pass


class DevSettings(GlobalSettings):
    pass


class TestSettings(GlobalSettings):
    pass


class Settings(GlobalSettings):
    def get_settings(self) -> GlobalSettings:
        _settings = {
            "dev": DevSettings,
            "test": TestSettings,
            "production": ProductionSettings,
        }
        return _settings[self.ENVIRONMENT]()


settings = Settings().get_settings()
