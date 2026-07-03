# Mark Jeferson Manalo — Portfolio

Personal portfolio site: **React.js** frontend + **Node.js/Express** backend, built from the
requirements in [`docs/PRD.txt`](docs/PRD.txt).

See [`ARCHITECTURE.md`](ARCHITECTURE.md) for the full system architecture and directory structure.

## Stack

- **Frontend**: React 19 + Vite (`frontend/`)
- **Backend**: Node.js + Express (`backend/`) — contact form email, résumé download, health check
- **Content**: data-driven via plain JS files in `frontend/src/data/` (no CMS/database needed)

## Getting started

Requires Node.js 18+.

```bash
# 1. Install all dependencies (root, frontend, backend via npm workspaces)
npm install

# 2. Set up environment variables
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

# 3. Add your résumé PDF (used by the "Download CV" button)
#    Place your PDF at backend/public/resume.pdf

# 4. Run both the frontend and backend together
npm run dev
```

- Frontend: http://localhost:51765
- Backend: http://localhost:5000

Run them individually with `npm run dev:frontend` / `npm run dev:backend` if preferred.

## Editing your content

Everything shown on the page — your bio, skills, projects, and work history — lives in
`frontend/src/data/`. Edit those files directly; **no component/JSX changes are required**.

| File | Section |
| --- | --- |
| `frontend/src/data/profile.js` | Hero, About, Contact |
| `frontend/src/data/skills.js` | Skills |
| `frontend/src/data/projects.js` | Projects |
| `frontend/src/data/experience.js` | Experience / Work history |

> **Note:** `projects.js` and `experience.js` ship with clearly-labeled `REPLACE_ME` placeholder
> entries. The PRD defines what each project/role entry should contain, but not your actual
> project names, links, or employment history — fill those in with your real details.

## Available scripts (root)

| Command | Description |
| --- | --- |
| `npm run dev` | Run frontend + backend together (with hot reload) |
| `npm run build` | Production build of the frontend (`frontend/dist/`) |
| `npm run start:backend` | Run the backend in production mode |
| `npm run lint` | Lint both frontend and backend |

## Project structure

```
myportfolio/
├── frontend/    React.js SPA (Vite)
├── backend/     Node.js/Express API
├── docs/        Product requirements document
└── ARCHITECTURE.md
```

Full breakdown in [`ARCHITECTURE.md`](ARCHITECTURE.md).
