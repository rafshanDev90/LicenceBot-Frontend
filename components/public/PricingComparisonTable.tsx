"use client";

import { Check, Minus } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { name: "Licence Delivery System", basic: true, standard: true, pro: true, enterprise: true },
  { name: "Stores", basic: "1", standard: "5", pro: "Multi-store", enterprise: "Unlimited" },
  { name: "Analytics", basic: "Basic", standard: "Advanced", pro: "Full Suite", enterprise: "Full Suite" },
  { name: "Telegram Notifications", basic: true, standard: true, pro: true, enterprise: true },
  { name: "Cart Recovery", basic: true, standard: true, pro: true, enterprise: true },
  { name: "Email Automation", basic: true, standard: true, pro: true, enterprise: true },
  { name: "Live Delivery Logs", basic: true, standard: true, pro: true, enterprise: true },
  { name: "Upload Your Own Stock", basic: true, standard: true, pro: true, enterprise: true },
  { name: "Team Collaboration", basic: false, standard: true, pro: true, enterprise: true },
  { name: "Priority Support", basic: false, standard: true, pro: true, enterprise: true },
  { name: "Marketplace Routing", basic: false, standard: false, pro: true, enterprise: true },
  { name: "Dedicated Manager", basic: false, standard: false, pro: true, enterprise: true },
  { name: "Premium Integrations", basic: false, standard: false, pro: true, enterprise: true },
  { name: "Custom SLA", basic: false, standard: false, pro: false, enterprise: true },
  { name: "White-label Options", basic: false, standard: false, pro: false, enterprise: true },
];

const renderCell = (value: boolean | string) => {
  if (typeof value === "string") {
    return <span className="text-sm font-semibold text-foreground">{value}</span>;
  }
  return value ? (
    <Check className="w-5 h-5 text-primary mx-auto drop-shadow-[0_0_8px_rgba(0,255,223,0.5)]" />
  ) : (
    <Minus className="w-4 h-4 text-muted-foreground/30 mx-auto" />
  );
};

export function PricingComparisonTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="overflow-x-auto custom-scrollbar"
    >
      <table className="w-full min-w-[760px] border-collapse">
        <thead>
          <tr className="border-b border-border bg-muted/30">
            <th className="text-left py-6 px-6 text-sm font-bold uppercase tracking-wider text-muted-foreground">Feature</th>
            <th className="text-center py-6 px-6 text-sm font-bold uppercase tracking-wider text-muted-foreground">Basic</th>
            <th className="text-center py-6 px-6 text-sm font-bold uppercase tracking-wider text-muted-foreground">Standard</th>
            <th className="text-center py-6 px-6 text-sm font-bold uppercase tracking-wider text-primary bg-primary/5">Pro</th>
            <th className="text-center py-6 px-6 text-sm font-bold uppercase tracking-wider text-muted-foreground">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, i) => (
            <tr key={feature.name} className={`border-b border-border/50 transition-colors hover:bg-primary/5 group`}>
              <td className="py-4 px-6 text-sm font-medium text-foreground group-hover:text-primary transition-colors">{feature.name}</td>
              <td className="py-4 px-6 text-center">{renderCell(feature.basic)}</td>
              <td className="py-4 px-6 text-center">{renderCell(feature.standard)}</td>
              <td className="py-4 px-6 text-center bg-primary/5 font-bold">{renderCell(feature.pro)}</td>
              <td className="py-4 px-6 text-center">{renderCell(feature.enterprise)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
