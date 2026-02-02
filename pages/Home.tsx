
import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface HomeProps {
  addToCart: (product: Product, quantity: number) => void;
}

const Home: React.FC<HomeProps> = ({ addToCart }) => {
  return (
    <div className="pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-green-50/50 to-white dark:from-gray-900 dark:to-background-dark">
        <div className="absolute inset-0 hero-pattern z-0 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-secondary dark:text-yellow-400 text-sm font-bold tracking-wide border border-yellow-200 dark:border-yellow-800 uppercase animate-bounce-subtle">
                <span className="material-icons text-lg mr-2">waving_hand</span> Wete Wa Nsi
              </div>
              <h1 className="font-display font-extrabold text-5xl lg:text-7xl leading-tight text-gray-900 dark:text-white">
                O Sabor Real de Angola, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Direto da Lavra.</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                A ETUTI conecta famílias angolanas aos melhores pequenos produtores nacionais. Frutas orgânicas, colhidas no ponto e entregues em sua casa em Luanda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/frutas" className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-opacity-90 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-500/30 transform hover:-translate-y-1">
                  Explorar Frutas
                  <span className="material-icons ml-2">shopping_basket</span>
                </Link>
                <Link to="/assinatura" className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-surface-dark border-2 border-gray-100 dark:border-gray-700 hover:border-secondary text-gray-900 dark:text-white font-bold rounded-xl transition-all shadow-sm">
                  Ver Assinaturas
                </Link>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-[3.5rem] rotate-3 group-hover:rotate-0 transition-transform duration-700"></div>
              <img 
                alt="Frutas Frescas de Angola" 
                className="relative z-10 w-full rounded-[3rem] shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]" 
                src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=800" 
              />
              <div className="absolute -bottom-6 -left-6 z-20 bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary">
                    <span className="material-icons text-3xl">verified</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Garantia</p>
                    <p className="text-lg font-extrabold text-gray-900 dark:text-white">100% Orgânico</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white dark:bg-surface-dark border-y border-gray-100 dark:border-gray-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: '50+', label: 'Produtores Locais', icon: 'groups' },
              { val: '24h', label: 'Entrega Máxima', icon: 'timer' },
              { val: '10k+', label: 'Pedidos Entregues', icon: 'local_shipping' },
              { val: '100%', label: 'Satisfação Real', icon: 'sentiment_very_satisfied' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <span className="material-icons text-secondary mb-2">{stat.icon}</span>
                <span className="text-2xl font-extrabold text-gray-900 dark:text-white">{stat.val}</span>
                <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Quick Access */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 italic">Escolha pela frescura</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Explore as variedades mais frescas do nosso solo, organizadas para facilitar a sua escolha.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'Tropicais', icon: 'palms', img: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&q=80&w=300' },
            { name: 'Cítricas', icon: 'lemon', img: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&q=80&w=300' },
            { name: 'Frutos Vermelhos', icon: 'spa', img: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=300' },
            { name: 'Época', icon: 'calendar_today', img: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=300' }
          ].map((cat) => (
            <Link to="/frutas" key={cat.name} className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 transition-all hover:-translate-y-2">
              <img src={cat.img} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold mb-1">{cat.name}</h4>
                <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest opacity-80">
                  Explorar <span className="material-icons text-[12px]">arrow_forward</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gray-50 dark:bg-surface-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="font-display font-bold text-3xl lg:text-5xl mb-4 text-gray-900 dark:text-white tracking-tight">Colheita de Hoje</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">Produtos selecionados que acabaram de chegar das províncias.</p>
            </div>
            <Link to="/frutas" className="group flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
              Ver Catálogo Completo
              <span className="material-icons">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {PRODUCTS.slice(0, 4).map((product) => (
              <div key={product.id} className="group bg-white dark:bg-surface-dark rounded-[2.5rem] p-5 shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-gray-100 dark:hover:border-gray-800 flex flex-col">
                <Link to={`/product/${product.id}`} className="relative w-full aspect-square rounded-[2rem] overflow-hidden mb-6 bg-gray-50">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  {product.isNew && (
                    <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg uppercase tracking-widest">Novo</div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-surface-dark/90 p-2 rounded-full text-secondary shadow-md opacity-0 group-hover:opacity-100 transition-all transform scale-50 group-hover:scale-100">
                    <span className="material-icons text-sm">favorite_border</span>
                  </div>
                </Link>
                <div className="flex-grow space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-xl group-hover:text-primary transition-colors line-clamp-1">{product.name}</h3>
                    <div className="flex items-center text-secondary">
                      <span className="material-icons text-xs">star</span>
                      <span className="text-xs font-bold ml-1">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 flex items-center gap-1 font-medium">
                    <span className="material-icons text-xs">location_on</span>
                    {product.origin}
                  </p>
                  <div className="pt-4 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Por {product.unit}</p>
                      <p className="font-extrabold text-2xl text-primary">{product.price.toLocaleString('pt-AO')} Kz</p>
                    </div>
                    <button 
                      onClick={() => addToCart(product, 1)}
                      className="w-12 h-12 bg-primary/10 text-primary rounded-2xl hover:bg-primary hover:text-white transition-all flex items-center justify-center shadow-sm"
                    >
                      <span className="material-icons">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works - Infographic */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 italic">Da Lavra à Mesa</h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium">Um processo transparente que garante a máxima frescura e nutrientes.</p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 -translate-y-1/2 -z-10"></div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: '01', title: 'Colheita Seletiva', desc: 'Nossos agricultores colhem apenas o que está no pico da maturação.', icon: 'agriculture' },
              { step: '02', title: 'Seleção Premium', desc: 'Cada fruto passa por uma rigorosa inspeção de qualidade em Luanda.', icon: 'fact_check' },
              { step: '03', title: 'Entrega Rápida', desc: 'Em menos de 24h, o produto chega à sua porta em caixas térmicas.', icon: 'auto_stories' }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-surface-dark p-10 rounded-[3rem] shadow-sm border border-gray-100 dark:border-gray-800 text-center relative hover:shadow-xl transition-all">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg shadow-green-500/30">
                  {item.step}
                </div>
                <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4">
                  <span className="material-icons text-3xl">{item.icon}</span>
                </div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farmer Spotlight */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=800" 
                  className="rounded-[3rem] shadow-2xl relative z-10 w-full h-[500px] object-cover" 
                  alt="Agricultor Angolano" 
                />
                <div className="absolute -bottom-8 -right-8 bg-secondary p-8 rounded-[2rem] shadow-2xl z-20 hidden md:block">
                  <p className="text-white font-bold text-4xl mb-1">50+</p>
                  <p className="text-white/80 text-xs font-bold uppercase tracking-widest">Famílias <br/>Apoiadas</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-white">
              <span className="inline-block px-4 py-1.5 bg-white/20 rounded-full text-xs font-bold uppercase tracking-widest mb-6">Guardiões da Terra</span>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8 font-display leading-tight italic">Conheça quem <br/>trabalha o seu solo.</h2>
              <p className="text-xl text-white/90 leading-relaxed mb-8 italic font-medium">
                "Desde que trabalhamos com a ETUTI, temos garantia de venda e um preço justo. Isso permitiu-nos investir na escola dos nossos filhos e em melhores sementes."
              </p>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-full border-2 border-white/50 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-cover" alt="Manuel Santos" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Família Manuel</h4>
                  <p className="text-white/70 text-sm">Produtores de Morangos, Huíla</p>
                </div>
              </div>
              <Link to="/agricultores" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold shadow-xl shadow-black/10 hover:bg-gray-50 transition-all">
                Conhecer Nossos Agricultores
                <span className="material-icons">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Teaser */}
      <section className="py-24 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary/5 dark:bg-secondary/10 rounded-[4rem] p-10 md:p-20 border border-secondary/10 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">Assinatura ETUTI: <br/><span className="text-secondary">Frescura Programada.</span></h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Receba uma caixa personalizada semanalmente ou quinzenalmente. Poupe até 20% em relação às compras individuais e nunca mais se preocupe com a falta de fruta em casa.
              </p>
              <ul className="space-y-4">
                {[
                  'Frete prioritário gratuito',
                  'Acesso a frutas exóticas exclusivas',
                  'Preço fixo durante todo o ano',
                  'Cancele ou pause quando quiser'
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-bold text-sm">
                    <span className="material-icons text-secondary">check_circle</span>
                    {text}
                  </li>
                ))}
              </ul>
              <Link to="/assinatura" className="inline-block bg-secondary text-white px-10 py-5 rounded-2xl font-bold shadow-xl shadow-yellow-500/30 hover:scale-105 transition-transform">
                Ver Planos Disponíveis
              </Link>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-xl mt-12 h-64 object-cover" alt="Box" />
                <img src="https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-xl h-64 object-cover" alt="Box" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-surface-dark p-8 rounded-full shadow-2xl border border-secondary/20">
                <span className="text-secondary font-extrabold text-3xl">-20%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50 dark:bg-surface-dark/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 italic">Quem prova, recomenda</h2>
            <p className="text-gray-500">Histórias reais de quem escolheu a saúde da nossa terra.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Ana Paula', role: 'Nutricionista', text: 'A frescura é incomparável. Recomendo aos meus pacientes porque sei que os nutrientes estão realmente lá.', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100' },
              { name: 'Joaquim Silva', role: 'Cliente Assinante', text: 'O plano família mudou a nossa rotina. É cómodo, justo e o sabor das mangas faz-me lembrar a minha infância.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100' },
              { name: 'Maria Isabel', role: 'Mãe de 3', text: 'Garantir fruta de qualidade em Luanda era um desafio. Com a ETUTI, tenho a certeza do que ponho na mesa.', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100' }
            ].map((t, i) => (
              <div key={i} className="bg-white dark:bg-surface-dark p-10 rounded-[3rem] shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col hover:shadow-lg transition-all">
                <div className="flex gap-1 text-secondary mb-6">
                  {[1, 2, 3, 4, 5].map(s => <span key={s} className="material-icons text-sm">star</span>)}
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic mb-8 flex-grow leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4 border-t border-gray-50 dark:border-gray-800 pt-6">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h5 className="font-bold text-gray-900 dark:text-white">{t.name}</h5>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Detailed */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary/5 dark:bg-primary/10 rounded-[4rem] p-12 md:p-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl lg:text-5xl mb-8 text-gray-900 dark:text-white leading-tight italic">
                A Escolha Inteligente para <br/><span className="text-primary">a sua Longevidade</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "Nutrientes Preservados", desc: "Vitaminas essenciais intactas devido ao transporte curto.", icon: "spa" },
                  { title: "Sabor de Verdade", desc: "Frutas colhidas no ponto e não amadurecidas em câmaras.", icon: "restaurant" },
                  { title: "Orgânico Certificado", desc: "Zero agrotóxicos ou químicos nocivos à saúde.", icon: "verified_user" },
                  { title: "Impacto Nacional", desc: "Fortalece a economia rural e o produtor angolano.", icon: "trending_up" }
                ].map((benefit, i) => (
                  <div key={i} className="space-y-3">
                    <div className="w-12 h-12 bg-white dark:bg-gray-800 text-primary rounded-xl flex items-center justify-center shadow-sm">
                      <span className="material-icons">{benefit.icon}</span>
                    </div>
                    <h4 className="font-bold text-lg">{benefit.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&q=80&w=800" className="rounded-[3.5rem] shadow-2xl relative z-10" alt="Abacaxi" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/20 rounded-full blur-[100px] -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-secondary rounded-[4rem] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Sabia que a época da <br/><span className="underline">Manga Sapatinho</span> começou?</h2>
            <p className="text-white/90 text-lg leading-relaxed mb-0 font-medium">
              Assine a nossa newsletter "Calendário da Terra" e saiba primeiro que todos quando os seus frutos favoritos estão disponíveis.
            </p>
          </div>
          <div className="relative z-10 w-full max-w-md">
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Seu e-mail favorito" 
                className="flex-1 px-8 py-5 rounded-2xl border-none focus:ring-2 focus:ring-primary shadow-2xl text-gray-900"
              />
              <button className="bg-primary text-white px-8 py-5 rounded-2xl font-bold hover:bg-gray-900 transition-all shadow-xl shadow-black/10 whitespace-nowrap">
                Ficar Informado
              </button>
            </div>
            <p className="text-white/60 text-[10px] text-center md:text-left mt-4 font-bold uppercase tracking-widest">Respeitamos a sua privacidade. Cancele quando quiser.</p>
          </div>
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
