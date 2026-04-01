"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw, ArrowLeft, Home, ServerCrash } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error("[GlobalError]", error);
  }, [error]);

  const goBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      window.history.back();
    }
  };

  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center p-4 font-sans antialiased overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-red-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 text-center shadow-2xl"
          >
            {/* Icon */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl animate-pulse" />
                <div className="relative w-20 h-20 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <ServerCrash className="w-10 h-10 text-red-400" />
                </div>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-6">
                <AlertTriangle className="w-3.5 h-3.5" />
                Server Error
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight leading-tight">
                Under Maintenance
              </h1>
              <p className="text-lg text-white/50 leading-relaxed mb-2">
                Something went wrong on our end.
              </p>
              <p className="text-sm text-white/30 mb-10 max-w-md mx-auto">
                Our team has been automatically notified and is working to fix this. You can try refreshing the page or come back in a few minutes.
              </p>
            </motion.div>

            {/* Error digest (for debugging) */}
            {error.digest && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mb-8 p-3 bg-white/5 border border-white/10 rounded-xl"
              >
                <p className="text-xs font-mono text-white/30">Error ID: {error.digest}</p>
              </motion.div>
            )}

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <Button
                onClick={reset}
                size="lg"
                className="w-full sm:w-auto h-12 px-8 font-bold text-xs uppercase tracking-widest gap-2 bg-[#00ffdf] text-black hover:bg-[#00ffdf]/90 shadow-[0_0_20px_rgba(0,255,223,0.3)] hover:shadow-[0_0_30px_rgba(0,255,223,0.5)] transition-all duration-300"
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </Button>
              <Button
                onClick={goBack}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto h-12 px-8 font-bold text-xs uppercase tracking-widest gap-2 border-white/10 text-white/70 hover:text-white hover:bg-white/10 bg-transparent"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </Button>
              <Button
                onClick={() => router.push("/")}
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto h-12 px-8 font-bold text-xs uppercase tracking-widest gap-2 text-white/50 hover:text-white hover:bg-white/5"
              >
                <Home className="w-4 h-4" />
                Home
              </Button>
            </motion.div>
          </motion.div>

          {/* Status bar mock */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-xs text-white/20 mt-8 tracking-wider uppercase"
          >
            LicenceBot — All systems are being monitored
          </motion.p>
        </div>
      </body>
    </html>
  );
}
