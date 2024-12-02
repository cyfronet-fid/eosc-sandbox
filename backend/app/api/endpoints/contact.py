"""Contact endpoint"""

import os

from fastapi import APIRouter, HTTPException
from fastapi_mail import FastMail, MessageSchema

from app.api.models.contact import ContactForm
from app.mailers.config import conf

router = APIRouter()


@router.post("/contact")
async def send_contact_message(contact_form: ContactForm):
    """Send contact message to our support inbox"""

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
        raise HTTPException(
            status_code=500,
            detail=f"Failed to send email: {str(e)}"
        ) from e
