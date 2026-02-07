"use client";
import React from 'react';
import Link from 'next/link';
import { Home, MessageCircle, AlertCircle } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <div className="bg-white p-8 rounded-3xl shadow-xl max-w-lg w-full text-center space-y-6">
                <div className="bg-orange-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                    <AlertCircle size={48} className="text-secondary" />
                </div>

                <h1 className="font-display font-extrabold text-4xl text-gray-900">
                    Página em Construção
                </h1>

                <p className="text-gray-600 text-lg leading-relaxed">
                    Opa! Esta página ainda está a ser preparada com todo o carinho pelos nossos agricultores digitais.
                </p>

                <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                    <p className="text-primary font-medium text-sm">
                        Estamos a cultivar novas funcionalidades. Volte em breve!
                    </p>
                </div>

                <div className="grid gap-3 pt-4">
                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 bg-primary hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-green-900/10 active:scale-[0.98]"
                    >
                        <Home size={20} />
                        Voltar ao Início
                    </Link>

                    <Link
                        href="/contacto"
                        className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-bold py-4 px-6 rounded-xl border border-gray-200 transition-all active:scale-[0.98]"
                    >
                        <MessageCircle size={20} />
                        Fale Connosco
                    </Link>
                </div>
            </div>

            <p className="mt-8 text-gray-400 text-sm font-medium uppercase tracking-widest">
                ETUTI • Wete Wa Nsi
            </p>
        </div>
    );
}
