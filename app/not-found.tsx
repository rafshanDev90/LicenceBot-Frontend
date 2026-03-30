import Link from "next/link";
import { Search, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { PublicFooter } from "@/components/public/PublicFooter";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <PublicNavbar />
      
      <main className="flex-1 flex items-center justify-center py-20 px-4">
        {/* Ambient background glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden max-h-screen">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-primary/5 rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 w-full max-w-lg text-center">
          <div className="bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-8 shadow-2xl relative overflow-hidden group hover:border-primary/20 transition-colors duration-500">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                <div className="relative w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shadow-glow shadow-primary/10">
                  <Search className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-black text-foreground mb-2 tracking-tight">
              404
            </h1>
            <h2 className="text-lg font-bold text-foreground mb-3">
              Page Not Found
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              The page you are looking for doesn't exist, has been moved, or is currently under maintenance.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                asChild
                className="w-full sm:w-auto h-10 px-6 font-bold text-xs uppercase tracking-widest gap-2 shadow-glow shadow-primary/20"
              >
                <Link href="/">
                  <Home className="w-3.5 h-3.5" />
                  Return Home
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto h-10 px-6 font-bold text-xs uppercase tracking-widest gap-2"
              >
                <Link href="/contact">
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Support
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}
