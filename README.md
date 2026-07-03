# Mark Jeferson Manalo — Portfolio

Personal portfolio site: **React.js** frontend + **Node.js/Express** backend, built from the
requirements in [`docs/PRD.txt`](docs/PRD.txt).

See [`ARCHITECTURE.md`](ARCHITECTURE.md) for the full system architecture and directory structure.

## Stack

- **Frontend**: React 19 + Vite (`client/`)
- **Backend**: Node.js + Express (`server/`) — contact form email, résumé download, health check
- **Content**: data-driven via plain JS files in `client/src/data/` (no CMS/database needed)

## Getting started

Requires Node.js 18+.

```bash
# 1. Install all dependencies (root, client, server via npm workspaces)
npm install

# 2. Set up environment variables
cp server/.env.example server/.env
cp client/.env.example client/.env

# 3. Add your résumé PDF (used by the "Download CV" button)
#    Place your PDF at server/public/resume.pdf

# 4. Run both the client and server together
npm run dev
```

- Client: http://localhost:51765
- Server: http://localhost:5000

Run them individually with `npm run dev:client` / `npm run dev:server` if preferred.

## Editing your content

Everything shown on the page — your bio, skills, projects, and work history — lives in
`client/src/data/`. Edit those files directly; **no component/JSX changes are required**.

| File | Section |
| --- | --- |
| `client/src/data/profile.js` | Hero, About, Contact |
| `client/src/data/skills.js` | Skills |
| `client/src/data/projects.js` | Projects |
| `client/src/data/experience.js` | Experience / Work history |

> **Note:** `projects.js` and `experience.js` ship with clearly-labeled `REPLACE_ME` placeholder
> entries. The PRD defines what each project/role entry should contain, but not your actual
> project names, links, or employment history — fill those in with your real details.

## Available scripts (root)

| Command | Description |
| --- | --- |
| `npm run dev` | Run client + server together (with hot reload) |
| `npm run build` | Production build of the client (`client/dist/`) |
| `npm run start:server` | Run the server in production mode |
| `npm run lint` | Lint both client and server |

## Project structure

```
myportfolio/
├── client/    React.js SPA (Vite)
├── server/    Node.js/Express API
├── docs/      Product requirements document
└── ARCHITECTURE.md
```

Full breakdown in [`ARCHITECTURE.md`](ARCHITECTURE.md).
