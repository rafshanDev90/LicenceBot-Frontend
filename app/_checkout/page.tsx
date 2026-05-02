"use client";

export const dynamic = 'force-dynamic';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { PublicFooter } from "@/components/public/PublicFooter";
import { CheckoutProgress } from "@/components/checkout/CheckoutProgress";
import { ShippingStep } from "@/components/checkout/ShippingStep";
import { SummaryStep } from "@/components/checkout/SummaryStep";
import { PaymentStep } from "@/components/checkout/PaymentStep";
import { ConfirmationStep } from "@/components/checkout/ConfirmationStep";
import { CheckoutStep } from "@/lib/cart-types";
import { useCartStore } from "@/lib/cart-store";

const checkoutSteps: CheckoutStep[] = ['shipping', 'summary', 'payment', 'confirmation'];

export default function CheckoutPage() {
  const router = useRouter();
  const { items } = useCartStore();
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('shipping');

  const handleNext = () => {
    const currentIndex = checkoutSteps.indexOf(currentStep);
    if (currentIndex < checkoutSteps.length - 1) {
      const nextStep = checkoutSteps[currentIndex + 1];
      setCurrentStep(nextStep);
      
      // Update URL to reflect current step
      router.push(`/checkout/${nextStep}`);
    }
  };

  const handlePrevious = () => {
    const currentIndex = checkoutSteps.indexOf(currentStep);
    if (currentIndex > 0) {
      const previousStep = checkoutSteps[currentIndex - 1];
      setCurrentStep(previousStep);
      
      // Update URL to reflect current step
      router.push(`/checkout/${previousStep}`);
    }
  };

  const handleReset = () => {
    setCurrentStep('shipping');
    router.push('/checkout/shipping');
  };

  // Redirect to shipping if cart is empty
  if (items.length === 0 && currentStep !== 'confirmation') {
    router.push('/store');
    return null;
  }

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'shipping':
        return <ShippingStep onNext={handleNext} />;
      case 'summary':
        return <SummaryStep onNext={handleNext} onPrevious={handlePrevious} />;
      case 'payment':
        return <PaymentStep onNext={handleNext} onPrevious={handlePrevious} />;
      case 'confirmation':
        return <ConfirmationStep onReset={handleReset} />;
      default:
        return <ShippingStep onNext={handleNext} />;
    }
  };

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
          {currentStep !== 'confirmation' && (
            <CheckoutProgress currentStep={currentStep} className="mb-8" />
          )}

          {/* Current Step Content */}
          <div className="min-h-[600px]">
            {renderCurrentStep()}
          </div>
        </div>
      </div>

      <PublicFooter />
    </main>
  );
}
