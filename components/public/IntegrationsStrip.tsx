"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingBag, ShoppingCart, Send, Code2, ArrowRight } from "lucide-react";

const integrations = [
  { icon: ShoppingCart, label: "WooCommerce" },
  { icon: ShoppingBag, label: "Shopify" },
  { icon: Send, label: "Telegram" },
  { icon: Code2, label: "REST API" },
];

export function IntegrationsStrip() {
  return (
    <section className="py-12 border-y border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-8 flex-wrap justify-center">
            {integrations.map((int, i) => (
              <motion.div
                key={int.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-2.5 text-muted-foreground"
              >
                <int.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{int.label}</span>
              </motion.div>
            ))}
          </div>
          <Link
            href="/integrations"
            className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1 shrink-0"
          >
            View all integrations <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
