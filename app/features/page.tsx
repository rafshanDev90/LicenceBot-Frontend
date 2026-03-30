import { Metadata } from "next";
import { PageHeader } from "@/components/public/PageHeader";
import { FeaturesClient } from "@/components/public/FeaturesClient";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { PublicFooter } from "@/components/public/PublicFooter";
import { CTABanner } from "@/components/public/CTABanner";
import { Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Features | LicenceBot",
  description: "Explore the comprehensive features of LicenceBot — analytics, SEO tools, email marketing, live chat, licence management, and more.",
  alternates: {
    canonical: "https://licencebot.com/features",
  },
  openGraph: {
    title: "Features | LicenceBot",
    description: "Explore the comprehensive features of LicenceBot — analytics, SEO tools, email marketing, live chat, licence management, and more.",
    url: "https://licencebot.com/features",
    type: "website",
  },
};

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <PublicNavbar />
      <main className="flex-1">
        <PageHeader 
          title={<>One Platform, <span className="text-gradient">Infinite Possibilities</span></>}
          description="Everything digital merchants need — analytics, SEO, email marketing, live chat, licence management, and 18+ utility tools — all from a single dashboard."
          badge="Platform Features"
          badgeIcon={Layers}
        />
        <FeaturesClient />
        <CTABanner />
      </main>
      <PublicFooter />
    </div>
  );
}
