"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-24 bg-white/50 backdrop-blur-xl">
                <div className="max-w-4xl mx-auto px-6 py-16">
                    <div className="prose prose-lg prose-green max-w-none text-gray-700">
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 border-b-2 border-primary/20 pb-4">
                            Termos de Uso
                        </h1>

                        <p className="lead">
                            Bem-vindo à Etuti. Ao utilizar o nosso site e serviços, concorda com os seguintes termos e condições.
                        </p>

                        <h3 className="text-2xl font-bold mt-12 mb-4 text-gray-800 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-primary text-sm font-bold">1</span>
                            Aceitação dos Termos
                        </h3>
                        <p>
                            Ao aceder ou utilizar o Serviço, concorda que está vinculado a estes Termos. Se não concordar com qualquer parte dos termos, não poderá aceder ao Serviço. Estes Termos aplicam-se a todos os visitantes, utilizadores e outras pessoas que acedam ou utilizem o Serviço.
                        </p>

                        <h3 className="text-2xl font-bold mt-12 mb-4 text-gray-800 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-primary text-sm font-bold">2</span>
                            Compras
                        </h3>
                        <p>
                            Se desejar comprar qualquer produto ou serviço disponibilizado através do Serviço ("Compra"), poderá ser-lhe pedido que forneça certas informações relevantes para a sua Compra, incluindo, sem limitação, o número do seu cartão de crédito, a data de validade do seu cartão de crédito, o seu endereço de faturação e as suas informações de envio.
                        </p>

                        <h3 className="text-2xl font-bold mt-12 mb-4 text-gray-800 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-primary text-sm font-bold">3</span>
                            Assinaturas
                        </h3>
                        <p>
                            Algumas partes do Serviço são cobradas com base numa assinatura ("Assinatura(s)"). Será cobrado antecipadamente de forma recorrente e periódica ("Ciclo de Faturação"). Os ciclos de faturação são definidos mensalmente. No final de cada Ciclo de Faturação, a sua Assinatura renovar-se-á automaticamente sob as mesmas condições, a menos que a cancele ou a Etuti a cancele.
                        </p>

                        <h3 className="text-2xl font-bold mt-12 mb-4 text-gray-800 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-primary text-sm font-bold">4</span>
                            Conteúdo
                        </h3>
                        <p>
                            O nosso Serviço permite-lhe publicar, ligar, armazenar, partilhar e disponibilizar determinadas informações, textos, gráficos, vídeos ou outro material ("Conteúdo"). É responsável pelo Conteúdo que publicar no Serviço, incluindo a sua legalidade, fiabilidade e adequação.
                        </p>

                        <h3 className="text-2xl font-bold mt-12 mb-4 text-gray-800 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-primary text-sm font-bold">5</span>
                            Alterações
                        </h3>
                        <p>
                            Reservamo-nos o direito, a nosso exclusivo critério, de modificar ou substituir estes Termos a qualquer momento. Se uma revisão for material, tentaremos fornecer um aviso com pelo menos 30 dias de antecedência antes de quaisquer novos termos entrarem em vigor.
                        </p>

                        <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-primary mt-12 mb-8">
                            <h4 className="font-bold text-gray-900 mb-2">Contacto</h4>
                            <p className="text-sm">
                                Se tiver alguma dúvida sobre estes Termos, por favor contacte-nos através do email <a href="mailto:legal@etuti.ao" className="text-primary font-bold hover:underline">legal@etuti.ao</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsPage;
