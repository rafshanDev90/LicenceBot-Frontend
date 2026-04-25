"use client";

import { useState, useEffect } from "react";
import { useCartStore } from "@/lib/cart-store";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, CreditCard, Smartphone, DollarSign, Shield, Clock, Loader2 } from "lucide-react";
import Link from "next/link";
import type { PaymentMethod } from "@/lib/cart-types";
import { fetchGateways, createCheckout, type Gateway } from "@/lib/api/checkout";

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
    checkoutData.paymentMethod?.id || ""
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingGateways, setIsLoadingGateways] = useState(true);
  const [gateways, setGateways] = useState<Gateway[]>([]);
  const [error, setError] = useState<string | null>(null);

  const selectedPaymentMethod = gateways.find(g => g.gateway === selectedPayment);
  const shippingCost = checkoutData.shippingMethod?.price || 0;
  const estimatedTax = totalPrice * 0.08; // 8% tax rate
  const total = totalPrice + shippingCost + estimatedTax;

  // Fetch payment gateways on component mount
  useEffect(() => {
    const loadGateways = async () => {
      try {
        setIsLoadingGateways(true);
        const fetchedGateways = await fetchGateways();
        setGateways(fetchedGateways);
        if (fetchedGateways.length > 0 && !selectedPayment) {
          setSelectedPayment(fetchedGateways[0].gateway);
        }
      } catch (err) {
        console.error("Failed to fetch gateways:", err);
        setError("Failed to load payment methods. Please try again.");
      } finally {
        setIsLoadingGateways(false);
      }
    };
    loadGateways();
  }, [selectedPayment]);

  const handleSubmit = async () => {
    if (!selectedPaymentMethod || !checkoutData.shippingAddress) return;
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Prepare checkout request
      const checkoutRequest = {
        items: items.map(item => ({
          product_slug: item.product_slug || item.productId,
          quantity: item.quantity,
        })),
        customer: {
          email: checkoutData.shippingAddress.email,
          name: `${checkoutData.shippingAddress.firstName} ${checkoutData.shippingAddress.lastName}`,
        },
        gateway: selectedPaymentMethod.gateway,
        return_url: `${window.location.origin}/checkout/success`,
        cancel_url: `${window.location.origin}/checkout/cancel`,
      };

      const response = await createCheckout(checkoutRequest);
      
      // Step 3: Redirect to checkout URL
      if (response.checkout_url) {
        window.location.href = response.checkout_url;
      } else {
        throw new Error("No checkout URL received");
      }
    } catch (err) {
      console.error("Checkout failed:", err);
      setError(err instanceof Error ? err.message : "Failed to process checkout. Please try again.");
      setIsSubmitting(false);
    }
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

  if (isLoadingGateways) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading payment methods...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="bg-destructive/10 rounded-lg p-8 border border-destructive/20">
          <h2 className="text-xl font-semibold text-destructive mb-4">Error</h2>
          <p className="text-muted-foreground mb-6">{error}</p>
          <Button onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  const getPaymentIcon = (kind: Gateway['kind']) => {
    switch (kind) {
      case 'card':
        return <CreditCard className="h-5 w-5" />;
      case 'crypto':
        return <DollarSign className="h-5 w-5" />;
      case 'wallet':
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
              {gateways.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No payment methods available
                </div>
              ) : (
                <RadioGroup value={selectedPayment} onValueChange={setSelectedPayment}>
                  {gateways.map((gateway) => (
                    <div key={gateway.gateway} className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value={gateway.gateway} id={gateway.gateway} />
                        <Label
                          htmlFor={gateway.gateway}
                          className="flex items-center justify-between w-full cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <div className="text-muted-foreground">
                              {getPaymentIcon(gateway.kind)}
                            </div>
                            <div>
                              <p className="font-medium text-foreground">{gateway.display_name}</p>
                              <p className="text-sm text-muted-foreground capitalize">{gateway.kind} payment</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="text-xs capitalize">{gateway.kind}</Badge>
                          </div>
                        </Label>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
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
                  {selectedPaymentMethod && getPaymentIcon(selectedPaymentMethod.kind)}
                  <span className="text-sm font-medium text-foreground">
                    {selectedPaymentMethod?.display_name}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground capitalize">
                  {selectedPaymentMethod?.kind} payment method
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
                  disabled={!selectedPayment || isSubmitting || gateways.length === 0}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Processing...
                    </>
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
