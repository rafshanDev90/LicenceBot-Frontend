"use client";

import { motion } from "framer-motion";
import { Store, Wallet, Zap } from "lucide-react";

const steps = [
  {
    icon: Store,
    title: "Connect Your Store",
    description: "Link your WooCommerce or Shopify store in under 2 minutes.",
  },
  {
    icon: Wallet,
    title: "Fund Your Balance",
    description: "Top up your licence inventory with keys ready for delivery.",
  },
  {
    icon: Zap,
    title: "Auto-Deliver Instantly",
    description: "Orders are fulfilled automatically — keys sent in seconds.",
  },
];

export function HowItWorksMini() {
  return (
    <section className="py-16 sm:py-24 bg-muted/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Get up and running in three simple steps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center text-center relative"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 relative z-10">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                Step {i + 1}
              </span>
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
