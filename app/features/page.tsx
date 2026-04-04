import { Metadata } from "next";
import { PageHeader } from "@/components/public/PageHeader";
import { FeaturesClient } from "@/components/public/FeaturesClient";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { PublicFooter } from "@/components/public/PublicFooter";
import { CTABanner } from "@/components/public/CTABanner";
import { Layers, BarChart3, ShoppingBag, Key, Search, MessageSquare, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Features | LicenceBot",
  description: "Explore the comprehensive features of LicenceBot — analytics, SEO tools, email marketing, live chat, licence management, and more.",
  alternates: {
    canonical: "https://licencebot.com/features",
  },
  openGraph: {
    title: "Features | LicenceBot",
    description: "Explore the comprehensive features of LicenceBot — analytics, SEO tools, email marketing, live chat, licence management, and more.",
    url: "https://licencebot.com/features",
    type: "website",
  },
};

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#020817] text-white selection:bg-emerald-500/30">
      <PublicNavbar />
      
      <main className="flex-1">
        {/* Hero Section - Increased Padding Top (pt-32 lg:pt-48) */}
        <section className="relative overflow-hidden pt-48">
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.08),transparent_50%)]" />
          
          <div className="container relative z-10 text-center">
            <div className="mb-8 flex justify-center">
              <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400">
                <Layers className="h-4 w-4" />
                <span>Platform Features</span>
              </div>
            </div>

            <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
              One Platform, <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Infinite Possibilities</span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              Everything digital merchants need — analytics, SEO, email marketing, live chat, 
              licence management, and 18+ utility tools — all from a single dashboard.
            </p>

            <div className="mt-10 flex items-center justify-center gap-4">
              <button className="flex items-center gap-2 rounded-lg bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-all hover:bg-emerald-300">
                Start Free Trial <span aria-hidden="true">→</span>
              </button>
              <button className="rounded-lg border border-slate-800 bg-slate-950/50 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-900">
                Watch Demo
              </button>
            </div>

            <div className="mt-20 flex flex-wrap justify-center gap-3">
              {[
                { name: "Analytics", icon: BarChart3 },
                { name: "Commerce", icon: ShoppingBag },
                { name: "Licensing", icon: Key },
                { name: "SEO", icon: Search },
                { name: "Support", icon: MessageSquare },
                { name: "Email", icon: Mail },
              ].map((item) => (
                <div 
                  key={item.name} 
                  className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/30 px-4 py-2 text-sm text-slate-300 backdrop-blur-sm"
                >
                  <item.icon className="h-4 w-4 text-emerald-400" />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- COMPACT STATS SECTION --- */}
        <section className="border-y border-slate-800/40 bg-slate-950/20 py-8">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Stat 1 */}
              <div className="flex flex-col items-center text-center">
                <span className="text-2xl font-bold tracking-tight text-white">13+</span>
                <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-500/80">
                  Core Modules
                </span>
              </div>
              
              {/* Stat 2 */}
              <div className="flex flex-col items-center text-center">
                <span className="text-2xl font-bold tracking-tight text-white">850K+</span>
                <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-500/80">
                  Keys Delivered
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center text-center">
                <span className="text-2xl font-bold tracking-tight text-white">99.9%</span>
                <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-500/80">
                  Uptime SLA
                </span>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col items-center text-center">
                <span className="text-2xl font-bold tracking-tight text-white">&lt;3s</span>
                <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-500/80">
                  Avg Delivery
                </span>
              </div>
            </div>
          </div>
        </section>

        <FeaturesClient />
        <CTABanner />
      </main>

      <PublicFooter />
    </div>
  );
}