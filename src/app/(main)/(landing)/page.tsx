import { appConfig } from "@/app/app-config";
import { ComingSoon } from "@/app/(coming-soon)/coming-soon";
import { HeroSection } from "./_sections/hero";
import PricingSection from "./_sections/pricing";

export default function Home() {
  if (appConfig.mode === "comingSoon") {
    return <ComingSoon />;
  }

  return (
    <div>
      <HeroSection />
      <PricingSection />
    </div>
  );
}
