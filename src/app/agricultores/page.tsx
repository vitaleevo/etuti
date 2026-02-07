"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const FarmersMap = dynamic(() => import('@/components/FarmersMap'), {
    ssr: false,
    loading: () => <div className="h-full w-full bg-gray-100 animate-pulse flex items-center justify-center">Carregando mapa...</div>
});

const FARMERS = [
    {
        id: 'manuel',
        name: 'Família Manuel',
        location: 'Humpata, Huíla',
        specialty: 'Morangos e Maçãs',
        climate: 'Tropical de Altitude',
        partnershipYears: 3,
        coords: [-15.0183, 13.3667] as [number, number],
        story: 'Trabalhando as terras altas da Huíla há três gerações, a família Manuel é pioneira no cultivo de morangos orgânicos. Eles utilizam a água pura das nascentes locais para irrigar os campos, garantindo frutos de cor vibrante e sabor inigualável.',
        image: 'https://images.unsplash.com/photo-1595855759920-86582396756a?auhref=format&fit=crop&q=80&w=600'
    },
    {
        id: 'wete',
        name: 'Fazenda Wete',
        location: 'Kalandula, Malanje',
        specialty: 'Abacaxis e Mangas',
        climate: 'Tropical Húmido',
        partnershipYears: 2,
        coords: [-9.1000, 16.0000] as [number, number],
        story: 'Localizada perto das majestosas quedas de Kalandula, a Fazenda Wete foca em agricultura regenerativa. A polpa dos seus abacaxis é famosa pela baixa acidez e doçura extrema, resultado de um solo rico em ferro e nutrientes vulcânicos.',
        image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auhref=format&fit=crop&q=80&w=600'
    },
    {
        id: 'bengo',
        name: 'Cooperativa do Bengo',
        location: 'Caxito, Bengo',
        specialty: 'Bananas e Papaias',
        climate: 'Tropical Seco',
        partnershipYears: 4,
        coords: [-8.5833, 13.6667] as [number, number],
        story: 'Esta cooperativa une 20 pequenos produtores que preservam a técnica ancestral de cultivo da "Banana Pão". Ao trabalharem juntos com a ETUTI, conseguiram eliminar intermediários, garantindo que a colheita matinal chegue a Luanda no mesmo dia.',
        image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auhref=format&fit=crop&q=80&w=600'
    }
];

const FarmersPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-20 pb-24 bg-white min-h-screen">
                <section className="bg-secondary/5 py-24 px-4 text-center border-b border-gray-100 ">
                    <div className="max-w-3xl mx-auto">
                        <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Os Guardiões da Terra</span>
                        <h1 className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight italic">Quem cultiva o seu bem-estar</h1>
                        <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
                            Na ETUTI, conhecemos cada rosto, cada mão e cada hectare. Conheça as famílias que tornam o "Wete Wa Nsi" uma realidade todos os dias.
                        </p>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-60px] relative z-20">
                    <div className="bg-white p-2 rounded-[3.5rem] shadow-2xl shadow-black/10">
                        <div className="h-[400px] md:h-[500px] w-full rounded-[3rem] overflow-hidden">
                            <FarmersMap farmers={FARMERS} />
                        </div>
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 space-y-32">
                    {FARMERS.map((farmer, idx) => (
                        <div
                            key={farmer.id}
                            id={farmer.id}
                            className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center scroll-mt-32`}
                        >
                            <div className="w-full md:w-1/2">
                                <img src={farmer.image} alt={farmer.name} className="rounded-[3rem] shadow-2xl h-[400px] w-full object-cover" />
                            </div>
                            <div className="w-full md:w-1/2 space-y-6">
                                <h2 className="text-4xl font-extrabold italic">{farmer.name}</h2>
                                <p className="text-gray-600 text-lg leading-relaxed">{farmer.story}</p>
                                <Link href="/frutas" className="text-primary font-bold hover:underline">Ver produtos desta fazenda</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default FarmersPage;

