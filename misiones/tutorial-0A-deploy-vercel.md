# Tutorial 0.A — Deploy a Vercel

**Sin XP**. Obligatorio antes de M1.

## Por qué

Hasta ahora le pediste cosas a v0 pero todo vivía en tu compu o en la preview de v0. Ahora vas a aprender a poner una página tuya en Internet, con URL real, que cualquier persona pueda abrir desde el celular.

## Pasos

1. **Cuenta Vercel**: andá a [vercel.com](https://vercel.com), click "Sign up", elegí "Continue with GitHub". Aceptá los permisos.

2. **Repo nuevo en GitHub**:
   - Nombre: `mi-primera-deploy`
   - Public ✅
   - "Add a README" ✅
   - Create repository

3. **Crear `index.html` desde la web de GitHub**:
   - Click "Add file → Create new file"
   - Nombre: `index.html`
   - Contenido:
     ```html
     <!DOCTYPE html>
     <html>
       <head><title>Mi primera deploy</title></head>
       <body>
         <h1>Hola Vercel 👋</h1>
       </body>
     </html>
     ```
   - Commit con mensaje: `feat: agregar landing inicial`
   - Commit directly to `main`

4. **Importar en Vercel**:
   - Dashboard Vercel → "Add New" → "Project"
   - Elegí `mi-primera-deploy`
   - Click "Deploy" (no toques nada más)
   - Esperá ~30 segundos
   - Click en la URL `.vercel.app` → debe abrir tu página

5. **Probar redeploy automático**:
   - En GitHub, editá `index.html`, cambiá `Hola Vercel` por `Hola mundo`
   - Commit con mensaje: `style: cambiar saludo de landing`
   - Volvé a Vercel → vas a ver un build nuevo corriendo
   - Cuando termine, refrescá la URL → cambió solo

6. **Probar preview deployments** (esto es ✨ magia):
   - En GitHub, click en el branch dropdown (donde dice `main`) → escribí `cambio-color` → "Create branch"
   - Editá `index.html` desde ese branch, agregá `<style>body { background: lightblue; }</style>` dentro del `<head>`
   - Commit con mensaje: `style: agregar fondo celeste`
   - GitHub te va a ofrecer "Compare & pull request" → click → "Create pull request"
   - En el PR vas a ver un comentario de Vercel con una URL distinta a la de producción → abrila → tu cambio está ahí pero NO en producción
   - Click "Merge pull request" → "Confirm merge"
   - Ahora la URL de producción tiene el fondo celeste

## Checkpoint

Antes de pasar a M1, mostrale al game master:
- ✅ Tu URL `.vercel.app` viva
- ✅ El comentario de Vercel en el PR que mergeaste (con la preview URL)

## Glosario rápido

- **Build**: Vercel agarra tu código y lo prepara para servir
- **Deploy**: lo pone disponible en una URL
- **Production**: la URL principal (`tu-proyecto.vercel.app`)
- **Preview**: una URL temporal por cada PR, para probar sin afectar producción
