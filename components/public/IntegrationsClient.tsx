"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingBag, Globe, Code, Send, Webhook,
  CheckCircle, Zap, Shield, Clock, FileText,
  Mail, MessageSquare, Search
} from "lucide-react";

const integrations = [
  {
    icon: ShoppingBag,
    name: "WooCommerce",
    description: "Install our official plugin to sync orders, products, customers, and coupons in real-time. Automatic key delivery on order completion.",
    status: "Full Support",
    features: ["One-click install", "Real-time sync", "Auto key delivery", "Product mapping"],
    category: "E-Commerce",
  },
  {
    icon: Globe,
    name: "Shopify",
    description: "Connect your Shopify store via our official app. Seamless product mapping, automatic order processing, and instant licence delivery.",
    status: "Full Support",
    features: ["Official app", "Order webhooks", "Product sync", "Fulfillment API"],
    category: "E-Commerce",
  },
  {
    icon: Code,
    name: "REST API",
    description: "Our comprehensive REST API lets you integrate with any platform. Full documentation, SDK support, rate limiting, and webhook events.",
    status: "Full Support",
    features: ["Full CRUD endpoints", "Webhook events", "API key auth", "Rate limiting"],
    category: "Developer",
  },
  {
    icon: Send,
    name: "Telegram Bot",
    description: "Deliver keys directly to customers via Telegram bot. Real-time order notifications, stock alerts, and admin commands for your team.",
    status: "Full Support",
    features: ["Key delivery", "Admin alerts", "Stock limits", "Bot commands"],
    category: "Messaging",
  },
  {
    icon: Webhook,
    name: "Webhooks",
    description: "Push delivery events, order updates, and stock alerts to any endpoint. Build custom workflows with real-time notifications.",
    status: "Full Support",
    features: ["Real-time events", "Custom endpoints", "Retry logic", "Event filtering"],
    category: "Developer",
  },
  {
    icon: Mail,
    name: "Email (SMTP/IMAP)",
    description: "Connect your email accounts for the built-in mail client and marketing module. SMTP sending and IMAP inbox sync for complete management.",
    status: "Full Support",
    features: ["SMTP sending", "IMAP inbox sync", "Custom signatures", "Template system"],
    category: "Communication",
  },
  {
    icon: Search,
    name: "Google Search Console",
    description: "Connect your GSC properties to get performance data, index coverage, core web vitals, and crawl stats directly in the SEO module.",
    status: "Full Support",
    features: ["OAuth connection", "Performance data", "Index coverage", "Core web vitals"],
    category: "Analytics",
  },
  {
    icon: MessageSquare,
    name: "WhatsApp Business",
    description: "Support customers via WhatsApp with our omnichannel chat integration. Route conversations to the right agent with SLA tracking.",
    status: "Coming Soon",
    features: ["Business API", "Chat routing", "Template messages", "Media support"],
    category: "Messaging",
  },
];

const apiHighlights = [
  { icon: FileText, title: "Full Documentation", desc: "Interactive API docs with request/response examples for every endpoint" },
  { icon: Shield, title: "Secure by Default", desc: "API key authentication, HTTPS only, request signing, and IP limits" },
  { icon: Clock, title: "99.9% Uptime", desc: "Enterprise infrastructure with automatic failover and load balancing" },
  { icon: Zap, title: "Fast Response", desc: "Average API response time under 100ms with global CDN distribution" },
];

const setupSteps = [
  { number: "01", title: "Create Account", desc: "Sign up and navigate to settings" },
  { number: "02", title: "Generate Keys", desc: "Create an API token with permissions" },
  { number: "03", title: "Install Plugin", desc: "Add WooCommerce or Shopify" },
  { number: "04", title: "Configure", desc: "Map products and start automating" },
];

