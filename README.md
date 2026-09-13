# 👕 Catálogo Ropa - E-commerce

Un e-commerce moderno de ropa construido con **Next.js 15**, **TypeScript** y **Tailwind CSS**.

## 🚀 Características

- ✅ Frontend moderno con React 19 y Next.js 15
- ✅ Backend serverless con API Routes de Next.js
- ✅ Estilos con Tailwind CSS
- ✅ TypeScript para seguridad de tipos
- ✅ Optimizado para Vercel (deploy gratis 24/7)
- ✅ Admin panel para gestionar productos
- ✅ Catálogo de productos responsive

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── api/               # API Routes
│   │   └── productos/     # Endpoints de productos
│   ├── admin/             # Página admin
│   ├── productos/         # Catálogo de productos
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   └── globals.css        # Estilos globales
├── components/            # Componentes reutilizables
└── lib/                   # Utilidades y funciones

```

## 🛠️ Instalación

1. **Clonar el repositorio o crear el proyecto:**
   ```bash
   cd CatalogoRopa
   npm install
   ```

2. **Configurar variables de entorno:**
   
   Copia `.env.local.example` a `.env.local` y agrega tus variables:
   ```bash
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

3. **Ejecutar en desarrollo:**
   ```bash
   npm run dev
   ```
   
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🌐 Rutas API

### Productos

**GET** `/api/productos` - Obtener todos los productos
```bash
curl http://localhost:3000/api/productos
```

**GET** `/api/productos/[id]` - Obtener un producto específico
```bash
curl http://localhost:3000/api/productos/1
```

**POST** `/api/productos` - Crear un nuevo producto
```bash
curl -X POST http://localhost:3000/api/productos \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Producto Nuevo",
    "descripcion": "Descripción...",
    "precio": 29.99,
    "stock": 50,
    "talla": "XS, S, M, L, XL"
  }'
```

## 📄 Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Página de inicio |
| `/productos` | Catálogo de productos |
| `/admin` | Panel de administración |

## 🚀 Deploy en Vercel

Este proyecto está optimizado para **Vercel**. El deploy es completamente gratis.

### Pasos:

1. **Conectar repositorio a Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Conecta tu cuenta de GitHub
   - Importa este repositorio

2. **Configurar variables de entorno:**
   - En Vercel dashboard → Settings → Environment Variables
   - Agrega las variables necesarias

3. **Deploy automático:**
   - Cada push a `main` se despliega automáticamente
   - Tu sitio estará en: `https://tu-proyecto.vercel.app`

## 📦 Dependencias

- **Next.js 15** - Framework React
- **React 19** - Librería UI
- **TypeScript** - Lenguaje tipado
- **Tailwind CSS** - Framework CSS
- **Axios** - Cliente HTTP
- **ESLint** - Linter

## 🔧 Comandos

```bash
npm run dev      # Iniciar servidor de desarrollo
npm run build    # Compilar para producción
npm start        # Iniciar servidor de producción
npm run lint     # Ejecutar ESLint
```

## 💡 Próximas Mejoras

- [ ] Integrar base de datos (Supabase/PostgreSQL)
- [ ] Autenticación de usuarios
- [ ] Carrito de compras
- [ ] Sistema de pagos (Stripe)
- [ ] Búsqueda y filtros
- [ ] Reseñas de productos
- [ ] Notificaciones por email

## 📝 Licencia

Este proyecto está bajo la licencia MIT.

---

**⚡ ¡Listo para vender en línea! Deploy en Vercel en menos de 1 minuto.**
