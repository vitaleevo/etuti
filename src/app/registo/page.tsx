"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Lock, ArrowRight, UserPlus, Facebook, ShieldCheck } from 'lucide-react';

const RegisterPage = () => {
    const navigate = useRouter();
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));

        localStorage.setItem('etuti_user', JSON.stringify({ name: formData.name, email: formData.email }));
        window.dispatchEvent(new Event('storage'));
        navigate.push('/perfil');
    };

    return (
        <div className="min-h-screen relative flex items-center justify-center px-4 py-20 overflow-hidden bg-white ">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
                <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px]"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-white "
            >
                {/* Visual Side */}
                <div className="hidden lg:flex flex-col justify-between p-12 bg-primary text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <Link href="/">
                            <img src="/logotipo.png" alt="ETUTI Logo" className="h-12 w-auto object-contain brightness-0 invert" />
                        </Link>
                        <div className="mt-16 space-y-6">
                            <h2 className="text-4xl font-black leading-tight">Junte-se à nossa comunidade de <span className="text-secondary">frescura.</span></h2>
                            <p className="text-primary-100/80 text-lg">Comece a receber o melhor da terra diretamente na sua porta com apenas alguns cliques.</p>
                        </div>
                    </div>

                    <div className="relative z-10 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-white/10 rounded-lg">
                                <ShieldCheck size={20} className="text-secondary" />
                            </div>
                            <span className="text-sm font-medium">Privacidade e Segurança Garantida</span>
                        </div>
                    </div>

                    {/* Decorative circles */}
                    <div className="absolute top-1/2 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
                </div>

                {/* Form Side */}
                <div className="p-8 md:p-12">
                    <div className="mb-10 lg:hidden text-center">
                        <img src="/logotipo.png" alt="ETUTI Logo" className="h-12 w-auto object-contain mx-auto mb-6" />
                        <h1 className="text-2xl font-black text-gray-900 ">Criar Conta</h1>
                    </div>

                    <div className="mb-8 hidden lg:block">
                        <h1 className="text-2xl font-black text-gray-900 mb-2">Criar a sua conta</h1>
                        <p className="text-gray-500 text-sm">Preencha os seus dados para começar.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-1 group">
                            <label className="text-xs font-bold text-gray-500 ml-2 uppercase tracking-wider">Nome Completo</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                                    <User size={16} />
                                </div>
                                <input
                                    type="text"
                                    required
                                    className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all"
                                    placeholder="João Manuel"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-1 group">
                            <label className="text-xs font-bold text-gray-500 ml-2 uppercase tracking-wider">Email</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                                    <Mail size={16} />
                                </div>
                                <input
                                    type="email"
                                    required
                                    className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all"
                                    placeholder="joao@exemplo.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-1 group">
                            <label className="text-xs font-bold text-gray-500 ml-2 uppercase tracking-wider">Telefone</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                                    <Phone size={16} />
                                </div>
                                <input
                                    type="tel"
                                    required
                                    className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all"
                                    placeholder="+244 9XX XXX XXX"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-1 group">
                            <label className="text-xs font-bold text-gray-500 ml-2 uppercase tracking-wider">Palavra-passe</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                                    <Lock size={16} />
                                </div>
                                <input
                                    type="password"
                                    required
                                    className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group transform active:scale-[0.98] transition-all disabled:opacity-70"
                            >
                                {isLoading ? (
                                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                ) : (
                                    <>
                                        Criar Conta Agora
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    <div className="mt-8 pt-8 border-t border-gray-100 ">
                        <p className="text-center text-sm text-gray-500 ">
                            Já tem uma conta? <Link href="/login" className="text-primary font-black hover:underline">Entre aqui</Link>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default RegisterPage;
