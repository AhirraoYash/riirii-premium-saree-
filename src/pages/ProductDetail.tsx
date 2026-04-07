import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag, Truck, ShieldCheck, Share2, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/ui/ProductCard';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);
  
  const [activeImage, setActiveImage] = useState(0);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-serif mb-4">Product not found</h2>
        <Button onClick={() => navigate('/shop')}>Back to Shop</Button>
      </div>
    );
  }

  const isWished = isInWishlist(product.id);
  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <button onClick={() => navigate('/')} className="hover:text-primary">Home</button>
        <ChevronRight className="w-4 h-4" />
        <button onClick={() => navigate('/shop')} className="hover:text-primary">Shop</button>
        <ChevronRight className="w-4 h-4" />
        <span className="text-primary truncate">{product.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        
        {/* Image Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4 lg:sticky lg:top-24 h-fit">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0 shrink-0">
            {product.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`w-20 h-24 shrink-0 rounded-md overflow-hidden border-2 transition-colors ${activeImage === idx ? 'border-accent' : 'border-transparent'}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          
          {/* Main Image */}
          <div className="flex-1 relative aspect-[3/4] rounded-xl overflow-hidden bg-muted">
            <img 
              src={product.images[activeImage]} 
              alt={product.title} 
              className="w-full h-full object-cover"
            />
            {product.discount > 0 && (
              <div className="absolute top-4 left-4 bg-accent text-white font-medium px-3 py-1 rounded-sm shadow-md">
                {product.discount}% OFF
              </div>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-6">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-primary">
              {product.title}
            </h1>
            <div className="flex items-end gap-4 mb-4">
              <span className="text-3xl font-medium text-primary">₹{product.price.toLocaleString('en-IN')}</span>
              {product.mrp > product.price && (
                <span className="text-xl text-muted-foreground line-through mb-1">₹{product.mrp.toLocaleString('en-IN')}</span>
              )}
            </div>
            <p className="text-sm text-green-600 font-medium">Inclusive of all taxes</p>
          </div>

          <div className="prose prose-sm text-muted-foreground mb-8">
            <p>{product.description}</p>
          </div>

          {/* Key Details */}
          <div className="grid grid-cols-2 gap-4 py-6 border-y border-gray-100 mb-8">
            <div>
              <span className="text-sm text-muted-foreground block mb-1">Fabric</span>
              <span className="font-medium text-primary">{product.fabric}</span>
            </div>
            <div>
              <span className="text-sm text-muted-foreground block mb-1">Occasion</span>
              <span className="font-medium text-primary">{product.occasion}</span>
            </div>
          </div>

          {/* Stock Urgency */}
          {product.stock < 10 && product.stock > 0 && (
            <div className="bg-red-50 text-red-600 px-4 py-3 rounded-md text-sm font-medium mb-6 flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              Hurry! Only {product.stock} left in stock.
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button 
              size="lg" 
              className="flex-1 text-lg bg-primary hover:bg-primary/90 text-white"
              onClick={() => {
                addToCart(product);
                navigate('/checkout');
              }}
            >
              Buy Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="flex-1 text-lg"
              onClick={() => addToCart(product)}
            >
              <ShoppingBag className="w-5 h-5 mr-2" /> Add to Cart
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-6"
              onClick={() => toggleWishlist(product.id)}
            >
              <Heart className={`w-5 h-5 ${isInWishlist(product.id) ? 'fill-accent text-accent' : ''}`} />
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 gap-6 bg-surface p-6 rounded-xl border border-muted">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-background shadow-sm flex items-center justify-center text-accent">
                <Truck className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-sm">Free Delivery</span>
                <span className="text-xs text-muted-foreground">Estimated 3-5 days</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-background shadow-sm flex items-center justify-center text-accent">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-sm">Secure Payment</span>
                <span className="text-xs text-muted-foreground">100% Safe Checkout</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="pt-16 border-t border-gray-100">
          <h2 className="font-serif text-3xl font-bold mb-8 text-center">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
