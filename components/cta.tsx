'use client';

import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Component() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    controls.start({
      background: [
        'linear-gradient(45deg, #4a0e8f, #7e1fd3)',
        'linear-gradient(45deg, #7e1fd3, #b32fd7)',
        'linear-gradient(45deg, #b32fd7, #4a0e8f)',
      ],
      transition: { duration: 10, repeat: Infinity, ease: 'linear' },
    });
  }, [controls]);

  return (
    <motion.section className="relative overflow-hidden py-24 w-full text-white" animate={controls}>
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-20"
            style={{
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: (mousePosition.x - window.innerWidth / 2) * 0.02,
              y: (mousePosition.y - window.innerHeight / 2) * 0.02,
            }}
            transition={{ type: 'spring', stiffness: 50, damping: 10 }}
          />
        ))}
      </div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Elevate Your Customer Relationships
          </motion.h2>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-xl leading-7 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join the elite businesses that have revolutionized their CRM with Caresept. Experience
            the power of advanced AI in transforming your customer interactions.
          </motion.p>
          <motion.div
            className="mx-auto mt-12 flex max-w-md flex-col items-center justify-center gap-6 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-3 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Begin Your Ascent
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white text-white hover:bg-white/20 font-semibold text-lg px-8 py-3 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Watch Presentation
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
