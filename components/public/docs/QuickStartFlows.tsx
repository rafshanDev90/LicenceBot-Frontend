import { motion } from "framer-motion";
import { Rocket, Store, BarChart3, Key } from "lucide-react";
import type { DocSection } from "./docsData";

interface QuickStartFlow {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  sectionIds: string[];
}

const quickStartFlows: QuickStartFlow[] = [
  {
    id: "starter-guide",
    title: "⚡ Starter Guide",
    description: "Create account → connect store → go live. Everything in one walkthrough.",
    icon: Rocket,
    color: "from-primary/20 to-primary/5",
    sectionIds: ["starter-guide"],
  },
  {
    id: "connect-store",
    title: "Connect Your Store",
    description: "Link WooCommerce or Shopify and start syncing orders, products & customers.",
    icon: Store,
    color: "from-emerald-500/20 to-emerald-500/5",
    sectionIds: ["connect-woocommerce", "connect-shopify"],
  },
  {
    id: "setup-analytics",
    title: "Set Up Analytics",
    description: "Monitor traffic, track events, and build conversion funnels.",
    icon: BarChart3,
    color: "from-blue-500/20 to-blue-500/5",
    sectionIds: ["analytics-dashboard", "audience"],
  },
  {
    id: "license-delivery",
    title: "License Key Delivery",
    description: "Add products, upload serial numbers, and automate key delivery.",
    icon: Key,
    color: "from-amber-500/20 to-amber-500/5",
    sectionIds: ["manage-licenses", "sales-channels"],
  },
];

interface QuickStartFlowsProps {
  onSelectSection: (sectionId: string) => void;
}

export function QuickStartFlows({ onSelectSection }: QuickStartFlowsProps) {
  return (
    <section className="container mx-auto px-4 pb-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-bold text-foreground mb-1">Quick Start</h2>
        <p className="text-sm text-muted-foreground mb-6">Follow these guided flows to get up and running fast.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickStartFlows.map((flow, i) => {
            const Icon = flow.icon;
            return (
              <motion.button
                key={flow.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => onSelectSection(flow.sectionIds[0])}
                className={`group relative text-left p-5 rounded-2xl border border-border bg-gradient-to-br ${flow.color} hover:border-primary/40 transition-all duration-200 hover:shadow-lg`}
              >
                <div className="p-2 rounded-xl bg-background/60 w-fit mb-3">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{flow.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{flow.description}</p>
                <span className="mt-3 inline-block text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Start guide →
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
