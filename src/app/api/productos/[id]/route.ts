import { prisma } from '@/lib/db';

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  if (!Number.isInteger(id)) return Response.json({ error: 'Producto no encontrado' }, { status: 404 });

  const producto = await prisma.producto.findFirst({ where: { id, activo: true } });
  if (!producto) return Response.json({ error: 'Producto no encontrado' }, { status: 404 });

  return Response.json(producto);
}
