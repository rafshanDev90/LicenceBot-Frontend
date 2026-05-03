import type { Metadata } from 'next';
import './globals.css';
import { GeistSans } from 'geist/font/sans'; // Import from the package
import { GeistMono } from 'geist/font/mono';
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: 'LicenceBot - E-commerce Intelligence Platform',
  description: 'Manage all your e-commerce stores in one place with LicenceBot. Auto license delivery, analytics dashboard, and enterprise-grade security.',
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
    description: 'Manage all your e-commerce stores in one place with LicenceBot. Auto license delivery, analytics dashboard, and enterprise-grade security.',
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
