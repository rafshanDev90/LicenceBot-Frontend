import type { Metadata } from "next";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { PublicFooter } from "@/components/public/PublicFooter";
import { HelpCircle, BookOpen, MessageCircle, Search, FileText, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Help Center for Customer Support and Guides",
  description: "Help center provides customer support, guides, FAQs, and resources to help solve issues and learn platform features quickly and easily.",
  keywords: ["help center", "customer support", "faq", "user guides", "platform help"],
  alternates: {
    canonical: "https://licencebot.com/help",
  },
  openGraph: {
    title: "Help Center for Customer Support and Guides",
    description: "Help center provides customer support, guides, FAQs, and resources to help solve issues and learn platform features quickly and easily.",
    url: "https://licencebot.com/help",
    type: "website",
  },
};

const categories = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "New to LicenceBot? Learn the basics of setting up your account and first store.",
    href: "/docs",
  },
  {
    icon: FileText,
    title: "Guides & Tutorials",
    description: "Step-by-step guides for every feature of the LicenceBot platform.",
    href: "/docs",
  },
  {
    icon: MessageCircle,
    title: "FAQ",
    description: "Frequently asked questions about billing, integrations, and troubleshooting.",
    href: "#faq",
  },
  {
    icon: Mail,
    title: "Contact Support",
    description: "Can't find what you need? Get in touch with our support team.",
    href: "/contact",
  },
];

const faqs = [
  {
    q: "How do I connect my WooCommerce store?",
    a: "Navigate to Integrations in your dashboard, select WooCommerce, and enter your store URL and API credentials. Our auto-configuration tool will handle the rest.",
  },
  {
    q: "How long does key delivery take?",
    a: "Key delivery is instantaneous — typically under 3 seconds from order confirmation to customer delivery.",
  },
  {
    q: "Can I upgrade my plan at any time?",
    a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and you'll be billed prorated for the remainder of your billing cycle.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes, we offer a 14-day free trial on all paid plans with full access to all features. No credit card required.",
  },
  {
    q: "How do I bulk upload licence keys?",
    a: "Use the Licence Inventory module to upload keys via CSV. You can assign keys to specific products, set stock alerts, and manage pools from a single interface.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, PayPal, and bank transfers for annual plans. All payments are processed securely through our PCI-compliant payment gateway.",
  },
];

export default function HelpPage() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <PublicNavbar />

      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/5 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            <HelpCircle className="w-4 h-4" />
            <span>Help Center</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-6">
            How can we <span className="text-primary">help you?</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Search our guides, browse FAQs, or get in touch with our support team.
          </p>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link key={cat.title} href={cat.href}>
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{cat.title}</h3>
                    <p className="text-sm text-muted-foreground">{cat.description}</p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 pb-24 scroll-mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Quick answers to common questions about LicenceBot.</p>
        </div>
        <div className="grid gap-4">
          {faqs.map((faq) => (
            <Card key={faq.q} className="bg-card/50 border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-24">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8 sm:p-12 text-center">
            <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Still need help?</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Our support team typically responds within 24 hours. We're here to help you succeed.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Contact Support <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <PublicFooter />
    </main>
  );
}
