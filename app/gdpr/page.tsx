import type { Metadata } from "next";
import { LegalHeader } from "@/components/public/LegalHeader";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { PublicFooter } from "@/components/public/PublicFooter";
import { ShieldCheck, Scale, FileText, DatabaseZap, Unlock, Mail, Fingerprint } from "lucide-react";

export const metadata: Metadata = {
  title: "GDPR Compliance | LicenceBot",
  description: "LicenceBot is fully committed to GDPR compliance. Read our extensive policy on how we gather, protect, and handle personal data under the EU regulation.",
  openGraph: {
    title: "GDPR Compliance | LicenceBot",
    description: "Our commitment to EU privacy regulations and data rights.",
    type: "website",
  },
};

export default function GDPRPolicyPage() {
  const sections = [
    {
      id: "intro",
      icon: Scale,
      title: "1. Introduction to GDPR Compliance",
      content: (
        <p className="leading-relaxed">
          LicenceBot is committed to protecting the personal data and privacy of all users in compliance with the General Data Protection Regulation (GDPR) (EU) 2016/679. We respect your right to privacy and put transparent, secure practices at the core of our platform architecture. Licensing data is processed lawfully, fairly, and in a transparent manner.
        </p>
      )
    },
    {
      id: "controller",
      icon: Fingerprint,
      title: "2. Data Controller",
      content: (
        <p className="leading-relaxed">
          LicenceBot acts as the Data Controller for personal data processed when you create an account, purchase subscriptions, or connect your stores. When you sync customer data from your own e-commerce stores (like WooCommerce or Shopify), you act as the Data Controller, and LicenceBot acts as the Data Processor. Our processing agreements strictly govern this relationship.
        </p>
      )
    },
    {
      id: "basis",
      icon: FileText,
      title: "3. Legal Basis for Processing",
      content: (
        <ul className="space-y-4">
          <li className="flex gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <div><strong className="text-foreground">Contractual Necessity:</strong> To deliver core services, manage accounts, and fulfil licence key deliveries automatically.</div>
          </li>
          <li className="flex gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <div><strong className="text-foreground">Legitimate Interest:</strong> Analytics, platform security, fraud prevention, and system health checks.</div>
          </li>
          <li className="flex gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <div><strong className="text-foreground">Consent:</strong> For direct marketing communications and processing non-essential cookies.</div>
          </li>
        </ul>
      )
    },
    {
      id: "rights",
      icon: Unlock,
      title: "4. Your Rights as a Data Subject",
      content: (
        <p className="leading-relaxed">
          Under GDPR, you have the right to access (receive a copy of your data), rectify (correct inaccuracies), erase ("right to be forgotten"), and restrict the processing of your data. You also maintain the right to data portability (receiving CSV exports of your metrics and inventory) and the right to object to profiling or automated decision-making. We process all Data Subject Access Requests (DSARs) within 30 days.
        </p>
      )
    },
    {
      id: "security",
      icon: DatabaseZap,
      title: "5. Security & International Transfers",
      content: (
        <p className="leading-relaxed">
          We implement rigorous technical measures including AES-256 for data at rest and TLS 1.3 for data in transit. Should we process data outside the European Economic Area (EEA), we do so under approved Standard Contractual Clauses (SCCs). Our sub-processors are chosen carefully and legally bound to uphold equivalent data standards.
        </p>
      )
    }
  ];

  return (
    <main className="relative bg-background overflow-hidden">
      <PublicNavbar />
      
      <LegalHeader 
        title="GDPR Compliance"
        lastUpdated="February 24, 2026"
        icon={<ShieldCheck className="w-3.5 h-3.5 mr-2" />}
        badge="EU Privacy Standards"
      />

      <section className="pb-24 pt-4">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid gap-12 sm:gap-16">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <div key={section.id} className="relative group">
                  <div className="absolute -left-4 sm:-left-12 top-0 bottom-0 w-px bg-border group-hover:bg-primary transition-colors" />
                  <div className="flex items-start gap-6 sm:gap-8">
                    <div className="hidden sm:flex w-10 h-10 rounded-xl bg-card border border-border items-center justify-center shrink-0 shadow-sm relative z-10 bg-background">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                        <Icon className="w-5 h-5 text-primary sm:hidden" />
                        {section.title}
                      </h2>
                      <div className="text-muted-foreground text-base sm:text-lg leading-relaxed antialiased">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-20 p-8 rounded-2xl bg-muted/30 border border-border flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground">Exercise your rights</p>
                <p className="text-sm text-muted-foreground">Submit a Data Subject Access Request (DSAR) to our DPO.</p>
              </div>
            </div>
            <button className="px-6 py-2.5 rounded-lg border border-border hover:bg-muted text-foreground font-semibold transition-all">
              Email DPO
            </button>
          </div>
        </div>
      </section>

      <PublicFooter />
    </main>
  );
}
