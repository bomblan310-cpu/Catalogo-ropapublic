# 📋 Instrucciones de Setup - PostgreSQL + Vercel

## 🔧 Paso 1: Instalar Dependencias

```bash
npm install
npx prisma generate
```

## 🗄️ Paso 2: Configurar PostgreSQL Local

### Opción A: PostgreSQL en tu máquina
1. Instala PostgreSQL desde https://www.postgresql.org/download/
2. Crea una base de datos:
   ```sql
   CREATE DATABASE catalogo_ropa;
   ```
3. Copia `.env.example` a `.env.local` y actualiza:
   ```env
   DATABASE_URL="postgresql://tu_usuario:tu_password@localhost:5432/catalogo_ropa"
   ```

### Opción B: PostgreSQL en Docker
```bash
docker run --name catalogo_postgres \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=catalogo_ropa \
  -p 5432:5432 \
  -d postgres:16
```

Luego en `.env.local`:
```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/catalogo_ropa"
```

## 🚀 Paso 3: Migrar Base de Datos

```bash
npx prisma migrate dev --name init
```

Este comando:
- Crea las tablas
- Genera el cliente Prisma
- Te pide que nombres la migración

## 👤 Paso 4: Crear Usuario Admin

Crea un archivo `seed.ts` en `prisma/`:

```typescript
import { prisma } from '@/lib/db';
import bcrypt from 'bcryptjs';

async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 10);
  
  const admin = await prisma.admin.upsert({
    where: { email: 'admin@catalogo.com' },
    update: {},
    create: {
      email: 'admin@catalogo.com',
      password: hashedPassword,
      nombre: 'Administrador',
    },
  });

  console.log('✅ Admin creado:', admin);
}

main();
```

Ejecuta:
```bash
npx ts-node prisma/seed.ts
```

**Usuario de prueba:**
- Email: `admin@catalogo.com`
- Password: `admin123`

## 🌐 Paso 5: Ejecutar en Desarrollo

```bash
npm run dev
```

Accede a:
- 🏪 Frontend: http://localhost:3000
- 🔐 Admin Login: http://localhost:3000/admin-login
- 📊 Dashboard: http://localhost:3000/admin

## ☁️ Paso 6: Deploy en Vercel

### 1. Push a GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git push -u origin main
```

### 2. Conecta en Vercel

1. Ve a https://vercel.com
2. Importa tu repositorio
3. En "Environment Variables", agrega:
   - `DATABASE_URL`: Tu BD PostgreSQL (puedes usar Vercel Postgres)
   - `NEXT_PUBLIC_API_URL`: https://tu-proyecto.vercel.app
   - `JWT_SECRET`: Una clave segura y larga

### 3. Crea Vercel Postgres (recomendado)
En Vercel Dashboard:
1. Ve a Storage → Create Database → Postgres
2. Copia el `DATABASE_URL`
3. En Variables de Entorno, agrega esa URL

### 4. Ejecutar Migraciones en Vercel
```bash
vercel link
vercel env pull
npx prisma migrate deploy
```

## 🛡️ Variables de Entorno Necesarias

En `.env.local` (local):
```env
DATABASE_URL="postgresql://..."
NEXT_PUBLIC_API_URL="http://localhost:3000"
JWT_SECRET="tu-clave-super-secreta-aqui"
```

En Vercel Dashboard:
```env
DATABASE_URL="postgresql://..." (Vercel Postgres)
NEXT_PUBLIC_API_URL="https://tu-dominio.vercel.app"
JWT_SECRET="tu-clave-super-secreta-aqui"
```

## ✅ Próximos Pasos

- [ ] Implementar upload de imágenes con Cloudinary o Vercel Blob
- [ ] Agregar autenticación de clientes (login/registro)
- [ ] Crear carrito de compras completo
- [ ] Implementar pasarela de pago (Stripe, Mercado Pago)
- [ ] Agregar notificaciones por email
- [ ] Estadísticas y reportes para admin
