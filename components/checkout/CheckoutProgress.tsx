"use client";

import { CheckoutStep } from "@/lib/cart-types";
import { cn } from "@/lib/utils";

interface CheckoutProgressProps {
  currentStep: CheckoutStep;
  className?: string;
}

const steps = [
  { id: 'shipping' as CheckoutStep, label: 'Shipping', description: 'Address details' },
  { id: 'summary' as CheckoutStep, label: 'Summary', description: 'Review order' },
  { id: 'payment' as CheckoutStep, label: 'Payment', description: 'Payment method' },
  { id: 'confirmation' as CheckoutStep, label: 'Confirmation', description: 'Order complete' },
];

export function CheckoutProgress({ currentStep, className }: CheckoutProgressProps) {
  const currentStepIndex = steps.findIndex(step => step.id === currentStep);

  return (
    <div className={cn("w-full max-w-4xl mx-auto px-4", className)}>
      <div className="flex items-start justify-between relative">
        {/* Progress line */}
        <div className="absolute left-[5%] right-[5%] top-5 h-0.5 bg-border -z-0" />
        <div 
          className="absolute left-[5%] top-5 h-0.5 bg-primary transition-all duration-500 -z-0"
          style={{ width: `${(currentStepIndex / (steps.length - 1)) * 90}%` }}
        />

        {/* Steps */}
        {steps.map((step, index) => {
          const isActive = step.id === currentStep;
          const isCompleted = index < currentStepIndex;

          return (
            <div key={step.id} className="relative flex flex-col items-center flex-1 z-10">
              {/* Step circle */}
              <div
                className={cn(
                  "w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-background",
                  isActive
                    ? "border-primary text-primary shadow-glow bg-primary/10"
                    : isCompleted
                    ? "bg-primary border-primary text-primary-foreground"
                    : "border-border text-muted-foreground"
                )}
              >
                {isCompleted ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>

              {/* Step label & description - Moved into flex flow */}
              <div className="mt-3 text-center flex flex-col items-center">
                <p className={cn(
                  "text-sm font-bold tracking-tight",
                  isActive ? "text-primary" : isCompleted ? "text-foreground" : "text-muted-foreground"
                )}>
                  {step.label}
                </p>
                <p className="text-[10px] mt-0.5 text-muted-foreground/60 font-medium uppercase tracking-wider hidden sm:block">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
