"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-24 bg-white/50 backdrop-blur-xl">
                <div className="max-w-4xl mx-auto px-6 py-16">
                    <div className="prose prose-lg prose-green max-w-none text-gray-700">
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 border-b-2 border-primary/20 pb-4">
                            Política de Privacidade
                        </h1>

                        <p className="lead">
                            A sua privacidade é fundamental para a Etuti. Esta política descreve como recolhemos, usamos e protegemos os seus dados pessoais ao utilizar a nossa plataforma.
                        </p>

                        <h3 className="text-2xl font-bold mt-12 mb-4 text-gray-800 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-primary text-sm font-bold">1</span>
                            Recolha de Informação
                        </h3>
                        <p>
                            Recolhemos informações quando se regista no nosso site, faz uma encomenda, subscreve a nossa newsletter ou preenche um formulário. As informações recolhidas incluem o seu nome, endereço de e-mail, número de telefone e dados de localização para entrega.
                        </p>

                        <h3 className="text-2xl font-bold mt-12 mb-4 text-gray-800 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-primary text-sm font-bold">2</span>
                            Uso da Informação
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                            <li>Para personalizar a sua experiência e responder melhor às suas necessidades individuais.</li>
                            <li>Para melhorar o nosso site com base no feedback que recebemos de si.</li>
                            <li>Para processar transações de forma rápida e segura.</li>
                            <li>Para enviar e-mails periódicos sobre o estado da sua encomenda ou atualizações de produtos.</li>
                        </ul>

                        <h3 className="text-2xl font-bold mt-12 mb-4 text-gray-800 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-primary text-sm font-bold">3</span>
                            Proteção de Dados
                        </h3>
                        <p>
                            Implementamos uma variedade de medidas de segurança para manter a segurança das suas informações pessoais. Utilizamos encriptação SSL para proteger dados sensíveis transmitidos online e armazenamos as informações em servidores seguros.
                        </p>

                        <h3 className="text-2xl font-bold mt-12 mb-4 text-gray-800 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-primary text-sm font-bold">4</span>
                            Partilha com Terceiros
                        </h3>
                        <p>
                            Não vendemos, trocamos ou transferimos as suas informações pessoais identificáveis para terceiros. Isto não inclui terceiros de confiança que nos ajudam a operar o nosso site, conduzir o nosso negócio ou servi-lo, desde que essas partes concordem em manter esta informação confidencial.
                        </p>

                        <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-primary mt-12 mb-8">
                            <h4 className="font-bold text-gray-900 mb-2">Contacto</h4>
                            <p className="text-sm">
                                Se tiver alguma dúvida sobre esta política de privacidade, pode contactar-nos através do email <a href="mailto:privacidade@etuti.ao" className="text-primary font-bold hover:underline">privacidade@etuti.ao</a>.
                            </p>
                        </div>

                        <p className="text-xs text-gray-400 mt-8 text-center italic">
                            Última atualização: 07 de Fevereiro de 2026
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPage;
