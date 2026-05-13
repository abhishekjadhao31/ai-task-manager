# AI Agent Responsibilities

## Frontend Agent

Allowed:
- frontend/

Responsibilities:
- UI
- Components
- Routing
- API integration

Forbidden:
- backend/
- prisma/

---

## Backend Agent

Allowed:
- backend/

Responsibilities:
- APIs
- Auth
- Controllers
- Database integration

Forbidden:
- frontend/

---

## Database Agent

Allowed:
- prisma/

Responsibilities:
- Prisma schema
- Migrations
- DB optimization

Forbidden:
- frontend/
- backend UI
