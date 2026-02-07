"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SeasonalityPage = () => {
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    const fruits = [
        { name: 'Manga', seasons: [0, 1, 2, 10, 11] }, // Jan-Mar, Nov-Dez
        { name: 'Abacaxi', seasons: [3, 4, 5, 6, 7, 8, 9] }, // Abr-Out
        { name: 'Maracujá', seasons: [0, 1, 2, 3, 10, 11] }, // Jan-Abr, Nov-Dez
        { name: 'Laranja', seasons: [4, 5, 6, 7, 8] }, // Mai-Set
        { name: 'Limão', seasons: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] }, // Todo ano
        { name: 'Banana', seasons: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] }, // Todo ano
        { name: 'Abacate', seasons: [3, 4, 5, 6, 7] }, // Abr-Ago
        { name: 'Papaia', seasons: [2, 3, 4, 5, 6, 7, 8, 9, 10] }, // Cedo-Tarde
        { name: 'Morango', seasons: [5, 6, 7, 8, 9] }, // Jun-Out
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-24 bg-background-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center mb-16">
                        <h1 className="font-display font-extrabold text-4xl mb-4 text-gray-900">Calendário de Sazonalidade</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Saiba as melhores épocas para comprar as suas frutas favoritas. Respeitar o ciclo da natureza garante produtos mais saborosos e nutritivos.
                        </p>
                        <div className="mt-8 flex items-center justify-center gap-6">
                            <div className="flex items-center gap-2">
                                <span className="w-4 h-4 bg-primary rounded-full"></span>
                                <span className="text-sm font-bold text-gray-700">Época de Colheita</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-4 h-4 bg-gray-200 rounded-full"></span>
                                <span className="text-sm font-bold text-gray-500">Fora de Época</span>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto pb-8 rounded-3xl shadow-xl border border-gray-100 bg-white">
                        <table className="w-full min-w-[800px]">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-100">
                                    <th className="py-6 px-6 text-left font-bold text-gray-900 text-lg sticky left-0 bg-gray-50 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                                        Fruta / Mês
                                    </th>
                                    {months.map((m) => (
                                        <th key={m} className="py-6 px-2 text-center font-bold text-gray-500 text-sm uppercase tracking-wider">
                                            {m}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {fruits.map((fruit, idx) => (
                                    <tr key={fruit.name} className="hover:bg-green-50/50 transition-colors group">
                                        <td className="py-4 px-6 font-bold text-gray-900 sticky left-0 bg-white group-hover:bg-green-50/50 transition-colors shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)] border-r border-gray-100 z-10">
                                            {fruit.name}
                                        </td>
                                        {months.map((_, mIdx) => {
                                            const isActive = fruit.seasons.includes(mIdx);
                                            return (
                                                <td key={mIdx} className="py-4 px-2 text-center p-3 relative">
                                                    <div className={`
                            mx-auto w-full h-10 rounded-xl transition-all duration-500 flex items-center justify-center
                            ${isActive
                                                            ? 'bg-primary text-white shadow-md shadow-green-500/20 scale-90 opacity-100'
                                                            : 'bg-gray-50 opacity-0 scale-50'
                                                        }
                          `}>
                                                        {isActive && <span className="material-icons text-sm">check_circle</span>}
                                                    </div>
                                                </td>
                                            );
                                        })}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-12 bg-secondary/10 p-8 rounded-3xl border border-secondary/20 flex flex-col md:flex-row items-center gap-6">
                        <div className="bg-secondary p-4 rounded-full text-white">
                            <span className="material-icons text-3xl">info</span>
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="font-bold text-xl text-gray-900 mb-2">Importância da Sazonalidade</h3>
                            <p className="text-gray-700">
                                Consumir produtos da época apoia a agricultura local, reduz a pegada ecológica (menos transporte e armazenamento) e garante que você está a comer alimentos no pico das suas propriedades nutricionais.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SeasonalityPage;
