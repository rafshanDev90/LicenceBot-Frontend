import { Metadata } from "next";
import { PageHeader } from "@/components/public/PageHeader";
import { IntegrationsClient } from "@/components/public/IntegrationsClient";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { PublicFooter } from "@/components/public/PublicFooter";
import { CTABanner } from "@/components/public/CTABanner";
import { Network } from "lucide-react";

export const metadata: Metadata = {
  title: "Integrations | LicenceBot",
  description: "Seamlessly integrate LicenceBot with your e-commerce platforms, messaging apps, analytics tools, and custom workflows using our APIs and Webhooks.",
  alternates: {
    canonical: "https://licencebot.com/integrations",
  },
  openGraph: {
    title: "Integrations | LicenceBot",
    description: "Seamlessly integrate LicenceBot with your e-commerce platforms, messaging apps, analytics tools, and custom workflows using our APIs and Webhooks.",
    url: "https://licencebot.com/integrations",
    type: "website",
  },
};

export default function IntegrationsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <PublicNavbar />
      <main className="flex-1">
        <PageHeader 
          title={<>Connect to <span className="text-gradient">Everything You Use</span></>}
          description="Seamlessly integrate LicenceBot with your e-commerce platforms, messaging apps, analytics tools, and custom workflows."
          badge="Integrations"
          badgeIcon={Network}
        />
        <IntegrationsClient />
        <CTABanner />
      </main>
      <PublicFooter />
    </div>
  );
}
