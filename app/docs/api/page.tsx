import type { Metadata } from "next";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { PublicFooter } from "@/components/public/PublicFooter";
import { Code, Key, ShoppingCart, Globe, Shield, Webhook, ArrowRight, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "REST API and Example Guide for Developers",
  description: "REST API and example guide helps developers integrate systems, understand endpoints, and use API features with clear examples and documentation.",
  keywords: ["rest api", "api guide", "developer documentation", "api endpoints", "integration guide"],
  alternates: {
    canonical: "https://licencebot.com/docs/api",
  },
  openGraph: {
    title: "REST API and Example Guide for Developers",
    description: "REST API and example guide helps developers integrate systems, understand endpoints, and use API features with clear examples and documentation.",
    url: "https://licencebot.com/docs/api",
    type: "website",
  },
};

const endpoints = [
  {
    method: "GET",
    path: "/api/v1/products",
    description: "Retrieve a list of all licence products",
    icon: ShoppingCart,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    method: "POST",
    path: "/api/v1/keys/validate",
    description: "Validate a licence key and return status",
    icon: Key,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    method: "POST",
    path: "/api/v1/checkout",
    description: "Create a new checkout session",
    icon: ShoppingCart,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    method: "GET",
    path: "/api/v1/webhooks",
    description: "List configured webhook endpoints",
    icon: Webhook,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    method: "GET",
    path: "/api/v1/status",
    description: "Check API service status",
    icon: Globe,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
];

export default function ApiDocsPage() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <PublicNavbar />

      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/5 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <a href="/docs" className="hover:text-primary transition-colors">Docs</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">API Reference</span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            <Code className="w-4 h-4" />
            <span>Developer API</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-6">
            REST API <span className="text-primary">Reference</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-8">
            Integrate LicenceBot directly into your applications using our REST API. 
            All endpoints return JSON responses and require API key authentication.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-foreground">HTTPS Required</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border">
              <Key className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-foreground">API Key Auth</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border">
              <Code className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-foreground">JSON Responses</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-24">
        <h2 className="text-2xl font-bold text-foreground mb-8">API Endpoints</h2>
        <div className="grid gap-4">
          {endpoints.map((ep) => {
            const Icon = ep.icon;
            return (
              <Card key={ep.path} className="bg-card/50 border-border/50 hover:border-primary/30 transition-all">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg ${ep.bg} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-5 h-5 ${ep.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <Badge variant="outline" className="font-mono text-xs">
                        {ep.method}
                      </Badge>
                      <code className="text-sm font-mono text-foreground">{ep.path}</code>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{ep.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground shrink-0" />
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Authentication</h2>
          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground mb-4">
                All API requests require an API key passed in the request header:
              </p>
              <div className="bg-black/40 rounded-lg p-4 font-mono text-sm">
                <div className="text-slate-300">Authorization: Bearer {"{your_api_key}"}</div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                You can generate API keys from the Settings page in your LicenceBot dashboard.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Example Request</h2>
          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground mb-4">
                Example cURL request to validate a licence key:
              </p>
              <div className="bg-black/40 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <div className="text-slate-300"><span className="text-emerald-400">curl</span> -X POST https://api.licencebot.com/v1/keys/validate \</div>
                <div className="text-slate-300">  -H <span className="text-amber-300">&quot;Authorization: Bearer YOUR_API_KEY&quot;</span> \</div>
                <div className="text-slate-300">  -H <span className="text-amber-300">&quot;Content-Type: application/json&quot;</span> \</div>
                <div className="text-slate-300">  -d <span className="text-amber-300">{'{"key": "XXXXX-XXXXX-XXXXX-XXXXX", "product_id": "prod_123"}'}</span></div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Rate Limits</h2>
          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-6">
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm font-semibold text-foreground">Free Plan</p>
                  <p className="text-2xl font-bold text-primary mt-1">100</p>
                  <p className="text-xs text-muted-foreground">requests/hour</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Pro Plan</p>
                  <p className="text-2xl font-bold text-primary mt-1">1,000</p>
                  <p className="text-xs text-muted-foreground">requests/hour</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Enterprise</p>
                  <p className="text-2xl font-bold text-primary mt-1">10,000</p>
                  <p className="text-xs text-muted-foreground">requests/hour</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <PublicFooter />
    </main>
  );
}
