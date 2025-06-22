# AI Reminder Starter Kit

## Description
This is a basic full-stack setup to create reminders using AI (OpenAI GPT-4). Users can input a sentence and get a fully pre-filled reminder form.

## Structure
- `frontend/ReminderPage.jsx`: Main React component for the reminder creation.
- `backend/server.js`: Express server with one route `/api/ai/reminder` calling OpenAI.
- `.env`: Put your OpenAI API Key here.

## How to Run

### Backend
```bash
cd backend
npm install express body-parser cors dotenv openai
node server.js
```

### Frontend
Integrate `ReminderPage.jsx` in your React app and ensure proxy or CORS is configured for requests to `/api/ai/reminder`.

## Example Input
```
"I need to check the filters of the cold unit next week."
```

## Expected Output (from AI)
```json
{
  "date": "2025-06-21",
  "field1": "Filter Check",
  "field2": "Intervention on Cold Unit C1",
  "field3": "Responsible technician: Louis B."
}
```

Task 
By Anshul

# 🧠 AI Reminder Generator

A full-stack app that allows users to create structured reminders by simply typing natural language like:

> "Check the filters next week"

## 🚀 Features

✅ React frontend  
✅ Node.js backend with Express  
✅ AI integration using OpenAI GPT-4  
✅ Auto-fills form fields from user input  
✅ Editable reminder form before saving  

---

## 🛠️ Tech Stack

- **Frontend**: React (ReminderPage.jsx)
- **Backend**: Node.js + Express
- **AI**: OpenAI GPT-4 API
- **Others**: Axios, Dotenv, CORS

---

## 📸 Demo

1. Type a sentence like:  
   `"Check the filters next week"`

2. Click **Create with AI**

3. Form gets auto-filled:
```json
{
  "date": "2025-06-27",
  "field1": "Check",
  "field2": "filters",
  "field3": "next week"
}
