import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/components/CartProvider';

export const metadata: Metadata = {
  title: 'BUNNIECREEP | Catálogo',
  description: 'Tienda online BUNNIECREEP',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body className="antialiased"><CartProvider>{children}</CartProvider></body></html>;
}
