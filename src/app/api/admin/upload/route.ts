import { put } from '@vercel/blob';
import { verifyAuth } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    await verifyAuth();
    const formData = await request.formData();
    const image = formData.get('imagen');
    if (!(image instanceof File)) return Response.json({ error: 'No se recibió una imagen.' }, { status: 400 });
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(image.type)) return Response.json({ error: 'Formato no permitido. Usá JPG, PNG o WEBP.' }, { status: 400 });
    if (image.size > 4 * 1024 * 1024) return Response.json({ error: 'La imagen no puede superar 4 MB.' }, { status: 400 });
    const filename = image.name.replace(/[^a-zA-Z0-9._-]/g, '-');
    const blob = await put(`productos/${Date.now()}-${filename}`, image, { access: 'public', addRandomSuffix: true });
    return Response.json({ url: blob.url });
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : 'No se pudo subir la imagen.' }, { status: 500 });
  }
}
