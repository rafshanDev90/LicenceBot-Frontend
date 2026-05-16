import { Metadata } from "next";
import { PageHeader } from "@/components/public/PageHeader";
import { HowItWorksClient } from "@/components/public/HowItWorksClient";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { PublicFooter } from "@/components/public/PublicFooter";
import { CTABanner } from "@/components/public/CTABanner";
import { Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Automated Licence Delivery How It Works Guide",
  description: "Automated Licence delivery how it works guide explains the order process, instant key delivery, and digital product system for fast automated licence delivery.",
  keywords: ["automated licence delivery", "how it works", "instant key delivery", "digital product delivery", "automated delivery guide"],
  alternates: {
    canonical: "https://licencebot.com/how-it-works",
  },
  openGraph: {
    title: "Automated Licence Delivery How It Works Guide",
    description: "Automated Licence delivery how it works guide explains the order process, instant key delivery, and digital product system for fast automated licence delivery.",
    url: "https://licencebot.com/how-it-works",
    type: "website",
  },
};

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col" style={{ backgroundColor: "#0b0f0e" }}>
      <PublicNavbar />
      <main className="flex-1 pt-20">
        <PageHeader
          title={
            <>
              From Zero to{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #2dd4bf, #10b981)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Automated Delivery
              </span>{" "}
              in Minutes
            </>
          }
          description="Connect your store, upload your keys, and let LicenceBot handle every delivery automatically. No coding required."
          badge="4 Simple Steps"
          badgeIcon={Zap}
        />
        <HowItWorksClient />
        <CTABanner />
      </main>
      <PublicFooter />
    </div>
  );
}