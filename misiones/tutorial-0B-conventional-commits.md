# Tutorial 0.B — Conventional Commits

**Sin XP**. Obligatorio antes de M1.

## Por qué

Mensajes tipo `update`, `arreglos`, `cambios varios` no sirven a nadie. En equipos reales, el mensaje del commit es la única forma de entender meses después por qué cambiaste algo. Convention = estándar que usa medio mundo.

## Lectura obligatoria

Leé entero [docs/conventional-commits.md](../docs/conventional-commits.md). Volvé acá.

⚠️ **Prestá especial atención a la sección "Convención para el Dashboard"**. Si no commiteás con el código de misión, el dashboard no te detecta los PRs y tenés que marcarlos a mano (o pedir a tu game master que rastree).

## Ejercicio práctico

Tu game master te va a pasar un repo `commits-practica` con 5 cambios sin commitear. Tu trabajo:

1. Clonar repo
2. Identificar qué tipo es cada cambio (`feat`, `fix`, `style`, `refactor`, `docs`, `chore`)
3. Hacer 5 commits separados, uno por cambio, con mensaje correcto
4. `git log --oneline` → debe verse limpio

## Mini-quiz

Decí si cada mensaje es válido. Si no, por qué.

1. `feat: agregar boton login`
2. `Fix: arreglado bug del carrito`
3. `update README`
4. `feat(api): agregar endpoint /users y validar token`
5. `style(form): centrar inputs en mobile`
6. `WIP carrito`
7. `refactor: extraer logica de fetch a hook propio`
8. `fix(login): validar email antes de submit.`
9. `chore: bump next a 14.2`
10. `feat(todo): permitir borrar tarea con shift+click`

<details>
<summary>Respuestas</summary>

1. ✅ válido
2. ❌ mayúscula en tipo, pasado en vez de imperativo
3. ❌ falta tipo (`docs:`)
4. ❌ "y" = son dos commits
5. ✅ válido
6. ❌ WIP no es tipo válido, no commitees trabajo a medio hacer
7. ✅ válido
8. ❌ punto final
9. ✅ válido
10. ✅ válido

</details>

## Checkpoint

Mostrale al game master tu `git log --oneline` del ejercicio + respuestas del quiz.
