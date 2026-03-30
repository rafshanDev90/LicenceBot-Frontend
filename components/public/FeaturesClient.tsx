"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart3, ShoppingBag, Key, Search, MessageSquare, Mail, 
  Users, CheckCircle, Globe, Wrench, Zap, Radar, KeyRound, 
  Monitor, Layers
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const categories = [
  { key: "all", label: "All Features" },
  { key: "commerce", label: "Commerce" },
  { key: "analytics", label: "Analytics & SEO" },
  { key: "communication", label: "Communication" },
  { key: "tools", label: "Tools & Utilities" },
];

const modules = [
  {
    id: "analytics",
    icon: BarChart3,
    title: "Complete Analytics",
    tagline: "Real-time insights into every visitor and conversion",
    desc: "Track visitors, sessions, page views, and conversions with real-time dashboards. Understand your audience with geo breakdowns, device stats, funnel tracking, retention cohorts, and RFM segmentation.",
    features: [
      "Real-time traffic monitoring",
      "Conversion funnels & cohorts",
      "RFM customer segmentation",
      "Geo & device breakdown",
      "CSV, JSON & PDF export",
      "Custom event tracking",
    ],
    category: "analytics",
    stats: [
      { value: "50+", label: "Metrics" },
      { value: "Live", label: "Updates" },
      { value: "6", label: "Export formats" },
    ],
  },
  {
    id: "woocommerce",
    icon: ShoppingBag,
    title: "WooCommerce Hub",
    tagline: "Complete multi-store order and product management",
    desc: "Full multi-store management from a single dashboard. Sync orders, products, customers, coupons, and refunds in real-time. Recover abandoned carts and track store performance across all connected stores.",
    features: [
      "Multi-store management",
      "Order & product sync",
      "Customer profiles & history",
      "Coupon tracking & management",
      "Abandoned cart recovery",
      "Refund processing",
    ],
    category: "commerce",
    stats: [
      { value: "∞", label: "Stores" },
      { value: "Real-time", label: "Sync" },
      { value: "100%", label: "Coverage" },
    ],
  },
  {
    id: "licence",
    icon: Key,
    title: "Licence Inventory",
    tagline: "Automated key management and delivery",
    desc: "Manage your entire digital key inventory with pool assignments, stock alerts, and automatic delivery routing per SKU. Upload keys in bulk, track stock levels, and let automation handle the rest.",
    features: [
      "Key pool management",
      "Auto-assign to products",
      "Stock level alerts",
      "Bulk CSV upload",
      "Delivery audit trail",
      "Multi-channel routing",
    ],
    category: "commerce",
    stats: [
      { value: "<3s", label: "Delivery" },
      { value: "AES-256", label: "Encryption" },
      { value: "99.9%", label: "Success" },
    ],
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO & Rankings",
    tagline: "Daily keyword tracking and AI-powered insights",
    desc: "Monitor your keyword rankings daily across all search engines. Run comprehensive site audits, analyze competitors, track backlinks, and get AI-generated strategic recommendations to improve your visibility.",
    features: [
      "Daily position tracking",
      "AI SERP analysis",
      "Competitor monitoring",
      "Site audits & speed tests",
      "Backlink analysis",
      "Schema markup validation",
    ],
    category: "analytics",
    stats: [
      { value: "Daily", label: "Tracking" },
      { value: "AI", label: "Insights" },
      { value: "18+", label: "Tools" },
    ],
  },
  {
    id: "support",
    icon: MessageSquare,
    title: "Support & Live Chat",
    tagline: "Omnichannel customer support platform",
    desc: "Manage support across live chat, email, Telegram, and WhatsApp from one unified inbox. Use AI-powered summaries, sentiment analysis, SLA tracking, and canned responses to deliver exceptional support.",
    features: [
      "Live chat widget",
      "Ticket management",
      "SLA & escalation rules",
      "AI-powered summaries",
      "Sentiment analysis",
      "Omnichannel routing",
    ],
    category: "communication",
    stats: [
      { value: "5+", label: "Channels" },
      { value: "AI", label: "Summaries" },
      { value: "SLA", label: "Tracking" },
    ],
  },
  {
    id: "mail",
    icon: Mail,
    title: "Mail Client",
    tagline: "Full-featured email inbox built right in",
    desc: "A complete multi-account email client integrated into your dashboard. Custom signatures, smart filters, thread management, and email analytics — no need for a separate email app.",
    features: [
      "Multi-account inbox",
      "Custom signatures",
      "Email analytics",
      "Smart filters & labels",
      "Thread management",
      "Template library",
    ],
    category: "communication",
    stats: [
      { value: "∞", label: "Accounts" },
      { value: "IMAP", label: "Protocol" },
      { value: "Smart", label: "Filters" },
    ],
  },
];

export function FeaturesClient() {
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, []);

  const filtered = activeCategory === "all"
    ? modules
    : modules.filter((m) => m.category === activeCategory);

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border",
                activeCategory === cat.key
                  ? "bg-primary text-primary-foreground border-primary shadow-glow shadow-primary/20"
                  : "bg-muted/50 text-muted-foreground border-border hover:bg-muted hover:text-foreground"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((mod) => (
              <motion.div
                key={mod.id}
                id={mod.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="scroll-mt-32"
              >
                <Card className="h-full border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-glow transition-all duration-500 overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <mod.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{mod.title}</h3>
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{mod.category}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-8 min-h-[5rem]">
                      {mod.desc}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {mod.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-muted/30 border border-border/50">
                      {mod.stats.map((s) => (
                        <div key={s.label} className="text-center">
                          <p className="text-lg font-bold text-primary">{s.value}</p>
                          <p className="text-[10px] text-muted-foreground uppercase font-bold">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
