"use client";

import { motion } from "framer-motion";
import { 
  Store, Wallet, Key, Zap, CheckCircle, Clock, 
  ShieldCheck, BarChart3, Globe, Send, Mail, Webhook,
  Settings, Package, Truck, Sparkles, Timer, Lock 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    icon: Store,
    number: "01",
    title: "Connect Your Store",
    subtitle: "2-minute setup",
    description: "Install our WooCommerce plugin or Shopify app. Your products, orders, and customer data sync automatically in real-time — no manual imports needed.",
    features: [
      { icon: ShieldCheck, text: "One-click WooCommerce plugin install" },
      { icon: Globe, text: "Shopify app with automatic sync" },
      { icon: Settings, text: "REST API for custom platforms" },
      { icon: Lock, text: "Encrypted connection" },
    ],
  },
  {
    icon: Wallet,
    number: "02",
    title: "Fund Your Wallet",
    subtitle: "Flexible payments",
    description: "Top up your account balance using your preferred payment method. Pay-as-you-go pricing means you only pay for what you deliver — no monthly minimums.",
    features: [
      { icon: Wallet, text: "Credit & Debit Cards" },
      { icon: Key, text: "Cryptocurrency (BTC, ETH, USDT)" },
      { icon: Send, text: "Bank transfer & wire" },
      { icon: ShieldCheck, text: "PCI-compliant processing" },
    ],
  },
  {
    icon: Key,
    number: "03",
    title: "Upload & Configure Keys",
    subtitle: "Bulk import ready",
    description: "Upload your licence keys via CSV or paste them directly. Assign keys to product SKUs, set up auto-routing rules, and configure delivery channels per pool.",
    features: [
      { icon: Package, text: "CSV & bulk paste upload" },
      { icon: Settings, text: "SKU-to-pool mapping rules" },
      { icon: BarChart3, text: "Stock level alerts" },
      { icon: Lock, text: "AES-256 encrypted storage" },
    ],
  },
  {
    icon: Zap,
    number: "04",
    title: "Automatic Delivery",
    subtitle: "Under 3 seconds",
    description: "When a customer completes a purchase, LicenceBot instantly delivers the key via email, order notes, webhook, or Telegram — fully automated, zero manual work.",
    features: [
      { icon: Mail, text: "Branded email delivery" },
      { icon: Webhook, text: "Real-time webhook push" },
      { icon: Send, text: "Telegram bot notifications" },
      { icon: Truck, text: "WooCommerce order notes" },
    ],
  },
];

const benefits = [
  { icon: Timer, value: "<3s", label: "Avg Delivery Time", desc: "Instant arrival before checkout finishes" },
  { icon: ShieldCheck, value: "99.9%", label: "Success Rate", desc: "Built-in retry logic and fallback routing" },
  { icon: Clock, value: "24/7", label: "Always On", desc: "No downtime, no manual intervention needed" },
  { icon: Sparkles, value: "Zero", label: "Manual Work", desc: "Fully automated from order to delivery" },
];

const comparisonRows = [
  { feature: "Order processing", without: "Manual, 5-30 min per order", with: "Automatic, < 3 seconds" },
  { feature: "Key delivery", without: "Copy-paste via email", with: "Multi-channel auto-delivery" },
  { feature: "Stock tracking", without: "Spreadsheets & builds", with: "Real-time alerts & dashboards" },
  { feature: "Error handling", without: "Customer complaints", with: "Auto-retry & fallback routing" },
  { feature: "Scaling", without: "Hire more staff", with: "Handles any volume instantly" },
];

export function HowItWorksClient() {
  return (
    <div className="pb-24">
      {/* Steps */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-24 md:space-y-48">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 1;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className={`flex flex-col ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-24 items-center`}
                >
                  {/* Content side */}
                  <div className="flex-1 max-w-xl">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-7xl font-black text-primary/10 select-none leading-none">{step.number}</span>
                      <div>
                        <Badge variant="outline" className="mb-2 text-xs font-bold uppercase tracking-widest text-primary border-primary/20 bg-primary/5">{step.subtitle}</Badge>
                        <h3 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">{step.title}</h3>
                      </div>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed mb-10">{step.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {step.features.map((f) => (
                        <div key={f.text} className="flex items-center gap-3 text-sm font-medium text-foreground p-3 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <f.icon className="w-4 h-4 text-primary" />
                          </div>
                          {f.text}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual side */}
                  <div className="flex-1 w-full max-w-xl">
                    <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 overflow-hidden group shadow-2xl flex items-center justify-center">
                      <div className="absolute inset-0 bg-glow opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
                      <div className="absolute top-6 left-6 flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-destructive/40" />
                        <div className="w-3 h-3 rounded-full bg-warning/40" />
                        <div className="w-3 h-3 rounded-full bg-success/40" />
                      </div>
                      
                      <div className="text-center relative z-10 p-10 transform group-hover:scale-105 transition-transform duration-700">
                        <div className="w-24 h-24 rounded-[2rem] bg-primary/20 flex items-center justify-center mx-auto mb-8 shadow-glow shadow-primary/20">
                          <Icon className="w-12 h-12 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold text-foreground mb-2">{step.title}</h4>
                        <div className="h-0.5 w-12 bg-primary mx-auto mb-6" />
                        <div className="flex flex-wrap gap-2 justify-center">
                          {step.features.map((f, idx) => (
                            <span key={idx} className="px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-card border border-border text-muted-foreground">
                              {f.text}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits stats */}
      <section className="py-24 bg-muted/30 border-y border-border relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Built for <span className="text-gradient">Scale</span></h2>
            <p className="mt-4 text-muted-foreground">Zero manual intervention, from order to delivery.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-glow hover:border-primary/20 transition-all duration-500 bg-card/50 backdrop-blur-sm">
                  <CardContent className="pt-10 pb-8 px-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <b.icon className="w-7 h-7 text-primary" />
                    </div>
                    <p className="text-4xl font-black text-primary mb-2 tracking-tight">{b.value}</p>
                    <p className="text-sm font-bold text-foreground mb-2 uppercase tracking-widest">{b.label}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Before & <span className="text-gradient">After</span></h2>
            <p className="mt-4 text-muted-foreground">See how automation transforms your operations.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-border overflow-hidden shadow-2xl bg-card/30 backdrop-blur-xl"
          >
            <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-muted/60 border-b border-border">
              <div className="p-6 text-xs font-black uppercase tracking-widest text-muted-foreground" />
              <div className="p-6 text-xs font-black uppercase tracking-widest text-destructive/80 text-center border-x border-border">Manual Era</div>
              <div className="p-6 text-xs font-black uppercase tracking-widest text-primary text-center">LicenceBot Era</div>
            </div>
            
            {comparisonRows.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-[1.2fr_1fr_1fr] ${i < comparisonRows.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="p-6 text-sm font-bold text-foreground bg-card/20">{row.feature}</div>
                <div className="p-6 text-sm text-muted-foreground text-center border-x border-border italic">{row.without}</div>
                <div className="p-6 text-sm text-foreground text-center flex items-center justify-center gap-2 font-semibold">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                  {row.with}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
