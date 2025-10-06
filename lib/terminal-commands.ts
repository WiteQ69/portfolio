export interface TerminalCommand {
  name: string;
  description: string;
  aliases?: string[];
  execute: (args: string[], context: TerminalContext) => TerminalOutput;
}

export interface TerminalContext {
  scrollToSection: (id: string) => void;
  openModal: (type: string, data?: any) => void;
  filterProjects: (tag?: string) => void;
  toggleTheme: () => void;
  setParticleIntensity: (intensity: number) => void;
  toggleGrid: () => void;
  fillContactForm: (email: string, message: string) => void;
}

export interface TerminalOutput {
  type: 'success' | 'error' | 'info' | 'command';
  content: string | React.ReactNode;
  delay?: number;
}

export const createTerminalCommands = (context: TerminalContext): TerminalCommand[] => [
  {
    name: 'help',
    description: 'Wyświetl listę dostępnych komend',
    execute: () => ({
      type: 'info',
      content: `Dostępne komendy:

  help                          - Wyświetl tę pomoc
  about                         - Informacje o mnie
  skills                        - Lista umiejętności
  projects [--tag <tag>]        - Pokaż projekty (opcjonalnie filtruj po tagu)
  open <nazwa-projektu>         - Otwórz szczegóły projektu
  contact                       - Przejdź do formularza kontaktowego
  theme toggle                  - Przełącz motyw jasny/ciemny
  ai-summarize <sekcja>         - Wygeneruj streszczenie sekcji
  generate-proposal <klient>    - Wygeneruj propozycję współpracy
  run-lighthouse                - Pokaż wyniki audytu Lighthouse
  timeline                      - Wyświetl linię czasu kariery
  email <adres> "<wiadomość>"   - Wypełnij formularz kontaktowy
  summon-particles              - Zwiększ intensywność animacji tła
  calm-particles                - Zmniejsz intensywność animacji tła
  toggle-grid                   - Pokaż/ukryj siatkę bazową
  a11y boost                    - Przełącz tryb wysokiego kontrastu
  clear                         - Wyczyść terminal
  credits                       - Easter egg 🥚

Wskazówka: Użyj TAB do autouzupełniania, ↑/↓ do historii komend`
    })
  },
  {
    name: 'about',
    description: 'Wyświetl informacje o mnie',
    execute: () => {
      context.scrollToSection('about');
      return {
        type: 'success',
        content: 'Przewijam do sekcji "O mnie"...'
      };
    }
  },
  {
    name: 'skills',
    description: 'Lista umiejętności i technologii',
    execute: () => {
      context.scrollToSection('skills');
      return {
        type: 'success',
        content: 'Ładuję umiejętności...'
      };
    }
  },
  {
    name: 'projects',
    description: 'Wyświetl portfolio projektów',
    execute: (args) => {
      const tagIndex = args.indexOf('--tag');
      if (tagIndex !== -1 && args[tagIndex + 1]) {
        const tag = args[tagIndex + 1];
        context.filterProjects(tag);
        return {
          type: 'success',
          content: `Filtruję projekty po tagu: ${tag}`
        };
      }
      context.scrollToSection('projects');
      context.filterProjects();
      return {
        type: 'success',
        content: 'Wyświetlam wszystkie projekty...'
      };
    }
  },
  {
    name: 'open',
    description: 'Otwórz szczegóły projektu',
    execute: (args) => {
      if (args.length === 0) {
        return {
          type: 'error',
          content: 'Błąd: Podaj nazwę projektu. Użycie: open <nazwa-projektu>'
        };
      }
      const projectSlug = args.join('-').toLowerCase();
      context.openModal('project', { slug: projectSlug });
      return {
        type: 'success',
        content: `Otwieram projekt: ${args.join(' ')}...`
      };
    }
  },
  {
    name: 'contact',
    description: 'Przejdź do sekcji kontaktowej',
    execute: () => {
      context.scrollToSection('contact');
      return {
        type: 'success',
        content: 'Przewijam do formularza kontaktowego...'
      };
    }
  },
  {
    name: 'theme',
    description: 'Zarządzaj motywem',
    execute: (args) => {
      if (args[0] === 'toggle') {
        context.toggleTheme();
        return {
          type: 'success',
          content: 'Przełączam motyw...'
        };
      }
      return {
        type: 'error',
        content: 'Użycie: theme toggle'
      };
    }
  },
  {
    name: 'ai-summarize',
    description: 'Wygeneruj streszczenie sekcji',
    execute: (args) => {
      if (args.length === 0) {
        return {
          type: 'error',
          content: 'Błąd: Podaj nazwę sekcji. Dostępne: about, skills, projects, timeline'
        };
      }
      const section = args[0].toLowerCase();
      const summaries: Record<string, string> = {
        about: '📊 Analiza sekcji "O mnie":\n\n✓ 5+ lat doświadczenia w web development\n✓ Specjalizacja: Next.js, React, TypeScript\n✓ Fokus na wydajność (Lighthouse 100/100)\n✓ 50+ zrealizowanych projektów\n✓ 98% wskaźnik Core Web Vitals\n\nKluczowe kompetencje: Szybkość, Design, ROI',
        skills: '🔧 Analiza stosu technologicznego:\n\n✓ Frontend: React, Next.js, TypeScript (95%)\n✓ Styling: Tailwind CSS (95%)\n✓ Backend: Node.js, API Design (85%)\n✓ Bazy danych: PostgreSQL, Prisma (80%)\n✓ Performance & SEO: 98% expertise\n✓ Deployment: Vercel, Cloudflare (90%)\n\nWszystkie technologie wybrane z myślą o szybkości i skalowalności.',
        projects: '💼 Analiza portfolio:\n\n✓ 6 projektów w różnych branżach\n✓ Średni wzrost konwersji: +120%\n✓ Wszystkie projekty: Lighthouse 95+\n✓ Technologie: Next.js, React, TypeScript\n✓ Od landing pages po full-stack apps\n\nCase studies dostępne dla kluczowych projektów.',
        timeline: '📅 Ścieżka kariery:\n\n2019: Start (HTML/CSS/JS)\n2020: React & Node.js\n2021: Next.js & E-commerce\n2022: Enterprise & Startupy\n2023: Performance & Scale\n2024: Portfolio klientów premium\n\nStały rozwój kompetencji i jakości projektów.'
      };

      const summary = summaries[section];
      if (!summary) {
        return {
          type: 'error',
          content: `Nie znaleziono sekcji: ${section}`
        };
      }

      return {
        type: 'info',
        content: `Generuję streszczenie AI...\n\n${summary}`,
        delay: 1000
      };
    }
  },
  {
    name: 'generate-proposal',
    description: 'Wygeneruj propozycję współpracy',
    execute: (args) => {
      if (args.length === 0) {
        return {
          type: 'error',
          content: 'Błąd: Podaj nazwę klienta. Użycie: generate-proposal <nazwa-klienta>'
        };
      }
      const clientName = args.join(' ');
      context.openModal('proposal', { clientName });
      return {
        type: 'success',
        content: `Generuję propozycję dla: ${clientName}...\n\nOtwieranie podglądu dokumentu...`
      };
    }
  },
  {
    name: 'run-lighthouse',
    description: 'Wyświetl wyniki audytu Lighthouse',
    execute: () => {
      context.openModal('lighthouse');
      return {
        type: 'success',
        content: 'Uruchamiam audyt Lighthouse...\n\n⚡ Testowanie wydajności...\n🎨 Sprawdzanie dostępności...\n🔍 Analiza SEO...\n✅ Dobre praktyki...'
      };
    }
  },
  {
    name: 'timeline',
    description: 'Wyświetl linię czasu',
    execute: () => {
      context.scrollToSection('timeline');
      return {
        type: 'success',
        content: 'Ładuję linię czasu kariery...'
      };
    }
  },
  {
    name: 'email',
    description: 'Wypełnij formularz kontaktowy',
    execute: (args) => {
      if (args.length < 2) {
        return {
          type: 'error',
          content: 'Błąd: Użycie: email <adres> "<wiadomość>"'
        };
      }
      const email = args[0];
      const message = args.slice(1).join(' ').replace(/['"]/g, '');

      if (!email.includes('@')) {
        return {
          type: 'error',
          content: 'Błąd: Nieprawidłowy adres email'
        };
      }

      context.fillContactForm(email, message);
      context.scrollToSection('contact');
      return {
        type: 'success',
        content: `Wypełniam formularz...\n\nEmail: ${email}\nWiadomość: ${message}\n\nPrzewija do formularza kontaktowego...`
      };
    }
  },
  {
    name: 'summon-particles',
    description: 'Zwiększ intensywność animacji tła',
    execute: () => {
      context.setParticleIntensity(2);
      return {
        type: 'success',
        content: '✨ Zwiększam intensywność cząsteczek...\n\n⚠️ Uwaga: Może wpłynąć na wydajność na słabszych urządzeniach'
      };
    }
  },
  {
    name: 'calm-particles',
    description: 'Zmniejsz intensywność animacji tła',
    execute: () => {
      context.setParticleIntensity(0.5);
      return {
        type: 'success',
        content: '😌 Uspokajam cząsteczki...\n\nAnimacje tła zostały ograniczone'
      };
    }
  },
  {
    name: 'toggle-grid',
    description: 'Pokaż/ukryj siatkę bazową',
    execute: () => {
      context.toggleGrid();
      return {
        type: 'success',
        content: 'Przełączam widoczność siatki bazowej...'
      };
    }
  },
  {
    name: 'a11y',
    description: 'Tryb wysokiego kontrastu',
    execute: (args) => {
      if (args[0] === 'boost') {
        return {
          type: 'info',
          content: '♿ Tryb wysokiego kontrastu\n\nDziękuję za zainteresowanie dostępnością!\nStrona jest już zoptymalizowana pod kątem WCAG AA:\n\n✓ Kontrast kolorów: > 4.5:1\n✓ Focus indicators\n✓ Aria labels\n✓ Nawigacja klawiaturą\n✓ Screen reader friendly\n\nMożesz użyć preferencji systemowych dla jeszcze lepszego kontrastu.'
        };
      }
      return {
        type: 'error',
        content: 'Użycie: a11y boost'
      };
    }
  },
  {
    name: 'clear',
    description: 'Wyczyść terminal',
    execute: () => ({
      type: 'command',
      content: 'CLEAR'
    })
  },
  {
    name: 'credits',
    description: 'Easter egg',
    execute: () => ({
      type: 'info',
      content: `
╔══════════════════════════════════════════╗
║   🚀 Wiktor Szyszka Portfolio v1.0      ║
╠══════════════════════════════════════════╣
║                                          ║
║   Zaprojektowane i zakodowane przez:     ║
║   Wiktor Szyszka                         ║
║                                          ║
║   Tech Stack:                            ║
║   • Next.js 13                           ║
║   • React 18                             ║
║   • TypeScript                           ║
║   • Tailwind CSS                         ║
║   • Framer Motion                        ║
║   • shadcn/ui                            ║
║                                          ║
║   "Code is poetry" ✨                    ║
║                                          ║
╚══════════════════════════════════════════╝

Dzięki za eksplorację terminala! 🎉
      `
    })
  }
];

export const getCommandSuggestions = (input: string, commands: TerminalCommand[]): string[] => {
  if (!input) return [];

  const lowerInput = input.toLowerCase();
  return commands
    .filter(cmd =>
      cmd.name.toLowerCase().startsWith(lowerInput) ||
      cmd.aliases?.some(alias => alias.toLowerCase().startsWith(lowerInput))
    )
    .map(cmd => cmd.name)
    .slice(0, 5);
};
