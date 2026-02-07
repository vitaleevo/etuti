"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    MessageSquare,
    Send,
    Instagram,
    Facebook,
    Linkedin,
    Clock,
    Globe
} from 'lucide-react';

const ContactoPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Mensagem enviada com sucesso! Entraremos em contacto em breve.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const contactInfo = [
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Telefone",
            details: "+244 9XX XXX XXX",
            description: "Seg - Sex, das 8h às 18h",
            color: "bg-blue-50 text-blue-600 "
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            details: "contacto@etuti.co.ao",
            description: "Respondemos em até 24h",
            color: "bg-green-50 text-green-600 "
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Morada",
            details: "Luanda, Angola",
            description: "Visite o nosso centro de distribuição",
            color: "bg-orange-50 text-orange-600 "
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-background-light ">
            <Header />

            <main className="flex-grow pt-32 pb-20">
                {/* Hero Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
                            Estamos aqui para <span className="text-primary italic">ajudar</span>
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Tem alguma dúvida sobre os nossos produtos, assinaturas ou entregas?
                            A nossa equipa está pronta para lhe dar todo o apoio necessário.
                        </p>
                    </motion.div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Contact Information */}
                        <motion.div
                            className="lg:col-span-5 space-y-8"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 ">
                                <h2 className="text-2xl font-bold text-gray-900 mb-8">Informações de Contacto</h2>

                                <div className="space-y-8">
                                    {contactInfo.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-4">
                                            <div className={`p-3 rounded-2xl ${item.color}`}>
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 ">{item.title}</h3>
                                                <p className="text-gray-800 font-medium">{item.details}</p>
                                                <p className="text-sm text-gray-500 ">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-12 pt-10 border-t border-gray-100 ">
                                    <h3 className="font-bold text-gray-900 mb-4">Siga-nos</h3>
                                    <div className="flex gap-4">
                                        {[Instagram, Facebook, Linkedin].map((Icon, idx) => (
                                            <a
                                                key={idx}
                                                href="#"
                                                className="p-3 bg-gray-50 text-gray-600 rounded-full hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
                                            >
                                                <Icon size={20} />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Working Hours Card */}
                            <div className="bg-primary/5 p-8 rounded-3xl border border-primary/20">
                                <div className="flex items-center gap-3 mb-4">
                                    <Clock className="text-primary w-6 h-6" />
                                    <h3 className="font-bold text-gray-900 ">Horário de Atendimento</h3>
                                </div>
                                <div className="space-y-2 text-gray-600 ">
                                    <div className="flex justify-between">
                                        <span>Segunda - Sexta</span>
                                        <span className="font-bold">08:00 - 18:00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sábado</span>
                                        <span className="font-bold">09:00 - 13:00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Domingo</span>
                                        <span className="font-bold">Encerrado</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            className="lg:col-span-7"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 ">
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Envie-nos uma Mensagem</h2>
                                    <p className="text-gray-500 ">Prometemos responder o mais rápido possível.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Nome Completo</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                                placeholder="João Manuel"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                                placeholder="joao@exemplo.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Assunto</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                            placeholder="Como podemos ajudar?"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Mensagem</label>
                                        <textarea
                                            rows={5}
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                                            placeholder="Escreva aqui a sua mensagem..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transform active:scale-[0.98] transition-all"
                                    >
                                        Enviar Mensagem
                                        <Send size={18} />
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* FAQ Section Placeholder */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 text-center">
                    <div className="bg-surface-light py-16 px-8 rounded-[3rem] border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>

                        <h2 className="text-3xl font-bold mb-4">Ainda tem dúvidas?</h2>
                        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
                            Confira a nossa página de Perguntas Frequentes para respostas rápidas sobre pagamentos, entregas e frescura dos produtos.
                        </p>
                        <button className="px-8 py-3 bg-secondary text-gray-900 font-bold rounded-full hover:shadow-lg transition-all transform hover:-translate-y-1">
                            Ver FAQ's
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ContactoPage;
