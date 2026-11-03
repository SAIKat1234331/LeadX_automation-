import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProjectModal } from './components/ProjectModal';
import { DeploymentGuideModal } from './components/DeploymentGuideModal';

import { HeroSection } from './sections/HeroSection';
import { ValuePropsSection } from './sections/ValuePropsSection';
import { ServicesSection } from './sections/ServicesSection';
import { SolutionsSection } from './sections/SolutionsSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { PortfolioSection } from './sections/PortfolioSection';
import { PricingSection } from './sections/PricingSection';
import { AboutSection } from './sections/AboutSection';
import { FaqSection } from './sections/FaqSection';
import { ContactSection } from './sections/ContactSection';

import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { DemoProject } from './types';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);
  const [selectedDemoProject, setSelectedDemoProject] = useState<DemoProject | null>(null);
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string>('');
  const [isDeployModalOpen, setIsDeployModalOpen] = useState<boolean>(false);

  // Synchronize browser history / path changes
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState(null, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContactWithService = (serviceName: string) => {
    setSelectedServiceForInquiry(serviceName);

    // If currently on legal page or 404, return to home first
    if (currentPath !== '/') {
      navigateTo('/');
      setTimeout(() => {
        const contactEl = document.getElementById('contact');
        if (contactEl) {
          contactEl.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    if (currentPath !== '/') {
      navigateTo('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Dedicated Route Views
  if (currentPath === '/privacy') {
    return (
      <div className="min-h-screen bg-[#0B0B0B] text-white flex flex-col justify-between">
        <Navbar onNavigate={scrollToSection} />
        <main>
          <PrivacyPolicyPage onBackToHome={() => navigateTo('/')} />
        </main>
        <Footer
          onOpenPrivacy={() => navigateTo('/privacy')}
          onOpenTerms={() => navigateTo('/terms')}
          onNavigate={scrollToSection}
        />
        <FloatingWhatsApp />
      </div>
    );
  }

  if (currentPath === '/terms') {
    return (
      <div className="min-h-screen bg-[#0B0B0B] text-white flex flex-col justify-between">
        <Navbar onNavigate={scrollToSection} />
        <main>
          <TermsPage onBackToHome={() => navigateTo('/')} />
        </main>
        <Footer
          onOpenPrivacy={() => navigateTo('/privacy')}
          onOpenTerms={() => navigateTo('/terms')}
          onNavigate={scrollToSection}
        />
        <FloatingWhatsApp />
      </div>
    );
  }

  // Handle any other unrecognized path except '/'
  if (currentPath !== '/' && currentPath !== '') {
    return (
      <NotFoundPage onBackToHome={() => navigateTo('/')} />
    );
  }

  // Default Landing Page View
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white flex flex-col selection:bg-[#00FF88] selection:text-[#0B0B0B]">
      {/* Sticky Premium Navbar */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Single Page Sections */}
      <main className="flex-grow">
        <HeroSection
          onDiscussClick={() => scrollToSection('contact')}
          onExploreClick={() => scrollToSection('services')}
        />

        <ValuePropsSection />

        <ServicesSection
          onSelectService={(serviceTitle) =>
            scrollToContactWithService(serviceTitle)
          }
        />

        <SolutionsSection
          onSelectSolution={(industry) =>
            scrollToContactWithService(`Industry Workflow: ${industry}`)
          }
        />

        <HowItWorksSection />

        <PortfolioSection
          onOpenProjectModal={(proj) => setSelectedDemoProject(proj)}
        />

        <PricingSection
          onSelectPackage={(pkgName) =>
            scrollToContactWithService(`Package: ${pkgName}`)
          }
        />

        <AboutSection />

        <FaqSection />

        <ContactSection initialService={selectedServiceForInquiry} />
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onOpenPrivacy={() => navigateTo('/privacy')}
        onOpenTerms={() => navigateTo('/terms')}
        onNavigate={scrollToSection}
      />

      {/* Floating WhatsApp Contact CTA */}
      <FloatingWhatsApp />

      {/* Interactive Project Details & Simulation Modal */}
      <ProjectModal
        project={selectedDemoProject}
        onClose={() => setSelectedDemoProject(null)}
        onSelectForInquiry={(category) =>
          scrollToContactWithService(category)
        }
      />

      {/* Deployment Instructions Modal for Beginners */}
      <DeploymentGuideModal
        isOpen={isDeployModalOpen}
        onClose={() => setIsDeployModalOpen(false)}
      />
    </div>
  );
}
