import { Metadata } from "next";
import { PageHeader } from "@/components/public/PageHeader";
import { PricingClient } from "@/components/public/PricingClient";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { PublicFooter } from "@/components/public/PublicFooter";
import { CTABanner } from "@/components/public/CTABanner";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing | LicenceBot",
  description: "Simple, transparent pricing for digital merchants. Start with our 14-day free trial on any plan. No credit card required.",
  alternates: {
    canonical: "https://licencebot.com/pricing",
  },
  openGraph: {
    title: "Pricing | LicenceBot",
    description: "Simple, transparent pricing for digital merchants. Start with our 14-day free trial on any plan. No credit card required.",
    url: "https://licencebot.com/pricing",
    type: "website",
  },
};

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <PublicNavbar />
      <main className="flex-1">
        <PageHeader 
          title={<>Simple, Transparent <span className="text-gradient">Pricing</span></>}
          description="Start with a 14-day free trial of our Pro features. Upgrade or downgrade at any time as your business grows."
          badge="Flexible Plans"
          badgeIcon={Sparkles}
        />
        <PricingClient />
        <CTABanner />
      </main>
      <PublicFooter />
    </div>
  );
}
