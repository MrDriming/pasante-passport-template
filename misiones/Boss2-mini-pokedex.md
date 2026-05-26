# Boss 2 — Mini-Pokédex 🏆

**XP**: 100 · **Dificultad**: Boss · **Badge**: 🏆 Pokémon Master

## Briefing

Cerrás Acto 2. Juntás M6 + M7 en una sola app: lista de los primeros 151 Pokémon, buscables, clickeables, con vista de detalle. Es la primera app que se parece a algo "de verdad".

## Objetivo técnico

Next.js app con:
- Home: grid de Pokémon (imagen + nombre) con búsqueda y filtro por tipo
- Página `/pokemon/[id]`: detalle (stats, tipos, habilidades, descripción)

## Criterios de aceptación

- [ ] Branch `boss2-pokedex`, PR a `main`
- [ ] Al cargar home, fetch a `https://pokeapi.co/api/v2/pokemon?limit=151`
- [ ] Grid responsive de cards (≥3 columnas en desktop, 2 en tablet, 1 en mobile)
- [ ] Cada card: sprite + nombre + número (#001, #002...)
- [ ] Input de búsqueda en vivo (filtra cards visibles)
- [ ] Filtro por tipo (water, fire, etc) — dropdown o botones
- [ ] Click en card → navega a `/pokemon/[id]`
- [ ] Página detalle: imagen grande, stats (HP, ataque, etc) con barras visuales, tipos con colores
- [ ] Botón "Volver" en detalle
- [ ] Loading state en ambas páginas
- [ ] Deploy a Vercel

## Hints

- App router de Next: `app/pokemon/[id]/page.js` recibe `params.id`
- Para colores de tipo: hacé un objeto `{fire: '#F08030', water: '#6890F0', ...}`
- Sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png`
- Barra de stat: `<div style={{width: `${valor}%`}} />` con background de color
- Detalle requiere segundo fetch al endpoint individual del Pokémon

## Para el PR

Explicá:
1. Cómo funciona la ruta dinámica `[id]` en Next
2. Por qué hacés un fetch en home y otro en detalle (no podés reusar?)
3. Una cosa que te hubiese gustado hacer y no llegaste

## Premio

🏆 + URL para mostrar. Si tu pokédex es la más linda de las dos, ganás bonus orgullo.
