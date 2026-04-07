import React, { useState } from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    category: "Shipping & Delivery",
    questions: [
      { q: "How long does delivery take?", a: "Standard delivery takes 3-5 business days within India. International shipping can take 7-14 business days depending on the destination." },
      { q: "Do you offer free shipping?", a: "Yes, we offer free shipping on all domestic orders above ₹2000." },
      { q: "How can I track my order?", a: "Once your order is dispatched, you will receive a tracking link via email and SMS. You can also track it using your Order ID on our Track Order page." }
    ]
  },
  {
    category: "Returns & Exchanges",
    questions: [
      { q: "What is your return policy?", a: "We offer a hassle-free 7-day return policy. The saree must be unworn, unwashed, and have all original tags attached." },
      { q: "How do I initiate a return?", a: "You can initiate a return from your Profile > Orders section, or contact our support team with your order details." },
      { q: "When will I receive my refund?", a: "Refunds are processed within 5-7 business days after we receive and inspect the returned item." }
    ]
  },
  {
    category: "Products & Care",
    questions: [
      { q: "Are the colors exactly as shown in pictures?", a: "We try our best to ensure accurate colors, but slight variations may occur due to lighting and different screen calibrations." },
      { q: "How should I care for my silk sarees?", a: "We strongly recommend dry cleaning for all our silk and zari sarees to maintain their luster and longevity." }
    ]
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>("0-0");

  const toggleAccordion = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div>
      <PageHeader 
        title="Frequently Asked Questions" 
        description="Find answers to common questions about our products, shipping, and returns."
      />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-12">
          {faqs.map((section, sIdx) => (
            <div key={sIdx}>
              <h2 className="font-serif text-2xl font-bold mb-6 text-primary">{section.category}</h2>
              <div className="space-y-4">
                {section.questions.map((faq, qIdx) => {
                  const id = `${sIdx}-${qIdx}`;
                  const isOpen = openIndex === id;
                  
                  return (
                    <div key={qIdx} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                      <button 
                        onClick={() => toggleAccordion(id)}
                        className="w-full flex items-center justify-between p-5 text-left focus:outline-none hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-primary pr-4">{faq.q}</span>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="p-5 pt-0 text-muted-foreground border-t border-gray-100 mt-2">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
