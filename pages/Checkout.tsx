
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartItem, CheckoutStep } from '../types';

interface CheckoutProps {
  cart: CartItem[];
  removeFromCart: (id: string) => void;
}

const Checkout: React.FC<CheckoutProps> = ({ cart, removeFromCart }) => {
  const [step, setStep] = useState<CheckoutStep>(CheckoutStep.DELIVERY);
  const [itemToRemove, setItemToRemove] = useState<string | null>(null);
  
  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 700;

  const handleNextStep = () => {
    if (step === CheckoutStep.DELIVERY) setStep(CheckoutStep.PAYMENT);
    else if (step === CheckoutStep.PAYMENT) {
      const message = `Olá ETUTI! Gostaria de finalizar o meu pedido:\n\n` + 
        cart.map(i => `- ${i.name} (${i.quantity}x)`).join('\n') + 
        `\n\nTotal: ${(total + shipping).toLocaleString()} Kz`;
      window.open(`https://wa.me/244923000000?text=${encodeURIComponent(message)}`, '_blank');
      setStep(CheckoutStep.CONFIRMATION);
    }
  };

  const confirmRemoval = () => {
    if (itemToRemove) {
      removeFromCart(itemToRemove);
      setItemToRemove(null);
    }
  };

  if (cart.length === 0 && step !== CheckoutStep.CONFIRMATION) {
    return (
      <div className="pt-40 pb-20 text-center px-4">
        <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-icons text-4xl text-gray-400">shopping_cart_checkout</span>
        </div>
        <h2 className="text-2xl font-bold mb-4">O seu carrinho está vazio</h2>
        <p className="text-gray-500 mb-8 italic">Que tal escolher algumas frutas frescas da época?</p>
        <Link to="/frutas" className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all">
          Ver Frutas
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Stepper */}
      <div className="mb-12 flex items-center justify-center space-x-4 max-w-2xl mx-auto">
        {[CheckoutStep.DELIVERY, CheckoutStep.PAYMENT, CheckoutStep.CONFIRMATION].map((s) => (
          <React.Fragment key={s}>
            <div className={`flex flex-col items-center ${step < s ? 'opacity-30' : ''}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= s ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>
                {step > s ? <span className="material-icons text-sm">check</span> : s}
              </div>
              <span className="mt-2 text-[10px] font-bold text-primary uppercase tracking-widest">
                {s === 1 ? 'Entrega' : s === 2 ? 'Pagamento' : 'Confirmar'}
              </span>
            </div>
            {s < 3 && <div className={`h-1 flex-1 rounded-full ${step > s ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'}`} />}
          </React.Fragment>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Form Area */}
        <div className="lg:col-span-2">
          {step === CheckoutStep.DELIVERY && (
            <div className="bg-white dark:bg-surface-dark p-8 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-gray-800">
              <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
                <span className="material-icons text-primary">location_on</span>
                Endereço de Entrega
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-400 tracking-widest mb-2">Ponto de Referência / Zona</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border-gray-200 dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-primary" placeholder="Ex: Luanda Sul" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-400 tracking-widest mb-2">Província</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border-gray-200 dark:bg-gray-800 dark:border-gray-700" defaultValue="Luanda" readOnly />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 tracking-widest mb-2">Rua / Avenida</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border-gray-200 dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-primary" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-400 tracking-widest mb-2">Número da Casa</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border-gray-200 dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-400 tracking-widest mb-2">Bairro</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border-gray-200 dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-primary" />
                  </div>
                </div>
                <button 
                  type="button" 
                  onClick={handleNextStep}
                  className="w-full bg-primary text-white py-5 rounded-2xl font-bold hover:bg-opacity-90 shadow-xl shadow-green-500/20 transition-all active:scale-95"
                >
                  Continuar para Pagamento
                </button>
              </form>
            </div>
          )}

          {step === CheckoutStep.PAYMENT && (
            <div className="bg-white dark:bg-surface-dark p-12 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-gray-800 text-center">
              <div className="w-24 h-24 bg-whatsapp/10 text-whatsapp rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                <span className="material-icons text-5xl">chat</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Finalizar no WhatsApp</h2>
              <p className="text-gray-500 mb-10 max-w-md mx-auto leading-relaxed">
                Para garantir a frescura premium e um serviço personalizado, os detalhes de pagamento e entrega são confirmados diretamente com a nossa equipa.
              </p>
              <button 
                onClick={handleNextStep}
                className="inline-flex items-center gap-3 bg-whatsapp text-white px-12 py-5 rounded-2xl font-bold shadow-2xl shadow-green-500/30 transform hover:-translate-y-1 transition-all active:scale-95"
              >
                <span className="material-icons">whatsapp</span>
                Finalizar no WhatsApp
              </button>
              <p className="mt-6 text-xs text-gray-400 font-bold uppercase tracking-widest">Atendimento Humano em Angola</p>
            </div>
          )}

          {step === CheckoutStep.CONFIRMATION && (
            <div className="text-center py-20 animate-in zoom-in duration-500">
              <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="material-icons text-6xl">check_circle</span>
              </div>
              <h2 className="text-4xl font-extrabold mb-4">Pedido Enviado!</h2>
              <p className="text-gray-500 text-lg max-w-md mx-auto">Verifique o seu WhatsApp. Um dos nossos especialistas entrará em contacto para validar a sua encomenda.</p>
              <Link to="/" className="inline-block mt-12 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-10 py-4 rounded-2xl font-bold hover:bg-primary hover:text-white transition-all">
                Voltar para a Loja
              </Link>
            </div>
          )}
        </div>

        {/* Sidebar Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-surface-dark p-8 rounded-[2rem] shadow-xl border border-gray-100 dark:border-gray-800 sticky top-24">
            <h3 className="font-bold text-xl mb-8 flex items-center justify-between">
              Resumo do Pedido
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md font-bold">{cart.length} itens</span>
            </h3>
            <ul className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2 scrollbar-hide">
              {cart.map((item) => (
                <li key={item.id} className="flex gap-4 group">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-900 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm text-gray-900 dark:text-white truncate">{item.name}</h4>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Qtd: {item.quantity}</p>
                    <p className="text-primary font-extrabold text-sm mt-1">{(item.price * item.quantity).toLocaleString()} Kz</p>
                  </div>
                  <button 
                    onClick={() => setItemToRemove(item.id)} 
                    className="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-full transition-all"
                    title="Remover item"
                  >
                    <span className="material-icons text-lg">close</span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="space-y-3 border-t border-gray-100 dark:border-gray-800 pt-6">
              <div className="flex justify-between text-sm font-medium text-gray-500">
                <span>Subtotal</span>
                <span>{total.toLocaleString()} Kz</span>
              </div>
              <div className="flex justify-between text-sm font-medium text-gray-500">
                <span>Entrega Estimada</span>
                <span className="text-green-600 font-bold">{shipping.toLocaleString()} Kz</span>
              </div>
              <div className="flex justify-between font-extrabold text-2xl pt-4 border-t border-dashed border-gray-200 dark:border-gray-700 mt-4">
                <span>Total</span>
                <span className="text-primary">{(total + shipping).toLocaleString()} Kz</span>
              </div>
              <p className="text-[10px] text-center text-gray-400 font-bold uppercase tracking-widest mt-4">Preços com IVA incluído</p>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {itemToRemove && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setItemToRemove(null)}
          ></div>
          <div className="relative bg-white dark:bg-surface-dark w-full max-w-sm rounded-[2.5rem] shadow-2xl p-8 md:p-10 border border-gray-100 dark:border-gray-800 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-red-50 dark:bg-red-900/10 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="material-icons text-3xl">delete_outline</span>
            </div>
            <h3 className="text-2xl font-extrabold text-center mb-4 text-gray-900 dark:text-white italic">Remover Item?</h3>
            <p className="text-gray-500 dark:text-gray-400 text-center mb-8 leading-relaxed font-medium">
              Tem certeza que deseja remover este item da sua colheita? Poderá perder a reserva do stock atual.
            </p>
            <div className="flex flex-col gap-3">
              <button 
                onClick={confirmRemoval}
                className="w-full bg-red-500 text-white py-4 rounded-2xl font-bold hover:bg-red-600 transition-all shadow-lg shadow-red-500/20"
              >
                Sim, Remover
              </button>
              <button 
                onClick={() => setItemToRemove(null)}
                className="w-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-4 rounded-2xl font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
