'use client';

import Action from "@/components/action";
import CaresptBeam from "@/components/beam-connect";
import Connect from "@/components/connect";
import CTA from "@/components/cta";
import Demo from "@/components/demo";
import FAQSection from "@/components/faq";
import Features from "@/components/features";
import Hero from "@/components/hero";
import { Cloud } from "@/components/sphere";
import TrustIndicators from "@/components/trust";
import BentoFeatures, { BentoDemo } from "@/components/ui/bento";
import Chatbot from "@/components/ui/chatbot";
import Integration from "@/components/ui/integration";
import WorkflowBuilder from "@/components/workflow";


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Demo />
      <Chatbot />
      <WorkflowBuilder />
      <Integration />
      <BentoFeatures />
      <TrustIndicators />
      <Connect />
      <Action />
      <FAQSection />
    </main>
  );
}
