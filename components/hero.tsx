'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
          >
            <span className="block">Revolutionize Your Customer Experiences</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-foreground/70 mx-auto mt-3 max-w-md text-base sm:text-lg md:mt-5 md:max-w-3xl md:text-lg"
          >
            Caresept brings you the future of CRM with <strong>Advanced AI</strong>,{' '}
            <strong>Intelligent chatbots</strong>, and seamless workflow management. Stay ahead of
            the competition with our end-to-end <strong>Modern CRM system.</strong>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mx-auto mt-20 flex max-w-md flex-col items-center justify-center gap-10 sm:gap-5 md:flex-row"
          >
            <Button
              variant="default" // Updated variant
              size="lg" // Updated size
              className="flex w-full items-center justify-center font-bold"
            >
              Get Started
              <ArrowRight className="ml-2 size-4" />
            </Button>

            <Button variant="ghost" size="lg" className="w-full font-bold">
              View Demo
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
