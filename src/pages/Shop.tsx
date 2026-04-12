import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, X, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { ProductCard } from '../components/ui/ProductCard';
import { Button } from '../components/ui/Button';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { motion, AnimatePresence } from 'motion/react';

// Extract unique colors and fabrics
const ALL_COLORS = Array.from(new Set(PRODUCTS.map(p => p.color))).sort();
const ALL_FABRICS = Array.from(new Set(PRODUCTS.map(p => p.fabric))).sort();
const MAX_PRICE = Math.max(...PRODUCTS.map(p => p.price));
const MIN_PRICE = Math.min(...PRODUCTS.map(p => p.price));

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  
  const categoryFilter = searchParams.get('category');
  const sortFilter = searchParams.get('sort') || 'featured';
  
  // Local state for filters not in URL (for simplicity, though they could be in URL)
  const [priceRange, setPriceRange] = useState<number>(MAX_PRICE);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedFabrics, setSelectedFabrics] = useState<string[]>([]);

  // Derived state for filtering and sorting
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];
    
    if (categoryFilter) {
      result = result.filter(p => p.category === categoryFilter);
    }

    // Apply Price Filter
    result = result.filter(p => p.price <= priceRange);

    // Apply Color Filter
    if (selectedColors.length > 0) {
      result = result.filter(p => selectedColors.includes(p.color));
    }

    // Apply Fabric Filter
    if (selectedFabrics.length > 0) {
      result = result.filter(p => selectedFabrics.includes(p.fabric));
    }

    // Apply Sorting
    switch (sortFilter) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'discount':
        result.sort((a, b) => b.discount - a.discount);
        break;
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [categoryFilter, sortFilter, priceRange, selectedColors, selectedFabrics]);

  const handleCategoryChange = (categoryId: string | null) => {
    if (categoryId) {
      searchParams.set('category', categoryId);
    } else {
      searchParams.delete('category');
    }
    setSearchParams(searchParams);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'featured') {
      searchParams.delete('sort');
    } else {
      searchParams.set('sort', e.target.value);
    }
    setSearchParams(searchParams);
  };

  const toggleColor = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const toggleFabric = (fabric: string) => {
    setSelectedFabrics(prev => 
      prev.includes(fabric) ? prev.filter(f => f !== fabric) : [...prev, fabric]
    );
  };

  const clearAllFilters = () => {
    searchParams.delete('category');
    setSearchParams(searchParams);
    setPriceRange(MAX_PRICE);
    setSelectedColors([]);
    setSelectedFabrics([]);
  };

  const FilterSection = ({ title, children, defaultOpen = false, selectedCount = 0 }: { title: React.ReactNode, children: React.ReactNode, defaultOpen?: boolean, selectedCount?: number }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
      <div className="border-b border-muted/50 pb-6 mb-6 last:border-0 last:pb-0 last:mb-0">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full font-serif text-lg font-bold text-primary group"
        >
          <span className="flex items-center gap-2">
            {title}
            {selectedCount > 0 && (
              <span className="bg-accent text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-sans shadow-sm">
                {selectedCount}
              </span>
            )}
          </span>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
          ) : (
            <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
          )}
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pt-5">
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const FilterContent = () => (
    <div className="bg-surface/80 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] border border-white/40 shadow-xl shadow-primary/5">
      <div className="flex items-center gap-3 mb-8 pb-6 border-b border-muted/50">
        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
          <SlidersHorizontal className="w-5 h-5" />
        </div>
        <h3 className="font-serif text-xl font-bold text-primary">Filters</h3>
      </div>

      <FilterSection 
        title="Price Range" 
        selectedCount={priceRange < MAX_PRICE ? 1 : 0}
        defaultOpen={true}
      >
        <div className="space-y-6">
          <input 
            type="range" 
            min={MIN_PRICE} 
            max={MAX_PRICE} 
            step="100"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full accent-accent h-1.5 bg-muted rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:rounded-full cursor-pointer" 
          />
          <div className="flex items-center justify-between text-sm font-medium">
            <span className="text-muted-foreground bg-muted/30 px-3 py-1 rounded-md">₹{MIN_PRICE.toLocaleString('en-IN')}</span>
            <span className="text-primary bg-accent/5 text-accent px-3 py-1 rounded-md border border-accent/10">Up to ₹{priceRange.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </FilterSection>

      <FilterSection 
        title="Color" 
        selectedCount={selectedColors.length}
      >
        <div className="flex flex-col gap-3">
          {ALL_COLORS.map(color => (
            <label key={color} className="flex items-center gap-3 cursor-pointer group">
              <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-300 ${selectedColors.includes(color) ? 'bg-accent border-accent shadow-sm shadow-accent/20' : 'border-gray-300 bg-white group-hover:border-accent'}`}>
                {selectedColors.includes(color) && <Check className="w-3.5 h-3.5 text-white" />}
              </div>
              <input 
                type="checkbox" 
                className="hidden" 
                checked={selectedColors.includes(color)}
                onChange={() => toggleColor(color)}
              />
              <span className={`text-sm transition-colors ${selectedColors.includes(color) ? 'font-bold text-primary' : 'text-muted-foreground group-hover:text-primary'}`}>
                {color}
              </span>
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection 
        title="Fabric" 
        selectedCount={selectedFabrics.length}
      >
        <div className="flex flex-col gap-3">
          {ALL_FABRICS.map(fabric => (
            <label key={fabric} className="flex items-center gap-3 cursor-pointer group">
              <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-300 ${selectedFabrics.includes(fabric) ? 'bg-accent border-accent shadow-sm shadow-accent/20' : 'border-gray-300 bg-white group-hover:border-accent'}`}>
                {selectedFabrics.includes(fabric) && <Check className="w-3.5 h-3.5 text-white" />}
              </div>
              <input 
                type="checkbox" 
                className="hidden" 
                checked={selectedFabrics.includes(fabric)}
                onChange={() => toggleFabric(fabric)}
              />
              <span className={`text-sm transition-colors ${selectedFabrics.includes(fabric) ? 'font-bold text-primary' : 'text-muted-foreground group-hover:text-primary'}`}>
                {fabric}
              </span>
            </label>
          ))}
        </div>
      </FilterSection>
      
      {(categoryFilter || priceRange < MAX_PRICE || selectedColors.length > 0 || selectedFabrics.length > 0) && (
        <Button variant="outline" className="w-full mt-8 rounded-xl border-red-200 text-red-500 hover:bg-red-50 hover:text-red-600 hover:border-red-300 transition-all" onClick={clearAllFilters}>
          Clear All Filters
        </Button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background relative overflow-hidden pt-24 pb-20">
      {/* Aesthetic Background Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Category Image Filters */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 overflow-x-auto pb-6 hide-scrollbar"
        >
          <div className="flex items-center justify-start md:justify-center gap-6 md:gap-10 min-w-max px-4">
            <button
              onClick={() => handleCategoryChange(null)}
              className={`flex flex-col items-center gap-4 group`}
            >
              <div className={`w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-[3px] transition-all duration-500 ${!categoryFilter ? 'border-accent shadow-xl shadow-accent/20 scale-110' : 'border-transparent hover:border-accent/50'}`}>
                <div className="w-full h-full bg-surface flex items-center justify-center text-primary font-serif text-xl md:text-2xl">
                  All
                </div>
              </div>
              <span className={`text-sm md:text-base font-medium transition-colors ${!categoryFilter ? 'text-accent font-bold' : 'text-muted-foreground group-hover:text-primary'}`}>
                All Collections
              </span>
            </button>
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`flex flex-col items-center gap-4 group`}
              >
                <div className={`w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-[3px] transition-all duration-500 ${categoryFilter === cat.id ? 'border-accent shadow-xl shadow-accent/20 scale-110' : 'border-transparent hover:border-accent/50'}`}>
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <span className={`text-sm md:text-base font-medium transition-colors ${categoryFilter === cat.id ? 'text-accent font-bold' : 'text-muted-foreground group-hover:text-primary'}`}>
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Controls Bar */}
        <div className="flex items-center justify-between md:justify-end mb-8 gap-4">
          <button 
            className="md:hidden flex items-center gap-2 px-5 py-3 bg-white border border-muted rounded-full shadow-sm text-sm font-medium text-primary"
            onClick={() => setIsMobileFiltersOpen(true)}
          >
            <Filter className="w-4 h-4" /> Filters
          </button>
          
          <div className="relative group">
            <select 
              value={sortFilter}
              onChange={handleSortChange}
              className="appearance-none bg-white border border-muted rounded-full px-6 py-3 pr-12 text-sm font-medium text-primary shadow-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all cursor-pointer"
            >
              <option value="featured">Sort by: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="discount">Highest Discount</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none group-hover:text-accent transition-colors" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          
          {/* Desktop Sidebar Filters */}
          <aside className="hidden md:block w-72 shrink-0">
            <div className="sticky top-32">
              <FilterContent />
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              >
                {filteredProducts.map(product => (
                  <motion.div variants={fadeUp} key={product.id}>
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-24 text-center flex flex-col items-center justify-center bg-surface/50 backdrop-blur-md rounded-[2rem] border border-white/40 shadow-sm"
              >
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Filter className="w-10 h-10 text-accent" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-2">No matches found</h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-md">We couldn't find any products matching your current filter selection.</p>
                <Button onClick={clearAllFilters} className="rounded-full px-8 h-12 shadow-lg shadow-primary/20">
                  Clear All Filters
                </Button>
              </motion.div>
            )}
          </div>
        </div>

        {/* Mobile Filters Drawer */}
        <AnimatePresence>
          {isMobileFiltersOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileFiltersOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
              />
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 left-0 h-full w-[85%] max-w-sm bg-background z-[70] shadow-2xl flex flex-col md:hidden"
              >
                <div className="flex items-center justify-between p-6 border-b border-muted/50 bg-surface">
                  <h2 className="font-serif text-2xl font-bold text-primary">Filters</h2>
                  <button onClick={() => setIsMobileFiltersOpen(false)} className="p-2 -mr-2 text-muted-foreground hover:text-accent bg-muted/30 rounded-full transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="flex-1 overflow-y-auto p-6">
                  <FilterContent />
                </div>

                <div className="p-6 border-t border-muted/50 bg-surface">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full h-14 text-lg shadow-lg" onClick={() => setIsMobileFiltersOpen(false)}>
                    Show {filteredProducts.length} Products
                  </Button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
