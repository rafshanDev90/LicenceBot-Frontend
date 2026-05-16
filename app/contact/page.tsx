import { Metadata } from "next";
import { PageHeader } from "@/components/public/PageHeader";
import { ContactClient } from "@/components/public/ContactClient";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { PublicFooter } from "@/components/public/PublicFooter";
import { CTABanner } from "@/components/public/CTABanner";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Get in Touch for Support and Assistance",
  description: "Get in touch for support and assistance. Send your message and get a response within 24 hours for any questions or help you need.",
  keywords: ["contact support", "get in touch", "customer assistance", "licencebot help", "support contact"],
  alternates: {
    canonical: "https://licencebot.com/contact",
  },
  openGraph: {
    title: "Get in Touch for Support and Assistance",
    description: "Get in touch for support and assistance. Send your message and get a response within 24 hours for any questions or help you need.",
    url: "https://licencebot.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <PublicNavbar />
      <main className="flex-1">
        <PageHeader 
          title={<>Get in <span className="text-gradient">Touch</span></>}
          description="Have a question? We'd love to hear from you. Send us a message and we'll get back to you within 24 hours."
          badge="Contact Sales"
          badgeIcon={Mail}
        />
        <ContactClient />
        <CTABanner />
      </main>
      <PublicFooter />
    </div>
  );
}
