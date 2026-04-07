import React, { useState } from 'react';
import { Search, Package, Truck, CheckCircle2, ArrowLeft, X, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '../data/products';

export function TrackOrder() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBooking, setSelectedBooking] = useState<any>(null);
  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [cancelReason, setCancelReason] = useState('');

  const [bookings, setBookings] = useState([
    { id: 'b1', orderId: 'ORD-847291', date: 'Oct 24, 2026', status: 'Processing', product: PRODUCTS[0] },
    { id: 'b2', orderId: 'ORD-392817', date: 'Sep 12, 2026', status: 'Delivered', product: PRODUCTS[1] },
    { id: 'b3', orderId: 'ORD-559201', date: 'Oct 26, 2026', status: 'Shipped', product: PRODUCTS[2] }
  ]);

  const filteredBookings = bookings.filter(b => 
    b.product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCancelClick = () => {
    setCancelModalOpen(true);
  };

  const confirmCancel = () => {
    if (!cancelReason || !selectedBooking) return;
    setBookings(prev => prev.map(b => b.id === selectedBooking.id ? { ...b, status: 'Cancelled' } : b));
    setSelectedBooking({ ...selectedBooking, status: 'Cancelled' });
    setCancelModalOpen(false);
    setCancelReason('');
  };

  const steps = [
    { icon: Package, title: "Order Placed", date: "Oct 24, 2026", completed: true },
    { icon: Package, title: "Processing", date: "Oct 25, 2026", completed: selectedBooking?.status !== 'Cancelled' },
    { icon: Truck, title: "Shipped", date: "Oct 26, 2026", completed: selectedBooking?.status === 'Shipped' || selectedBooking?.status === 'Delivered' },
    { icon: CheckCircle2, title: "Delivered", date: "Expected Oct 28", completed: selectedBooking?.status === 'Delivered' },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Aesthetic Header */}
      <div className="pt-24 pb-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tight"
          >
            Your Wardrobe Journey
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-light"
          >
            Follow the path of your handpicked elegance, from our looms directly to your doorstep.
          </motion.p>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-24 h-1 bg-accent mx-auto mt-8 rounded-full opacity-60"
          ></motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* Stylish Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-16 group">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-accent/70 group-focus-within:text-accent transition-colors" />
            </div>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your collection by name..." 
              className="w-full bg-surface/80 backdrop-blur-md border border-muted shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full pl-14 pr-6 py-4 text-lg focus:ring-2 focus:ring-accent/50 outline-none transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
            />
          </div>

          {/* Aesthetic Booking Grid */}
          <div className="space-y-8">
            {filteredBookings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBookings.map((booking, idx) => (
                  <motion.div 
                    key={booking.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -8 }}
                    onClick={() => setSelectedBooking(booking)}
                    className="group cursor-pointer bg-surface rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-muted/50 flex flex-col"
                  >
                    <div className="aspect-[4/5] relative overflow-hidden bg-gray-100">
                      <img 
                        src={booking.product.images[0]} 
                        alt={booking.product.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-4 right-4">
                        <span className={`px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md shadow-sm ${
                          booking.status === 'Delivered' ? 'bg-green-500/90 text-white' : 
                          booking.status === 'Cancelled' ? 'bg-red-500/90 text-white' : 
                          'bg-white/90 text-primary'
                        }`}>
                          {booking.status}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between bg-surface relative z-10">
                      <div>
                        <p className="text-xs font-semibold text-accent mb-2 uppercase tracking-widest">Order #{booking.orderId}</p>
                        <h3 className="font-serif text-xl font-bold text-primary mb-1 line-clamp-1 group-hover:text-accent transition-colors">{booking.product.title}</h3>
                      </div>
                      <div className="mt-4 pt-4 border-t border-muted/50 flex justify-between items-center">
                        <p className="text-sm text-muted-foreground font-medium">{booking.date}</p>
                        <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors text-primary">
                          <ArrowLeft className="w-4 h-4 rotate-180" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-surface/50 backdrop-blur-sm rounded-[2rem] border border-muted/50 shadow-sm max-w-2xl mx-auto"
              >
                <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Package className="w-10 h-10 text-accent" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-2">No treasures found</h3>
                <p className="text-muted-foreground text-lg">We couldn't find any bookings matching your search.</p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Detailed Booking Modal */}
      <AnimatePresence>
        {selectedBooking && (
          <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBooking(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-surface rounded-3xl shadow-2xl p-6 md:p-10 border border-white/20"
            >
              <button
                onClick={() => setSelectedBooking(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-primary transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col md:flex-row gap-8 mb-10 pb-10 border-b border-muted/50 mt-4">
                <div className="w-full md:w-1/3 aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 shrink-0 shadow-sm">
                  <img src={selectedBooking.product.images[0]} alt={selectedBooking.product.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">{selectedBooking.product.title}</h2>
                      <p className="text-xl font-medium text-accent mb-4">₹{selectedBooking.product.price.toLocaleString('en-IN')}</p>
                    </div>
                    <span className={`px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm ${
                      selectedBooking.status === 'Delivered' ? 'bg-green-100 text-green-700' : 
                      selectedBooking.status === 'Cancelled' ? 'bg-red-100 text-red-700' : 
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {selectedBooking.status}
                    </span>
                  </div>
                  
                  <div className="space-y-6 mb-8">
                    <p className="text-muted-foreground text-lg leading-relaxed">{selectedBooking.product.description}</p>
                    <div className="grid grid-cols-2 gap-6 text-sm bg-muted/30 p-6 rounded-2xl">
                      <div>
                        <span className="text-muted-foreground block mb-1 uppercase tracking-wider text-xs font-semibold">Order ID</span>
                        <span className="font-medium text-primary text-base">{selectedBooking.orderId}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block mb-1 uppercase tracking-wider text-xs font-semibold">Order Date</span>
                        <span className="font-medium text-primary text-base">{selectedBooking.date}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block mb-1 uppercase tracking-wider text-xs font-semibold">Fabric</span>
                        <span className="font-medium text-primary text-base">{selectedBooking.product.fabric}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block mb-1 uppercase tracking-wider text-xs font-semibold">Color</span>
                        <span className="font-medium text-primary text-base">{selectedBooking.product.color}</span>
                      </div>
                    </div>
                  </div>

                  {selectedBooking.status === 'Processing' && (
                    <Button 
                      variant="outline" 
                      className="w-full sm:w-auto text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600 rounded-full px-8"
                      onClick={handleCancelClick}
                    >
                      Cancel Booking
                    </Button>
                  )}
                </div>
              </div>

              {selectedBooking.status !== 'Cancelled' && (
                <div className="px-4">
                  <h3 className="font-serif text-2xl font-bold text-primary mb-8">Tracking Status</h3>
                  <div className="relative">
                    <div className="absolute left-6 top-10 bottom-10 w-0.5 bg-muted"></div>
                    <div className="space-y-10">
                      {steps.map((step, idx) => (
                        <div key={idx} className="relative flex items-start gap-6">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 z-10 shadow-sm transition-colors duration-300 ${
                            step.completed ? 'bg-accent text-white' : 'bg-surface border-2 border-muted text-muted-foreground'
                          }`}>
                            <step.icon className="w-5 h-5" />
                          </div>
                          <div className="pt-2">
                            <h4 className={`font-serif text-xl ${step.completed ? 'text-primary font-bold' : 'text-muted-foreground font-medium'}`}>
                              {step.title}
                            </h4>
                            <p className="text-muted-foreground text-sm mt-1 font-medium">{step.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Cancel Booking Modal */}
      <AnimatePresence>
        {cancelModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCancelModalOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden p-6"
            >
              <button
                onClick={() => setCancelModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-3 mb-6 text-red-500">
                <AlertCircle className="w-6 h-6" />
                <h3 className="font-serif text-xl font-bold text-gray-900">Cancel Booking</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Are you sure you want to cancel <strong>{selectedBooking?.product.title}</strong>? Please let us know why you are cancelling.
              </p>
              
              <div className="space-y-4 mb-8">
                <label className="block text-sm font-medium text-gray-700">Reason for cancellation</label>
                <select 
                  value={cancelReason}
                  onChange={(e) => setCancelReason(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-primary outline-none bg-white"
                >
                  <option value="" disabled>Select a reason</option>
                  <option value="Changed my mind">I changed my mind</option>
                  <option value="Found a better price">Found a better price elsewhere</option>
                  <option value="Ordered by mistake">Ordered by mistake</option>
                  <option value="Delivery time too long">Delivery time is too long</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setCancelModalOpen(false)}
                >
                  Keep Booking
                </Button>
                <Button 
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white"
                  onClick={confirmCancel}
                  disabled={!cancelReason}
                >
                  Confirm Cancel
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
