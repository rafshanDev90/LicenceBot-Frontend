"use client";

import { useCartStore } from "@/lib/cart-store";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";
import {
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  Package,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { calculateItemPrice } from "@/lib/cart-types";

export function CartDrawer() {
  const { 
    items, 
    isOpen, 
    totalPrice, 
    totalItems, 
    removeItem, 
    updateQuantity, 
    clearCart, 
    closeCart 
  } = useCartStore();

  const hasItems = items.length > 0;

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent className="w-full sm:max-w-md bg-card border-l border-border">
        <SheetHeader className="border-b border-border pb-4">
          <SheetTitle className="flex items-center gap-2 text-foreground">
            <ShoppingBag className="h-5 w-5" />
            Shopping Cart
            {totalItems > 0 && (
              <Badge variant="secondary" className="ml-2">
                {totalItems} {totalItems === 1 ? 'item' : 'items'}
              </Badge>
            )}
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-[calc(100vh-8rem)]">
          {/* Cart Items */}
          <ScrollArea className="flex-1 px-1">
            <AnimatePresence mode="popLayout">
              {!hasItems ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <Package className="h-16 w-16 text-muted-foreground/30 mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Add some products to get started
                  </p>
                  <Button asChild variant="outline" onClick={closeCart}>
                    <Link href="/store">
                      Continue Shopping
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4 py-4"
                >
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      layout
                      className="bg-background border border-border rounded-lg p-4 space-y-3"
                    >
                      {/* Item Header */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-foreground leading-tight line-clamp-2">
                            {item.name}
                          </h4>
                          {item.shortDescription && (
                            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                              {item.shortDescription}
                            </p>
                          )}
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant="outline" className="text-[10px] border-border">
                              {item.productType}
                            </Badge>
                            {item.licenseType && (
                              <Badge variant="outline" className="text-[10px] border-border">
                                {item.licenseType}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 h-8 w-8 p-0"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Price and Quantity */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-foreground">
                            ${calculateItemPrice(item).toFixed(2)}
                          </span>
                          {item.salePrice && item.regularPrice && item.salePrice < item.regularPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              ${(item.regularPrice * item.quantity).toFixed(2)}
                            </span>
                          )}
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-1 bg-muted border border-border rounded-md">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8 p-0 hover:bg-background"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm font-medium text-foreground">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8 p-0 hover:bg-background"
                            disabled={item.quantity >= item.stockCount}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>

                      {/* Stock Warning */}
                      {item.quantity >= item.stockCount && item.stockCount > 0 && (
                        <div className="text-xs text-amber-600 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded px-2 py-1">
                          Maximum quantity reached
                        </div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </ScrollArea>

          {/* Cart Footer */}
          {hasItems && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="border-t border-border bg-background/50 backdrop-blur-sm p-4 space-y-4"
            >
              {/* Cart Summary */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium text-foreground">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium text-foreground">Calculated at checkout</span>
                </div>
                <Separator className="bg-border" />
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold text-foreground">Total</span>
                  <span className="text-lg font-bold text-foreground">${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <Button 
                  className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                  asChild
                  onClick={closeCart}
                >
                  <Link href="/checkout/shipping">
                    Proceed to Checkout
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
                
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    className="flex-1 h-11 border-border hover:bg-muted"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 h-11 border-border hover:bg-muted"
                    onClick={closeCart}
                    asChild
                  >
                    <Link href="/store">
                      Continue Shopping
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
