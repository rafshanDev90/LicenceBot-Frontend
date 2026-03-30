import { Metadata } from "next";
import { PageHeader } from "@/components/public/PageHeader";
import { DemoClient } from "@/components/public/DemoClient";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { PublicFooter } from "@/components/public/PublicFooter";
import { CTABanner } from "@/components/public/CTABanner";
import { PlayCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Interactive Demo | LicenceBot",
  description: "Explore all modules with real sample data. See how analytics, SEO, email marketing, and licence management work in action. No signup required.",
  alternates: {
    canonical: "https://licencebot.com/demo",
  },
  openGraph: {
    title: "Interactive Demo | LicenceBot",
    description: "Explore all modules with real sample data. See how analytics, SEO, email marketing, and licence management work in action. No signup required.",
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
