import AboutSection from "./components/AboutSection";
import ComposerArrangement from "./components/ComposerArrangement";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import JourneySection from "./components/JourneySection";
import ProjectTracks from "./components/ProjectTracks";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import StudioSection from "./components/StudioSection";
import ThemeSettings from "./components/ThemeSettings";
import {
  education,
  experience,
  projects,
  skillGroups,
} from "./data/portfolio";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#10110f] text-[#f4f2ec]">
      <SiteHeader />
      <HeroSection />
      <ComposerArrangement />
      <ProjectTracks projects={projects} skillGroups={skillGroups} />
      <StudioSection />
      <JourneySection experience={experience} education={education} />
      <AboutSection />
      <ContactSection />
      <SiteFooter />
      <ThemeSettings />
    </main>
  );
}
