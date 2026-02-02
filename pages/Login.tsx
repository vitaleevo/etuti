
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulando login
    localStorage.setItem('etuti_user', JSON.stringify({ name: 'Cliente Etuti', email: formData.email }));
    window.dispatchEvent(new Event('storage')); // Trigger update in other components
    navigate('/perfil');
  };

  return (
    <div className="pt-32 pb-20 min-h-screen flex items-center justify-center px-4 bg-background-light dark:bg-background-dark">
      <div className="max-w-md w-full bg-white dark:bg-surface-dark rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-gray-100 dark:border-gray-800">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <img src="/logo.png" alt="ETUTI Logo" className="h-16 w-auto object-contain" />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">Bem-vindo de volta!</h1>
          <p className="text-gray-500 text-sm">Entre na sua conta para gerir as suas encomendas e assinaturas.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">E-mail</label>
            <div className="relative">
              <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">mail_outline</span>
              <input
                type="email"
                required
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border-gray-200 dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Palavra-passe</label>
            <div className="relative">
              <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">lock_outline</span>
              <input
                type="password"
                required
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border-gray-200 dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
            <div className="text-right mt-2">
              <button type="button" className="text-xs font-bold text-primary hover:underline">Esqueceu a palavra-passe?</button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-4 rounded-2xl font-bold shadow-lg shadow-green-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Entrar
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800 text-center">
          <p className="text-sm text-gray-500 mb-4">Ou entre com</p>
          <div className="flex justify-center gap-4">
            <button className="w-12 h-12 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="Google" />
            </button>
            <button className="w-12 h-12 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <span className="material-icons text-blue-600">facebook</span>
            </button>
          </div>
          <p className="mt-8 text-sm text-gray-500">
            Ainda não tem conta? <Link to="/registo" className="text-primary font-bold hover:underline">Registe-se aqui</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
