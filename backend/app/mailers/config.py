"""Mailer configuration"""

from fastapi_mail import ConnectionConfig

from app.settings import settings

conf = ConnectionConfig(
    MAIL_USERNAME=settings.EMAIL_SMTP_USER,
    MAIL_PASSWORD=settings.EMAIL_SMTP_PASSWORD,
    MAIL_FROM=settings.EMAIL_SENDER,
    MAIL_PORT=int(settings.EMAIL_SMTP_PORT),
    MAIL_SERVER=settings.EMAIL_SMTP_SERVER,
    MAIL_STARTTLS=True,
    MAIL_SSL_TLS=False,
    USE_CREDENTIALS=True,
)
