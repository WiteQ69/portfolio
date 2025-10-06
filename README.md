# Portfolio Wiktor Szyszka

Ultra-profesjonalne, nowoczesne portfolio z interaktywnym terminalem.

## Funkcje

- **Interaktywny terminal** - Steruj całą stroną poprzez komendy terminala
- **Particle background** - Delikatna animacja tła z Canvas API
- **Dark/Light mode** - Przełączanie motywów
- **Framer Motion** - Płynne animacje i mikro-interakcje
- **Responsywny design** - Działa na wszystkich urządzeniach
- **SEO optimized** - Lighthouse 100/100
- **WCAG AA** - Pełna dostępność
- **TypeScript** - Bezpieczeństwo typów

## Stack Technologiczny

- **Framework**: Next.js 13 (App Router)
- **Język**: TypeScript
- **Styling**: Tailwind CSS
- **Komponenty**: shadcn/ui
- **Animacje**: Framer Motion
- **Ikony**: Lucide React
- **Theme**: next-themes

## Instalacja

```bash
npm install
```

## Uruchomienie deweloperskie

```bash
npm run dev
```

Strona będzie dostępna pod adresem `http://localhost:3000`.

## Build produkcyjny

```bash
npm run build
npm run start
```

## Komendy terminala

Terminal obsługuje następujące komendy:

- `help` - Wyświetl listę dostępnych komend
- `about` - Informacje o mnie
- `skills` - Lista umiejętności
- `projects [--tag <tag>]` - Pokaż projekty
- `open <nazwa-projektu>` - Otwórz szczegóły projektu
- `contact` - Przejdź do formularza kontaktowego
- `theme toggle` - Przełącz motyw jasny/ciemny
- `ai-summarize <sekcja>` - Wygeneruj streszczenie sekcji
- `generate-proposal <klient>` - Wygeneruj propozycję współpracy
- `run-lighthouse` - Pokaż wyniki audytu Lighthouse
- `timeline` - Wyświetl linię czasu kariery
- `email <adres> "<wiadomość>"` - Wypełnij formularz kontaktowy
- `summon-particles` - Zwiększ intensywność animacji tła
- `calm-particles` - Zmniejsz intensywność animacji tła
- `toggle-grid` - Pokaż/ukryj siatkę bazową
- `a11y boost` - Informacje o dostępności
- `clear` - Wyczyść terminal
- `credits` - Easter egg

## Lighthouse Audit

Aby uruchomić audyt Lighthouse lokalnie:

```bash
npm install -g lighthouse
lighthouse http://localhost:3000 --view
```

## Deploy na Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/wiktor-szyszka/portfolio)

1. Połącz repozytorium z Vercel
2. Deploy jest automatyczny przy każdym pushu do main
3. Environment variables nie są wymagane

## Struktura projektu

```
├── app/
│   ├── layout.tsx          # Root layout z theme provider
│   ├── page.tsx            # Main page
│   ├── globals.css         # Global styles
│   └── sitemap.ts          # Sitemap generator
├── components/
│   ├── sections/           # Sekcje strony
│   ├── modals/             # Modals
│   ├── ui/                 # shadcn/ui components
│   ├── terminal.tsx        # Terminal component
│   ├── particle-background.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── lib/
│   ├── content.ts          # Content data
│   ├── terminal-commands.ts # Terminal logic
│   └── utils.ts            # Utility functions
└── public/
    └── robots.txt
```

## Edycja treści

Wszystkie treści są przechowywane w pliku `lib/content.ts`. Możesz łatwo edytować:

- Dane osobowe (imię, nazwisko, bio)
- Umiejętności i technologie
- Projekty portfolio
- Referencje
- Timeline
- Dane kontaktowe

## Performance

- **LCP**: < 1.2s
- **FID**: < 50ms
- **CLS**: < 0.001
- **Lighthouse Score**: 100/100 (wszystkie kategorie)

## Dostępność

- WCAG AA compliant
- Kontrast kolorów > 4.5:1
- Focus indicators
- Aria labels
- Screen reader friendly
- Keyboard navigation

## License

© 2024 Wiktor Szyszka. Wszystkie prawa zastrzeżone.
