"use client";

import React from 'react';
import Link from 'next/link';
import { PRODUCTS } from '@/constants';
import { useCart } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Page() {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20 overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-green-50/50 to-white ">
          <div className="absolute inset-0 hero-pattern z-0 pointer-events-none"></div>
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 transform translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10 transform -translate-x-1/3"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-center lg:text-left space-y-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 text-secondary-dark text-sm font-bold tracking-wide border border-yellow-200 uppercase animate-bounce-subtle">
                  <span className="material-icons text-lg mr-2">waving_hand</span> Wete Wa Nsi
                </div>
                <h1 className="font-display font-extrabold text-5xl lg:text-7xl leading-tight text-gray-900 ">
                  O Sabor Real de Angola, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Direto da Lavra.</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  A ETUTI conecta famílias angolanas aos melhores pequenos produtores nacionais. Frutas orgânicas, colhidas no ponto e entregues em sua casa em Luanda.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/frutas" className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-opacity-90 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-500/20 transform hover:-translate-y-1">
                    Explorar Frutas
                    <span className="material-icons ml-2">shopping_basket</span>
                  </Link>
                  <Link href="/assinatura" className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-100 hover:border-secondary text-gray-900 font-bold rounded-xl transition-all shadow-sm">
                    Ver Assinaturas
                  </Link>
                </div>

                <div className="pt-8 flex items-center justify-center lg:justify-start gap-4 text-sm font-medium text-gray-500 ">
                  <div className="flex items-center gap-1">
                    <span className="material-icons text-primary text-xl">check_circle</span>
                    <span>100% Orgânico</span>
                  </div>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <div className="flex items-center gap-1">
                    <span className="material-icons text-primary text-xl">check_circle</span>
                    <span>Entrega Rápida</span>
                  </div>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <div className="flex items-center gap-1">
                    <span className="material-icons text-primary text-xl">check_circle</span>
                    <span>Produtores Locais</span>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full blur-3xl transform scale-95"></div>
                <img
                  alt="Frutas Frescas de Angola"
                  className="relative z-10 w-full h-[500px] object-cover rounded-[3rem] shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]"
                  src="/hero-frutas.png"
                />
                <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 animate-bounce" style={{ animationDuration: '4s' }}>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl text-primary">
                      <span className="material-icons text-3xl">local_shipping</span>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Entrega em Luanda</p>
                      <p className="text-lg font-extrabold text-gray-900 ">Em até 24h</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-10 -right-6 z-20 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100 animate-bounce" style={{ animationDuration: '5s' }}>
                  <div className="bg-yellow-100 p-3 rounded-xl text-secondary-dark ">
                    <span className="material-icons">verified</span>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900 ">Qualidade Premium</p>
                    <p className="text-xs text-gray-500 font-medium">Garantia ETUTI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-white " id="sobre">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-100 rounded-full -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-100 rounded-full -z-10"></div>
                <img
                  alt="Produtor Angolano na fazenda segurando frutas frescas"
                  className="w-full h-[500px] object-cover rounded-3xl shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-500"
                  src="/campo-mesa.jpg"
                />
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-lg border border-gray-100 ">
                  <p className="text-sm font-medium italic text-gray-600 ">"Cada fruta colhida aqui carrega a alma da nossa terra e o esforço das nossas mãos."</p>
                  <p className="text-xs font-bold text-primary mt-2">- Sr. João, Produtor Parceiro no Bengo</p>
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <h2 className="text-primary font-bold uppercase tracking-widest text-sm">Nossa História</h2>
                <h3 className="text-4xl lg:text-5xl font-display font-extrabold text-gray-900 leading-tight">
                  Do Campo para a Mesa: <br />Uma Missão de <span className="text-secondary">Orgulho Nacional</span>
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  A ETUTI nasceu com um propósito simples: valorizar o que é nosso. Acreditamos que as melhores frutas não precisam viajar oceanos para chegar até você. Elas crescem aqui mesmo, sob o sol de Angola.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Trabalhamos diretamente com pequenos produtores locais, garantindo comércio justo e práticas sustentáveis. Quando você escolhe a ETUTI, você não está apenas comprando uma fruta; você está apoiando famílias, fortalecendo a economia local e levando saúde pura para sua casa.
                </p>
                <div className="pt-4">
                  <Link href="/sobre" className="text-primary font-bold hover:text-primary-dark transition-colors inline-flex items-center gap-2 group">
                    Conheça nossos produtores
                    <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Producers Section */}
        <section className="py-24 bg-gray-50 relative overflow-hidden" id="produtores">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 order-2 lg:order-1">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-xs font-bold tracking-wider uppercase border border-orange-200 ">
                  <span className="material-icons text-sm mr-2">agriculture</span> Nossos Produtores
                </div>
                <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-gray-900 leading-tight">
                  Histórias que Brotam da <span className="text-secondary">Terra Angolana</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Acreditamos no conceito "Farm to Table" (da fazenda para a mesa). Cada fruta que chega à sua casa tem um rosto, um nome e uma história. Conectamos você diretamente à <strong>Fazenda Sol Nascente</strong> em Malanje e a dezenas de famílias que cultivam com amor e respeito à natureza.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 group hover:border-secondary/50 transition-colors">
                    <span className="material-icons text-secondary text-3xl mb-3 group-hover:scale-110 transition-transform">compost</span>
                    <h4 className="font-bold text-gray-900 mb-1">Cultivo Natural</h4>
                    <p className="text-sm text-gray-500">Sem agrotóxicos nocivos, apenas o poder da terra.</p>
                  </div>
                  <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 group hover:border-primary/50 transition-colors">
                    <span className="material-icons text-primary text-3xl mb-3 group-hover:scale-110 transition-transform">handshake</span>
                    <h4 className="font-bold text-gray-900 mb-1">Comércio Justo</h4>
                    <p className="text-sm text-gray-500">Pagamos o valor real que o produtor merece.</p>
                  </div>
                </div>
                <div className="pt-4">
                  <Link href="/produtor" className="inline-flex items-center text-primary font-bold hover:text-primary-dark transition-colors text-lg group">
                    Conhecer mais produtores
                    <span className="material-icons ml-2 transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                  <img
                    alt="Agricultor na Fazenda Sol Nascente"
                    className="w-full h-[650px] object-cover hover:scale-105 transition-transform duration-1000"
                    src="https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=2000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                  <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
                    <div className="flex items-center gap-4 mb-4">
                      {/* Placeholder for avatar */}
                      <div className="w-14 h-14 rounded-full border-2 border-secondary bg-gray-300"></div>
                      <div>
                        <h4 className="font-bold text-xl">Sr. Manuel Teca</h4>
                        <p className="text-xs font-bold text-secondary uppercase tracking-widest">Fazenda Sol Nascente, Malanje</p>
                      </div>
                    </div>
                    <p className="text-gray-100 italic text-sm leading-relaxed border-l-2 border-primary pl-4">
                      "Para nós, orgânico não é moda, é tradição. Cuidamos do solo como um membro da família, e ele nos retribui com frutas que têm o verdadeiro sabor de Angola."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-white " id="servicos">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-4">Serviços Feitos para Você</h2>
              <p className="text-gray-500 text-lg">Flexibilidade e conveniência para atender ao seu estilo de vida saudável.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-icons text-primary text-3xl">storefront</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Venda Direta</h3>
                <p className="text-gray-500 mb-6">
                  Escolha suas frutas avulsas favoritas. Perfeito para compras pontuais ou para experimentar a variedade da estação.
                </p>
                <Link href="/frutas" className="text-sm font-bold text-primary hover:text-secondary transition-colors uppercase tracking-wide">Comprar Agora</Link>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-secondary/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-bl-xl">Mais Popular</div>
                <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-icons text-secondary-dark text-3xl">calendar_month</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Assinaturas Mensais</h3>
                <p className="text-gray-500 mb-6">
                  Receba uma cesta fresca toda semana. Planos flexíveis que garantem saúde constante para sua família com desconto.
                </p>
                <Link href="/assinatura" className="text-sm font-bold text-secondary-dark hover:text-primary transition-colors uppercase tracking-wide">Ver Planos</Link>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-icons text-blue-600 text-3xl">local_shipping</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Entregas Personalizadas</h3>
                <p className="text-gray-500 mb-6">
                  Precisa de uma entrega especial para eventos, escritórios ou presentes? Nós personalizamos a logística para você.
                </p>
                <Link href="/contacto" className="text-sm font-bold text-blue-600 hover:text-primary transition-colors uppercase tracking-wide">Fale Conosco</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="w-full md:w-1/2">
                <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-8">
                  Por que escolher a ETUTI? <br />
                  <span className="text-primary">8 Benefícios para sua Saúde</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: "Rico em Nutrientes", desc: "Vitaminas essenciais preservadas.", icon: "check_circle" },
                    { title: "Sabor Superior", desc: "Colheita no ponto ideal.", icon: "check_circle" },
                    { title: "Livre de Químicos", desc: "Cultivo orgânico certificado.", icon: "check_circle" },
                    { title: "Apoio Local", desc: "Fortalece a economia de Angola.", icon: "check_circle" },
                    { title: "Sustentabilidade", desc: "Menor pegada de carbono.", icon: "check_circle" },
                    { title: "Variedade Sazonal", desc: "O melhor de cada época.", icon: "check_circle" },
                    { title: "Conveniência", desc: "Entrega na porta de casa.", icon: "check_circle" },
                    { title: "Garantia de Qualidade", desc: "Satisfação ou reposição.", icon: "check_circle" }
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="material-icons text-green-500 mt-1">{benefit.icon}</span>
                      <div>
                        <h4 className="font-bold text-gray-900 ">{benefit.title}</h4>
                        <p className="text-sm text-gray-500 ">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2 relative">
                <div className="absolute inset-0 bg-secondary/10 rounded-full transform scale-90 blur-2xl"></div>
                <img
                  alt="Benefícios das frutas"
                  className="relative z-10 w-full rounded-2xl shadow-xl transform hover:scale-[1.02] transition-transform duration-500"
                  src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=2000"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-24 bg-gray-50 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-xl">
                <h2 className="font-display font-bold text-3xl lg:text-5xl mb-4 text-gray-900 tracking-tight italic">Colheita de Hoje</h2>
                <p className="text-gray-600 text-lg">Produtos selecionados que acabaram de chegar das províncias.</p>
              </div>
              <Link href="/frutas" className="group flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                Ver Catálogo Completo
                <span className="material-icons">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {PRODUCTS.slice(0, 4).map((product) => (
                <div key={product.id} className="group bg-white rounded-[2.5rem] p-5 shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-gray-100 flex flex-col">
                  <Link href={`/product/${product.id}`} className="relative w-full aspect-square rounded-[2rem] overflow-hidden mb-6 bg-gray-50">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    {product.isNew && (
                      <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg uppercase tracking-widest">Novo</div>
                    )}
                  </Link>
                  <div className="flex-grow space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-xl group-hover:text-primary transition-colors line-clamp-1">{product.name}</h3>
                      <div className="flex items-center text-secondary">
                        <span className="material-icons text-xs">star</span>
                        <span className="text-xs font-bold ml-1">{product.rating}</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 flex items-center gap-1 font-medium">
                      <span className="material-icons text-xs">location_on</span>
                      {product.origin}
                    </p>
                    <div className="pt-4 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Por {product.unit}</p>
                        <p className="font-extrabold text-2xl text-primary">{product.price.toLocaleString('pt-AO')} Kz</p>
                      </div>
                      <button
                        onClick={() => addToCart(product, 1)}
                        className="w-12 h-12 bg-primary/10 text-primary rounded-2xl hover:bg-primary hover:text-white transition-all flex items-center justify-center shadow-sm"
                      >
                        <span className="material-icons">add_shopping_cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-white border-y border-gray-100 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-3xl text-center text-gray-900 mb-16">
              Quem prova, <span className="text-secondary">Aprova!</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Maria S.', loc: 'Talatona, Luanda', quote: 'A qualidade das frutas é incomparável. Chegam sempre frescas e o sabor é muito melhor do que as do supermercado. Recomendo muito!' },
                { name: 'Paulo M.', loc: 'Maianga, Luanda', quote: 'Fiz a assinatura mensal para o escritório e foi a melhor decisão. A equipe adora ter frutas frescas disponíveis. O serviço é impecável.' },
                { name: 'Ana P.', loc: 'Viana, Luanda', quote: 'Adoro saber que estou ajudando os produtores locais. As laranjas do Kwanza Sul são as doces que já provei. Entrega super rápida.' }
              ].map((testimonial, i) => (
                <div key={i} className="bg-gray-50 p-8 rounded-2xl relative">
                  <span className="material-icons text-primary/20 text-6xl absolute top-4 left-4">format_quote</span>
                  <div className="relative z-10">
                    <div className="flex text-yellow-400 text-sm mb-4">
                      {[1, 2, 3, 4, 5].map(star => <span key={star} className="material-icons">star</span>)}
                    </div>
                    <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                        <p className="text-xs text-gray-500">{testimonial.loc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subscription CTA */}
        <section className="py-24 relative overflow-hidden" id="assinatura">
          <div className="absolute inset-0 bg-secondary z-0">
            <div className="absolute inset-0 opacity-10 pattern-dots"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-white rounded-3xl p-8 lg:p-16 shadow-2xl flex flex-col md:flex-row items-center gap-12 border border-gray-100 ">
              <div className="flex-1 space-y-6 text-center md:text-left">
                <h2 className="font-display font-extrabold text-3xl md:text-5xl text-gray-900 leading-tight">
                  Crie sua <span className="text-primary">Cesta Personalizada</span>
                </h2>
                <p className="text-lg text-gray-600 ">
                  Escolha suas frutas favoritas e monte uma assinatura mensal. Receba frescor na sua porta toda semana com 15% de desconto.
                </p>
                <Link href="/assinatura" className="inline-block px-8 py-4 bg-primary hover:bg-opacity-90 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-500/30 transform hover:-translate-y-1">
                  Montar Minha Cesta
                </Link>
              </div>
              <div className="flex-1 relative">
                <div className="absolute inset-0 bg-yellow-400 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
                <img
                  alt="Box de Frutas"
                  className="relative rounded-2xl shadow-xl w-full max-w-md mx-auto transform rotate-3 hover:rotate-0 transition-all duration-500"
                  src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=2000"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
