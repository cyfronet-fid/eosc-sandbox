from pydantic import BaseModel, EmailStr


class ContactForm(BaseModel):
    """Contact form model"""

    name: str
    email: EmailStr
    message: str
