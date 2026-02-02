
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'abacaxi-premium',
    name: 'Abacaxi Premium',
    price: 3500,
    unit: 'unidade',
    description: 'O nosso Abacaxi Premium é cultivado com cuidado nas terras férteis de Malanje. Conhecido pela sua doçura intensa e polpa suculenta, é a escolha perfeita para sobremesas.',
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&q=80&w=600',
    category: 'Frutas',
    origin: 'Malanje, Angola',
    weight: '1.5 - 2.0 kg',
    rating: 4.8,
    reviews: 124
  },
  {
    id: 'morangos-huila',
    name: 'Morangos Huíla',
    price: 2000,
    unit: '500g',
    description: 'Morangos frescos colhidos nas terras altas da Huíla, conhecidos pelo seu aroma e doçura natural.',
    image: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=600',
    category: 'Frutas',
    origin: 'Huíla, Angola',
    weight: '500g',
    rating: 4.9,
    reviews: 86
  },
  {
    id: 'laranja-doce',
    name: 'Laranja Doce',
    price: 1200,
    unit: '1kg',
    description: 'Laranjas suculentas ideais para sumos frescos e vitamina C diária.',
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&q=80&w=600',
    category: 'Frutas',
    origin: 'Kwanza Sul, Angola',
    weight: '1kg',
    rating: 4.7,
    reviews: 52
  }
];
