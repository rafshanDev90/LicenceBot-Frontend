import { Metadata } from "next";
import { PageHeader } from "@/components/public/PageHeader";
import { DemoClient } from "@/components/public/DemoClient";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { PublicFooter } from "@/components/public/PublicFooter";
import { CTABanner } from "@/components/public/CTABanner";
import { PlayCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Interactive Demo of LicenceBot Platform",
  description: "Interactive demo of LicenceBot platform shows automated key delivery, license system integration, and digital product management in real time.",
  keywords: ["interactive demo", "licencebot platform", "key delivery demo", "license system integration", "digital product demo"],
  alternates: {
    canonical: "https://licencebot.com/demo",
  },
  openGraph: {
    title: "Interactive Demo of LicenceBot Platform",
    description: "Interactive demo of LicenceBot platform shows automated key delivery, license system integration, and digital product management in real time.",
    url: "https://licencebot.com/demo",
    type: "website",
  },
};

export default function DemoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <PublicNavbar />
      <main className="flex-1">
        <PageHeader 
          title={<>See LicenceBot <span className="text-gradient">In Action</span></>}
          description="Explore every module with real sample data — analytics, SEO, email marketing, live chat, key checker, and more. No signup required."
          badge="Interactive Demo"
          badgeIcon={PlayCircle}
        />
        <DemoClient />
        <CTABanner />
      </main>
      <PublicFooter />
    </div>
  );
}
