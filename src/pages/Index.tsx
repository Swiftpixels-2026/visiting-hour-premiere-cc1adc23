import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FilmmakerSection from "@/components/FilmmakerSection";
import ExperienceSection from "@/components/ExperienceSection";
import PanelSection from "@/components/PanelSection";
import SupportSection from "@/components/SupportSection";
import RSVPSection from "@/components/RSVPSection";
import ClosingSection from "@/components/ClosingSection";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <FilmmakerSection />
      <SectionDivider />
      <ExperienceSection />
      <SectionDivider />
      <PanelSection />
      <SectionDivider />
      <SupportSection />
      <SectionDivider />
      <RSVPSection />
      <SectionDivider />
      <ClosingSection />
    </main>
  );
};

export default Index;
