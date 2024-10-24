'use client';

import Action from '@/components/action';
import Demo from '@/components/demo';
import FAQSection from '@/components/faq';
import Hero from '@/components/hero';
import TrustIndicators from '@/components/trust';
import BentoFeatures from '@/components/ui/bento';
import Chatbot from '@/components/ui/chatbot';
import GridCards from '@/components/ui/grid-cards';
import Integration from '@/components/ui/integration';
import WorkflowBuilder from '@/components/workflow';

export default function Home() {
  return (
    <main className="min-h-screen w-screen flex flex-col">
      <Hero />
      <Demo />
      <Chatbot />
      <WorkflowBuilder />
      <Integration />
      <GridCards />
      <TrustIndicators />
      <Action />
      <FAQSection />
    </main>
  );
}
