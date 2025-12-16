
import SafetyTrustSection from "@/components/landing-page/SafetyTrustSection";
import WhyChooseTravio from "@/components/landing-page/WhyChooseTravio";
import Hero from "@/components/landing-page/Hero";
import KeyFeatures from "@/components/landing-page/KeyFeatures";
import HowItWorks from "@/components/landing-page/HowItWorks";
import { Nav } from "@/components/landing-page/Nav";
import TravioFooter from "@/components/landing-page/Footer";
import ScrollTopButton from "@/components/landing-page/Scroll-To-Top";
import Community from "@/components/landing-page/Join-community";



export default function LandingPage() {
  return (
    <main>
      {/* <Nav /> */}
      <Hero />
      <KeyFeatures />
      <WhyChooseTravio />
      <HowItWorks />
      <SafetyTrustSection />
      <Community />
      {/* <TravioFooter /> */}
      <ScrollTopButton />
    </main>
  );
}
