"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Package, ShoppingCart, Tag } from "lucide-react";
import Link from "next/link";

interface LicenseProduct {
  id: string;
  name: string;
  short_description: string | null;
  image_url: string | null;
  regular_price: number | null;
  sale_price: number | null;
  stock_count: number;
  sold_count: number;
  product_type: string;
  license_type: string | null;
  category_id: string | null;
}

// Dummy products for visual development
const mockProducts: LicenseProduct[] = [
  {
    id: "1",
    name: "Windows 11 Pro License Key",
    short_description: "Lifetime digital license for 1 PC.",
    image_url: null,
    regular_price: 199.99,
    sale_price: 24.99,
    stock_count: 50,
    sold_count: 1240,
    product_type: "Software",
    license_type: "Retail",
    category_id: null,
  },
  {
    id: "2",
    name: "Office 2021 Professional Plus",
    short_description: "Complete productivity suite.",
    image_url: null,
    regular_price: 249.99,
    sale_price: 39.99,
    stock_count: 0,
    sold_count: 850,
    product_type: "Software",
    license_type: "Volume",
    category_id: null,
  },
];

export function ProductsClient() {
  const [search, setSearch] = useState("");
  // Using static mock data since Supabase SSR isn't fully configured
  const products = mockProducts;

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const getDiscount = (regular: number | null, sale: number | null) => {
    if (!regular || !sale || sale >= regular) return null;
    return Math.round(((regular - sale) / regular) * 100);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Search Bar - Lifted up from old Hero */}
      <div className="max-w-md mx-auto relative -mt-8 mb-12 bg-card p-2 rounded-2xl shadow-xl border border-border flex items-center gap-2">
        <Search className="ml-2 w-5 h-5 text-muted-foreground shrink-0" />
        <Input
          placeholder="Search for software, plugins, templates..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-0 shadow-none focus-visible:ring-0 text-base bg-transparent h-12"
        />
      </div>

      <section className="py-8 pb-20">
        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-muted/20 rounded-2xl border border-border">
            <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-1">No products found</h3>
            <p className="text-sm text-muted-foreground">
              {search ? "Try adjusting your search query." : "Products will appear here once they are added."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => {
              const discount = getDiscount(product.regular_price, product.sale_price);
              const displayPrice = product.sale_price ?? product.regular_price;
              const inStock = product.stock_count > 0;

              return (
                <Card key={product.id} className="group overflow-hidden hover:shadow-glow transition-all duration-300 border-border bg-card">
                  {/* Image */}
                  <div className="relative aspect-[4/3] bg-muted/50 border-b border-border overflow-hidden">
                    {product.image_url ? (
                      <img
                        src={product.image_url}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Package className="w-12 h-12 text-muted-foreground/30" />
                      </div>
                    )}
                    {discount && (
                      <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground font-bold border-0">
                        -{discount}%
                      </Badge>
                    )}
                    {!inStock && (
                      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
                        <Badge variant="secondary" className="px-4 py-1 text-sm border-border">Out of Stock</Badge>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-5 space-y-4">
                    {/* Type badge */}
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-[10px] bg-primary/5 text-primary border-primary/20">
                        <Tag className="w-2.5 h-2.5 mr-1" />
                        {product.product_type}
                      </Badge>
                      {product.license_type && (
                        <Badge variant="outline" className="text-[10px] border-border text-muted-foreground">
                          {product.license_type}
                        </Badge>
                      )}
                    </div>

                    <div>
                      <h3 className="font-semibold text-foreground line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      {product.short_description && (
                        <p className="text-xs text-muted-foreground line-clamp-2 mt-2 leading-relaxed">
                          {product.short_description}
                        </p>
                      )}
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-2 pt-2 border-t border-border/50">
                      {displayPrice != null ? (
                        <>
                          <span className="text-xl font-bold text-foreground">
                            ${displayPrice.toFixed(2)}
                          </span>
                          {discount && product.regular_price && (
                            <span className="text-sm text-muted-foreground line-through decoration-muted-foreground/50">
                              ${product.regular_price.toFixed(2)}
                            </span>
                          )}
                        </>
                      ) : (
                        <span className="text-sm text-muted-foreground">Price not set</span>
                      )}
                    </div>

                    {/* Stock & sold */}
                    <div className="flex items-center justify-between text-xs font-medium">
                      <span className={inStock ? "text-success" : "text-muted-foreground"}>
                        {inStock ? `${product.stock_count} in stock` : "Unavailable"}
                      </span>
                      {product.sold_count > 0 && (
                        <span className="text-muted-foreground">{product.sold_count} sold</span>
                      )}
                    </div>

                    <Button 
                      size="sm" 
                      className={`w-full ${inStock ? "" : "opacity-50 grayscale"}`}
                      disabled={!inStock} 
                      asChild={inStock}
                    >
                      {inStock ? (
                        <Link href={`/store/${product.id}`}>
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          View Details
                        </Link>
                      ) : (
                        <span>
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Sold Out
                        </span>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
