import HowItWorks from "@/components/landing-page/HowItWorks";

import SafetyTrustSection from "@/components/landing-page/SafetyTrustSection";
import WhyChooseTravio from "@/components/landing-page/WhyChooseTravio";


import Hero from "@/components/landing-page/Hero";
import KeyFeatures from "@/components/landing-page/KeyFeatures";


export default function LandingPage() {
  return (
    <main>
      <Hero />
      <KeyFeatures />
      <WhyChooseTravio />
      <HowItWorks />
      <SafetyTrustSection />

    </main>
  );
}
