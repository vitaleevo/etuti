"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, ShoppingBasket, CreditCard, User, Search } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const MobileNav: React.FC = () => {
    const pathname = usePathname();
    const { cartCount } = useCart();

    const tabs = [
        { name: 'Home', path: '/', icon: Home },
        { name: 'Loja', path: '/frutas', icon: ShoppingBasket },
        { name: 'Planos', path: '/assinatura', icon: CreditCard },
        { name: 'Perfil', path: '/perfil', icon: User },
    ];

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-100 z-[100] pb-safe">
            <div className="flex justify-around items-center h-16">
                {tabs.map((tab) => {
                    const isActive = pathname === tab.path;
                    const Icon = tab.icon;

                    return (
                        <Link
                            key={tab.name}
                            href={tab.path}
                            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${isActive ? 'text-primary' : 'text-gray-400'
                                }`}
                        >
                            <div className="relative">
                                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                                {tab.name === 'Loja' && cartCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center ring-2 ring-white">
                                        {cartCount}
                                    </span>
                                )}
                            </div>
                            <span className="text-[10px] font-bold mt-1 uppercase tracking-tighter">
                                {tab.name}
                            </span>
                            {isActive && (
                                <div className="absolute bottom-1 w-1 h-1 bg-primary rounded-full" />
                            )}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default MobileNav;
