import type { Metadata } from "next";
import { LegalHeader } from "@/components/public/LegalHeader";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { PublicFooter } from "@/components/public/PublicFooter";
import { Shield, Scale, FileText, Lock, AlertCircle, CheckCircle2, Info } from "lucide-react";

// 1. Map the string keys to the actual Lucide components
const IconMap = {
  shield: Shield,
  scale: Scale,
  fileText: FileText,
  lock: Lock,
  alert: AlertCircle,
  check: CheckCircle2,
  info: Info,
};

export const metadata: Metadata = {
  title: "Terms of Service | LicenceBot - Legal Usage & Agreements",
  description: "Read our Terms of Service to understand your rights, responsibilities, and the legal framework for using the LicenceBot platform.",
  openGraph: {
    title: "Terms of Service | LicenceBot",
    description: "Legal terms and conditions for LicenceBot services.",
    type: "website",
  },
};

export default function TermsPage() {
  const sections = [
    {
      id: "acceptance",
      icon: "check" as keyof typeof IconMap,
      title: "1. Acceptance of Terms",
      content: (
        <p className="leading-relaxed">
          By accessing or using LicenceBot ("the Platform"), you agree to be bound by these Terms of Service. If you do not agree, you may not access or use the Platform. These terms apply to all users, including merchants, team members, and visitors.
        </p>
      )
    },
    {
      id: "service",
      icon: "fileText" as keyof typeof IconMap,
      title: "2. Description of Service",
      content: (
        <p className="leading-relaxed">
          LicenceBot is a SaaS platform providing tools for automated digital licence key delivery, store integrations (WooCommerce, Shopify), analytics, and customer engagement. We provide the infrastructure; you provide the products.
        </p>
      )
    },
    {
      id: "inventory",
      icon: "lock" as keyof typeof IconMap,
      title: "3. Licence Key Inventory",
      content: (
        <p className="leading-relaxed">
          The Platform facilitates the storage and delivery of keys. You are solely responsible for the validity, legality, and accuracy of all licence keys uploaded to the Platform. LicenceBot is not liable for invalid or fraudulent keys distributed through your store.
        </p>
      )
    },
    {
      id: "use",
      icon: "alert" as keyof typeof IconMap,
      title: "4. Acceptable Use",
      content: (
        <ul className="space-y-4">
          <li className="flex gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <div>No unlawful distribution of illegal content.</div>
          </li>
          <li className="flex gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <div>No attempts to reverse engineer or compromise platform security.</div>
          </li>
          <li className="flex gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <div>No sending of unsolicited commercial emails (spam) via the Engage module.</div>
          </li>
        </ul>
      )
    },
    {
      id: "liability",
      icon: "scale" as keyof typeof IconMap,
      title: "5. Limitation of Liability",
      content: (
        <p className="leading-relaxed font-medium text-foreground italic">
          To the maximum extent permitted by law, LicenceBot's total liability shall not exceed the amount paid by you in the 12 months preceding any claim. We are not liable for indirect or consequential damages.
        </p>
      )
    }
  ];

  return (
    <main className="relative bg-background overflow-hidden">
      <PublicNavbar />
      
      {/* Ensure LegalHeader is updated to accept 'iconName' prop and use the IconMap internally */}
      <LegalHeader 
        title="Terms of Service"
        lastUpdated="February 24, 2026"
        icon={<Shield className="w-3.5 h-3.5 mr-2" />}
        badge="Legal"
      />

      <section className="pb-24 pt-4">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid gap-12 sm:gap-16">
            {sections.map((section) => {
              // 2. Resolve the component here locally within the Server Component
              const Icon = IconMap[section.icon];
              
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
                <Info className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground">Need legal clarification?</p>
                <p className="text-sm text-muted-foreground">Our support team can help with any questions.</p>
              </div>
            </div>
            <button className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-glow transition-all">
              Contact Support
            </button>
          </div>
        </div>
      </section>

      <PublicFooter />
    </main>
  );
}
