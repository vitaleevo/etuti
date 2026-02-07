"use client";

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';

const ProfilePage = () => {
    const navigate = useRouter();
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const savedUser = localStorage.getItem('etuti_user');
        if (!savedUser) {
            navigate.push('/login');
        } else {
            setUser(JSON.parse(savedUser));
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('etuti_user');
        window.dispatchEvent(new Event('storage'));
        navigate.push('/');
    };

    if (!user) return null;

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-32 pb-20 px-4 max-w-7xl mx-auto w-full">
                <div className="bg-white rounded-[3rem] shadow-xl p-8 md:p-12 border border-gray-100 ">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="w-full md:w-1/3">
                            <div className="text-center">
                                <div className="w-32 h-32 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-4xl font-bold">
                                    {user.name.charAt(0)}
                                </div>
                                <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
                                <p className="text-gray-500 mb-8">{user.email}</p>
                                <button
                                    onClick={handleLogout}
                                    className="w-full py-4 text-red-500 font-bold border-2 border-red-50 rounded-2xl hover:bg-red-50 transition-all"
                                >
                                    Terminar Sessão
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 space-y-8">
                            <h2 className="text-2xl font-bold border-b pb-4">As Minhas Encomendas</h2>
                            <div className="text-center py-20 bg-gray-50 rounded-[2rem] border-2 border-dashed border-gray-100 ">
                                <span className="material-icons text-4xl text-gray-300 mb-4">history</span>
                                <p className="text-gray-500">Ainda não realizou nenhuma encomenda.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ProfilePage;
