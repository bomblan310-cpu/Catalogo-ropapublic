// API: Crear/Actualizar Productos
import { prisma } from '@/lib/db';
import { verifyAuth } from '@/lib/auth';

// GET: Obtener todos los productos
export async function GET() {
  try {
    const productos = await prisma.producto.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return Response.json(productos);
  } catch (error) {
    return Response.json({ error: String(error) }, { status: 500 });
  }
}

// POST: Crear nuevo producto (solo admin)
export async function POST(request: Request) {
  try {
    await verifyAuth();

    const { nombre, descripcion, precio, imagen, talla, stock, inventarioTalles } = await request.json();

    const producto = await prisma.producto.create({
      data: {
        nombre,
        descripcion,
        precio: parseFloat(precio),
        imagen,
        talla,
        stock: parseInt(stock),
        inventarioTalles: inventarioTalles || '{}',
      },
    });

    return Response.json(producto, { status: 201 });
  } catch (error) {
    return Response.json({ error: String(error) }, { status: 500 });
  }
}
