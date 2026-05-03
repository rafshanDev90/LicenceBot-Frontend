import { Metadata } from "next";
import { HeroSection } from "@/components/public/HeroSection";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { PublicFooter } from "@/components/public/PublicFooter";
import { TrustedBySection } from "@/components/public/TrustedBySection";
import { HowItWorksMini } from "@/components/public/HowItWorksMini";
import { PlatformOverview } from "@/components/public/PlatformOverview";
import { IntegrationsStrip } from "@/components/public/IntegrationsStrip";
import { StatsBar } from "@/components/public/StatsBar";
import { TestimonialsSection } from "@/components/public/TestimonialsSection";
import { PricingTeaser } from "@/components/public/PricingTeaser";
import { FAQSection } from "@/components/public/FAQSection";
import { CTABanner } from "@/components/public/CTABanner";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "LicenceBot - E-commerce Intelligence Platform",
  description: "Manage all your e-commerce stores in one place with LicenceBot.",
  alternates: {
    canonical: "https://licencebot.com",
  },
  openGraph: {
    title: "LicenceBot - E-commerce Intelligence Platform",
    description: "Manage all your e-commerce stores in one place with LicenceBot. Auto license delivery, analytics dashboard, and enterprise-grade security.",
    url: "https://licencebot.com",
    siteName: "LicenceBot",
    images: [
      {
        url: "https://licencebot.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LicenceBot Platform Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'LicenceBot',
    url: 'https://licencebot.com',
    description: 'Manage all your e-commerce stores in one place with LicenceBot. Auto license delivery, analytics dashboard, and enterprise-grade security.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://licencebot.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <JsonLd data={websiteJsonLd} />
      <div className="flex min-h-screen flex-col pt-20">
        <PublicNavbar />
        <main className="flex-1">
          <HeroSection />
          <TrustedBySection />
          <HowItWorksMini />
          <PlatformOverview />
          <IntegrationsStrip />
          <StatsBar />
          <TestimonialsSection />
          <PricingTeaser />
          <FAQSection />
          <CTABanner />
        </main>
        <PublicFooter />
      </div>
    </>
  );
}
