import React, { useState } from 'react';
import { User, Package, Heart, LogOut, X, AlertCircle, ShoppingBag, Edit3, Camera, ArrowRight } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ui/ProductCard';
import { Button } from '../components/ui/Button';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export function Profile() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'bookings';
  const { wishlistIds } = useWishlist();
  const { logout } = useAuth();

  const [bookings, setBookings] = useState([
    { id: 'ORD-847291', date: 'Oct 24, 2026', total: 12500, status: 'Processing', items: [PRODUCTS[0]] },
    { id: 'ORD-392817', date: 'Sep 12, 2026', total: 8400, status: 'Delivered', items: [PRODUCTS[1]] }
  ]);
  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [bookingToCancel, setBookingToCancel] = useState<string | null>(null);
  const [cancelReason, setCancelReason] = useState('');

  const wishlistProducts = PRODUCTS.filter(p => wishlistIds.includes(p.id));

  const handleTabChange = (tab: string) => {
    setSearchParams({ tab });
  };

  const handleCancelClick = (id: string) => {
    setBookingToCancel(id);
    setCancelModalOpen(true);
  };

  const confirmCancel = () => {
    if (!cancelReason) return;
    setBookings(prev => prev.map(b => b.id === bookingToCancel ? { ...b, status: 'Cancelled' } : b));
    setCancelModalOpen(false);
    setBookingToCancel(null);
    setCancelReason('');
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden pb-20">
      {/* Aesthetic Background Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">My Dashboard</h1>
          <p className="text-muted-foreground text-lg font-light">Manage your elegant selections and account details.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          
          {/* Sidebar */}
          <aside className="w-full md:w-72 shrink-0">
            <div className="bg-surface/80 backdrop-blur-xl rounded-[2rem] p-8 sticky top-24 border border-white/20 shadow-xl shadow-primary/5">
              <div className="flex flex-col items-center text-center gap-4 mb-10 pb-8 border-b border-muted/30">
                <div className="relative group cursor-pointer">
                  <div className="w-24 h-24 rounded-full bg-accent text-white flex items-center justify-center font-serif text-4xl shadow-lg shadow-accent/20 overflow-hidden">
                    A
                  </div>
                  <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h2 className="font-serif font-bold text-2xl text-primary">Aisha Sharma</h2>
                  <p className="text-sm text-muted-foreground mt-1">aisha@example.com</p>
                </div>
              </div>

              <nav className="flex flex-col gap-3">
                <button 
                  onClick={() => handleTabChange('bookings')}
                  className={`flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-300 ${activeTab === 'bookings' ? 'bg-accent/10 text-accent font-semibold shadow-sm' : 'text-muted-foreground hover:bg-white/50 hover:text-primary'}`}
                >
                  <Package className="w-5 h-5" /> My Bookings
                </button>
                <button 
                  onClick={() => handleTabChange('wishlist')}
                  className={`flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-300 ${activeTab === 'wishlist' ? 'bg-accent/10 text-accent font-semibold shadow-sm' : 'text-muted-foreground hover:bg-white/50 hover:text-primary'}`}
                >
                  <Heart className="w-5 h-5" /> Wishlist
                  {wishlistIds.length > 0 && (
                    <span className={`ml-auto text-xs px-2.5 py-1 rounded-full font-bold ${activeTab === 'wishlist' ? 'bg-accent text-white' : 'bg-muted text-muted-foreground'}`}>
                      {wishlistIds.length}
                    </span>
                  )}
                </button>
                <button 
                  onClick={() => handleTabChange('profile')}
                  className={`flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-300 ${activeTab === 'profile' ? 'bg-accent/10 text-accent font-semibold shadow-sm' : 'text-muted-foreground hover:bg-white/50 hover:text-primary'}`}
                >
                  <User className="w-5 h-5" /> Account Details
                </button>
                <button 
                  onClick={() => logout()}
                  className="flex items-center gap-4 px-5 py-4 rounded-2xl text-left text-red-500 hover:bg-red-50 transition-all duration-300 mt-4 group"
                >
                  <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Logout
                </button>
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-surface/80 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 border border-white/20 shadow-xl shadow-primary/5 min-h-[600px]"
              >
                {activeTab === 'bookings' && (
                  <div>
                    <h2 className="font-serif text-3xl font-bold mb-8 text-primary flex items-center gap-3">
                      <ShoppingBag className="w-8 h-8 text-accent" />
                      My Bookings
                    </h2>
                    {bookings.length > 0 ? (
                      <div className="space-y-6">
                        {bookings.map((booking, index) => (
                          <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            key={booking.id} 
                            className="bg-white/50 border border-white/40 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group"
                          >
                            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-muted/30 pb-5 mb-5 gap-4">
                              <div>
                                <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Order ID: <span className="text-primary">{booking.id}</span></p>
                                <p className="text-sm text-muted-foreground">Placed on: {booking.date}</p>
                              </div>
                              <div className="flex items-center gap-6">
                                <span className={`px-4 py-1.5 rounded-full text-sm font-bold tracking-wide ${
                                  booking.status === 'Delivered' ? 'bg-green-100 text-green-700' : 
                                  booking.status === 'Cancelled' ? 'bg-red-100 text-red-700' : 
                                  'bg-accent/10 text-accent'
                                }`}>
                                  {booking.status}
                                </span>
                                <p className="font-serif font-bold text-xl text-primary">₹{booking.total.toLocaleString('en-IN')}</p>
                              </div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
                              <Link to="/track-order" className="flex items-center gap-5 group/link cursor-pointer">
                                <div className="w-20 h-24 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-muted/50">
                                  <img src={booking.items[0].images[0]} alt={booking.items[0].title} className="w-full h-full object-cover group-hover/link:scale-110 transition-transform duration-500" />
                                </div>
                                <div>
                                  <p className="font-serif font-bold text-lg text-primary line-clamp-1 mb-1 group-hover/link:text-accent transition-colors">{booking.items[0].title}</p>
                                  <p className="text-sm text-muted-foreground font-medium">Qty: 1</p>
                                  <p className="text-xs text-accent mt-2 font-medium opacity-0 group-hover/link:opacity-100 transition-opacity flex items-center gap-1">
                                    Track Order <ArrowRight className="w-3 h-3" />
                                  </p>
                                </div>
                              </Link>
                              
                              {booking.status === 'Processing' && (
                                <Button 
                                  variant="outline" 
                                  className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600 hover:border-red-300 shrink-0 rounded-full px-6"
                                  onClick={() => handleCancelClick(booking.id)}
                                >
                                  Cancel Booking
                                </Button>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="bg-white/30 border border-white/40 rounded-3xl p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                        <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                          <Package className="w-12 h-12 text-accent" />
                        </div>
                        <h3 className="font-serif text-2xl font-bold mb-3 text-primary">No bookings yet</h3>
                        <p className="text-muted-foreground mb-8 text-lg">Looks like you haven't placed any orders yet. Discover our elegant collection.</p>
                        <Link to="/shop">
                          <Button className="rounded-full px-8 h-14 text-lg shadow-lg shadow-primary/20 hover:shadow-primary/30">Start Shopping</Button>
                        </Link>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'wishlist' && (
                  <div>
                    <h2 className="font-serif text-3xl font-bold mb-8 text-primary flex items-center gap-3">
                      <Heart className="w-8 h-8 text-accent fill-accent/20" />
                      My Wishlist
                    </h2>
                    {wishlistProducts.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {wishlistProducts.map((product, index) => (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            key={product.id}
                          >
                            <ProductCard product={product} />
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="bg-white/30 border border-white/40 rounded-3xl p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                        <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                          <Heart className="w-12 h-12 text-accent" />
                        </div>
                        <h3 className="font-serif text-2xl font-bold mb-3 text-primary">Your wishlist is empty</h3>
                        <p className="text-muted-foreground mb-8 text-lg">Save items you love to your wishlist to easily find them later.</p>
                        <Link to="/shop">
                          <Button className="rounded-full px-8 h-14 text-lg shadow-lg shadow-primary/20 hover:shadow-primary/30">Discover Sarees</Button>
                        </Link>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'profile' && (
                  <div>
                    <h2 className="font-serif text-3xl font-bold mb-8 text-primary flex items-center gap-3">
                      <User className="w-8 h-8 text-accent" />
                      Account Details
                    </h2>
                    <div className="bg-white/50 border border-white/40 rounded-3xl p-8 max-w-2xl shadow-sm">
                      <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="relative group">
                            <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wider">First Name</label>
                            <div className="relative">
                              <input type="text" defaultValue="Aisha" className="w-full bg-white/80 border border-muted rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-accent/50 focus:border-accent/50 outline-none transition-all font-medium" />
                              <Edit3 className="w-4 h-4 text-muted-foreground absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                            </div>
                          </div>
                          <div className="relative group">
                            <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wider">Last Name</label>
                            <div className="relative">
                              <input type="text" defaultValue="Sharma" className="w-full bg-white/80 border border-muted rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-accent/50 focus:border-accent/50 outline-none transition-all font-medium" />
                              <Edit3 className="w-4 h-4 text-muted-foreground absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                            </div>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wider">Email Address</label>
                          <input type="email" defaultValue="aisha@example.com" disabled className="w-full border border-muted/50 bg-muted/20 rounded-xl px-4 py-3.5 text-muted-foreground font-medium cursor-not-allowed" />
                          <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> Email address cannot be changed.</p>
                        </div>
                        <div className="pt-4 border-t border-muted/30">
                          <Button className="rounded-full px-8 h-14 text-lg shadow-lg shadow-primary/20 hover:shadow-primary/30">Save Changes</Button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

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
                <AlertCircle className="w-8 h-8" />
                <h3 className="font-serif text-2xl font-bold text-gray-900">Cancel Booking</h3>
              </div>
              
              <p className="text-gray-600 mb-6 text-lg">
                Are you sure you want to cancel booking <strong className="text-primary">{bookingToCancel}</strong>? Please let us know why you are cancelling.
              </p>
              
              <div className="space-y-4 mb-8">
                <label className="block text-sm font-bold text-primary uppercase tracking-wider">Reason for cancellation</label>
                <select 
                  value={cancelReason}
                  onChange={(e) => setCancelReason(e.target.value)}
                  className="w-full border border-muted rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-accent/50 outline-none bg-white font-medium"
                >
                  <option value="" disabled>Select a reason</option>
                  <option value="Changed my mind">I changed my mind</option>
                  <option value="Found a better price">Found a better price elsewhere</option>
                  <option value="Ordered by mistake">Ordered by mistake</option>
                  <option value="Delivery time too long">Delivery time is too long</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  className="flex-1 h-14 rounded-full text-lg font-medium border-muted hover:bg-muted/50"
                  onClick={() => setCancelModalOpen(false)}
                >
                  Keep Booking
                </Button>
                <Button 
                  className="flex-1 h-14 rounded-full text-lg font-medium bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/20"
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
