# M3 — Lista de tareas en memoria 🔵

**XP**: 25 · **Dificultad**: Media · **Badge**: 🔵 Array Wizard

## Briefing

Clásico de clásicos: una to-do list. Vas a usar arrays de verdad por primera vez, y vas a entender por qué el DOM "se actualiza solo" cuando cambia tu data (spoiler: no se actualiza solo, vos lo actualizás).

## Objetivo técnico

App con input + botón "Agregar", lista de tareas debajo, cada tarea con botón "Borrar" y checkbox "Completada".

## Criterios de aceptación

- [ ] Branch `m3-todo`, PR a `main`
- [ ] Agregar tarea con Enter o click en botón
- [ ] Marcar como completada → texto tachado
- [ ] Borrar tarea → desaparece de la lista
- [ ] Contador abajo: "3 tareas, 1 completada"
- [ ] No agregar tareas vacías
- [ ] Deploy a Vercel

## Hints

- Mantené un array `let tareas = []` con la data
- Función `render()` que limpia el contenedor y lo vuelve a dibujar leyendo del array
- Cada vez que cambies el array, llamá `render()` de nuevo
- `tareas.push({texto, completada})` para agregar
- `tareas.filter(t => t !== tareaABorrar)` para borrar
- `tareas.filter(t => t.completada).length` para contar

## Para el PR

Explicá:
1. Por qué guardás `{texto, completada}` como objeto en vez de solo el string
2. Qué diferencia hay entre `filter` y `map`
3. Qué pasa si refrescás la página (spoiler: se pierde todo, ¿por qué?)
