'use client';

import { useState } from 'react';
import { useCart } from '@/components/CartProvider';

export default function AddToCart({ product }: { product: { id: number; nombre: string; precio: number; imagen?: string | null; talles: string[]; inventario: Record<string, number>; stock: number } }) {
  const available = product.talles.filter((talle) => (product.inventario[talle] ?? product.stock) > 0);
  const [talla, setTalla] = useState(available[0] || product.talles[0] || 'Único');
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const unidades = product.inventario[talla] ?? product.stock;
  const canAdd = product.stock > 0 && unidades > 0;
  const add = () => { if (!canAdd) return; addItem({ id: product.id, nombre: product.nombre, precio: product.precio, imagen: product.imagen, talla }); setAdded(true); window.setTimeout(() => setAdded(false), 1800); };

  return <div className="mt-9 border-y border-white/10 py-7"><p className="text-[10px] font-bold tracking-[.17em] text-[#a7a7af]">ELEGÍ TU TALLE</p><div className="mt-4 flex flex-wrap gap-2">{product.talles.length ? product.talles.map((item) => { const stock = product.inventario[item] ?? product.stock; return <button key={item} type="button" disabled={stock <= 0} onClick={() => setTalla(item)} className={`rounded-full border px-4 py-2 text-xs font-bold transition ${item === talla ? 'border-[#ff3756] bg-[#ff3756] text-[#0d0e12]' : stock > 0 ? 'border-white/25 text-white hover:border-[#ff3756]' : 'cursor-not-allowed border-white/10 text-[#6e6e77] line-through'}`}>{item}{stock > 0 ? ` · ${stock}` : ' · Agotado'}</button>; }) : <span className="text-sm text-[#a7a7af]">Talle único</span>}</div><button type="button" disabled={!canAdd} onClick={add} className="mt-7 rounded-full bg-[#ff3756] px-7 py-4 text-[10px] font-bold tracking-[.16em] text-white transition hover:bg-white hover:text-[#0d0e12] disabled:cursor-not-allowed disabled:opacity-40">{added ? '✓ AGREGADO AL CARRITO' : canAdd ? 'AGREGAR AL CARRITO' : 'PRODUCTO AGOTADO'}</button></div>;
}
