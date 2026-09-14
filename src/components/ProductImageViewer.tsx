'use client';

import { useState } from 'react';

export default function ProductImageViewer({ image, name }: { image?: string | null; name: string }) {
  const [open, setOpen] = useState(false);
  if (!image) return <div className="aspect-square rounded-xl bg-[#24252d]" />;
  return <><button type="button" onClick={() => setOpen(true)} className="group relative block w-full overflow-hidden rounded-xl bg-[#f7f7f5] text-left" aria-label={`Ampliar imagen de ${name}`}><img src={image} alt={name} className="aspect-square w-full object-contain transition duration-500 group-hover:scale-[1.025]"/><span className="absolute bottom-4 right-4 rounded-full bg-[#0d0e12]/90 px-5 py-3 text-[14px] tracking-[.05em] text-white">AMPLIAR ↗</span></button>{open && <div role="dialog" aria-modal="true" aria-label={`Imagen ampliada de ${name}`} className="fixed inset-0 z-[100] grid place-items-center bg-black/90 p-5" onClick={() => setOpen(false)}><button type="button" onClick={() => setOpen(false)} className="absolute right-5 top-5 rounded-full border border-white/30 px-5 py-3 text-[14px] tracking-[.05em] text-white">CERRAR ×</button><img src={image} alt={name} className="max-h-[88vh] max-w-[94vw] rounded-xl bg-white object-contain" onClick={event => event.stopPropagation()}/></div>}</>;
}
