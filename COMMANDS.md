# 🛠️ Comandos Útiles

## Desarrollo

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo en puerto 3000 |
| `npm run build` | Compila la aplicación para producción |
| `npm start` | Inicia servidor en modo producción |
| `npm run lint` | Verifica errores de código con ESLint |

## Git

```bash
# Ver estado
git status

# Agregar cambios
git add .

# Hacer commit
git commit -m "Descripción del cambio"

# Enviar a GitHub
git push

# Ver historial
git log
```

## Node.js / npm

```bash
# Actualizar npm
npm install -g npm@latest

# Ver versión de Node/npm
node --version
npm --version

# Limpiar cache
npm cache clean --force

# Reinstalar todas las dependencias
rm -rf node_modules package-lock.json
npm install
```

## Docker (opcional)

```bash
# Construir imagen Docker
docker build -t catalogo-ropa .

# Ejecutar contenedor
docker run -p 3000:3000 catalogo-ropa
```

## Testing de APIs

```bash
# Obtener todos los productos
curl http://localhost:3000/api/productos

# Obtener un producto
curl http://localhost:3000/api/productos/1

# Crear producto
curl -X POST http://localhost:3000/api/productos \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Test","descripcion":"Test","precio":10,"stock":5,"talla":"S, M"}'

# Con jq (formatea JSON)
curl http://localhost:3000/api/productos | jq
```

## Vercel

```bash
# Instalar CLI de Vercel
npm install -g vercel

# Deploy a Vercel
vercel

# Ver logs en Vercel
vercel logs

# Ver información de proyecto
vercel project
```

## VS Code Shortcuts

| Shortcut | Acción |
|----------|--------|
| `Ctrl+K Ctrl+C` | Comentar línea |
| `Ctrl+K Ctrl+U` | Descomentar línea |
| `Ctrl+D` | Seleccionar palabra siguiente |
| `Ctrl+Shift+L` | Seleccionar todas las ocurrencias |
| `Ctrl+J` | Abrir terminal |
| `Ctrl+Shift+D` | Abrir debugger |
| `F5` | Iniciar/continuar debugging |
| `F10` | Step over (siguiente instrucción) |
| `F11` | Step into (entrar en función) |

---

**💡 Tip: Coloca estos comandos en un archivo `Makefile` para ejecutarlos más rápido:**

```makefile
dev:
	npm run dev

build:
	npm build

start:
	npm start

lint:
	npm run lint

install:
	npm install

clean:
	rm -rf node_modules .next build dist
	npm install

vercel-deploy:
	vercel

vercel-logs:
	vercel logs
```

Luego ejecuta: `make dev`, `make build`, etc.