export function IntegrationsClient() {
  return (
    <div className="pb-24 pt-12">
      {/* Integration cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-display tracking-tight">
            Supported <span className="text-gradient">Integrations</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Connect your stores, messaging platforms, analytics tools, and developer endpoints seamlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {integrations.map((item, i) => {
            const Icon = item.icon;
            const isComingSoon = item.status === "Coming Soon";

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Card className={`h-full border-border/50 bg-card/40 backdrop-blur-sm hover:shadow-glow hover:border-primary/30 transition-all duration-500 overflow-hidden relative group ${isComingSoon ? "opacity-75" : ""}`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100%] pointer-events-none group-hover:bg-primary/10 transition-colors duration-500" />
                  
                  <CardContent className="p-8">
                    <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 shadow-glow shadow-primary/5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 text-primary">
                        <Icon className="w-8 h-8 transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{item.name}</h3>
                          <Badge 
                            variant={isComingSoon ? "secondary" : "default"} 
                            className={`text-[10px] font-bold uppercase tracking-widest ${!isComingSoon ? "bg-primary/20 text-primary hover:bg-primary/30" : ""}`}
                          >
                            {item.status}
                          </Badge>
                        </div>
                        <Badge variant="outline" className="text-[10px] uppercase font-bold text-muted-foreground border-border/50 mb-3">{item.category}</Badge>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-6 border-t border-border/50">
                      {item.features.map((f) => (
                        <div key={f} className="flex items-center gap-2.5 text-xs font-semibold text-foreground">
                          <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Quick setup */}
      <section className="mt-24 py-20 bg-muted/20 border-y border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground font-display">
              Set Up in <span className="text-gradient">4 Simple Steps</span>
            </h2>
            <p className="mt-4 text-muted-foreground">From zero to integrated in under 5 minutes.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {setupSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="text-center h-full bg-card/60 backdrop-blur-md border-border/50 hover:border-primary/20 transition-colors">
                  <CardContent className="pt-10 pb-8 px-6">
                    <span className="text-5xl font-black text-primary/10 tracking-tighter mb-4 block">{step.number}</span>
                    <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Highlights */}
      <section className="mt-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-display">
            Developer-Friendly <span className="text-gradient">API</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
            Build custom integrations with our RESTful API and real-time webhooks.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {apiHighlights.map((h, i) => {
            const HIcon = h.icon;
            return (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="text-center h-full hover:border-primary/30 hover:shadow-glow shadow-primary/10 transition-all duration-300 border-border/50 bg-card/40 backdrop-blur-sm group">
                  <CardContent className="pt-10 pb-8 px-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                      <HIcon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{h.title}</h3>
                    <p className="text-sm text-muted-foreground">{h.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Code preview mock */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="overflow-hidden border-border/50 shadow-2xl bg-zinc-950">
            <div className="flex items-center gap-3 px-6 py-4 bg-zinc-900 border-b border-zinc-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-bold font-mono tracking-widest text-zinc-400 uppercase">api-delivery.sh</span>
            </div>
            <CardContent className="p-8">
              <pre className="text-sm font-mono leading-relaxed overflow-x-auto text-zinc-300">
<span className="text-zinc-500"># Deliver a licence key via API</span>
<span className="text-cyan-400">curl</span> -X POST https://api.licencebot.com/v1/deliver \
  -H <span className="text-green-400">"Authorization: Bearer YOUR_API_KEY"</span> \
  -H <span className="text-green-400">"Content-Type: application/json"</span> \
  -d '{'{'}
    <span className="text-primary">"order_id"</span>: <span className="text-green-400">"WC-12345"</span>,
    <span className="text-primary">"product_sku"</span>: <span className="text-green-400">"WIN11-PRO"</span>,
    <span className="text-primary">"customer_email"</span>: <span className="text-green-400">"buyer@example.com"</span>,
    <span className="text-primary">"channels"</span>: [<span className="text-green-400">"email"</span>, <span className="text-green-400">"webhook"</span>]
  {'}'}'

<span className="text-zinc-500"># Response</span>
{'{'}
  <span className="text-primary">"success"</span>: <span className="text-yellow-400">true</span>,
  <span className="text-primary">"delivery_id"</span>: <span className="text-green-400">"dlv_abc123"</span>,
  <span className="text-primary">"key"</span>: <span className="text-green-400">"XXXXX-XXXXX-XXXXX-XXXXX"</span>,
  <span className="text-primary">"delivered_via"</span>: [<span className="text-green-400">"email"</span>],
  <span className="text-primary">"delivered_at"</span>: <span className="text-green-400">"2026-03-30T10:30:00Z"</span>
{'}'}
              </pre>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}
