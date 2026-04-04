import { Metadata } from "next";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { PublicFooter } from "@/components/public/PublicFooter";
import { BarChart3, ShoppingBag, Key, Globe, Users, Zap, Shield, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Layout Demo | LicenceBot",
  description: "Professional synchronized layout demonstration with consistent container alignment",
};

export default function LayoutDemoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#020817] text-white selection:bg-emerald-500/30">
      <PublicNavbar />
      
      <main className="flex-1">
        {/* Hero Section - Full width background, centered content */}
        <section className="relative overflow-hidden py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.08),transparent_50%)]" />
          
          <div className="container relative z-10 text-center">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-6">
              Professional <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Layout System</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              All sections synchronized with the header width using CSS variables and consistent container classes. 
              Backgrounds extend full-width while content remains perfectly aligned.
            </p>
          </div>
        </section>

        {/* Features Grid - Professional alignment */}
        <section className="py-20 bg-[#020617]">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Complete Analytics</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Real-time insights into every visitor and conversion with synchronized layout
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: BarChart3, title: "Traffic Analytics", desc: "Real-time visitor tracking" },
                    { icon: TrendingUp, title: "Conversion Funnels", desc: "Optimize your conversion paths" },
                    { icon: Globe, title: "Geo Analytics", desc: "Audience location insights" },
                    { icon: Users, title: "User Segmentation", desc: "RFM and behavioral analysis" },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:bg-slate-900/80 transition-colors">
                      <item.icon className="w-8 h-8 text-emerald-400 mb-4" />
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-xl p-8 text-center">
                  <div className="text-4xl font-bold text-emerald-400 mb-2">50+</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider">Metrics</div>
                  <div className="text-4xl font-bold text-emerald-400 mb-2 mt-6">Real-time</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider">Updates</div>
                  <div className="text-4xl font-bold text-emerald-400 mb-2 mt-6">6</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider">Export Formats</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WooCommerce Hub - Reversed layout */}
        <section className="py-20 bg-slate-900/50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 order-2 lg:order-1">
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-8 text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">∞</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider">Stores</div>
                  <div className="text-4xl font-bold text-blue-400 mb-2 mt-6">Real-time</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider">Sync</div>
                  <div className="text-4xl font-bold text-blue-400 mb-2 mt-6">100%</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider">Coverage</div>
                </div>
              </div>

              <div className="lg:col-span-8 order-1 lg:order-2 space-y-6">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-white mb-4">WooCommerce Hub</h2>
                  <p className="text-slate-400 max-w-2xl mx-auto">
                    Complete multi-store order and product management from a single dashboard
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: ShoppingBag, title: "Multi-store Management", desc: "Manage unlimited stores" },
                    { icon: Key, title: "Order Sync", desc: "Real-time order synchronization" },
                    { icon: Users, title: "Customer Profiles", desc: "Complete customer history" },
                    { icon: Shield, title: "Secure Processing", desc: "Enterprise-grade security" },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:bg-slate-900/80 transition-colors">
                      <item.icon className="w-8 h-8 text-blue-400 mb-4" />
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Full width background */}
        <section className="py-16 bg-slate-950 border-y border-slate-800">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">13+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Core Modules</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">850K+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Keys Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">99.9%</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Uptime SLA</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">&lt;3s</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Avg Delivery</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10">
          <div className="container text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              Experience the power of synchronized layout design with professional alignment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-emerald-500 text-slate-900 rounded-xl font-semibold hover:bg-emerald-400 transition-colors">
                Start Free Trial
              </button>
              <button className="px-8 py-3 border border-slate-700 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}
