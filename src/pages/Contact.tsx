import React, { useState } from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { toast } from 'sonner';
import { motion } from 'motion/react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully! We'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        description="We're here to help. Reach out to us for any queries or support."
      />
      
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6 text-primary">Get in Touch</h2>
              <p className="text-muted-foreground leading-relaxed">
                Whether you have a question about our collections, need help with an order, or just want to share your feedback, our team is ready to assist you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Visit Our Store</h3>
                  <p className="text-muted-foreground">123 Silk Route, Textile Market<br/>Surat, Gujarat 395002, India</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Call Us</h3>
                  <p className="text-muted-foreground">+91 98765 43210<br/>Mon - Sat, 10:00 AM - 7:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Email Us</h3>
                  <p className="text-muted-foreground">support@vastranand.in<br/>wholesale@vastranand.in</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100"
          >
            <h3 className="font-serif text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">First Name</label>
                  <input required type="text" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-shadow" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Last Name</label>
                  <input required type="text" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-shadow" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email Address</label>
                <input required type="email" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-shadow" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Message</label>
                <textarea required rows={5} className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-shadow resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <Button type="submit" className="w-full h-12 text-lg" isLoading={isSubmitting}>
                <Send className="w-5 h-5 mr-2" /> Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
