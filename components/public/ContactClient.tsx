"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
// import { supabase } from "@/integrations/supabase/client"; // Assuming this will be set up or exists
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

export function ContactClient() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "General Inquiry", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0].toString()] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    // Mocking submission since we're focusing on UI migration
    // In real implementation: const { error } = await supabase.from("contact_submissions").insert([parsed.data]);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "General Inquiry", message: "" });
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-12 rounded-3xl bg-card border border-primary/20 shadow-glow shadow-primary/10"
        >
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8 text-primary shadow-glow">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4 font-display">Message Sent!</h2>
          <p className="text-muted-foreground mb-10 text-lg">Thank you for reaching out. Our team will review your message and get back to you within 24 hours.</p>
          <Button onClick={() => setSubmitted(false)} variant="outline" className="px-8 font-bold uppercase tracking-widest text-xs h-12">
            Send Another Message
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <section className="py-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground font-display tracking-tight flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-primary" />
                Send us a Message
              </h2>
              <p className="mt-2 text-muted-foreground">Fill out the form below and we'll connect you with the right person.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`h-12 bg-card/50 border-border/50 focus:border-primary/50 transition-all ${errors.name ? "border-destructive/50" : ""}`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-[10px] font-bold text-destructive uppercase tracking-widest mt-1 ml-1">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`h-12 bg-card/50 border-border/50 focus:border-primary/50 transition-all ${errors.email ? "border-destructive/50" : ""}`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-[10px] font-bold text-destructive uppercase tracking-widest mt-1 ml-1">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Subject</label>
                <select
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full h-12 px-4 rounded-md border border-border/50 bg-card/50 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none transition-all hover:border-primary/30"
                >
                  <option>General Inquiry</option>
                  <option>Sales</option>
                  <option>Technical Support</option>
                  <option>Partnership</option>
                  <option>Billing</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={6}
                  className={`bg-card/50 border-border/50 focus:border-primary/50 transition-all resize-none ${errors.message ? "border-destructive/50" : ""}`}
                  placeholder="Tell us how we can help..."
                />
                {errors.message && <p className="text-[10px] font-bold text-destructive uppercase tracking-widest mt-1 ml-1">{errors.message}</p>}
              </div>

              <Button type="submit" className="w-full sm:w-auto px-10 h-12 font-bold uppercase tracking-widest text-xs shadow-glow shadow-primary/20" disabled={loading}>
                <Send className="w-4 h-4 mr-2" />
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground font-display tracking-tight">Contact Information</h2>
              <p className="mt-2 text-muted-foreground">Prefer a direct line? Reach us through any of these channels.</p>
            </div>

            {[
              { icon: Mail, label: "Email Support", value: "support@licencebot.com", desc: "For technical issues & help" },
              { icon: Phone, label: "Sales & Inquiries", value: "+44 7577 321476", desc: "Mon-Fri, 9am - 6pm GMT" },
              { icon: MapPin, label: "Our Office", value: "27 Old Gloucester Street, London, United Kingdom, WC1N 3AX", desc: "Global Operations Center" },
            ].map(({ icon: Icon, label, value, desc }) => (
              <Card key={label} className="border-border/50 bg-card/40 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group">
                <CardContent className="p-6 flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-glow shadow-primary/5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-primary mb-1">{label}</p>
                    <p className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/10 mt-10">
              <p className="text-sm font-bold text-foreground mb-4 uppercase tracking-widest">Connect with Us</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Follow us for the latest updates on platform features, security advice, and e-commerce growth strategies.
              </p>
              <div className="flex gap-4">
                {/* Social icons could go here */}
                <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary cursor-pointer transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary cursor-pointer transition-all">
                  <MessageSquare className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
