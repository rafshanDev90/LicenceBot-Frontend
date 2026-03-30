"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Menu, X, KeyRound, ChevronRight, ChevronDown,
  Zap, BarChart3, ShoppingBag, Shield, Key, MessageCircle,
  Mail, Target, Globe, Workflow, Store, FileText, BookOpen,
  HelpCircle, Rocket, CheckCircle, Users, Layout,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownChild {
  label: string;
  path: string;
  description: string;
  icon: React.ElementType;
}

interface NavItem {
  label: string;
  path?: string;
  mega?: boolean;
  columns?: { heading: string; items: DropdownChild[] }[];
  children?: DropdownChild[];
}

const navItems: NavItem[] = [
  { label: "Home", path: "/home" },
  { label: "Products", path: "/products" },
  { label: "Check Key", path: "/check-key" },
  {
    label: "Solutions",
    mega: true,
    columns: [
      {
        heading: "Platform",
        items: [
          { label: "How It Works", path: "/how-it-works", description: "See the platform flow end-to-end", icon: Rocket },
          { label: "Features", path: "/features", description: "All capabilities in one place", icon: Zap },
          { label: "Integrations", path: "/integrations", description: "WooCommerce, Shopify & more", icon: Globe },
          { label: "Live Demo", path: "/demo", description: "Try it without signing up", icon: Layout },
        ],
      },
      {
        heading: "Modules",
        items: [
          { label: "Analytics & Traffic", path: "/features#analytics", description: "Visitor tracking & funnels", icon: BarChart3 },
          { label: "SEO Suite", path: "/features#seo", description: "Rankings, audits & keywords", icon: Target },
          { label: "Email Marketing", path: "/features#engage", description: "Automations & broadcasts", icon: Mail },
          { label: "Live Chat & Support", path: "/features#support", description: "Tickets, chat & SLA rules", icon: MessageCircle },
        ],
      },
      {
        heading: "Commerce",
        items: [
          { label: "Order Management", path: "/features#woocommerce", description: "Orders, refunds & customers", icon: ShoppingBag },
          { label: "Licence Delivery", path: "/features#licence", description: "Automated key distribution", icon: Key },
          { label: "Multi-Store", path: "/features#multistore", description: "Manage all stores in one place", icon: Store },
          { label: "Affiliate Program", path: "/features#affiliate", description: "Referral tracking & payouts", icon: Users },
        ],
      },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Documentation", path: "/docs", description: "Step-by-step setup guides", icon: BookOpen },
      { label: "Integrations", path: "/integrations", description: "WooCommerce, Shopify & more", icon: Globe },
      { label: "Help Center", path: "/help", description: "FAQs & troubleshooting guides", icon: HelpCircle },
      { label: "API Docs", path: "/docs/api", description: "REST API reference & examples", icon: FileText },
      { label: "Status", path: "/status", description: "Platform uptime & incidents", icon: CheckCircle },
      { label: "About Us", path: "/about", description: "Learn about our mission & team", icon: Users },
    ],
  },
  { label: "Pricing", path: "/pricing" },
  { label: "Contact", path: "/contact" },
];

