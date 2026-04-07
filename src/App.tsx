/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StrictMode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { Layout } from './components/layout/Layout';
import { AuthModal } from './components/auth/AuthModal';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { Checkout } from './pages/Checkout';
import { Profile } from './pages/Profile';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { OrderSuccess } from './pages/OrderSuccess';
import { TrackOrder } from './pages/TrackOrder';
import { FAQ } from './pages/FAQ';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';
import { Returns } from './pages/Returns';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <AuthModal />
            <Routes>
              <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="product/:id" element={<ProductDetail />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="profile" element={<Profile />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="order-success" element={<OrderSuccess />} />
              <Route path="track-order" element={<TrackOrder />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="privacy" element={<PrivacyPolicy />} />
              <Route path="terms" element={<Terms />} />
              <Route path="returns" element={<Returns />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </WishlistProvider>
      </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

