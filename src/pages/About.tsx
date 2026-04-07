import React from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { ShieldCheck, Heart, Star, Users } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  return (
    <div>
      <PageHeader 
        title="Our Story" 
        description="Weaving traditions into modern elegance since 1995."
      />
      
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1610030469983-98e550d615ef?q=80&w=1000" 
              alt="Artisan weaving" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-primary">Preserving the Heritage of Indian Textiles</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Riirii began with a simple vision: to bring the rich, diverse, and intricate weaving traditions of India to the modern woman. Our journey started in the narrow lanes of Varanasi, working directly with master weavers who have passed down their craft through generations.
              </p>
              <p>
                Today, we curate the finest Banarasi, Kanjivaram, and Chanderi silks, ensuring that every drape tells a story of artistry, patience, and cultural pride. We believe that a saree is not just a garment; it is an heirloom.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-primary">Why Choose Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">We are committed to delivering excellence in every thread.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: ShieldCheck, title: "Authentic Weaves", desc: "Sourced directly from artisan clusters across India." },
            { icon: Heart, title: "Ethical Trade", desc: "Fair wages and sustainable practices for our weavers." },
            { icon: Star, title: "Premium Quality", desc: "Rigorous quality checks for flawless fabrics." },
            { icon: Users, title: "Customer First", desc: "Dedicated support and seamless shopping experience." }
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-50 p-8 rounded-xl text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-accent mb-6">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
