# M4 — Hola Next 🟢

**XP**: 10 · **Dificultad**: Fácil · **Badge**: 🟢 Next Initiate

## Briefing

Empieza Acto 2. Hasta ahora, HTML+JS suelto. Ahora entrás a Next.js: un framework que arma el HTML por vos, te da estructura, y es lo que usa medio mundo en producción.

## Objetivo técnico

Proyecto Next.js nuevo con 2 páginas: home (`/`) y about (`/about`), navegación entre ellas, y un componente reutilizable.

## Criterios de aceptación

- [ ] Branch `m4-hola-next`, PR a `main`
- [ ] Proyecto creado con `npx create-next-app@latest` (app router, JavaScript o TypeScript, tu elección)
- [ ] Página home en `app/page.js` con tu nombre y un saludo
- [ ] Página about en `app/about/page.js` con bio corta
- [ ] Componente `<Header />` reutilizable con links a ambas páginas (usar `next/link`)
- [ ] Estilos mínimos con CSS modules o Tailwind (tu elección)
- [ ] Deploy a Vercel (Vercel detecta Next.js solo)

## Hints

- `npx create-next-app@latest mi-app`
- App router = carpetas son rutas. `app/about/page.js` → `/about`
- `import Link from 'next/link'` y `<Link href="/about">About</Link>`
- Componente: archivo nuevo `components/Header.js`, `export default function Header() { ... }`

## Para el PR

Explicá:
1. Diferencia entre `<a href>` y `<Link>` de Next (qué hace distinto)
2. Por qué los componentes se ponen en su propio archivo
3. Qué hace `npm run dev` vs `npm run build`
