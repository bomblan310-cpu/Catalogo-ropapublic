import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import ProductImageViewer from '@/components/ProductImageViewer';
import AddToCart from '@/components/AddToCart';
import { prisma } from '@/lib/db';
import { parseInventarioTalles, parseTallas } from '@/lib/types';

export const dynamic = 'force-dynamic';

export default async function ProductoDetalle({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  if (!Number.isInteger(id)) notFound();
  const producto = await prisma.producto.findFirst({ where: { id, activo: true } });
  if (!producto) notFound();
  const talles = parseTallas(producto.talla);
  const inventario = parseInventarioTalles(producto.inventarioTalles);

  return <main className="min-h-screen bg-[#0d0e12] text-white"><Navbar/><section className="crimson-grid border-b border-white/10 px-5 py-10 md:px-8"><div className="mx-auto max-w-[1240px]"><Link href="/productos" className="text-[14px] tracking-[.05em] text-[#ff8596] hover:text-white">← VOLVER AL CATÁLOGO</Link></div></section><section className="mx-auto grid max-w-[1240px] gap-10 px-5 py-12 md:grid-cols-[1.08fr_.92fr] md:px-8 md:py-20"><div className="overflow-hidden rounded-2xl bg-[#181920] p-2"><ProductImageViewer image={producto.imagen} name={producto.nombre}/></div><div className="flex flex-col justify-center"><p className="text-[14px] tracking-[.08em] text-[#ff8596]">BUNNIECREEP / DROP 0{producto.id}</p><h1 className="mt-5 text-5xl leading-[.92] tracking-normal md:text-7xl">{producto.nombre}</h1><p className="font-price mt-7 text-2xl text-white">Gs. {producto.precio.toLocaleString('es-PY')}</p><p className="mt-8 max-w-lg whitespace-pre-line text-lg leading-8 text-[#c0c0c7]">{producto.descripcion}</p><AddToCart product={{ id: producto.id, nombre: producto.nombre, precio: producto.precio, imagen: producto.imagen, talles, inventario, stock: producto.stock }}/><p className="mt-6 text-[14px] tracking-[.06em] text-[#a7a7af]">{producto.stock > 0 ? `${producto.stock} UNIDADES DISPONIBLES` : 'PRODUCTO AGOTADO'}</p><Link href="/productos" className="mt-8 w-fit rounded-full border border-[#ff3756]/55 px-6 py-3 text-[14px] tracking-[.05em] text-[#ff8596] transition hover:bg-[#ff3756] hover:text-[#0d0e12]">SEGUIR VIENDO PRODUCTOS →</Link></div></section></main>;
}
