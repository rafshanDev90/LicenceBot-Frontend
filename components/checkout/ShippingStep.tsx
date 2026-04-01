"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCartStore } from "@/lib/cart-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, ArrowLeft, MapPin, Phone, Mail, User } from "lucide-react";
import Link from "next/link";
import type { ShippingAddress } from "@/lib/cart-types";

const shippingSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  state: z.string().min(2, "State must be at least 2 characters"),
  zipCode: z.string().min(5, "ZIP code must be at least 5 characters"),
  country: z.string().min(2, "Country must be at least 2 characters"),
});

type ShippingFormData = z.infer<typeof shippingSchema>;

interface ShippingStepProps {
  onNext: () => void;
  onPrevious?: () => void;
}

export function ShippingStep({ onNext, onPrevious }: ShippingStepProps) {
  const { items, totalPrice, setCheckoutData, checkoutData } = useCartStore();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ShippingFormData>({
    resolver: zodResolver(shippingSchema),
    defaultValues: checkoutData.shippingAddress || {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "United States",
    },
  });

  const onSubmit = async (data: ShippingFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setCheckoutData({ shippingAddress: data });
    onNext();
    
    setIsSubmitting(false);
  };

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="bg-muted/50 rounded-lg p-8 border border-border">
          <h2 className="text-xl font-semibold text-foreground mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">Add some products to proceed with checkout.</p>
          <Button asChild>
            <Link href="/store">
              Continue Shopping
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Order Summary */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Shipping Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  First Name *
                </Label>
                <Input
                  id="firstName"
                  {...register("firstName")}
                  placeholder="John"
                  className={errors.firstName ? "border-destructive" : "border-border"}
                />
                {errors.firstName && (
                  <p className="text-xs text-destructive">{errors.firstName.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  {...register("lastName")}
                  placeholder="Doe"
                  className={errors.lastName ? "border-destructive" : "border-border"}
                />
                {errors.lastName && (
                  <p className="text-xs text-destructive">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="john.doe@example.com"
                  className={errors.email ? "border-destructive" : "border-border"}
                />
                {errors.email && (
                  <p className="text-xs text-destructive">{errors.email.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  {...register("phone")}
                  placeholder="+1 (555) 123-4567"
                  className={errors.phone ? "border-destructive" : "border-border"}
                />
                {errors.phone && (
                  <p className="text-xs text-destructive">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <Label htmlFor="address">Street Address *</Label>
              <Input
                id="address"
                {...register("address")}
                placeholder="123 Main Street, Apt 4B"
                className={errors.address ? "border-destructive" : "border-border"}
              />
              {errors.address && (
                <p className="text-xs text-destructive">{errors.address.message}</p>
              )}
            </div>

            {/* City, State, ZIP */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  {...register("city")}
                  placeholder="New York"
                  className={errors.city ? "border-destructive" : "border-border"}
                />
                {errors.city && (
                  <p className="text-xs text-destructive">{errors.city.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="state">State *</Label>
                <Input
                  id="state"
                  {...register("state")}
                  placeholder="NY"
                  className={errors.state ? "border-destructive" : "border-border"}
                />
                {errors.state && (
                  <p className="text-xs text-destructive">{errors.state.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="zipCode">ZIP Code *</Label>
                <Input
                  id="zipCode"
                  {...register("zipCode")}
                  placeholder="10001"
                  className={errors.zipCode ? "border-destructive" : "border-border"}
                />
                {errors.zipCode && (
                  <p className="text-xs text-destructive">{errors.zipCode.message}</p>
                )}
              </div>
            </div>

            {/* Country */}
            <div className="space-y-2">
              <Label htmlFor="country">Country *</Label>
              <Input
                id="country"
                {...register("country")}
                placeholder="United States"
                className={errors.country ? "border-destructive" : "border-border"}
              />
              {errors.country && (
                <p className="text-xs text-destructive">{errors.country.message}</p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {onPrevious && (
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 h-12 border-border hover:bg-muted"
                  onClick={onPrevious}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              )}
              
              <Button
                type="submit"
                className="flex-1 h-12 bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={!isValid || isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Continue to Summary"}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Cart Summary */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                </div>
                <span className="text-sm font-medium text-foreground">
                  ${((item.salePrice ?? item.regularPrice ?? 0) * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
          
          <Separator className="bg-border" />
          
          <div className="flex items-center justify-between">
            <span className="font-semibold text-foreground">Subtotal</span>
            <span className="font-bold text-foreground">${totalPrice.toFixed(2)}</span>
          </div>
          
          <div className="text-xs text-muted-foreground text-center">
            Shipping and taxes will be calculated in the next step
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
