import React, { createContext, useContext, useState, ReactNode } from 'react';

type AuthView = 'login' | 'signup';

interface AuthContextType {
  isOpen: boolean;
  view: AuthView;
  isLoggedIn: boolean;
  openAuth: (view?: AuthView) => void;
  closeAuth: () => void;
  toggleView: () => void;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<AuthView>('signup');
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Default to true for demo

  const openAuth = (initialView: AuthView = 'signup') => {
    setView(initialView);
    setIsOpen(true);
  };

  const closeAuth = () => {
    setIsOpen(false);
  };

  const toggleView = () => {
    setView((prev) => (prev === 'login' ? 'signup' : 'login'));
  };

  const login = () => {
    setIsLoggedIn(true);
    closeAuth();
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isOpen, view, isLoggedIn, openAuth, closeAuth, toggleView, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
