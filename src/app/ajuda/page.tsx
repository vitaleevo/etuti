"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HelpPage = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Como funciona a assinatura Etuti?",
            answer: "A assinatura Etuti é um serviço mensal onde escolhe um plano (Essencial, Família, ou Premium) e recebe semanalmente uma caixa de frutas frescas da época em sua casa, sem custos de entrega adicionais."
        },
        {
            question: "Quais são as áreas de entrega?",
            answer: "Atualmente entregamos em toda a área urbana de Luanda (Talatona, Benfica, Kilamba, Centro da Cidade, Viana). Estamos a expandir para outras províncias em breve."
        },
        {
            question: "Posso cancelar a qualquer momento?",
            answer: "Sim! Não temos fidelização obrigatória. Pode cancelar, pausar ou alterar o seu plano diretamente na sua área de cliente até 24h antes da próxima entrega."
        },
        {
            question: "As frutas são orgânicas?",
            answer: "Trabalhamos exclusivamente com pequenos produtores locais que seguem práticas de cultivo sustentável e natural. A maioria dos nossos produtos cresce sem o uso de pesticidas industriais."
        },
        {
            question: "E se eu receber um produto estragado?",
            answer: "A garantia de qualidade Etuti cobre 100% dos produtos. Se algo não estiver perfeito, envie-nos uma foto no WhatsApp e faremos a reposição na entrega seguinte ou devolveremos o valor correspondente."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-24 bg-background-light">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm">Suporte</span>
                        <h1 className="font-display font-extrabold text-4xl mt-2 mb-6 text-gray-900">Como podemos ajudar?</h1>
                        <div className="relative max-w-lg mx-auto">
                            <input
                                type="text"
                                placeholder="Pesquisar dúvidas..."
                                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                            />
                            <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className={`bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 ${openIndex === idx ? 'shadow-lg ring-1 ring-primary/10' : 'hover:border-gray-300'}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left font-bold text-gray-900 focus:outline-none"
                                >
                                    <span className="text-lg">{faq.question}</span>
                                    <span className={`material-icons text-primary transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                                        expand_more
                                    </span>
                                </button>
                                <div
                                    className={`px-6 text-gray-600 leading-relaxed transition-all duration-300 overflow-hidden ${openIndex === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    {faq.answer}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center bg-green-50 rounded-3xl p-10 border border-green-100">
                        <h3 className="font-bold text-2xl text-gray-900 mb-4">Ainda tem dúvidas?</h3>
                        <p className="text-gray-600 mb-8 max-w-md mx-auto">
                            A nossa equipa de apoio ao cliente está disponível todos os dias das 8h às 18h.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="https://wa.me/244900000000" className="flex items-center justify-center gap-2 bg-whatsapp text-white px-6 py-3 rounded-xl font-bold hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20">
                                <span className="material-icons">chat</span>
                                Chat WhatsApp
                            </a>
                            <a href="mailto:ajuda@etuti.ao" className="flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-bold border border-gray-200 hover:bg-gray-50 transition-colors">
                                <span className="material-icons">email</span>
                                Enviar Email
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default HelpPage;
