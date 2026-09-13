# 💻 Guía de Desarrollo

## Requisitos Previos

- Node.js 18+ ([descargar](https://nodejs.org))
- npm o yarn
- Git
- VS Code (recomendado)

## 🚀 Inicio Rápido

### 1. Instalar dependencias

```bash
npm install
```

### 2. Ejecutar servidor de desarrollo

```bash
npm run dev
```

El servidor estará disponible en `http://localhost:3000`

### 3. Editar archivos

- **Páginas**: `src/app/*.tsx`
- **APIs**: `src/app/api/**/*.ts`
- **Estilos**: `src/app/globals.css`
- **Componentes**: `src/components/*.tsx`

Los cambios se reflejan automáticamente (Hot Reload).

## 📂 Estructura de Carpetas

```
CatalogoRopa/
├── src/
│   ├── app/                    # Aplicación Next.js (App Router)
│   │   ├── api/               # API Routes
│   │   │   └── productos/
│   │   │       ├── route.ts   # GET/POST /api/productos
│   │   │       └── [id]/
│   │   │           └── route.ts # GET /api/productos/[id]
│   │   ├── admin/             # Página admin
│   │   │   └── page.tsx
│   │   ├── productos/         # Página de catálogo
│   │   │   └── page.tsx
│   │   ├── layout.tsx         # Layout principal
│   │   ├── page.tsx           # Página de inicio
│   │   └── globals.css        # Estilos globales
│   ├── components/            # Componentes React reutilizables
│   └── lib/                   # Funciones utilitarias
│       ├── types.ts           # TypeScript interfaces
│       └── utils.ts           # Funciones helper
├── public/                     # Archivos estáticos
├── .env.local                 # Variables de entorno local
├── package.json               # Dependencias
├── tsconfig.json             # Config TypeScript
├── next.config.js            # Config Next.js
└── tailwind.config.ts        # Config Tailwind CSS
```

## 🔍 Debugging

### VS Code Debugger

1. Abre el archivo que quieres debuggear
2. Presiona `F5` o ve a Run → Start Debugging
3. Coloca breakpoints haciendo clic en el número de línea

### Console Browser

```javascript
// En componentes React
console.log('Debug:', data);
console.warn('Advertencia:', error);
console.error('Error:', error);
```

### React DevTools

Chrome Extension para debuggear componentes React:
- [React DevTools en Chrome](https://chrome.google.com/webstore/detail/react-developer-tools)

## 🧪 Testing APIs

Usa el archivo `catalogo.http` para testing de APIs:

1. Instala la extensión "REST Client" en VS Code
2. Abre `catalogo.http`
3. Haz clic en "Send Request" sobre cada endpoint

O usa curl:

```bash
# GET todos los productos
curl http://localhost:3000/api/productos

# GET un producto específico
curl http://localhost:3000/api/productos/1

# POST nuevo producto
curl -X POST http://localhost:3000/api/productos \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Producto Nuevo","descripcion":"Desc","precio":29.99,"stock":50,"talla":"S, M, L"}'
```

## 📝 Agregar una Nueva Página

1. Crea una carpeta en `src/app/nombre-pagina`
2. Dentro crea `page.tsx`:

```typescript
export default function MiPagina() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold">Mi Página</h1>
    </main>
  );
}
```

3. Accede a `http://localhost:3000/nombre-pagina`

## 🔌 Agregar una Nueva API Route

1. Crea `src/app/api/nombre-endpoint/route.ts`

```typescript
export async function GET() {
  return Response.json({ mensaje: "Hola" });
}

export async function POST(request: Request) {
  const data = await request.json();
  return Response.json({ recibido: data }, { status: 201 });
}
```

2. Accede a `http://localhost:3000/api/nombre-endpoint`

## 🎨 Personalizar Estilos

### Tailwind CSS

El proyecto usa Tailwind. Edita `tailwind.config.ts`:

```typescript
export const colors = {
  primary: '#1e40af',    // Cambiar color primario
  secondary: '#dc2626',  // Cambiar color secundario
}
```

Luego en componentes:

```tsx
<button className="bg-primary text-white">
  Mi Botón
</button>
```

### CSS Custom

En `src/app/globals.css`:

```css
:root {
  --color-primary: #1e40af;
  --color-secondary: #dc2626;
}
```

## 📦 Agregar Dependencias

```bash
# npm
npm install nombre-paquete

# o yarn
yarn add nombre-paquete
```

Verifica que se agregue a `package.json`.

## 🐛 Troubleshooting

| Problema | Solución |
|----------|----------|
| `Cannot find module` | Ejecuta `npm install` |
| Puerto 3000 en uso | Usa `npm run dev -- -p 3001` |
| Estilos no se cargan | Reinicia el servidor: `Ctrl+C` y `npm run dev` |
| Git no reconoce cambios | Ejecuta `git status` |

## 📚 Recursos

- [Documentación Next.js](https://nextjs.org/docs)
- [Documentación React](https://react.dev)
- [Documentación Tailwind](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**¡Feliz desarrollo! 🚀**
