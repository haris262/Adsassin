import { HeroSection } from "./components/hero-section";
import { LeadFormSection } from "./components/lead-form-section";
import { PainSection } from "./components/pain-section";
import { PositioningSection } from "./components/positioning-section";
import { ApproachSection } from "./components/approach-section";
import { ResponsibilitySection } from "./components/responsibility-section";
import { PhilosophySection } from "./components/philosophy-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { FinalCtaSection } from "./components/final-cta-section";
import { VideoSection } from "./components/video-section";

export default function MainComponent() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <HeroSection />
      <PainSection />
      <PositioningSection />
      <ApproachSection />
      <ResponsibilitySection />
      <PhilosophySection />
      <TestimonialsSection />
      <VideoSection />
      <FinalCtaSection />
    </main>
  );
}
