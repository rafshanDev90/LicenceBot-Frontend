import type { Metadata } from "next";
import { LegalHeader } from "@/components/public/LegalHeader";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { PublicFooter } from "@/components/public/PublicFooter";
import { Cookie, MousePointerClick, ShieldAlert, SlidersHorizontal, Settings } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy | LicenceBot",
  description: "Learn how LicenceBot uses cookies to improve your experience and how you can manage your preferences.",
  openGraph: {
    title: "Cookie Policy | LicenceBot",
    description: "Detailed information about how we use cookies.",
    type: "website",
  },
};

export default function CookiePolicyPage() {
  const sections = [
    {
      id: "what-are-cookies",
      icon: Cookie,
      title: "1. What Are Cookies",
      content: (
        <p className="leading-relaxed">
          Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences and provide a better browsing experience. Some cookies are essential for the Platform to function, while others help us improve our services.
        </p>
      )
    },
    {
      id: "essential",
      icon: ShieldAlert,
      title: "2. Essential Cookies",
      content: (
        <p className="leading-relaxed">
          These cookies are necessary for the Platform to function and cannot be disabled. They include authentication tokens to maintain your session securely, CSRF tokens to protect against cross-site request forgery, and context identifiers to remember your currently selected store.
        </p>
      )
    },
    {
      id: "functional",
      icon: SlidersHorizontal,
      title: "3. Functional Cookies",
      content: (
        <p className="leading-relaxed">
          These enhance your experience by remembering preferences such as your light/dark mode selection, sidebar collapsed state, layout preferences, and language settings. Without these, certain features may not function smoothly.
        </p>
      )
    },
    {
      id: "analytics",
      icon: MousePointerClick,
      title: "4. Analytics & Third-Party Cookies",
      content: (
        <p className="leading-relaxed">
          We use anonymized analytics cookies to track page views, feature usage, and errors, helping us fix bugs quickly. We do not use third-party advertising cookies. Third-party cookies may only be set if you explicitly connect integrated services (e.g., Google Search Console).
        </p>
      )
    }
  ];

  return (
    <main className="relative bg-background overflow-hidden">
      <PublicNavbar />
      
      <LegalHeader 
        title="Cookie Policy"
        lastUpdated="February 24, 2026"
        icon={<Cookie className="w-3.5 h-3.5 mr-2" />}
        badge="Legal & Privacy"
      />

      <section className="pb-24 pt-4">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid gap-12 sm:gap-16">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <div key={section.id} className="relative group">
                  <div className="absolute -left-4 sm:-left-12 top-0 bottom-0 w-px bg-border group-hover:bg-primary transition-colors" />
                  <div className="flex items-start gap-6 sm:gap-8">
                    <div className="hidden sm:flex w-10 h-10 rounded-xl bg-card border border-border items-center justify-center shrink-0 shadow-sm relative z-10 bg-background">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                        <Icon className="w-5 h-5 text-primary sm:hidden" />
                        {section.title}
                      </h2>
                      <div className="text-muted-foreground text-base sm:text-lg leading-relaxed antialiased">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-20 p-8 rounded-2xl bg-muted/30 border border-border flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Settings className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground">Manage your settings</p>
                <p className="text-sm text-muted-foreground">You can manage cookies directly via your browser settings.</p>
              </div>
            </div>
            <button className="px-6 py-2.5 rounded-lg border border-border hover:bg-muted text-foreground font-semibold transition-all">
              Cookie Preferences
            </button>
          </div>
        </div>
      </section>

      <PublicFooter />
    </main>
  );
}