export function PublicNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const isActive = (item: NavItem): boolean => {
    if (item.path) return pathname === item.path;
    if (item.children) return item.children.some((c) => pathname === c.path);
    if (item.columns) return item.columns.some((col) => col.items.some((c) => pathname === c.path));
    return false;
  };

  return (
    <>
      <AnimatePresence>
        {announcementVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm min-w-0">
                <span className="font-semibold shrink-0">New:</span>
                <span className="truncate">Multi-store marketplace routing is now available!</span>
                <Link href="/features" className="underline underline-offset-2 font-medium items-center gap-0.5 hover:opacity-80 hidden sm:flex shrink-0">
                  Learn more <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
              <button
                onClick={() => setAnnouncementVisible(false)}
                className="p-0.5 rounded hover:bg-primary-foreground/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          announcementVisible ? "top-9" : "top-0"
        } ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16">
          <Link href="/home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center group-hover:shadow-glow transition-shadow">
              <KeyRound className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground tracking-tight">
              Licence<span className="text-primary">Bot</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              if (item.mega && item.columns) {
                return (
                  <div
                    key={item.label}
                    className="static"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive(item)
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute left-0 right-0 top-full z-[60]"
                          onMouseEnter={() => handleMouseEnter(item.label)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-3">
                            <div className="rounded-2xl border border-border bg-card shadow-2xl ring-1 ring-border/5 overflow-hidden">
                              <div className="grid grid-cols-3 divide-x divide-border">
                                {item.columns.map((col) => (
                                  <div key={col.heading} className="p-5">
                                    <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-3 px-3">
                                      {col.heading}
                                    </p>
                                    <div className="space-y-0.5">
                                      {col.items.map((child) => {
                                        const Icon = child.icon;
                                        const active = pathname === child.path || pathname.startsWith(child.path.split('#')[0] + '#');
                                        return (
                                          <Link
                                            key={child.path}
                                            href={child.path}
                                            className={`flex items-start gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 group ${
                                              active ? "bg-primary/10" : "hover:bg-muted"
                                            }`}
                                          >
                                            <div className={`p-2 rounded-lg shrink-0 mt-0.5 transition-colors ${
                                              active ? "bg-primary text-primary-foreground" : "bg-muted group-hover:bg-primary/10"
                                            }`}>
                                              <Icon className={`w-4 h-4 ${
                                                active ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary"
                                              } transition-colors`} />
                                            </div>
                                            <div className="min-w-0">
                                              <p className={`text-sm font-medium leading-tight ${
                                                active ? "text-primary" : "text-foreground"
                                              }`}>
                                                {child.label}
                                              </p>
                                              <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">{child.description}</p>
                                            </div>
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div className="bg-muted/50 border-t border-border px-6 py-3 flex items-center justify-between">
                                <p className="text-xs text-muted-foreground">
                                  Everything you need to manage digital licence distribution
                                </p>
                                <Link
                                  href="/features"
                                  className="text-xs font-medium text-primary hover:underline flex items-center gap-1"
                                >
                                  View all features <ChevronRight className="w-3 h-3" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive(item)
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 pt-2 z-50"
                        >
                          <div className="w-72 rounded-xl border border-border bg-card shadow-xl p-2">
                            {item.children.map((child) => {
                              const Icon = child.icon;
                              return (
                                <Link
                                  key={child.path}
                                  href={child.path}
                                  className={`flex items-start gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
                                    pathname === child.path ? "bg-primary/10" : "hover:bg-muted/60"
                                  }`}
                                >
                                  <div className={`p-1.5 rounded-md shrink-0 mt-0.5 ${
                                    pathname === child.path ? "bg-primary/20" : "bg-muted/80 group-hover:bg-primary/10"
                                  } transition-colors`}>
                                    <Icon className={`w-3.5 h-3.5 ${
                                      pathname === child.path ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                                    } transition-colors`} />
                                  </div>
                                  <div>
                                    <p className={`text-sm font-medium ${
                                      pathname === child.path ? "text-primary" : "text-foreground"
                                    }`}>
                                      {child.label}
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-0.5">{child.description}</p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.path}
                  href={item.path!}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    pathname === item.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/auth">Login</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/auth">Start Free Trial</Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
            >
              <div className="px-6 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
                {navItems.map((item) => {
                  const allChildren = item.children || item.columns?.flatMap((c) => c.items) || [];
                  if (allChildren.length > 0) {
                    return (
                      <div key={item.label}>
                        <button
                          onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                            isActive(item) ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                          }`}
                        >
                          {item.label}
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {mobileExpanded === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 py-1 space-y-0.5">
                                {item.columns?.map((col) => (
                                  <div key={col.heading}>
                                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mt-3 mb-1 px-3">{col.heading}</p>
                                    {col.items.map((child) => (
                                      <Link
                                        key={child.path}
                                        href={child.path}
                                        className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                                          pathname === child.path
                                            ? "text-primary bg-primary/10 font-medium"
                                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                        }`}
                                      >
                                        {child.label}
                                      </Link>
                                    ))}
                                  </div>
                                ))}
                                {item.children?.map((child) => (
                                  <Link
                                    key={child.path}
                                    href={child.path}
                                    className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                                      pathname === child.path
                                        ? "text-primary bg-primary/10 font-medium"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                    }`}
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={item.path}
                      href={item.path!}
                      className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        pathname === item.path
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <div className="pt-3 flex flex-col gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/auth">Login</Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="/auth">Start Free Trial</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
