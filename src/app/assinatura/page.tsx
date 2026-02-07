"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Check,
    Leaf,
    Truck,
    Calendar,
    ChevronDown,
    Star,
    ArrowRight,
    Clock,
    ShieldCheck,
    Heart
} from 'lucide-react';

const plans = [
    {
        id: 'essencial',
        name: "Frutas Essencial",
        price: "30.000",
        period: "mês",
        description: "Ideal para solteiros ou casais que buscam saúde e praticidade.",
        features: [
            "5kg a 7kg de frutas selecionadas",
            "Variedade de 4 a 6 tipos de época",
            "Entrega semanal grátis",
            "Gestão fácil via WhatsApp"
        ],
        color: "bg-primary",
        textColor: "text-primary",
        recommended: false
    },
    {
        id: 'familia',
        name: "Frutas Família",
        price: "60.000",
        period: "mês",
        description: "Nossa caixa mais amada, feita para nutrir toda a sua família.",
        features: [
            "10kg a 12kg de frutas premium",
            "Variedade de 8 a 10 tipos",
            "Entrega prioritária semanal",
            "Inclui frutas de época especiais",
            "Brinde surpresa mensal",
            "Cancelamento flexível"
        ],
        color: "bg-secondary",
        textColor: "text-secondary",
        recommended: true
    },
    {
        id: 'premium',
        name: "Experiência Premium",
        price: "90.000",
        period: "mês",
        description: "O melhor da nossa terra com um toque de exclusividade.",
        features: [
            "15kg+ seleção de luxo",
            "Variedade ilimitada e exótica",
            "Caixa personalizada reutilizável",
            "Horário de entrega agendado",
            "Suporte VIP dedicado",
            "Acesso antecipado a novas colheitas"
        ],
        color: "bg-primary",
        textColor: "text-primary",
        recommended: false
    }
];

const faqs = [
    {
        question: "Como funciona a entrega das frutas?",
        answer: "As entregas são feitas semanalmente no dia escolhido por você. Nossas frutas são colhidas e selecionadas no dia anterior para garantir o máximo frescor."
    },
    {
        question: "Posso escolher as frutas que vêm na caixa?",
        answer: "Trabalhamos com o conceito de 'Colheita do Dia'. No entanto, enviamos uma lista semanal e você pode indicar até 2 frutas que não deseja receber."
    },
    {
        question: "Existe fidelidade ou taxa de cancelamento?",
        answer: "Não. Acreditamos na qualidade do nosso serviço. Você pode cancelar ou pausar sua assinatura a qualquer momento sem custos adicionais."
    },
    {
        question: "Quais são as formas de pagamento?",
        answer: "Aceitamos transferências bancárias, pagamentos via multicaixa express e cartões de crédito."
    }
];

