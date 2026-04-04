import { Metadata } from "next";
import { PageHeader } from "@/components/public/PageHeader";
import { HowItWorksClient } from "@/components/public/HowItWorksClient";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { PublicFooter } from "@/components/public/PublicFooter";
import { CTABanner } from "@/components/public/CTABanner";
import { Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works | LicenceBot",
  description: "Learn how to automate your digital product delivery in 4 simple steps. Connect your store, fund your wallet, upload keys, and let LicenceBot handle the rest.",
  alternates: {
    canonical: "https://licencebot.com/how-it-works",
  },
  openGraph: {
    title: "How It Works | LicenceBot",
    description: "Learn how to automate your digital product delivery in 4 simple steps. Connect your store, fund your wallet, upload keys, and let LicenceBot handle the rest.",
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