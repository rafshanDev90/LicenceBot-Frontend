"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart3, ShoppingBag, Key, Search, MessageSquare, Mail, 
  CheckCircle2, Globe, Wrench, Users, Target, MousePointer2,
  MailQuestion, Zap, ShieldCheck, Database, Layout, Layers, Users2,
  Lock, TrendingUp, Sparkles, MessageCircle
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
    tagline: "Real-time insights into every visitor",
    desc: "Track visitors, sessions, and conversions with real-time dashboards. Understand your audience with geo breakdowns, funnel tracking, and RFM segmentation.",
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
      { value: "6", label: "Formats" },
    ],
  },
  {
    id: "woocommerce",
    icon: ShoppingBag,
    title: "WooCommerce Hub",
    tagline: "Multi-store order & product sync",
    desc: "Full multi-store management from a single dashboard. Sync orders, products, and customers. Recover abandoned carts and track store performance.",
    features: [
      "Multi-store management",
      "Order & product sync",
      "Customer profiles & history",
      "Coupon tracking",
      "Abandoned cart recovery",
      "Refund processing",
    ],
    category: "commerce",
    stats: [
      { value: "∞", label: "Stores" },
      { value: "Real-time", label: "Sync" },
      { value: "100%", label: "Coverage" },
    ],
    reverse: true,
  },
  {
    id: "licence",
    icon: Key,
    title: "Licence Inventory",
    tagline: "Automated key management",
    desc: "Manage digital key inventory with pool assignments and stock alerts. Upload keys in bulk and let automation handle delivery per SKU.",
    features: [
      "Key pool management",
      "Auto-assign products",
      "Stock level alerts",
      "Bulk CSV upload",
      "Delivery audit trail",
      "Multi-channel routing",
    ],
    category: "commerce",
    stats: [
      { value: "<3s", label: "Delivery" },
      { value: "AES-256", label: "Security" },
      { value: "99.9%", label: "Success" },
    ],
  },
  {
    id: "seo-rankings",
    icon: Search,
    title: "SEO & Rankings",
    tagline: "Daily keyword tracking and AI-powered insights",
    desc: "Monitor your keyword rankings daily across all search engines. Run comprehensive site audits, analyze competitors, track backlinks, and get AI-generated strategic recommendations to improve your visibility.",
    features: [
      "Daily position tracking",
      "Competitor monitoring",
      "Backlink analysis",
      "AI SERP analysis",
      "Site audits & speed tests",
      "Schema markup validation",
    ],
    category: "analytics",
    stats: [
      { value: "Daily", label: "Tracking" },
      { value: "AI", label: "Insights" },
      { value: "18+", label: "Tools" },
    ],
    color: "purple"
  },
  {
    id: "seo",
    icon: Globe,
    title: "Google Search Console",
    tagline: "Full GSC integration",
    desc: "Connect your GSC data directly. View performance metrics, index coverage, core web vitals, and crawl stats without leaving the dashboard.",
    features: [
      "Performance analytics",
      "Core web vitals",
      "Security & manual actions",
      "Index coverage reports",
      "Crawl stats & errors",
      "Sitemap management",
    ],
    category: "analytics",
    stats: [
      { value: "Live", label: "Data" },
      { value: "All", label: "Properties" },
      { value: "Auto", label: "Sync" },
    ],
    reverse: true,
  },
  {
    id: "seo-tools",
    icon: Wrench,
    title: "18+ SEO Tools",
    tagline: "Technical SEO toolkit",
    desc: "Robots.txt validator, XML sitemap generator, schema builder, and many more tools for technical SEO optimization and analysis.",
    features: [
      "Robots.txt validator",
      "Schema JSON-LD builder",
      ".htaccess tester",
      "Sitemap generator",
      "Hreflang checker",
      "Meta tag analyzer",
    ],
    category: "tools",
    stats: [
      { value: "18+", label: "Tools" },
      { value: "Free", label: "Access" },
      { value: "Instant", label: "Results" },
    ],
  },
  {
    id: "support",
    icon: MessageCircle,
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
    reverse: true,
    color: "emerald"
  },
  {
    id: "mail",
    icon: Mail,
    title: "Mail Client",
    tagline: "Integrated multi-account inbox",
    desc: "A complete email client integrated into your dashboard. Custom signatures, smart filters, and thread management in one place.",
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
  {
    id: "email-marketing",
    icon: MailQuestion,
    title: "Email Marketing",
    tagline: "Automations & segmentation",
    desc: "Build automated sequences and send targeted broadcasts. Segment your audience by engagement level and purchase frequency.",
    features: [
      "Automation workflows",
      "Drag-and-drop designer",
      "Open & click tracking",
      "Broadcast campaigns",
      "Audience segmentation",
      "A/B testing",
    ],
    category: "communication",
    stats: [
      { value: "∞", label: "Subscribers" },
      { value: "Drag", label: "Designer" },
      { value: "A/B", label: "Testing" },
    ],
    reverse: true,
    color: "purple"
  },
  {
    id: "merchant-leads",
    icon: Target,
    title: "Merchant Leads",
    tagline: "Lead discovery and pipeline",
    desc: "Discover potential merchant leads with engagement scoring and pipeline tracking. Automate follow-ups to increase conversion rates.",
    features: [
      "Lead discovery engine",
      "Outreach tracking",
      "Lead analytics",
      "Engagement scoring",
      "Pipeline management",
      "Auto follow-ups",
    ],
    category: "commerce",
    stats: [
      { value: "Smart", label: "Scoring" },
      { value: "Pipeline", label: "Tracking" },
      { value: "Auto", label: "Follow-up" },
    ],
    color: "emerald"
  },
  {
    id: "key-checker",
    icon: ShieldCheck,
    title: "Key Checker",
    tagline: "Validate keys instantly",
    desc: "Validate licence keys, retrieve CIDs, and redeem Microsoft keys. Essential automated tools for digital key merchants.",
    features: [
      "Key validation",
      "Microsoft redemption",
      "API management",
      "CID retrieval",
      "Office 365 checks",
      "Bulk validation",
    ],
    category: "tools",
    stats: [
      { value: "5+", label: "Checkers" },
      { value: "Bulk", label: "Support" },
      { value: "API", label: "Access" },
    ],
    reverse: true,
    color: "orange"
  },
  {
    id: "affiliate",
    icon: Users2,
    title: "Affiliate Program",
    tagline: "Referral & payout management",
    desc: "Launch your own affiliate program with custom rates, referral tracking, performance dashboards, and automated payouts.",
    features: [
      "Referral link generation",
      "Payout management",
      "Custom terms & rates",
      "Commission tracking",
      "Performance dashboards",
      "Cookie attribution",
    ],
    category: "commerce",
    stats: [
      { value: "Custom", label: "Rates" },
      { value: "Auto", label: "Payouts" },
      { value: "30-day", label: "Cookie" },
    ],
    color: "blue"
  },
  {
    id: "multi-store",
    icon: Layers,
    title: "Multi-Store Management",
    tagline: "Unified store control",
    desc: "Connect unlimited WooCommerce and Shopify stores. Switch between stores instantly and manage operations from one central hub.",
    features: [
      "Unlimited connections",
      "Cross-store analytics",
      "Team access controls",
      "Unified dashboard view",
      "Per-store settings",
      "Performance comparison",
    ],
    category: "commerce",
    stats: [
      { value: "∞", label: "Stores" },
      { value: "Unified", label: "Dashboard" },
      { value: "RBAC", label: "Access" },
    ],
    reverse: true,
    color: "emerald"
  },
];

