#!/bin/bash
set -e

DIR="commits-practica"

if [ -d "$DIR" ]; then
  echo "❌ Ya existe la carpeta '$DIR'. Borrala primero si querés empezar de cero."
  exit 1
fi

mkdir "$DIR" && cd "$DIR"
git init -b main

# ── Proyecto base ──

cat > app.js << 'HEREDOC'
function login(user, pass) {
  if (user = "admin") {
    return true;
  }
  return false;
}

function getUsers() {
  fetch("/api/users")
    .then(res => res.json())
    .then(data => console.log(data));
}

module.exports = { login, getUsers };
HEREDOC

cat > styles.css << 'HEREDOC'
.container {
  display: flex;
  justify-content: center;
}
.btn { background: blue; color: white; }
.card { border: 1px solid #ccc;padding: 16px;margin:8px }
HEREDOC

cat > README.md << 'HEREDOC'
# Mi App

Una app de ejemplo para gestionar usuarios.
HEREDOC

git add -A && git commit -m "init: proyecto base"

# ── 5 cambios sin commitear ──

# 1. fix: comparacion rota (= en vez de ===)
sed -i 's/user = "admin"/user === "admin"/' app.js

# 2. feat: nueva constante
sed -i '/module.exports/i\const MAX_USERS = 50;' app.js
sed -i 's/module.exports = { login, getUsers };/module.exports = { login, getUsers, MAX_USERS };/' app.js

# 3. refactor: getUsers a async/await
sed -i '/function getUsers/,/^}/c\
async function getUsers() {\
  const res = await fetch("/api/users");\
  const data = await res.json();\
  console.log(data);\
}' app.js

# 4. style: reformatear CSS
cat > styles.css << 'HEREDOC'
.container {
  display: flex;
  justify-content: center;
}

.btn {
  background: blue;
  color: white;
}

.card {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 8px;
}
HEREDOC

# 5. docs: agregar secciones al README
cat >> README.md << 'HEREDOC'

## Instalacion

```bash
npm install
npm run dev
```

## Uso

Abrir `http://localhost:3000` en el navegador.
HEREDOC

echo ""
echo "✅ Repo 'commits-practica' listo."
echo ""
echo "Tu trabajo:"
echo "  1. cd commits-practica"
echo "  2. git diff → ver los 5 cambios"
echo "  3. Hacer 5 commits separados con mensajes conventional commits"
echo "  4. git log --oneline → debe verse limpio"
echo ""
echo "Pista: usá 'git add -p' para agregar cambios parciales de un mismo archivo."
