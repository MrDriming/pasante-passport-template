# M14 — App propia: persistencia 🟣

**XP**: 50 · **Dificultad**: Difícil · **Badge**: 🟣 Data Keeper

## Briefing

Hasta ahora, si refrescás la página, se pierde todo. Esta misión arregla eso. Empezás con localStorage (fácil, vive en el browser) y si te alcanza el tiempo, probás Supabase (real, vive en la nube).

## Objetivo técnico

Que los datos persistan entre refresh. Mínimo localStorage. Bonus: Supabase.

## Criterios de aceptación (mínimo)

- [ ] Branch `m14-persistencia`, PR a `main`
- [ ] Al cambiar estado relevante, guardar en localStorage
- [ ] Al cargar la página, leer de localStorage
- [ ] Si no hay nada guardado, usar default (no romper)
- [ ] Botón "Borrar todo" que limpia localStorage
- [ ] Probar: cargás data → cerrás pestaña → abrís de nuevo → la data está

## Criterios bonus (+50 XP extra)

- [ ] Migrar a Supabase: cuenta gratis, tabla, fetch desde Next
- [ ] Manejo de errores de red
- [ ] Loading state al sincronizar
- [ ] **No exponer keys**: usar `.env.local` y `NEXT_PUBLIC_*` solo para lo público

## Hints localStorage

```js
// Guardar
localStorage.setItem('mi-app-data', JSON.stringify(misDatos));

// Leer
const guardado = localStorage.getItem('mi-app-data');
const datos = guardado ? JSON.parse(guardado) : [];

// Borrar
localStorage.removeItem('mi-app-data');
```

⚠️ **Cuidado en Next**: `localStorage` no existe en server. Usá `useEffect` para acceder solo en cliente, o chequeá `typeof window !== 'undefined'`.

## Hints Supabase (bonus)

1. Cuenta en [supabase.com](https://supabase.com), proyecto nuevo
2. Crear tabla con UI
3. Copiar URL + anon key a `.env.local`
4. `npm install @supabase/supabase-js`
5. Cliente: `createClient(url, key)`
6. Query: `await supabase.from('tabla').select('*')`

## Para el PR

Explicá:
1. Por qué `localStorage` no funciona en server-side rendering
2. Diferencia entre localStorage y una base de datos real
3. Si hiciste Supabase: por qué `NEXT_PUBLIC_*` para algunas keys y no para otras
