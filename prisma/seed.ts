// Seed script para crear admin por defecto
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed...');

  // Crear admin de prueba
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

  console.log('✅ Admin creado/actualizado:', admin);

  // Crear productos de ejemplo
  const productos = [
    {
      nombre: 'Camiseta Básica Negra',
      descripcion: 'Camiseta de algodón 100% premium, suave y cómoda',
      precio: 29.99,
      imagen: 'https://via.placeholder.com/300x300?text=Camiseta+Negra',
      talla: JSON.stringify(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      stock: 50,
    },
    {
      nombre: 'Pantalón Jeans Clásico',
      descripcion: 'Jeans azul oscuro con fit clásico',
      precio: 49.99,
      imagen: 'https://via.placeholder.com/300x300?text=Jeans+Clasico',
      talla: JSON.stringify(['28', '30', '32', '34', '36', '38']),
      stock: 30,
    },
    {
      nombre: 'Chaqueta Casual',
      descripcion: 'Chaqueta de lona ligera, perfecta para todas las estaciones',
      precio: 79.99,
      imagen: 'https://via.placeholder.com/300x300?text=Chaqueta+Casual',
      talla: JSON.stringify(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      stock: 15,
    },
  ];

  for (const prod of productos) {
    const producto = await prisma.producto.upsert({
      where: { nombre: prod.nombre },
      update: {},
      create: {
        nombre: prod.nombre,
        descripcion: prod.descripcion,
        precio: prod.precio,
        imagen: prod.imagen,
        talla: prod.talla,
        stock: prod.stock,
      } as any,
    });
    console.log('✅ Producto creado:', producto.nombre);
  }

  console.log('🎉 Seed completado!');
}

main()
  .catch((e) => {
    console.error('❌ Error en seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
