export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: 'hoodie' | 'tshirt';
  images: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  inStock: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  flutterConExclusive?: boolean;
}

export const products: Product[] = [
  {
    id: 'hoodie-flutter-classic',
    name: 'Flutter Classic Hoodie',
    description: 'Premium quality hoodie featuring the iconic Flutter logo. Perfect for those cozy coding sessions. Made with 100% cotton blend for maximum comfort.',
    price: 1999,
    originalPrice: 2499,
    category: 'hoodie',
    images: ['/placeholder.svg'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Flutter Blue', hex: '#0553B1' },
      { name: 'Midnight Black', hex: '#1a1a2e' },
      { name: 'Cloud White', hex: '#f8f9fa' },
    ],
    inStock: true,
    isBestseller: true,
  },
  {
    id: 'hoodie-dash-mascot',
    name: 'Dash Mascot Hoodie',
    description: 'Show your love for Dash with this adorable mascot hoodie. Features a large Dash illustration on the back with Flutter branding on the front.',
    price: 2299,
    category: 'hoodie',
    images: ['/placeholder.svg'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Sky Blue', hex: '#02B0E8' },
      { name: 'Flutter Blue', hex: '#0553B1' },
    ],
    inStock: true,
    isNew: true,
  },
  {
    id: 'hoodie-fluttercon-2025',
    name: 'FlutterCon 2025 Exclusive Hoodie',
    description: 'Limited edition hoodie exclusively designed for FlutterCon 2025 Chennai. Features unique conference artwork and commemorative design.',
    price: 2799,
    category: 'hoodie',
    images: ['/placeholder.svg'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Conference Blue', hex: '#0553B1' },
      { name: 'Premium Black', hex: '#0d1117' },
    ],
    inStock: true,
    flutterConExclusive: true,
    isNew: true,
  },
  {
    id: 'hoodie-namma-flutter',
    name: 'Namma Flutter Chennai Hoodie',
    description: 'Represent the Namma Flutter Chennai community with pride. Features the community logo and "Chennai Flutter Family" tagline.',
    price: 1899,
    category: 'hoodie',
    images: ['/placeholder.svg'],
    sizes: ['M', 'L', 'XL'],
    colors: [
      { name: 'Chennai Blue', hex: '#0553B1' },
      { name: 'Marina Yellow', hex: '#f4d03f' },
    ],
    inStock: true,
  },
  {
    id: 'tshirt-flutter-dev',
    name: 'Flutter Developer Tee',
    description: 'The essential tee for every Flutter developer. Clean design with the Flutter logo. Breathable fabric perfect for hackathons and meetups.',
    price: 799,
    originalPrice: 999,
    category: 'tshirt',
    images: ['/placeholder.svg'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Flutter Blue', hex: '#0553B1' },
      { name: 'Pure White', hex: '#ffffff' },
      { name: 'Charcoal', hex: '#36454f' },
    ],
    inStock: true,
    isBestseller: true,
  },
  {
    id: 'tshirt-code-flutter',
    name: 'Code in Flutter Tee',
    description: 'Minimalist design featuring "Code in Flutter" text with subtle code snippets. For developers who let their code do the talking.',
    price: 899,
    category: 'tshirt',
    images: ['/placeholder.svg'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Developer Black', hex: '#1a1a2e' },
      { name: 'Terminal Green', hex: '#00d4aa' },
    ],
    inStock: true,
  },
  {
    id: 'tshirt-fluttercon-2025',
    name: 'FlutterCon 2025 Event Tee',
    description: 'Official FlutterCon 2025 Chennai event t-shirt. Commemorative design with event details and exclusive artwork.',
    price: 1299,
    category: 'tshirt',
    images: ['/placeholder.svg'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Event Blue', hex: '#0553B1' },
      { name: 'Classic White', hex: '#ffffff' },
    ],
    inStock: true,
    flutterConExclusive: true,
    isNew: true,
  },
  {
    id: 'tshirt-dash-love',
    name: 'Dash Love Tee',
    description: 'Cute Dash illustration with hearts. Perfect for Flutter enthusiasts who adore the adorable mascot.',
    price: 849,
    category: 'tshirt',
    images: ['/placeholder.svg'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Sky Blue', hex: '#02B0E8' },
      { name: 'Blush Pink', hex: '#ffc0cb' },
      { name: 'Lavender', hex: '#e6e6fa' },
    ],
    inStock: true,
  },
  {
    id: 'tshirt-widget-tree',
    name: 'Widget Tree Tee',
    description: 'Creative design showing a widget tree structure. For developers who appreciate Flutter architecture.',
    price: 949,
    category: 'tshirt',
    images: ['/placeholder.svg'],
    sizes: ['M', 'L', 'XL'],
    colors: [
      { name: 'Forest Green', hex: '#228b22' },
      { name: 'Ocean Blue', hex: '#0553B1' },
    ],
    inStock: true,
  },
  {
    id: 'tshirt-namma-family',
    name: 'Namma Flutter Family Tee',
    description: 'Be part of the Chennai Flutter family with this community exclusive tee. Features all member avatars from major events.',
    price: 699,
    category: 'tshirt',
    images: ['/placeholder.svg'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Community Blue', hex: '#0553B1' },
      { name: 'Tamil Yellow', hex: '#f4d03f' },
    ],
    inStock: true,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByCategory = (category: 'hoodie' | 'tshirt'): Product[] => {
  return products.filter((p) => p.category === category);
};
