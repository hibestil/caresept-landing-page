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
} from 'lucide-react';
import Image from 'next/image';

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

const TrustIndicators = () => (
  <div className="mt-8 flex flex-wrap justify-center gap-4">
    {[
      { icon: Shield, text: 'Enterprise-grade security' },
      { icon: Clock, text: '99.9% Uptime SLA' },
      { icon: Star, text: '4.9/5 Customer rating' },
      { icon: Zap, text: 'Real-time updates' },
    ].map((item, index) => (
      <div key={index} className="bg-secondary/10 flex items-center gap-2 rounded-full px-4 py-2">
        <item.icon className="text-primary size-4" />
        <span className="text-sm font-medium">{item.text}</span>
      </div>
    ))}
  </div>
);

const StatCard = ({ label, value }: { label: string; value: string }) => (
  <Card className="bg-white/5 backdrop-blur-sm">
    <CardContent className="p-4">
      <div className="text-primary text-2xl font-bold">{value}</div>
      <div className="text-muted-foreground text-sm">{label}</div>
    </CardContent>
  </Card>
);

export default function Demo() {
  const [activeTab, setActiveTab] = useState('AI-Powered Customer Support');

  return (
    <section className="from-background to-background/80 bg-gradient-to-b px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <Badge className="mb-4" variant="secondary">
            Product Demo
          </Badge>
          <h2 className="mb-4 text-4xl font-bold tracking-tight">Experience the Future of CRM</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            See how Caresept transforms customer relationships with AI-powered intelligence
          </p>
        </div>

        <Tabs defaultValue={activeTab} className="space-y-8" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-1 gap-4 bg-transparent md:grid-cols-3">
            {features.map((feature) => (
              <TabsTrigger
                key={feature.title}
                value={feature.title}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-4 bg-muted-foreground/10 hover:bg-muted-foreground/20 font-semibold"
              >
                <div className="flex items-center gap-2">
                  <feature.icon className="size-5" />
                  <span>{feature.title}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {features.map((feature) => (
            <TabsContent key={feature.title} value={feature.title} className="space-y-8">
              <div className="grid items-start gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground text-lg">{feature.content}</p>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {feature.stats.map((stat, index) => (
                      <StatCard key={index} {...stat} />
                    ))}
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Key Benefits</h4>
                    <ul className="grid grid-cols-2 gap-3">
                      {feature.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <ArrowRight className="text-primary size-4" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="mt-4">
                    Schedule Demo
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </div>

                <div className="from-primary/10 to-primary/5 relative flex aspect-video items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br">
                  <div className="absolute inset-0 backdrop-blur-sm"></div>
                  <Image
                    src="/api/placeholder/800/600"
                    alt="Feature preview"
                    className="relative z-10 size-4/5 rounded-lg object-cover shadow-2xl"
                    width={400}
                    height={200}
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <TrustIndicators />
      </div>
    </section>
  );
}
