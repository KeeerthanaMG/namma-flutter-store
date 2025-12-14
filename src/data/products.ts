export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: 'hoodie' | 'tshirt';
  images: string[];
  colorImages?: { [colorName: string]: string[] };
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
    images: ['/images/1-h-black.png', '/images/1-h-white.jpg'],
    colorImages: {
      'Black': ['/images/1-h-black.png'],
      'White': ['/images/1-h-white.jpg'],
    },
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#ffffff' },
    ],
    inStock: true,
    isBestseller: true,
  },
  {
    id: 'tshirt-flutter-classic',
    name: 'Flutter Classic Tee',
    description: 'Essential Flutter tee with the iconic logo. Breathable fabric perfect for hackathons and meetups. Show your Flutter pride in style.',
    price: 799,
    originalPrice: 999,
    category: 'tshirt',
    images: ['/images/1-t-black.jpg', '/images/1-t-white.jpg'],
    colorImages: {
      'Black': ['/images/1-t-black.jpg'],
      'White': ['/images/1-t-white.jpg'],
    },
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#ffffff' },
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
    images: ['/images/2-h-white.png', '/images/2-h-black.png'],
    colorImages: {
      'Black': ['/images/2-h-black.png'],
      'White': ['/images/2-h-white.png'],
    },
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#ffffff' },
    ],
    inStock: true,
    isNew: true,
  },
  {
    id: 'tshirt-dash-mascot',
    name: 'Dash Mascot Tee',
    description: 'Cute Dash illustration tee. Perfect for Flutter enthusiasts who adore the adorable mascot. Comfortable and stylish everyday wear.',
    price: 849,
    category: 'tshirt',
    images: ['/images/2-t-black.png', '/images/2-t-white.png'],
    colorImages: {
      'Black': ['/images/2-t-black.png'],
      'White': ['/images/2-t-white.png'],
    },
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#ffffff' },
    ],
    inStock: true,
  },
  {
    id: 'hoodie-fluttercon-2025',
    name: 'FlutterCon 2025 Exclusive Hoodie',
    description: 'Limited edition hoodie exclusively designed for FlutterCon 2025 Chennai. Features unique conference artwork and commemorative design.',
    price: 2799,
    category: 'hoodie',
    images: ['/images/3-h-white.png', '/images/3-h-black.png'],
    colorImages: {
      'Black': ['/images/3-h-black.png'],
      'White': ['/images/3-h-white.png'],
    },
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#ffffff' },
    ],
    inStock: true,
    flutterConExclusive: true,
    isNew: true,
  },
  {
    id: 'tshirt-fluttercon-2025',
    name: 'FlutterCon 2025 Event Tee',
    description: 'Official FlutterCon 2025 Chennai event t-shirt. Commemorative design with event details and exclusive artwork.',
    price: 1299,
    category: 'tshirt',
    images: ['/images/3-t-black.png', '/images/3-t-white.png'],
    colorImages: {
      'Black': ['/images/3-t-black.png'],
      'White': ['/images/3-t-white.png'],
    },
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#ffffff' },
    ],
    inStock: true,
    flutterConExclusive: true,
    isNew: true,
  },
  {
    id: 'hoodie-widget-tree',
    name: 'Widget Tree Hoodie',
    description: 'Creative design showing a widget tree structure. For developers who appreciate Flutter architecture. Premium quality and comfort.',
    price: 2199,
    category: 'hoodie',
    images: ['/images/4-h-black.png', '/images/4-h-white.png'],
    colorImages: {
      'Black': ['/images/4-h-black.png'],
      'White': ['/images/4-h-white.png'],
    },
    sizes: ['M', 'L', 'XL'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#ffffff' },
    ],
    inStock: true,
  },
  {
    id: 'tshirt-widget-tree',
    name: 'Widget Tree Tee',
    description: 'Creative design showing a widget tree structure. For developers who appreciate Flutter architecture.',
    price: 949,
    category: 'tshirt',
    images: ['/images/4-t-black.png', '/images/4-t-white.png'],
    colorImages: {
      'Black': ['/images/4-t-black.png'],
      'White': ['/images/4-t-white.png'],
    },
    sizes: ['M', 'L', 'XL'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#ffffff' },
    ],
    inStock: true,
  },
  {
    id: 'hoodie-namma-flutter',
    name: 'Namma Flutter Chennai Hoodie',
    description: 'Represent the Namma Flutter Chennai community with pride. Features the community logo and "Chennai Flutter Family" tagline.',
    price: 1899,
    category: 'hoodie',
    images: ['/images/5-h-black.png', '/images/5-h-white.png'],
    colorImages: {
      'Black': ['/images/5-h-black.png'],
      'White': ['/images/5-h-white.png'],
    },
    sizes: ['M', 'L', 'XL'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#ffffff' },
    ],
    inStock: true,
  },
  {
    id: 'tshirt-namma-family',
    name: 'Namma Flutter Family Tee',
    description: 'Be part of the Chennai Flutter family with this community exclusive tee. Features all member avatars from major events.',
    price: 699,
    category: 'tshirt',
    images: ['/images/5-t-black.png', '/images/5-t-white.png'],
    colorImages: {
      'Black': ['/images/5-t-black.png'],
      'White': ['/images/5-t-white.png'],
    },
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#ffffff' },
    ],
    inStock: true,
  },
  {
    id: 'hoodie-code-flutter',
    name: 'Code in Flutter Hoodie',
    description: 'Minimalist design featuring "Code in Flutter" text with subtle code snippets. For developers who let their code do the talking.',
    price: 2099,
    category: 'hoodie',
    images: ['/images/6-h-black.png', '/images/6-h-white.png'],
    colorImages: {
      'Black': ['/images/6-h-black.png'],
      'White': ['/images/6-h-white.png'],
    },
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#ffffff' },
    ],
    inStock: true,
  },
  {
    id: 'tshirt-code-flutter',
    name: 'Code in Flutter Tee',
    description: 'Minimalist design featuring "Code in Flutter" text with subtle code snippets. For developers who let their code do the talking.',
    price: 899,
    category: 'tshirt',
    images: ['/images/6-t-black.png', '/images/6-t-white.png'],
    colorImages: {
      'Black': ['/images/6-t-black.png'],
      'White': ['/images/6-t-white.png'],
    },
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#ffffff' },
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
