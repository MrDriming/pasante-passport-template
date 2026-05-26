# Boss 1 — Generador de memes 🏆

**XP**: 100 · **Dificultad**: Boss · **Badge**: 🏆 Meme Lord

## Briefing

Cerrás el Acto 1 con esto. App que toma una imagen (URL o upload), te deja escribir texto arriba y abajo, y muestra el meme. Vas a combinar todo lo aprendido + algo de CSS posicionamiento.

## Objetivo técnico

App con: input de URL de imagen (o file upload), 2 inputs de texto (top, bottom), preview del meme.

## Criterios de aceptación

- [ ] Branch `boss1-memes`, PR a `main`
- [ ] Imagen carga al pegar URL o subir archivo
- [ ] Texto arriba y abajo, blanco con borde negro (estilo meme clásico)
- [ ] Texto se actualiza en vivo mientras tipeás (sin botón "generar")
- [ ] Botón "Descargar meme" (usar canvas o screenshot)
- [ ] 3 plantillas pre-cargadas (drake, distracted boyfriend, etc) elegibles con click
- [ ] CSS responsive (anda en mobile)
- [ ] Deploy a Vercel

## Hints

- Imagen: `<img src="..." />`, texto encima con `position: absolute`
- Listener `input` (no `change`) para update en vivo
- Para descargar: librería `html2canvas` o API Canvas nativa
- Plantillas: array de objetos `{nombre, url}` y `.map()` para renderizar botones

## Para el PR

Explicá:
1. Cómo posicionás el texto sobre la imagen (qué CSS usaste y por qué)
2. Diferencia entre eventos `input` y `change`
3. Cómo funciona la descarga (qué hace `html2canvas` o la API que usaste)

## Premio

Badge 🏆 + URL del meme generator a compartir con el equipo. Bonus si alguien lo usa para hacer un meme del game master.
