'use client';

import Action from '@/components/action';
import Demo from '@/components/demo';
import FAQSection from '@/components/faq';
import Features from '@/components/features';
import Hero from '@/components/hero';
import HowItWorks from '@/components/how-it-works';
import NewsLetter from '@/components/news-letter';
import TrustIndicators from '@/components/trust';
import BentoFeatures from '@/components/ui/bento';
import Chatbot from '@/components/ui/chatbot';
import GridCards from '@/components/ui/grid-cards';
import Integration from '@/components/ui/integration';
import WorkflowBuilder from '@/components/workflow';
import FeatureCards from './test/page';
import SecuritySection from '@/components/security';

export default function Home() {
  return (
    <main className="min-h-screen w-screen flex flex-col">
      <Hero />
      <FeatureCards />
      <HowItWorks />
      <WorkflowBuilder />
      <Integration />
      <Chatbot />
      {/* <GridCards /> */}
      <TrustIndicators />
      <SecuritySection />
      <Action />
      <FAQSection />
      <NewsLetter />
    </main>
  );
}