const FeatureItem = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 "
    >
        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary">
            <Icon size={32} />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 ">{description}</p>
    </motion.div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
            >
                <span className="text-lg font-semibold text-gray-900 ">{question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown className="text-gray-500" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-gray-600 leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const AssinaturaPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow pt-20">
                {/* Hero Section */}
                <section className="relative py-20 overflow-hidden bg-gradient-to-br from-green-50 to-white ">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-full -z-0 hidden lg:block" />

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
                                    <Star size={16} className="mr-2 fill-primary" />
                                    SABOR E SAÚDE EM SUA CASA
                                </div>
                                <h1 className="text-5xl lg:text-7xl font-display font-black text-gray-900 mb-6 leading-tight">
                                    Sua dose semanal de <span className="text-primary italic">natureza</span> viva.
                                </h1>
                                <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                                    Subscreva os nossos planos e receba em casa as melhores frutas da época, colhidas com amor e entregues com o máximo frescor.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <a href="#planos" className="px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center">
                                        Ver Planos <ArrowRight size={20} className="ml-2" />
                                    </a>
                                    <button className="px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl shadow-sm border border-gray-100 hover:bg-gray-50 transition-all duration-300">
                                        Como funciona?
                                    </button>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative"
                            >
                                <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white ">
                                    <Image
                                        src="/morangos-lubango.jpg"
                                        alt="Cesta de Frutas Etuti"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                {/* Float elements */}
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-8 -right-8 bg-secondary p-4 rounded-2xl shadow-lg border-2 border-white hidden md:block"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                            <Truck className="text-white" />
                                        </div>
                                        <div className="text-white">
                                            <p className="text-xs font-bold uppercase tracking-wider">Entrega</p>
                                            <p className="font-black">100% Grátis</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-24 bg-white ">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-display font-black text-gray-900 mb-4">Porquê escolher Etuti?</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Levamos muito mais do que apenas frutas. Levamos saúde, conveniência e apoio à produção local.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <FeatureItem
                                icon={Leaf}
                                title="100% Fresco"
                                description="Frutas colhidas no ponto ideal de maturação, sem armazenamento prolongado."
                            />
                            <FeatureItem
                                icon={Truck}
                                title="Entrega em Casa"
                                description="Esqueça as idas ao mercado. Nós entregamos na sua porta com todo conforto."
                            />
                            <FeatureItem
                                icon={ShieldCheck}
                                title="Qualidade Garantida"
                                description="Processo rigoroso de seleção. Se não estiver perfeito, nós trocamos."
                            />
                            <FeatureItem
                                icon={Heart}
                                title="Apoio Local"
                                description="Trabalhamos diretamente com agricultores da nossa região."
                            />
                        </div>
                    </div>
                </section>

                {/* Dynamic Process Section */}
                <section className="py-24 bg-gray-50 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1 relative">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-4">
                                        <div className="h-48 rounded-2xl overflow-hidden relative shadow-lg">
                                            <Image src="/hero-frutas.png" alt="Frutas" fill className="object-cover" />
                                        </div>
                                        <div className="h-64 rounded-2xl overflow-hidden relative shadow-lg">
                                            <Image src="/campo-mesa.jpg" alt="Frutas" fill className="object-cover" />
                                        </div>
                                    </div>
                                    <div className="space-y-4 pt-8">
                                        <div className="h-64 rounded-2xl overflow-hidden relative shadow-lg">
                                            <Image src="/campo-mesa.jpg" alt="Frutas" fill className="object-cover" />
                                        </div>
                                        <div className="h-48 rounded-2xl overflow-hidden relative shadow-lg">
                                            <Image src="/morangos-lubango.jpg" alt="Frutas" fill className="object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="order-1 lg:order-2">
                                <h2 className="text-4xl font-display font-black text-gray-900 mb-8">Como funciona a sua jornada</h2>

                                <div className="space-y-8">
                                    {[
                                        { step: 1, title: "Escolha seu plano", desc: "Selecione a caixa que melhor se adapta às necessidades da sua casa." },
                                        { step: 2, title: "Nós preparamos", desc: "Nossa equipe seleciona manualmente cada peça de fruta com rigor total." },
                                        { step: 3, title: "Receba frescura", desc: "Entregamos na sua morada semanalmente em horários convenientes." }
                                    ].map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex gap-6"
                                        >
                                            <div className="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-black text-xl shadow-lg shadow-secondary/20">
                                                {item.step}
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Plans Section */}
                <section id="planos" className="py-24 bg-white ">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-display font-black text-gray-900 mb-4">Planos de Assinatura</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Escolha a sua periodicidade e esqueça as preocupações. Saúde garantida toda semana.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 items-start">
                            {plans.map((plan, idx) => (
                                <motion.div
                                    key={plan.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`
                    relative p-8 rounded-3xl border-2 transition-all duration-300
                    ${plan.recommended
                                            ? 'border-secondary bg-white shadow-2xl scale-105 z-10'
                                            : 'border-gray-100 bg-gray-50 hover:border-primary/30'
                                        }
                  `}
                                >
                                    {plan.recommended && (
                                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-secondary text-white px-6 py-1 rounded-full text-sm font-black uppercase tracking-widest shadow-lg">
                                            MAIS POPULAR
                                        </div>
                                    )}

                                    <div className="mb-8">
                                        <h3 className="text-2xl font-black mb-2">{plan.name}</h3>
                                        <p className="text-sm text-gray-500 min-h-[40px]">{plan.description}</p>
                                    </div>

                                    <div className="flex items-baseline gap-1 mb-8">
                                        <span className="text-sm font-bold text-gray-500">Kz</span>
                                        <span className="text-4xl font-black text-gray-900 ">{plan.price}</span>
                                        <span className="text-gray-500 font-medium">/{plan.period}</span>
                                    </div>

                                    <ul className="space-y-4 mb-10">
                                        {plan.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-start gap-3">
                                                <div className={`mt-1 p-0.5 rounded-full ${plan.recommended ? 'bg-secondary' : 'bg-primary'} text-white`}>
                                                    <Check size={14} />
                                                </div>
                                                <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button className={`
                    w-full py-4 rounded-2xl font-black transition-all duration-300
                    ${plan.recommended
                                            ? 'bg-secondary text-white shadow-lg shadow-secondary/30 hover:bg-secondary/90'
                                            : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
                                        }
                  `}>
                                        Assinar Agora
                                    </button>

                                    <p className="text-center mt-4 text-xs text-gray-400 font-medium italic">
                                        Entrega grátis incluída
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 bg-gray-50 overflow-hidden">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-display font-black text-gray-900 mb-4">Dúvidas Frequentes</h2>
                            <p className="text-gray-600 ">
                                Tudo o que você precisa saber sobre a nossa assinatura de frutas.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 "
                        >
                            <div className="divide-y divide-gray-100 ">
                                {faqs.map((faq, idx) => (
                                    <FAQItem key={idx} question={faq.question} answer={faq.answer} />
                                ))}
                            </div>
                        </motion.div>

                        <div className="mt-12 text-center">
                            <p className="text-gray-600 mb-4">Ainda tem dúvidas?</p>
                            <button className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                                <ShieldCheck size={20} /> Fale Conosco pelo WhatsApp
                            </button>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative rounded-[3rem] bg-primary overflow-hidden p-12 lg:p-20 text-center text-white">
                            <div className="absolute top-0 left-0 w-full h-full hero-pattern opacity-10" />
                            <div className="relative z-10 max-w-2xl mx-auto">
                                <h2 className="text-4xl lg:text-5xl font-display font-black mb-8">Pronto para transformar sua alimentação?</h2>
                                <p className="text-xl text-white/80 mb-10 leading-relaxed">
                                    Junte-se a centenas de famílias que já recebem o melhor da terra em suas casas todas as semanas.
                                </p>
                                <button className="px-10 py-5 bg-secondary text-white font-black text-xl rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300">
                                    Começar Assinatura Hoje
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default AssinaturaPage;
