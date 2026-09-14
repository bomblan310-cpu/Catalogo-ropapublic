'use client';

import Link from 'next/link';
import { useState } from 'react';

interface ProductCardProps { id: number; nombre: string; precio: number; imagen?: string; segundaImagen?: string; stock?: number; featured?: boolean; destacado?: boolean; }

export default function ProductCard({ id, nombre, precio, imagen, segundaImagen, stock = 10, featured = false, destacado = false }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const image = hovered && segundaImagen ? segundaImagen : imagen;
  return <Link href={`/productos/${id}`} className="group block min-w-0"><article onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className={`h-full rounded-2xl bg-[#181920] p-2 transition duration-300 group-hover:-translate-y-1 group-hover:bg-[#22232c] ${featured ? 'ring-1 ring-[#ff3756]/35' : ''}`}><div className="relative aspect-[5/4] overflow-hidden rounded-xl bg-[#f7f7f5]">{image ? <img src={image} alt={nombre} className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.03]"/> : <div className="h-full bg-[#24252d]"/>}<span className={`absolute left-3 top-3 rounded-full px-4 py-2 text-[12px] tracking-[.05em] ${destacado ? 'border border-[#ff3756] bg-[#0d0e12] text-[#ff9aaa]' : 'bg-[#0d0e12]/90 text-white'}`}>{destacado ? '★ DESTACADO' : `DROP 0${id}`}</span><span className="absolute bottom-3 right-3 grid h-10 w-10 place-items-center rounded-full bg-[#ff3756] text-xl text-[#0d0e12] opacity-0 transition group-hover:opacity-100">↗</span>{stock === 0 && <div className="absolute inset-0 grid place-items-center bg-black/70 text-sm tracking-[.08em] text-white">AGOTADO</div>}</div><div className="flex items-start justify-between gap-3 px-2 py-4"><div className="min-w-0"><h3 className="truncate text-[17px] text-white">{nombre}</h3><p className="mt-2 text-[13px] tracking-[.05em] text-[#ff8596]">{destacado ? 'MÁS LLEVADO' : 'COLOR EDITION'}</p></div><span className="font-price whitespace-nowrap text-[14px] text-white">Gs. {precio.toLocaleString('es-PY')}</span></div></article></Link>;
}
