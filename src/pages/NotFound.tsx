import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { motion } from 'motion/react';

export function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-serif text-8xl md:text-9xl font-bold text-gray-200 mb-4"
      >
        404
      </motion.h1>
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4"
      >
        Page Not Found
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-muted-foreground max-w-md mx-auto mb-8"
      >
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Link to="/">
          <Button size="lg">Return to Homepage</Button>
        </Link>
      </motion.div>
    </div>
  );
}
