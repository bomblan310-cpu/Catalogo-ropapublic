import { notFound } from 'next/navigation';

// Datos de ejemplo (en producción esto sería una BD real)
const productos = [
  {
    id: 1,
    nombre: 'Camiseta Básica',
    descripcion: 'Camiseta de algodón 100%',
    precio: 29.99,
    imagen: 'https://via.placeholder.com/300x300?text=Camiseta',
    talla: ['XS', 'S', 'M', 'L', 'XL'],
    stock: 50,
  },
  {
    id: 2,
    nombre: 'Pantalón Jeans',
    descripcion: 'Jeans azul oscuro clásico',
    precio: 49.99,
    imagen: 'https://via.placeholder.com/300x300?text=Jeans',
    talla: ['28', '30', '32', '34', '36'],
    stock: 30,
  },
  {
    id: 3,
    nombre: 'Chaqueta Casual',
    descripcion: 'Chaqueta de lona para todas las estaciones',
    precio: 79.99,
    imagen: 'https://via.placeholder.com/300x300?text=Chaqueta',
    talla: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    stock: 15,
  },
];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  const producto = productos.find(p => p.id === id);

  if (!producto) {
    notFound();
  }

  return Response.json(producto);
}
