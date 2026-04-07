import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Lock, User, ArrowRight, Github } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../ui/Button';

export function AuthModal() {
  const { isOpen, view, closeAuth, toggleView } = useAuth();

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeAuth}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-md bg-surface/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20"
          >
            {/* Close Button */}
            <button
              onClick={closeAuth}
              className="absolute top-4 right-4 p-2 rounded-full bg-primary/5 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-2">
                  {view === 'login' ? 'Welcome Back' : 'Join the Club'}
                </h2>
                <p className="text-muted-foreground text-sm">
                  {view === 'login'
                    ? 'Enter your details to access your account.'
                    : 'Sign up to get exclusive drops and offers.'}
                </p>
              </div>

              {/* Form */}
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); closeAuth(); }}>
                {view === 'signup' && (
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-foreground/80 ml-1">Full Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <input
                        type="text"
                        placeholder="Jane Doe"
                        className="w-full pl-11 pr-4 py-3 bg-background/50 border border-muted rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                        required
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-1">
                  <label className="text-xs font-medium text-foreground/80 ml-1">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full pl-11 pr-4 py-3 bg-background/50 border border-muted rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between items-center ml-1">
                    <label className="text-xs font-medium text-foreground/80">Password</label>
                    {view === 'login' && (
                      <a href="#" className="text-xs text-accent hover:underline">Forgot password?</a>
                    )}
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full pl-11 pr-4 py-3 bg-background/50 border border-muted rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full py-6 rounded-xl mt-6 group bg-primary hover:bg-primary/90 text-white">
                  {view === 'login' ? 'Sign In' : 'Create Account'}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>

              {/* Divider */}
              <div className="mt-8 mb-6 flex items-center">
                <div className="flex-1 border-t border-muted"></div>
                <span className="px-4 text-xs text-muted-foreground uppercase tracking-wider">Or continue with</span>
                <div className="flex-1 border-t border-muted"></div>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-4">
                <button type="button" className="flex items-center justify-center gap-2 py-3 px-4 border border-muted rounded-xl hover:bg-background transition-colors text-sm font-medium text-foreground/80">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Google
                </button>
                <button type="button" className="flex items-center justify-center gap-2 py-3 px-4 border border-muted rounded-xl hover:bg-background transition-colors text-sm font-medium text-foreground/80">
                  <Github className="w-5 h-5" />
                  GitHub
                </button>
              </div>

              {/* Toggle View */}
              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  {view === 'login' ? "Don't have an account?" : "Already have an account?"}{' '}
                  <button
                    onClick={toggleView}
                    className="font-semibold text-primary hover:text-accent transition-colors"
                  >
                    {view === 'login' ? 'Sign up' : 'Log in'}
                  </button>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
