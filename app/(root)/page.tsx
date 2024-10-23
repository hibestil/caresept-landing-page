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
import WorkflowBuilder from "@/components/workflow";


export default function Home() {
  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-center">
      <Hero />
      <Demo />
      <WorkflowBuilder />
      <TrustIndicators />
      <Connect />
      <Action />
      <FAQSection />
    </main>
  );
}
