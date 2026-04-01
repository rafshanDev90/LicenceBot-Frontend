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
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-info/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-10 md:pt-32 md:pb-24">
        <div className="text-center max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                  <BadgeIcon className="w-3.5 h-3.5" />
                  {slide.badge}
                </span>
                {current === 0 && (
                  <>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-success/10 text-success border border-success/20">
                      No setup fees
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-info/10 text-info border border-info/20">
                      14-day free trial
                    </span>
                  </>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                {slide.headline}
              </h1>

              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {slide.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 md:gap-10">
                {slide.stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-primary">{s.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-14 px-8 rounded-xl font-bold bg-primary hover:bg-primary/90 shadow-glow hover:scale-105 transition-all w-full sm:w-auto" asChild>
              <Link href="https://app.licencebot.com/auth">
                Start for Free <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 h-12 text-base" asChild>
              <Link href="/demo">
                <Play className="w-4 h-4 mr-1" /> Try Demo
              </Link>
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-info/20 to-primary/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />

            <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-xl">
              <div className="bg-muted/50 border-b border-border px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-warning/60" />
                  <div className="w-3 h-3 rounded-full bg-success/60" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded-md bg-background/60 text-xs text-muted-foreground">
                    How Auto License Delivery Works
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6 md:p-10 bg-gradient-to-br from-background to-muted/30">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Live Delivery Demo</h3>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success" />
                    </span>
                    <span className="text-xs text-success font-medium">Processing</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  {demoSteps.map((step, i) => {
                    const isActive = activeStep > i;
                    const isCurrent = activeStep === i;
                    const StepIcon = step.icon;
                    return (
                      <div key={step.id} className="relative">
                        <motion.div
                          animate={{
                            scale: isCurrent ? 1.05 : 1,
                            borderColor: isActive
                              ? "hsl(var(--primary))"
                              : isCurrent
                              ? "hsl(var(--info))"
                              : "hsl(var(--border))",
                          }}
                          transition={{ duration: 0.4 }}
                          className={`relative rounded-xl border-2 p-4 md:p-5 text-center transition-all duration-300 ${
                            isActive
                              ? "bg-primary/5 border-primary shadow-md"
                              : isCurrent
                              ? "bg-info/5 border-info shadow-lg"
                              : "bg-muted/30 border-border"
                          }`}
                        >
                          <div
                            className={`w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center transition-colors duration-300 ${
                              isActive ? "bg-primary/20" : isCurrent ? "bg-info/20" : "bg-muted"
                            }`}
                          >
                            {isActive ? (
                              <CheckCircle className="w-5 h-5 text-primary" />
                            ) : (
                              <StepIcon className={`w-5 h-5 ${isCurrent ? "text-info" : "text-muted-foreground"}`} />
                            )}
                          </div>
                          <p
                            className={`text-xs md:text-sm font-medium ${
                              isActive ? "text-primary" : isCurrent ? "text-info" : "text-muted-foreground"
                            }`}
                          >
                            {step.label}
                          </p>
                          <div
                            className={`absolute -top-2 -right-2 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center ${
                              isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {step.id}
                          </div>
                        </motion.div>

                        {i < demoSteps.length - 1 && (
                          <div className="hidden sm:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                            <Send className={`w-4 h-4 transition-colors duration-300 ${isActive ? "text-primary" : "text-border"}`} />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <AnimatePresence>
                  {activeStep >= demoSteps.length && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-6 flex items-center justify-center gap-3 p-4 rounded-xl bg-success/10 border border-success/20"
                    >
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span className="text-sm font-semibold text-success">
                        License key delivered to customer@email.com in 2.4 seconds
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[
                    { label: "Keys Delivered", value: "850K+", color: "text-primary" },
                    { label: "Avg Delivery", value: "<3 seconds", color: "text-success" },
                    { label: "Uptime", value: "99.9%", color: "text-info" },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <p className={`text-xl md:text-2xl font-bold ${s.color}`}>{s.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -left-4 top-1/4 hidden lg:flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border shadow-lg"
            >
              <Shield className="w-4 h-4 text-success" />
              <span className="text-xs font-medium text-foreground">99.9% Uptime</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -right-4 top-1/3 hidden lg:flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border shadow-lg"
            >
              <Clock className="w-4 h-4 text-info" />
              <span className="text-xs font-medium text-foreground">Instant Delivery</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border shadow-lg"
            >
              <Zap className="w-4 h-4 text-warning" />
              <span className="text-xs font-medium text-foreground">Zero Manual Work</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
