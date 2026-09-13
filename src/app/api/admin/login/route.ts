// API: Login Admin
import { prisma } from '@/lib/db';
import { generateToken } from '@/lib/auth';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Buscar admin
    const admin = await prisma.admin.findUnique({ where: { email } });
    if (!admin) {
      return Response.json({ error: 'Credenciales inválidas' }, { status: 401 });
    }

    // Verificar contraseña
    const validPassword = await bcrypt.compare(password, admin.password);
    if (!validPassword) {
      return Response.json({ error: 'Credenciales inválidas' }, { status: 401 });
    }

    // Generar token
    const token = generateToken(admin.id);

    // Guardar en cookies
    const cookieStore = await cookies();
    cookieStore.set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60, // 7 días
    });

    return Response.json({ success: true, email: admin.email, nombre: admin.nombre });
  } catch (error) {
    return Response.json({ error: String(error) }, { status: 500 });
  }
}
