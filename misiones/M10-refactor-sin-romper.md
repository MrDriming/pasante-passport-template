# M10 — Refactor sin romper 🟣

**XP**: 50 · **Dificultad**: Difícil · **Badge**: 🟣 Refactorer

## Briefing

Refactor = cambiar cómo el código está escrito sin cambiar lo que hace. Suena fácil. No lo es. Esta misión te enseña la regla más importante: **si refactor cambió comportamiento, ya no es refactor, es bug**.

## Objetivo técnico

Tomá tu M7 (lista filtrable) y refactorealo. La app debe verse y funcionar **idéntica** después.

## Criterios de aceptación

- [ ] Branch `m10-refactor`, PR a `main`
- [ ] Extraer al menos 2 componentes nuevos (ej: `<ListItem />`, `<FilterDropdown />`)
- [ ] Extraer al menos 1 función "pura" a su propio archivo (ej: `utils/filterList.js`)
- [ ] Renombrar al menos 3 variables a nombres más descriptivos (no `data`, `item`, `x`)
- [ ] **Cero cambios visuales o de comportamiento** (probar manual antes y después)
- [ ] Todos los commits empiezan con `refactor:`
- [ ] PR description con sección "Antes/Después" mostrando el código

## Hints

- Antes de tocar, grabá un video (o screenshots) de cómo se ve la app funcionando
- Después del refactor, grabá lo mismo y compará
- Si tenés que cambiar markup o lógica para que "se vea igual", algo rompiste
- Refactor en pasos chicos: 1 cambio → probá → commit → siguiente

## Para el PR

Explicá:
1. Por qué extraer en componentes mejora algo (¿qué exactamente?)
2. Qué es una "función pura" y por qué se prestan a extraer
3. Si hiciste un cambio y la app se rompió, ¿cómo te diste cuenta?

## Trampa común

Aprovechar el refactor para agregar features o arreglar bugs. **No lo hagas**. Si ves algo que mejorar, anotalo y hacelo en otro PR aparte.
