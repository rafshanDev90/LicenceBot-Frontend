import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { PublicFooter } from "@/components/public/PublicFooter";
import { mockProducts } from "@/lib/store-data";
import { ProductDetailClient } from "@/components/store/ProductDetailClient";

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const product = mockProducts.find(p => p.id === params.id);
  if (!product) return { title: "Product Not Found | LicenceBot" };

  return {
    title: `${product.name} | LicenceBot Store`,
    description: product.short_description,
  };
}

export function generateStaticParams() {
  return mockProducts.map((product) => ({
    id: product.id,
  }));
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = mockProducts.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-background overflow-hidden flex flex-col">
      <PublicNavbar />
      
      <div className="flex-1 pt-32 pb-24">
        {/* Decorative background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ProductDetailClient product={product} />
        </div>
      </div>

      <PublicFooter />
    </main>
  );
}
