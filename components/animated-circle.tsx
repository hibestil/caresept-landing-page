import React from 'react';
import { motion } from 'framer-motion';

const AnimatedLaserCircle = ({ radius = 150 }) => {
  // Generate random positions for sparkles
  const sparkles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    angle: (i * 30) + Math.random() * 10,
    distance: radius - 5 + Math.random() * 10
  }));

  return (
    <div className="relative w-full h-full">
      <svg className="w-full h-full" viewBox="0 0 400 400">
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="laserGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff00ff" stopOpacity="0.8">
              <animate
                attributeName="stop-color"
                values="#6600ff;#d402ff;#ff00ff"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#ff00ff" stopOpacity="0.8">
              <animate
                attributeName="stop-color"
               values="#6600ff;#d402ff;#ff00ff"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Base circle with gradient stroke */}
        <circle
          cx="200"
          cy="200"
          r={radius}
          fill="none"
          className="opacity-20"
          stroke="url(#laserGradient)"
          strokeWidth="1"
        />

        {/* Animated laser beam */}
        <circle
          cx="200"
          cy="200"
          r={radius}
          fill="none"
          stroke="url(#laserGradient)"
          strokeWidth="2"
          filter="url(#glow)"
          className="animate-pulse"
          strokeDasharray="10 5"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="0;30"
            dur="1s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="1;0.7;1"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Rotating gradient overlay */}
        <circle
          cx="200"
          cy="200"
          r={radius}
          fill="none"
          stroke="url(#laserGradient)"
          strokeWidth="1"
          className="mix-blend-overlay"
          transform-origin="center"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 200 200"
            to="360 200 200"
            dur="10s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Sparkles */}
        {sparkles.map(({ id, angle, distance }) => (
          <g key={id} transform={`translate(200, 200)`}>
            <circle
              cx={distance * Math.cos((angle * Math.PI) / 180)}
              cy={distance * Math.sin((angle * Math.PI) / 180)}
              r="1.5"
              fill="#fff"
              className="animate-ping"
              style={{
                animationDelay: `${id * 0.2}s`,
                animationDuration: '1.5s'
              }}
            >
              <animate
                attributeName="opacity"
                values="0;1;0"
                dur="1.5s"
                begin={`${id * 0.2}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="r"
                values="1.5;2.5;1.5"
                dur="1.5s"
                begin={`${id * 0.2}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}

        {/* Pixel noise effect */}
        <g className="opacity-20">
          {Array.from({ length: 20 }).map((_, i) => (
            <rect
              key={i}
              x={180 + Math.random() * 40}
              y={180 + Math.random() * 40}
              width="2"
              height="2"
              fill="url(#laserGradient)"
              className="animate-pulse"
              style={{
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: '1s'
              }}
            >
              <animate
                attributeName="opacity"
                values="0;1;0"
                dur="1s"
                begin={`${Math.random() * 2}s`}
                repeatCount="indefinite"
              />
            </rect>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default AnimatedLaserCircle;