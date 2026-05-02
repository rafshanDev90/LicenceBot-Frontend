"use client";

export const dynamic = 'force-dynamic';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { PublicFooter } from "@/components/public/PublicFooter";
import { ConfirmationStep } from "@/components/checkout/ConfirmationStep";
import { CheckoutStep } from "@/lib/cart-types";
import { useCartStore } from "@/lib/cart-store";

export default function ConfirmationPage() {
  const router = useRouter();
  const { items, checkoutData } = useCartStore();
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('confirmation');

  useEffect(() => {
    // This page should be accessible after payment completion
    // In a real app, you'd verify the order was completed
    setCurrentStep('confirmation');
  }, [router]);

  const handleReset = () => {
    router.push('/store');
  };

  return (
    <main className="relative min-h-screen bg-background overflow-hidden flex flex-col">
      <PublicNavbar />
      
      <div className="flex-1 pt-32 pb-24">
        {/* Decorative background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          {/* Confirmation Step Content */}
          <ConfirmationStep onReset={handleReset} />
        </div>
      </div>

      <PublicFooter />
    </main>
  );
}
