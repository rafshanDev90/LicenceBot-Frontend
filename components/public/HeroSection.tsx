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

const workflowStats = [
  { label: "Keys Delivered", value: "850K+", color: "#1DC2A2" },
  { label: "Avg Delivery", value: "<3 seconds", color: "#1DC2A2" },
  { label: "Uptime", value: "99.9%", color: "#3b82f6" },
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
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-background to-background" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-10 md:pt-16 md:pb-24">
        <div className="text-center max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium bg-[#04211d] border border-[#0a4d42] text-[#1dc2a2]">
                  <BadgeIcon className="w-4 h-4 text-[#1dc2a2]" />
                  {slide.badge}
                </span>

                {current === 0 && (
                  <>
                    <span className="px-5 py-2 rounded-full text-sm font-medium bg-[#04211d] border border-[#0a4d42] text-[#1dc2a2]">
                      No setup fees
                    </span>
                    <span className="px-5 py-2 rounded-full text-sm font-medium bg-[#061a33] border border-[#0e3a6e] text-[#3b82f6]">
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
                    <p className="text-2xl md:text-3xl font-bold" style={{ color: "#1DC2A2" }}>
                      {s.value}
                    </p>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mt-1">
                      {s.label}
                    </p>
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

        {/* ── Workflow Visualization Section (matches screenshot) ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 max-w-5xl mx-auto"
        >
          {/* Outer card — dark, rounded, subtle border */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(160deg, #0d1f1c 0%, #0a1628 100%)",
              border: "1px solid rgba(29,194,162,0.18)",
              boxShadow: "0 0 60px rgba(29,194,162,0.06), 0 2px 40px rgba(0,0,0,0.5)",
            }}
          >
            {/* Title bar */}
            <div
              className="flex items-center px-5 py-3 gap-2"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.03)" }}
            >
              {/* traffic lights */}
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
              </div>
              <div className="flex-1 flex justify-center">
                <span
                  className="text-xs font-medium tracking-wide"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  How Auto License Delivery Works
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="px-6 md:px-10 pt-7 pb-8">
              {/* Header row */}
              <div className="flex items-center justify-between mb-7">
                <div className="flex items-center gap-2">
                  {/* Shield icon */}
                  <span
                    className="inline-flex items-center justify-center w-7 h-7 rounded-full"
                    style={{ background: "rgba(29,194,162,0.12)", border: "1px solid rgba(29,194,162,0.25)" }}
                  >
                    <Shield className="w-3.5 h-3.5" style={{ color: "#1DC2A2" }} />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.7)" }}>
                    Live Delivery Demo
                  </span>
                  {/* Uptime pill */}
                  <span
                    className="ml-1 px-2 py-0.5 rounded-full text-[10px] font-semibold"
                    style={{ background: "rgba(29,194,162,0.1)", color: "#1DC2A2", border: "1px solid rgba(29,194,162,0.2)" }}
                  >
                    99.9% Uptime
                  </span>
                </div>

                {/* Processing badge */}
                <span className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: "#1DC2A2" }}>
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: "#1DC2A2", boxShadow: "0 0 6px #1DC2A2", animation: "pulse 1.5s ease-in-out infinite" }}
                  />
                  Processing
                </span>
              </div>

              {/* Steps */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative">
                {demoSteps.map((step, i) => {
                  const isCompleted = activeStep > i;
                  const isCurrent = activeStep === i;
                  const isLast = i === demoSteps.length - 1;
                  const StepIcon = step.icon;

                  // Last step (email) uses blue accent like screenshot
                  const accentColor = isLast ? "#3b82f6" : "#1DC2A2";
                  const borderColor = isLast
                    ? isCompleted || isCurrent ? "rgba(59,130,246,0.6)" : "rgba(255,255,255,0.08)"
                    : isCompleted || isCurrent ? "rgba(29,194,162,0.6)" : "rgba(255,255,255,0.08)";
                  const bgColor = isLast
                    ? isCompleted || isCurrent ? "rgba(59,130,246,0.08)" : "rgba(255,255,255,0.02)"
                    : isCompleted || isCurrent ? "rgba(29,194,162,0.08)" : "rgba(255,255,255,0.02)";
                  const glowColor = isLast
                    ? isCompleted || isCurrent ? "0 0 20px rgba(59,130,246,0.2)" : "none"
                    : isCompleted || isCurrent ? "0 0 20px rgba(29,194,162,0.2)" : "none";

                  return (
                    <div key={step.id} className="relative">
                      <motion.div
                        animate={{
                          borderColor,
                          backgroundColor: bgColor,
                          boxShadow: glowColor,
                        }}
                        transition={{ duration: 0.4 }}
                        className="relative rounded-xl p-5 text-center"
                        style={{ border: `1.5px solid ${borderColor}`, background: bgColor, boxShadow: glowColor }}
                      >
                        {/* Step number badge */}
                        <span
                          className="absolute -top-2.5 -right-2.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                          style={{
                            background: isCompleted || isCurrent ? accentColor : "rgba(255,255,255,0.1)",
                            color: isCompleted || isCurrent ? "#000" : "rgba(255,255,255,0.4)",
                            border: `1.5px solid ${isCompleted || isCurrent ? accentColor : "rgba(255,255,255,0.15)"}`,
                          }}
                        >
                          {i + 1}
                        </span>

                        {/* Icon circle */}
                        <div
                          className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
                          style={{
                            background: isCompleted || isCurrent
                              ? `rgba(${isLast ? "59,130,246" : "29,194,162"},0.15)`
                              : "rgba(255,255,255,0.05)",
                            border: `1.5px solid ${isCompleted || isCurrent ? accentColor : "rgba(255,255,255,0.1)"}`,
                          }}
                        >
                          {isCompleted ? (
                            <CheckCircle className="w-5 h-5" style={{ color: accentColor }} />
                          ) : (
                            <StepIcon className="w-5 h-5" style={{ color: isCompleted || isCurrent ? accentColor : "rgba(255,255,255,0.35)" }} />
                          )}
                        </div>

                        <p
                          className="text-xs font-semibold leading-snug"
                          style={{ color: isCompleted || isCurrent ? accentColor : "rgba(255,255,255,0.4)" }}
                        >
                          {step.label}
                        </p>
                      </motion.div>

                      {/* Arrow between steps */}
                      {i < demoSteps.length - 1 && (
                        <div
                          className="hidden sm:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10"
                          style={{ color: "rgba(29,194,162,0.45)" }}
                        >
                          {/* Paper-plane-style send arrow like screenshot */}
                          <Send className="w-3.5 h-3.5" style={{ transform: "rotate(0deg)" }} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Instant Delivery floating tooltip (screenshot top-right of last card) */}
              <AnimatePresence>
                {activeStep >= demoSteps.length && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-2 flex justify-end pr-1"
                  >
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold"
                      style={{
                        background: "rgba(59,130,246,0.12)",
                        border: "1px solid rgba(59,130,246,0.3)",
                        color: "#3b82f6",
                      }}
                    >
                      <Clock className="w-3 h-3" />
                      Instant Delivery
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Stats row */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {workflowStats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl md:text-3xl font-extrabold" style={{ color: stat.color }}>
                      {stat.value}
                    </p>
                    <p className="text-[10px] uppercase tracking-widest mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Zero Manual Work bottom pill */}
              <div className="mt-6 flex justify-center">
                <span
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold"
                  style={{
                    background: "rgba(29,194,162,0.08)",
                    border: "1px solid rgba(29,194,162,0.2)",
                    color: "#1DC2A2",
                  }}
                >
                  <Zap className="w-3.5 h-3.5" />
                  Zero Manual Work
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}