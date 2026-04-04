"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background Gradient matching the screenshot */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2DD4BF] via-[#2DD4BF] to-[#3B82F6]" />
          
          <div className="relative px-6 py-10 sm:px-8 sm:py-12 text-center"> {/* ইনার প্যাডিং কমানো হয়েছে */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#09090b] tracking-tight">
              Ready to grow your business with LicenceBot?
            </h2>
            <p className="mt-3 text-base md:text-lg text-[#09090b]/70 max-w-2xl mx-auto font-medium">
              Analytics, SEO, email marketing, live chat, key checker, and automated delivery — try it all free for 14 days.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              {/* Start Free Trial - Black Button */}
              <Button 
                size="lg" 
                className="h-12 px-7 rounded-xl font-bold bg-[#09090b] text-white hover:bg-[#18181b] transition-all w-full sm:w-auto flex items-center justify-center gap-2" 
                asChild
              >
                <Link href="https://app.licencebot.com/auth">
                  Start Free Trial <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              {/* Contact Sales - Appears on hover */}
              <Button 
                size="lg" 
                variant="ghost"
                className="h-12 px-7 rounded-xl font-bold text-[#09090b]/60 border border-transparent hover:border-[#09090b]/10 hover:bg-[#09090b]/5 hover:text-[#09090b] transition-all w-full sm:w-auto" 
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