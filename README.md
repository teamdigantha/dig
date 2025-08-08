# Diganta — Turn college event chaos into seamless flow.

From poster approvals to budget reconciliation — everything your campus event needs, in one place.

## Features
- Fast approvals
- Transparent budgets
- Single source of truth
- Reusable event templates

## Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas (or local MongoDB)
- (Optional) Google OAuth credentials

### Setup

1. Clone the repo:
   ```bash
   git clone <your-repo-url>
   cd diganta
   ```
2. Copy `.env.example` to `.env` in `/backend` (and `/frontend` if needed), then fill in your secrets.
3. Install dependencies:
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```
4. Start the servers:
   - Backend: `npm run dev` (http://localhost:5000)
   - Frontend: `npm run dev -- --host` (http://localhost:5173)

### Deployment
- Use the provided Dockerfiles and `docker-compose.yml` for easy deployment.
- Backend: Render, Railway, Heroku, etc.
- Frontend: Vercel, Netlify, etc.

## CTA
- Request Beta Access
- See Demo
