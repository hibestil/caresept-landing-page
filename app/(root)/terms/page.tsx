"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Bot, 
  Calendar, 
  MessageSquare, 
  Settings2, 
  Workflow, 
  Users2,
  ArrowRight,
  Boxes,
  RefreshCw,
  MessagesSquare
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const features = [
  {
    icon: <Bot className="w-10 h-10 text-blue-500" />,
    title: "AI-Powered Automation",
    description: "Smart workflows and automated processes tailored to your business needs",
    delay: 0.1
  },
  {
    icon: <Boxes className="w-10 h-10 text-purple-500" />,
    title: "Custom Modules",
    description: "Highly customized modules designed specifically for your industry",
    delay: 0.2
  },
  {
    icon: <RefreshCw className="w-10 h-10 text-green-500" />,
    title: "Seamless Integration",
    description: "Connect with your favorite work apps and CRM systems effortlessly",
    delay: 0.3
  },
  {
    icon: <Workflow className="w-10 h-10 text-orange-500" />,
    title: "Smart Workflows",
    description: "AI-enabled workflow design that adapts to your business processes",
    delay: 0.4
  },
  {
    icon: <MessagesSquare className="w-10 h-10 text-pink-500" />,
    title: "User Chat Management",
    description: "Intelligent chat system with AI-powered responses and user tracking",
    delay: 0.5
  },
  {
    icon: <Calendar className="w-10 h-10 text-indigo-500" />,
    title: "AI Appointment Scheduling",
    description: "Smart scheduling system that learns from your preferences",
    delay: 0.6
  }
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
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience the Future of CRM
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover how Caresept transforms your business with AI-powered features and seamless integrations
          </p>
        </motion.div>

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
                  <div className="mb-4">
                    {feature.icon}
                  </div>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            Schedule a Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}