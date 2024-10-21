import CaresptBeam from "@/components/beam-connect";
import CTA from "@/components/cta";
import Demo from "@/components/demo";
import FAQSection from "@/components/faq";
import Features from "@/components/features";
import Hero from "@/components/hero";
import { Cloud } from "@/components/sphere";


export default function Home() {
  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-center">
      <Hero />
      <Features />
      <Cloud />
      <CaresptBeam />
      <Demo />
      <CTA />
      <FAQSection />
    </main>
  );
}
