'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginAdmin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); setError(''); setLoading(true);
    try {
      const response = await fetch('/api/admin/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) });
      if (!response.ok) throw new Error('Correo o contraseña incorrectos.');
      router.push('/admin');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'No se pudo iniciar sesión.');
    } finally { setLoading(false); }
  };

  return <main className="crimson-grid relative grid min-h-screen place-items-center overflow-hidden bg-[#0d0e12] px-5 text-white"><div className="glow-orb absolute -right-32 -top-32 h-[520px] w-[520px]"/><div className="absolute -bottom-24 -left-24 h-72 w-72 rotate-45 border border-[#ff3756]/35"/><section className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#15161c]/95 p-7 shadow-2xl md:p-9"><div className="absolute right-0 top-0 h-20 w-20 bg-[#ff3756] opacity-90 [clip-path:polygon(100%_0,100%_100%,0_0)]"/><div className="flex items-center gap-3"><img src="/brand/bunniecreep-rabbit-logo.png" alt="BUNNIECREEP" className="h-12 w-12 object-contain"/><div><h1 className="text-xl font-black italic tracking-[-.06em]">BUNNIE<span className="text-[#ff3756]">CREEP</span></h1><p className="mt-0.5 text-[9px] font-bold tracking-[.18em] text-[#ff8596]">ACCESO DE ADMINISTRACIÓN</p></div></div><div className="mt-8 border-t border-white/10 pt-6"><h2 className="text-2xl font-black">BIENVENIDO.</h2><p className="mt-2 text-sm leading-6 text-[#aaaab2]">Ingresá para gestionar los productos, imágenes e inventario de tu tienda.</p></div><form onSubmit={handleSubmit} className="mt-7 space-y-5">{error && <p className="rounded-lg border border-[#ff3756]/50 bg-[#ff3756]/10 p-3 text-sm text-[#ff9ba9]">{error}</p>}<label className="block text-[10px] font-bold tracking-[.15em] text-[#aaaab2]">CORREO ELECTRÓNICO<input type="email" value={email} onChange={e => setEmail(e.target.value)} className="mt-2 w-full rounded-lg border border-white/15 bg-[#0d0e12] px-4 py-3 text-sm text-white outline-none transition focus:border-[#ff3756]" placeholder="admin@catalogo.com" required/></label><label className="block text-[10px] font-bold tracking-[.15em] text-[#aaaab2]">CONTRASEÑA<input type="password" value={password} onChange={e => setPassword(e.target.value)} className="mt-2 w-full rounded-lg border border-white/15 bg-[#0d0e12] px-4 py-3 text-sm text-white outline-none transition focus:border-[#ff3756]" placeholder="••••••••" required/></label><button type="submit" disabled={loading} className="w-full rounded-full bg-[#ff3756] py-3.5 text-[10px] font-black tracking-[.18em] text-[#0d0e12] transition hover:bg-white disabled:opacity-50">{loading ? 'INGRESANDO...' : 'INGRESAR AL PANEL →'}</button></form><p className="mt-7 text-center text-[10px] leading-5 text-[#777780]">Acceso exclusivo para administración.<br/>BUNNIECREEP / 2026</p></section></main>;
}
