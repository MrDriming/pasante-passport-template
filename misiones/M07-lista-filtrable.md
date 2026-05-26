# M7 — Lista filtrable 🔵

**XP**: 25 · **Dificultad**: Media · **Badge**: 🔵 Filter Master

## Briefing

Patrón clásico que vas a usar mil veces: input de búsqueda que filtra una lista en vivo. Vas a aprender "lifting state" sin querer.

## Objetivo técnico

App con array fijo de ~20 items (películas, libros, lo que quieras), input de búsqueda arriba, lista filtrada abajo en vivo.

## Criterios de aceptación

- [ ] Branch `m7-filter`, PR a `main`
- [ ] Array hardcoded de ≥20 objetos `{titulo, año, genero}`
- [ ] Input arriba, filtra por título (case-insensitive)
- [ ] Mostrar cantidad: "5 resultados"
- [ ] Si no hay matches: "No se encontró nada"
- [ ] Dropdown extra para filtrar por género (todos / acción / drama / etc)
- [ ] Componente `<SearchBar />` separado del componente `<List />`
- [ ] Deploy a Vercel

## Hints

- ⚠️ El state de la búsqueda vive en el componente **padre**, no en `<SearchBar />`. Si no, `<List />` no se entera de los cambios.
- Padre tiene: `const [query, setQuery] = useState('')`
- Pasa `query` a `<List />` como prop
- Pasa `setQuery` a `<SearchBar />` como prop (`onChange`)
- Filter: `lista.filter(p => p.titulo.toLowerCase().includes(query.toLowerCase()))`

## Para el PR

Explicá:
1. Por qué el `useState` está en el padre y no en `<SearchBar />`
2. Qué es "lifting state up"
3. Por qué `toLowerCase()` en ambos lados de la comparación
