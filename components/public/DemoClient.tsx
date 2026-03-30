"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart3, ShoppingBag, Key, MessageSquare, Mail, Megaphone,
  ArrowRight, Monitor, Shield, Zap, Search, Globe,
  Wrench, Users, Radar, KeyRound, Sparkles, Clock
} from "lucide-react";

const dashboardModules = [
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    desc: "Real-time traffic, conversions, funnels, cohorts, and revenue metrics — all in one unified view.",
    stats: [
      { label: "Revenue", value: "$124,892" },
      { label: "Visitors", value: "28.4K" },
      { label: "Conversions", value: "4.2%" },
    ],
    category: "analytics",
  },
  {
    icon: Search,
    title: "SEO & Rankings",
    desc: "Daily keyword tracking, site audits, competitor analysis, and AI-generated strategic insights.",
    stats: [
      { label: "Keywords", value: "1,247" },
      { label: "In Top 10", value: "342" },
      { label: "Avg Pos", value: "14.3" },
    ],
    category: "analytics",
  },
  {
    icon: Globe,
    title: "Google Search Console",
    desc: "Performance metrics, index coverage, core web vitals, crawl stats, and security alerts.",
    stats: [
      { label: "Impressions", value: "892K" },
      { label: "Clicks", value: "34.2K" },
      { label: "CTR", value: "3.8%" },
    ],
    category: "analytics",
  },
  {
    icon: Wrench,
    title: "18+ SEO Tools",
    desc: "Robots.txt, sitemap generator, schema builder, hreflang checker, and many more.",
    stats: [
      { label: "Tools", value: "18+" },
      { label: "Audits", value: "4,892" },
      { label: "Issues", value: "127" },
    ],
    category: "tools",
  },
  {
    icon: ShoppingBag,
    title: "WooCommerce Suite",
    desc: "Multi-store order management, product sync, customer profiles, and cart recovery.",
    stats: [
      { label: "Orders", value: "3,847" },
      { label: "Products", value: "1,249" },
      { label: "Stores", value: "12" },
    ],
    category: "commerce",
  },
  {
    icon: Key,
    title: "Licence Inventory",
    desc: "Manage key pools, stock levels, auto-assign rules, and delivery routing per SKU.",
    stats: [
      { label: "Active", value: "12,493" },
      { label: "Pools", value: "24" },
      { label: "Delivered", value: "9,847" },
    ],
    category: "commerce",
  },
  {
    icon: KeyRound,
    title: "Key Checker",
    desc: "Validate keys, retrieve CIDs, redeem products, and check Office 365 licences.",
    stats: [
      { label: "Checked", value: "24,891" },
      { label: "Valid", value: "94%" },
      { label: "APIs", value: "5" },
    ],
    category: "tools",
  },
  {
    icon: MessageSquare,
    title: "Live Chat & Support",
    desc: "Omnichannel support with AI summaries, SLA tracking, and sentiment analysis.",
    stats: [
      { label: "Active", value: "12" },
      { label: "Response", value: "2m 14s" },
      { label: "CSAT", value: "94%" },
    ],
    category: "support",
  },
  {
    icon: Mail,
    title: "Mail Client",
    desc: "Multi-account email inbox with custom signatures, smart filters, and analytics.",
    stats: [
      { label: "Sent", value: "847" },
      { label: "Opens", value: "68%" },
      { label: "Accounts", value: "5" },
    ],
    category: "support",
  },
  {
    icon: Megaphone,
    title: "Email Marketing",
    desc: "Automated sequences, broadcasts, drag-and-drop templates, and segmentation.",
    stats: [
      { label: "Subs", value: "14.2K" },
      { label: "Campaigns", value: "38" },
      { label: "CTR", value: "4.2%" },
    ],
    category: "support",
  },
  {
    icon: Radar,
    title: "Merchant Leads",
    desc: "Discover merchants with engagement scoring, outreach tracking, and pipelines.",
    stats: [
      { label: "Leads", value: "2,847" },
      { label: "Contacted", value: "1,204" },
      { label: "Converted", value: "342" },
    ],
    category: "tools",
  },
  {
    icon: Users,
    title: "Affiliate Program",
    desc: "Referral tracking, commission management, dashboards, and automated payouts.",
    stats: [
      { label: "Affiliates", value: "247" },
      { label: "Referrals", value: "1,892" },
      { label: "Payouts", value: "$8.4K" },
    ],
    category: "commerce",
  },
];

const filterTabs = [
  { key: "all", label: "All Modules" },
  { key: "analytics", label: "Analytics & SEO" },
  { key: "commerce", label: "Commerce" },
  { key: "support", label: "Communication" },
  { key: "tools", label: "Tools" },
];

const highlights = [
  { icon: Monitor, value: "12+", label: "Dashboard Modules" },
  { icon: Shield, value: "Read-Only", label: "Demo Access" },
  { icon: Zap, value: "Live", label: "Sample Data" },
  { icon: Clock, value: "No Signup", label: "Required" },
];

export function DemoClient() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = activeTab === "all"
    ? dashboardModules
    : dashboardModules.filter((m) => m.category === activeTab);

  return (
    <div className="pb-24 pt-8">
      {/* Highlight stats */}
      <section className="mb-16 border-y border-border/50 bg-muted/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map(({ icon: Icon, value, label }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 justify-center group"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground text-primary transition-all duration-300 shadow-glow shadow-primary/10">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-black text-foreground font-display tracking-tight leading-none mb-1 group-hover:text-primary transition-colors">{value}</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Module previews with tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-display tracking-tight">
            All <span className="text-gradient">12+ Modules</span> at Your Fingertips
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Preview every tool you'll have access to — from analytics and SEO to email marketing and licence management.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                activeTab === tab.key
                  ? "bg-primary text-primary-foreground shadow-glow shadow-primary/20 scale-105"
                  : "bg-muted/50 border border-border/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((mod, i) => {
              const Icon = mod.icon;
              return (
                <motion.div
                  key={mod.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  layout
                  className="h-full"
                >
                  <Card className="group h-full overflow-hidden hover:shadow-glow hover:border-primary/30 border-border/50 bg-card/40 backdrop-blur-sm transition-all duration-500">
                    <div className="h-1 w-full bg-gradient-to-r from-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 shadow-glow shadow-primary/5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                          <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{mod.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-grow">{mod.desc}</p>

                      <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-card border border-border/50">
                        {mod.stats.map((stat) => (
                          <div key={stat.label} className="text-center">
                            <p className="text-lg font-black text-primary tracking-tight">{stat.value}</p>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mt-1">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Embedded CTA */}
      <section className="mt-24 max-w-4xl mx-auto px-4 sm:px-6">
        <Card className="overflow-hidden border-primary/20 bg-card/30 backdrop-blur-md shadow-2xl relative">
          <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
          
          <CardContent className="p-12 text-center relative z-10">
            <div className="w-16 h-16 rounded-3xl bg-primary/20 flex items-center justify-center mx-auto mb-6 shadow-glow shadow-primary/20">
              <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4 font-display">
              Ready to try it yourself?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Sign up for a free account and get full access to the dashboard with a 14-day trial. No credit card required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="h-12 px-10 gap-2 text-xs font-bold uppercase tracking-widest shadow-glow shadow-primary/20" asChild>
                <Link href="/auth">Start Free Trial <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-xs font-bold uppercase tracking-widest hover:bg-primary/5 hover:text-primary border-border/50" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
