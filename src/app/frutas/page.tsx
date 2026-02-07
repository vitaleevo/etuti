"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { PRODUCTS } from '@/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';

const FrutasPage = () => {
    const { addToCart } = useCart();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Todas');
    const [sortBy, setSortBy] = useState('featured'); // featured, price-low, price-high, rating
    const [isSortOpen, setIsSortOpen] = useState(false);

    const sortLabels: Record<string, string> = {
        'featured': 'Destaques',
        'price-low': 'Preço: Menor',
        'price-high': 'Preço: Maior',
        'rating': 'Melhor Avaliados'
    };

    const categories = ['Todas', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];

    const filteredProducts = useMemo(() => {
        let result = PRODUCTS.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === 'Todas' || product.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });

        if (sortBy === 'price-low') {
            result.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-high') {
            result.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'rating') {
            result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        }

        return result;
    }, [searchTerm, selectedCategory, sortBy]);

    const handleAddToCart = (e: React.MouseEvent, product: any) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product, 1);
        // Simple toast or feedback could be added here
        alert(`${product.name} adicionado ao carrinho!`);
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 ">
            <Header />

            <main className="flex-grow pt-20">
                {/* Hero Section */}
                <section className="relative h-[400px] flex items-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/banner hero.jpg"
                            className="w-full h-full object-cover brightness-50"
                            alt="Frutas Frescas"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                        <span className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-4">
                            Frescura Garantida
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                            O Mercado <br />
                            <span className="text-secondary">Mais Fresco</span> de Luanda
                        </h1>
                        <p className="max-w-xl text-lg text-white/90 mb-8 font-medium">
                            Frutas selecionadas diretamente dos melhores produtores nacionais. Qualidade premium na palma da sua mão com entrega ao domicílio.
                        </p>
                    </div>
                </section>

                {/* Filters & Search Toolbar */}
                <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                            {/* Search */}
                            <div className="relative flex-grow max-w-md">
                                <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                                    <span className="material-icons text-xl">search</span>
                                </span>
                                <input
                                    type="text"
                                    placeholder="Pesquisar frutas, produtores..."
                                    className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-2xl border-none focus:ring-2 focus:ring-primary outline-none transition-all "
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>

                            {/* Filters */}
                            <div className="flex items-center gap-4 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
                                {categories.map(category => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`whitespace-nowrap px-6 py-2 rounded-full font-bold text-sm transition-all ${selectedCategory === category
                                            ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                            : 'bg-white text-gray-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>

                            {/* Custom Sort Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => setIsSortOpen(!isSortOpen)}
                                    className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl hover:bg-gray-100 transition-all text-primary font-bold text-sm"
                                >
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest hidden sm:block">Ordenar por:</span>
                                    {sortLabels[sortBy]}
                                    <span className={`material-icons text-lg transition-transform duration-300 ${isSortOpen ? 'rotate-180' : ''}`}>expand_more</span>
                                </button>

                                {isSortOpen && (
                                    <>
                                        {/* Overlay to close when clicking outside */}
                                        <div
                                            className="fixed inset-0 z-10"
                                            onClick={() => setIsSortOpen(false)}
                                        ></div>

                                        <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 z-20 py-2 animate-fade-in overflow-hidden">
                                            {Object.entries(sortLabels).map(([value, label]) => (
                                                <button
                                                    key={value}
                                                    className={`w-full text-left px-4 py-3 text-sm font-bold transition-colors flex items-center justify-between ${sortBy === value ? 'bg-primary/5 text-primary' : 'text-gray-600 hover:bg-gray-50'
                                                        }`}
                                                    onClick={() => {
                                                        setSortBy(value);
                                                        setIsSortOpen(false);
                                                    }}
                                                >
                                                    {label}
                                                    {sortBy === value && <span className="material-icons text-sm">check</span>}
                                                </button>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {filteredProducts.map((product) => (
                                <Link
                                    href={`/product/${product.id}`}
                                    key={product.id}
                                    className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 flex flex-col"
                                >
                                    <div className="relative aspect-[4/5] overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        {product.isNew && (
                                            <div className="absolute top-6 left-6 bg-secondary text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-xl animate-bounce">
                                                Novo
                                            </div>
                                        )}

                                        <button
                                            onClick={(e) => handleAddToCart(e, product)}
                                            className="absolute bottom-6 right-6 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-2xl transform translate-y-20 group-hover:translate-y-0 transition-all duration-500 hover:scale-110 active:scale-90"
                                        >
                                            <span className="material-icons text-3xl">add_shopping_cart</span>
                                        </button>

                                        <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                                            <p className="text-[10px] font-bold uppercase tracking-widest mb-1">Origem</p>
                                            <p className="text-sm font-medium">{product.origin || 'Angola'}</p>
                                        </div>
                                    </div>

                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="text-[10px] font-black text-primary bg-primary/10 px-3 py-1 rounded-lg uppercase tracking-[0.15em]">
                                                {product.category}
                                            </span>
                                            <div className="flex items-center text-secondary">
                                                <span className="material-icons text-lg">star</span>
                                                <span className="text-sm font-extrabold ml-1">{product.rating}</span>
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-primary transition-colors leading-tight">
                                            {product.name}
                                        </h3>

                                        <p className="text-gray-500 text-sm line-clamp-2 mb-6 font-medium">
                                            {product.description}
                                        </p>

                                        <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                                            <div>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Preço</p>
                                                <p className="text-2xl font-black text-primary flex items-baseline gap-1">
                                                    {product.price.toLocaleString('pt-AO')}
                                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Kz / {product.unit}</span>
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Stock</p>
                                                <div className="flex items-center gap-1.5">
                                                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                                    <span className="text-xs font-bold text-green-600 uppercase tracking-wider">Disponível</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="py-20 text-center">
                            <span className="material-icons text-8xl text-gray-200 mb-6 font-thin">search_off</span>
                            <h2 className="text-3xl font-black text-gray-900 mb-4">Nenhuma fruta encontrada</h2>
                            <p className="text-gray-500 max-w-md mx-auto">
                                Tente ajustar os termos de pesquisa ou remover os filtros para encontrar o que procura.
                            </p>
                            <button
                                onClick={() => { setSearchTerm(''); setSelectedCategory('Todas'); }}
                                className="mt-8 px-8 py-3 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all"
                            >
                                Limpar Tudo
                            </button>
                        </div>
                    )}
                </div>

                {/* Benefits Section */}
                <section className="bg-primary py-24 my-12 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Porque escolher a Etuti?</h2>
                            <p className="text-white/70 max-w-2xl mx-auto text-lg">Nosso compromisso é levar o melhor da terra diretamente para a sua mesa, com transparência e rapidez.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {[
                                { icon: 'local_shipping', title: 'Entrega Rápida', desc: 'Entregamos em toda Luanda em menos de 24h com frescura garantida.' },
                                { icon: 'verified_user', title: 'Qualidade Premium', desc: 'Processo rigoroso de seleção. Só o melhor chega até você.' },
                                { icon: 'support_agent', title: 'Apoio ao Cliente', desc: 'Estamos disponíveis 7 dias por semana para ajudar com seu pedido.' }
                            ].map((benefit, i) => (
                                <div key={i} className="text-center group">
                                    <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center text-white mb-8 mx-auto group-hover:scale-110 group-hover:bg-secondary transition-all duration-500 transition-colors">
                                        <span className="material-icons text-4xl">{benefit.icon}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                                    <p className="text-white/60 leading-relaxed font-medium">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials or Info Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="flex-1">
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                                Do Campo para sua <br />
                                <span className="text-primary underline decoration-secondary decoration-wavy underline-offset-8">Mesa em Luanda</span>
                            </h2>
                            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                                A Etuti trabalha em parceria próxima com agricultores locais das províncias da Huíla, Malanje e Bengo. Ao comprar connosco, você não está apenas adquirindo produtos frescos, está apoiando a economia local e garantindo um futuro sustentável para Angola.
                            </p>
                            <div className="space-y-6">
                                {[
                                    'Produtos 100% Biológicos',
                                    'Sem intermediários desnecessários',
                                    'Embalagem Sustentável'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                            <span className="material-icons text-xs">check</span>
                                        </span>
                                        <span className="font-bold text-gray-700 ">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 relative">
                            <div className="grid grid-cols-2 gap-4">
                                <img src="/banner 1.jpg" className="rounded-3xl w-full h-64 object-cover rotate-3" alt="Fruit" />
                                <img src="/banner 2.jpg" className="rounded-3xl w-full h-64 object-cover -rotate-6 translate-y-12" alt="Fruit" />
                                <img src="/banner 3.jpg" className="rounded-3xl w-full h-64 object-cover -rotate-3 translate-x-4" alt="Fruit" />
                                <img src="/banner 4.jpg" className="rounded-3xl w-full h-64 object-cover rotate-6 translate-y-8" alt="Fruit" />
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-secondary rounded-full flex items-center justify-center text-white shadow-2xl border-4 border-white ">
                                <div className="text-center">
                                    <p className="text-3xl font-black">10k+</p>
                                    <p className="text-[10px] uppercase font-bold">Clientes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Newsletter */}
                <section className="bg-gray-900 py-20 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-black text-white mb-4">Receba as novidades da colheita!</h2>
                        <p className="text-gray-400 mb-8">Subscreva para receber alertas de frutas da época e promoções exclusivas.</p>
                        <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Seu melhor e-mail"
                                className="flex-grow px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                            />
                            <button className="px-10 py-4 bg-primary text-white font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20">
                                Subscrever Agora
                            </button>
                        </form>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default FrutasPage;

