import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, ShieldCheck, RefreshCcw, Star, Play } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/ui/ProductCard';
import { CATEGORIES, PRODUCTS } from '../data/products';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function Home() {
  const trendingProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="flex flex-col w-full overflow-hidden bg-background">
      
      {/* GenZ / Editorial Hero Section */}
      <section className="relative min-h-[95vh] pt-24 pb-12 flex items-center overflow-hidden bg-surface">
        {/* Aesthetic Background Elements */}
        <div className="absolute inset-1 bg-[url('https://i.pinimg.com/1200x/3e/40/4c/3e404c715d72da023c844f12266cda3c.jpg')] opacity-40 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] -z-10 transform translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[80px] -z-10 transform -translate-x-1/4" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center -mt-12 lg:-mt-24">
            
            {/* Text Content */}
            <div className="lg:col-span-6 flex flex-col items-start text-left order-2 lg:order-1 z-20">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm font-bold tracking-widest uppercase mb-8 shadow-sm backdrop-blur-sm"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                </span>
                The Modern Muse // Drop 01
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.05] text-primary uppercase tracking-tighter"
              >
                Redefining <br />
                <span className="font-serif italic text-accent normal-case tracking-normal text-7xl md:text-8xl lg:text-9xl pr-4">Tradition.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed font-medium"
              >
                Unapologetically ethnic. Contemporary drapes designed for the new era. Because your saree should be as bold as you are.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="flex flex-wrap items-center gap-5 w-full sm:w-auto"
              >
                <Link to="/shop" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 rounded-full px-10 h-16 text-lg shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all group">
                    Shop The Drop
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/shop?sort=featured" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full px-10 h-16 text-lg border-muted-foreground/30 hover:border-primary hover:bg-primary/5 transition-all">
                    Explore Lookbook
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Image Collage */}
            <div className="lg:col-span-6 relative order-1 lg:order-2 h-[500px] sm:h-[600px] lg:h-[800px] w-full mt-8 lg:mt-0">
              {/* Main Large Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute right-0 top-10 w-[85%] lg:w-[80%] h-[85%] rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/20 z-10"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                <img 
                  src="https://i.pinimg.com/736x/41/e0/aa/41e0aa9fcc1e7ebf9967f4617b8d446d.jpg" 
                  alt="Modern Saree Drape" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-1000"
                />
              </motion.div>
              
              {/* Secondary Overlapping Image */}
              <motion.div 
                initial={{ opacity: 0, x: -50, y: 50, rotate: 5 }}
                animate={{ opacity: 1, x: 0, y: 0, rotate: -2 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-0 bottom-0 w-[55%] lg:w-[50%] h-[60%] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-surface z-20"
              >
                <img 
                  src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800" 
                  alt="Detail Shot" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                />
              </motion.div>

              {/* Floating Glass Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 1, type: "spring", bounce: 0.4 }}
                className="absolute top-1/4 -left-4 sm:left-0 bg-white/80 backdrop-blur-xl border border-white shadow-2xl rounded-3xl p-4 sm:p-5 flex items-center gap-4 z-30"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xl sm:text-2xl shadow-inner">
                  #1
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground font-bold uppercase tracking-widest mb-0.5">Trending Now</p>
                  <p className="font-serif font-bold text-primary text-base sm:text-lg">Organza Drapes</p>
                </div>
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white relative z-20 -mt-8 mx-4 md:mx-12 rounded-[2rem] shadow-xl shadow-primary/5 border border-muted/20">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {[
              { icon: Truck, title: "Free Shipping", desc: "On orders over ₹2000" },
              { icon: ShieldCheck, title: "Premium Quality", desc: "100% Authentic Fabric" },
              { icon: RefreshCcw, title: "Easy Returns", desc: "7-day return policy" },
              { icon: Star, title: "Secure Payment", desc: "Multiple payment options" }
            ].map((feature, idx) => (
              <motion.div variants={fadeUp} key={idx} className="flex flex-col items-center text-center gap-4 group">
                <div className="w-16 h-16 rounded-2xl bg-surface flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:-translate-y-1">
                  <feature.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-primary mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-primary">Shop by Category</h2>
              <p className="text-lg text-muted-foreground">Explore our wide range of traditional and modern sarees, meticulously crafted for every occasion.</p>
            </div>
            <Link to="/shop" className="hidden md:flex items-center gap-2 text-accent font-bold hover:text-primary transition-colors uppercase tracking-wider text-sm group">
              View All Collections <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
          >
            {CATEGORIES.map((cat, idx) => (
              <motion.div variants={fadeUp} key={cat.id}>
                <Link 
                  to={`/shop?category=${cat.id}`}
                  className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted block shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6 opacity-80 group-hover:opacity-100 transition-opacity">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-serif text-2xl font-bold tracking-wide mb-1">{cat.name}</h3>
                      <p className="text-white/80 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                        Explore <ArrowRight className="w-3 h-3" />
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-primary">Trending Now</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Our most loved pieces that are currently flying off the shelves. Handpicked for the modern connoisseur.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {trendingProducts.map(product => (
              <motion.div variants={fadeUp} key={product.id}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link to="/shop">
              <Button variant="outline" size="lg" className="px-12 h-14 rounded-full text-lg font-medium border-primary text-primary hover:bg-primary hover:text-white transition-all">
                View All Products
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Live Video Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-primary">Style in Motion</h2>
              <p className="text-lg text-muted-foreground">Watch our latest collections come to life. See the drape, the fall, and the elegance in real-time.</p>
            </div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          >
            {[
              {
                id: 1,
                video: 'https://pin.it/2391rzxRh',
                title: 'Golden Silk Saree',
                price: '₹6,200'
              },
              {
                id: 2,
                video: 'https://pin.it/2391rzxRh',
                title: 'Red Bridal Saree',
                price: '₹12,500'
              },
              {
                id: 3,
                video: 'https://assets.mixkit.co/videos/preview/mixkit-woman-in-a-long-red-dress-dancing-in-the-desert-34811-large.mp4',
                title: 'Magenta Georgette',
                price: '₹3,800'
              },
              {
                id: 4,
                video: 'https://assets.mixkit.co/videos/preview/mixkit-beautiful-woman-in-a-red-dress-walking-in-the-desert-34813-large.mp4',
                title: 'Pastel Organza',
                price: '₹5,500'
              }
            ].map((item) => (
              <motion.div variants={fadeUp} key={item.id}>
                <div className="group relative aspect-[9/16] overflow-hidden rounded-2xl bg-black cursor-pointer shadow-lg">
                  <video 
                    src={item.video} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Play Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/50">
                      <Play className="w-6 h-6 text-white fill-white ml-1" />
                    </div>
                  </div>
                  
                  {/* Live Badge */}
                  <div className="absolute top-4 left-4 bg-red-600/90 backdrop-blur-sm text-white text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-2 uppercase tracking-wider z-20 shadow-lg">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    Live
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-5 md:p-6 z-10">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-serif text-xl md:text-2xl font-bold mb-1">{item.title}</h3>
                      <p className="text-accent font-bold text-lg mb-4">{item.price}</p>
                      <Link to="/shop">
                        <Button size="sm" className="w-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-primary border-white/30 rounded-full h-12 font-bold tracking-wide">
                          Shop Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-32 relative overflow-hidden bg-primary text-white mt-12">
        <div className="absolute inset-0 opacity-30">
           <img 
            src="https://images.unsplash.com/photo-1583391733959-f183063618a0?q=80&w=2000" 
            alt="Pattern" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Exclusive Collection</span>
            <h2 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">The Wedding Edit</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Curated ensembles for the modern bride and her bridesmaids. Experience luxury in every drape, woven with love and tradition.
            </p>
            <Link to="/shop?category=wedding">
              <Button size="lg" className="bg-white text-primary hover:bg-accent hover:text-white px-12 h-16 rounded-full text-lg font-bold transition-all shadow-2xl">
                Explore Collection
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
