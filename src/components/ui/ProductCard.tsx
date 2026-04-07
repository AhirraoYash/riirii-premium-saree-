import React from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Product } from '../../data/products';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
  key?: React.Key;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const isWished = isInWishlist(product.id);

  return (
    <div className={cn("group flex flex-col gap-3", className)}>
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.title}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.discount > 0 && (
            <span className="bg-accent text-white text-xs font-medium px-2.5 py-1 rounded-sm shadow-sm">
              {product.discount}% OFF
            </span>
          )}
          {product.stock < 10 && product.stock > 0 && (
            <span className="bg-red-500 text-white text-[10px] font-medium px-2 py-0.5 rounded-sm shadow-sm uppercase tracking-wider">
              Few Left
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 group-hover:translate-x-0">
          <button 
            onClick={(e) => { e.preventDefault(); toggleWishlist(product.id); }}
            className="p-2.5 rounded-full bg-surface text-primary hover:bg-accent hover:text-white transition-colors shadow-md"
            aria-label="Add to wishlist"
          >
            <Heart className={cn("w-4 h-4", isWished && "fill-accent text-accent hover:text-white hover:fill-white")} />
          </button>
        </div>

        {/* Quick Add */}
        <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button 
            onClick={(e) => { 
              e.preventDefault(); 
              addToCart(product);
              navigate('/checkout');
            }}
            className="w-full bg-surface/95 backdrop-blur-sm text-primary font-medium py-3 rounded-md shadow-lg flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Buy Now
          </button>
        </div>
      </div>

      <Link to={`/product/${product.id}`} className="flex flex-col gap-1">
        <h3 className="font-serif text-lg text-primary truncate hover:text-accent transition-colors">{product.title}</h3>
        <div className="flex items-center gap-2">
          <span className="font-medium text-primary">₹{product.price.toLocaleString('en-IN')}</span>
          {product.mrp > product.price && (
            <span className="text-sm text-muted-foreground line-through">₹{product.mrp.toLocaleString('en-IN')}</span>
          )}
        </div>
      </Link>
    </div>
  );
}
