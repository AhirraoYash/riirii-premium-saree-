import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';

interface WishlistContextType {
  wishlistIds: string[];
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('vastranand_wishlist');
    if (saved) {
      try {
        setWishlistIds(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse wishlist");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('vastranand_wishlist', JSON.stringify(wishlistIds));
  }, [wishlistIds]);

  const toggleWishlist = (productId: string) => {
    setWishlistIds(prev => {
      if (prev.includes(productId)) {
        toast.info("Removed from wishlist");
        return prev.filter(id => id !== productId);
      } else {
        toast.success("Added to wishlist");
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlistIds.includes(productId);

  return (
    <WishlistContext.Provider value={{ wishlistIds, toggleWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}
