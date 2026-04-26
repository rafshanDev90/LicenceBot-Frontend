"use client";

import { useState } from "react";
import { useCartStore } from "@/lib/cart-store";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, Truck, Package, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import type { ShippingMethod } from "@/lib/cart-types";

// Mock shipping methods
const shippingMethods: ShippingMethod[] = [
  {
    id: "standard",
    name: "Standard Shipping",
    description: "Regular delivery with tracking",
    price: 0,
    estimatedDays: "5-7 business days",
  },
  {
    id: "express",
    name: "Express Shipping",
    description: "Fast delivery with priority tracking",
    price: 15.99,
    estimatedDays: "2-3 business days",
  },
  {
    id: "overnight",
    name: "Overnight Shipping",
    description: "Next day delivery",
    price: 29.99,
    estimatedDays: "1 business day",
  },
];

interface SummaryStepProps {
  onNext: () => void;
  onPrevious: () => void;
}

export function SummaryStep({ onNext, onPrevious }: SummaryStepProps) {
  const { 
    items, 
    totalPrice, 
    checkoutData, 
    setCheckoutData 
  } = useCartStore();
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Digital products have no shipping cost or delivery days
  const shippingCost = 0;
  const estimatedTax = totalPrice * 0.08; // 8% tax rate
  const total = totalPrice + shippingCost + estimatedTax;

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Set digital delivery as the default method to satisfy redirect checks
    setCheckoutData({ 
      shippingMethod: {
        id: "digital",
        name: "Digital Delivery",
        description: "Instant access after payment",
        price: 0,
        estimatedDays: "Instant",
      } 
    });
    
    // Navigate specifically to the payment route
    onNext(); // This calls the parent's handleNext which pushes to /checkout/payment
    setIsSubmitting(false);
  };

  if (items.length === 0 || !checkoutData.shippingAddress) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="bg-muted/50 rounded-lg p-8 border border-border">
          <h2 className="text-xl font-semibold text-foreground mb-4">Missing Information</h2>
          <p className="text-muted-foreground mb-6">
            Please complete the shipping information first.
          </p>
          <Button asChild>
            <Link href="/checkout/shipping">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Shipping
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Shipping Address */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Shipping Address
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted/30 rounded-lg p-4 border border-border">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-foreground">
                      {checkoutData.shippingAddress.firstName} {checkoutData.shippingAddress.lastName}
                    </p>
                    <p className="text-muted-foreground">{checkoutData.shippingAddress.email}</p>
                    <p className="text-muted-foreground">{checkoutData.shippingAddress.phone}</p>
                  </div>
                  <div>
                    <p className="text-foreground">
                      {checkoutData.shippingAddress.address}
                    </p>
                    <p className="text-foreground">
                      {checkoutData.shippingAddress.city}, {checkoutData.shippingAddress.state} {checkoutData.shippingAddress.zipCode}
                    </p>
                    <p className="text-foreground">{checkoutData.shippingAddress.country}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Order Items */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle>Order Items</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border">
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{item.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-[10px] border-border">
                          {item.productType}
                        </Badge>
                        <span className="text-xs text-muted-foreground">Qty: {item.quantity}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-foreground">
                        ${((item.salePrice ?? item.regularPrice ?? 0) * item.quantity).toFixed(2)}
                      </p>
                      {item.salePrice && item.regularPrice && item.salePrice < item.regularPrice && (
                        <p className="text-xs text-muted-foreground line-through">
                          ${(item.regularPrice * item.quantity).toFixed(2)}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-1">
          <Card className="border-border bg-card sticky top-6">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium text-foreground">${totalPrice.toFixed(2)}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium text-foreground">
                    FREE
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Estimated Tax</span>
                  <span className="font-medium text-foreground">${estimatedTax.toFixed(2)}</span>
                </div>
                
                <Separator className="bg-border" />
                
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold text-foreground">Total</span>
                  <span className="text-lg font-bold text-foreground">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <Button
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Continue to Payment"}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full h-12 border-border hover:bg-muted"
                  onClick={onPrevious}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Shipping
                </Button>
              </div>

              {/* Security Badge */}
              <div className="text-center pt-4 border-t border-border">
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <div className="w-4 h-4 bg-success rounded-full flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-success-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Secure Checkout</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
