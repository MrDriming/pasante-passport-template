# M12 — App propia: setup y landing 🔵

**XP**: 25 · **Dificultad**: Media · **Badge**: 🔵 Foundation

## Briefing

Pasaste del mockup al código. Esta misión es el esqueleto: estructura del proyecto, layout, landing page, navegación. Sin features todavía.

## Objetivo técnico

Next.js corriendo con: layout global, header, footer, landing decente, rutas vacías de las otras pantallas (placeholders).

## Criterios de aceptación

- [ ] Branch `m12-setup`, PR a `main` del repo de tu app
- [ ] Proyecto Next.js creado (app router)
- [ ] `app/layout.js` con `<Header />` y `<Footer />` reutilizables
- [ ] Landing (`app/page.js`) con:
  - Hero (título + subtítulo + CTA)
  - 3 cards/secciones explicando features
  - Diseño responsive (probá en celular)
- [ ] Cada otra pantalla del mockup tiene su ruta creada (aunque sea `<h1>Próximamente</h1>`)
- [ ] CSS con Tailwind o CSS Modules (consistente, no mezclado)
- [ ] Deploy a Vercel con URL en README

## Hints

- Tailwind se setea con `--tailwind` al crear el proyecto Next, o seguís docs después
- Componente Header: links con `<Link>` a cada ruta
- Para mobile: empezá mobile-first, después agregás `md:` o `@media`
- Tipografía: importá 1 sola fuente buena (Google Fonts) y usala consistente

## Para el PR

Explicá:
1. Estructura de carpetas: dónde puso cada cosa y por qué
2. Decisión de Tailwind vs CSS Modules (cuál elegiste y por qué)
3. Una pantalla que no quedó como en el mockup y por qué cambió
