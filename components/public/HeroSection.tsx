"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Play, Shield, Clock, Zap, Key, CheckCircle,
  ChevronLeft, ChevronRight, ShoppingBag, Mail, Send,
  BarChart3, Search, Megaphone, MessageSquare,
} from "lucide-react";

const slides = [
  {
    badge: "Core Feature",
    badgeIcon: Key,
    headline: (
      <>
        Auto License Delivery for{" "}
        <span className="text-gradient">WooCommerce & Shopify</span>
      </>
    ),
    subtitle:
      "Keep your balance topped up, and we'll instantly deliver software license keys to customers after purchase — 24/7 with zero manual work.",
    stats: [
      { label: "Keys Delivered", value: "850K+" },
      { label: "Avg Delivery", value: "<3s" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
  {
    badge: "Analytics",
    badgeIcon: BarChart3,
    headline: (
      <>
        Complete Analytics &{" "}
        <span className="text-gradient">Business Intelligence</span>
      </>
    ),
    subtitle:
      "Real-time traffic, conversions, funnels, cohorts, RFM segmentation, and revenue metrics — know exactly how your business is performing.",
    stats: [
      { label: "Stores Managed", value: "2,500+" },
      { label: "Data Points", value: "1.2M+" },
      { label: "Report Modules", value: "13" },
    ],
  },
  {
    badge: "SEO Suite",
    badgeIcon: Search,
    headline: (
      <>
        SEO Tools & Google{" "}
        <span className="text-gradient">Search Console</span>
      </>
    ),
    subtitle:
      "Keyword rankings, site audits, SERP analysis, 18+ utility tools, and full Google Search Console integration — dominate search results.",
    stats: [
      { label: "SEO Tools", value: "18+" },
      { label: "Keywords", value: "Unlimited" },
      { label: "GSC Sync", value: "Daily" },
    ],
  },
  {
    badge: "Marketing & Support",
    badgeIcon: Megaphone,
    headline: (
      <>
        Email Marketing &{" "}
        <span className="text-gradient">Live Chat Support</span>
      </>
    ),
    subtitle:
      "Automated email sequences, broadcast campaigns, subscriber segmentation, and omnichannel live chat with AI-powered summaries.",
    stats: [
      { label: "Emails Sent", value: "500K+" },
      { label: "Open Rate", value: "68%" },
      { label: "Chat CSAT", value: "94%" },
    ],
  },
];

const demoSteps = [
  { id: 1, label: "Customer places order", icon: ShoppingBag },
  { id: 2, label: "Payment verified", icon: CheckCircle },
  { id: 3, label: "Key selected from vault", icon: Key },
  { id: 4, label: "Delivered via email", icon: Mail },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((p) => (p + 1) % (demoSteps.length + 1));
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];
  const BadgeIcon = slide.badgeIcon;

  return (
    <section
      className="relative overflow-hidden bg-background"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background elements removed or neutralized for a professional dark look */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-background to-background" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-10 md:pt-32 md:pb-24">
        <div className="text-center max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-muted border border-border text-foreground">
                  <BadgeIcon className="w-3.5 h-3.5 text-primary" />
                  {slide.badge}
                </span>
                {current === 0 && (
                  <>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/50 text-secondary-foreground border border-border">
                      No setup fees
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/50 text-secondary-foreground border border-border">
                      14-day free trial
                    </span>
                  </>
                )}
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                {slide.headline}
              </h1>

              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {slide.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-12">
                {slide.stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-foreground">{s.value}</p>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-14 px-8 rounded-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-all w-full sm:w-auto" asChild>
              <Link href="https://app.licencebot.com/auth">
                Start for Free <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 h-14 rounded-xl border-border hover:bg-muted text-base" asChild>
              <Link href="/demo">
                <Play className="w-4 h-4 mr-2 fill-current" /> Try Demo
              </Link>
            </Button>
          </div>

          {/* Slider Pagination Controls */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Demo Section Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <div className="relative">
            {/* Subtle border glow only for the card */}
            <div className="absolute -inset-[1px] bg-gradient-to-b from-border to-transparent rounded-2xl -z-10" />

            <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-muted/30 border-b border-border px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/40" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded-md bg-background/40 border border-border/50 text-[10px] uppercase tracking-wider text-muted-foreground">
                    Workflow Visualization
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-12">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                  {demoSteps.map((step, i) => {
                    const isActive = activeStep > i;
                    const isCurrent = activeStep === i;
                    const StepIcon = step.icon;
                    return (
                      <div key={step.id} className="relative">
                        <motion.div
                          className={`relative rounded-xl border-2 p-5 text-center transition-all duration-500 ${
                            isActive
                              ? "bg-primary/5 border-primary/40 shadow-sm"
                              : isCurrent
                              ? "bg-primary/10 border-primary shadow-[0_0_15px_rgba(var(--primary),0.1)]"
                              : "bg-background border-border"
                          }`}
                        >
                          <div
                            className={`w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center transition-colors duration-500 ${
                              isActive || isCurrent ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {isActive ? (
                              <CheckCircle className="w-6 h-6" />
                            ) : (
                              <StepIcon className="w-6 h-6" />
                            )}
                          </div>
                          <p className={`text-xs font-bold uppercase tracking-tight ${isActive || isCurrent ? "text-foreground" : "text-muted-foreground"}`}>
                            {step.label}
                          </p>
                        </motion.div>

                        {i < demoSteps.length - 1 && (
                          <div className="hidden sm:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10 opacity-30">
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <AnimatePresence>
                  {activeStep >= demoSteps.length && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-8 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 flex items-center justify-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-sm font-medium text-emerald-500">
                        Success: License key delivered to customer in 2.4s
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}