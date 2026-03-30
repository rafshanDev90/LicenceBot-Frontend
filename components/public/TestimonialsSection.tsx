"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Digital Store Owner",
    store: "KeysMarket.io",
    quote: "LicenceBot completely automated our key delivery. What used to take hours now happens instantly — our customers love it.",
    rating: 5,
    gradient: "from-primary to-info",
  },
  {
    name: "Maria Chen",
    role: "SaaS Reseller",
    store: "SoftHub Pro",
    quote: "The analytics dashboard alone is worth the subscription. Combined with automatic delivery, it's a game-changer.",
    rating: 5,
    gradient: "from-success to-primary",
  },
  {
    name: "James Wilson",
    role: "Game Key Retailer",
    store: "GameVault Store",
    quote: "We process over 500 orders daily and LicenceBot handles every single one without a hitch. The uptime is incredible.",
    rating: 5,
    gradient: "from-warning to-destructive",
  },
  {
    name: "Sophie Laurent",
    role: "E-commerce Manager",
    store: "DigiKeys EU",
    quote: "Switching from manual delivery to LicenceBot saved us 20+ hours per week. The ROI was immediate.",
    rating: 5,
    gradient: "from-info to-primary",
  },
  {
    name: "Ravi Patel",
    role: "Antivirus Reseller",
    store: "SecureShield Store",
    quote: "The key checker tool alone has prevented hundreds of invalid deliveries. Customer complaints dropped by 90%.",
    rating: 5,
    gradient: "from-primary to-warning",
  },
  {
    name: "Elena Novak",
    role: "Marketplace Operator",
    store: "LicenceHub",
    quote: "Multi-store management is seamless. I run 8 WooCommerce stores from a single dashboard with zero issues.",
    rating: 5,
    gradient: "from-success to-info",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Loved by <span className="text-gradient">Merchants</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            See what our customers have to say about LicenceBot.
          </p>
        </motion.div>

        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0 scrollbar-hide">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="min-w-[300px] snap-center md:min-w-0 bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/10 transition-all duration-300 flex flex-col"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-3" />
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-warning text-warning" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center`}>
                  <span className="text-sm font-bold text-white">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role} · {t.store}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
