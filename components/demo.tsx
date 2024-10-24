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

const features = [
  {
    title: 'AI-Powered Customer Support',
    icon: MessageSquare,
    content:
      'Transform your customer support with our advanced AI chatbot. It understands context, learns from interactions, and provides instant, accurate responses 24/7.',
    stats: [
      { label: 'Response Time', value: '< 10 sec' },
      { label: 'Customer Satisfaction', value: '95%' },
      { label: 'Query Resolution', value: '92%' },
    ],
    benefits: [
      'Natural language understanding',
      'Multi-language support',
      'Seamless human handoff',
      'Continuous learning',
    ],
  },
  {
    title: 'Intelligent Analytics Suite',
    icon: BarChart2,
    content:
      'Make data-driven decisions with our comprehensive analytics platform. Visualize trends, predict customer behavior, and optimize your business strategy.',
    stats: [
      { label: 'Data Points Analyzed', value: '1M+' },
      { label: 'Prediction Accuracy', value: '94%' },
      { label: 'ROI Improvement', value: '45%' },
    ],
    benefits: [
      'Real-time dashboards',
      'Predictive analytics',
      'Custom reporting',
      'Trend forecasting',
    ],
  },
  {
    title: 'Smart Customer Segmentation',
    icon: Users,
    content:
      'Leverage AI to automatically group customers based on behavior, preferences, and engagement patterns. Deliver personalized experiences at scale.',
    stats: [
      { label: 'Segments Created', value: '50+' },
      { label: 'Engagement Rate', value: '78%' },
      { label: 'Revenue Impact', value: '35%' },
    ],
    benefits: [
      'Automated clustering',
      'Behavior analysis',
      'Dynamic segments',
      'Targeted campaigns',
    ],
  },
];


const StatCard = ({ label, value }: { label: string; value: string }) => (
  <Card className="bg-white/5 backdrop-blur-sm">
    <CardContent className="p-4">
      <div className="primary-text text-2xl font-bold">{value}</div>
      <div className="text-muted-foreground text-sm">{label}</div>
    </CardContent>
  </Card>
);

export default function Demo() {

  return (
    <section className="from-background to-background/80 bg-gradient-to-b px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <Badge className="mb-4" variant="secondary">
            Product Demo
          </Badge>
          <h2 className="mb-4 text-4xl font-bold tracking-tight primary-text">Experience the Demo which is more real than Reality</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            See how Caresept transforms customer relationships with AI-powered intelligence, and state-of-the-art Tech
          </p>
        </div>

        
      </div>
    </section>
  );
}
