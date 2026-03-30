"use client";

import { useState, useMemo, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen, ChevronRight, ChevronDown, CheckCircle, ArrowLeft,
  UserPlus, LayoutDashboard, Store, Globe, BarChart3, Target, Hammer,
  ShoppingBag, Package, Users, Workflow, Send, Ticket, MessageCircle,
  Key, Radio, Mail, Wallet, Crown, Shield, HandCoins, TrendingUp, DollarSign,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { docCategories, type DocSection } from "@/components/public/docs/docsData";
import { DocsHero } from "@/components/public/docs/DocsHero";
import { QuickStartFlows } from "@/components/public/docs/QuickStartFlows";
import { DocsIndex } from "@/components/public/docs/DocsIndex";
import { DocsSearchResults } from "@/components/public/docs/DocsSearchResults";

const iconMap: Record<string, React.ElementType> = {
  UserPlus, LayoutDashboard, Store, Globe, BarChart3, Target, Hammer,
  ShoppingBag, Package, Users, Workflow, Send, Ticket, MessageCircle,
  Key, Radio, Mail, Wallet, Crown, Shield, HandCoins, TrendingUp, DollarSign,
};

export function DocsClient() {
  const [search, setSearch] = useState("");
  const [activeSection, setActiveSection] = useState<DocSection | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["getting-started"]);

  const allSections = useMemo(() => docCategories.flatMap((c) => c.sections), []);

  const filteredSections = useMemo(() => {
    if (!search.trim()) return null;
    const q = search.toLowerCase();
    return allSections.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.steps.some((st) => st.title.toLowerCase().includes(q) || st.description.toLowerCase().includes(q))
    );
  }, [search, allSections]);

  const selectSection = (section: DocSection) => {
    setActiveSection(section);
    setSearch("");
    const cat = docCategories.find((c) => c.sections.some((s) => s.id === section.id));
    if (cat && !expandedCategories.includes(cat.id)) {
      setExpandedCategories((prev) => [...prev, cat.id]);
    }
  };

  const selectSectionById = (id: string) => {
    const section = allSections.find((s) => s.id === id);
    if (section) selectSection(section);
  };

  const goBack = () => setActiveSection(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeSection]);

  const toggleCategory = (id: string) => {
    setExpandedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  // INDEX VIEW (no section selected)
  if (!activeSection) {
    return (
      <div className="pb-24">
        <DocsHero search={search} onSearchChange={setSearch} />
        <AnimatePresence>
          {filteredSections ? (
            <DocsSearchResults sections={filteredSections} onSelect={selectSection} />
          ) : (
            <>
              <QuickStartFlows onSelectSection={selectSectionById} />
              <DocsIndex onSelectSection={selectSection} />
            </>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // DETAIL VIEW (section selected)
  const IconComponent = iconMap[activeSection.icon] || BookOpen;

  return (
    <div className="pb-24">
      <DocsHero search={search} onSearchChange={setSearch} />

      <AnimatePresence>
        {filteredSections && (
          <DocsSearchResults sections={filteredSections} onSelect={selectSection} />
        )}
      </AnimatePresence>

      {!filteredSections && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-72 shrink-0">
              <div className="lg:sticky lg:top-28">
                <button
                  onClick={goBack}
                  className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors mb-6 font-semibold uppercase tracking-widest"
                >
                  <ArrowLeft className="w-4 h-4" />
                  All Topics
                </button>
                <ScrollArea className="max-h-[calc(100vh-12rem)] border-r border-border/50 pr-6">
                  <nav className="space-y-4">
                    {docCategories.map((category) => {
                      const isExpanded = expandedCategories.includes(category.id);
                      return (
                        <div key={category.id}>
                          <button
                            onClick={() => toggleCategory(category.id)}
                            className="w-full flex items-center justify-between py-2 text-sm font-bold text-foreground transition-colors group"
                          >
                            <span className="group-hover:text-primary">{category.title}</span>
                            {isExpanded ? (
                              <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                            ) : (
                              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                            )}
                          </button>
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden mt-1"
                              >
                                {category.sections.map((section) => {
                                  const Icon = iconMap[section.icon] || BookOpen;
                                  const isActive = section.id === activeSection.id;
                                  return (
                                    <button
                                      key={section.id}
                                      onClick={() => selectSection(section)}
                                      className={`w-full flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm transition-all duration-300 ${
                                        isActive
                                          ? "bg-primary text-primary-foreground font-bold shadow-glow shadow-primary/20 scale-[1.02]"
                                          : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                                      }`}
                                    >
                                      <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-primary-foreground" : "text-muted-foreground"}`} />
                                      <span className="truncate">{section.title}</span>
                                    </button>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </nav>
                </ScrollArea>
              </div>
            </aside>

            {/* Content */}
            <main className="flex-1 min-w-0 pb-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="mb-12 pb-8 border-b border-border/50">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 shadow-glow shadow-primary/10">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-display tracking-tight">{activeSection.title}</h2>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">{activeSection.description}</p>
                  </div>

                  <div className="space-y-12">
                    {activeSection.steps.map((step, index) => (
                      <motion.div
                         key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08 }}
                        className="flex gap-6 relative"
                      >
                        <div className="shrink-0 flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-black shadow-glow shadow-primary/20 z-10 shrink-0">
                            {index + 1}
                          </div>
                          {index < activeSection.steps.length - 1 && (
                            <div className="absolute top-10 bottom-0 left-5 w-px bg-gradient-to-b from-primary/50 to-border" />
                          )}
                        </div>
                        <div className="pb-8">
                          <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                          <div className="text-muted-foreground leading-relaxed prose prose-sm dark:prose-invert max-w-none">
                            {/* Simple markdown parsing for bold text */}
                            <p dangerouslySetInnerHTML={{ __html: step.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-16 p-6 rounded-2xl bg-card border border-border flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-base">You're all set!</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Completed all steps for "{activeSection.title}". Explore other sections from the sidebar for more guides.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </main>
          </div>
        </div>
      )}
    </div>
  );
}
