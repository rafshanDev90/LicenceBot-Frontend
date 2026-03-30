import { Metadata } from "next";
import { DocsClient } from "@/components/public/DocsClient";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { PublicFooter } from "@/components/public/PublicFooter";
import { CTABanner } from "@/components/public/CTABanner";

export const metadata: Metadata = {
  title: "Documentation | LicenceBot",
  description: "Comprehensive guides, API documentation, and tutorials for setting up and scaling your automated license delivery with LicenceBot.",
  alternates: {
    canonical: "https://licencebot.com/docs",
  },
  openGraph: {
    title: "Documentation | LicenceBot",
    description: "Comprehensive guides, API documentation, and tutorials for setting up and scaling your automated license delivery with LicenceBot.",
    url: "https://licencebot.com/docs",
    type: "website",
  },
};

export default function DocumentationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <PublicNavbar />
      <main className="flex-1">
        <DocsClient />
        <CTABanner />
      </main>
      <PublicFooter />
    </div>
  );
}
