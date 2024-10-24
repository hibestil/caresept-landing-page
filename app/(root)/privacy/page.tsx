'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

const CosmicCTA = () => {
  return (
    <div className="relative min-h-[400px] w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Radial gradient background */}
      <div className="absolute inset-0">
        {/* Main radial gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-purple-600 via-indigo-800 to-black opacity-80" />

        {/* Central glow effect */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" />

        {/* Multiple blurry orbs with radial gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] animate-cosmic">
          <div className="absolute inset-0 bg-gradient-radial from-blue-500 via-transparent to-transparent rounded-full blur-2xl opacity-30" />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] animate-cosmic-delayed">
          <div className="absolute inset-0 bg-gradient-radial from-purple-500 via-transparent to-transparent rounded-full blur-2xl opacity-20" />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] animate-cosmic-reverse">
          <div className="absolute inset-0 bg-gradient-radial from-pink-500 via-transparent to-transparent rounded-full blur-2xl opacity-25" />
        </div>
      </div>

      {/* Content container with enhanced glow */}
      <div className="relative z-10 text-center p-8 max-w-2xl">
        <div className="relative">
          <h2 className="text-5xl font-bold mb-6 text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-purple-200">
            Explore the Universe of Possibilities
          </h2>
          <p className="text-xl mb-12 text-gray-200">
            Join thousands of innovators who are already shaping the future. Don&apos;t miss out on
            this transformative journey.
          </p>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-6 rounded-full font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            Get Started Now
          </Button>
        </div>
      </div>
      {/* Custom keyframes animation styles */}
      <style>{`
        @keyframes cosmic {
          0% {
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
          }
          33% {
            transform: translate(-50%, -50%) scale(1.1) rotate(120deg);
          }
          66% {
            transform: translate(-50%, -50%) scale(0.9) rotate(240deg);
          }
          100% {
            transform: translate(-50%, -50%) scale(1) rotate(360deg);
          }
        }
        @keyframes cosmic-delayed {
          0% {
            transform: translate(-50%, -50%) scale(0.9) rotate(0deg);
          }
          33% {
            transform: translate(-50%, -50%) scale(1.1) rotate(-120deg);
          }
          66% {
            transform: translate(-50%, -50%) scale(1) rotate(-240deg);
          }
          100% {
            transform: translate(-50%, -50%) scale(0.9) rotate(-360deg);
          }
        }
        @keyframes cosmic-reverse {
          0% {
            transform: translate(-50%, -50%) scale(1.1) rotate(0deg);
          }
          33% {
            transform: translate(-50%, -50%) scale(0.9) rotate(120deg);
          }
          66% {
            transform: translate(-50%, -50%) scale(1) rotate(240deg);
          }
          100% {
            transform: translate(-50%, -50%) scale(1.1) rotate(360deg);
          }
        }
        .animate-cosmic {
          animation: cosmic 20s infinite ease-in-out;
        }
        .animate-cosmic-delayed {
          animation: cosmic-delayed 25s infinite ease-in-out;
        }
        .animate-cosmic-reverse {
          animation: cosmic-reverse 30s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default CosmicCTA;
