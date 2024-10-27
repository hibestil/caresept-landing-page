'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence, MotionValue } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDatabase, FiSliders, FiLock, FiMessageSquare, FiCpu } from 'react-icons/fi';

const features = [
  {
    icon: <FiDatabase className="w-8 h-8" />,
    title: 'No-Code Data Module Builder',
    description:
      'Create bespoke data modules tailored to your business needs without any coding knowledge.',
    details: ['Custom Data Structures', 'Easy Personalization', 'Flexible Modeling'],
    image: '/c1.jpg',
  },
  {
    icon: <FiSliders className="w-8 h-8" />,
    title: 'Drag-and-Drop Workflow Automation',
    description:
      'Design automated workflows effortlessly using our user-friendly drag-and-drop tools.',
    details: ['Simplify Complex Processes', 'Automate Tasks', 'Enhance Efficiency'],
    image: '/c2.jpg',
  },
  {
    icon: <FiLock className="w-8 h-8" />,
    title: 'Granular Access Control and Permissions',
    description:
      'Define who has read, write, and access rights to specific fields within any data module.',
    details: [
      'Customizable Permissions',
      'Workflow-Based Access Management',
      'Secure Data Sharing',
      'Enhanced Data Security',
    ],
    image: '/c3.jpg',
  },
  {
    icon: <FiMessageSquare className="w-8 h-8" />,
    title: 'Integrated Communication Channels',
    description:
      'Consolidate all customer communications from various platforms into one centralized hub.',
    details: ['Unified Messaging Platform', 'Seamless Interaction', 'Improved Responsiveness'],
    image: '/c4.jpg',
  },
  {
    icon: <FiCpu className="w-8 h-8" />,
    title: 'AI Agent Workers with CareLLM Technology',
    description:
      'Deploy AI agents powered by our advanced CareLLM technology for natural customer interactions.',
    details: [
      'Human-Like AI Interactions',
      'Efficient Data Capture',
      'No-Code Training',
      'Reduced Manual Workload',
      'Seamless Human Handoff',
    ],
    image: '/c5.jpg',
  },
];

const FeatureCard = ({ feature, index }: any) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative overflow-hidden  rounded-xl shadow-lg p-8 
      border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-blue-50"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-primary/10 to-primary/5 rounded-tr-full" />

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center mb-6"
      >
        <div className="mr-4 p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg text-primary">
          {feature.icon}
        </div>
        <h3 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          {feature.title}
        </h3>
      </motion.div>

      <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/80 to-gray-50" />
        <ul className="relative space-y-2">
          {feature.details.map((detail: string, idx: number) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
              className="flex items-center text-gray-700"
            >
              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
              {detail}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default function FeatureCards() {
  const [activeTab, setActiveTab] = useState(0);
  const tabsRef = useRef(null);

  useEffect(() => {
    if (tabsRef.current) {
      const activeTabElement = tabsRef.current.children[activeTab];
      activeTabElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [activeTab]);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 w-full">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold primary-text mb-4">Feature Highlights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how our powerful features can transform your business operations
          </p>
        </motion.div>

        {/* Mobile Tabs */}
        <div className="md:hidden mb-8">
          <div ref={tabsRef} className="flex overflow-x-auto space-x-4 pb-2 scrollbar-hide">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-shrink-0 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg shadow-primary/30'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {feature.title}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className={index !== activeTab ? 'hidden md:block' : ''}
              >
                <FeatureCard feature={feature} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
