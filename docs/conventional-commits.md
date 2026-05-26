# Conventional Commits — Cheatsheet

## Formato

```
<tipo>(<scope opcional>): <descripción imperativa en minúsculas>

[cuerpo opcional explicando el por qué]

[footer opcional: BREAKING CHANGE, Closes #12]
```

## Tipos que vas a usar

| Tipo | Cuándo | Ejemplo |
|------|--------|---------|
| `feat` | Funcionalidad nueva visible al usuario | `feat(login): agregar boton de google` |
| `fix` | Arreglar un bug | `fix(carrito): corregir total al borrar item` |
| `style` | CSS / formato. No cambia lógica | `style(header): centrar logo en mobile` |
| `refactor` | Cambio de código sin cambiar comportamiento | `refactor(api): extraer fetch a funcion aparte` |
| `docs` | Solo documentación / README | `docs: agregar instrucciones de setup` |
| `chore` | Tooling, deps, configs | `chore: actualizar dependencias` |

## Reglas

- **Imperativo**: `agregar` ✅, `agregado` ❌, `agrega` ❌
- **Minúsculas** en descripción
- **Sin punto final**
- **≤50 caracteres** la primera línea
- **Un commit = un cambio lógico**. Si usás "y" en el mensaje, son dos commits

## Ejemplos buenos ✅

```
feat(todo): permitir borrar tareas con doble click
fix(form): validar email antes de enviar
style(card): aumentar padding interno
refactor(utils): mover formatDate a su propio archivo
docs: explicar como correr en local
```

## Ejemplos malos ❌

```
update                          → ¿qué actualizaste?
arreglos varios                 → mezcla cosas, dividir
WIP                             → no commitees trabajo a medio hacer
fix: arreglado el bug del login → pasado, no imperativo
feat: Agregar boton.            → mayúscula + punto
feat(login): agregar boton de google y validar email
                                → "y" = son dos commits
```

## 🎯 Importante: convención para el Dashboard

El dashboard del pasaporte rastrea tus misiones automáticamente cuando mergeás PRs. **Para que te detecte**, el PR tiene que mencionar el código de la misión.

### Regla

El **título** o el **body** del Pull Request debe contener el código de misión como palabra completa: `M1`, `M2`, `BOSS1`, `T0A`, etc.

### Formato recomendado (en el título)

```
<tipo>(<codigo-mision>): <descripcion>
```

Ejemplos:

```
feat(m1): saludo dinamico funcionando
feat(m2): calculadora de propina con validacion
feat(m3): lista de tareas con borrar y completar
fix(boss1): corregir layout en mobile
feat(boss2): pokedex con busqueda y filtros
docs(t0a): completar tutorial de deploy
```

### Alternativa (en el body)

Si preferís título corto sin scope, mencioná el código en el body usando `Closes`:

```
Título: feat: implementar saludo dinamico
Body:
  Closes M1
  
  - Input + boton + DOM update
  - Validacion de input vacio
```

### Lista de códigos válidos

| Misión | Código a usar |
|--------|--------------|
| Tutorial Vercel | `T0A` |
| Tutorial Commits | `T0B` |
| Saludo dinámico | `M1` |
| Calculadora propina | `M2` |
| Lista de tareas | `M3` |
| Generador de memes | `BOSS1` |
| Hola Next | `M4` |
| Contador useState | `M5` |
| Fetch Pokémon | `M6` |
| Lista filtrable | `M7` |
| Mini-Pokédex | `BOSS2` |
| Bug hunt | `M8` |
| Code review cruzado | `M9` |
| Refactor sin romper | `M10` |
| App propia diseño | `M11` |
| App propia setup | `M12` |
| App propia feature | `M13` |
| App propia persistencia | `M14` |
| Deploy + Demo | `BOSS3` |
| PR a repo real | `M15` |
| Blog post final | `M16` |

### Errores comunes

```
❌ feat: hice la primera mision         → no menciona codigo
❌ feat(mision1): saludo                → es 'm1', no 'mision1'
❌ feat(M-1): saludo                    → es 'm1', sin guion
✅ feat(m1): saludo dinamico funcionando
✅ feat: implementar saludo                (con "Closes M1" en body)
```

### ¿Cómo verificar que funcionó?

1. Mergeá tu PR a `main`
2. Entrá al dashboard
3. Click "Sincronizar con GitHub" (header)
4. Si tu PR tenía el código correcto: ✨ confetti + misión marcada con link al PR
5. Si no aparece: revisá que el código esté como palabra completa en título o body

⚠️ **Misiones marcadas por GitHub no se pueden desmarcar manualmente**. Son fuente de verdad.

---

## Si te equivocaste

- **Último commit, no pusheado**: `git commit --amend -m "nuevo mensaje"`
- **Varios commits, no pusheados**: `git reset --soft HEAD~N` y volver a commitear bien (N = cuántos atrás)
- **Ya pusheado**: dejalo, hacé un commit nuevo. No reescribas historia compartida.
