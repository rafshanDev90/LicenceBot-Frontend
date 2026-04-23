"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Package, ShoppingCart, Star, CheckCircle, Tag, Grid3X3, List, ChevronDown, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fetchLicenseProducts, LicenseProduct } from "@/lib/api/license-products";

type SortOption = "name" | "price_asc" | "price_desc";

export function StoreClient() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("name");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [products, setProducts] = useState<LicenseProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function loadProducts() {
      try {
        setLoading(true);
        const data = await fetchLicenseProducts();
        if (isMounted) {
          setProducts(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : "Failed to load products");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }
    loadProducts();
    return () => { isMounted = false; };
  }, []);

  const categories = useMemo(() => {
    const cats = new Set<string>();
    products.forEach((p) => {
      if (p.product_type) cats.add(p.product_type);
    });
    return Array.from(cats).sort();
  }, [products]);

  const filtered = useMemo(() => {
    let result = products.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

    if (selectedCategory !== "all") {
      result = result.filter((p) => p.product_type === selectedCategory);
    }

    result.sort((a, b) => {
      const aPrice = a.sale_price ?? a.regular_price ?? 0;
      const bPrice = b.sale_price ?? b.regular_price ?? 0;
      switch (sortBy) {
        case "price_asc": return aPrice - bPrice;
        case "price_desc": return bPrice - aPrice;
        default: return a.name.localeCompare(b.name);
      }
    });
    return result;
  }, [products, search, sortBy, selectedCategory]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-32 bg-background">
        <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
        <p className="text-muted-foreground animate-pulse text-lg font-medium">Loading digital assets...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-32 text-center">
        <div className="bg-destructive/5 rounded-3xl border border-destructive/20 p-12 max-w-2xl mx-auto">
          <AlertCircle className="w-16 h-16 text-destructive mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-foreground mb-3">Connection Error</h2>
          <p className="text-muted-foreground mb-8">{error}</p>
          <Button size="lg" onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="pt-24 sm:pt-32 pb-10 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase mb-6">
            <Tag className="w-4 h-4" />
            Licensed Software
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground">
            Browse Our Products
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience premium digital software with our automated delivery system. Genuine license keys delivered instantly to your dashboard.
          </motion.p>
        </div>
      </section>

      <section className="sticky top-16 z-30 bg-background/80 backdrop-blur-xl border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-input bg-card/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide flex-1 pb-1 lg:pb-0">
              <button onClick={() => setSelectedCategory("all")} className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap transition-colors ${selectedCategory === "all" ? "bg-primary text-primary-foreground shadow-md" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
                All
              </button>
              {categories.map((cat) => (
                <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap transition-colors ${selectedCategory === cat ? "bg-primary text-primary-foreground shadow-md" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 self-end lg:self-auto">
              <div className="relative">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value as SortOption)} className="appearance-none pl-4 pr-10 py-2.5 rounded-xl border border-input bg-card/50 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer transition-shadow">
                  <option value="name">Name A-Z</option>
                  <option value="price_asc">Price: Low to High</option>
                  <option value="price_desc">Price: High to Low</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
              <div className="flex rounded-xl border border-input overflow-hidden shadow-sm bg-card/50 p-0.5">
                <button onClick={() => setViewMode("grid")} className={`p-2 rounded-lg transition-colors ${viewMode === "grid" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-muted/50"}`}>
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button onClick={() => setViewMode("list")} className={`p-2 rounded-lg transition-colors ${viewMode === "list" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-muted/50"}`}>
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {filtered.length} products found {selectedCategory !== "all" && `in ${selectedCategory}`}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-32 bg-card/30 border border-border/50 rounded-3xl backdrop-blur-sm">
               <Package className="w-20 h-20 text-muted-foreground/30 mx-auto mb-6" />
               <h3 className="text-xl font-bold text-foreground mb-3">No products found</h3>
               <p className="text-muted-foreground max-w-sm mx-auto mb-6">We couldn't find any products matching your search criteria.</p>
               <Button variant="outline" onClick={() => { setSearch(""); setSelectedCategory("all"); }}>Clear Filters</Button>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
              {filtered.map((product, i) => {
                const regPrice = product.regular_price ?? 0;
                const salePrice = product.sale_price ?? regPrice;
                const discount = regPrice > 0 ? Math.round(((regPrice - salePrice) / regPrice) * 100) : 0;
                const inStock = product.stock_count > 0;

                return (
                  <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: Math.min(i * 0.05, 0.3) }}>
                    <div className="group bg-card border border-border/60 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-1.5 flex flex-col h-full bg-gradient-to-b from-card to-background">
                      <div className="relative aspect-[4/3] bg-muted flex items-center justify-center overflow-hidden">
                        {product.image_url ? (
                          <img src={product.image_url} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                        ) : (
                          <Package className="w-12 h-12 text-muted-foreground/30" />
                        )}
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                          {discount > 0 && <span className="px-3 py-1 rounded-[8px] bg-destructive/90 text-destructive-foreground text-xs font-black tracking-widest uppercase shadow-md backdrop-blur-sm">-{discount}%</span>}
                          {product.sold_count > 100 && <span className="px-3 py-1 rounded-[8px] bg-primary/90 text-primary-foreground text-xs font-black tracking-widest uppercase shadow-md backdrop-blur-sm">Hot</span>}
                        </div>

                        <div className="absolute bottom-4 right-4">
                          <span className={`px-2.5 py-1.5 rounded-xl border backdrop-blur-md shadow-sm flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase ${inStock ? "bg-success/20 text-green-300 border-success/30" : "bg-destructive/20 text-red-300 border-destructive/30"}`}>
                            <CheckCircle className="w-3 h-3" /> {inStock ? "In Stock" : "Out of Stock"}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 flex-1 flex flex-col bg-card">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary/80 mb-2 truncate">
                          {product.product_type}
                        </span>
                        <h3 className="text-base font-bold text-foreground leading-snug line-clamp-2 mb-3 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        
                        <div className="mt-auto pt-4 flex items-center justify-between border-t border-border/50">
                          <div>
                            <span className="text-2xl font-black text-foreground block">${salePrice.toFixed(2)}</span>
                            {discount > 0 && <span className="text-xs font-semibold text-muted-foreground line-through block mt-0.5">${regPrice.toFixed(2)}</span>}
                          </div>
                          <Button size="icon" className="h-10 w-10 rounded-xl group-hover:scale-110 transition-transform shadow-md" asChild>
                             <Link href={`/store/${product.id}`}><ShoppingCart className="w-4 h-4" /></Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
             <div className="space-y-4">
               {filtered.map((product, i) => {
                 const regPrice = product.regular_price ?? 0;
                 const salePrice = product.sale_price ?? regPrice;
                 const discount = regPrice > 0 ? Math.round(((regPrice - salePrice) / regPrice) * 100) : 0;
                 const inStock = product.stock_count > 0;

                 return (
                   <motion.div key={product.id} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: Math.min(i * 0.05, 0.3) }}>
                     <Link href={`/store/${product.id}`} className="group flex flex-col sm:flex-row items-stretch sm:items-center gap-6 p-4 sm:p-6 bg-card border border-border/60 rounded-3xl hover:shadow-2xl hover:border-primary/30 transition-all duration-300">
                        <div className="w-full sm:w-48 h-48 sm:h-32 rounded-2xl bg-muted overflow-hidden shrink-0 relative flex items-center justify-center">
                           {product.image_url ? (
                             <img src={product.image_url} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                           ) : (
                             <Package className="w-12 h-12 text-muted-foreground/30" />
                           )}
                        </div>
                        <div className="flex-1 min-w-0 flex flex-col justify-center">
                           <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary/80 mb-1.5">{product.product_type}</span>
                           <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors truncate mb-2">{product.name}</h3>
                           <p className="text-sm text-muted-foreground line-clamp-1 mb-3">{product.short_description}</p>
                           <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-[8px] text-[10px] font-black uppercase tracking-widest border w-fit ${inStock ? "bg-success/10 text-success border-success/20" : "bg-destructive/10 text-destructive border-destructive/20"}`}>
                             <CheckCircle className="w-3 h-3" /> {inStock ? "In Stock" : "Unavailable"}
                           </span>
                        </div>
                        <div className="sm:text-right flex items-center justify-between sm:flex-col sm:items-end sm:justify-center border-t border-border/50 sm:border-0 pt-4 sm:pt-0 mt-4 sm:mt-0">
                          <div>
                            <span className="text-3xl font-black text-foreground block">${salePrice.toFixed(2)}</span>
                            {discount > 0 && <span className="text-xs font-semibold text-success tracking-wider uppercase block mt-1">Save {discount}%</span>}
                          </div>
                          <Button className="mt-0 sm:mt-4 rounded-xl gap-2 shadow-md">
                            View Details <ShoppingCart className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                     </Link>
                   </motion.div>
                 );
               })}
             </div>
          )}
        </div>
      </section>
    </>
  );
}
