"use client";

import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Farmer {
    id: string;
    name: string;
    coords: [number, number];
    image: string;
    specialty: string;
}

interface FarmersMapProps {
    farmers: Farmer[];
}

const FarmersMap: React.FC<FarmersMapProps> = ({ farmers }) => {
    useEffect(() => {
        // Standard Leaflet icon fix for Next.js
        // @ts-ignore
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
            iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });

        const map = L.map('map', {
            scrollWheelZoom: false,
            zoomControl: false
        }).setView([-12.5, 18.5], 6);

        L.control.zoom({ position: 'bottomright' }).addTo(map);

        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        const customIcon = L.divIcon({
            className: 'custom-div-icon',
            html: `<div class="w-8 h-8 bg-[#2D8A3E] rounded-full border-2 border-white flex items-center justify-center text-white shadow-lg">
                <span class="material-icons text-sm">eco</span>
              </div>`,
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32]
        });

        farmers.forEach(farmer => {
            const popupContent = `
          <div class="p-0 overflow-hidden">
            <img src="${farmer.image}" class="w-full h-24 object-cover" />
            <div class="p-4">
              <h4 class="font-bold mb-1">${farmer.name}</h4>
              <p class="text-[10px] text-[#2D8A3E] font-bold uppercase tracking-wider mb-2">${farmer.specialty}</p>
            </div>
          </div>
        `;

            L.marker(farmer.coords, { icon: customIcon })
                .addTo(map)
                .bindPopup(popupContent);
        });

        return () => {
            map.remove();
        };
    }, [farmers]);

    return <div id="map" className="h-full w-full"></div>;
};

export default FarmersMap;
