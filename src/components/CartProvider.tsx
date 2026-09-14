'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type CartItem = { id: number; nombre: string; precio: number; imagen?: string | null; talla: string; cantidad: number };
type CartContextValue = { items: CartItem[]; totalItems: number; total: number; addItem: (item: Omit<CartItem, 'cantidad'>) => void; updateQuantity: (id: number, talla: string, cantidad: number) => void; removeItem: (id: number, talla: string) => void; clearCart: () => void };
const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => { const saved = window.localStorage.getItem('vanta-cart'); if (saved) { try { setItems(JSON.parse(saved)); } catch { window.localStorage.removeItem('vanta-cart'); } } setReady(true); }, []);
  useEffect(() => { if (ready) window.localStorage.setItem('vanta-cart', JSON.stringify(items)); }, [items, ready]);
  const value = useMemo<CartContextValue>(() => ({
    items,
    totalItems: items.reduce((total, item) => total + item.cantidad, 0),
    total: items.reduce((total, item) => total + item.precio * item.cantidad, 0),
    addItem: (item) => setItems((current) => { const found = current.find((entry) => entry.id === item.id && entry.talla === item.talla); return found ? current.map((entry) => entry === found ? { ...entry, cantidad: entry.cantidad + 1 } : entry) : [...current, { ...item, cantidad: 1 }]; }),
    updateQuantity: (id, talla, cantidad) => setItems((current) => cantidad <= 0 ? current.filter((item) => item.id !== id || item.talla !== talla) : current.map((item) => item.id === id && item.talla === talla ? { ...item, cantidad } : item)),
    removeItem: (id, talla) => setItems((current) => current.filter((item) => item.id !== id || item.talla !== talla)),
    clearCart: () => setItems([]),
  }), [items]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() { const context = useContext(CartContext); if (!context) throw new Error('useCart debe usarse dentro de CartProvider'); return context; }
