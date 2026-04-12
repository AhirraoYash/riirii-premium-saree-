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
  { id: 'banarasi', name: 'Banarasi', image: 'https://i.pinimg.com/1200x/e0/3d/35/e03d35c1c76ede5881ace0e521404d3c.jpg' },
  { id: 'silk', name: 'Pure Silk', image: 'https://i.pinimg.com/736x/a2/0f/e1/a20fe1d55b376e9cf476e257761469c1.jpg' },
  { id: 'cotton', name: 'Cotton', image: 'https://i.pinimg.com/736x/e7/d0/db/e7d0dbda667a0aee4a586417ade797a0.jpg' },
  { id: 'party', name: 'Party Wear', image: 'https://i.pinimg.com/1200x/65/83/71/658371dec9eedde8af51954e14866079.jpg' },
  { id: 'wedding', name: 'Wedding', image: 'https://i.pinimg.com/1200x/f1/68/84/f16884e04eed5e6b85d9c0e36887c72d.jpg' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Royal Red Banarasi Silk Saree',
    price: 4500,
    mrp: 9000,
    discount: 50,
    image: 'https://i.pinimg.com/736x/a6/ea/6e/a6ea6e18f3f8afe81f0d6450fac7e632.jpg',
    images: [
      'https://i.pinimg.com/736x/51/3f/d5/513fd50a5822df9be1cc81e4c520f9b9.jpg',
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
    image: 'https://i.pinimg.com/736x/d9/19/cf/d919cf7729964717567109cd3b54c40d.jpg',
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
