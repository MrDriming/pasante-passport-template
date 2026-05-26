# M9 — Code review cruzado 🔵

**XP**: 25 · **Dificultad**: Media · **Badge**: 🔵 Reviewer

## Briefing

Hasta ahora vos abrías PR y el game master revisaba. Ahora se invierte: el otro pasante abre PR, vos revisás. Y viceversa. Revisar bien es habilidad de senior.

## Objetivo técnico

Cada uno toma su Boss 2 (Pokédex) y abre 1 PR con una mejora chica (agregar feature, mejorar estilo, lo que quiera). El otro pasante hace code review.

## Criterios de aceptación

- [ ] Branch `m9-mejora-pokedex`, PR a `main`
- [ ] PR tiene al menos 1 commit con cambio real
- [ ] El otro pasante deja **≥3 comentarios** en el PR (en líneas específicas, no genéricos)
- [ ] Al menos 1 comentario es pregunta ("¿por qué hiciste esto así?")
- [ ] Al menos 1 comentario es sugerencia constructiva
- [ ] Autor del PR responde cada comentario (con cambio o explicación de por qué no)
- [ ] PR mergeado después de resolver comentarios

## Reglas de buen reviewer

- ✅ "¿Considerar usar `.map` acá en vez del `for`? Más idiomático en React"
- ✅ "Este componente está haciendo 3 cosas, ¿lo dividirías?"
- ✅ "¿Qué pasa si la API devuelve un array vacío?"
- ❌ "está mal" (sin decir por qué)
- ❌ "yo lo hubiese hecho distinto" (vago)
- ❌ Comentarios sobre la persona, no el código

## Para el PR

En description, una vez mergeado, agregá sección "Lecciones aprendidas":
1. Qué comentario del reviewer te hizo cambiar de opinión
2. Qué te costó como reviewer (dar feedback es difícil)
3. Una cosa que cambiarías de cómo escribiste el código original
