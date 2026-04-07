import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Package, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { motion } from 'motion/react';

export function OrderSuccess() {
  const orderId = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Aesthetic Background Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-surface/80 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] shadow-2xl border border-white/20 max-w-lg w-full text-center relative z-10"
      >
        <motion.div 
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", delay: 0.2, duration: 0.8 }}
          className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 text-green-500 relative"
        >
          <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping opacity-20"></div>
          <CheckCircle2 className="w-12 h-12" />
          <Sparkles className="w-6 h-6 absolute -top-1 -right-1 text-accent animate-pulse" />
        </motion.div>
        
        <h1 className="font-serif text-4xl font-bold mb-3 text-primary">Order Confirmed!</h1>
        <p className="text-muted-foreground mb-10 text-lg font-light">
          Thank you for choosing Riirii. Your elegant selection is being prepared with care.
        </p>

        <div className="bg-muted/30 p-6 rounded-2xl mb-10 flex items-center justify-between text-left border border-muted/50">
          <div>
            <p className="text-xs font-semibold text-accent mb-1 uppercase tracking-widest">Order ID</p>
            <p className="font-medium text-primary text-lg mb-4">{orderId}</p>
            <p className="text-xs font-semibold text-accent mb-1 uppercase tracking-widest">Estimated Delivery</p>
            <p className="font-medium text-primary text-lg">
              {new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
            <Package className="w-8 h-8 text-accent" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Link to="/track-order">
            <Button className="w-full h-14 text-lg rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">Track Order</Button>
          </Link>
          <Link to="/shop">
            <Button variant="outline" className="w-full h-14 text-lg rounded-full group border-muted hover:bg-muted/50 transition-all">
              Continue Shopping 
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
