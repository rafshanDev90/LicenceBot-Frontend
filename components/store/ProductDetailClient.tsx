"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, CheckCircle, ShieldCheck, Zap, KeyRound, Star, ShoppingCart, CreditCard, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/cart-store";
import Link from "next/link";
import { LicenseProduct } from "@/lib/api/license-products";

interface ProductDetailClientProps {
  product: LicenseProduct;
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  
  const { addItem, isInCart, openCart } = useCartStore();

  const regPrice = product.regular_price ?? 0;
  const salePrice = product.sale_price ?? regPrice;
  const discount = regPrice > 0 ? Math.round(((regPrice - salePrice) / regPrice) * 100) : 0;
  const inStock = product.stock_count > 0;
  const itemInCart = isInCart(product.id);

  const handleAddToCart = async () => {
    if (!inStock) return;
    
    setIsAddingToCart(true);
    
    // Simulate API delay for UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    addItem({
      productId: product.id,
      name: product.name,
      shortDescription: product.short_description || "",
      imageUrl: product.image_url || "",
      regularPrice: regPrice,
      salePrice: salePrice,
      quantity,
      productType: product.product_type,
      licenseType: product.license_type || "Digital",
      stockCount: product.stock_count,
      product_slug: product.slug || null,
    });
    
    setIsAddingToCart(false);
    openCart(); // Open cart drawer after adding
  };

  const handleBuyNow = async () => {
    if (!inStock) return;
    
    // Add to cart first, then proceed to checkout
    if (!itemInCart) {
      await handleAddToCart();
    }
    
    // Redirect to checkout
    router.push('/checkout/shipping');
  };

  return (
    <>
      <Link href="/store" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Store
      </Link>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Image Gallery */}
        <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square bg-card border border-border/50 rounded-[2rem] overflow-hidden shadow-2xl p-4 sm:p-8 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-muted/50 to-transparent" />
          {product.image_url ? (
            <img 
              src={product.image_url} 
              alt={product.name}
              className="w-full h-full object-cover rounded-2xl relative z-10 shadow-lg"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center relative z-10">
              <Package className="w-24 h-24 text-muted-foreground/30" />
            </div>
          )}
          {discount > 0 && (
            <div className="absolute top-8 left-8 z-20">
              <span className="px-4 py-2 rounded-xl bg-destructive text-destructive-foreground font-black tracking-widest uppercase shadow-xl backdrop-blur-md">
                Save {discount}%
              </span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-primary/80 mb-3">
            {product.product_type}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight tracking-tight">
            {product.name}
          </h1>
          
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center gap-[2px]">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star 
                  key={s} 
                  className={`w-4 h-4 ${s <= 5 ? "fill-warning text-warning" : "fill-muted text-muted"}`} 
                />
              ))}
            </div>
            <span className="text-sm font-bold text-foreground ml-1">5.0</span>
            <span className="text-sm text-muted-foreground">({product.sold_count || 0} sold)</span>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {product.short_description || "High-quality digital license for instant delivery and lifetime activation."}
          </p>

          <div className="p-6 rounded-3xl bg-card border border-border/60 shadow-xl mb-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 pb-6 border-b border-border/50">
              <div>
                <span className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-1 block">Your Price</span>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl sm:text-5xl font-black text-foreground">${salePrice.toFixed(2)}</span>
                  {discount > 0 && (
                    <span className="text-xl font-semibold text-muted-foreground line-through">${regPrice.toFixed(2)}</span>
                  )}
                </div>
              </div>
              <div className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest border w-fit flex items-center gap-2 ${inStock ? "bg-success/10 text-success border-success/20" : "bg-destructive/10 text-destructive border-destructive/20"}`}>
                <CheckCircle className="w-3.5 h-3.5" /> {inStock ? "In Stock Ready" : "Out of Stock"}
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm text-foreground">
                <ShieldCheck className="w-5 h-5 text-success" /> Genuine Retail License Guarantee
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground">
                <Zap className="w-5 h-5 text-warning" /> Instant Code Delivery via Email
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground">
                <KeyRound className="w-5 h-5 text-primary" /> Activate globally (No region lock)
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button 
                size="lg" 
                className="h-14 rounded-xl text-base font-bold shadow-lg" 
                onClick={handleBuyNow}
                disabled={!inStock}
              >
                <CreditCard className="w-5 h-5 mr-2" /> Buy Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-14 rounded-xl text-base font-bold" 
                onClick={handleAddToCart}
                disabled={!inStock || isAddingToCart}
              >
                {isAddingToCart ? (
                  "Adding..."
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5 mr-2" /> 
                    {itemInCart ? "Update Cart" : "Add to Cart"}
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Key Features</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 text-sm font-medium text-foreground">
                <CheckCircle className="w-4 h-4 text-success" /> Lifetime License
              </li>
              <li className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 text-sm font-medium text-foreground">
                <CheckCircle className="w-4 h-4 text-success" /> Official Activation
              </li>
              <li className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 text-sm font-medium text-foreground">
                <CheckCircle className="w-4 h-4 text-success" /> 24/7 Priority Support
              </li>
              <li className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 text-sm font-medium text-foreground">
                <CheckCircle className="w-4 h-4 text-success" /> Multi-language Support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
