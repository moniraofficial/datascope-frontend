import FeatureHighlights from "@/components/landing/FeatureHighlights";
import HeroSection from "@/components/landing/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
  
      <main className="min-h-screen bg-gray-50">
        <HeroSection />
        <FeatureHighlights />
      </main>

  );
}
