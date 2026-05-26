# M2 — Calculadora de propina 🟢

**XP**: 10 · **Dificultad**: Fácil · **Badge**: 🟢 If/Else Master

## Briefing

Vas a comer con amigos y nadie sabe cuánto poner de propina. Tu app resuelve eso: monto de la cuenta + cuántos son + porcentaje de propina → te dice cuánto paga cada uno.

## Objetivo técnico

Form con 3 inputs (monto, cantidad de personas, % propina), botón "Calcular", y resultado abajo.

## Criterios de aceptación

- [ ] Branch `m2-propina`, PR a `main`
- [ ] 3 inputs numéricos + botón + div de resultado
- [ ] Resultado muestra: total con propina, propina total, cuánto paga cada uno
- [ ] Si monto ≤ 0 o personas < 1 → mensaje de error, no calcular
- [ ] Propina default 10%, pero editable
- [ ] CSS decente (no defaults)
- [ ] Deploy a Vercel, URL en PR

## Hints

- `parseFloat(input.value)` para convertir string a número
- `Number.isNaN(x)` para detectar input inválido
- `total.toFixed(2)` para mostrar 2 decimales
- Operadores: `+`, `*`, `/`

## Para el PR

Explicá en "Qué entendí del código":
1. Por qué hay que usar `parseFloat` y no usar el `.value` directo
2. Qué pasa si ponés `"10" + "5"` vs `10 + 5` en JS
3. Qué hace `.toFixed(2)` y qué devuelve (string o número?)
