'use client';

import Action from '@/components/action';
import FAQSection from '@/components/faq';
import Hero from '@/components/hero';
import HowItWorks from '@/components/how-it-works';
import NewsLetter from '@/components/news-letter';
import Chatbot from '@/components/ui/chatbot';
import Integration from '@/components/ui/integration';
import FeatureCards from './test/page';
import SecuritySection from '@/components/security';
import { TrustIndicators } from '@/components/trust';

export default function Home() {
  return (
    <main className="min-h-screen w-screen flex flex-col">
      <Hero />
      <FeatureCards />
      <HowItWorks />
      <Integration />
      <Chatbot />
      <TrustIndicators />
      <SecuritySection />
      <Action />
      <FAQSection />
      <NewsLetter />
    </main>
  );
}
