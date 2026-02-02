
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-background-light dark:bg-background-dark min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-white font-medium">Termos de Uso</span>
        </nav>

        <div className="bg-white dark:bg-surface-dark p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-gray-800 prose dark:prose-invert max-w-none">
          <h1 className="text-3xl font-extrabold mb-6">Termos e Condições de Uso</h1>
          <p className="text-gray-500 mb-8">Ao utilizar a ETUTI, você concorda com os seguintes termos.</p>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-secondary mb-4">1. Objeto</h2>
            <p>
              A ETUTI opera como uma plataforma de venda e distribuição de frutas frescas e produtos agrícolas, conectando produtores nacionais diretamente ao consumidor final.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-secondary mb-4">2. Encomendas e Entregas</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>As entregas são realizadas nas zonas de Luanda especificadas na nossa página de Ajuda.</li>
              <li>Os horários de entrega são agendados, mas podem sofrer variações devido ao trânsito ou condições climáticas.</li>
              <li>Devido à natureza perecível dos produtos, não aceitamos devoluções após a confirmação da recepção em bom estado.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-secondary mb-4">3. Qualidade dos Produtos</h2>
            <p>
              Comprometemo-nos com a frescura. Caso receba um produto que não atenda aos nossos padrões de qualidade, oferecemos a reposição ou crédito para a próxima compra, desde que notificado no prazo de 4 horas após a entrega.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-secondary mb-4">4. Assinaturas</h2>
            <p>
              Os planos de assinatura são renovados automaticamente a cada mês. O cliente pode cancelar ou pausar a assinatura com um aviso prévio de 5 dias úteis antes do próximo ciclo de faturação.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-secondary mb-4">5. Pagamentos</h2>
            <p>
              Os pagamentos são processados via transferência bancária, Multicaixa Express ou no ato da entrega (quando disponível para o plano do cliente). A encomenda só é processada após a validação do comprovativo.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
