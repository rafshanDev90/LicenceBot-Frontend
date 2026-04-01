import type { Metadata } from "next";
import { LegalHeader } from "@/components/public/LegalHeader";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { PublicFooter } from "@/components/public/PublicFooter";
import { Lock, ShieldCheck, Database, Globe, Mail, Clock, Eye, Scale, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | LicenceBot - Your Data Security is Our Priority",
  description: "Learn how LicenceBot collect, processes, and protects your personal and store data. Our privacy policy is designed with GDPR compliance and transparency in mind.",
  openGraph: {
    title: "Privacy Policy | LicenceBot",
    description: "Your data security and privacy details for using LicenceBot.",
    type: "website",
  },
};

export default function PrivacyPage() {
  const sections = [
    {
      id: "collection",
      icon: Database,
      title: "1. Information We Collect",
      content: (
        <ul className="space-y-4">
          <li className="flex gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <div><strong className="text-foreground">Account Information:</strong> Name, email address, password hash, and preferences.</div>
          </li>
          <li className="flex gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <div><strong className="text-foreground">Store Data:</strong> API credentials (encrypted), orders, products, and customer metadata sync.</div>
          </li>
          <li className="flex gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <div><strong className="text-foreground">Licence Keys:</strong> Inventory records and delivery history you manage on our platform.</div>
          </li>
          <li className="flex gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <div><strong className="text-foreground">Usage Data:</strong> Anonymized interaction logs, browser type, and performance metrics.</div>
          </li>
        </ul>
      )
    },
    {
      id: "usage",
      icon: ShieldCheck,
      title: "2. How We Use Your Information",
      content: (
        <p className="leading-relaxed">
          We use your data strictly to provide the Platform's core services, including automated key delivery, store synchronization, and analytics. We never sell your data. We use anonymized usage patterns to improve the system and capture bugs before they affect your business.
        </p>
      )
    },
    {
      id: "security",
      icon: Lock,
      title: "3. Data Storage & Security",
      content: (
        <p className="leading-relaxed">
          All data is encrypted at rest using AES-256 and in transit via TLS 1.3. We employ strict Role-Based Access Control (RBAC) and row-level security policies to ensure that your store data remains private and accessible only to your authorized team.
        </p>
      )
    },
    {
      id: "retention",
      icon: Clock,
      title: "4. Data Retention",
      content: (
        <p className="leading-relaxed">
          Personal data is retained as long as your account is active. Upon deletion, data is purged from our primary databases within 30 days and from secure backups within 90 days, except for billing records required for legal compliance.
        </p>
      )
    }
  ];

  return (
    <main className="relative bg-background overflow-hidden">
      <PublicNavbar />
      
      <LegalHeader 
        title="Privacy Policy"
        lastUpdated="February 24, 2026"
        icon={<Lock className="w-3.5 h-3.5 mr-2" />}
        badge="Legal"
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
                <p className="font-bold text-foreground">Have privacy questions?</p>
                <p className="text-sm text-muted-foreground">Our data protection officer is here to help.</p>
              </div>
            </div>
            <button className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-glow transition-all">
              Contact Privacy Team
            </button>
          </div>
        </div>
      </section>

      <PublicFooter />
    </main>
  );
}
