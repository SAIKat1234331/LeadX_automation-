import React, { useState, useEffect } from 'react';
import { LxLogo } from './LxLogo';
import { Menu, X, ArrowRight, MessageSquareCode } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section scroll spy
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    setMobileMenuOpen(false);

    if (onNavigate) {
      onNavigate(targetId);
    }

    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const offsetTop = targetEl.offsetTop - 80;
      window.scrollTo({
        top: offsetTop >= 0 ? offsetTop : 0,
        behavior: 'smooth',
      });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0B]/85 backdrop-blur-md border-b border-[#262626]/80 py-3.5 shadow-2xl shadow-black/50'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF88] rounded-lg"
            aria-label="LEADX AUTOMATION Home"
          >
            <LxLogo size={38} />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[#121212]/80 border border-[#262626] backdrop-blur-sm"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-[#00FF88] bg-[#00FF88]/10 font-semibold'
                      : 'text-[#A1A1AA] hover:text-white hover:bg-white/5'
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF88]`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00FF88]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Primary Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00FF88] text-[#0B0B0B] font-semibold text-xs lg:text-sm transition-all duration-200 hover:bg-[#00e077] hover:shadow-[0_0_20px_rgba(0,255,136,0.25)] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="px-3 py-1.5 rounded-md bg-[#00FF88] text-[#0B0B0B] font-semibold text-xs"
            >
              Discuss
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#121212] border border-[#262626] text-[#A1A1AA] hover:text-white hover:border-[#00FF88]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF88]"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 px-4 pb-6 pt-2 bg-[#0B0B0B]/95 backdrop-blur-xl border-b border-[#262626] animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'text-[#00FF88] bg-[#00FF88]/10 font-semibold border-l-2 border-[#00FF88]'
                      : 'text-[#A1A1AA] hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88]" />}
                </a>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-[#262626] flex flex-col gap-2.5">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#00FF88] text-[#0B0B0B] font-semibold text-sm hover:bg-[#00e077]"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-center text-[11px] text-[#A1A1AA]">
              West Bengal, India • saikatpatra2179@gmail.com
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
