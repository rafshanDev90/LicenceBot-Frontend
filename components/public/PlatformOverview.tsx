"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  BarChart3, Search, Zap, Mail, MessageSquare, Key,
  Users, Shield, Globe, Wrench, TrendingUp, ShoppingBag,
  ArrowRight, Megaphone,
} from "lucide-react";

const heroFeatures = [
  {
    icon: BarChart3,
    title: "Complete Analytics",
    description: "Real-time traffic, conversions, funnels, cohorts, RFM segmentation, and retention heatmaps — all built in.",
    gradient: "from-primary/20 to-info/10",
  },
  {
    icon: Search,
    title: "SEO & Rankings",
    description: "Track keyword rankings, run site audits, speed tests, SERP analysis, and 18+ SEO utility tools from one hub.",
    gradient: "from-success/20 to-primary/10",
  },
  {
    icon: Zap,
    title: "Auto Key Delivery",
    description: "Licence keys delivered to customers within seconds of purchase. Multi-channel routing with fallback support.",
    gradient: "from-warning/20 to-primary/10",
  },
];

const modules = [
  { icon: Globe, label: "Search Console" },
  { icon: Megaphone, label: "Email Marketing" },
  { icon: Mail, label: "Mail Client" },
  { icon: MessageSquare, label: "Live Chat" },
  { icon: Key, label: "Key Checker" },
  { icon: Users, label: "Merchant Leads" },
  { icon: ShoppingBag, label: "WooCommerce" },
  { icon: Shield, label: "Licence Vault" },
  { icon: TrendingUp, label: "Affiliates" },
  { icon: Wrench, label: "18+ SEO Tools" },
];

export function PlatformOverview() {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            One Platform, <span className="text-gradient">Every Tool You Need</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Analytics, SEO, email marketing, live chat, key checker, and automated delivery — all in one dashboard.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {heroFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative rounded-2xl border border-border bg-gradient-to-br ${f.gradient} p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="w-14 h-14 rounded-xl bg-background/80 border border-border flex items-center justify-center mb-5">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-12">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors"
            >
              <mod.icon className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm font-medium text-foreground truncate">{mod.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="px-8 h-12" asChild>
              <Link href="/demo">
                Try Demo Now <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 h-12" asChild>
              <Link href="/features">View All Features</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
