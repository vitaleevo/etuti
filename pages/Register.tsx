
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulando registo
    localStorage.setItem('etuti_user', JSON.stringify({ name: formData.name, email: formData.email }));
    window.dispatchEvent(new Event('storage'));
    navigate('/perfil');
  };

  return (
    <div className="pt-32 pb-20 min-h-screen flex items-center justify-center px-4 bg-background-light dark:bg-background-dark">
      <div className="max-w-md w-full bg-white dark:bg-surface-dark rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-gray-100 dark:border-gray-800">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <img src="/logo.png" alt="ETUTI Logo" className="h-16 w-auto object-contain" />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">Crie a sua conta</h1>
          <p className="text-gray-500 text-sm">Junte-se à comunidade ETUTI e comece a comer melhor hoje.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Nome Completo</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3.5 rounded-2xl border-gray-200 dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-primary transition-all"
              placeholder="Ex: Manuel dos Santos"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">E-mail</label>
            <input
              type="email"
              required
              className="w-full px-4 py-3.5 rounded-2xl border-gray-200 dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-primary transition-all"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Telefone</label>
            <input
              type="tel"
              required
              className="w-full px-4 py-3.5 rounded-2xl border-gray-200 dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-primary transition-all"
              placeholder="+244"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Palavra-passe</label>
            <input
              type="password"
              required
              className="w-full px-4 py-3.5 rounded-2xl border-gray-200 dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-primary transition-all"
              placeholder="Crie uma palavra-passe forte"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          <div className="flex items-start gap-2 py-2">
            <input type="checkbox" required className="mt-1 rounded text-primary focus:ring-primary" id="terms" />
            <label htmlFor="terms" className="text-xs text-gray-500">
              Eu aceito os <button type="button" className="text-primary font-bold">Termos e Condições</button> e a <button type="button" className="text-primary font-bold">Política de Privacidade</button>.
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-secondary text-white py-4 rounded-2xl font-bold shadow-lg shadow-yellow-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Criar Conta
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            Já tem uma conta? <Link to="/login" className="text-primary font-bold hover:underline">Entre aqui</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
