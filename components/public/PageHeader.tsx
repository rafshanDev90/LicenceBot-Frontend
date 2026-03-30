import React from "react";
import { LucideIcon } from "lucide-react";

interface PageHeaderProps {
  badge?: string;
  badgeIcon?: LucideIcon;
  title: React.ReactNode;
  description: string;
}

export function PageHeader({ badge, badgeIcon: BadgeIcon, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-info/15 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          {badge && (
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5" />}
                {badge}
              </span>
            </div>
          )}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
            {title}
          </h1>
          
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
