
import React from 'react';

const Subscription = () => {
  const plans = [
    {
      name: 'Básico',
      tag: 'Individual',
      price: '30.000',
      desc: 'Ideal para quem mora sozinho e quer garantir frutas frescas na semana.',
      features: ['4 Entregas mensais (Semanal)', '3kg de frutas variadas', 'Seleção da estação', 'Frete grátis'],
      popular: false
    },
    {
      name: 'Premium',
      tag: 'Casal',
      price: '55.000',
      desc: 'Perfeito para casais que buscam diversidade e qualidade premium.',
      features: ['4 Entregas mensais (Semanal)', '6kg de frutas variadas', 'Inclui frutas exóticas', 'Personalização de 2 itens', 'Frete prioritário'],
      popular: true
    },
    {
      name: 'Família',
      tag: 'Completo',
      price: '95.000',
      desc: 'A melhor escolha para famílias grandes. Saúde para todos.',
      features: ['8 Entregas mensais (2x/semana)', '10kg de frutas variadas', 'Todos os tipos de frutas', 'Brinde surpresa mensal', 'Frete grátis'],
      popular: false
    }
  ];

  return (
    <div className="pt-20 pb-24 bg-gray-50 dark:bg-background-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h1 className="text-4xl font-extrabold text-primary dark:text-secondary sm:text-5xl">Assinatura Mensal</h1>
        <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">Receba o melhor da terra diretamente na sua porta.</p>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative p-8 bg-white dark:bg-surface-dark rounded-2xl shadow-sm border ${plan.popular ? 'border-primary ring-2 ring-primary ring-opacity-50 scale-105 z-10' : 'border-gray-200'} flex flex-col`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 -mt-4 -mr-4">
                  <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Mais Popular</span>
                </div>
              )}
              <div className="flex-1">
                <span className="text-xs font-bold uppercase text-gray-500 tracking-wider">{plan.tag}</span>
                <h3 className="mt-2 text-2xl font-bold">{plan.name}</h3>
                <p className="mt-4 text-gray-500 text-sm leading-relaxed">{plan.desc}</p>
                <div className="mt-8 flex items-baseline">
                  <span className="text-5xl font-extrabold">{plan.price}</span>
                  <span className="ml-1 text-xl text-gray-500">Kz/mês</span>
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                      <span className="material-icons text-primary text-base">check_circle</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <button className={`mt-10 w-full py-3 rounded-xl font-bold transition-all ${plan.popular ? 'bg-primary text-white hover:bg-opacity-90' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                Conhecer Plano
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscription;
