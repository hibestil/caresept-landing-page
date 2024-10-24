'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  MessageSquare,
  BarChart2,
  Users,
  ArrowRight,
  Star,
  Shield,
  Clock,
  Zap,
  CheckCircle,
  Award,
} from 'lucide-react';
import Image from 'next/image';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import ShineBorder from './ui/shine-border';

const TrustIndicators = () => {
  const indicators = [
    {
      icon: Shield,
      text: 'Enterprise-grade security',
      description: 'SOC2 Type II certified with end-to-end encryption',
      stat: '256-bit',
      color: 'text-primary',
    },
    {
      icon: Clock,
      text: '99.9% Uptime SLA',
      description: 'Continuous monitoring with instant alerts',
      stat: '99.9%',
      color: 'text-primary',
    },
    {
      icon: Star,
      text: 'Customer satisfaction',
      description: 'Based on 10,000+ customer reviews',
      stat: '4.9/5',
      color: 'text-pink-600',
    },
    {
      icon: Zap,
      text: 'Real-time updates',
      description: 'Average response time under 100ms',
      stat: '<100ms',
      color: 'text-fuchsia-600',
    },
    {
      icon: Users,
      text: 'Active users',
      description: 'Trusted by leading companies worldwide',
      stat: '1M+',
      color: 'text-pink-600',
    },
    {
      icon: Award,
      text: 'Industry awards',
      description: 'Recognized market leader since 2020',
      stat: '50+',
      color: 'text-pink-600',
    },
  ];

  return (
    <TooltipProvider>
      <div className="w-full py-8 lg:mt-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <ShineBorder
             className='shine w-full'
             color={'blue'}
            >
              <h3 className="text-3xl font-bold mb-2  primary-text">Trusted by Industry Leaders</h3>
            </ShineBorder>
            <p className="text-gray-700/60">Join thousands of companies building with confidence</p>
          </div>

          <div className="flex items-center justify-around mb-4">
            <Image src="/image1.png" width={140} height={100} alt="Brand 1" />
            <Image src="/image2.png" width={140} height={100} alt="Brand 2" />
            <Image src="/image3.png" width={120} height={100} alt="Brand 3" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {indicators.map((item, index) => (
              <Tooltip key={index}>
                <TooltipTrigger>
                  <div
                    className="group relative bg-white rounded-xl p-4 transition-all duration-300 
                      hover:shadow-lg hover:-translate-y-1 border border-gray-100 hover:border-gray-200"
                  >
                    <div className="flex items-center gap-4">
                      {/* Icon with gradient background */}
                      <div
                        className={`rounded-lg p-2 bg-gradient-to-br from-${item.color.split('-')[1]}-50 to-${item.color.split('-')[1]}-100`}
                      >
                        <item.icon
                          className={`size-6 ${item.color} transition-transform duration-300 group-hover:scale-110`}
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-gray-900">{item.text}</h4>
                          <Badge
                            variant="secondary"
                            className={`${item.color} bg-opacity-10 font-semibold`}
                          >
                            {item.stat}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                      </div>
                    </div>

                    {/* Decorative gradient line */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent className="primary-gradient">
                  <p className="text-sm">{item.description}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>

          {/* Bottom certification badges */}
          <div className="flex justify-center items-center gap-6 mt-8">
            {['SOC2', 'ISO 27001', 'GDPR', 'HIPAA'].map((cert, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="size-4 text-primary" />
                <span>{cert} Compliant</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default TrustIndicators;
