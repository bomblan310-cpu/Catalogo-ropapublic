import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Catálogo Ropa - E-commerce",
  description: "Tu tienda online de ropa con productos de calidad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
