# Portfolio — Frontend (React)

The React.js frontend for Mark Jeferson Manalo's portfolio, built with Vite.

## Content is data-driven

All personal content lives in `src/data/` — edit these files to update the site, no JSX changes required:

| File | Controls |
| --- | --- |
| `src/data/profile.js` | Name, title, tagline, bio, contact links, resume URL |
| `src/data/skills.js` | Skills grouped by category |
| `src/data/projects.js` | Projects section (name, description, tech stack, links, impact) |
| `src/data/experience.js` | Work history timeline |

## Scripts

```bash
npm run dev       # start Vite dev server (http://localhost:51765)
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint      # run oxlint
```

## Environment variables

Copy `.env.example` to `.env` and point `VITE_API_URL` at your running backend (see `../backend`).
