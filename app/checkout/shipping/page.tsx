"use client";

export const dynamic = 'force-dynamic';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { PublicFooter } from "@/components/public/PublicFooter";
import { CheckoutProgress } from "@/components/checkout/CheckoutProgress";
import { ShippingStep } from "@/components/checkout/ShippingStep";
import { CheckoutStep } from "@/lib/cart-types";
import { useCartStore } from "@/lib/cart-store";

export default function ShippingPage() {
  const router = useRouter();
  const { items } = useCartStore();
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('shipping');

  useEffect(() => {
    // Redirect to store if cart is empty
    if (items.length === 0) {
      router.push('/store');
      return;
    }
    setCurrentStep('shipping');
  }, [items.length, router]);

  const handleNext = () => {
    router.push('/checkout/summary');
  };

  if (items.length === 0) {
    return null; // Will redirect
  }

  return (
    <main className="relative min-h-screen bg-background overflow-hidden flex flex-col">
      <PublicNavbar />
      
      <div className="flex-1 pt-32 pb-24">
        {/* Decorative background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-foreground">Checkout</h1>
            <p className="text-lg text-muted-foreground">
              Complete your purchase in just a few steps
            </p>
          </div>

          {/* Progress Indicator */}
          <CheckoutProgress currentStep={currentStep} className="mb-8" />

          {/* Shipping Step Content */}
          <ShippingStep onNext={handleNext} />
        </div>
      </div>

      <PublicFooter />
    </main>
  );
}
