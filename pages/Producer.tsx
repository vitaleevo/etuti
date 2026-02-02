
import React, { useState, useEffect } from 'react';

const Producer = () => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const steps = [
    { title: 'Candidatura', desc: 'Preencha os dados da sua fazenda e produção atual.' },
    { title: 'Visita Técnica', desc: 'A nossa equipa visita a sua lavra para validar o padrão ETUTI.' },
    { title: 'Acordo Justo', desc: 'Definimos preços estáveis e volumes de colheita semanais.' },
    { title: 'Escoamento', desc: 'Nós tratamos da logística e o seu produto chega a Luanda.' }
  ];

  return (
    <div className="pt-20 pb-24 bg-background-light dark:bg-background-dark min-h-screen">
      {/* Dynamic Header */}
      <section className="relative py-32 px-4 bg-primary overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-10"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-xs font-bold uppercase tracking-widest mb-6">Parceria de Valor</span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 font-display tracking-tight leading-tight">
            Cultive com amor, <br/>nós levamos o seu <span className="text-secondary">suor ao mercado.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Eliminamos os intermediários para que o lucro da terra fique com quem a trabalha. Junte-se à maior rede de agricultura direta de Angola.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-60px] relative z-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Info Card */}
          <div className="lg:col-span-2 bg-white dark:bg-surface-dark p-10 md:p-16 rounded-[3rem] shadow-2xl border border-gray-100 dark:border-gray-800">
            <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">A Vantagem ETUTI</h2>
            
            <div className="grid md:grid-cols-2 gap-10 mb-16">
              {[
                { icon: 'payments', title: 'Pagamento Justo e Rápido', desc: 'Preços baseados na qualidade, não em especulação de mercado. Pagamento em 48h.' },
                { icon: 'local_shipping', title: 'Recolha na Fazenda', desc: 'Nossa frota vai até às províncias buscar a sua produção, reduzindo os seus custos logísticos.' },
                { icon: 'trending_up', title: 'Previsibilidade', desc: 'Contratos anuais com volumes definidos. Planeie a sua sementeira com segurança.' },
                { icon: 'insights', title: 'Dados de Mercado', desc: 'Saiba o que os consumidores de Luanda mais procuram e ajuste a sua produção.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                    <span className="material-icons text-3xl">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 dark:border-gray-800 pt-12">
              <h3 className="text-xl font-bold mb-8">Fluxo de Parceria</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {steps.map((step, idx) => (
                  <div key={idx} className="relative">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-4 shadow-lg shadow-green-500/20">
                      {idx + 1}
                    </div>
                    <h5 className="font-bold text-sm mb-2 uppercase tracking-wide">{step.title}</h5>
                    <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
                    {idx < steps.length - 1 && (
                      <div className="hidden md:block absolute top-5 left-10 w-full h-[2px] bg-gray-100 dark:bg-gray-800 -z-10"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Registration Form Sidebar */}
          <div className="bg-white dark:bg-surface-dark p-10 rounded-[3rem] shadow-2xl border border-gray-100 dark:border-gray-800 h-fit sticky top-24">
            {!submitted ? (
              <>
                <h3 className="text-2xl font-bold mb-2">Candidatura</h3>
                <p className="text-gray-500 text-sm mb-8">Nossa equipa de compras responderá em até 48h.</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-400 tracking-widest mb-2">Nome do Responsável</label>
                    <input type="text" required className="w-full px-4 py-3.5 rounded-2xl border-gray-200 dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-primary transition-all" placeholder="Ex: João Manuel" />
                  </div>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-400 tracking-widest mb-2">Telemóvel / WhatsApp</label>
                      <input type="tel" required className="w-full px-4 py-3.5 rounded-2xl border-gray-200 dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-primary transition-all" placeholder="+244" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-400 tracking-widest mb-2">Província da Fazenda</label>
                    <select className="w-full px-4 py-3.5 rounded-2xl border-gray-200 dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-primary transition-all">
                      <option>Luanda</option>
                      <option>Bengo</option>
                      <option>Malanje</option>
                      <option>Kwanza Sul</option>
                      <option>Huíla</option>
                      <option>Outra</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-400 tracking-widest mb-2">Principal Produção</label>
                    <textarea required className="w-full px-4 py-3.5 rounded-2xl border-gray-200 dark:bg-gray-800 dark:border-gray-700 h-28 focus:ring-2 focus:ring-primary transition-all" placeholder="Ex: Produzo Manga e Banana Pão em larga escala..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-secondary text-white py-5 rounded-2xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-yellow-500/30">
                    Enviar Candidatura
                  </button>
                </form>
              </>
            ) : (
              <div className="py-12 text-center">
                <div className="w-20 h-20 bg-green-100 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="material-icons text-4xl">verified</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Manifestação Recebida!</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  Obrigado por querer fazer parte da rede ETUTI. Iremos analisar os dados e contactar pelo WhatsApp em breve.
                </p>
                <button onClick={() => setSubmitted(false)} className="text-primary font-bold hover:underline">
                  Enviar nova proposta
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Producer;
