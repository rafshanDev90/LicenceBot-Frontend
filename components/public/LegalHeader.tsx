"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import React from "react";

interface LegalHeaderProps {
  title: string;
  lastUpdated: string;
  icon: React.ReactNode;
  badge: string;
}

export function LegalHeader({ title, lastUpdated, icon, badge }: LegalHeaderProps) {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-background">
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Badge variant="outline" className="mb-6 px-4 py-1.5 border-primary/30 text-primary bg-primary/5 backdrop-blur-sm">
            {icon} {badge}
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground tracking-tight mb-6">
            {title}
          </h1>
          <div className="flex items-center justify-center gap-2 text-muted-foreground bg-muted/30 w-fit mx-auto px-4 py-1 rounded-full border border-border/50">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-wider">Last updated: {lastUpdated}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
