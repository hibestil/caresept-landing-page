'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader } from '@/components/ui/card'; // Updated import
import { Brain, MessageSquare, Workflow, BarChart3, Users, Lock } from 'lucide-react';

const features = [
  {
    title: 'Advanced AI Integration',
    description:
      'Leverage cutting-edge AI to analyze customer data, predict trends, and provide actionable insights.',
    icon: Brain,
  },
  {
    title: 'Intelligent Chatbots',
    description:
      'Enhance customer support with AI-powered chatbots that learn and improve over time.',
    icon: MessageSquare,
  },
  {
    title: 'Streamlined Workflows',
    description:
      'Automate and optimize your business processes with our intuitive workflow management system.',
    icon: Workflow,
  },
  {
    title: 'Comprehensive Analytics',
    description:
      'Gain deep insights into your customer relationships with our powerful analytics tools.',
    icon: BarChart3,
  },
  {
    title: 'Customer Segmentation',
    description:
      'Automatically group customers based on behavior and preferences for targeted marketing.',
    icon: Users,
  },
  {
    title: 'Data Security',
    description: 'Keep your customer data safe with our advanced encryption and security measures.',
    icon: Lock,
  },
];

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="bg-muted/50 py-20 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-2"
        >
          <h2 className="mb-5 text-4xl font-bold">Powerful Features for Modern Businesses</h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-card/50 h-full">
                <CardHeader>
                  <feature.icon className=" mb-4 size-8" />
                  <h1 className=''>{feature.title}</h1>
                </CardHeader>
                  <CardContent>
                    
                    <h4>{feature.description}</h4>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
