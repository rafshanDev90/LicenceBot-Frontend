"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does automatic key delivery work?",
    a: "Once a customer completes a purchase, LicenceBot instantly assigns a key from your inventory and delivers it via email, your store's order page, or Telegram — all within seconds.",
  },
  {
    q: "Which e-commerce platforms are supported?",
    a: "We currently support WooCommerce and Shopify with native integrations. You can also use our REST API or Telegram bot for custom setups.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes! Our Starter plan is completely free and includes 1 store, 500 deliveries per month, and basic analytics. No credit card required.",
  },
  {
    q: "How secure is my licence key inventory?",
    a: "All keys are encrypted at rest and in transit. Access is controlled via role-based permissions, and every action is logged with a full audit trail.",
  },
  {
    q: "Can I use LicenceBot for software other than games?",
    a: "Absolutely. LicenceBot works with any digital product that uses licence keys — antivirus software, productivity suites, VPNs, SaaS subscriptions, and more.",
  },
  {
    q: "Do I need technical skills to get started?",
    a: "Not at all. Connect your store with a few clicks, upload your keys, and you're live. Our dashboard is designed to be intuitive for non-technical users.",
  },
];

export function FAQSection() {
  return (
    <section className="py-16 sm:py-24 bg-muted/20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-foreground">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
