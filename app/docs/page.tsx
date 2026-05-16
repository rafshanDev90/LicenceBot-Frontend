import { Metadata } from "next";
import { DocsClient } from "@/components/public/DocsClient";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { PublicFooter } from "@/components/public/PublicFooter";
import { CTABanner } from "@/components/public/CTABanner";

export const metadata: Metadata = {
  title: "Platform Setup Guide for Step by Step Configuration",
  description: "Platform setup guide helps you with step by step configuration, setup process, and mastering all features of the system easily.",
  keywords: ["platform setup guide", "configuration guide", "step by step setup", "licencebot guide", "platform documentation"],
  alternates: {
    canonical: "https://licencebot.com/docs",
  },
  openGraph: {
    title: "Platform Setup Guide for Step by Step Configuration",
    description: "Platform setup guide helps you with step by step configuration, setup process, and mastering all features of the system easily.",
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
