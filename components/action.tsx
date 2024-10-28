'use client';

import React from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Action = () => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden w-full min-h-[600px] bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-12 left-10 w-96 h-96 bg-blue-500/40 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse" />
        <div className="hidden md:block absolute top-0 -right-4 w-96 h-96 bg-sky-400/40 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse" />
        <div className="hidden md:block absolute -bottom-8 left-32 w-96 h-96 bg-violet-400/40 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse" />
      </div>

      {/* Content container with enhanced glass effect */}
      <div className=" text-center px-6 py-20 backdrop-blur-md bg-white/40 rounded-3xl shadow-2xl mx-4 max-w-5xl border border-white/20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Header with accent decoration */}
          <div className="relative inline-block">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
              Transform Your Customer Experience Today
            </h1>
          </div>

          {/* Enhanced description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Join the leading businesses leveraging Caresept&apos;s AI Agent Workers to automate
            engagement, enhance efficiency, and delight customers worldwide.
          </motion.p>

          {/* Enhanced CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          >
            <Button
              size="lg"
              className="group w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-lg font-semibold text-white transition-all hover:from-blue-600 hover:to-blue-700 sm:w-auto"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Link
              href="/contact"
              className="w-full bg-white text-lg font-semibold text-gray-800 shadow-md transition-all hover:bg-gray-50 sm:w-auto"
            >
              <Button variant="outline" size="lg" className="w-full md:w-auto">
                Contact Sales
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Action;
