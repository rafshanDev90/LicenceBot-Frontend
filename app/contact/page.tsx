import { Metadata } from "next";
import { PageHeader } from "@/components/public/PageHeader";
import { ContactClient } from "@/components/public/ContactClient";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { PublicFooter } from "@/components/public/PublicFooter";
import { CTABanner } from "@/components/public/CTABanner";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | LicenceBot",
  description: "Have a question or need technical support? Get in touch with our team via email, phone, or the contact form below.",
  alternates: {
    canonical: "https://licencebot.com/contact",
  },
  openGraph: {
    title: "Contact Us | LicenceBot",
    description: "Have a question or need technical support? Get in touch with our team via email, phone, or the contact form below.",
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
