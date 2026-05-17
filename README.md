# Blinq — Real-Time Messaging Platform

Blinq is a full-stack real-time messaging application built with the MERN stack and Socket.IO.

The project focuses on:
- clean software architecture
- scalable folder structure
- real-time communication
- authentication and authorization
- professional development workflow

---

## Features

### Authentication
- User registration
- User login/logout
- JWT authentication
- Protected routes

### Real-Time Messaging
- Instant messaging
- Online/offline user presence
- Typing indicators
- Real-time updates with Socket.IO

### User Experience
- Responsive UI
- Clean chat interface
- Persistent sessions
- Modern frontend architecture

---

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Zustand
- Axios
- Socket.IO Client

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- JWT Authentication

---

## Project Structure

```bash
blinq-realtime-chat/
│
├── client/
├── server/
├── docs/
│
├── README.md
├── .gitignore
└── LICENSE
```

---

## Architecture

```bash
Client (React)
      │
      ▼
REST API + WebSocket
      │
      ▼
Server (Express + Socket.IO)
      │
      ▼
MongoDB
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/blinq-realtime-chat.git
```

---

## Setup Frontend

```bash
cd client
npm install
npm run dev
```

---

## Setup Backend

```bash
cd server
npm install
npm run dev
```

---

## Environment Variables

Create `.env` inside `server/`

```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
```

---

## Development Workflow

### Branch Naming

```bash
feature/authentication
feature/socket-chat
feature/typing-indicator
```

### Commit Convention

```bash
feat: add authentication routes
fix: resolve socket reconnect issue
refactor: improve message service structure
```

---

## Future Improvements

- Group chats
- Media sharing
- Voice/video calling
- Message reactions
- Redis integration
- AI-powered summaries

---

## Learning Goals

This project was built to improve:
- software engineering practices
- project architecture
- Git workflow
- clean code principles
- real-time systems understanding

---

## License

MIT License