# AI Task Manager Project

Full-stack AI-powered task management application.

## Tech Stack

Frontend:
- React
- Vite
- Tailwind CSS

Backend:
- Node.js
- Express

Database:
- PostgreSQL
- Prisma ORM

Authentication:
- JWT

---

# Project Architecture

frontend/
- React frontend
- UI components
- API integration

backend/
- Express backend
- Routes
- Controllers
- Prisma
- JWT auth

shared/
- Shared constants
- Shared types

---

# Development Rules

- Never delete files unless explicitly requested
- Always explain architecture before major changes
- Keep frontend and backend separated
- Use modular folder structure
- Prefer reusable components
- Use environment variables for secrets

---

# API Rules

- All APIs start with /api
- Use JSON responses
- Use async/await
- Proper error handling required

---

# Frontend Rules

- Use Tailwind
- Responsive UI mandatory
- Avoid huge components
- Use reusable hooks/services

---

# Backend Rules

- Use controllers/routes separation
- Keep business logic outside routes
- Validate inputs
- Use middleware properly

---

# Database Rules

- Prisma schema must stay normalized
- Use migrations
- Avoid duplicate models

---

# Git Rules

Commit after every stable feature.

Commit format:
feat:
fix:
refactor:
docs:

---

# Important

Frontend agent must never modify backend.

Backend agent must never modify frontend.
