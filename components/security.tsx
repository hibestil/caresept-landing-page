'use client';

import React from 'react';
import { Shield, Lock, Server, Clock, FileCheck, Database, Users, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const SecuritySection = () => {
  const securityFeatures = [
    {
      title: 'GDPR & CCPA Compliant',
      description:
        'Your data handled responsibly and transparently with full regulatory compliance',
      icon: Shield,
      delay: 0.1,
      image: '/gdpr.png',
    },
    {
      title: 'Enterprise-Grade Encryption',
      description: 'State-of-the-art encryption protocols securing data at rest and in transit',
      icon: Lock,
      delay: 0.2,
      image: '/soc.png',
    },
    {
      title: 'Data Backups & Recovery',
      description: 'Automatic backups and swift recovery systems',
      icon: Server,
      delay: 0.3,
      image: '/data.png',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-gradient-to-b from-white via-gray-200 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Enterprise-Grade Security You Can Always Trust
          </h2>
          <p className="text-md text-gray-600 max-w-2xl mx-auto">
            Your data and customer interactions are protected by top-tier security measures and
            compliance standards
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={item}
              transition={{ delay: feature.delay }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 "
            >
              <div className="flex items-start justify-center w-full mb-5">
                <Image src={feature.image} alt={feature.title} width={100} height={100} />
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
            <CheckCircle className="h-5 w-5 text-blue-600" />
            <span className="text-blue-700 font-medium">SOC 2 Type II Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
