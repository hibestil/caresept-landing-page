'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  MessageSquare,
  Phone,
  Mail,
  Clock,
  Building2,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';

const ContactSales = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    employees: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-4 py-16"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        >
          {/* Background with parallax effect */}
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/c4.jpg')",
                transform: 'scale(1.1)', // Slight scale for parallax effect
              }}
            />
            {/* Gradient overlays for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-900/80 to-blue-900/80" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />

            {/* Animated background particles */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
          </div>

          {/* Content container */}
          <motion.div variants={itemVariants} className="space-y-6 max-w-4xl mx-auto">
            {/* Overline text */}
            <motion.div
              variants={itemVariants}
              className="inline-block px-4 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 text-blue-200 text-sm font-medium mb-6"
            >
              Next-Generation CRM Platform
            </motion.div>

            {/* Main heading with gradient text */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-200 leading-tight mb-8"
            >
              Transform Your Business with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400/70 to-blue-300/70">
                AI-Powered CRM
              </span>
            </motion.h1>

            {/* Subtitle with improved visibility */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-blue-100/90 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Join thousands of companies using our advanced AI solutions to revolutionize their
              customer relationships
            </motion.p>

            {/* CTA buttons group */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              {/* Primary CTA */}
              <motion.a
                href="#demo"
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(59, 130, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-semibold shadow-lg hover:from-blue-500 hover:to-blue-400 transition-all duration-300 ease-out"
              >
                <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {/* Secondary CTA */}
              {/* <motion.a
                href="#learn-more"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Lea
                <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </motion.a> */}
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center items-center gap-8 pt-8"
            >
              {['Forbes', 'TechCrunch', 'Wired', 'Bloomberg'].map((brand, index) => (
                <div
                  key={index}
                  className="text-blue-200/60 font-semibold text-sm uppercase tracking-wider"
                >
                  Featured in {brand}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-50 to-transparent z-20" />

          {/* Animated scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          >
            <ChevronDown className="h-8 w-8 text-white/60" />
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { number: '90+ %', text: 'Customer Satisfaction' },
            { number: '3x', text: 'Revenue Growth' },
            { number: '60%', text: 'Time Saved in CRM Tasks' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <h3 className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</h3>
              <p className="text-slate-600">{stat.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Acme Inc."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Job Role</label>
                  <select
                    required
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Role</option>
                    <option value="executive">Executive</option>
                    <option value="manager">Manager</option>
                    <option value="sales">Sales</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Company Size
                </label>
                <select
                  required
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="501+">501+ employees</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us about your needs..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transition-colors"
                type="submit"
              >
                Send Message
              </motion.button>
            </form>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg flex items-center"
              >
                <CheckCircle2 className="h-5 w-5 mr-2" />
                Thank you! We&apos;ll be in touch soon.
              </motion.div>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Why Choose Us */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Why Choose Our AI CRM</h2>
              <ul className="space-y-4">
                {[
                  'AI-powered customer insights and predictions',
                  'Automated workflow optimization',
                  'Real-time analytics and reporting',
                  'Seamless integration with existing tools',
                  '24/7 AI-assisted customer support',
                  'Enterprise-grade security',
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-slate-600"
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mr-3" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact Methods */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Contact Methods</h2>
              <div className="space-y-6">
                <motion.a
                  href="#"
                  className="flex items-center p-4 rounded-lg hover:bg-slate-50 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Sales Hotline</h3>
                    <p className="text-slate-600">+1 (888) 123-4567</p>
                  </div>
                </motion.a>

                <motion.a
                  href="#"
                  className="flex items-center p-4 rounded-lg hover:bg-slate-50 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Email Us</h3>
                    <p className="text-slate-600">support@caresept.com</p>
                  </div>
                </motion.a>

                <motion.div className="flex items-center p-4 rounded-lg" whileHover={{ x: 5 }}>
                  <Clock className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Business Hours</h3>
                    <p className="text-slate-600">Mon - Fri: 8:00 AM - 6:00 PM UTC</p>
                  </div>
                </motion.div>

                <motion.div className="flex items-center p-4 rounded-lg" whileHover={{ x: 5 }}>
                  <Building2 className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Headquarters</h3>
                    <p className="text-slate-600">
                      Defterdar Neighborhood, Otakçılar Street, Kar Plaza No: 80/99 Eyüpsultan,
                      Istanbul
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSales;
