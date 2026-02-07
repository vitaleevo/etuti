"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, LogIn, Github, Mail as MailIcon, Facebook } from 'lucide-react';

const LoginPage = () => {
  const navigate = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));

    localStorage.setItem('etuti_user', JSON.stringify({ name: 'Cliente Etuti', email: formData.email }));
    window.dispatchEvent(new Event('storage'));
    navigate.push('/perfil');
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 overflow-hidden bg-white ">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full relative z-10"
      >
        <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-white ">
          <div className="text-center mb-10">
            <Link href="/" className="inline-block mb-6 transform hover:scale-105 transition-transform duration-300">
              <img src="/logotipo.png" alt="ETUTI Logo" className="h-16 w-auto object-contain mx-auto" />
            </Link>
            <h1 className="text-3xl font-black text-gray-900 mb-2">
              Bem-vindo de <span className="text-primary">volta!</span>
            </h1>
            <p className="text-gray-500 ">Entre na sua conta para gerir as suas encomendas.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1">
              <label className="text-sm font-bold text-gray-700 ml-2">Email</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  required
                  className="w-full pl-11 pr-4 py-4 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center ml-2">
                <label className="text-sm font-bold text-gray-700 ">Palavra-passe</label>
                <Link href="#" className="text-xs font-bold text-primary hover:underline">Esqueceu-se?</Link>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  required
                  className="w-full pl-11 pr-4 py-4 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group transform active:scale-[0.98] transition-all disabled:opacity-70"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  Entrar na Conta
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8">
            <div className="relative flex items-center mb-6">
              <div className="flex-grow border-t border-gray-100 "></div>
              <span className="flex-shrink mx-4 text-xs text-gray-400 font-medium uppercase tracking-widest">ou continuar com</span>
              <div className="flex-grow border-t border-gray-100 "></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                <span className="text-sm font-bold ">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 py-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                <Facebook size={20} className="text-[#1877F2]" fill="#1877F2" />
                <span className="text-sm font-bold ">Facebook</span>
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500 ">
            Ainda não tem conta? <Link href="/registo" className="text-primary font-black hover:underline">Registe-se gratuitamente</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
