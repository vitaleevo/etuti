
import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface HomeProps {
  addToCart: (product: Product, quantity: number) => void;
}

const Home: React.FC<HomeProps> = ({ addToCart }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-green-50/50 to-white dark:from-gray-900 dark:to-background-dark">
        <div className="absolute inset-0 hero-pattern z-0 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-secondary dark:text-yellow-400 text-sm font-bold tracking-wide border border-yellow-200 dark:border-yellow-800 uppercase">
                <span className="material-icons text-lg mr-2">waving_hand</span> Wete Wa Nsi
              </div>
              <h1 className="font-display font-extrabold text-5xl lg:text-7xl leading-tight text-gray-900 dark:text-white">
                Sabor de Angola, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Frescura Viva.</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Experimente o verdadeiro "Wete Wa Nsi". Frutas frescas, orgânicas e cheias de vida, entregues diretamente do produtor angolano para a sua mesa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/#produtos" className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-opacity-90 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-500/30 transform hover:-translate-y-1">
                  Ver Produtos
                  <span className="material-icons ml-2">shopping_basket</span>
                </Link>
                <Link to="/assinatura" className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-surface-dark border-2 border-gray-100 dark:border-gray-700 hover:border-secondary text-gray-900 dark:text-white font-bold rounded-xl transition-all">
                  Assinatura Mensal
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                alt="Frutas Frescas" 
                className="relative z-10 w-full rounded-[3rem] shadow-2xl" 
                src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=800" 
              />
              <div className="absolute -bottom-10 left-4 z-20 bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 animate-bounce">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded-xl text-primary">
                    <span className="material-icons">local_shipping</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">Entrega em Luanda</p>
                    <p className="text-lg font-bold">Em até 24h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="produtos" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Destaques da Estação</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">As favoritas dos nossos clientes nesta semana.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-gray-100 dark:hover:border-gray-700 flex flex-col">
              <Link to={`/product/${product.id}`} className="relative w-full aspect-square rounded-xl overflow-hidden mb-4">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-3 left-3 bg-secondary text-white text-xs font-bold px-2 py-1 rounded-md">Novo</div>
              </Link>
              <div className="mt-auto">
                <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.origin}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="font-bold text-xl text-primary">{product.price.toLocaleString('pt-AO')} Kz</span>
                  <button 
                    onClick={() => addToCart(product, 1)}
                    className="p-2 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    <span className="material-icons">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-surface-light dark:bg-surface-dark overflow-hidden" id="sobre">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="font-display font-bold text-3xl lg:text-4xl mb-8">
                Por que escolher a ETUTI? <br/>
                <span className="text-primary">8 Benefícios para sua Saúde</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Rico em Nutrientes", desc: "Vitaminas essenciais preservadas." },
                  { title: "Sabor Superior", desc: "Colheita no ponto ideal." },
                  { title: "Livre de Químicos", desc: "Cultivo orgânico." },
                  { title: "Apoio Local", desc: "Fortalece a economia nacional." },
                  { title: "Sustentabilidade", desc: "Menor pegada de carbono." },
                  { title: "Variedade Sazonal", desc: "O melhor de cada época." },
                  { title: "Conveniência", desc: "Entrega na porta de casa." },
                  { title: "Garantia ETUTI", desc: "Satisfação ou reposição." }
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="material-icons text-green-500 mt-1">check_circle</span>
                    <div>
                      <h4 className="font-bold text-sm">{benefit.title}</h4>
                      <p className="text-xs text-gray-500">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img src="https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&q=80&w=800" className="rounded-2xl shadow-xl" alt="Abacaxi" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
