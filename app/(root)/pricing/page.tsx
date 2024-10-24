'use client';

import React from 'react';
import { Moon, Sun, Check, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const plans = [
  {
    name: 'Basic',
    price: {
      monthly: 29,
      yearly: 290,
    },
    features: [
      'AI-powered contact management',
      'Basic email automation',
      'Up to 1,000 contacts',
      '5GB storage',
      'Email support',
    ],
    notIncluded: ['Advanced AI insights', 'Custom integrations', 'Dedicated account manager'],
  },
  {
    name: 'Pro',
    price: {
      monthly: 79,
      yearly: 790,
    },
    features: [
      'Everything in Basic, plus:',
      'Advanced AI insights and predictions',
      'Unlimited contacts',
      'Custom integrations',
      '50GB storage',
      'Priority support',
    ],
    notIncluded: ['Dedicated account manager'],
  },
  {
    name: 'Enterprise',
    price: {
      monthly: 199,
      yearly: 1990,
    },
    features: [
      'Everything in Pro, plus:',
      'Dedicated account manager',
      'Custom AI model training',
      'Unlimited storage',
      'On-premise deployment option',
      '24/7 phone and email support',
    ],
    notIncluded: [],
  },
];

export default function App() {
  const [isYearly, setIsYearly] = React.useState(true);
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? (
              <Sun className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem]" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Pricing Plans</h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Choose the perfect plan for your business
          </p>
        </div>

        <div className="mt-12 sm:mt-16 flex justify-center items-center space-x-4">
          <span className="text-sm font-medium">Monthly</span>
          <Switch checked={isYearly} onCheckedChange={setIsYearly} />
          <span className="text-sm font-medium">Yearly</span>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`${plan.name === 'Pro' ? 'border-primary shadow-lg' : ''}`}
            >
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>
                  {plan.name === 'Pro' && (
                    <span className="text-primary font-semibold">Most Popular</span>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-extrabold">
                  ${isYearly ? plan.price.yearly : plan.price.monthly}
                  <span className="text-xl font-normal text-muted-foreground">
                    /{isYearly ? 'year' : 'month'}
                  </span>
                </div>
                {/* Removed Accordion and replaced with a simple list */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold">Features</h3>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2">
                        <Check className="h-5 w-5 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {plan.notIncluded.length > 0 && (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">Not Included</h3>
                    <ul className="space-y-2">
                      {plan.notIncluded.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2">
                          <X className="h-5 w-5 text-muted-foreground" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full border-primary font-bold"
                  variant={plan.name === 'Pro' ? 'default' : 'outline'}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get started'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
