
import React from 'react';

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
              {['IG', 'FB', 'TW'].map((social) => (
                <a key={social} href="#" className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs font-bold hover:bg-primary hover:text-white transition-all">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Empresa</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-primary">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary">Produtores</a></li>
              <li><a href="#" className="hover:text-primary">Carreiras</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Ajuda</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-primary">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-primary">Termos</a></li>
              <li><a href="#" className="hover:text-primary">Políticas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Newsletter</h4>
            <p className="text-sm text-gray-500 mb-4">Receba ofertas exclusivas.</p>
            <form className="flex gap-2">
              <input type="email" placeholder="Seu email" className="bg-gray-50 dark:bg-gray-800 border-none rounded-lg text-sm flex-1" />
              <button className="bg-primary text-white p-2 rounded-lg">
                <span className="material-icons text-sm">send</span>
              </button>
            </form>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-100 dark:border-gray-800 text-center text-sm text-gray-500">
          © 2024 ETUTI, Wete Wa Nsi. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
