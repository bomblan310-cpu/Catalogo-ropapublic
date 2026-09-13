import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function verifyAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;

  if (!token) {
    throw new Error('No autorizado');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    return decoded;
  } catch {
    throw new Error('Token inválido');
  }
}

export function generateToken(adminId: number) {
  return jwt.sign({ adminId }, process.env.JWT_SECRET || 'secret', {
    expiresIn: '7d',
  });
}
