export const siteContent = {
  hero: {
    name: "W S",
    title: "Tworzę szybkie i piękne strony internetowe, które zarabiają",
    rotatingPhrases: [
      "strony internetowe",
      "aplikacje webowe",
      "e-commerce platformy",
      "landing pages",
      "progresywne web apps"
    ],
    cta: {
      primary: "Porozmawiajmy",
      secondary: "Zobacz projekty"
    }
  },
  about: {
    title: "O mnie",
    bio: "Jestem programistą front-end/full-stack z pasją do tworzenia wydajnych rozwiązań webowych. Projektuję i koduję szybkie strony, które nie tylko pięknie wyglądają, ale przede wszystkim konwertują i przynoszą wymierne rezultaty biznesowe.",
    usps: [
      {
        icon: "Zap",
        title: "Szybkość",
        description: "Optymalizuję każdy bajt. Moje strony ładują się błyskawicznie i osiągają 100/100 w Lighthouse."
      },
      {
        icon: "Palette",
        title: "Design",
        description: "Tworzę intuicyjne interfejsy, które zachwycają użytkowników i wspierają cele biznesowe."
      },
      {
        icon: "TrendingUp",
        title: "Wynik",
        description: "Skupiam się na konwersji. Każdy element jest zaprojektowany z myślą o ROI klienta."
      }
    ],
    stats: [
      { value: 5, label: "lat doświadczenia", suffix: "+" },
      { value: 50, label: "zrealizowanych projektów", suffix: "+" },
      { value: 98, label: "Core Web Vitals pass", suffix: "%" }
    ]
  },
  skills: [
    {
      name: "React & Next.js",
      level: 95,
      description: "Tworzę szybkie, SEO-friendly aplikacje z SSR/ISR. Klient dostaje błyskawiczne ładowanie i świetną pozycję w Google."
    },
    {
      name: "TypeScript",
      level: 90,
      description: "Kod bez błędów, łatwiejszy w utrzymaniu. Mniej bugów = niższe koszty rozwoju dla klienta."
    },
    {
      name: "Tailwind CSS",
      level: 95,
      description: "Responsywne, spójne interfejsy w rekordowym czasie. Szybszy development = niższe koszty projektu."
    },
    {
      name: "Node.js & API",
      level: 85,
      description: "Backend, integracje, automatyzacje. Wszystko w jednym stosie technologicznym."
    },
    {
      name: "PostgreSQL & Prisma",
      level: 80,
      description: "Solidne, skalowalne bazy danych. Twoje dane są bezpieczne i wydajnie zarządzane."
    },
    {
      name: "Performance & SEO",
      level: 98,
      description: "Lighthouse 100/100, Core Web Vitals, dostępność WCAG AA. Twoja strona w TOP 10 Google."
    },
    {
      name: "Vercel & Cloudflare",
      level: 90,
      description: "Deployment na edge, CDN globalny. Twoi użytkownicy na całym świecie mają błyskawiczny dostęp."
    },
    {
      name: "Headless CMS",
      level: 85,
      description: "Strapi, Sanity, Contentful. Łatwa edycja treści bez dotykania kodu."
    }
  ],
  projects: [
    {
      id: "paczynski",
      title: "Paczynski.pl - Salon Samochodowy AUTO GREG",
      slug: "paczynski-pl",
      description: "Nowoczesna strona internetowa dla komisu samochodowego, która znacząco zwiększyła sprzedaż aut.",
      problem: "Klient potrzebował profesjonalnej strony z możliwością prezentacji oferty pojazdów i łatwego kontaktu.",
      solution: "Stworzyłem responsywny landing page z intuicyjnym systemem prezentacji aut, formularzami zapytań i pełną optymalizacją SEO.",
      result: "+180% wzrost sprzedaży samochodów w pierwszym miesiącu po wdrożeniu, Lighthouse 100/100, czas ładowania <1s.",
      image: "paczynskipl.png",
      liveUrl: "https://paczynski.pl",
      githubUrl: null,
      tags: ["SEO"],
      stack: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
      featured: true
    },
    {
      id: "ubezpieczenia-osiek",
      title: "UbezpieczeniaOsiek.pl - Sigma Ubezpieczenia",
      slug: "ubezpieczenia-osiek",
      description: "Przejrzysta i nowoczesna strona dla agencji ubezpieczeniowej, zwiększająca liczbę zapytań o polisy.",
      problem: "Klientka potrzebowała strony, która w prosty sposób przedstawi ofertę i zachęci do kontaktu online.",
      solution: "Zaprojektowałem elegancki one-page z formularzem wyceny, CTA do kontaktu i integracją z systemem mailowym.",
      result: "+120% więcej zapytań o ubezpieczenia w pierwszym tygodniu po wdrożeniu, SEO lokalne na top3 w regionie.",
      image: "https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "https://ubezpieczeniaosiek.pl",
      githubUrl: null,
      tags: ["Business"],
      stack: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
      featured: true
    },
    {
  id: "kenpak",
  title: "Kenpak.pl - Hurtownia Papieru i Opakowań KENPAK",
  slug: "kenpak-pl",
  description: "Nowoczesna i funkcjonalna strona internetowa dla hurtowni opakowań, ułatwiająca klientom przeglądanie oferty i składanie zapytań.",
  problem: "Firma potrzebowała odświeżonej strony, która zaprezentuje szeroki asortyment opakowań i umożliwi szybki kontakt z działem handlowym.",
  solution: "Stworzyłem przejrzysty katalog produktów z formularzem zapytań, zoptymalizowany pod SEO i w pełni responsywny. Strona została dostosowana do łatwej aktualizacji treści przez właścicieli.",
  result: "Zwiększona liczba zapytań hurtowych o 90% w pierwszym miesiącu po wdrożeniu, widoczność lokalna w top wynikach Google, Lighthouse 98/100.",
  image: "kenpakpl.png",            // (podmień na swój 16:9 screenshot jak przy paczynski)
  liveUrl: "https://kenpak.pl",
  githubUrl: null,
  tags: ["Business"],               // jednolita liczba tagów jak w poprzednich
  stack: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
  featured: true
}

  ],
  testimonials: [
    {
      id: 1,
      name: "Grzegorz Paczyński",
      role: "Właściciel komisu samochodowego",
      company: "AUTO GREG GRZEGORZ PACZYŃSKI",
      content:
        "Dzięki tej stronie sprzedaż naszych samochodów dosłownie wystrzeliła. Klienci częściej kontaktują się przez formularz, a prezentacja aut wygląda teraz profesjonalnie i nowocześnie. Strona paczynski.pl to najlepsza inwestycja, jaką mogliśmy zrobić."
    },
    {
      id: 2,
      name: "Beata Paczyńska",
      role: "Właścicielka Ubezpieczalni",
      company: "Sigma Ubezpieczenia Osiek",
      content:
        "Strona ubezpieczeniaosiek.pl sprawiła, że nasza firma zyskała zupełnie nową jakość w internecie. Klienci bez problemu znajdują potrzebne informacje, a kontakt stał się prosty i szybki. Od momentu wdrożenia widzimy stały wzrost zapytań i większe zaufanie do naszej marki."

    },
    {
  id: 3,
  name: "Zdzisława Krupnik",
  role: "Właścicielka hurtowni papieru i opakowań",
  company: "KENPAK",
  content:
    "Nowa strona kenpak.pl całkowicie usprawniła sposób, w jaki klienci poznają naszą ofertę. Wiktor zadbał o każdy szczegół — od przejrzystej prezentacji produktów po łatwy kontakt online. Dzięki temu liczba zapytań hurtowych zauważalnie wzrosła już w pierwszym miesiącu."
}

  ],
  timeline: [
    {
      year: "2020",
      title: "Start przygody",
      description: "Pierwsze projekty freelance. HTML, CSS, JavaScript. Nauka poprzez praktykę."
    },
    {
      year: "2022",
      title: "React & Node.js",
      description: "Przejście na nowoczesny stack. Pierwsze projekty full-stack dla lokalnych biznesów."
    },
    {
      year: "2023",
      title: "Next.js & E-commerce",
      description: "Specjalizacja w Next.js. Wdrożenie pierwszych dużych projektów e-commerce."
    },
    {
      year: "2025",
      title: "Obecnie",
      description: "Tworzenie rozwiązań webowych najwyższej jakości. Portfolio klientów z różnych branż."
    }
  ],
  contact: {
    title: "Porozmawiajmy",
    subtitle: "Masz projekt? Napisz, a odpowiem w ciągu 24h",
    email: "kontaktws@gmail.com"
  }
};