const whyChooseUs = [
  {
    title: "All-in-One Platform",
    icon: Zap,
    desc: "Analytics, SEO, email, licensing, and 18+ tools in one place."
  },
  {
    title: "Enterprise Security",
    icon: Lock,
    desc: "Role-based access, encrypted storage, and full audit trails."
  },
  {
    title: "Built for Scale",
    icon: TrendingUp,
    desc: "Multi-store support for solo merchants to enterprise teams."
  },
  {
    title: "AI-Powered",
    icon: Sparkles,
    desc: "AI insights, sentiment analysis, and smart recommendations."
  }
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

  const getColorClasses = (mod: any) => {
    if (mod.color) return mod.color;
    if (mod.id === "seo-tools") return "pink";
    if (mod.id === "email-marketing") return "purple";
    if (mod.id === "key-checker") return "orange";
    return "emerald";
  };

  const colorMap: Record<string, any> = {
    emerald: {
      bg: "bg-emerald-500/10",
      text: "text-emerald-400",
      border: "border-emerald-500/20",
      tagline: "text-emerald-400/80",
      icon: "text-emerald-500"
    },
    pink: {
      bg: "bg-pink-500/10",
      text: "text-pink-400",
      border: "border-pink-500/20",
      tagline: "text-pink-400/80",
      icon: "text-pink-500"
    },
    purple: {
      bg: "bg-purple-500/10",
      text: "text-purple-400",
      border: "border-purple-500/20",
      tagline: "text-purple-400/80",
      icon: "text-purple-500"
    },
    orange: {
      bg: "bg-orange-500/10",
      text: "text-orange-400",
      border: "border-orange-500/20",
      tagline: "text-orange-400/80",
      icon: "text-orange-500"
    },
    blue: {
      bg: "bg-blue-500/10",
      text: "text-blue-400",
      border: "border-blue-500/20",
      tagline: "text-blue-400/80",
      icon: "text-blue-500"
    }
  };

  return (
    <section className="py-12 md:py-20 bg-[#020617] text-white">
      <div className="container">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={cn(
                "px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 border",
                activeCategory === cat.key
                  ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                  : "bg-slate-900/50 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Feature Modules */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((mod) => {
              const themeColor = getColorClasses(mod);
              const styles = colorMap[themeColor];

              return (
                <motion.div
                  key={mod.id}
                  id={mod.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="scroll-mt-32"
                >
                  <Card className="overflow-hidden border-slate-800 bg-[#0b1120] hover:border-slate-700 transition-colors">
                    <CardContent className="p-0">
                      <div className={cn(
                        "grid grid-cols-1 lg:grid-cols-12 min-h-[260px]",
                        mod.reverse && "lg:[&>*:first-child]:col-start-5"
                      )}>
                        
                        <div className="lg:col-span-8 p-6 md:p-8">
                          <div className="flex items-center gap-4 mb-4">
                            <div className={cn(
                              "w-10 h-10 rounded-lg flex items-center justify-center border transition-all",
                              styles.bg, styles.text, styles.border
                            )}>
                              <mod.icon className="w-5 h-5" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-white leading-tight">{mod.title}</h3>
                              <p className={cn("text-xs font-medium uppercase tracking-wide", styles.tagline)}>
                                {mod.tagline}
                              </p>
                            </div>
                          </div>

                          <p className="text-slate-400 leading-relaxed mb-6 text-sm max-w-3xl">
                            {mod.desc}
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                            {mod.features.map((f) => (
                              <div key={f} className="flex items-center gap-2.5 text-[13px] text-slate-300">
                                <CheckCircle2 className={cn("w-3.5 h-3.5 shrink-0", styles.icon)} />
                                <span>{f}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className={cn(
                          "lg:col-span-4 bg-black/20 border-slate-800/50 flex flex-row lg:flex-col justify-around lg:justify-center items-center p-6 gap-4 lg:gap-6",
                          mod.reverse ? "lg:border-r lg:col-start-1 lg:row-start-1" : "lg:border-l"
                        )}>
                          {mod.stats.map((s) => (
                            <div key={s.label} className="text-center">
                              <p className={cn("text-2xl font-bold leading-none mb-1", styles.text)}>
                                {s.value}
                              </p>
                              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{s.label}</p>
                            </div>
                          ))}
                        </div>

                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">
              Why Choose <span className="text-emerald-400">LicenceBot?</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm">
              Stop juggling multiple tools. One unified platform replaces them all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyChooseUs.map((item, idx) => (
              <Card key={idx} className="bg-[#0b1120] border-slate-800/50 hover:bg-[#0f172a] transition-all duration-300">
                <CardContent className="p-6 text-center flex flex-col items-center">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 text-emerald-400">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-md font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}