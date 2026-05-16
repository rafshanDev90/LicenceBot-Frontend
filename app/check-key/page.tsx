import { Metadata } from "next";
import { PageHeader } from "@/components/public/PageHeader";
import { CheckKeyClient } from "@/components/public/CheckKeyClient";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { PublicFooter } from "@/components/public/PublicFooter";
import { CTABanner } from "@/components/public/CTABanner";
import { KeyRound } from "lucide-react";

export const metadata: Metadata = {
  title: "Key Checker Tool for License Keys | LicenceBot",
  description: "Key Checker tool to verify license keys instantly. Validate, manage, and secure digital product keys with a fast and reliable system.",
  keywords: ["key checker", "license key verification", "product key checker", "digital key validation", "key checker tool"],
  alternates: {
    canonical: "https://licencebot.com/check-key",
  },
  openGraph: {
    title: "Key Checker Tool for License Keys | LicenceBot",
    description: "Key Checker tool to verify license keys instantly. Validate, manage, and secure digital product keys with a fast and reliable system.",
    url: "https://licencebot.com/check-key",
    type: "website",
  },
};

export default function CheckKeyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <PublicNavbar />
      <main className="flex-1">
        <PageHeader 
          title={<>Check Your <span className="text-gradient">Product Key</span></>}
          description="Instantly verify Microsoft product keys — check activation status, get CID, redeem keys, and verify Office 365 accounts for free."
          badge="Free Key Checker"
          badgeIcon={KeyRound}
        />
        <CheckKeyClient />
        <CTABanner />
      </main>
      <PublicFooter />
    </div>
  );
}
