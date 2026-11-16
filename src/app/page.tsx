import CtaBanner from "@/components/landing/CtaBanner";
import FeatureHighlights from "@/components/landing/FeatureHighlights";
import HeroSection from "@/components/landing/HeroSection";
import SolutionShowcase from "@/components/landing/SolutionShowcase";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import TrustedOrganizations from "@/components/landing/TrustedOrganizations";
import Image from "next/image";

export default function Home() {
  return (
  
      <main className="min-h-screen bg-gray-50">
        <HeroSection />
        <FeatureHighlights />
        <SolutionShowcase />
        <TrustedOrganizations />
        <TestimonialsSection />
        <CtaBanner />
      </main>

  );
}
