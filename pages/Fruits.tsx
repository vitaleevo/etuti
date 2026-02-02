
import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface FruitsProps {
  addToCart: (product: Product, quantity: number) => void;
}

const CATEGORIES = ['Todas', 'Tropicais', 'Cítricas', 'Frutos Vermelhos'];
const QUICK_FILTERS = [
  { label: 'Ofertas', icon: 'local_offer', color: 'text-red-500' },
  { label: 'Recém Colhidas', icon: 'auto_awesome', color: 'text-primary' },
  { label: 'Para Sumos', icon: 'blender', color: 'text-orange-500' },
  { label: 'Snacks', icon: 'eco', color: 'text-green-500' },
];

const Fruits: React.FC<FruitsProps> = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'popular'>('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [toast, setToast] = useState<{show: boolean, name: string} | null>(null);
  
  // Favoritos
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('etuti_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('etuti_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
    );
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
    setToast({ show: true, name: product.name });
    setTimeout(() => setToast(null), 3000);
  };

  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  // Estados de filtro
  const [minRating, setMinRating] = useState<number>(0);
  const [isNewOnly, setIsNewOnly] = useState(false);
  const [isPremiumOnly, setIsPremiumOnly] = useState(false);
  const [activeProducer, setActiveProducer] = useState('Todos');
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS.filter(product => {
      const matchesCategory = activeCategory === 'Todas' || product.category === activeCategory;
      const matchesProducer = activeProducer === 'Todos' || product.producer === activeProducer;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           product.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.producer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRating = product.rating >= minRating;
      const matchesNew = !isNewOnly || product.isNew;
      const matchesPremium = !isPremiumOnly || product.rating >= 4.9;
      
      const pMin = minPrice === '' ? 0 : parseFloat(minPrice);
      const pMax = maxPrice === '' ? Infinity : parseFloat(maxPrice);
      const matchesPrice = product.price >= pMin && product.price <= pMax;

      return matchesCategory && matchesProducer && matchesSearch && matchesRating && matchesNew && matchesPremium && matchesPrice;
    });

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'popular') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [activeCategory, activeProducer, searchTerm, sortBy, minRating, isNewOnly, isPremiumOnly, minPrice, maxPrice]);

  return (
    <div className="pt-20 min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      
      {/* Dynamic Cart Toast */}
      {toast && (
        <div className="fixed bottom-10 right-10 z-[100] animate-in slide-in-from-bottom-10 fade-in duration-300">
          <div className="bg-gray-900 dark:bg-primary text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="material-icons text-white">check</span>
            </div>
            <div>
              <p className="font-bold text-sm">{toast.name} adicionado!</p>
              <Link to="/checkout" className="text-xs text-secondary font-bold hover:underline">Ir para o carrinho</Link>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section Refined */}
      <section className="relative py-16 bg-white dark:bg-surface-dark overflow-hidden">
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
          <span className="material-icons text-[40rem] text-primary">eco</span>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="max-w-2xl">
              <nav className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <span className="material-icons text-[10px]">chevron_right</span>
                <span className="text-primary">Produtos</span>
              </nav>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
                A colheita de hoje <br/> está <span className="text-primary italic">fantástica.</span>
              </h1>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-lg">
                Produtos selecionados manualmente às 05:00 da manhã. Frescura garantida de Malanje, Huíla e Bengo.
              </p>
              
              {/* Quick Lifestyle Filters */}
              <div className="flex flex-wrap gap-3">
                {QUICK_FILTERS.map((f) => (
                  <button key={f.label} className="flex items-center gap-2 px-5 py-2.5 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-primary hover:shadow-lg transition-all text-xs font-bold group">
                    <span className={`material-icons text-sm ${f.color}`}>{f.icon}</span>
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* View Controls & Search */}
            <div className="bg-white dark:bg-surface-dark p-6 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-800 lg:w-96">
              <div className="relative mb-6">
                <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                <input 
                  type="text" 
                  placeholder="O que procura?"
                  className="w-full pl-12 pr-4 py-3 rounded-2xl border-none ring-1 ring-gray-100 dark:ring-gray-700 focus:ring-2 focus:ring-primary bg-gray-50 dark:bg-gray-900 transition-all text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex bg-gray-50 dark:bg-gray-900 p-1 rounded-xl">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white dark:bg-gray-800 shadow-sm text-primary' : 'text-gray-400'}`}
                  >
                    <span className="material-icons text-sm">grid_view</span>
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-white dark:bg-gray-800 shadow-sm text-primary' : 'text-gray-400'}`}
                  >
                    <span className="material-icons text-sm">view_list</span>
                  </button>
                </div>
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all border ${showFilters ? 'bg-primary text-white' : 'text-gray-500 border-gray-100'}`}
                >
                  <span className="material-icons text-sm">tune</span>
                  Filtros
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Filters - Glassmorphism style */}
      {showFilters && (
        <section className="bg-white/50 dark:bg-surface-dark/50 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800 py-10 animate-in slide-in-from-top-5 duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Pelas Províncias</h4>
                <div className="flex flex-wrap gap-2">
                  {['Todos', 'Huíla', 'Malanje', 'Bengo', 'Zaire'].map(loc => (
                    <button 
                      key={loc}
                      onClick={() => setActiveProducer(loc === 'Todos' ? 'Todos' : loc)}
                      className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase transition-all ${activeProducer.includes(loc) ? 'bg-primary text-white' : 'bg-white dark:bg-gray-800'}`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Preço Máximo</h4>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-primary">0 Kz</span>
                  <input 
                    type="range" 
                    min="0" 
                    max="10000" 
                    step="500" 
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" 
                    value={maxPrice || 10000}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                  <span className="text-sm font-bold text-primary">{maxPrice || '10k'} Kz</span>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Categorias</h4>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map(cat => (
                    <button 
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase transition-all ${activeCategory === cat ? 'bg-secondary text-white' : 'bg-white dark:bg-gray-800'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-end justify-end">
                <button 
                  onClick={() => {
                    setActiveCategory('Todas');
                    setMaxPrice('');
                    setActiveProducer('Todos');
                  }}
                  className="text-xs font-bold text-red-500 hover:underline flex items-center gap-2"
                >
                  <span className="material-icons text-sm">refresh</span>
                  Resetar Filtros
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Grid Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Catálogo Premium</h2>
            <div className="h-1 w-10 bg-primary rounded-full"></div>
            <span className="text-sm text-gray-400 font-bold">{filteredProducts.length} itens</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Ordenar por:</span>
            <select 
              className="bg-transparent border-none focus:ring-0 text-sm font-bold text-primary cursor-pointer"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
            >
              <option value="popular">Destaques</option>
              <option value="price-asc">Preço: Baixo</option>
              <option value="price-desc">Preço: Alto</option>
            </select>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className={`${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8' 
              : 'flex flex-col gap-4'
          }`}>
            {filteredProducts.map((product, index) => {
              // Intercalate a promo block every 6 items in grid mode
              const showPromo = viewMode === 'grid' && index === 3;
              
              return (
                <React.Fragment key={product.id}>
                  {showPromo && (
                    <div className="col-span-1 sm:col-span-2 bg-primary rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
                      <div className="relative z-10 flex flex-col h-full justify-between">
                        <div>
                          <span className="bg-white/20 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Assinatura Mensal</span>
                          <h3 className="text-2xl font-bold mb-2">Caixa Surpresa da Semana</h3>
                          <p className="text-white/80 text-sm max-w-xs">6kg de frutas variadas colhidas hoje. Economize 15%.</p>
                        </div>
                        <Link to="/assinatura" className="bg-white text-primary w-fit px-6 py-3 rounded-xl font-bold text-xs mt-6 hover:scale-105 transition-transform">
                          Ver Planos
                        </Link>
                      </div>
                      <span className="material-icons absolute -bottom-10 -right-10 text-[15rem] text-white/10 rotate-12 group-hover:rotate-0 transition-transform duration-700">inventory_2</span>
                    </div>
                  )}

                  <div 
                    className={`group bg-white dark:bg-surface-dark rounded-[2.5rem] p-4 shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gray-50 dark:hover:border-gray-800 ${
                      viewMode === 'list' ? 'flex flex-row gap-6 items-center' : 'flex flex-col'
                    }`}
                  >
                    <Link 
                      to={`/product/${product.id}`} 
                      className={`relative overflow-hidden rounded-[2rem] bg-gray-50 dark:bg-gray-900 ${
                        viewMode === 'list' ? 'w-48 h-48 flex-shrink-0' : 'w-full aspect-square mb-6'
                      }`}
                    >
                      {!loadedImages[product.id] && (
                        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
                      )}
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        loading="lazy"
                        onLoad={() => handleImageLoad(product.id)}
                        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                          loadedImages[product.id] ? 'opacity-100' : 'opacity-0'
                        }`} 
                      />
                      
                      {/* Interactive Badges */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {product.isNew && (
                          <div className="bg-white/90 backdrop-blur-md text-primary text-[8px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">Colhido Hoje</div>
                        )}
                        {product.rating > 4.8 && (
                          <div className="bg-secondary text-white text-[8px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">Favorito do Público</div>
                        )}
                      </div>

                      <button 
                        onClick={(e) => toggleFavorite(e, product.id)}
                        className="absolute top-4 right-4 bg-white/90 dark:bg-surface-dark/90 backdrop-blur p-2.5 rounded-full text-secondary shadow-md hover:scale-110 transition-transform z-20"
                      >
                        <span className="material-icons text-sm">
                          {favorites.includes(product.id) ? 'favorite' : 'favorite_border'}
                        </span>
                      </button>
                    </Link>

                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mb-1">{product.category}</p>
                          <h3 className="font-extrabold text-xl text-gray-900 dark:text-white group-hover:text-primary transition-colors">{product.name}</h3>
                        </div>
                        <div className="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded-lg">
                          <span className="material-icons text-secondary text-xs">star</span>
                          <span className="text-xs font-bold text-secondary">{product.rating}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 text-xs text-gray-400 mb-6 font-medium">
                        <span className="flex items-center gap-1">
                          <span className="material-icons text-xs">location_on</span>
                          {product.origin.split(',')[0]}
                        </span>
                        <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                        <span>{product.producer}</span>
                      </div>

                      <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50 dark:border-gray-800">
                        <div>
                          <span className="block text-[10px] text-gray-400 uppercase font-bold tracking-widest">Preço por {product.unit}</span>
                          <span className="font-black text-2xl text-primary">{product.price.toLocaleString('pt-AO')} <span className="text-sm">Kz</span></span>
                        </div>
                        <button 
                          onClick={() => handleAddToCart(product)}
                          className="w-14 h-14 bg-primary text-white rounded-2xl hover:bg-opacity-90 transition-all flex items-center justify-center shadow-xl shadow-green-500/20 active:scale-90"
                        >
                          <span className="material-icons">add_shopping_cart</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-40 bg-white dark:bg-surface-dark rounded-[3rem] border-2 border-dashed border-gray-100 dark:border-gray-800">
            <span className="material-icons text-8xl text-gray-200 mb-6">search_off</span>
            <h3 className="text-2xl font-bold mb-2">Nada por aqui...</h3>
            <p className="text-gray-400 mb-8 max-w-sm mx-auto">Parece que essas frutas ainda estão a crescer! Tente mudar os seus filtros.</p>
            <button 
              onClick={() => {
                setActiveCategory('Todas');
                setSearchTerm('');
              }}
              className="bg-primary text-white px-8 py-3 rounded-xl font-bold shadow-lg"
            >
              Ver Tudo
            </button>
          </div>
        )}
      </section>

      {/* Seasonal Trust Banner */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 dark:bg-surface-dark rounded-[4rem] p-12 md:p-24 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 hero-pattern pointer-events-none"></div>
          <div className="flex-1 space-y-8 relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">O compromisso <br/><span className="text-secondary">Wete Wa Nsi</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: 'verified', title: 'Curadoria Rigorosa', desc: 'Cada peça de fruta é inspecionada antes de entrar na sua caixa.' },
                { icon: 'schedule', title: 'Entrega Expressa', desc: 'Pedidos feitos até às 10:00 chegam no mesmo dia.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-secondary">
                    <span className="material-icons">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-white/60 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 relative z-10">
            <img src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=600" className="rounded-[3rem] shadow-2xl rotate-2" alt="Trust" />
          </div>
        </div>
      </section>

      {/* Newsletter Bottom */}
      <section className="py-24 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4 italic">Fique por dentro das safras</h2>
          <p className="text-gray-500 mb-10">Receba um alerta no seu e-mail assim que a sua fruta favorita estiver pronta para colher.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="seu@email.com" 
              className="flex-1 px-8 py-4 rounded-2xl border-none ring-1 ring-gray-100 dark:ring-gray-700 bg-white dark:bg-gray-800 shadow-sm focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-green-500/20 hover:scale-105 transition-transform">
              Inscrever-me
            </button>
          </div>
          <p className="mt-6 text-[10px] text-gray-400 font-bold uppercase tracking-widest">Sem spam, apenas frescura real.</p>
        </div>
      </section>
    </div>
  );
};

export default Fruits;
