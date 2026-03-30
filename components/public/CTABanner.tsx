"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-info" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />

          <div className="relative px-6 py-12 sm:px-8 sm:py-16 md:py-20 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to grow your business with LicenceBot?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-xl mx-auto">
              Analytics, SEO, email marketing, live chat, key checker, and automated delivery — try it all free for 14 days.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="px-8 h-12 bg-background text-foreground hover:bg-background/90"
                asChild
              >
                <Link href="/auth">
                  Start Free Trial <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 h-12 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
