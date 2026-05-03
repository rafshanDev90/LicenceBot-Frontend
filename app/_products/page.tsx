import { Metadata } from "next";
import { PageHeader } from "@/components/public/PageHeader";
import { ProductsClient } from "@/components/public/ProductsClient";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { PublicFooter } from "@/components/public/PublicFooter";
import { Package } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

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
  const breadcrumbItems = [
    { name: 'Home', item: 'https://licencebot.com' },
    { name: 'Products', item: 'https://licencebot.com/products' },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
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
          
          {/* Additional Content Section for SEO */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">Why Choose Our Digital Products?</h2>
                <p className="text-muted-foreground mb-4">
                  All our software products, plugins, and digital assets are carefully curated to help businesses streamline their operations. Each product comes with instant delivery, secure licence management, and dedicated support.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our platform ensures that you receive your licence keys immediately after purchase, with automated delivery systems that work 24/7. No waiting, no manual processing – just instant access to your digital products.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Instant automated licence delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Secure licence key management
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    24/7 customer support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Regular updates and maintenance
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Product Categories</h2>
                <p className="text-muted-foreground mb-4">
                  We offer a wide range of digital products across multiple categories to meet your business needs. From e-commerce plugins to productivity tools, our catalogue is designed to help you succeed.
                </p>
                <div className="space-y-3">
                  <div className="p-4 rounded-lg border border-border bg-card">
                    <h3 className="font-semibold mb-1">E-commerce Solutions</h3>
                    <p className="text-sm text-muted-foreground">WooCommerce and Shopify plugins for store automation and licence management.</p>
                  </div>
                  <div className="p-4 rounded-lg border border-border bg-card">
                    <h3 className="font-semibold mb-1">Productivity Tools</h3>
                    <p className="text-sm text-muted-foreground">Software solutions to streamline your workflow and boost efficiency.</p>
                  </div>
                  <div className="p-4 rounded-lg border border-border bg-card">
                    <h3 className="font-semibold mb-1">Digital Assets</h3>
                    <p className="text-sm text-muted-foreground">Templates, themes, and design resources for your projects.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <PublicFooter />
      </div>
    </>
  );
}
