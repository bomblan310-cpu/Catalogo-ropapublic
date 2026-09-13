import { prisma } from '@/lib/db';

// GET: Obtener todos los productos
export async function GET() {
  try {
    const productos = await prisma.producto.findMany({
      where: { activo: true },
      orderBy: { createdAt: 'desc' },
    });
    return Response.json(productos);
  } catch (error) {
    return Response.json({ error: String(error) }, { status: 500 });
  }
}
