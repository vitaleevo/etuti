"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { PRODUCTS } from '@/constants';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Review {
    id: string;
    user: string;
    rating: number;
    comment: string;
    date: string;
}

const ProductPage = () => {
    const params = useParams();
    const id = params?.id as string;
    const navigate = useRouter();
    const { addToCart } = useCart();

    const product = PRODUCTS.find((p: Product) => p.id === id);
    const [quantity, setQuantity] = useState(1);

    // Favoritos
    const [favorites, setFavorites] = useState<string[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem('etuti_favorites');
        if (saved) {
            try {
                setFavorites(JSON.parse(saved));
            } catch (e) { }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('etuti_favorites', JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = () => {
        if (!product) return;
        setFavorites((prev: string[]) =>
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
        if (typeof window !== 'undefined') window.scrollTo(0, 0);
        setQuantity(1);
        setSubmitted(false);
        setUserRating(0);
        setComment('');
    }, [id]);

    const relatedProducts = useMemo(() => {
        if (!product) return [];
        return PRODUCTS
            .filter((p: Product) => p.category === product.category && p.id !== product.id)
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

    if (!product) return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow pt-40 text-center">
                <h1 className="text-2xl font-bold">Produto não encontrado</h1>
                <Link href="/frutas" className="text-primary hover:underline mt-4 inline-block">Voltar para a loja</Link>
            </div>
            <Footer />
        </div>
    );

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-24 pb-20 bg-background-light min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex text-sm text-gray-500 mb-8">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <Link href="/frutas" className="hover:text-primary transition-colors">Frutas</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-900 font-medium">{product.name}</span>
                    </nav>

                    <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 items-start mb-24">
                        {/* Images */}
                        <div className="space-y-4">
                            <div className="relative aspect-square w-full rounded-[2.5rem] overflow-hidden bg-white shadow-xl border border-gray-100 ">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                {product.isNew && (
                                    <div className="absolute top-6 left-6 bg-primary text-white text-xs font-bold px-4 py-2 rounded-xl shadow-lg uppercase tracking-widest">
                                        Novidade
                                    </div>
                                )}
                                <button
                                    onClick={toggleFavorite}
                                    className="absolute top-6 right-6 bg-white/90 backdrop-blur p-3 rounded-full text-secondary shadow-lg hover:scale-110 transition-transform focus:outline-none"
                                >
                                    <span className="material-icons text-2xl">
                                        {favorites.includes(product.id) ? 'favorite' : 'favorite_border'}
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Info */}
                        <div className="mt-10 lg:mt-0 px-4 sm:px-0">
                            <div className="flex justify-between items-start mb-4">
                                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
                                    {product.category}
                                </span>
                            </div>
                            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">{product.name}</h1>

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

                            <div className="space-y-6 border-y border-gray-100 py-8 mb-8">
                                <p className="text-gray-600 leading-relaxed text-lg">{product.description}</p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex items-center bg-white border border-gray-200 rounded-2xl h-16 px-2 shadow-sm">
                                    <button
                                        onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                        className="w-12 h-12 flex items-center justify-center hover:bg-gray-100 rounded-xl transition-colors text-gray-500"
                                    >
                                        <span className="material-icons">remove</span>
                                    </button>
                                    <input
                                        type="number"
                                        value={quantity}
                                        onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                                        className="w-16 border-none text-center font-bold text-xl focus:ring-0 bg-transparent text-gray-900 "
                                    />
                                    <button
                                        onClick={() => setQuantity(q => q + 1)}
                                        className="w-12 h-12 flex items-center justify-center hover:bg-gray-100 rounded-xl transition-colors text-gray-500"
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
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ProductPage;
