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
    <div className={cn("w-full max-w-3xl mx-auto", className)}>
      <div className="flex items-center justify-between relative">
        {/* Progress line */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-border" />
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-primary transition-all duration-500"
          style={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}
        />

        {/* Steps */}
        {steps.map((step, index) => {
          const isActive = step.id === currentStep;
          const isCompleted = index < currentStepIndex;
          const isUpcoming = index > currentStepIndex;

          return (
            <div key={step.id} className="relative flex flex-col items-center group">
              {/* Step circle */}
              <div
                className={cn(
                  "w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-semibold transition-all duration-300 z-10",
                  isActive
                    ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : isCompleted
                    ? "bg-primary border-primary text-primary-foreground"
                    : "bg-background border-border text-muted-foreground"
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

              {/* Step label */}
              <div className="absolute top-12 text-center whitespace-nowrap">
                <p className={cn(
                  "text-sm font-medium",
                  isActive ? "text-foreground" : isCompleted ? "text-foreground" : "text-muted-foreground"
                )}>
                  {step.label}
                </p>
                <p className={cn(
                  "text-xs mt-1",
                  isActive ? "text-primary" : isCompleted ? "text-muted-foreground" : "text-muted-foreground"
                )}>
                  {step.description}
                </p>
              </div>

              {/* Tooltip on hover */}
              <div className="absolute bottom-full mb-2 px-2 py-1 bg-popover border border-border rounded text-xs text-popover-foreground opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {step.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
