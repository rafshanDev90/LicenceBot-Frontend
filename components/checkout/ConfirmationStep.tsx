"use client";

import { useEffect, useState } from "react";
import { useCartStore } from "@/lib/cart-store";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Package, 
  MapPin, 
  Truck, 
  CreditCard, 
  Mail,
  ArrowRight,
  Home,
  Download,
  Share
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ConfirmationStepProps {
  onReset?: () => void;
}

export function ConfirmationStep({ onReset }: ConfirmationStepProps) {
  const { 
    items, 
    totalPrice, 
    checkoutData, 
    clearCart, 
    clearCheckoutData 
  } = useCartStore();
  
  const [orderNumber, setOrderNumber] = useState<string>("");
  const [estimatedDelivery, setEstimatedDelivery] = useState<string>("");

  useEffect(() => {
    // Generate order number and delivery date
    const orderNum = `LB-${Date.now().toString().slice(-8)}`;
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + (checkoutData.shippingMethod?.id === "overnight" ? 1 : 5));
    
    setOrderNumber(orderNum);
    setEstimatedDelivery(deliveryDate.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    }));

    // Clear cart and checkout data after successful order
    if (items.length > 0) {
      clearCart();
      clearCheckoutData();
    }
  }, [items.length, checkoutData.shippingMethod?.id, clearCart, clearCheckoutData]);

  const shippingCost = checkoutData.shippingMethod?.price || 0;
  const estimatedTax = totalPrice * 0.08; // 8% tax rate
  const total = totalPrice + shippingCost + estimatedTax;

  if (items.length === 0 && !orderNumber) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="bg-muted/50 rounded-lg p-8 border border-border">
          <h2 className="text-xl font-semibold text-foreground mb-4">No Order Found</h2>
          <p className="text-muted-foreground mb-6">
            There's no recent order to display.
          </p>
          <Button asChild>
            <Link href="/store">
              <Home className="h-4 w-4 mr-2" />
              Back to Store
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Success Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-success/10 border-2 border-success/20">
          <CheckCircle className="h-10 w-10 text-success" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Order Confirmed!</h1>
          <p className="text-lg text-muted-foreground">
            Thank you for your purchase. Your order has been successfully placed.
          </p>
        </div>

        <div className="inline-flex items-center gap-4 bg-muted/30 rounded-lg px-6 py-3 border border-border">
          <div>
            <p className="text-xs text-muted-foreground">Order Number</p>
            <p className="text-lg font-bold text-foreground">{orderNumber}</p>
          </div>
          <Separator orientation="vertical" className="h-8 bg-border" />
          <div>
            <p className="text-xs text-muted-foreground">Estimated Delivery</p>
            <p className="text-lg font-bold text-foreground">{estimatedDelivery}</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Order Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Items Ordered */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                Items Ordered
              </CardTitle>
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
              
              <Separator className="bg-border" />
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
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
                  <span className="text-base font-semibold text-foreground">Total Paid</span>
                  <span className="text-lg font-bold text-foreground">${total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Shipping Information */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Shipping Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {checkoutData.shippingAddress && (
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
              )}
              
              {checkoutData.shippingMethod && (
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border">
                  <div className="flex items-center gap-3">
                    <Truck className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-foreground">{checkoutData.shippingMethod.name}</p>
                      <p className="text-sm text-muted-foreground">{checkoutData.shippingMethod.estimatedDays}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-border">
                    {checkoutData.shippingMethod.price === 0 ? "FREE" : `$${checkoutData.shippingMethod.price.toFixed(2)}`}
                  </Badge>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Payment Information */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-primary" />
                Payment Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {checkoutData.paymentMethod && (
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border">
                  <div>
                    <p className="font-medium text-foreground">{checkoutData.paymentMethod.name}</p>
                    <p className="text-sm text-muted-foreground">{checkoutData.paymentMethod.description}</p>
                  </div>
                  <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                    Paid
                  </Badge>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Actions Sidebar */}
        <div className="lg:col-span-1">
          <Card className="border-border bg-card sticky top-6">
            <CardHeader>
              <CardTitle>Next Steps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>• Order confirmation has been sent to your email</p>
                  <p>• You'll receive tracking information once your order ships</p>
                  <p>• Expected delivery by {estimatedDelivery}</p>
                </div>
              </div>

              <Separator className="bg-border" />

              <div className="space-y-3">
                <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link href="/store">
                    <Home className="h-4 w-4 mr-2" />
                    Continue Shopping
                  </Link>
                </Button>
                
                <Button variant="outline" className="w-full h-12 border-border hover:bg-muted">
                  <Download className="h-4 w-4 mr-2" />
                  Download Receipt
                </Button>
                
                <Button variant="outline" className="w-full h-12 border-border hover:bg-muted">
                  <Share className="h-4 w-4 mr-2" />
                  Share Order
                </Button>
              </div>

              <div className="text-center pt-4 border-t border-border">
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <Mail className="h-3 w-3" />
                  <span>Need help? Contact support</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
