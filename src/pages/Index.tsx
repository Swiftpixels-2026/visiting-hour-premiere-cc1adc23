import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FilmmakerSection from "@/components/FilmmakerSection";
import ExperienceSection from "@/components/ExperienceSection";
import PanelSection from "@/components/PanelSection";
import RSVPSection from "@/components/RSVPSection";
import ClosingSection from "@/components/ClosingSection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <AboutSection />
      <FilmmakerSection />
      <ExperienceSection />
      <PanelSection />
      <RSVPSection />
      <ClosingSection />
    </main>
  );
};

export default Index;
