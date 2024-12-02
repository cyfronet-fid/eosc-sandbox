# pylint: disable=too-few-public-methods
"""Configs for all the environments"""
import os
from typing import Literal

from dotenv import load_dotenv
from pydantic_settings import BaseSettings

EnvironmentType = Literal["dev", "test", "production"]
load_dotenv(os.path.join(os.path.dirname(__file__), "../.env"))


class GlobalSettings(BaseSettings):
    """Common configuration parameters shared between all environments"""

    ENVIRONMENT: EnvironmentType = "production"

    # Operational
    BACKEND_BASE_URL: str = "http://localhost:8000/"
    UI_BASE_URL: str = "http://localhost:4200/"

    # SMTP
    EMAIL_SENDER: str = "noreply@example.com"  # Who will send those emails?
    EMAIL_RECEIVER: str = "support@example.com"  # Who will receive emails?

    EMAIL_SMTP_USER: str = "username"  # Actual account
    EMAIL_SMTP_PASSWORD: str = "password"

    EMAIL_SMTP_SERVER: str = "smtp.gmail.com"
    EMAIL_SMTP_PORT: int = 587


class ProductionSettings(GlobalSettings):
    """Production specific settings"""


class DevSettings(GlobalSettings):
    """Dev specific settings"""


class TestSettings(GlobalSettings):
    """Test specific settings"""


class Settings(GlobalSettings):
    """Use this class to get your settings"""
    def get_settings(self) -> GlobalSettings:
        """Use this method to get your settings based on your env"""
        _settings = {
            "dev": DevSettings,
            "test": TestSettings,
            "production": ProductionSettings,
        }
        return _settings[self.ENVIRONMENT]()


settings = Settings().get_settings()
