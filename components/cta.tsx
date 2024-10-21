'use client';

import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="bg-primary text-primary-foreground py-20 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ready to Transform Your Customer Relationships?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-6">
            Join thousands of businesses that have already revolutionized their CRM with Caresept.
            Start your journey today and see the difference advanced AI can make.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mx-auto mt-20 flex max-w-md flex-col items-center justify-center gap-10 sm:gap-5 md:flex-row"
          >
            <Button
              variant="default" // Updated variant
              size="lg" // Updated size
              className="flex w-full items-center justify-center bg-white text-primary hover:bg-white/90 font-bold"
            >
              Get Started
              <ArrowRight className="ml-2 size-4" />
            </Button>

            <Button variant="ghost" size="lg" className="w-full hover:bg-white/20 text-white font-semibold hover:text-white">
              View Demo
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
