# M6 — Fetch a Pokémon API 🔵

**XP**: 25 · **Dificultad**: Media · **Badge**: 🔵 API Caller

## Briefing

Primera vez que tu app habla con Internet. Vas a pegarle a [pokeapi.co](https://pokeapi.co), una API pública gratis, y mostrar data real. Async + loading states + manejo de errores: el combo del mundo real.

## Objetivo técnico

Página que pide nombre o ID de Pokémon, lo busca en la API, muestra imagen + tipo + stats.

## Criterios de aceptación

- [ ] Branch `m6-pokemon`, PR a `main`
- [ ] Input + botón "Buscar"
- [ ] Mientras carga: mensaje "Cargando..." (no la página en blanco)
- [ ] Si no encuentra: "Pokémon no encontrado"
- [ ] Si encuentra: imagen, nombre capitalizado, tipos, HP, ataque, defensa
- [ ] Buscar `pikachu` o `25` debe funcionar igual
- [ ] Deploy a Vercel

## Hints

- Endpoint: `https://pokeapi.co/api/v2/pokemon/{nombre-o-id}`
- `useState` para: pokemon (data), loading (bool), error (string)
- `useEffect` o handler de click para disparar el fetch
- ```js
  const res = await fetch(url);
  if (!res.ok) throw new Error('No encontrado');
  const data = await res.json();
  ```
- Capitalizar: `nombre.charAt(0).toUpperCase() + nombre.slice(1)`

## Para el PR

Explicá:
1. Qué es `async/await` y por qué hace falta
2. Por qué necesitás 3 estados (data, loading, error) y no solo uno
3. Qué pasa si la API tarda 10 segundos (tu app se cuelga? por qué no?)
