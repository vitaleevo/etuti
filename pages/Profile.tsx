
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'perfil' | 'encomendas' | 'assinatura'>('perfil');

  useEffect(() => {
    const storedUser = localStorage.getItem('etuti_user');
    if (!storedUser) {
      navigate('/login');
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('etuti_user');
    window.dispatchEvent(new Event('storage'));
    navigate('/login');
  };

  const mockOrders = [
    { id: '#88421', date: '12 Out 2024', total: '12.500', status: 'Entregue' },
    { id: '#88310', date: '05 Out 2024', total: '8.200', status: 'Entregue' },
    { id: '#88990', date: 'Ontem', total: '15.000', status: 'A Caminho' },
  ];

  if (!user) return null;

  return (
    <div className="pt-24 pb-20 min-h-screen bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Sidebar Nav */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white dark:bg-surface-dark p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 relative">
                <span className="material-icons text-5xl">person</span>
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center text-gray-500 hover:text-primary transition-colors">
                  <span className="material-icons text-sm">photo_camera</span>
                </button>
              </div>
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-sm text-gray-500">{user.email}</p>
              
              <div className="w-full mt-8 space-y-1">
                <button 
                  onClick={() => setActiveTab('perfil')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${activeTab === 'perfil' ? 'bg-primary text-white shadow-lg shadow-green-500/20' : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                >
                  <span className="material-icons text-xl">account_circle</span>
                  Meus Dados
                </button>
                <button 
                  onClick={() => setActiveTab('encomendas')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${activeTab === 'encomendas' ? 'bg-primary text-white shadow-lg shadow-green-500/20' : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                >
                  <span className="material-icons text-xl">shopping_basket</span>
                  Encomendas
                </button>
                <button 
                  onClick={() => setActiveTab('assinatura')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${activeTab === 'assinatura' ? 'bg-primary text-white shadow-lg shadow-green-500/20' : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                >
                  <span className="material-icons text-xl">card_membership</span>
                  Assinatura
                </button>
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all mt-4"
                >
                  <span className="material-icons text-xl">logout</span>
                  Sair
                </button>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-surface-dark p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 min-h-[600px]">
              
              {activeTab === 'perfil' && (
                <div className="space-y-8 animate-in fade-in duration-500">
                  <h3 className="text-2xl font-bold flex items-center gap-3">
                    <span className="material-icons text-primary">edit</span>
                    Editar Perfil
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <label className="block text-sm font-bold text-gray-500">Nome Completo</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border-gray-200 dark:bg-gray-800 dark:border-gray-700" defaultValue={user.name} />
                    </div>
                    <div className="space-y-4">
                      <label className="block text-sm font-bold text-gray-500">E-mail</label>
                      <input type="email" className="w-full px-4 py-3 rounded-xl border-gray-200 dark:bg-gray-800 dark:border-gray-700" defaultValue={user.email} />
                    </div>
                    <div className="space-y-4">
                      <label className="block text-sm font-bold text-gray-500">Telemóvel</label>
                      <input type="tel" className="w-full px-4 py-3 rounded-xl border-gray-200 dark:bg-gray-800 dark:border-gray-700" defaultValue="+244 923 000 000" />
                    </div>
                    <div className="space-y-4">
                      <label className="block text-sm font-bold text-gray-500">Gênero</label>
                      <select className="w-full px-4 py-3 rounded-xl border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                        <option>Prefiro não dizer</option>
                        <option>Feminino</option>
                        <option>Masculino</option>
                      </select>
                    </div>
                  </div>
                  <div className="pt-4">
                    <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all">
                      Guardar Alterações
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'encomendas' && (
                <div className="space-y-8 animate-in fade-in duration-500">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold">Histórico de Encomendas</h3>
                    <span className="text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full font-bold">{mockOrders.length} Encomendas</span>
                  </div>
                  
                  <div className="space-y-4">
                    {mockOrders.map((order) => (
                      <div key={order.id} className="p-6 border border-gray-100 dark:border-gray-800 rounded-2xl hover:border-primary transition-all group">
                        <div className="flex flex-wrap justify-between items-center gap-4">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center text-gray-500">
                              <span className="material-icons">local_mall</span>
                            </div>
                            <div>
                              <h4 className="font-bold text-lg">{order.id}</h4>
                              <p className="text-xs text-gray-500">{order.date}</p>
                            </div>
                          </div>
                          <div className="text-center md:text-right">
                            <p className="font-extrabold text-primary text-lg">{order.total} Kz</p>
                            <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${order.status === 'Entregue' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                              {order.status}
                            </span>
                          </div>
                          <button className="text-sm font-bold text-gray-400 group-hover:text-primary transition-colors flex items-center gap-1">
                            Ver Detalhes
                            <span className="material-icons text-sm">chevron_right</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'assinatura' && (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in duration-500">
                  <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="material-icons text-4xl text-gray-300">card_membership</span>
                  </div>
                  <h3 className="text-2xl font-bold">Ainda não é assinante?</h3>
                  <p className="text-gray-500 max-w-md">Garanta a frescura semanal na sua casa e economize até 20% com os nossos planos exclusivos.</p>
                  <button 
                    onClick={() => navigate('/assinatura')}
                    className="bg-secondary text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-yellow-500/20"
                  >
                    Ver Planos de Assinatura
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
