"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    highlights: ["1 store", "500 deliveries/mo", "Basic analytics", "Email support"],
  },
  {
    name: "Pro",
    price: "$29/mo",
    popular: true,
    highlights: ["5 stores", "Unlimited deliveries", "Full analytics & SEO", "Priority support"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    highlights: ["Unlimited stores", "Custom integrations", "Dedicated manager", "SLA guarantee"],
  },
];

export function PricingTeaser() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Start free. Scale as you grow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl border p-6 transition-all duration-300 ${
                plan.popular
                  ? "border-primary bg-primary/5 shadow-lg scale-[1.02]"
                  : "border-border bg-card hover:border-primary/20"
              }`}
            >
              {plan.popular && (
                <span className="text-xs font-bold text-primary uppercase tracking-widest">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-foreground mt-1">{plan.name}</h3>
              <p className="text-3xl font-extrabold text-foreground mt-2 mb-5">{plan.price}</p>
              <ul className="space-y-2.5">
                {plan.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="px-8 h-12" asChild>
            <Link href="/pricing">
              Compare All Plans <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
