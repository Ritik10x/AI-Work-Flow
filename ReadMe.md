# AI Workflow Builder (MERN + React Flow + OpenRouter)

This project is a simple AI Workflow Builder built using **MERN Stack**, **React Flow**, and **OpenRouter API**.  
Users can type a prompt, click **Run Flow**, view AI response, and **Save the result to MongoDB**.

---

# 🚀 Live Demo

Frontend:  
(Add your Netlify/Vercel link here)

Backend:  
https://ai-work-flow.onrender.com

---

# 🎯 Project Goal

The goal of this project is to build a simple webpage where:

- User types a prompt  
- Clicks "Run Flow"  
- AI generates response  
- Response appears in connected node  
- User clicks "Save Flow"  
- Data gets saved to MongoDB  

---

# 🧰 Tech Stack

## Frontend
- React
- React Flow
- Tailwind CSS
- Axios

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## AI Integration
- OpenRouter API
- Free AI Model Used:
  
```
mistralai/mistral-7b-instruct:free
```

## Deployment
- Frontend: Netlify
- Backend: Render
- Database: MongoDB Atlas

---

# 📸 Features

- Text Input Node
- Result Node
- Run Flow Button
- AI Response Generation
- Save Flow Button
- MongoDB Database Save
- React Flow Visualization
- Loader UI

---

# 🧠 How It Works

### Step 1 — User Input

User types prompt in Text Input Node

Example:

```
What is the capital of France?
```

---

### Step 2 — Run Flow

User clicks **Run Flow**

Frontend sends request to:

```
POST /api/ask-ai
```

---

### Step 3 — AI Response

Backend sends request to OpenRouter API

AI returns response:

```
Paris is the capital of France
```

---

### Step 4 — Result Node Updated

Response appears in Result Node

---

### Step 5 — Save Flow

User clicks **Save Flow**

Data saved in MongoDB:

- Prompt
- Response
- Timestamp

---

# 📂 Project Structure

```
AI-Work-Flow
│
├── AI-work-flow-Frontend
│   ├── src
│   ├── components
│   ├── api
│
├── AI-work-flow-Backend
│   ├── routes
│   ├── models
│   ├── server.js
```

---

# ⚙️ Installation & Setup

## Clone Repository

```
git clone https://github.com/your-username/AI-Work-Flow.git
```

---

# Backend Setup

Navigate to backend folder

```
cd AI-work-flow-Backend
```

Install dependencies

```
npm install
```

Create `.env` file

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
OPENROUTER_API_KEY=your_openrouter_api_key
```

Run backend

```
npm start
```

---

# Frontend Setup

Navigate to frontend folder

```
cd AI-work-flow-Frontend
```

Install dependencies

```
npm install
```

Run frontend

```
npm run dev
```

---

# 🔌 API Endpoints

## Ask AI

```
POST /api/ask-ai
```

Request Body:

```
{
  "prompt": "Hello AI"
}
```

---

## Save Flow

```
POST /api/save
```

Request Body:

```
{
  "prompt": "Hello AI",
  "response": "Hello! How can I help?"
}
```

---

# 📦 MongoDB Schema

```
prompt: String
response: String
createdAt: Date
```

---

# 🎥 Demo Video

(Add Loom / YouTube link here)

Example:

```
https://your-demo-video-link.com
```

---

# 👨‍💻 Author

**Ritik Singh**  
Full Stack Developer  

GitHub:  
https://github.com/Ritik10x

---

# 📌 Submission Checklist

- Public GitHub Repository
- Deployed Frontend
- Deployed Backend
- MongoDB Save Working
- README.md
- Video Demo

---

# ⭐ Project Highlights

- React Flow Integration
- OpenRouter AI Integration
- MongoDB Database Save
- MERN Stack Architecture
- Production Deployment
