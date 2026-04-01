"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error("[RouteError]", error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center bg-card/50 backdrop-blur-xl border border-border rounded-3xl p-10 md:p-14 shadow-2xl"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 220 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/10 rounded-full blur-xl animate-pulse" />
              <div className="relative w-20 h-20 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <AlertTriangle className="w-10 h-10 text-red-400" />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-6">
              <AlertTriangle className="w-3.5 h-3.5" />
              Something Went Wrong
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4 tracking-tight">
              Page Error
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-2">
              This page encountered an unexpected error.
            </p>
            <p className="text-sm text-muted-foreground/70 mb-10 max-w-md mx-auto">
              You can try refreshing the page. If the problem persists, please contact our support team.
            </p>
          </motion.div>

          {/* Error id (digest) */}
          {error.digest && (
            <div className="mb-8 px-4 py-2.5 bg-muted/50 border border-border rounded-xl inline-block">
              <p className="text-xs font-mono text-muted-foreground">Error ID: {error.digest}</p>
            </div>
          )}

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Button
              onClick={reset}
              size="lg"
              className="w-full sm:w-auto h-12 px-8 font-bold text-xs uppercase tracking-widest gap-2 shadow-glow shadow-primary/20"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </Button>
            <Button
              onClick={() => window.history.back()}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto h-12 px-8 font-bold text-xs uppercase tracking-widest gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Button>
            <Button
              onClick={() => router.push("/")}
              variant="ghost"
              size="lg"
              className="w-full sm:w-auto h-12 px-8 font-bold text-xs uppercase tracking-widest gap-2 text-muted-foreground hover:text-foreground"
            >
              <Home className="w-4 h-4" />
              Home
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
