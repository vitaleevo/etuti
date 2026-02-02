
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface ProductDetailProps {
  addToCart: (product: Product, quantity: number) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ addToCart }) => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div className="pt-32 text-center">Produto não encontrado</div>;

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav className="flex text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-primary">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-white font-medium">{product.name}</span>
      </nav>

      <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 items-start">
        {/* Images */}
        <div className="space-y-4">
          <div className="aspect-square w-full rounded-2xl overflow-hidden bg-gray-100">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-primary cursor-pointer">
                <img src={product.image} alt="Thumbnail" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="mt-10 lg:mt-0 px-4 sm:px-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">{product.name}</h1>
          <div className="mt-2 flex items-center">
            <div className="flex text-secondary">
              {[1, 2, 3, 4, 5].map((s) => <span key={s} className="material-icons text-sm">star</span>)}
            </div>
            <p className="ml-2 text-sm text-gray-500">{product.rating} ({product.reviews} reviews)</p>
          </div>

          <div className="mt-6">
            <p className="text-4xl font-bold text-primary">
              {product.price.toLocaleString('pt-AO')} Kz 
              <span className="text-lg font-normal text-gray-500"> / {product.unit}</span>
            </p>
          </div>

          <div className="mt-6 space-y-6 border-t border-gray-100 pt-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{product.description}</p>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="material-icons text-primary">scale</span>
                <span className="font-semibold">Peso:</span> {product.weight}
              </div>
              <div className="flex items-center gap-2">
                <span className="material-icons text-primary">location_on</span>
                <span className="font-semibold">Origem:</span> {product.origin}
              </div>
            </div>
          </div>

          <div className="mt-10 flex gap-4">
            <div className="flex items-center border border-gray-300 rounded-lg w-32 overflow-hidden">
              <button 
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="w-10 h-10 flex items-center justify-center hover:bg-gray-100"
              >-</button>
              <input 
                type="number" 
                value={quantity} 
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                className="w-12 border-none text-center focus:ring-0 bg-transparent" 
              />
              <button 
                onClick={() => setQuantity(q => q + 1)}
                className="w-10 h-10 flex items-center justify-center hover:bg-gray-100"
              >+</button>
            </div>
            <button 
              onClick={() => addToCart(product, quantity)}
              className="flex-1 bg-primary text-white py-3 px-8 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-lg shadow-green-500/20"
            >
              <span className="material-icons">shopping_bag</span>
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
