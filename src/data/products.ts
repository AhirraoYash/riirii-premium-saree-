export interface Product {
  id: string;
  title: string;
  price: number;
  mrp: number;
  discount: number;
  image: string;
  images: string[];
  category: string;
  fabric: string;
  color: string;
  occasion: string;
  description: string;
  stock: number;
}

export const CATEGORIES = [
  { id: 'banarasi', name: 'Banarasi', image: 'https://images.unsplash.com/photo-1610030469983-98e550d615ef?q=80&w=800' },
  { id: 'silk', name: 'Pure Silk', image: 'https://images.unsplash.com/photo-1583391733959-f183063618a0?q=80&w=800' },
  { id: 'cotton', name: 'Cotton', image: 'https://images.unsplash.com/photo-1605763240000-7e93b172d754?q=80&w=800' },
  { id: 'party', name: 'Party Wear', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800' },
  { id: 'wedding', name: 'Wedding', image: 'https://images.unsplash.com/photo-1583391733959-f183063618a0?q=80&w=800' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Royal Red Banarasi Silk Saree',
    price: 4500,
    mrp: 9000,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d615ef?q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d615ef?q=80&w=800',
      'https://images.unsplash.com/photo-1583391733959-f183063618a0?q=80&w=800'
    ],
    category: 'banarasi',
    fabric: 'Pure Banarasi Silk',
    color: 'Red',
    occasion: 'Wedding',
    description: 'Exquisite red Banarasi silk saree featuring intricate gold zari work. Perfect for bridal wear and grand occasions.',
    stock: 5
  },
  {
    id: '2',
    title: 'Golden Yellow Kanjivaram Silk',
    price: 6200,
    mrp: 12400,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1583391733959-f183063618a0?q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1583391733959-f183063618a0?q=80&w=800',
      'https://images.unsplash.com/photo-1610030469983-98e550d615ef?q=80&w=800'
    ],
    category: 'silk',
    fabric: 'Kanjivaram Silk',
    color: 'Yellow',
    occasion: 'Festive',
    description: 'A stunning golden yellow Kanjivaram silk saree with a contrasting border. A timeless classic for your wardrobe.',
    stock: 12
  },
  {
    id: '3',
    title: 'Emerald Green Cotton Silk Saree',
    price: 2100,
    mrp: 3500,
    discount: 40,
    image: 'https://images.unsplash.com/photo-1605763240000-7e93b172d754?q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1605763240000-7e93b172d754?q=80&w=800',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800'
    ],
    category: 'cotton',
    fabric: 'Cotton Silk Blend',
    color: 'Green',
    occasion: 'Casual/Office',
    description: 'Lightweight and breathable emerald green cotton silk saree. Ideal for daily wear and office settings.',
    stock: 25
  },
  {
    id: '4',
    title: 'Magenta Party Wear Georgette',
    price: 3800,
    mrp: 7600,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800',
      'https://images.unsplash.com/photo-1605763240000-7e93b172d754?q=80&w=800'
    ],
    category: 'party',
    fabric: 'Georgette',
    color: 'Magenta',
    occasion: 'Party',
    description: 'Elegant magenta georgette saree with sequin embellishments. Guaranteed to turn heads at any evening party.',
    stock: 8
  },
  {
    id: '5',
    title: 'Classic Ivory Chanderi Saree',
    price: 2800,
    mrp: 4000,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d615ef?q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d615ef?q=80&w=800'
    ],
    category: 'cotton',
    fabric: 'Chanderi Cotton',
    color: 'Ivory',
    occasion: 'Festive',
    description: 'Subtle and sophisticated ivory Chanderi saree with delicate golden motifs.',
    stock: 15
  },
  {
    id: '6',
    title: 'Midnight Blue Silk Blend',
    price: 3200,
    mrp: 6400,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1583391733959-f183063618a0?q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1583391733959-f183063618a0?q=80&w=800'
    ],
    category: 'silk',
    fabric: 'Art Silk',
    color: 'Blue',
    occasion: 'Party',
    description: 'Rich midnight blue art silk saree with a heavy pallu design.',
    stock: 4
  },
  {
    id: '7',
    title: 'Pastel Pink Organza Saree',
    price: 5500,
    mrp: 11000,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800'
    ],
    category: 'party',
    fabric: 'Organza',
    color: 'Pink',
    occasion: 'Wedding Guest',
    description: 'Ethereal pastel pink organza saree with floral embroidery. Perfect for summer weddings.',
    stock: 7
  },
  {
    id: '8',
    title: 'Traditional Maroon Bridal Saree',
    price: 12500,
    mrp: 25000,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d615ef?q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d615ef?q=80&w=800'
    ],
    category: 'wedding',
    fabric: 'Pure Silk',
    color: 'Maroon',
    occasion: 'Bridal',
    description: 'The quintessential maroon bridal saree with heavy zari work all over. A masterpiece of craftsmanship.',
    stock: 2
  }
];
