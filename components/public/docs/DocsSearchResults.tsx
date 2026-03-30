import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import type { DocSection } from "./docsData";
import {
  UserPlus, LayoutDashboard, Store, Globe, BarChart3, Target, Hammer,
  ShoppingBag, Package, Users, Workflow, Send, Ticket, MessageCircle,
  Key, Radio, Mail, Wallet, Crown, Shield, HandCoins, TrendingUp, DollarSign,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  UserPlus, LayoutDashboard, Store, Globe, BarChart3, Target, Hammer,
  ShoppingBag, Package, Users, Workflow, Send, Ticket, MessageCircle,
  Key, Radio, Mail, Wallet, Crown, Shield, HandCoins, TrendingUp, DollarSign,
};

interface DocsSearchResultsProps {
  sections: DocSection[];
  onSelect: (section: DocSection) => void;
}

export function DocsSearchResults({ sections, onSelect }: DocsSearchResultsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="container mx-auto px-4 pb-8"
    >
      <div className="max-w-2xl mx-auto space-y-2">
        <p className="text-sm text-muted-foreground mb-3">
          {sections.length} result{sections.length !== 1 ? "s" : ""} found
        </p>
        {sections.map((section) => {
          const Icon = iconMap[section.icon] || BookOpen;
          return (
            <button
              key={section.id}
              onClick={() => onSelect(section)}
              className="w-full text-left p-4 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">{section.title}</p>
                  <p className="text-sm text-muted-foreground line-clamp-1">{section.description}</p>
                </div>
              </div>
            </button>
          );
        })}
        {sections.length === 0 && (
          <p className="text-center text-muted-foreground py-8">No results found. Try a different search term.</p>
        )}
      </div>
    </motion.div>
  );
}
