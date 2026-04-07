import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CartDrawer } from '../cart/CartDrawer';
import { Toaster } from 'sonner';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[72px]"> {/* pt to account for fixed navbar */}
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <Toaster position="bottom-right" richColors />
    </div>
  );
}
