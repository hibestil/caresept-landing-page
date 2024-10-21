'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { CheckCircledIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';
const plans = [
  {
    name: 'Starter',
    monthlyPrice: 29,
    yearlyPrice: 290,
    description: 'Perfect for small businesses just getting started with CRM.',
    features: [
      'Up to 1,000 contacts',
      'Basic AI chatbot',
      'Email marketing',
      'Task management',
      '5 team members',
    ],
  },
  {
    name: 'Professional',
    monthlyPrice: 79,
    yearlyPrice: 790,
    description: 'Ideal for growing businesses with advanced CRM needs.',
    features: [
      'Up to 10,000 contacts',
      'Advanced AI chatbot',
      'Marketing automation',
      'Sales forecasting',
      'Unlimited team members',
    ],
  },
  {
    name: 'Enterprise',
    monthlyPrice: 199,
    yearlyPrice: 1990,
    description: 'For large organizations requiring powerful CRM capabilities.',
    features: [
      'Unlimited contacts',
      'Custom AI solutions',
      'Advanced analytics',
      'Dedicated account manager',
      'API access',
    ],
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-foreground mb-12 text-center text-3xl font-extrabold">
            Pricing that Scales with Your Business
          </h2>
          <div className="mb-12 flex items-center justify-center space-x-4">
            <span className={`text-lg ${!isYearly ? 'text-primary' : 'text-foreground/60'}`}>
              Monthly
            </span>
            <Switch checked={isYearly} onChange={() => setIsYearly(!isYearly)} color="primary" />{' '}
            {/* Updated Switch */}
            <span className={`text-lg ${isYearly ? 'text-primary' : 'text-foreground/60'}`}>
              Yearly (Save 20%)
            </span>
          </div>
          <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <Card
                key={plan.name}
                className={`flex flex-col pb-5 ${index === 1 ? 'border-primary' : ''}`}
              >
                <CardContent>
                  <h5>{plan.name}</h5> {/* Updated CardTitle */}
                  <h5>{plan.description}</h5>{' '}
                  {/* Updated CardDescription */}
                  <div className="mb-4 text-4xl font-bold">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    <span className="text-foreground/60 text-lg font-normal">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircledIcon className="text-primary mr-2 size-5" />{' '}
                        {/* You may need to replace this with an MUI icon */}
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardTitle>
                  <Button className={cn(
                    'w-full',
                    index === 1 ? 'bg-primary' : 'bg-secondary',
                    'text-white'
                  )}>
                    {' '}
                    {/* Updated Button */}
                    Get Started
                  </Button>
                </CardTitle>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
