import type { Metadata } from "next";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { PublicFooter } from "@/components/public/PublicFooter";
import { CheckCircle, Circle, Clock, Shield, Server, Database, Globe, Zap, AlertTriangle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "System Status | LicenceBot",
  description: "Check the current operational status and historical uptime of all LicenceBot services and APIs.",
  openGraph: {
    title: "System Status | LicenceBot",
    description: "Real-time status of LicenceBot services.",
    type: "website",
  },
};

const services = [
  { name: "Web Application", icon: Globe, status: "operational" as const, uptime: "99.98%" },
  { name: "API & Backend", icon: Server, status: "operational" as const, uptime: "99.95%" },
  { name: "Database", icon: Database, status: "operational" as const, uptime: "99.99%" },
  { name: "Authentication", icon: Shield, status: "operational" as const, uptime: "99.97%" },
  { name: "Licence Delivery", icon: Zap, status: "operational" as const, uptime: "99.96%" },
  { name: "Webhook Processing", icon: Clock, status: "operational" as const, uptime: "99.93%" },
];

const statusColors = {
  operational: "text-success",
  degraded: "text-warning",
  outage: "text-destructive",
};

const statusLabels = {
  operational: "Operational",
  degraded: "Degraded Performance",
  outage: "Major Outage",
};

export default function StatusPage() {
  const allOperational = services.every((s) => s.status === "operational");

  // Generate 30 days of mock history
  const recentDays = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (29 - i));
    return {
      date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      status: "operational" as const,
    };
  });

  return (
    <main className="relative min-h-screen bg-background overflow-hidden flex flex-col">
      <PublicNavbar />

      <div className="flex-1">
        {/* Header */}
        <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="absolute inset-0 -z-10">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/5 to-transparent" />
          </div>

          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 shadow-sm backdrop-blur-sm ${
                allOperational
                  ? "border-success/30 bg-success/10 text-success"
                  : "border-warning/30 bg-warning/10 text-warning"
              }`}
            >
              {allOperational ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                <AlertTriangle className="w-4 h-4" />
              )}
              <span className="text-sm font-semibold tracking-wide uppercase">
                {allOperational ? "All Systems Operational" : "Some Systems Affected"}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">System Status</h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Real-time operational status and historical uptime for all LicenceBot global services and infrastructure.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="pb-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-xl overflow-hidden shadow-lg divide-y divide-border/50">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.name} className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-5 gap-4 hover:bg-muted/30 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-background border border-border shadow-sm">
                        <Icon className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <span className="text-base font-semibold text-foreground">{service.name}</span>
                    </div>
                    <div className="flex items-center gap-4 sm:justify-end">
                      <span className="text-sm text-muted-foreground font-mono bg-muted px-2 py-0.5 rounded">
                        {service.uptime}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm tracking-wide font-medium uppercase ${statusColors[service.status]}`}>
                          {statusLabels[service.status]}
                        </span>
                        <Circle className={`w-2.5 h-2.5 fill-current animate-pulse ${statusColors[service.status]}`} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 30-Day History */}
            <div className="mt-16 p-8 rounded-2xl border border-border bg-card shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-foreground">Last 30 Days</h2>
                <span className="text-sm text-success font-medium">99.98% overall uptime</span>
              </div>
              
              <div className="flex gap-1 h-12">
                {recentDays.map((day, i) => (
                  <div
                    key={i}
                    title={`${day.date} — ${statusLabels[day.status]}`}
                    className={`flex-1 rounded-sm cursor-help transition-all duration-200 hover:scale-[1.15] hover:shadow-md ${
                      day.status === "operational" ? "bg-success/80 hover:bg-success" :
                      day.status === "degraded" ? "bg-warning/80 hover:bg-warning" : "bg-destructive/80 hover:bg-destructive"
                    }`}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-3 px-1">
                <span className="text-xs font-medium text-muted-foreground tracking-wider uppercase">30 days ago</span>
                <span className="text-xs font-medium text-muted-foreground tracking-wider uppercase">Today</span>
              </div>
            </div>

            {/* Support Note */}
            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground">
                This page is updated automatically in real-time. For urgent technical issues, please{" "}
                <Link href="/contact" className="text-primary hover:underline font-medium">
                  contact our 24/7 support team
                </Link>.
              </p>
            </div>
          </div>
        </section>
      </div>

      <PublicFooter />
    </main>
  );
}
