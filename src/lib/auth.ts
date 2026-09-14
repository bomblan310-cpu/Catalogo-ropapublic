import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function verifyAuth() {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error('JWT_SECRET no está configurado');
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;

  if (!token) {
    throw new Error('No autorizado');
  }

  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch {
    throw new Error('Token inválido');
  }
}

export function generateToken(adminId: number) {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error('JWT_SECRET no está configurado');
  return jwt.sign({ adminId }, secret, {
    expiresIn: '7d',
  });
}
