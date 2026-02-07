"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const ProducerPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-20">
                {/* Hero Section */}
                <section className="relative py-20 bg-primary overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595855799307-2856f616e6d1?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
                        <h1 className="font-display font-extrabold text-4xl md:text-6xl mb-6">
                            Cultive o Futuro com a Etuti
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-green-50 font-medium">
                            Estamos à procura dos melhores produtores de Angola. Junte-se à nossa rede e leve os seus produtos a milhares de famílias.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="#formulario"
                                className="bg-secondary hover:bg-yellow-400 text-secondary-dark font-bold py-4 px-8 rounded-xl transition-all shadow-lg transform hover:-translate-y-1"
                            >
                                Quero ser Parceiro
                            </Link>
                            <Link
                                href="/sobre"
                                className="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white font-bold py-4 px-8 rounded-xl transition-all"
                            >
                                Saiba Mais
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold uppercase tracking-widest text-sm">Vantagens</span>
                            <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 text-gray-900">Porquê vender na Etuti?</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                {
                                    icon: "storefront",
                                    title: "Escoamento Garantido",
                                    desc: "Acabe com o desperdício. Ligamos a sua produção diretamente ao consumidor final em Luanda."
                                },
                                {
                                    icon: "payments",
                                    title: "Preço Justo",
                                    desc: "Valorizamos o seu trabalho. Negociamos preços que dignificam o produtor e são justos para quem compra."
                                },
                                {
                                    icon: "agriculture",
                                    title: "Apoio Técnico",
                                    desc: "Receba visitas dos nossos agrónomos para melhorar a qualidade e produtividade da sua lavra."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-gray-50 p-8 rounded-3xl hover:shadow-xl transition-shadow border border-gray-100">
                                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-primary mb-6">
                                        <span className="material-icons text-3xl">{item.icon}</span>
                                    </div>
                                    <h3 className="font-bold text-xl mb-4 text-gray-900">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Form Section */}
                <section id="formulario" className="py-24 bg-green-50">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                            <div className="text-center mb-10">
                                <h2 className="font-display font-bold text-3xl text-gray-900 mb-4">Candidate-se Agora</h2>
                                <p className="text-gray-500">Preencha o formulário abaixo e a nossa equipa entrará em contacto em até 48 horas.</p>
                            </div>

                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Nome Completo</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Seu nome" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Telefone</label>
                                        <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="+244 9XX XXX XXX" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Localização da Lavra</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Província, Município, Comuna" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Principais Produtos</label>
                                    <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all h-32" placeholder="Ex: Batata rena, Tomate, Banana pão..."></textarea>
                                </div>

                                <button type="submit" className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-green-700 transition-colors">
                                    Enviar Candidatura
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ProducerPage;
