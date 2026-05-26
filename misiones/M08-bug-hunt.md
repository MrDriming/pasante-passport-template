# M8 — Bug hunt 🔵

**XP**: 25 · **Dificultad**: Media · **Badge**: 🔵 Bug Slayer

## Briefing

Hasta ahora escribiste código nuevo. En trabajos reales, el 70% del tiempo lo pasás leyendo código ajeno y arreglándolo. Esta misión es eso.

## Objetivo técnico

El game master te pasa un repo `bug-hunt-{tu-nombre}` con 5 bugs intencionales. Tu trabajo: encontrar, arreglar, abrir 1 PR por bug.

## Criterios de aceptación

- [ ] Clonar repo asignado
- [ ] Identificar los 5 bugs (pueden ser visuales, lógicos, de UX)
- [ ] **1 branch + 1 PR por bug** (no agrupes)
- [ ] Cada PR con mensaje conventional `fix(scope): ...`
- [ ] PR description explica: qué bug encontraste, cómo lo reprodujiste, qué cambiaste, por qué
- [ ] Los 5 PRs mergeados

## Hints

- Usá `git blame` o `git log -p archivo.js` para ver historia del archivo
- Reproducí el bug primero (manualmente en el browser) antes de tocar código
- Si no podés reproducir, no es un bug, es otra cosa
- Cambios mínimos. No refactorees al pasar.

## Para el PR

Cada PR debe responder:
1. Pasos para reproducir el bug
2. Qué esperabas que pase vs qué pasaba
3. Por qué tu cambio lo arregla (no solo "lo arregla")

## Bonus

Si encontrás un sexto bug no documentado → +25 XP extra.
