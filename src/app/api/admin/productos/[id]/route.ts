// API: Actualizar/Eliminar Producto específico
import { prisma } from '@/lib/db';
import { verifyAuth } from '@/lib/auth';

// PUT: Actualizar producto
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await verifyAuth();

    const id = parseInt(params.id);
    const data = await request.json();

    const producto = await prisma.producto.update({
      where: { id },
      data: {
        nombre: data.nombre,
        descripcion: data.descripcion,
        precio: parseFloat(data.precio),
        imagen: data.imagen,
        talla: data.talla,
        stock: parseInt(data.stock),
        inventarioTalles: data.inventarioTalles || '{}',
      },
    });

    return Response.json(producto);
  } catch (error) {
    return Response.json({ error: String(error) }, { status: 500 });
  }
}

// DELETE: Eliminar producto
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await verifyAuth();

    const id = parseInt(params.id);

    await prisma.producto.delete({ where: { id } });
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: String(error) }, { status: 500 });
  }
}
