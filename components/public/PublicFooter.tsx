"use client";

import { useState } from "react";
import Link from "next/link";
import { KeyRound, MessageCircle, Send } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", path: "/features" },
    { label: "Pricing", path: "/pricing" },
    { label: "Integrations", path: "/integrations" },
    { label: "Store", path: "/store" },
    { label: "Demo", path: "/demo" },
  ],
  Company: [
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "How It Works", path: "/how-it-works" },
    { label: "Automation", path: "/features#automation" },
  ],
  Support: [
    { label: "Documentation", path: "/docs" },
    { label: "Help Center", path: "/contact" },
    { label: "API Docs", path: "/docs" },
  ],
  Legal: [
    { label: "Terms of Service", path: "/terms" },
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Cookie Policy", path: "/cookie-policy" },
    { label: "Refund Policy", path: "/refund-policy" },
    { label: "GDPR", path: "/gdpr" },
  ],
};

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
);
const PinterestIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z"/></svg>
);

const socialIcons = [
  { icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/Licencebot" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/447577321476" },
  { icon: Send, label: "Telegram", href: "https://t.me/Licencebotadmin" },
  { icon: PinterestIcon, label: "Pinterest", href: "https://www.pinterest.com/Licencebotofficlel/" },
];

export function PublicFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      return;
    }
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="py-[50px] px-0 pb-[30px]" style={{ backgroundColor: '#0d131c', color: '#fff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/home" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <KeyRound className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold tracking-tight" style={{ color: '#fff' }}>
                Licence<span style={{ color: 'hsl(var(--primary))' }}>Bot</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#fff' }}>
              Automated licence key delivery for WooCommerce & Shopify stores.
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              {socialIcons.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors group"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold mb-4" style={{ color: '#fff' }}>{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.path}
                      className="text-sm hover:opacity-80 transition-opacity"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
          <div className="rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <div>
              <p className="font-semibold">Stay up to date</p>
              <p className="text-sm mt-1" style={{ color: '#fff' }}>
                Subscribe for product updates, tips, and exclusive offers.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                className="px-4 py-2.5 rounded-lg text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-white/60" 
                style={{ background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', color: '#fff' }}
                placeholder="your@email.com"
              />
              <button
                onClick={handleSubscribe}
                className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                {subscribed ? "Subscribed!" : "Subscribe"}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <p className="text-xs" style={{ color: '#fff' }}>
            © {new Date().getFullYear()} LicenceBot. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-xs hover:opacity-80 transition-opacity">Terms</Link>
            <Link href="/privacy" className="text-xs hover:opacity-80 transition-opacity">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
