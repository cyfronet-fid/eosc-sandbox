from fastapi import APIRouter

router = APIRouter()


@router.post("/contact")
async def send_contact_message(name: str, email: str, message: str):
    # Dummy response
    return {"status": "success", "message": "Message sent successfully (dummy)."}
