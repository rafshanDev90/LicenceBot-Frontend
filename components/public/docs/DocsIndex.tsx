import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { docCategories, type DocSection } from "./docsData";

const iconMap: Record<string, React.ElementType> = {};

// Lazy icon resolution via lucide
import {
  UserPlus, LayoutDashboard, Store, Globe, BarChart3, Target, Hammer,
  ShoppingBag, Package, Users, Workflow, Send, Ticket, MessageCircle,
  Key, Radio, Mail, Wallet, Crown, Shield, HandCoins, TrendingUp, DollarSign,
} from "lucide-react";

Object.assign(iconMap, {
  UserPlus, LayoutDashboard, Store, Globe, BarChart3, Target, Hammer,
  ShoppingBag, Package, Users, Workflow, Send, Ticket, MessageCircle,
  Key, Radio, Mail, Wallet, Crown, Shield, HandCoins, TrendingUp, DollarSign,
});

interface DocsIndexProps {
  onSelectSection: (section: DocSection) => void;
}

export function DocsIndex({ onSelectSection }: DocsIndexProps) {
  return (
    <section className="container mx-auto px-4 pb-20">
      <div className="max-w-6xl mx-auto space-y-10">
        {docCategories.map((category, catIdx) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: catIdx * 0.06 }}
          >
            <h2 className="text-lg font-bold text-foreground mb-1">{category.title}</h2>
            <div className="h-px bg-border mb-4" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {category.sections.map((section) => {
                const Icon = iconMap[section.icon] || BookOpen;
                return (
                  <button
                    key={section.id}
                    onClick={() => onSelectSection(section)}
                    className="group text-left p-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                          {section.title}
                        </p>
                        <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5 leading-relaxed">
                          {section.description}
                        </p>
                        <span className="text-xs text-muted-foreground mt-1.5 inline-block">
                          {section.steps.length} steps
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
