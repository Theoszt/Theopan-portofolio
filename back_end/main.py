from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://Theoszt.github.io",
                  "https://theopan-portofolio27.vercel.app/"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router, prefix="/api")
