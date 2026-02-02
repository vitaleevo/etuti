
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    { icon: 'eco', title: 'Sustentabilidade', desc: 'Respeitamos os ciclos da natureza e promovemos práticas de cultivo regenerativo.' },
    { icon: 'handshake', title: 'Comércio Justo', desc: 'Garantimos que o valor chegue às mãos de quem realmente trabalha a terra.' },
    { icon: 'verified', title: 'Qualidade Premium', desc: 'Cada fruto é selecionado manualmente para garantir o padrão "Wete Wa Nsi".' },
    { icon: 'local_shipping', title: 'Frescura Local', desc: 'Reduzimos o tempo entre a colheita e a sua mesa para preservar nutrientes.' }
  ];

  return (
    <div className="pt-20 pb-24 bg-white dark:bg-background-dark min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1600" 
            className="w-full h-full object-cover"
            alt="Colheita em Angola"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-white text-xs font-bold uppercase tracking-widest mb-6 shadow-xl shadow-secondary/20">A Nossa Essência</span>
          <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-6 leading-tight">ETUTI: <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Abundância Viva</span></h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium max-w-2xl mx-auto">
            Mais do que uma entrega, somos a ponte entre a riqueza do solo angolano e o bem-estar da sua família.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              O termo <span className="text-primary italic">Etuti</span> significa abundância em Kimbundu.
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Fundada em 2021, a ETUTI nasceu da observação de um paradoxo: Angola possui terras incrivelmente férteis, mas o acesso a frutas frescas de qualidade nas cidades era muitas vezes difícil e dispendioso.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Decidimos mudar essa realidade criando o conceito <span className="font-bold text-secondary">"Wete Wa Nsi"</span> — o melhor que a nossa terra tem para oferecer. Começamos com apenas dois produtores no Bengo e hoje orgulhamo-nos de apoiar mais de 50 famílias rurais em todo o país.
            </p>
            <div className="pt-4">
              <div className="flex items-center gap-4 p-6 bg-primary/5 rounded-3xl border border-primary/10">
                <span className="material-icons text-primary text-4xl">format_quote</span>
                <p className="italic font-medium text-gray-700 dark:text-gray-300">"Nosso sucesso não é medido em caixas entregues, mas no sorriso do agricultor que recebe o justo e na saúde do cliente que consome o puro."</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1488459711635-de829672302a?auto=format&fit=crop&q=80&w=600" className="rounded-[2.5rem] shadow-lg mt-12 h-80 object-cover" alt="Mercado" />
              <img src="https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=600" className="rounded-[2.5rem] shadow-lg h-80 object-cover" alt="Plantação" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl z-0"></div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-gray-50 dark:bg-surface-dark/30 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Os Nossos Pilares</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Valores que guiam cada colheita, cada embalagem e cada quilómetro percorrido.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white dark:bg-surface-dark p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-gray-800">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                  <span className="material-icons text-3xl">{v.icon}</span>
                </div>
                <h4 className="text-xl font-bold mb-3">{v.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { n: '50+', l: 'Produtores Parceiros' },
              { n: '10k+', l: 'Entregas em Luanda' },
              { n: '12', l: 'Províncias Alcançadas' },
              { n: '100%', l: 'Orgânico e Nacional' }
            ].map((s, i) => (
              <div key={i}>
                <div className="text-4xl md:text-6xl font-extrabold mb-2 font-display tracking-tighter">{s.n}</div>
                <div className="text-xs md:text-sm uppercase tracking-widest font-bold opacity-80">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Community CTA */}
      <section className="py-32 text-center px-4">
        <div className="max-w-3xl mx-auto bg-background-light dark:bg-surface-dark p-12 md:p-20 rounded-[4rem] border border-gray-100 dark:border-gray-800">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 italic">Faça parte desta jornada pela saúde de Angola.</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/frutas" className="px-10 py-5 bg-primary text-white rounded-2xl font-bold shadow-xl shadow-green-500/20 hover:scale-105 transition-transform">
              Ver Produtos
            </Link>
            <Link to="/contacto" className="px-10 py-5 border-2 border-primary text-primary rounded-2xl font-bold hover:bg-primary hover:text-white transition-all">
              Falar com a Equipa
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
