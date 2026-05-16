import type { Metadata } from 'next';
import './globals.css';
import { GeistSans } from 'geist/font/sans'; // Import from the package
import { GeistMono } from 'geist/font/mono';
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: 'LicenceBot E-commerce Platform for Automated Key Delivery',
  description: 'LicenceBot is an e-commerce intelligence platform for automated key delivery, sales, and secure license management.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LicenceBot',
    url: 'https://licencebot.com',
    logo: 'https://licencebot.com/logo.png',
    description: 'LicenceBot is an e-commerce intelligence platform for automated key delivery, sales, and secure license management.',
    sameAs: [
      'https://t.me/Licencebotadmin',
      'https://www.facebook.com/licencebot/',
      'https://github.com/TICLTD/LicenceBot-Frontend-2.0',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-800-LICENCE',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
  };

  return (
    // Add "dark" to the className string here
    <html lang="en" className={cn("dark antialiased", GeistSans.variable, GeistMono.variable)}>
      <head>
        <JsonLd data={organizationJsonLd} />
      </head>
      <body className="min-h-screen bg-background font-sans">
        {children}
      </body>
    </html>
  )
}
