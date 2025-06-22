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
