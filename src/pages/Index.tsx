import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import PanelSection from "@/components/PanelSection";
import ClosingSection from "@/components/ClosingSection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <PanelSection />
      <ClosingSection />
    </main>
  );
};

export default Index;
