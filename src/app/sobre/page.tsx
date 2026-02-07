"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SobrePage = () => {
    return (
        <div className="flex flex-col min-h-screen font-body">
            <Header />

            {/* Hero Section - Immersive */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=2000"
                        alt="Campos verdes de Angola"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                        Nossa Essência
                    </span>
                    <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6 leading-tight">
                        Wete Wa Nsi
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-gray-200 max-w-2xl mx-auto">
                        "O Valor da Terra". Resgatando a conexão ancestral entre quem planta e quem alimenta a sua família.
                    </p>
                </div>
            </section>

            <main className="flex-grow bg-background-light ">
                {/* The Origin Story */}
                <section className="py-24 relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="relative">
                                <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-700">
                                    <img
                                        src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=2000"
                                        alt="Mãos segurando a terra fértil"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-10 -right-10 w-2/3 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hidden md:block">
                                    <p className="font-display text-4xl font-extrabold text-primary mb-2">2024</p>
                                    <p className="text-gray-500 uppercase text-xs font-bold tracking-widest">Ano de Fundação</p>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-gray-900 leading-tight">
                                    Tudo começa com <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Respeito à Natureza.</span>
                                </h2>
                                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                    <p>
                                        A ETUTI nasceu de uma inquietação: por que consumimos produtos que viajaram milhares de quilómetros quando temos uma das terras mais férteis do mundo bem aqui, em Angola?
                                    </p>
                                    <p>
                                        O nome "Etuti" carrega consigo a força da nossa identidade. Decidimos criar uma ponte digital que encurta distâncias. Eliminamos os intermediários que desvalorizam o produtor e encarecem o produto final.
                                    </p>
                                    <p>
                                        Hoje, somos mais que um marketplace; somos um movimento de valorização do que é nacional. Cada cesta entregue é um voto de confiança no agricultor angolano.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Grid */}
                <section className="py-24 bg-white ">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">Nossos Pilares</h2>
                            <p className="text-gray-500 text-lg">
                                Princípios inegociáveis que guiam cada decisão, desde a escolha da semente até a entrega em sua porta.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'Comércio Justo',
                                    desc: 'Garantimos que o produtor receba o valor real pelo seu trabalho, permitindo que suas famílias prosperem.',
                                    icon: 'handshake',
                                    color: 'bg-blue-50 text-blue-600'
                                },
                                {
                                    title: 'Sustentabilidade',
                                    desc: 'Incentivamos práticas agrícolas que preservam o solo e a água para as futuras gerações angolanas.',
                                    icon: 'eco',
                                    color: 'bg-green-50 text-green-600'
                                },
                                {
                                    title: 'Transparência',
                                    desc: 'Você sabe exatamente de onde vem sua comida. Rastreabilidade total da fazenda à mesa.',
                                    icon: 'visibility',
                                    color: 'bg-purple-50 text-purple-600'
                                }
                            ].map((val, i) => (
                                <div key={i} className="group p-10 rounded-[2.5rem] bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 ">
                                    <div className={`w-16 h-16 rounded-2xl ${val.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                        <span className="material-icons text-3xl">{val.icon}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{val.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {val.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Impact Stats - Dark Theme Section */}
                <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px] opacity-30"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                            {[
                                { number: '150+', label: 'Famílias Apoiadas' },
                                { number: '12', label: 'Províncias Alcançadas' },
                                { number: '50t', label: 'Alimentos Salvos/Mês' },
                                { number: '10k', label: 'Clientes Felizes' },
                            ].map((stat, i) => (
                                <div key={i} className="space-y-2">
                                    <p className="text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{stat.number}</p>
                                    <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team / Community */}
                <section className="py-24 bg-background-light ">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row gap-16">
                            <div className="lg:w-1/3">
                                <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Mãos que <br />Constroem</h2>
                                <p className="text-lg text-gray-600 mb-8">
                                    Por trás de cada entrega existe uma vasta rede de motoristas, agrônomos, desenvolvedores e especialistas em qualidade. Somos todos apaixonados pelo potencial de Angola.
                                </p>
                                <button className="px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:opacity-90 transition-opacity">
                                    Junte-se a Nós
                                </button>
                            </div>

                            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <img
                                    src="/equipa-campo.jpg"
                                    className="rounded-3xl shadow-lg w-full h-64 object-cover"
                                    alt="Equipa no campo"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=2000"
                                    className="rounded-3xl shadow-lg w-full h-64 object-cover mt-8"
                                    alt="Reunião de equipa"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default SobrePage;
