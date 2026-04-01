"use client";

import { useState } from "react";
import { useCartStore } from "@/lib/cart-store";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, CreditCard, Smartphone, DollarSign, Shield, Clock } from "lucide-react";
import Link from "next/link";
import type { PaymentMethod } from "@/lib/cart-types";

// Mock payment methods
const paymentMethods: PaymentMethod[] = [
  {
    id: "cod",
    name: "Cash on Delivery",
    description: "Pay when you receive your order",
    type: "cod",
  },
  {
    id: "card",
    name: "Credit/Debit Card",
    description: "Pay securely with your card",
    type: "card",
  },
  {
    id: "online",
    name: "Online Banking",
    description: "Pay through your bank's online portal",
    type: "online",
  },
];

interface PaymentStepProps {
  onNext: () => void;
  onPrevious: () => void;
}

export function PaymentStep({ onNext, onPrevious }: PaymentStepProps) {
  const { 
    items, 
    totalPrice, 
    checkoutData 
  } = useCartStore();
  
  const [selectedPayment, setSelectedPayment] = useState<string>(
    checkoutData.paymentMethod?.id || "cod"
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedPaymentMethod = paymentMethods.find(method => method.id === selectedPayment);
  const shippingCost = checkoutData.shippingMethod?.price || 0;
  const estimatedTax = totalPrice * 0.08; // 8% tax rate
  const total = totalPrice + shippingCost + estimatedTax;

  const handleSubmit = async () => {
    if (!selectedPaymentMethod) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real app, you would process the payment here
    onNext();
    
    setIsSubmitting(false);
  };

  if (items.length === 0 || !checkoutData.shippingAddress || !checkoutData.shippingMethod) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="bg-muted/50 rounded-lg p-8 border border-border">
          <h2 className="text-xl font-semibold text-foreground mb-4">Missing Information</h2>
          <p className="text-muted-foreground mb-6">
            Please complete the previous steps first.
          </p>
          <Button asChild>
            <Link href="/checkout/shipping">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Checkout
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const getPaymentIcon = (type: PaymentMethod['type']) => {
    switch (type) {
      case 'card':
        return <CreditCard className="h-5 w-5" />;
      case 'cod':
        return <DollarSign className="h-5 w-5" />;
      case 'online':
        return <Smartphone className="h-5 w-5" />;
      default:
        return <CreditCard className="h-5 w-5" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Payment Methods */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-primary" />
                Payment Method
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <RadioGroup value={selectedPayment} onValueChange={setSelectedPayment}>
                {paymentMethods.map((method) => (
                  <div key={method.id} className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value={method.id} id={method.id} />
                      <Label
                        htmlFor={method.id}
                        className="flex items-center justify-between w-full cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <div className="text-muted-foreground">
                            {getPaymentIcon(method.type)}
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{method.name}</p>
                            <p className="text-sm text-muted-foreground">{method.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {method.id === "cod" && (
                            <Badge variant="secondary" className="text-xs">No extra fees</Badge>
                          )}
                          {method.id === "card" && (
                            <Badge variant="secondary" className="text-xs">Secure</Badge>
                          )}
                        </div>
                      </Label>
                    </div>
                  </div>
                ))}
              </RadioGroup>

              {/* Payment Method Details */}
              {selectedPayment === "cod" && (
                <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-border">
                  <h4 className="font-medium text-foreground mb-2">Cash on Delivery Details</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Pay the full amount when your order arrives</li>
                    <li>• Exact change appreciated</li>
                    <li>• Driver will provide receipt</li>
                    <li>• No additional processing fees</li>
                  </ul>
                </div>
              )}

              {selectedPayment === "card" && (
                <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-border">
                  <h4 className="font-medium text-foreground mb-2">Card Payment Details</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Visa, Mastercard, American Express accepted</li>
                    <li>• Secure SSL encryption</li>
                    <li>• 3D Secure authentication available</li>
                    <li>• Instant payment confirmation</li>
                  </ul>
                </div>
              )}

              {selectedPayment === "online" && (
                <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-border">
                  <h4 className="font-medium text-foreground mb-2">Online Banking Details</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• All major banks supported</li>
                    <li>• Redirect to secure bank portal</li>
                    <li>• Real-time payment confirmation</li>
                    <li>• No additional processing fees</li>
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Order Summary */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Items ({items.length})</span>
                  <span className="font-medium text-foreground">${totalPrice.toFixed(2)}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium text-foreground">
                    {shippingCost === 0 ? "FREE" : `$${shippingCost.toFixed(2)}`}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="font-medium text-foreground">${estimatedTax.toFixed(2)}</span>
                </div>
                
                <Separator className="bg-border" />
                
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold text-foreground">Total Amount</span>
                  <span className="text-lg font-bold text-foreground">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Security Assurance */}
              <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-success" />
                  <div>
                    <p className="text-sm font-medium text-success">Secure Payment</p>
                    <p className="text-xs text-muted-foreground">
                      Your payment information is encrypted and secure
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-1">
          <Card className="border-border bg-card sticky top-6">
            <CardHeader>
              <CardTitle>Payment Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Selected Payment Method */}
              <div className="p-3 bg-muted/30 rounded-lg border border-border">
                <div className="flex items-center gap-2 mb-2">
                  {selectedPaymentMethod && getPaymentIcon(selectedPaymentMethod.type)}
                  <span className="text-sm font-medium text-foreground">
                    {selectedPaymentMethod?.name}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {selectedPaymentMethod?.description}
                </p>
              </div>

              {/* Delivery Timeline */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="font-medium text-foreground">Estimated Delivery</span>
                </div>
                <p className="text-sm text-muted-foreground pl-6">
                  {checkoutData.shippingMethod?.estimatedDays}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4">
                <Button
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={handleSubmit}
                  disabled={!selectedPayment || isSubmitting}
                >
                  {isSubmitting ? (
                    "Processing Payment..."
                  ) : (
                    <>
                      Complete Order
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </>
                  )}
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full h-12 border-border hover:bg-muted"
                  onClick={onPrevious}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Summary
                </Button>
              </div>

              {/* Terms */}
              <div className="text-xs text-muted-foreground text-center pt-4 border-t border-border">
                <p>
                  By completing this order, you agree to our{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
