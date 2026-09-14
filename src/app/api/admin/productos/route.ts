// API: Crear/Actualizar Productos
import { prisma } from '@/lib/db';
import { verifyAuth } from '@/lib/auth';

// GET: Obtener todos los productos
export async function GET() {
  try {
    await verifyAuth();
    const productos = await prisma.producto.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return Response.json(productos);
  } catch (error) {
    return Response.json({ error: 'No autorizado' }, { status: 401 });
  }
}

// POST: Crear nuevo producto (solo admin)
export async function POST(request: Request) {
  try {
    await verifyAuth();

    const { nombre, categoria = 'Remeras', descripcion, precio, imagen, talla, stock, inventarioTalles, destacado = false } = await request.json();

    if (destacado) {
      const destacados = await prisma.producto.count({ where: { destacado: true } });
      if (destacados >= 4) return Response.json({ error: 'Solo podés tener 4 productos destacados. Quitá uno antes de agregar otro.' }, { status: 400 });
    }

    const producto = await prisma.producto.create({
      data: {
        nombre,
        categoria,
        descripcion,
        precio: parseFloat(precio),
        imagen,
        talla,
        stock: parseInt(stock),
        inventarioTalles: inventarioTalles || '{}',
        destacado: Boolean(destacado),
      },
    });

    return Response.json(producto, { status: 201 });
  } catch (error) {
    return Response.json({ error: String(error) }, { status: 500 });
  }
}
