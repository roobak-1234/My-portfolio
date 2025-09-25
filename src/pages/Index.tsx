import { Navigation } from '@/components/Navigation';
import { SectionProgressIndicator } from '@/components/SectionProgressIndicator';
import { HeroSection } from '@/components/HeroSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { EducationSection } from '@/components/EducationSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  return (
    <>
      <Navigation />
      <SectionProgressIndicator />
      
      <main className="relative">
        <HeroSection />
        <div className="bg-muted/30">
          <SkillsSection />
        </div>
        <ExperienceSection />
        <div className="bg-muted/30">
          <ProjectsSection />
        </div>
        <EducationSection />
        <div className="bg-muted/30">
          <CertificationsSection />
        </div>
        <ContactSection />
      </main>
    </>
  );
};

export default Index;