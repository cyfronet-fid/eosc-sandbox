from fastapi import FastAPI
from app.routes import contact

app = FastAPI()

# Include routes
app.include_router(contact.router)

@app.get("/")
async def root():
    return
