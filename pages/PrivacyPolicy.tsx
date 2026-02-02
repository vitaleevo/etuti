
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-background-light dark:bg-background-dark min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-white font-medium">Política de Privacidade</span>
        </nav>

        <div className="bg-white dark:bg-surface-dark p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-gray-800 prose dark:prose-invert max-w-none">
          <h1 className="text-3xl font-extrabold mb-6">Política de Privacidade</h1>
          <p className="text-gray-500 mb-8">Última atualização: 24 de Outubro de 2024</p>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-primary mb-4">1. Introdução</h2>
            <p>
              A ETUTI (Wete Wa Nsi) valoriza a privacidade dos seus clientes e utilizadores. Esta política descreve como recolhemos, utilizamos e protegemos as suas informações pessoais quando utiliza a nossa plataforma de entrega de frutas.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-primary mb-4">2. Dados Recolhidos</h2>
            <p>Recolhemos informações necessárias para processar as suas encomendas e melhorar a sua experiência:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nome e dados de contacto (E-mail e Telefone).</li>
              <li>Endereço de entrega em Luanda.</li>
              <li>Histórico de compras e preferências de assinatura.</li>
              <li>Informações de navegação através de cookies (para melhorar o desempenho do site).</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-primary mb-4">3. Utilização dos Dados</h2>
            <p>Os seus dados são utilizados exclusivamente para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Processamento e entrega de encomendas.</li>
              <li>Comunicação via WhatsApp sobre o estado do pedido.</li>
              <li>Personalização de ofertas de frutas da época.</li>
              <li>Melhoria contínua da nossa cadeia logística do produtor ao consumidor.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-primary mb-4">4. Segurança</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais para proteger os seus dados contra acesso não autorizado ou perda. Não partilhamos as suas informações com terceiros, exceto com os parceiros logísticos estritamente necessários para a entrega.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-primary mb-4">5. Contacto</h2>
            <p>
              Se tiver dúvidas sobre como tratamos os seus dados, pode contactar-nos através do e-mail <span className="font-bold">privacidade@etuti.co.ao</span> ou via WhatsApp oficial.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
