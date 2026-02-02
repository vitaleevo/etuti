
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-display font-extrabold text-2xl tracking-tight">
                <span className="text-secondary">E</span><span className="text-primary">TUTI</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Conectando você ao melhor da terra. Frutas frescas, selecionadas e entregues com amor em Angola.
            </p>
            <div className="flex gap-4">
              {['IG', 'FB', 'WA'].map((social) => (
                <a key={social} href="#" className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs font-bold hover:bg-primary hover:text-white transition-all">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Empresa</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/sobre" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
              <li><Link to="/agricultores" className="hover:text-primary transition-colors">Nossos Agricultores</Link></li>
              <li><Link to="/produtor" className="hover:text-primary transition-colors">Quero ser Produtor</Link></li>
              <li><Link to="/sazonalidade" className="hover:text-primary transition-colors">Calendário de Sazonalidade</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Suporte</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/ajuda" className="hover:text-primary transition-colors">Centro de Ajuda / FAQ</Link></li>
              <li><Link to="/contacto" className="hover:text-primary transition-colors">Contacto Directo</Link></li>
              <li><Link to="/privacidade" className="hover:text-primary transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/termos" className="hover:text-primary transition-colors">Termos de Uso</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">A Minha Etuti</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/perfil" className="hover:text-primary transition-colors">Minha Conta</Link></li>
              <li><Link to="/checkout" className="hover:text-primary transition-colors">Minhas Encomendas</Link></li>
              <li><Link to="/assinatura" className="hover:text-primary transition-colors">Gerir Assinatura</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-100 dark:border-gray-800 text-center text-sm text-gray-500">
          © 2024 ETUTI, Wete Wa Nsi. Luanda, Angola.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
