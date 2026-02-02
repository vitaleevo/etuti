
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SEASON_DATA = [
  { month: 'Janeiro', fruits: ['Manga', 'Abacaxi', 'Banana', 'Mamão'], status: 'high', highlight: 'A manga "sapatinho" está no seu pico de doçura.' },
  { month: 'Fevereiro', fruits: ['Manga', 'Goiaba', 'Abacaxi', 'Maracujá'], status: 'high', highlight: 'Época ideal para maracujás frescos e sumarentos.' },
  { month: 'Março', fruits: ['Abacate', 'Goiaba', 'Limão', 'Banana'], status: 'medium', highlight: 'O abacate da Huíla começa a chegar às bancas.' },
  { month: 'Abril', fruits: ['Abacate', 'Citrinus', 'Banana', 'Maçã'], status: 'medium', highlight: 'As maçãs do sul de Angola trazem frescura ao outono.' },
  { month: 'Maio', fruits: ['Laranja', 'Tangerina', 'Morango', 'Abacate'], status: 'high', highlight: 'As laranjas de Kwanza Sul atingem a cor perfeita.' },
  { month: 'Junho', fruits: ['Morango', 'Laranja', 'Tangerina', 'Kiwi'], status: 'high', highlight: 'Morangos da Huíla são as estrelas deste mês frio.' },
  { month: 'Julho', fruits: ['Morango', 'Maçã', 'Pêra', 'Citrinus'], status: 'medium', highlight: 'Frutos de clima temperado dominam a colheita.' },
  { month: 'Agosto', fruits: ['Maçã', 'Pêra', 'Uva', 'Banana'], status: 'medium', highlight: 'Uvas nacionais começam a sua curta mas doce época.' },
  { month: 'Setembro', fruits: ['Cajú', 'Múcua', 'Banana', 'Mamão'], status: 'high', highlight: 'O múcua fresco traz energia para o novo ciclo.' },
  { month: 'Outubro', fruits: ['Manga', 'Cajú', 'Abacaxi', 'Pitaya'], status: 'high', highlight: 'Início da esperada época das mangas do Bengo.' },
  { month: 'Novembro', fruits: ['Manga', 'Abacaxi', 'Melancia', 'Melão'], status: 'high', highlight: 'Melancias sumarentas para hidratar os dias quentes.' },
  { month: 'Dezembro', fruits: ['Manga', 'Abacaxi', 'Melancia', 'Lichia'], status: 'high', highlight: 'A lichia de Malanje é o luxo das festas de Natal.' },
];

const Seasonality = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentMonthIdx = new Date().getMonth();

  return (
    <div className="pt-20 pb-24 bg-background-light dark:bg-background-dark min-h-screen">
      {/* Educational Header */}
      <section className="bg-white dark:bg-surface-dark py-24 px-4 text-center border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-xs font-bold uppercase tracking-widest mb-6">Sabedoria da Terra</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Ritmo da Natureza</h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Consumir frutas na época certa não é apenas mais barato; é mais saboroso e nutritivo. Respeite o calendário de colheita e redescubra o sabor real de Angola.
          </p>
        </div>
      </section>

      {/* Calendar Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SEASON_DATA.map((item, idx) => {
            const isCurrent = idx === currentMonthIdx;
            return (
              <div 
                key={item.month} 
                className={`relative group p-8 rounded-[2.5rem] border-2 transition-all duration-500 ${
                  isCurrent 
                    ? 'border-primary bg-white dark:bg-surface-dark shadow-2xl scale-105 z-10' 
                    : 'border-transparent bg-white/40 dark:bg-surface-dark/40 hover:bg-white dark:hover:bg-surface-dark hover:border-gray-200 dark:hover:border-gray-700'
                }`}
              >
                {isCurrent && (
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -mt-3">
                    <span className="bg-primary text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-green-500/20">Agora</span>
                  </div>
                )}
                
                <div className="flex justify-between items-center mb-6">
                  <h3 className={`text-2xl font-extrabold ${isCurrent ? 'text-primary' : 'text-gray-400'}`}>
                    {item.month}
                  </h3>
                  <span className={`material-icons ${item.status === 'high' ? 'text-green-500' : 'text-yellow-500'}`}>
                    {item.status === 'high' ? 'eco' : 'wb_sunny'}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {item.fruits.map(fruit => (
                    <span key={fruit} className={`px-3 py-1 rounded-xl text-xs font-bold transition-colors ${
                      isCurrent ? 'bg-primary/10 text-primary' : 'bg-gray-100 dark:bg-gray-800 text-gray-400 group-hover:text-gray-600'
                    }`}>
                      {fruit}
                    </span>
                  ))}
                </div>

                <p className={`text-xs leading-relaxed font-medium ${isCurrent ? 'text-gray-600 dark:text-gray-300' : 'text-gray-400 group-hover:text-gray-500'}`}>
                  {item.highlight}
                </p>
              </div>
            );
          })}
        </div>

        {/* Current Highlight CTA */}
        <div className="mt-24 relative overflow-hidden bg-primary rounded-[3rem] p-10 md:p-20 text-white flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10">
            <span className="material-icons text-[25rem]">eco</span>
          </div>
          <div className="relative z-10 max-w-xl">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Destaque do Mês</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">A Manga sapatinho do Bengo chegou!</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              É o momento mais esperado do ano. Nossas mangas são colhidas manualmente quando atingem o tom dourado perfeito, garantindo que cheguem à sua mesa sem fios e com doçura melada.
            </p>
            <Link to="/frutas" className="inline-flex items-center gap-2 bg-white text-primary px-10 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all shadow-xl shadow-black/10">
              Ver Frutas Disponíveis
              <span className="material-icons">arrow_forward</span>
            </Link>
          </div>
          <div className="relative z-10 w-full max-w-sm">
            <img 
              src="https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=600" 
              className="rounded-[3rem] shadow-2xl rotate-3" 
              alt="Manga" 
            />
          </div>
        </div>

        {/* Nutritional Benefits Footer */}
        <div className="mt-24 grid md:grid-cols-3 gap-8 pb-20">
          {[
            { icon: 'bolt', title: 'Energia Natural', desc: 'Frutas da época têm níveis de frutose equilibrados para energia duradoura.' },
            { icon: 'shield', title: 'Imunidade', desc: 'Os nutrientes estão no seu pico máximo no momento exato da colheita sazonal.' },
            { icon: 'savings', title: 'Economia Real', desc: 'Compramos volumes maiores na época alta, passando a poupança para si.' }
          ].map((benefit, i) => (
            <div key={i} className="flex gap-4 p-6 bg-white dark:bg-surface-dark rounded-3xl border border-gray-100 dark:border-gray-800">
              <div className="text-secondary">
                <span className="material-icons">{benefit.icon}</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">{benefit.title}</h4>
                <p className="text-sm text-gray-500">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seasonality;
