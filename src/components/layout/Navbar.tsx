import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, Heart, User, Menu, X, Package, LogOut } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useAuth } from '../../context/AuthContext';
import { cn } from '../../lib/utils';
import { CATEGORIES } from '../../data/products';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const { wishlistIds } = useWishlist();
  const { openAuth, isLoggedIn, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-surface/95 backdrop-blur-md shadow-sm py-3" : "bg-background py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 -ml-2 text-primary"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-primary">
              Riirii<span className="text-accent">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/shop" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors relative group">
              Shop All
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <div className="relative group">
              <button className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors relative group flex items-center gap-1">
                Categories
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="bg-surface shadow-xl rounded-none p-4 w-56 flex flex-col gap-2 border border-muted">
                  {CATEGORIES.map(cat => (
                    <Link 
                      key={cat.id} 
                      to={`/shop?category=${cat.id}`}
                      className="text-sm uppercase tracking-wider text-muted-foreground hover:text-primary hover:bg-background px-3 py-2 transition-colors"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-2 md:gap-4">
            <button className="p-2 text-primary hover:text-accent transition-colors hidden sm:block">
              <Search className="w-5 h-5" />
            </button>
            
            {isLoggedIn ? (
              <>
                <Link to="/profile?tab=bookings" className="p-2 text-primary hover:text-accent transition-colors hidden sm:block" title="My Bookings">
                  <Package className="w-5 h-5" />
                </Link>
                <Link to="/profile" className="p-2 text-primary hover:text-accent transition-colors hidden sm:block" title="My Profile">
                  <User className="w-5 h-5" />
                </Link>
                <button 
                  onClick={() => {
                    logout();
                    navigate('/');
                  }}
                  className="p-2 text-primary hover:text-accent transition-colors hidden sm:block"
                  title="Logout"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </>
            ) : (
              <button 
                onClick={() => openAuth('login')}
                className="p-2 text-primary hover:text-accent transition-colors hidden sm:block"
                title="Login"
              >
                <User className="w-5 h-5" />
              </button>
            )}

            <Link to="/profile?tab=wishlist" className="p-2 text-primary hover:text-accent transition-colors relative">
              <Heart className="w-5 h-5" />
              {wishlistIds.length > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
              )}
            </Link>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="p-2 text-primary hover:text-accent transition-colors relative"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div 
            className="absolute top-0 left-0 w-4/5 max-w-sm h-full bg-surface shadow-2xl p-6 flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <span className="font-serif text-2xl font-bold text-primary">Riirii</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-lg font-medium border-b border-muted pb-4">Home</Link>
              <Link to="/shop" className="text-lg font-medium border-b border-muted pb-4">Shop All</Link>
              <div className="flex flex-col gap-3 py-2">
                <span className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Categories</span>
                {CATEGORIES.map(cat => (
                  <Link 
                    key={cat.id} 
                    to={`/shop?category=${cat.id}`}
                    className="text-base text-primary hover:text-accent"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="mt-auto pt-8 border-t border-muted flex flex-col gap-4">
              {isLoggedIn ? (
                <>
                  <Link to="/profile?tab=bookings" className="flex items-center gap-3 text-lg font-medium text-primary hover:text-accent">
                    <Package className="w-5 h-5" /> My Bookings
                  </Link>
                  <Link to="/profile" className="flex items-center gap-3 text-lg font-medium text-primary hover:text-accent">
                    <User className="w-5 h-5" /> My Account
                  </Link>
                  <button 
                    onClick={() => {
                      logout();
                      navigate('/');
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-3 text-lg font-medium text-red-500 hover:text-red-600 text-left"
                  >
                    <LogOut className="w-5 h-5" /> Logout
                  </button>
                </>
              ) : (
                <button 
                  onClick={() => {
                    openAuth('login');
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-3 text-lg font-medium text-primary hover:text-accent text-left"
                >
                  <User className="w-5 h-5" /> Login / Sign Up
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
