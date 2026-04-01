"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart3, ShoppingBag, Key, Search, MessageSquare, Mail, 
  CheckCircle2 
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
      { value: "Real-time", label: "Updates" },
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
    reverse: true, // This matches the screenshot where stats are on the left
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
    reverse: true,
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
    reverse: true,
  },
];

export function FeaturesClient() {
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    }
  }, []);

  const filtered = activeCategory === "all"
    ? modules
    : modules.filter((m) => m.category === activeCategory);

  return (
    <section className="py-12 md:py-20 bg-[#020617] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                activeCategory === cat.key
                  ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                  : "bg-slate-900/50 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Feature Sections */}
        <div className="space-y-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((mod) => (
              <motion.div
                key={mod.id}
                id={mod.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="scroll-mt-32"
              >
                <Card className="overflow-hidden border-slate-800 bg-[#0b1120] hover:border-slate-700 transition-colors">
                  <CardContent className="p-0">
                    <div className={cn(
                      "flex flex-col md:flex-row min-h-[350px]",
                      mod.reverse && "md:flex-row-reverse"
                    )}>
                      
                      {/* Content Side */}
                      <div className="flex-[2.5] p-8 md:p-12">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                            <mod.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-1">{mod.title}</h3>
                            <p className="text-emerald-400/80 text-sm font-medium">{mod.tagline}</p>
                          </div>
                        </div>

                        <p className="text-slate-400 leading-relaxed mb-8 text-[15px]">
                          {mod.desc}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                          {mod.features.map((f) => (
                            <div key={f} className="flex items-center gap-3 text-sm text-slate-300">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                              <span>{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Stats Sidebar */}
                      <div className="flex-1 bg-black/20 border-l border-slate-800/50 flex flex-col justify-center items-center p-8 gap-8 min-w-[200px]">
                        {mod.stats.map((s) => (
                          <div key={s.label} className="text-center">
                            <p className="text-3xl font-bold text-emerald-400 mb-1">{s.value}</p>
                            <p className="text-[11px] text-slate-500 uppercase tracking-widest font-semibold">{s.label}</p>
                          </div>
                        ))}
                      </div>

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