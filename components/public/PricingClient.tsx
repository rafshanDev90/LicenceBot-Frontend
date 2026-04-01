"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Shield, Clock, HeartHandshake, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PricingComparisonTable } from "@/components/public/PricingComparisonTable";

const plans = [
  {
    name: "Basic",
    price: "$9.99",
    period: "/mo",
    description: "Get started with basic features for a single store.",
    features: [
      "Licence Delivery System",
      "1 Store",
      "Basic Analytics",
      "Telegram Notification",
      "Abandon Cart Recovery",
      "Email Automation",
      "Live Delivery Logs",
      "Email Support",
    ],
    cta: "Get Started",
    popular: false,
    gradient: "from-muted to-muted/50",
  },
  {
    name: "Standard",
    price: "$19.99",
    period: "/mo",
    description: "Perfect for growing businesses with multiple stores.",
    features: [
      "Licence Delivery System",
      "5 Stores",
      "Advanced Analytics",
      "Telegram Notification",
      "Abandon Cart Recovery",
      "Email Automation",
      "Priority Support",
      "Team Collaboration",
    ],
    cta: "Start Free Trial",
    popular: false,
    gradient: "from-info/20 to-info/10",
  },
  {
    name: "Pro",
    price: "$29.99",
    period: "/mo",
    description: "For power users and teams who need everything.",
    features: [
      "Licence Delivery System",
      "Multi-store Routing",
      "Full Analytics Suite",
      "Telegram Notification",
      "Abandon Cart Recovery",
      "Email Automation",
      "Dedicated Manager",
      "Premium Integrations",
    ],
    cta: "Start Free Trial",
    popular: true,
    gradient: "from-primary/20 to-primary/10",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Custom solutions for large teams and enterprises.",
    features: [
      "Licence Delivery System",
      "Unlimited Stores",
      "Full Analytics Suite",
      "Telegram Notification",
      "Bulk Key Upload",
      "Premium Integrations",
      "Custom SLA",
      "White-label Options",
    ],
    cta: "Contact Sales",
    popular: false,
    gradient: "from-warning/20 to-warning/10",
  },
];

const faqs = [
  { q: "How does the free trial work?", a: "You get 14 days of full Pro features. No credit card required. Downgrade or cancel anytime." },
  { q: "Can I switch plans later?", a: "Yes, you can upgrade or downgrade at any time. Changes take effect immediately and billing is prorated." },
  { q: "What payment methods do you accept?", a: "We accept credit/debit cards, cryptocurrency, and bank transfers for annual plans." },
  { q: "Is there a setup fee?", a: "No. All plans have zero setup fees. Install the plugin, connect your store, and start selling." },
  { q: "Do you offer refunds?", a: "Yes, we offer a 30-day money-back guarantee on all paid plans. No questions asked." },
  { q: "Can I use LicenceBot with Shopify?", a: "Yes! We support WooCommerce, Shopify, and any platform via our REST API integration." },
];

export function PricingClient() {
  const [annual, setAnnual] = useState(false);

  const getPrice = (plan: typeof plans[0]) => {
    if (plan.price === "Custom") return "Custom";
    const monthly = parseFloat(plan.price.replace("$", ""));
    if (annual) {
      const yearly = (monthly * 10).toFixed(2);
      return `$${yearly}`;
    }
    return plan.price;
  };

  return (
    <section className="py-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Toggle */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center gap-3 bg-muted/50 border border-border p-1.5 rounded-full backdrop-blur-sm">
            <button
              onClick={() => setAnnual(false)}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                !annual ? "bg-primary text-primary-foreground shadow-glow shadow-primary/20" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                annual ? "bg-primary text-primary-foreground shadow-glow shadow-primary/20" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annual
              <span className="px-2 py-0.5 rounded-full bg-success/20 text-success text-[10px] uppercase font-black">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-card/50 backdrop-blur-sm border rounded-2xl p-8 flex flex-col transition-all duration-500 hover:shadow-glow ${
                plan.popular ? "border-primary shadow-glow shadow-primary/10 ring-1 ring-primary/20" : "border-border hover:border-primary/30"
              } group`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-black uppercase tracking-widest flex items-center gap-1.5 shadow-glow">
                  <Sparkles className="w-3.5 h-3.5" /> Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="text-4xl font-black text-foreground tracking-tight">{getPrice(plan)}</span>
                  {plan.period && (
                    <span className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
                      {annual && plan.price !== "Custom" ? "/yr" : plan.period}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{plan.description}</p>
              </div>

              <ul className="space-y-4 flex-1 border-t border-border/50 pt-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 drop-shadow-[0_0_8px_rgba(0,255,223,0.5)]" />
                    <span className="font-medium">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`mt-8 w-full h-12 font-bold text-sm uppercase tracking-widest transition-all duration-300 ${
                  plan.popular ? "shadow-glow hover:shadow-primary/40" : "bg-muted/50 border-border"
                }`}
                variant={plan.popular ? "default" : "outline"}
                asChild
              >
                <Link href={plan.cta === "Contact Sales" ? "/contact" : "https://app.licencebot.com/auth"}>{plan.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table Section */}
        <div className="mt-24 md:mt-32">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Compare <span className="text-gradient">Plans</span></h2>
            <p className="mt-4 text-muted-foreground">Find the perfect plan for your business scale</p>
          </div>
          <div className="bg-card/30 backdrop-blur-md border border-border rounded-3xl overflow-hidden shadow-2xl">
            <PricingComparisonTable />
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-24 md:mt-32 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display tracking-tight">Questions & <span className="text-gradient">Answers</span></h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border/50 rounded-2xl bg-card/40 backdrop-blur-sm px-6 hover:border-primary/20 transition-all duration-300 overflow-hidden">
                <AccordionTrigger className="text-base font-bold text-foreground hover:no-underline py-5 group">
                  <span className="group-hover:text-primary transition-colors text-left">{faq.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Trust Badges */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-10 md:gap-16 border-t border-border/50 pt-16">
          <div className="flex items-center gap-3 group">
            <div className="p-3 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-foreground leading-none">99.9% Uptime</p>
              <p className="text-xs text-muted-foreground mt-1">Enterprise SLA</p>
            </div>
          </div>
          <div className="flex items-center gap-3 group">
            <div className="p-3 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-foreground leading-none">24/7 Support</p>
              <p className="text-xs text-muted-foreground mt-1">Priority response</p>
            </div>
          </div>
          <div className="flex items-center gap-3 group">
            <div className="p-3 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-foreground leading-none">Money Back</p>
              <p className="text-xs text-muted-foreground mt-1">30-day guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
