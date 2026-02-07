import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "./mobile.css";
import { CartProvider } from "@/context/CartContext";
import MobileNav from "@/components/MobileNav";
import Link from "next/link";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ETUTI - O Melhor da Terra",
  description: "A ETUTI conecta famílias angolanas aos melhores pequenos produtores nacionais. Frutas orgânicas, colhidas no ponto e entregues em sua casa em Luanda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-AO" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover" />
      </head>
      <body className={`${plusJakartaSans.variable} antialiased pb-16 md:pb-0`}>
        {/* Mobile App Header - Only visible on small screens */}
        <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-lg border-b border-gray-100 z-50 flex items-center justify-between px-6">
          <Link href="/">
            <img src="/logotipo.png" alt="ETUTI" className="h-8 w-auto" />
          </Link>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400">
              <span className="material-icons">notifications_none</span>
            </button>
            <Link href="/checkout" className="p-2 text-gray-400">
              <span className="material-icons">shopping_bag</span>
            </Link>
          </div>
        </header>

        <CartProvider>
          {children}
          <MobileNav />
        </CartProvider>
      </body>
    </html>
  );
}
