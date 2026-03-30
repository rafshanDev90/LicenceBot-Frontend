import { Metadata } from "next";
import { PageHeader } from "@/components/public/PageHeader";
import { ProductsClient } from "@/components/public/ProductsClient";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { PublicFooter } from "@/components/public/PublicFooter";
import { Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Products | LicenceBot",
  description: "Browse our collection of software, plugins, templates, and digital assets available for purchase with instant auto-delivery.",
  alternates: {
    canonical: "https://licencebot.com/products",
  },
  openGraph: {
    title: "Products | LicenceBot",
    description: "Browse our collection of software, plugins, templates, and digital assets available for purchase with instant auto-delivery.",
    url: "https://licencebot.com/products",
  },
};

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <PublicNavbar />
      <main className="flex-1">
        <PageHeader 
          title={<>Browse Our <span className="text-gradient">Products</span></>}
          description="Explore our collection of licence keys, software products, and digital assets available for purchase."
          badge="Product Catalog"
          badgeIcon={Package}
        />
        <ProductsClient />
      </main>
      <PublicFooter />
    </div>
  );
}
