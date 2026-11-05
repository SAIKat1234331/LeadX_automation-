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

import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { DemoProject } from './types';
import { COMPANY_INFO } from './data/content';
import { generateWhatsAppLink } from './utils/automation';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);
  const [selectedDemoProject, setSelectedDemoProject] = useState<DemoProject | null>(null);
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

  const handleConnectWhatsApp = (serviceOrContext?: string) => {
    const text = serviceOrContext
      ? `Hello Saikat, I would like to discuss ${serviceOrContext} with LEADX AUTOMATION.`
      : COMPANY_INFO.whatsappDefaultMsg;
    const url = generateWhatsAppLink(COMPANY_INFO.phone, text);
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
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
          onDiscussClick={() => handleConnectWhatsApp('an automation project')}
          onExploreClick={() => scrollToSection('services')}
        />

        <ValuePropsSection />

        <ServicesSection
          onSelectService={(serviceTitle) =>
            handleConnectWhatsApp(`automation for ${serviceTitle}`)
          }
        />

        <SolutionsSection
          onSelectSolution={(industry) =>
            handleConnectWhatsApp(`an industry workflow solution for ${industry}`)
          }
        />

        <HowItWorksSection />

        <PortfolioSection
          onOpenProjectModal={(proj) => setSelectedDemoProject(proj)}
        />

        <PricingSection
          onSelectPackage={(pkgName) =>
            handleConnectWhatsApp(`the ${pkgName} package`)
          }
        />

        <AboutSection />

        <FaqSection />
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
          handleConnectWhatsApp(`implementing ${category}`)
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
