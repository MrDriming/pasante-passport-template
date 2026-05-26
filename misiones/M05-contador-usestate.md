# M5 — Contador con useState 🔵

**XP**: 25 · **Dificultad**: Media · **Badge**: 🔵 State Handler

## Briefing

Tu primer `useState`. Es THE hook de React. Si lo entendés bien, entendés el 50% de React. Vas a hacer un contador, pero con twists para que no sea solo `setCount(count + 1)`.

## Objetivo técnico

Componente `<Counter />` con botones +/- , reset, límite máximo configurable.

## Criterios de aceptación

- [ ] Branch `m5-counter`, PR a `main` (mismo repo de M4 o nuevo, tu elección)
- [ ] Botones `+`, `-`, `Reset`
- [ ] Counter no baja de 0 (botón `-` deshabilitado en 0)
- [ ] Input numérico para setear "límite máximo", counter no pasa de ahí
- [ ] Cuando llega al máximo: mensaje "¡Llegaste al límite!" y botón `+` deshabilitado
- [ ] Botón "Sumar 10" que suma de a 10 (cuidado con el límite)
- [ ] Deploy a Vercel

## Hints

- `const [count, setCount] = useState(0)`
- `const [max, setMax] = useState(100)`
- Para deshabilitar botón: `<button disabled={count === 0}>`
- **OJO**: nunca hagas `count = count + 1`. Siempre `setCount(count + 1)`. Mejor aún: `setCount(c => c + 1)`

## Para el PR

Explicá:
1. Por qué `setCount(count + 1)` y no `count = count + 1`
2. Diferencia entre `setCount(count + 1)` y `setCount(c => c + 1)` (Googleá "stale state React")
3. Por qué `useState(0)` y no `useState()` sin nada
