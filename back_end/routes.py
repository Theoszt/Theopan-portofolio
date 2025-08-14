from fastapi import APIRouter
from models import ContactForm
import yagmail
from config import GMAIL_USER, GMAIL_APP_PASSWORD, RECIPIENT_EMAIL

router = APIRouter()

@router.post("/contact")
async def submit_contact(data: ContactForm):
    try:
        yag = yagmail.SMTP(user=GMAIL_USER, password=GMAIL_APP_PASSWORD)
        
        email_body = f"""
        Name: {data.name}
        Email: {data.email}
        Subject: {data.subject}
        Message: {data.message}
        """

        yag.send(
            to=RECIPIENT_EMAIL,
            subject=f"New Contact Form Submission: {data.subject}",
            contents=email_body
        )
        print(f"Successfully sent email from {data.email}")
        return {"message": "Thanks for reaching out! Your message has been sent."}
    except Exception as e:
        print(f"Failed to send email: {e}")
        return {"message": "Failed to send your message. Please try again later."}