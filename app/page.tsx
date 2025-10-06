"use client"

import { useState } from 'react';
import { useTheme } from 'next-themes';
import { ParticleBackground } from '@/components/particle-background';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { SkillsSection } from '@/components/sections/skills';
import { ProjectsSection } from '@/components/sections/projects';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { TimelineSection } from '@/components/sections/timeline';
import { ContactSection } from '@/components/sections/contact';
import { Terminal } from '@/components/terminal';
import { ThemeToggle } from '@/components/theme-toggle';
import { ProjectModal } from '@/components/modals/project-modal';
import { LighthouseModal } from '@/components/modals/lighthouse-modal';
import { ProposalModal } from '@/components/modals/proposal-modal';
import { Github, Linkedin } from 'lucide-react';
import { type TerminalContext } from '@/lib/terminal-commands';

export default function Home() {
  const [particleIntensity, setParticleIntensity] = useState(1);
  const [showGrid, setShowGrid] = useState(false);
  const [projectFilter, setProjectFilter] = useState<string | null>(null);
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [showLighthouse, setShowLighthouse] = useState(false);
  const [proposalClient, setProposalClient] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openModal = (type: string, data?: any) => {
    switch (type) {
      case 'project':
        setSelectedProject(data.slug);
        break;
      case 'lighthouse':
        setShowLighthouse(true);
        break;
      case 'proposal':
        setProposalClient(data.clientName);
        break;
    }
  };

  const filterProjects = (tag?: string) => {
    setProjectFilter(tag || null);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const fillContactForm = (email: string, message: string) => {
    setContactEmail(email);
    setContactMessage(message);
  };

  const toggleGrid = () => {
    setShowGrid(prev => !prev);
  };

  const terminalContext: TerminalContext = {
    scrollToSection,
    openModal,
    filterProjects,
    toggleTheme,
    setParticleIntensity,
    toggleGrid,
    fillContactForm
  };

  return (
    <main className="relative min-h-screen">
      <ParticleBackground intensity={particleIntensity} />

      {showGrid && (
        <div
          className="fixed inset-0 pointer-events-none z-50 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(110, 231, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(110, 231, 255, 0.3) 1px, transparent 1px)',
            backgroundSize: '8px 8px'
          }}
        />
      )}

      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">WS</span>
              <span className="text-sm text-muted-foreground hidden sm:inline">
                / portfolio
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm hover:text-accent transition-colors"
              >
                O mnie
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-sm hover:text-accent transition-colors"
              >
                Umiejętności
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-sm hover:text-accent transition-colors"
              >
                Projekty
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm hover:text-accent transition-colors"
              >
                Kontakt
              </button>
            </nav>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/wiktor-szyszka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/wiktor-szyszka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <div className="pt-16">
        <HeroSection />

        <section id="terminal" className="py-12 bg-secondary/30 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <Terminal context={terminalContext} />
          </div>
        </section>

        <AboutSection />
        <SkillsSection />
        <ProjectsSection
          activeFilter={projectFilter}
          onProjectOpen={(slug) => setSelectedProject(slug)}
        />
        <TestimonialsSection />
        <TimelineSection />
        <ContactSection
          prefillEmail={contactEmail}
          prefillMessage={contactMessage}
        />

        <footer className="py-12 border-t border-border bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <p className="text-sm text-muted-foreground">
                  © 2025 W S. Wszystkie prawa zastrzeżone.
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Zbudowane z Next.js, React, TypeScript & Tailwind CSS
                </p>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  ↑ Do góry
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {selectedProject && (
        <ProjectModal
          slug={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <LighthouseModal
        isOpen={showLighthouse}
        onClose={() => setShowLighthouse(false)}
      />

      {proposalClient && (
        <ProposalModal
          clientName={proposalClient}
          isOpen={!!proposalClient}
          onClose={() => setProposalClient(null)}
        />
      )}
    </main>
  );
}
