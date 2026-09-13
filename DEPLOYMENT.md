# 🚀 Guía de Deploy en Vercel

## ¿Por qué Vercel?

- ✅ **Gratis 24/7** - Funciona continuamente sin coste
- ✅ **Deploy automático** - Cada git push se deploya solo
- ✅ **APIs Serverless** - Puedes usar `/api/*` sin worries
- ✅ **Dominio gratis** - `tu-proyecto.vercel.app`
- ✅ **Escalabilidad** - Maneja millones de requests

## Paso 1: Preparar el repositorio

```bash
# Inicializar git si no lo has hecho
git init
git add .
git commit -m "Proyecto inicial"

# Crear repositorio en GitHub
# (ir a github.com → nuevo repo)

# Conectar local con remoto
git remote add origin https://github.com/tuusuario/catalogo-ropa.git
git branch -M main
git push -u origin main
```

## Paso 2: Registrarse en Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en "Sign up"
3. Selecciona "Continue with GitHub"
4. Autoriza Vercel en GitHub

## Paso 3: Importar proyecto

1. En Vercel dashboard, haz clic en "Add New..." → "Project"
2. Selecciona tu repositorio `catalogo-ropa`
3. Haz clic en "Import"

## Paso 4: Configurar variables de entorno

En el panel de Vercel:

1. Ve a Settings → Environment Variables
2. Agrega estas variables:

```
NEXT_PUBLIC_API_URL=https://tu-proyecto.vercel.app
```

3. Haz clic en "Save"

## Paso 5: Deploy

1. Vercel debería detectar automáticamente que es un proyecto Next.js
2. Haz clic en "Deploy"
3. ¡Listo! Tu sitio estará en `https://tu-proyecto.vercel.app`

## 📱 Verificar que todo funciona

Después del deploy, verifica:

- [ ] Página de inicio carga: `https://tu-proyecto.vercel.app`
- [ ] Catálogo funciona: `https://tu-proyecto.vercel.app/productos`
- [ ] API responde: `https://tu-proyecto.vercel.app/api/productos`
- [ ] Admin panel carga: `https://tu-proyecto.vercel.app/admin`

## 🔄 Actualizaciones futuras

Simplemente haz un push a `main`:

```bash
git add .
git commit -m "Nueva característica"
git push
```

¡Vercel se encargará automáticamente de desplegar!

## 🛠️ Debugging en Vercel

Si algo no funciona:

1. Ve a Vercel Dashboard → Deployments
2. Haz clic en el deploy fallido
3. Ve a Logs para ver los errores

## 💾 Integrar Base de Datos (Próximo paso)

Cuando quieras agregar una BD real:

1. **Opción A: Supabase (PostgreSQL gratis)**
   - Ve a [supabase.com](https://supabase.com)
   - Crea un nuevo proyecto
   - Copia las credenciales
   - Agrega a Vercel Environment Variables

2. **Opción B: MongoDB Atlas (NoSQL gratis)**
   - Ve a [mongodb.com/atlas](https://mongodb.com/atlas)
   - Crea un cluster gratis
   - Copia la connection string
   - Agrega a Vercel Environment Variables

## 📚 Recursos

- [Docs de Vercel](https://vercel.com/docs)
- [Next.js en Vercel](https://vercel.com/solutions/nextjs)
- [Variables de entorno en Vercel](https://vercel.com/docs/projects/environment-variables)

---

**¡Tu e-commerce está listo para publicarse! 🎉**
