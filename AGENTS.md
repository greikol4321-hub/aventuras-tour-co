# AGENTS.md

## Stack
Next.js 15 App Router, TypeScript, Tailwind CSS v4, framer-motion, @phosphor-icons/react, swiper.

## Commands
```
npm run dev      # Dev server
npm run build    # Production build
npm run start    # Start prod server
npm run lint     # ESLint (next/core-web-vitals + next/typescript)
```
No tests, no typecheck script. `npm run lint` is the only verification step.

## Critical: `"use client"` required
`@phosphor-icons/react` uses `createContext` internally. Any component importing it **must** have `"use client"` at the top. Without it, build fails with `createContext is not a function`.

## Project structure
```
src/
  app/           → Routes (App Router)
    tours/[slug] → Dynamic tour detail route
    contacto/    → Contact page
  components/    → Reusable components (all "use client")
  data/          → Static tour data (src/data/tours.ts)
  config.ts      → Env var access (whatsapp, contact, mapUrl)
```

## Conventions
- Path alias: `@/*` → `./src/*`
- Colors: use Tailwind theme vars (`brand-*`, `earth-*`, `sky-*`, `leaf-*`). No hardcoded colors.
- All data is static in `src/data/tours.ts`. No backend, no API routes, no auth.
- Forms log to console only. No backend integration yet.
- Images: Unsplash URLs configured in `next.config.ts` `remotePatterns`.

## Env vars
Copy `.env.example` to `.env`. All prefixed `NEXT_PUBLIC_*`. See `.env.example` for full list.

## Docs
Detailed architecture docs in `docs/contexto/` (Spanish). Read `arquitectura.md` and `decisiones.md` for design rationale.

## Known issues
- Unsplash image URLs may break. Replace with own images before production.
- ESLint warns on `<img>` usage in TourCard.tsx (non-blocking).

## Delegación a agentes
Cuando la tarea tiene múltiples pasos independientes, delegar a agentes paralelos con `task`:
- **Tareas de código** (leer, editar, escribir): usar `subagent_type: general`
- **Tareas de búsqueda/exploración**: usar `subagent_type: explore`
- Lanzar tantos en paralelo como sea posible (múltiples tool calls en un solo mensaje)
- Cada agente recibe un prompt claro con: contexto, archivos a modificar, y criterio de éxito
- No delegar tareas simples de una sola línea o un solo archivo
