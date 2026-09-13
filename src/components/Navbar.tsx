'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#ff3756]/35 bg-[#0d0e12]/95 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-[1440px] items-center px-5 md:px-8">
        <Link href="/" className="flex items-center gap-2 text-lg font-black italic tracking-[-.08em]">
          <span className="grid h-7 w-7 place-items-center bg-[#ff3756] text-sm not-italic">V</span>
          VANTA<span className="text-[#ff3756]">_</span>
        </Link>
        <nav className="ml-auto hidden md:block">
          <Link href="/productos" className="px-4 py-2 text-[9px] font-bold tracking-[.16em] text-[#b9b9c1] transition hover:bg-[#ff3756] hover:text-white">
            CATÁLOGO
          </Link>
        </nav>
        <button type="button" onClick={() => setOpen(!open)} className="ml-auto grid h-9 w-9 place-items-center rounded-full border border-white/25 text-lg md:hidden" aria-label="Abrir menú">
          {open ? '×' : '≡'}
        </button>
      </div>
      {open && <nav className="border-t border-white/10 bg-[#111218] px-5 py-4 md:hidden">
        <Link href="/productos" onClick={() => setOpen(false)} className="block py-2 text-xs font-bold tracking-[.16em]">CATÁLOGO</Link>
      </nav>}
    </header>
  );
}
