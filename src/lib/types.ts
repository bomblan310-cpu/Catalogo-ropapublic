// Tipos de datos para el e-commerce

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  talla: string;
  stock: number;
  inventarioTalles?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export function parseInventarioTalles(valor: string | null | undefined): Record<string, number> {
  if (!valor) return {};
  try {
    const parsed = JSON.parse(valor);
    if (!parsed || Array.isArray(parsed) || typeof parsed !== 'object') return {};
    return Object.fromEntries(Object.entries(parsed).map(([talle, cantidad]) => [talle, Math.max(0, Number(cantidad) || 0)]));
  } catch { return {}; }
}

export function parseTallas(talla: string | string[] | null | undefined): string[] {
  if (Array.isArray(talla)) return talla;
  if (!talla) return [];

  try {
    const parsed = JSON.parse(talla);
    return Array.isArray(parsed) ? parsed : [parsed].filter(Boolean);
  } catch {
    return talla
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);
  }
}

export interface CarritoItem {
  id: number;
  productoId: number;
  cantidad: number;
  talla: string;
}

export interface Usuario {
  id: number;
  email: string;
  nombre: string;
  createdAt: Date;
}

export interface Pedido {
  id: number;
  usuarioId: number;
  items: CarritoItem[];
  total: number;
  estado: 'pendiente' | 'procesando' | 'enviado' | 'entregado';
  createdAt: Date;
}
