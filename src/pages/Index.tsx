import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AILabSection from "@/components/AILabSection";
import ProjectsSection from "@/components/ProjectsSection";
import TimelineSection from "@/components/TimelineSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AILabSection />
      <ProjectsSection />
      <TimelineSection />
      <ExpertiseSection />
      <FooterSection />
    </div>
  );
};

export default Index;
