'use client';

import React from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

function Action() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden w-full bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-12 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob" />
        <div className="sm:hidden md:block absolute top-0 -right-4 w-72 h-72 bg-sky-400 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000" />
        <div className="sm:hidden md:block absolute -bottom-8 left-32 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000" />
      </div>

      {/* Content layer */}
      <div className="relative z-10 text-center px-4 py-16 backdrop-blur-sm bg-white/30 rounded-2xl shadow-lg mx-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 primary-text">
            Transform Your Customer Experience Today
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-md text-gray-700 max-w-2xl mx-auto mb-8"
        >
          Join the leading businesses leveraging Caresept&apos;s AI Agent Workers to automate
          engagement, enhance efficiency, and delight customers worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-7 font-bold"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="primary-gradient text-white font-bold w-full md:w-auto px-8 py-6  shadow-lg hover:shadow-xl transform transition-all duration-200 flex items-center gap-2 group"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="font-bold w-full md:w-auto px-8 py-6 border-2 border-gray-200 flex items-center gap-2 group"
            >
              Contact Sales
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Action;
