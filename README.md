# Learn with Jiji – Backend Assignment

This repository contains the backend implementation for **Learn with Jiji**, an AI learning companion by VeidaLabs.  
The backend powers a simple **search & respond flow** using Supabase for database, authentication, storage, and security.

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **Supabase**
  - Database (PostgreSQL)
  - Authentication
  - Storage
  - Row Level Security (RLS)

---


### 1. Clone the Repository
git clone (https://github.com/vinayrajput21/jiji-backend-task.git)

## 🚀 How to Run the Project
cd jiji-backend-task
npm i 
npm run dev 


### API endpoint

### **POST** `/api/askjiji`

Ask Jiji a question.

**Headers:**
```
Authorization: Bearer <access_token>
Request Body--->
{
  "query": "Explain RAG"
}


### **POST** `/api/token`

### Request Body--->
{
"email": "YOUR_EMAIL",
"password":"YOUR_PASS"
}

-->use this api for token generation you can copy the token and use ti further in the header as bearer token 



## How Auth and RLS work 

Generate Token: Call /api/token to receive an access token
Authenticate Requests: Include the token in the Authorization header as Bearer <access_token>
Row Level Security: All database queries are protected by Supabase RLS policies - requests without valid authentication will be rejected

## One improvement you’d make with more time

Integrate LLM API (e.g., Google Gemini) to process queries and generate intelligent responses
Build Frontend Interface as specified in the assignment PDF for a complete user experience
Add query logging and analytics for tracking usage patterns
Implement rate limiting to prevent API abuse

