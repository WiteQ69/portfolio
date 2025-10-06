import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'W S - Tworzę szybkie i piękne strony internetowe',
  description: 'Programista front-end/full-stack specjalizujący się w Next.js, React i TypeScript. Tworzę wydajne strony internetowe, które konwertują i zarabiają.',
  keywords: ['programista', 'web developer', 'Next.js', 'React', 'TypeScript', 'strony internetowe', 'sklepy internetowe'],
  authors: [{ name: 'W S' }],
  creator: 'W S',
  metadataBase: new URL('https://w-s.dev'),
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    
    title: 'W S - Web Developer',
    description: 'Tworzę szybkie i piękne strony internetowe, które zarabiają',
    siteName: 'W S',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'W S - Web Developer',
    description: 'Tworzę szybkie i piękne strony internetowe, które zarabiają',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
