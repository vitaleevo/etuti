
import React from 'react';

const Contact = () => {
  return (
    <div className="pt-20 pb-24 bg-white dark:bg-background-dark min-h-screen">
      <section className="py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Estamos aqui para ouvir você</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">Dúvidas sobre o seu pedido, sugestões ou apenas um "olá"? Escolha o seu canal preferido.</p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* WhatsApp Card */}
          <div className="bg-[#25D366]/10 p-8 rounded-3xl border border-[#25D366]/20 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#25D366] text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <span className="material-icons text-3xl">chat</span>
            </div>
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className="text-gray-500 text-sm mb-6 flex-grow">Atendimento imediato para dúvidas e pedidos rápidos.</p>
            <a href="https://wa.me/244923000000" target="_blank" rel="noreferrer" className="w-full py-3 bg-[#25D366] text-white rounded-xl font-bold hover:bg-opacity-90 transition-all">
              Abrir Conversa
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-primary/10 p-8 rounded-3xl border border-primary/20 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <span className="material-icons text-3xl">mail</span>
            </div>
            <h3 className="text-xl font-bold mb-2">E-mail</h3>
            <p className="text-gray-500 text-sm mb-6 flex-grow">Para questões formais, parcerias ou reclamações.</p>
            <a href="mailto:ajuda@etuti.co.ao" className="w-full py-3 bg-primary text-white rounded-xl font-bold hover:bg-opacity-90 transition-all">
              Enviar Email
            </a>
          </div>

          {/* Office Card */}
          <div className="bg-secondary/10 p-8 rounded-3xl border border-secondary/20 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-secondary text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <span className="material-icons text-3xl">location_on</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Sede em Luanda</h3>
            <p className="text-gray-500 text-sm mb-6 flex-grow">Talatona, Luanda Sul. Edifício Etuti, Luanda, Angola.</p>
            <button className="w-full py-3 bg-secondary text-white rounded-xl font-bold hover:bg-opacity-90 transition-all">
              Ver no Mapa
            </button>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 italic">Não encontrou o que procurava?</h2>
            <p className="text-gray-500 mb-8">Nossa equipa de suporte está disponível de segunda a sábado, das 08h às 18h. Se precisar de uma resposta rápida, o WhatsApp é sempre a melhor opção.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <span className="material-icons text-primary">schedule</span>
                <span>Segunda - Sábado: 08:00 - 18:00</span>
              </div>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <span className="material-icons text-primary">call</span>
                <span>+244 923 000 000</span>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800">
            <form className="space-y-5">
              <input type="text" placeholder="Seu Nome" className="w-full rounded-xl border-gray-200 dark:bg-gray-800 dark:border-gray-700" />
              <input type="email" placeholder="Seu E-mail" className="w-full rounded-xl border-gray-200 dark:bg-gray-800 dark:border-gray-700" />
              <select className="w-full rounded-xl border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <option>Dúvida Geral</option>
                <option>Problemas com Pedido</option>
                <option>Parcerias</option>
                <option>Outros</option>
              </select>
              <textarea placeholder="Mensagem" className="w-full rounded-xl border-gray-200 dark:bg-gray-800 dark:border-gray-700 h-32"></textarea>
              <button className="w-full bg-gray-900 dark:bg-primary text-white py-4 rounded-xl font-bold">Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
