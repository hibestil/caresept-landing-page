'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React, { useMemo } from 'react';

export const BackgroundBeams = ({
  children,
  className,
  beamOptions,
}: {
  children: React.ReactNode;
  className?: string;
  beamOptions?: {
    duration?: number;
    beamCount?: number;
  };
}) => {
  return (
    <div
      className={cn('h-[20rem] md:h-screen w-full bg-black relative overflow-hidden', className)}
    >
      <SparklingBeams beamOptions={beamOptions} />
      {children}
    </div>
  );
};

const SparklingBeams = ({
  beamOptions,
}: {
  beamOptions?: {
    duration?: number;
    beamCount?: number;
  };
}) => {
  const paths = useMemo(
    () => generateRandomPaths(beamOptions?.beamCount || 20),
    [beamOptions?.beamCount]
  );

  return (
    <motion.svg
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 w-full h-full"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>
      {paths.map((path, idx) => (
        <motion.path
          key={`beam-${idx}`}
          d={path}
          stroke="url(#beam-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: {
              duration: beamOptions?.duration || 3,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'loop',
              repeatDelay: Math.random() * 2,
            },
            opacity: {
              duration: beamOptions?.duration || 3,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'loop',
              repeatDelay: Math.random() * 2,
              times: [0, 0.5, 1],
            },
          }}
        />
      ))}
    </motion.svg>
  );
};

function generateRandomPaths(count: number): string[] {
  const paths: string[] = [];
  for (let i = 0; i < count; i++) {
    const startX = Math.random() * 1440;
    const startY = Math.random() * 900;
    const endX = Math.random() * 1440;
    const endY = Math.random() * 900;
    const controlX1 = Math.random() * 1440;
    const controlY1 = Math.random() * 900;
    const controlX2 = Math.random() * 1440;
    const controlY2 = Math.random() * 900;
    paths.push(
      `M${startX},${startY} C${controlX1},${controlY1} ${controlX2},${controlY2} ${endX},${endY}`
    );
  }
  return paths;
}

export default BackgroundBeams;
