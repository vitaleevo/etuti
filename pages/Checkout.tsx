
import React, { useState } from 'react';
// Added Link import from react-router-dom
import { Link } from 'react-router-dom';
import { CartItem, CheckoutStep } from '../types';

interface CheckoutProps {
  cart: CartItem[];
  removeFromCart: (id: string) => void;
}

const Checkout: React.FC<CheckoutProps> = ({ cart, removeFromCart }) => {
  const [step, setStep] = useState<CheckoutStep>(CheckoutStep.DELIVERY);
  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 700;

  const handleNextStep = () => {
    if (step === CheckoutStep.DELIVERY) setStep(CheckoutStep.PAYMENT);
    else if (step === CheckoutStep.PAYMENT) {
      // Logic for WhatsApp redirection
      const message = `Olá ETUTI! Gostaria de finalizar o meu pedido:\n\n` + 
        cart.map(i => `- ${i.name} (${i.quantity}x)`).join('\n') + 
        `\n\nTotal: ${(total + shipping).toLocaleString()} Kz`;
      window.open(`https://wa.me/244923000000?text=${encodeURIComponent(message)}`, '_blank');
      setStep(CheckoutStep.CONFIRMATION);
    }
  };

  if (cart.length === 0 && step !== CheckoutStep.CONFIRMATION) {
    return <div className="pt-40 text-center">O seu carrinho está vazio.</div>;
  }

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Stepper */}
      <div className="mb-12 flex items-center justify-center space-x-4 max-w-2xl mx-auto">
        {[CheckoutStep.DELIVERY, CheckoutStep.PAYMENT, CheckoutStep.CONFIRMATION].map((s) => (
          <React.Fragment key={s}>
            <div className={`flex flex-col items-center ${step < s ? 'opacity-30' : ''}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= s ? 'bg-primary text-white' : 'bg-gray-200'}`}>
                {step > s ? <span className="material-icons text-sm">check</span> : s}
              </div>
              <span className="mt-2 text-xs font-bold text-primary uppercase">
                {s === 1 ? 'Entrega' : s === 2 ? 'Pagamento' : 'Confirmar'}
              </span>
            </div>
            {s < 3 && <div className={`h-1 flex-1 rounded-full ${step > s ? 'bg-primary' : 'bg-gray-200'}`} />}
          </React.Fragment>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Form Area */}
        <div className="lg:col-span-2">
          {step === CheckoutStep.DELIVERY && (
            <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="material-icons text-primary">location_on</span>
                Endereço de Entrega
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">CEP / Zona</label>
                    <input type="text" className="w-full rounded-lg border-gray-200 dark:bg-gray-800" placeholder="Luanda Sul" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Província</label>
                    <input type="text" className="w-full rounded-lg border-gray-200 dark:bg-gray-800" defaultValue="Luanda" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Rua / Avenida</label>
                  <input type="text" className="w-full rounded-lg border-gray-200 dark:bg-gray-800" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Número</label>
                    <input type="text" className="w-full rounded-lg border-gray-200 dark:bg-gray-800" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Bairro</label>
                    <input type="text" className="w-full rounded-lg border-gray-200 dark:bg-gray-800" />
                  </div>
                </div>
                <button 
                  type="button" 
                  onClick={handleNextStep}
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-opacity-90 shadow-lg shadow-green-500/20"
                >
                  Continuar
                </button>
              </form>
            </div>
          )}

          {step === CheckoutStep.PAYMENT && (
            <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 text-center">
              <div className="w-20 h-20 bg-green-50 text-whatsapp rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-icons text-4xl">chat</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">Finalizar no WhatsApp</h2>
              <p className="text-gray-500 mb-8 max-w-md mx-auto">Para garantir qualidade premium, confirmamos o pagamento e a entrega de forma personalizada.</p>
              <button 
                onClick={handleNextStep}
                className="inline-flex items-center gap-2 bg-whatsapp text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-green-500/30 transform hover:-translate-y-1 transition-all"
              >
                <span className="material-icons">whatsapp</span>
                Finalizar no WhatsApp
              </button>
            </div>
          )}

          {step === CheckoutStep.CONFIRMATION && (
            <div className="text-center py-20">
              <span className="material-icons text-primary text-6xl mb-4">check_circle</span>
              <h2 className="text-3xl font-bold mb-2">Pedido Recebido!</h2>
              <p className="text-gray-500">Estamos a processar o seu pedido. Em breve entraremos em contacto pelo WhatsApp.</p>
              <Link to="/" className="inline-block mt-8 text-primary font-bold">Voltar para a Loja</Link>
            </div>
          )}
        </div>

        {/* Sidebar Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 sticky top-24">
            <h3 className="font-bold text-lg mb-6">Resumo do Pedido</h3>
            <ul className="space-y-4 mb-6">
              {cart.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-50">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm">{item.name}</h4>
                    <p className="text-xs text-gray-500">Qtd: {item.quantity}</p>
                    <p className="text-primary font-bold text-sm mt-1">{(item.price * item.quantity).toLocaleString()} Kz</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-500 transition-colors">
                    <span className="material-icons text-sm">close</span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="space-y-2 border-t pt-4">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Subtotal</span>
                <span>{total.toLocaleString()} Kz</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Entrega</span>
                <span>{shipping.toLocaleString()} Kz</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t border-dashed mt-2">
                <span>Total</span>
                <span className="text-primary">{(total + shipping).toLocaleString()} Kz</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
