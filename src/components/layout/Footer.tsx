import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="font-serif text-3xl font-bold tracking-tight text-white">
              Riirii<span className="text-accent">.</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Discover the finest collection of premium Indian ethnic wear. Handcrafted sarees that celebrate tradition and modern elegance.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="font-serif text-xl font-medium">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-white/70 text-sm">
              <li><Link to="/shop" className="hover:text-accent transition-colors">Shop All</Link></li>
              <li><Link to="/shop?category=banarasi" className="hover:text-accent transition-colors">Banarasi Sarees</Link></li>
              <li><Link to="/shop?category=silk" className="hover:text-accent transition-colors">Pure Silk</Link></li>
              <li><Link to="/shop?category=party" className="hover:text-accent transition-colors">Party Wear</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="flex flex-col gap-6">
            <h4 className="font-serif text-xl font-medium">Customer Service</h4>
            <ul className="flex flex-col gap-3 text-white/70 text-sm">
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping" className="hover:text-accent transition-colors">Shipping Policy</Link></li>
              <li><Link to="/returns" className="hover:text-accent transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/faq" className="hover:text-accent transition-colors">FAQs</Link></li>
              <li><Link to="/track-order" className="hover:text-accent transition-colors">Track Order</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="font-serif text-xl font-medium">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-white/70 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>123 Silk Route, Textile Market, Surat, Gujarat 395002, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>support@riirii.in</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Riirii. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
