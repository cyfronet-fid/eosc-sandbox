from fastapi import HTTPException, APIRouter
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
import os

from app.api.models.contact import ContactForm
from app.settings import settings

router = APIRouter()


# Email Configuration
conf = ConnectionConfig(
    MAIL_USERNAME=settings.EMAIL_SMTP_USER,
    MAIL_PASSWORD=settings.EMAIL_SMTP_PASSWORD,
    MAIL_FROM=settings.EMAIL_SENDER,
    MAIL_PORT=int(settings.EMAIL_SMTP_PORT),
    MAIL_SERVER=settings.EMAIL_SMTP_SERVER,
    MAIL_TLS=True,
    MAIL_SSL=False,
    USE_CREDENTIALS=True,
)


@router.post("/contact")
async def send_contact_message(contact_form: ContactForm):
    message = MessageSchema(
        subject=f"New Contact Form Message from {contact_form.name}",
        recipients=[os.getenv("EMAIL_RECEIVER")],
        body=f"""
        Name: {contact_form.name}
        Email: {contact_form.email}
        Message: {contact_form.message}
        """,
        subtype="plain",
    )

    fast_mail = FastMail(conf)
    try:
        await fast_mail.send_message(message)
        return {"detail": "Message sent successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to send email: {str(e)}")