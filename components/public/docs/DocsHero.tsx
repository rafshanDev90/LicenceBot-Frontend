import { motion } from "framer-motion";
import { Search, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface DocsHeroProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export function DocsHero({ search, onSearchChange }: DocsHeroProps) {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            <BookOpen className="w-3 h-3 mr-1.5" /> Documentation
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
            Merchant Documentation
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Step-by-step guides to help you set up, configure, and master every feature of the platform.
          </p>
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search documentation..."
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 bg-card/80 backdrop-blur border-border/50"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
