import type { Metadata } from "next";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { PublicFooter } from "@/components/public/PublicFooter";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  KeyRound, Shield, Zap, Globe, Users, Target,
  ArrowRight, CheckCircle, Heart
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | LicenceBot",
  description: "Learn about LicenceBot's mission to simplify digital product distribution, our core values, and the team behind the platform.",
  openGraph: {
    title: "About Us | LicenceBot",
    description: "Powering Digital Commerce, One Licence at a Time.",
    type: "website",
  },
};

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "Every licence key, every transaction, every piece of data is protected with enterprise-grade encryption and strict access controls.",
  },
  {
    icon: Zap,
    title: "Automation at Core",
    description: "We believe merchants should focus on growth, not repetitive tasks. Our platform automates licence delivery, notifications, and analytics.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Supporting merchants across 50+ countries with multi-currency, multi-language, and multi-store capabilities out of the box.",
  },
  {
    icon: Users,
    title: "Merchant-Centric",
    description: "Built by merchants, for merchants. Every feature is designed around real pain points in digital product distribution.",
  },
];

const stats = [
  { value: "850K+", label: "Licences Delivered" },
  { value: "2,500+", label: "Active Merchants" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "Support Coverage" },
];

export default function AboutUsPage() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <PublicNavbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 px-4 py-1.5 border-primary/30 text-primary bg-primary/5 backdrop-blur-sm">
              <Heart className="w-3.5 h-3.5 mr-2" /> Our Story
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-6">
              Powering Digital Commerce,{" "}
              <span className="text-primary block mt-2">One Licence at a Time</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              LicenceBot was born from a simple frustration: delivering software licence keys manually is slow, error-prone, and doesn't scale. We built the platform we wished existed — automated, reliable, and beautifully simple.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-12 sm:-mt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center shadow-lg bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="py-8">
                <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Badge variant="outline" className="mb-6 px-4 py-1.5">
              <Target className="w-3.5 h-3.5 mr-2" /> Our Mission
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
              Simplify Digital<br/>Product Distribution
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We're on a mission to make selling digital products — software keys, subscriptions, and downloadable content — as seamless as possible for merchants of every size.
            </p>
            <ul className="space-y-4">
              {[
                "Instant automated licence delivery on every order",
                "Real-time inventory tracking across all sales channels",
                "Built-in analytics to understand your customers",
                "Enterprise-grade security without enterprise complexity",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4 text-base text-foreground">
                  <div className="p-1 rounded-full bg-primary/10 mt-1 shrink-0">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-info/20 rounded-3xl blur-2xl opacity-50" />
            <div className="relative aspect-square rounded-3xl bg-card border border-border flex items-center justify-center p-12 shadow-2xl">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px] rounded-3xl" />
              <KeyRound className="w-32 h-32 text-primary/40 relative z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 sm:py-32 relative">
        <div className="absolute inset-0 bg-muted/30 border-y border-border/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">What We Stand For</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our core values guide every product decision and customer interaction.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <Card key={v.title} className="text-center bg-card shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="pt-10 pb-8 px-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{v.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-24 sm:py-32 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Ready to Get Started?</h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          Join hundreds of merchants who trust LicenceBot to handle their digital product delivery.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto px-8 h-12 text-base" asChild>
            <Link href="https://app.licencebot.com/auth">
              Start Free Trial <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 h-12 text-base" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <PublicFooter />
    </main>
  );
}
