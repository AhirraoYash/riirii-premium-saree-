import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, CreditCard, Banknote, CheckCircle2, Package, ArrowRight, Sparkles, Mail, Phone, User, MapPin, Smartphone, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/Button';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'motion/react';

export function Checkout() {
  const { items, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (items.length === 0 && !showSuccessModal && !showPaymentModal) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-serif mb-4">Your cart is empty</h2>
        <Button onClick={() => navigate('/shop')}>Continue Shopping</Button>
      </div>
    );
  }

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPaymentModal(true);
  };

  const handleConfirmPayment = () => {
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setShowPaymentModal(false);
      clearCart();
      setOrderId(`ORD-${Math.floor(100000 + Math.random() * 900000)}`);
      setShowSuccessModal(true);
      toast.success('Order placed successfully! Check your email for details.');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden pb-20">
      {/* Aesthetic Background Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Secure Checkout</h1>
          <p className="text-muted-foreground text-lg font-light">Complete your order to bring elegance home.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Form Section */}
          <div className="flex-1">
            <form id="checkout-form" onSubmit={handleProceedToPayment} className="space-y-10">
              
              {/* Contact Info */}
              <section className="bg-surface/80 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 shadow-sm">
                <h2 className="font-serif text-2xl font-bold mb-6 text-primary flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent text-sm">1</span>
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-accent transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <input required type="email" placeholder="Email Address" className="w-full bg-white/50 border border-muted rounded-xl pl-12 pr-4 py-3.5 focus:ring-2 focus:ring-accent/50 focus:border-accent/50 outline-none transition-all" />
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-accent transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <input required type="tel" placeholder="Phone Number" className="w-full bg-white/50 border border-muted rounded-xl pl-12 pr-4 py-3.5 focus:ring-2 focus:ring-accent/50 focus:border-accent/50 outline-none transition-all" />
                  </div>
                </div>
              </section>

              {/* Shipping Address */}
              <section className="bg-surface/80 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 shadow-sm">
                <h2 className="font-serif text-2xl font-bold mb-6 text-primary flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent text-sm">2</span>
                  Shipping Address
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-accent transition-colors">
                      <User className="w-5 h-5" />
                    </div>
                    <input required type="text" placeholder="First Name" className="w-full bg-white/50 border border-muted rounded-xl pl-12 pr-4 py-3.5 focus:ring-2 focus:ring-accent/50 focus:border-accent/50 outline-none transition-all" />
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-accent transition-colors">
                      <User className="w-5 h-5" />
                    </div>
                    <input required type="text" placeholder="Last Name" className="w-full bg-white/50 border border-muted rounded-xl pl-12 pr-4 py-3.5 focus:ring-2 focus:ring-accent/50 focus:border-accent/50 outline-none transition-all" />
                  </div>
                  <div className="md:col-span-2 relative group">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-accent transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <input required type="text" placeholder="House/Flat No., Street, Landmark" className="w-full bg-white/50 border border-muted rounded-xl pl-12 pr-4 py-3.5 focus:ring-2 focus:ring-accent/50 focus:border-accent/50 outline-none transition-all" />
                  </div>
                  <div className="relative group">
                    <input required type="text" placeholder="City" className="w-full bg-white/50 border border-muted rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-accent/50 focus:border-accent/50 outline-none transition-all" />
                  </div>
                  <div className="relative group">
                    <input required type="text" placeholder="State" className="w-full bg-white/50 border border-muted rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-accent/50 focus:border-accent/50 outline-none transition-all" />
                  </div>
                  <div className="relative group md:col-span-2">
                    <input required type="text" placeholder="PIN Code" className="w-full bg-white/50 border border-muted rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-accent/50 focus:border-accent/50 outline-none transition-all" />
                  </div>
                </div>
              </section>

            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:w-[420px] shrink-0">
            <div className="bg-surface/90 backdrop-blur-xl rounded-[2rem] p-8 sticky top-24 border border-white/20 shadow-xl shadow-primary/5">
              <h2 className="font-serif text-2xl font-bold mb-8 text-primary">Order Summary</h2>
              
              <div className="space-y-6 mb-8 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                {items.map(item => (
                  <div key={item.id} className="flex gap-5 group">
                    <div className="w-20 h-24 rounded-xl bg-gray-100 overflow-hidden shrink-0 border border-muted/50 relative">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-bl-lg">
                        {item.quantity}
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <p className="font-serif font-bold text-primary line-clamp-2 leading-tight mb-2 group-hover:text-accent transition-colors">{item.title}</p>
                      <p className="font-medium text-accent">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-muted/50 pt-6 space-y-4 text-base">
                <div className="flex justify-between text-muted-foreground font-medium">
                  <span>Subtotal</span>
                  <span className="text-primary">₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-muted-foreground font-medium">
                  <span>Shipping</span>
                  <span className="text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded-md">Free</span>
                </div>
                <div className="flex justify-between text-2xl font-bold text-primary pt-6 border-t border-muted/50 mt-2">
                  <span>Total</span>
                  <span className="text-accent">₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="mt-10">
                <Button 
                  type="submit" 
                  form="checkout-form" 
                  className="w-full text-lg h-16 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all font-bold tracking-wide"
                >
                  Proceed to Payment
                </Button>
                <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground font-medium bg-muted/30 py-3 rounded-full">
                  <ShieldCheck className="w-5 h-5 text-green-600" /> 
                  <span>Secure 256-bit SSL Encryption</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Payment Method Modal */}
      <AnimatePresence>
        {showPaymentModal && (
          <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPaymentModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-surface/95 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] shadow-2xl border border-white/20 max-w-md w-full relative z-10 overflow-hidden"
            >
              <button
                onClick={() => setShowPaymentModal(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-primary transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative z-10">
                <h2 className="font-serif text-3xl font-bold mb-2 text-primary">Payment Method</h2>
                <p className="text-muted-foreground mb-8">Choose how you'd like to pay for your order.</p>

                <div className="grid grid-cols-1 gap-4 mb-8">
                  <label className={`relative flex items-center p-5 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${paymentMethod === 'upi' ? 'border-accent bg-accent/5 shadow-md shadow-accent/10' : 'border-muted bg-white/50 hover:border-accent/30 hover:bg-white/80'}`}>
                    <input type="radio" name="payment" value="upi" checked={paymentMethod === 'upi'} onChange={(e) => setPaymentMethod(e.target.value)} className="sr-only" />
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 transition-colors ${paymentMethod === 'upi' ? 'border-accent' : 'border-muted-foreground'}`}>
                      {paymentMethod === 'upi' && <div className="w-3 h-3 rounded-full bg-accent" />}
                    </div>
                    <div className="flex-1">
                      <span className="block font-semibold text-primary text-lg mb-1">UPI</span>
                      <span className="block text-sm text-muted-foreground">Google Pay, PhonePe, Paytm</span>
                    </div>
                    <Smartphone className={`w-8 h-8 ${paymentMethod === 'upi' ? 'text-accent' : 'text-muted-foreground'}`} />
                  </label>

                  <label className={`relative flex items-center p-5 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${paymentMethod === 'card' ? 'border-accent bg-accent/5 shadow-md shadow-accent/10' : 'border-muted bg-white/50 hover:border-accent/30 hover:bg-white/80'}`}>
                    <input type="radio" name="payment" value="card" checked={paymentMethod === 'card'} onChange={(e) => setPaymentMethod(e.target.value)} className="sr-only" />
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 transition-colors ${paymentMethod === 'card' ? 'border-accent' : 'border-muted-foreground'}`}>
                      {paymentMethod === 'card' && <div className="w-3 h-3 rounded-full bg-accent" />}
                    </div>
                    <div className="flex-1">
                      <span className="block font-semibold text-primary text-lg mb-1">Credit / Debit Card</span>
                      <span className="block text-sm text-muted-foreground">Visa, MasterCard, RuPay</span>
                    </div>
                    <CreditCard className={`w-8 h-8 ${paymentMethod === 'card' ? 'text-accent' : 'text-muted-foreground'}`} />
                  </label>

                  <label className={`relative flex items-center p-5 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${paymentMethod === 'cod' ? 'border-accent bg-accent/5 shadow-md shadow-accent/10' : 'border-muted bg-white/50 hover:border-accent/30 hover:bg-white/80'}`}>
                    <input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={(e) => setPaymentMethod(e.target.value)} className="sr-only" />
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 transition-colors ${paymentMethod === 'cod' ? 'border-accent' : 'border-muted-foreground'}`}>
                      {paymentMethod === 'cod' && <div className="w-3 h-3 rounded-full bg-accent" />}
                    </div>
                    <div className="flex-1">
                      <span className="block font-semibold text-primary text-lg mb-1">Cash on Delivery</span>
                      <span className="block text-sm text-muted-foreground">Pay when your order arrives</span>
                    </div>
                    <Banknote className={`w-8 h-8 ${paymentMethod === 'cod' ? 'text-accent' : 'text-muted-foreground'}`} />
                  </label>
                </div>

                <Button 
                  onClick={handleConfirmPayment}
                  className="w-full text-lg h-16 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all font-bold tracking-wide"
                  disabled={isProcessing}
                >
                  {isProcessing ? 'Processing...' : `Pay ₹${cartTotal.toLocaleString('en-IN')}`}
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Order Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-surface/90 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] shadow-2xl border border-white/20 max-w-lg w-full text-center relative z-10 overflow-hidden"
            >
              {/* Aesthetic Background Elements inside modal */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay pointer-events-none"></div>
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10">
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
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
