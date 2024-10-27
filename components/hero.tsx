'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import AnimatedGridPattern from '@/components/ui/animated-grid-pattern';
import { Cover } from '@/components/ui/cover';
import HeroVideoDialog from './ui/hero-video-dialog';
import AnimatedGradientText from './ui/animated-gradient-text';
import { cn } from '@/lib/utils';
import Meteors from './ui/meteors';
import Link from 'next/link';

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative w-screen min-h-screen overflow-clip bg-gradient-to-br pt-20  lg:pt-32 bg-transparent pb-10">
      {/* <Meteors number={10} /> */}
      <AnimatedGridPattern
        numSquares={80}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          '[mask-image:radial-gradient(500px_circle_at_center,blue, transparent)]',
          'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12'
        )}
      />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center justify-center"
        >
          <AnimatedGradientText>
            🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{' '}
            <span
              className={cn(
                `inline animate-gradient bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
              )}
            >
              Launching Caresept AI ✨
            </span>
            <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedGradientText>
        </motion.div>
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-3xl md:text-4xl lg:text-7xl"
          >
            <Cover className="">Unlock</Cover> Customer Engagement with Customizable AI Agent
            Workers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-700 sm:text-md md:text-xl"
          >
            Automate interactions and streamline workflows with Caresept&apos;s customizable,
            no-code CRM platform.
          </motion.p>
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
              <Button variant="outline" size="lg">
                Contact Sales
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="w-full flex flex-col items-center justify-center mt-10 lg:mt-16 mb-8">
          <h4 className="text-primary/70 font-semibold mb-5">See a real demo to Visualise</h4>
          <HeroVideoDialog
            className="dark:hidden block lg:max-w-[70%] shadow-2xl z-40 shadow-primary"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
            thumbnailAlt="Hero Video"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
