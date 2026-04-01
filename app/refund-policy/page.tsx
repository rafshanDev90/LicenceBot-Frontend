import type { Metadata } from "next";
import { LegalHeader } from "@/components/public/LegalHeader";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { PublicFooter } from "@/components/public/PublicFooter";
import { RotateCcw, BoxSelect, ShieldX, CheckSquare, CreditCard, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Refund Policy | LicenceBot",
  description: "Read our straightforward and transparent refund policies for subscription plans and licence key purchases.",
  openGraph: {
    title: "Refund Policy | LicenceBot",
    description: "Our policies and procedures for requesting a refund.",
    type: "website",
  },
};

export default function RefundPolicyPage() {
  const sections = [
    {
      id: "overview",
      icon: BoxSelect,
      title: "1. Overview",
      content: (
        <p className="leading-relaxed">
          At LicenceBot, we strive to ensure complete satisfaction with our platform and services. This Refund Policy outlines the terms under which refunds may be issued for subscription plans and digital licence key purchases made through your connected stores or our portal.
        </p>
      )
    },
    {
      id: "subscriptions",
      icon: CheckSquare,
      title: "2. Subscription Plans",
      content: (
        <ul className="space-y-4">
          <li className="flex gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <div><strong className="text-foreground">14-Day Guarantee:</strong> We offer a 14-day money-back guarantee on all paid subscription plans.</div>
          </li>
          <li className="flex gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <div><strong className="text-foreground">Initial Cycle Only:</strong> Refunds are only available for the first billing cycle of a new subscription.</div>
          </li>
          <li className="flex gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <div><strong className="text-foreground">Non-refundable:</strong> Renewals, subsequent billing cycles, and wallet top-ups are strictly non-refundable once applied to your account.</div>
          </li>
        </ul>
      )
    },
    {
      id: "keys",
      icon: ShieldX,
      title: "3. Licence Key Purchases",
      content: (
        <p className="leading-relaxed">
          Due to the digital nature of licence keys, refunds for key purchases are handled on a case-by-case basis. Invalid keys or wrong products delivered due to a platform error will result in a replacement or a full refund. Successfully redeemed keys cannot be refunded under any circumstances.
        </p>
      )
    },
    {
      id: "process",
      icon: CreditCard,
      title: "4. Processing Refunds",
      content: (
        <p className="leading-relaxed">
          Approved refunds will be processed to the original payment method within 5–10 business days. Processing times may vary depending on your payment provider or bank. You will receive an email confirmation once the refund has been initiated from our billing systems.
        </p>
      )
    }
  ];

  return (
    <main className="relative bg-background overflow-hidden">
      <PublicNavbar />
      
      <LegalHeader 
        title="Refund Policy"
        lastUpdated="February 24, 2026"
        icon={<RotateCcw className="w-3.5 h-3.5 mr-2" />}
        badge="Legal & Billing"
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
                <p className="font-bold text-foreground">Need to request a refund?</p>
                <p className="text-sm text-muted-foreground">Submit a request to our billing department.</p>
              </div>
            </div>
            <button className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-glow transition-all">
              Contact Billing
            </button>
          </div>
        </div>
      </section>

      <PublicFooter />
    </main>
  );
}
