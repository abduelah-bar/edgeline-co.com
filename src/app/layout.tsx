import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { siteMetadata } from '@/lib/seo';
import { Lexend } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import "yet-another-react-lightbox/styles.css";

export const metadata: Metadata = siteMetadata;

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ELC Company (Edge Line)',
    alternateName: ['ELC', 'Edge Line', 'ELC Company'],
    url: 'https://edgeline-co.com',
    logo: 'https://i.imgur.com/6Y7gfdU.png',
    image: 'https://i.imgur.com/6Y7gfdU.png',
    description: 'Leading construction, interior design, and turnkey project management company in Riyadh, Saudi Arabia. We deliver high-end, custom projects to international standards.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+966-55-502-0763',
      contactType: 'customer service',
      areaServed: 'SA',
      availableLanguage: ['en', 'Arabic'],
    },
    sameAs: [
      'https://www.instagram.com/elc_contracting?igsh=cmQyNTBzNGFyZzUw',
      'https://www.tiktok.com/@elc_company?_r=1&_t=ZS-93tJKvhRmTJ',
      'https://www.edgeline-co.com'
    ],
  };

  const websiteStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ELC Company (Edge Line)',
    url: 'https://edgeline-co.com',
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />
      </head>
      <body className={`font-body antialiased ${lexend.variable}`}>
        <NextTopLoader />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
