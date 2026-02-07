"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [year, setYear] = useState<number | string>(2024);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-center md:text-left">
          <div className="col-span-1 flex flex-col items-center md:items-start">
            <div className="flex items-center mb-6">
              <img
                src="/logotipo.png"
                alt="ETUTI Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Conectando você ao melhor da terra. Frutas frescas, selecionadas e entregues com amor em Angola.
            </p>
            <div className="flex gap-4">
              {['IG', 'FB', 'WA'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold hover:bg-primary hover:text-white transition-all shadow-sm">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold mb-6">Empresa</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="/sobre" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
              <li><Link href="/agricultores" className="hover:text-primary transition-colors">Nossos Agricultores</Link></li>
              <li><Link href="/produtor" className="hover:text-primary transition-colors">Quero ser Produtor</Link></li>
              <li><Link href="/sazonalidade" className="hover:text-primary transition-colors">Calendário de Sazonalidade</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold mb-6">Suporte</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="/ajuda" className="hover:text-primary transition-colors">Centro de Ajuda / FAQ</Link></li>
              <li><Link href="/contacto" className="hover:text-primary transition-colors">Contacto Directo</Link></li>
              <li><Link href="/privacidade" className="hover:text-primary transition-colors">Política de Privacidade</Link></li>
              <li><Link href="/termos" className="hover:text-primary transition-colors">Termos de Uso</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold mb-6">A Minha Etuti</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="/perfil" className="hover:text-primary transition-colors">Minha Conta</Link></li>
              <li><Link href="/checkout" className="hover:text-primary transition-colors">Minhas Encomendas</Link></li>
              <li><Link href="/assinatura" className="hover:text-primary transition-colors">Gerir Assinatura</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-100 text-center text-sm text-gray-500">
          © {year} ETUTI, Wete Wa Nsi. Luanda, Angola.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
