'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Check, Star } from 'lucide-react';

export default function FreeTrialPage() {
  const [plan, setPlan] = useState('pro');

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-primary-100">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-primary-900 mb-4">Start Your Free Trial</h1>
          <p className="text-xl text-primary-700">
            Experience the power of AI-driven CRM for 14 days, absolutely free!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Enter Your Details</CardTitle>
                <CardDescription>Fill out the form to start your free trial</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email</Label>
                    <Input id="email" type="email" placeholder="john@company.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Acme Inc." />
                  </div>
                  <div className="space-y-2">
                    <Label>Select Your Plan</Label>
                    <RadioGroup defaultValue="pro" onValueChange={setPlan}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="pro" id="pro" />
                        <Label htmlFor="pro">Pro</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="enterprise" id="enterprise" />
                        <Label htmlFor="enterprise">Enterprise</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Start Free Trial</Button>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="relative">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="AI CRM Dashboard"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-2 rounded-full shadow-lg">
                <Star className="w-8 h-8 text-yellow-400" />
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Why Choose Our AI CRM?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    'AI-powered insights and predictions',
                    'Seamless integration with your existing tools',
                    'Customizable workflows and automations',
                    'Advanced analytics and reporting',
                    '24/7 customer support',
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <Check className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-primary-700 mb-4">
            Join over 10,000+ businesses already using our AI CRM
          </p>
          <div className="flex justify-center space-x-8">
            {['Company A', 'Company B', 'Company C', 'Company D'].map((company, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-primary-500 font-semibold"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
