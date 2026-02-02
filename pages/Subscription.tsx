
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

  const steps = [
    { icon: 'auto_awesome', title: 'Escolha o seu plano', desc: 'Selecione a opção que melhor se adapta à sua rotina e família.' },
    { icon: 'eco', title: 'Nós selecionamos', desc: 'Nossos especialistas escolhem as melhores frutas da época direto dos produtores.' },
    { icon: 'local_shipping', title: 'Entrega semanal', desc: 'Receba em sua casa com toda a comodidade e frescura garantida.' }
  ];

  return (
    <div className="pt-20 pb-24 bg-white dark:bg-background-dark min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary/5 dark:bg-primary/10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
            Saúde sem esforço, <br/>
            <span className="text-primary">direto na sua porta.</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Esqueça as idas ao mercado. Receba semanalmente uma seleção premium das melhores frutas de Angola, colhidas no dia.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center group">
              <div className="w-16 h-16 bg-white dark:bg-surface-dark shadow-xl rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform text-primary border border-gray-100 dark:border-gray-800">
                <span className="material-icons text-3xl">{step.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative p-8 bg-white dark:bg-surface-dark rounded-3xl shadow-xl border ${plan.popular ? 'border-primary ring-4 ring-primary ring-opacity-10 scale-105 z-10' : 'border-gray-100 dark:border-gray-800'} flex flex-col transition-all hover:translate-y-[-8px]`}>
              {plan.popular && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -mt-4">
                  <span className="bg-secondary text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">Mais Vendido</span>
                </div>
              )}
              <div className="flex-1">
                <span className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-2 block">{plan.tag}</span>
                <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white">{plan.name}</h3>
                <p className="mt-4 text-gray-500 text-sm leading-relaxed">{plan.desc}</p>
                <div className="mt-8 flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-primary">{plan.price}</span>
                  <span className="text-xl text-gray-400 font-medium">Kz/mês</span>
                </div>
                <div className="my-8 border-t border-gray-100 dark:border-gray-800"></div>
                <ul className="space-y-4">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                      <div className="w-5 h-5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                        <span className="material-icons text-primary text-[14px]">check</span>
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <button className={`mt-10 w-full py-4 rounded-2xl font-bold transition-all shadow-lg ${plan.popular ? 'bg-primary text-white hover:bg-opacity-90 shadow-green-500/20' : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
                Assinar Agora
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ placeholder or Trust elements */}
      <section className="bg-background-light dark:bg-surface-dark/30 py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Perguntas Frequentes</h2>
          <div className="space-y-6 text-left">
            <div className="p-6 bg-white dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-gray-800">
              <h4 className="font-bold mb-2">Posso pausar minha assinatura?</h4>
              <p className="text-sm text-gray-500">Sim! Você pode pausar ou cancelar a qualquer momento sem custos adicionais através do nosso app ou WhatsApp.</p>
            </div>
            <div className="p-6 bg-white dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-gray-800">
              <h4 className="font-bold mb-2">O que acontece se eu não estiver em casa?</h4>
              <p className="text-sm text-gray-500">Nossas caixas são térmicas e mantêm as frutas frescas. Podemos deixar na sua portaria ou reagendar a entrega.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subscription;
