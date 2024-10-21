import CTA from "@/components/cta";
import Demo from "@/components/demo";
import FAQSection from "@/components/faq";
import Features from "@/components/features";
import Hero from "@/components/hero";


export default function Home() {
  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-center">
      <Hero />
      <Features />
      <Demo />
      <CTA />
      <FAQSection />
    </main>
  );
}
