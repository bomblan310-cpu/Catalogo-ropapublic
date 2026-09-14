'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/components/CartProvider';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();
  const links = <>
    <Link href="/" onClick={() => setOpen(false)} className="px-5 py-3 text-[16px] tracking-normal text-[#e3e3e8] transition hover:text-[#ff8596]">INICIO</Link>
    <Link href="/productos" onClick={() => setOpen(false)} className="px-5 py-3 text-[16px] tracking-normal text-[#e3e3e8] transition hover:text-[#ff8596]">CATÁLOGO</Link>
    <Link href="/carrito" onClick={() => setOpen(false)} className="inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-3 text-[16px] tracking-normal text-white transition hover:border-[#ff3756]"><span>CARRITO</span><span className="grid h-6 min-w-6 place-items-center rounded-full bg-[#ff3756] px-1 text-[11px] text-[#0d0e12]">{totalItems}</span></Link>
  </>;

  return <header className="sticky top-0 z-50 border-b border-[#ff3756]/35 bg-[#0d0e12]/95 text-white backdrop-blur-xl"><div className="relative mx-auto flex h-[96px] max-w-[1440px] items-center px-5 md:px-8"><Link href="/" className="flex items-center gap-4"><img src="/brand/bunniecreep-rabbit-logo.png" alt="BUNNIECREEP" className="h-16 w-16 object-contain"/><span className="text-[24px] tracking-[.03em] md:text-[28px]">BUNNIE<span className="text-[#ff3756]">CREEP</span></span></Link><nav className="ml-auto hidden items-center gap-4 md:flex">{links}</nav><button type="button" onClick={() => setOpen(!open)} className="ml-auto grid h-10 w-10 place-items-center rounded-full border border-white/25 text-xl md:hidden" aria-label="Abrir menú">{open ? '×' : '☰'}</button></div>{open && <nav className="flex flex-col items-center gap-3 border-t border-white/10 bg-[#111218] px-5 py-5 md:hidden">{links}</nav>}</header>;
}
