import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ChevronRight, Database, Workflow, Lock, MessageCircle, Bot } from 'lucide-react';

const GradientBackground = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-60" />
);

const FeatureCard = ({ icon: Icon, title, descriptions, delay }: any) => {
  const controls = useAnimation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      onHoverStart={() => controls.start('hover')}
      onHoverEnd={() => controls.start('initial')}
      className="relative overflow-hidden bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
    >
      {/* Gradient overlay on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5"
      />

      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="relative"
      >
        <div className="flex items-center mb-6">
          <motion.div
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 5 }}
            className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600"
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>
          <h3 className="text-xl font-bold ml-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {title}
          </h3>
        </div>

        <div className="space-y-4">
          {descriptions.map(
            (
              desc:
                | string
                | number
                | bigint
                | boolean
                | React.ReactElement<any, string | React.JSXElementConstructor<any>>
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | Promise<React.AwaitedReactNode>
                | null
                | undefined,
              index: React.Key | null | undefined
            ) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: delay + (index ? 0.1 * Number(index) : 0),
                  ease: 'easeOut',
                }}
                className="flex items-start space-x-3 group"
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className="mt-1 flex-shrink-0"
                >
                  <ChevronRight className="w-4 h-4 text-indigo-500" />
                </motion.div>
                <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                  {desc}
                </p>
              </motion.div>
            )
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: Database,
      title: 'No-Code Data Module Builder',
      descriptions: [
        'Create bespoke data modules tailored to your business needs',
        'Use our intuitive interface to build and modify data structures without coding',
        'Adapt your data modules to match unique workflows across industries',
      ],
    },
    {
      icon: Workflow,
      title: 'Drag-and-Drop Workflow Automation',
      descriptions: [
        'Design automated workflows effortlessly using our user-friendly tools',
        'Set up triggers and actions for tasks like data updates and notifications',
        'Reduce manual workload by automating repetitive tasks',
      ],
    },
    {
      icon: Lock,
      title: 'Granular Access Control',
      descriptions: [
        'Define read, write, and access rights to specific fields within any module',
        'Utilize workflows to assign and adjust permissions dynamically',
        'Maintain control over sensitive information with detailed settings',
      ],
    },
    {
      icon: MessageCircle,
      title: 'Integrated Communication Channels',
      descriptions: [
        'Consolidate all customer communications in one centralized hub',
        'Manage inquiries across multiple channels without switching platforms',
        'Ensure prompt and consistent communication',
      ],
    },
    {
      icon: Bot,
      title: 'AI Agent Workers with CareLLM',
      descriptions: [
        'Deploy AI agents powered by CareLLM for natural interactions 24/7',
        'Use drag-and-drop interface to train and customize AI behaviors',
        'Enable seamless handoff between AI and human representatives',
      ],
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <GradientBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Feature Highlights
            </h2>
            <motion.div
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full"
            />
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              descriptions={feature.descriptions}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
