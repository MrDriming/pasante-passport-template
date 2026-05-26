# M1 — Saludo dinámico 🟢

**XP**: 10 · **Dificultad**: Fácil · **Badge**: 🟢 Hello World

## Briefing

Tu primera misión real. Un usuario llega a tu página, escribe su nombre, aprieta un botón, y la página le saluda. Suena trivial pero te va a hacer tocar las 3 patas del browser: HTML (estructura), CSS (cómo se ve), JS (qué hace).

## Objetivo técnico

Página HTML con un `<input>`, un `<button>` y un `<div>` vacío. Al apretar el botón, el div muestra "Hola, {nombre}!".

## Criterios de aceptación

- [ ] Repo nuevo en GitHub, branch `m1-saludo`, PR a `main`
- [ ] Si el input está vacío y aprietan el botón, mostrar "Por favor escribí tu nombre" (en rojo o similar)
- [ ] El saludo desaparece si vacían el input y aprietan otra vez
- [ ] CSS mínimo: que no sea Times New Roman blanco con borde por defecto. Algo de cariño.
- [ ] Deploy a Vercel funcionando, URL en el PR description

## Hints

- Para escuchar el click: `boton.addEventListener('click', () => { ... })`
- Para leer el input: `input.value`
- Para escribir en el div: `div.textContent = '...'`
- Para condicional: `if (input.value === '') { ... } else { ... }`

## Permitido / prohibido

- ✅ Usar AI para pedir explicación de qué hace cada línea
- ✅ Copiar la estructura HTML básica de algún ejemplo
- ❌ Pedirle a AI "hacé toda la misión M1" y pegarlo sin entender
- ❌ Usar frameworks (React, Vue, etc) todavía

## Para el PR

En la sección "Qué entendí del código" del template, explicá:
1. Qué hace `addEventListener` y por qué le pasamos una función
2. Diferencia entre `input.value` y `input.textContent`
3. Por qué el saludo no aparece si refrescás la página

---

*Cuando mergee tu PR, ganaste el badge 🟢 Hello World. Marcalo en el README del pasaporte.*
