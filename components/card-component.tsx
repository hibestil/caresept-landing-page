'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export interface CardComponentProps {
  title: string;
  points: {
    subtitle: string;
    description: {
      title?: string;
      description: string;
    }[];
    icon: React.ReactNode;
  }[];
  image: string;
  color: string;
  isImageLeft?: boolean; // New prop to control layout
}

function CardComponent({ title, points, image, color, isImageLeft = true }: CardComponentProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Different animation variants based on position
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: isImageLeft ? -100 : 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      x: isImageLeft ? 100 : -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: isImageLeft ? 20 : -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  // Flexbox order classes based on layout
  const imageOrderClass = isImageLeft ? 'order-1' : 'order-2';
  const contentOrderClass = isImageLeft ? 'order-2' : 'order-1';

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className={cn(
        'w-screen flex flex-col md:flex-row items-center justify-center p-8 gap-8 lg:py-20',
        color
      )}
    >
      <motion.div
        className={cn('w-full md:w-1/2 ', imageOrderClass)}
        variants={imageVariants}
        whileHover={{ scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <Image
          src={image}
          alt={title}
          width={200}
          height={100}
          className="w-full rounded-lg shadow-lg"
        />
      </motion.div>

      <motion.div
        className={cn('w-full md:w-1/2 space-y-6', contentOrderClass)}
        variants={contentVariants}
      >
        <motion.h1
          className="text-4xl font-bold mb-8 bg-gradient-to-r from-white/90 via-slate-50/90 to-slate-200/90 text-transparent bg-clip-text"
          variants={itemVariants}
        >
          {title}
        </motion.h1>

        <motion.ul className="space-y-6">
          {points.map((point, index) => (
            <motion.li
              key={point.subtitle}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="p-4 rounded-lg text-white backdrop-blur-sm transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl"
                >
                  {point.icon}
                </motion.div>
                <h2 className="text-xl font-semibold">{point.subtitle}</h2>
              </div>

              <motion.ul
                className="ml-8 space-y-3"
                animate={{ height: hoveredIndex === index ? 'auto' : 'auto' }}
              >
                {point.description.map((desc, descIndex) => (
                  <motion.li
                    key={descIndex}
                    initial={{ opacity: 0, x: isImageLeft ? -10 : 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: descIndex * 0.1 }}
                    className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-current before:rounded-full"
                  >
                    {desc.title && <h3 className="font-medium mb-1">{desc.title}</h3>}
                    <p className="text-sm opacity-80">{desc.description}</p>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
}

export default CardComponent;
