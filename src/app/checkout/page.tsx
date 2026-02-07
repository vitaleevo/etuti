"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { CheckoutStep } from '@/types';

const CheckoutPage = () => {
  const { cart, removeFromCart, totalPrice } = useCart();
  const [step, setStep] = useState<CheckoutStep>(CheckoutStep.DELIVERY);
  const shipping = 700;

  const handleNextStep = () => {
    if (step === CheckoutStep.DELIVERY) setStep(CheckoutStep.PAYMENT);
    else if (step === CheckoutStep.PAYMENT) {
      const message = `Olá ETUTI! Gostaria de finalizar o meu pedido:\n\n` +
        cart.map(i => `- ${i.name} (${i.quantity}x)`).join('\n') +
        `\n\nTotal: ${(totalPrice + shipping).toLocaleString()} Kz`;
      window.open(`https://wa.me/244923000000?text=${encodeURIComponent(message)}`, '_blank');
      setStep(CheckoutStep.CONFIRMATION);
    }
  };

  if (cart.length === 0 && step !== CheckoutStep.CONFIRMATION) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-40 pb-20 text-center px-4">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-icons text-4xl text-gray-400">shopping_cart_checkout</span>
          </div>
          <h2 className="text-2xl font-bold mb-4">O seu carrinho está vazio</h2>
          <p className="text-gray-500 mb-8 italic">Que tal escolher algumas frutas frescas da época?</p>
          <Link href="/frutas" className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all">
            Ver Frutas
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Stepper */}
        <div className="mb-12 flex items-center justify-center space-x-4 max-w-2xl mx-auto">
          {[CheckoutStep.DELIVERY, CheckoutStep.PAYMENT, CheckoutStep.CONFIRMATION].map((s) => (
            <React.Fragment key={s}>
              <div className={`flex flex-col items-center ${step < s ? 'opacity-30' : ''}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= s ? 'bg-primary text-white' : 'bg-gray-200'}`}>
                  {step > s ? <span className="material-icons text-sm">check</span> : s}
                </div>
                <span className="mt-2 text-[10px] font-bold text-primary uppercase tracking-widest">
                  {s === 1 ? 'Entrega' : s === 2 ? 'Pagamento' : 'Confirmar'}
                </span>
              </div>
              {s < 3 && <div className={`h-1 flex-1 rounded-full ${step > s ? 'bg-primary' : 'bg-gray-200'}`} />}
            </React.Fragment>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {step === CheckoutStep.DELIVERY && (
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 ">
                <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
                  <span className="material-icons text-primary">location_on</span>
                  Endereço de Entrega
                </h2>
                {/* Form simplified for brevity */}
                <button
                  onClick={handleNextStep}
                  className="w-full bg-primary text-white py-5 rounded-2xl font-bold"
                >
                  Continuar para Pagamento
                </button>
              </div>
            )}

            {step === CheckoutStep.PAYMENT && (
              <div className="bg-white p-12 rounded-[2.5rem] shadow-sm text-center">
                <h2 className="text-3xl font-bold mb-4 italic">Finalizar no WhatsApp</h2>
                <button
                  onClick={handleNextStep}
                  className="bg-whatsapp text-white px-12 py-5 rounded-2xl font-bold"
                >
                  Finalizar no WhatsApp
                </button>
              </div>
            )}

            {step === CheckoutStep.CONFIRMATION && (
              <div className="text-center py-20 animate-in zoom-in duration-500">
                <h2 className="text-4xl font-extrabold mb-4 italic">Pedido Enviado!</h2>
                <Link href="/" className="inline-block mt-12 bg-gray-100 text-gray-900 px-10 py-4 rounded-2xl font-bold">
                  Voltar para a Loja
                </Link>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 ">
              <h3 className="font-bold text-xl mb-8">Resumo do Pedido</h3>
              <ul className="space-y-6 mb-8">
                {cart.map((item) => (
                  <li key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm">{item.name}</h4>
                      <p className="text-xs text-gray-400">Qtd: {item.quantity}</p>
                      <p className="text-primary font-bold">{(item.price * item.quantity).toLocaleString()} Kz</p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-500">
                      <span className="material-icons">close</span>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="border-t pt-6 space-y-3">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Subtotal</span>
                  <span>{totalPrice.toLocaleString()} Kz</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Entrega</span>
                  <span>{shipping.toLocaleString()} Kz</span>
                </div>
                <div className="flex justify-between font-bold text-2xl pt-4">
                  <span>Total</span>
                  <span className="text-primary">{(totalPrice + shipping).toLocaleString()} Kz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
