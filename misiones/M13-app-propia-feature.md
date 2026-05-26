# M13 — App propia: feature core 🟣

**XP**: 50 · **Dificultad**: Difícil · **Badge**: 🟣 Feature Builder

## Briefing

Tu app deja de ser un esqueleto. Esta misión es el feature principal: la cosa que hace que tu app **sirva para algo**. Todo lo demás es accesorio.

## Objetivo técnico

Implementar el flujo principal de tu app, end-to-end, funcionando.

## Criterios de aceptación

- [ ] Branch `m13-feature-core`, PR a `main`
- [ ] Identificás cuál ES el feature core (1 oración: "el usuario puede X")
- [ ] El feature anda completo: input → procesamiento → output visible
- [ ] Manejo de casos: vacío, error, loading
- [ ] Mínimo 2 componentes nuevos
- [ ] Mínimo 1 uso de `useState` y 1 uso de `useEffect` (si aplica)
- [ ] Deploy actualizado en Vercel

## Hints

- Si te cuesta arrancar, dibujá el flujo en papel: "usuario hace X → app responde Y → se ve Z"
- Empezá feo. La primera versión que ande es mejor que la versión perfecta que no existe.
- Si AI te tira 200 líneas de una, pedile que te lo explique paso a paso ANTES de pegar
- Cuando algo no anda, abrí DevTools (F12) → Console → leé el error literal

## Para el PR

Explicá:
1. Cuál es el feature core en 1 oración
2. Qué parte fue más difícil y cómo la resolviste
3. Qué quedó "feo" que arreglarías si tuvieras 1 día más

## Trampa común

Hacer 3 features a medias en vez de 1 completo. **No**. Mejor 1 que ande perfecto.
