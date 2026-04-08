import { Navigation } from '@/components/Navigation';
import { SectionProgressIndicator } from '@/components/SectionProgressIndicator';
import { HeroSection } from '@/components/HeroSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { EducationSection } from '@/components/EducationSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { ContactSection } from '@/components/ContactSection';

const VIDEO_SRC = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

const Index = () => {
  return (
    <div className="relative">
      {/* Video Background — spans full page */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0 opacity-80"
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      <div className="relative z-10 w-full">
        <Navigation />
        
        <main className="relative">
          <HeroSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <CertificationsSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
};

export default Index;