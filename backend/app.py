from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

# ✅ CORS MUST be added AFTER app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # allow all (for dev)
    allow_credentials=True,
    allow_methods=["*"],   # ⭐ THIS FIXES OPTIONS
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

@app.post("/chat")
def chat(req: ChatRequest):
    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": "gemma:2b",#"llama3",
            "prompt": req.message,
            "stream": False
        }
    )

    return {"reply": response.json().get("response", "")}