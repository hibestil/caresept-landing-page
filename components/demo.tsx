'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Bot,
  Boxes,
  RefreshCw,
  Workflow,
  MessagesSquare,
  Calendar,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: <Bot className="w-10 h-10 text-blue-500" />,
    title: 'AI-Powered Automation',
    description: 'Smart workflows and automated processes tailored to your business needs',
    delay: 0.1,
  },
  {
    icon: <Boxes className="w-10 h-10 text-purple-500" />,
    title: 'Custom Modules',
    description: 'Highly customized modules designed specifically for your industry',
    delay: 0.2,
  },
  {
    icon: <RefreshCw className="w-10 h-10 text-green-500" />,
    title: 'Seamless Integration',
    description: 'Connect with your favorite work apps and CRM systems effortlessly',
    delay: 0.3,
  },
  {
    icon: <Workflow className="w-10 h-10 text-orange-500" />,
    title: 'Smart Workflows',
    description: 'AI-enabled workflow design that adapts to your business processes',
    delay: 0.4,
  },
  {
    icon: <MessagesSquare className="w-10 h-10 text-pink-500" />,
    title: 'User Chat Management',
    description: 'Intelligent chat system with AI-powered responses and user tracking',
    delay: 0.5,
  },
  {
    icon: <Calendar className="w-10 h-10 text-indigo-500" />,
    title: 'AI Appointment Scheduling',
    description: 'Smart scheduling system that learns from your preferences',
    delay: 0.6,
  },
];

export default function Demo() {
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

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className=" md:px-4 py-12">
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Main center gradient */}
          <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-indigo-500 via-blue-500 to-sky-500 rounded-full blur-3xl opacity-40 animate-pulse"></div>

          {/* Floating orbs that create flowing effect */}
          <div className="absolute w-[300px] h-[300px] bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full blur-3xl opacity-30 animate-blob1"></div>
          <div className="absolute w-[250px] h-[250px] bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full blur-3xl opacity-30 animate-blob2"></div>
          <div className="absolute w-[350px] h-[350px] bg-gradient-to-r from-sky-200 to-sky-200 rounded-full blur-3xl opacity-30 animate-blob3"></div>
        </div>

        <section ref={ref} className="py-20 relative">
          <div className="mb-12 text-center">
            <Badge className="mb-4" variant="secondary">
              Product Demo
            </Badge>
            <h2 className="mb-4 text-4xl font-bold tracking-tight primary-text">
              Experience the Demo which is more real than Reality
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              See how Caresept transforms customer relationships with AI-powered intelligence, and
              state-of-the-art Tech
            </p>
          </div>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: feature.delay }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 border-none">
                    <div className="flex flex-col h-full">
                      <div className="mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                        {feature.description}
                      </p>
                      <Button
                        variant="ghost"
                        className="group text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 p-0"
                      >
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
