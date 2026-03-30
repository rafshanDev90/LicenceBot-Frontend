"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "Stores Managed", value: 2500, suffix: "+" },
  { label: "Orders Tracked", value: 1200000, suffix: "+" },
  { label: "Keys Delivered", value: 850000, suffix: "+" },
  { label: "Uptime", value: 99.9, suffix: "%", decimals: 1 },
];

function AnimatedCounter({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  const formatted = decimals > 0
    ? count.toFixed(decimals)
    : count >= 1000000
      ? (count / 1000000).toFixed(1) + "M"
      : count >= 1000
        ? Math.floor(count / 1000) + "K"
        : Math.floor(count).toString();

  return <span ref={ref}>{formatted}{suffix}</span>;
}

export function StatsBar() {
  return (
    <section className="py-10 sm:py-16 border-y border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
