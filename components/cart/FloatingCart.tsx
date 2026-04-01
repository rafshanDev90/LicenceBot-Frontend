"use client";

import { useCartStore } from "@/lib/cart-store";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Package } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface FloatingCartProps {
  className?: string;
}

export function FloatingCart({ className = "" }: FloatingCartProps) {
  const { totalItems, totalPrice, openCart, items } = useCartStore();

  const hasItems = totalItems > 0;

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      <AnimatePresence>
        {hasItems && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="mb-3 bg-card border border-border rounded-lg px-3 py-2 shadow-lg"
          >
            <div className="text-xs text-muted-foreground">Cart Total</div>
            <div className="text-sm font-bold text-foreground">
              ${totalPrice.toFixed(2)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <Button
          onClick={openCart}
          size="lg"
          className={`relative h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
            hasItems 
              ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
              : "bg-muted hover:bg-muted/80 text-muted-foreground"
          }`}
          aria-label="Shopping cart"
        >
          <ShoppingCart className="h-6 w-6" />
          
          {hasItems && (
            <Badge 
              className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-destructive text-destructive-foreground border-2 border-background flex items-center justify-center p-0 text-xs font-bold"
              variant="destructive"
            >
              {totalItems > 99 ? "99+" : totalItems}
            </Badge>
          )}

          {!hasItems && (
            <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-muted-foreground opacity-30" />
          )}
        </Button>
      </motion.div>

      {/* Quick cart preview tooltip */}
      {hasItems && items.length > 0 && (
        <div className="absolute bottom-full right-0 mb-2 w-80 bg-card border border-border rounded-lg shadow-xl p-4 opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm text-foreground">Recently Added</h4>
              <span className="text-xs text-muted-foreground">{totalItems} items</span>
            </div>
            <div className="space-y-1 max-h-32 overflow-y-auto">
              {items.slice(0, 3).map((item) => (
                <div key={item.id} className="flex items-center gap-2 text-xs">
                  <Package className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                  <span className="text-foreground truncate flex-1">{item.name}</span>
                  <span className="text-muted-foreground">x{item.quantity}</span>
                </div>
              ))}
              {items.length > 3 && (
                <div className="text-xs text-muted-foreground text-center">
                  +{items.length - 3} more items
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
