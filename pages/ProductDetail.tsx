
import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

interface ProductDetailProps {
  addToCart: (product: Product, quantity: number) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ addToCart }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  
  // Favoritos
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('etuti_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('etuti_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = () => {
    if (!product) return;
    setFavorites(prev => 
      prev.includes(product.id) ? prev.filter(fid => fid !== product.id) : [...prev, product.id]
    );
  };

  // Review form state
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  // Mock local reviews state
  const [reviews, setReviews] = useState<Review[]>([
    { id: '1', user: 'Maria Antónia', rating: 5, comment: 'Incrível! Super doce e chegou muito fresquinho. Recomendo vivamente.', date: 'Há 2 dias' },
    { id: '2', user: 'João Paulo', rating: 4, comment: 'Muito boa qualidade, embora o tamanho fosse um pouco menor do que esperava.', date: 'Há 1 semana' },
    { id: '3', user: 'Ana Silva', rating: 5, comment: 'O sabor da nossa terra é inconfundível. Parabéns pela logística!', date: 'Há 2 semanas' },
  ]);

  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setQuantity(1);
    setSubmitted(false);
    setUserRating(0);
    setComment('');
  }, [id]);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return PRODUCTS
      .filter(p => p.category === product.category && p.id !== product.id)
      .slice(0, 4);
  }, [product]);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userRating === 0) return alert('Por favor, selecione uma avaliação.');
    
    const newReview: Review = {
      id: Date.now().toString(),
      user: 'Você',
      rating: userRating,
      comment: comment,
      date: 'Agora mesmo'
    };
    
    setReviews([newReview, ...reviews]);
    setSubmitted(true);
  };

  if (!product) return <div className="pt-32 text-center">Produto não encontrado</div>;

  return (
    <div className="pt-24 pb-20 bg-background-light dark:bg-background-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/frutas" className="hover:text-primary transition-colors">Frutas</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-white font-medium">{product.name}</span>
        </nav>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 items-start mb-24">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative aspect-square w-full rounded-[2.5rem] overflow-hidden bg-white dark:bg-surface-dark shadow-xl border border-gray-100 dark:border-gray-800">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              {product.isNew && (
                <div className="absolute top-6 left-6 bg-primary text-white text-xs font-bold px-4 py-2 rounded-xl shadow-lg uppercase tracking-widest">
                  Novidade
                </div>
              )}
              <button 
                onClick={toggleFavorite}
                className="absolute top-6 right-6 bg-white/90 dark:bg-surface-dark/90 backdrop-blur p-3 rounded-full text-secondary shadow-lg hover:scale-110 transition-transform focus:outline-none"
              >
                <span className="material-icons text-2xl">
                  {favorites.includes(product.id) ? 'favorite' : 'favorite_border'}
                </span>
              </button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square rounded-2xl overflow-hidden border-2 border-transparent hover:border-primary cursor-pointer bg-white dark:bg-surface-dark shadow-sm transition-all hover:scale-105">
                  <img src={product.image} alt="Thumbnail" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="mt-10 lg:mt-0 px-4 sm:px-0">
            <div className="flex justify-between items-start mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
                {product.category}
              </span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">{product.name}</h1>
            
            <div className="flex items-center mb-6">
              <div className="flex text-secondary">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className={`material-icons text-lg ${s <= Math.floor(product.rating) ? '' : 'opacity-30'}`}>star</span>
                ))}
              </div>
              <p className="ml-2 text-sm text-gray-500 font-medium">
                {product.rating} <span className="mx-1 opacity-30">•</span> {product.reviews} avaliações
              </p>
            </div>

            <div className="mb-8">
              <p className="text-4xl font-extrabold text-primary">
                {product.price.toLocaleString('pt-AO')} Kz 
                <span className="text-lg font-medium text-gray-400"> / {product.unit}</span>
              </p>
            </div>

            <div className="space-y-6 border-y border-gray-100 dark:border-gray-800 py-8 mb-8">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">{product.description}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-3 p-4 bg-white dark:bg-surface-dark rounded-2xl border border-gray-50 dark:border-gray-800">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-icons">scale</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase font-bold tracking-wider">Peso Aprox.</span>
                    <span className="font-bold text-gray-900 dark:text-white">{product.weight}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white dark:bg-surface-dark rounded-2xl border border-gray-50 dark:border-gray-800">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                    <span className="material-icons">location_on</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase font-bold tracking-wider">Origem</span>
                    <span className="font-bold text-gray-900 dark:text-white">{product.origin}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-2xl h-16 px-2 shadow-sm">
                <button 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-12 h-12 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors text-gray-500"
                >
                  <span className="material-icons">remove</span>
                </button>
                <input 
                  type="number" 
                  value={quantity} 
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="w-16 border-none text-center font-bold text-xl focus:ring-0 bg-transparent text-gray-900 dark:text-white" 
                />
                <button 
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-12 h-12 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors text-gray-500"
                >
                  <span className="material-icons">add</span>
                </button>
              </div>
              <button 
                onClick={() => addToCart(product, quantity)}
                className="flex-1 bg-primary text-white py-4 px-8 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-opacity-90 transition-all shadow-xl shadow-green-500/20 active:scale-[0.98]"
              >
                <span className="material-icons">shopping_bag</span>
                Adicionar ao Carrinho
              </button>
            </div>

            <div className="mt-8 flex items-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <span className="material-icons text-green-500 text-base">verified_user</span>
                Qualidade Garantida
              </div>
              <div className="flex items-center gap-2">
                <span className="material-icons text-green-500 text-base">local_shipping</span>
                Entrega em 24h
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <section className="mb-24 border-t border-gray-100 dark:border-gray-800 pt-16">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Review Summary */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">Avaliações de Clientes</h2>
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-extrabold text-primary">{product.rating}</div>
                  <div>
                    <div className="flex text-secondary">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span key={s} className={`material-icons text-xl ${s <= Math.floor(product.rating) ? '' : 'opacity-30'}`}>star</span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 font-medium">Com base em {product.reviews + (submitted ? 1 : 0)} avaliações</p>
                  </div>
                </div>
              </div>

              {/* Leave a Review Form */}
              <div className="bg-white dark:bg-surface-dark p-8 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-gray-800">
                {!submitted ? (
                  <>
                    <h3 className="text-xl font-bold mb-6">Deixe a sua avaliação</h3>
                    <form onSubmit={handleReviewSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Sua Nota</label>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onMouseEnter={() => setHoverRating(star)}
                              onMouseLeave={() => setHoverRating(0)}
                              onClick={() => setUserRating(star)}
                              className="focus:outline-none transition-transform hover:scale-125"
                            >
                              <span className={`material-icons text-3xl ${star <= (hoverRating || userRating) ? 'text-secondary' : 'text-gray-200 dark:text-gray-700'}`}>
                                {star <= (hoverRating || userRating) ? 'star' : 'star_outline'}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Comentário</label>
                        <textarea
                          required
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          placeholder="Fale sobre a frescura, sabor ou entrega..."
                          className="w-full px-4 py-3 rounded-2xl border-gray-200 dark:bg-gray-800 dark:border-gray-700 h-32 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-primary text-white py-4 rounded-2xl font-bold shadow-lg shadow-green-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                      >
                        Enviar Comentário
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-6">
                    <div className="w-16 h-16 bg-green-100 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="material-icons text-3xl">done_all</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Obrigado!</h3>
                    <p className="text-gray-500 text-sm mb-6">A sua avaliação foi submetida com sucesso e ajuda outros clientes a escolherem o melhor da nossa terra.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-primary font-bold text-sm hover:underline"
                    >
                      Escrever outro comentário
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Reviews List */}
            <div className="lg:col-span-2 space-y-8">
              {reviews.map((review) => (
                <div key={review.id} className="bg-white dark:bg-surface-dark p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-800 animate-in fade-in duration-500">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold text-lg">
                        {review.user.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">{review.user}</h4>
                        <p className="text-xs text-gray-400">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex text-secondary">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span key={s} className={`material-icons text-sm ${s <= review.rating ? '' : 'opacity-20'}`}>star</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic">"{review.comment}"</p>
                  <div className="mt-6 flex items-center gap-4 text-xs font-bold text-gray-400">
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      <span className="material-icons text-sm">thumb_up_off_alt</span>
                      Útil (0)
                    </button>
                    <button className="hover:text-primary transition-colors">Denunciar</button>
                  </div>
                </div>
              ))}
              
              {reviews.length > 3 && (
                <button className="w-full py-4 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-2xl text-gray-400 font-bold hover:border-primary hover:text-primary transition-all">
                  Ver todas as avaliações
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="border-t border-gray-100 dark:border-gray-800 pt-16">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
                Também poderá gostar
              </h2>
              <Link to="/frutas" className="text-primary font-bold hover:underline flex items-center gap-1">
                Ver tudo
                <span className="material-icons text-sm">arrow_forward</span>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((p) => (
                <div 
                  key={p.id} 
                  className="group bg-white dark:bg-surface-dark rounded-[2rem] p-4 shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-gray-100 dark:hover:border-gray-800 flex flex-col"
                >
                  <Link to={`/product/${p.id}`} className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-50 dark:bg-gray-900">
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    {p.isNew && (
                      <div className="absolute top-3 left-3 bg-primary text-white text-[8px] font-extrabold px-2 py-1 rounded-lg uppercase tracking-widest shadow-lg">
                        Novo
                      </div>
                    )}
                  </Link>
                  <div className="flex-grow mb-4">
                    <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors line-clamp-1">{p.name}</h3>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-2">{p.origin}</p>
                    <div className="flex items-center gap-1 text-secondary">
                      <span className="material-icons text-xs">star</span>
                      <span className="text-xs font-bold">{p.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-50 dark:border-gray-800 mt-auto">
                    <div className="font-extrabold text-primary">
                      {p.price.toLocaleString('pt-AO')} Kz
                    </div>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(p, 1);
                      }}
                      className="w-10 h-10 bg-gray-50 dark:bg-gray-800 text-gray-400 hover:bg-primary hover:text-white rounded-xl transition-all flex items-center justify-center active:scale-90"
                    >
                      <span className="material-icons text-xl">add</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
