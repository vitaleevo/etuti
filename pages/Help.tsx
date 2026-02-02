
import React, { useState } from 'react';

const FAQS = [
  {
    category: 'Entregas',
    questions: [
      { q: 'Quais as zonas de entrega em Luanda?', a: 'Entregamos em toda a Luanda Sul (Talatona, Nova Vida, Camama), Viana e centro da cidade. Estamos a expandir para o Kilamba brevemente.' },
      { q: 'Qual o horário das entregas?', a: 'As entregas são feitas de Segunda a Sábado, das 08:00 às 18:00. Pode agendar o seu período preferido no checkout.' }
    ]
  },
  {
    category: 'Pagamentos',
    questions: [
      { q: 'Quais os métodos de pagamento aceites?', a: 'Aceitamos Multicaixa Express, Transferência Bancária Confirmada e pagamento via TPA na entrega (apenas para clientes fidelizados).' },
      { q: 'É seguro pagar pelo WhatsApp?', a: 'Sim, o WhatsApp é usado para o envio do comprovativo e confirmação humana, garantindo que o seu pedido seja processado sem erros.' }
    ]
  },
  {
    category: 'Qualidade',
    questions: [
      { q: 'E se a fruta chegar danificada?', a: 'Temos garantia de reposição 100%. Basta enviar uma foto no momento da entrega para o nosso suporte e faremos a troca ou reembolso.' },
      { q: 'As frutas são realmente orgânicas?', a: 'Sim, trabalhamos com produtores que utilizam métodos naturais de cultivo, sem agrotóxicos agressivos.' }
    ]
  }
];

const Help = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="pt-20 pb-24 bg-background-light dark:bg-background-dark min-h-screen">
      <section className="bg-primary py-20 px-4 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8">Centro de Ajuda</h1>
          <div className="relative max-w-xl mx-auto">
            <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">search</span>
            <input 
              type="text" 
              placeholder="Como podemos ajudar hoje?"
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-none text-gray-900 focus:ring-2 focus:ring-secondary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid gap-12">
          {FAQS.map((group, gIdx) => (
            <div key={gIdx} className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center font-bold text-sm">{gIdx + 1}</span>
                {group.category}
              </h2>
              <div className="grid gap-4">
                {group.questions.map((faq, fIdx) => (
                  <details key={fIdx} className="group bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                    <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold">
                      {faq.q}
                      <span className="material-icons group-open:rotate-180 transition-transform">expand_more</span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-500 dark:text-gray-400 leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-secondary/10 rounded-[2.5rem] border border-secondary/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-secondary text-white rounded-xl flex items-center justify-center">
              <span className="material-icons">support_agent</span>
            </div>
            <div>
              <h4 className="font-bold">Ainda com dúvidas?</h4>
              <p className="text-sm text-gray-500">A nossa equipa de suporte humano está online.</p>
            </div>
          </div>
          <button className="bg-secondary text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-yellow-500/20">
            Falar no WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Help;
