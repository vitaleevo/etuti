
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

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
    image: 'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=600'
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
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=600'
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
    image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=600'
  }
];

const Farmers = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Initialize map if not already initialized
    if (mapContainerRef.current && !mapRef.current) {
      // @ts-ignore - Leaflet is loaded from global script
      const L = window.L;
      if (!L) return;

      const map = L.map(mapContainerRef.current, {
        scrollWheelZoom: false,
        zoomControl: false
      }).setView([-12.5, 18.5], 6);
      
      mapRef.current = map;

      // Add Zoom Control at bottom right
      L.control.zoom({ position: 'bottomright' }).addTo(map);

      // Add Tile Layer
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      // Custom Icon
      const customIcon = L.divIcon({
        className: 'custom-div-icon',
        html: `<div class="w-8 h-8 bg-primary rounded-full border-2 border-white flex items-center justify-center text-white shadow-lg shadow-green-500/30 transform transition-transform hover:scale-110">
                <span class="material-icons text-sm">eco</span>
              </div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
      });

      // Add Markers
      FARMERS.forEach(farmer => {
        const popupContent = `
          <div class="p-0 overflow-hidden bg-white dark:bg-surface-dark">
            <img src="${farmer.image}" class="w-full h-24 object-cover" />
            <div class="p-4">
              <h4 class="font-bold text-gray-900 dark:text-white mb-1">${farmer.name}</h4>
              <p class="text-[10px] text-primary font-bold uppercase tracking-wider mb-2">${farmer.specialty}</p>
              <a href="#${farmer.id}" class="inline-block w-full text-center bg-gray-900 dark:bg-primary text-white text-xs py-2 rounded-lg font-bold hover:bg-opacity-90 transition-all">Ver Perfil</a>
            </div>
          </div>
        `;

        L.marker(farmer.coords, { icon: customIcon })
          .addTo(map)
          .bindPopup(popupContent);
      });
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  const scrollToFarmer = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="pt-20 pb-24 bg-white dark:bg-background-dark min-h-screen">
      {/* Immersive Header */}
      <section className="bg-secondary/5 dark:bg-secondary/10 py-24 px-4 text-center border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-3xl mx-auto">
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Os Guardiões da Terra</span>
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight">Quem cultiva o seu bem-estar</h1>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
            Na ETUTI, conhecemos cada rosto, cada mão e cada hectare. Conheça as famílias que tornam o "Wete Wa Nsi" uma realidade todos os dias.
          </p>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-60px] relative z-20">
        <div className="bg-white dark:bg-surface-dark p-2 rounded-[3.5rem] shadow-2xl shadow-black/10">
          <div 
            ref={mapContainerRef} 
            className="h-[400px] md:h-[500px] w-full rounded-[3rem] overflow-hidden z-10"
          ></div>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {FARMERS.map(farmer => (
            <button 
              key={farmer.id}
              onClick={(e) => scrollToFarmer(e, farmer.id)}
              className="px-6 py-2 bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-full text-xs font-bold shadow-sm hover:border-primary hover:text-primary transition-all flex items-center gap-2 group"
            >
              <span className="w-2 h-2 bg-primary rounded-full group-hover:animate-ping"></span>
              {farmer.name}
            </button>
          ))}
        </div>
      </section>

      {/* Farmers List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 space-y-32">
        {FARMERS.map((farmer, idx) => (
          <div 
            key={farmer.id} 
            id={farmer.id}
            className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center scroll-mt-32`}
          >
            {/* Image Side */}
            <div className="w-full md:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
                <img 
                  src={farmer.image} 
                  alt={farmer.name} 
                  className="relative z-10 rounded-[3rem] shadow-2xl w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-[1.02]" 
                />
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-surface-dark px-8 py-6 rounded-3xl shadow-xl z-20 hidden md:block border border-gray-100 dark:border-gray-800">
                  <div className="text-primary font-bold text-4xl mb-1">{farmer.partnershipYears}</div>
                  <div className="text-gray-400 text-[10px] uppercase font-bold tracking-widest leading-none">Anos de <br/>Parceria</div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 space-y-8">
              <div className="flex items-center gap-3 text-primary font-bold">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="material-icons">location_on</span>
                </div>
                <span className="tracking-wide uppercase text-sm">{farmer.location}</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold">{farmer.name}</h2>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-green-50 dark:bg-green-900/20 text-primary text-xs font-bold rounded-full border border-green-100 dark:border-green-800">
                  Especialista em {farmer.specialty}
                </span>
                <span className="px-4 py-2 bg-yellow-50 dark:bg-yellow-900/20 text-secondary text-xs font-bold rounded-full border border-yellow-100 dark:border-yellow-800">
                  Clima: {farmer.climate}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed italic border-l-4 border-primary/20 pl-6">
                "{farmer.story}"
              </p>

              <div className="pt-6">
                <Link to="/frutas" className="inline-flex items-center gap-3 text-gray-900 dark:text-white font-bold group">
                  <span className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-green-500/20">
                    <span className="material-icons">shopping_basket</span>
                  </span>
                  Ver produtos desta fazenda
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Farmer Ethos */}
      <section className="mt-40 bg-gray-900 dark:bg-surface-dark py-32 px-4 text-center rounded-[5rem] mx-4 overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <span className="material-icons text-[20rem] -mr-20 -mt-20">eco</span>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-white leading-tight">A nossa economia é rural.</h2>
          <p className="text-gray-400 text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Quando compra um produto na ETUTI, 70% do valor chega diretamente à família produtora. Isso significa escolas para os filhos dos agricultores e a garantia de que a nossa terra continua a prosperar.
          </p>
          <Link to="/produtor" className="inline-block bg-primary text-white px-12 py-5 rounded-2xl font-bold shadow-2xl shadow-green-500/40 hover:-translate-y-1 hover:shadow-green-500/60 transition-all">
            Quero ser Produtor Parceiro
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Farmers;
