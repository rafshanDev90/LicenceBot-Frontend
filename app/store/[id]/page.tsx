import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { PublicFooter } from "@/components/public/PublicFooter";
import { mockProducts } from "@/lib/store-data";
import { ProductDetailClient } from "@/components/store/ProductDetailClient";
import { LicenseProduct } from "@/lib/api/license-products";
import { JsonLd } from "@/components/seo/JsonLd";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

/**
 * Helper to map mock products to the LicenseProduct interface
 */
function mapMockToLicenseProduct(mock: any): LicenseProduct {
  return {
    id: mock.id,
    name: mock.name,
    short_description: mock.short_description,
    image_url: mock.images?.[0] || null,
    regular_price: parseFloat(mock.regular_price || "0"),
    sale_price: parseFloat(mock.sale_price || "0"),
    stock_count: mock.stock_status === "instock" ? 50 : 0,
    sold_count: mock.rating?.count || 0,
    product_type: mock.categories?.[0] || "Software",
    license_type: "Digital",
    category_id: null,
    status: "active",
    slug: mock.id, // Fallback slug
  };
}

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
  const rawProduct = mockProducts.find((p) => p.id === params.id);

  if (!rawProduct) {
    notFound();
  }

  const product = mapMockToLicenseProduct(rawProduct);

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.short_description,
    image: product.image_url,
    sku: product.id,
    offers: {
      '@type': 'Offer',
      price: product.sale_price ?? product.regular_price,
      priceCurrency: 'USD',
      availability: product.stock_count > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      url: `https://licencebot.com/store/${product.id}`,
    },
    brand: {
      '@type': 'Brand',
      name: 'LicenceBot',
    },
  };

  const breadcrumbItems = [
    { name: 'Home', item: 'https://licencebot.com' },
    { name: 'Store', item: 'https://licencebot.com/store' },
    { name: product.name, item: `https://licencebot.com/store/${product.id}` },
  ];

  return (
    <>
      <JsonLd data={productJsonLd} />
      <BreadcrumbSchema items={breadcrumbItems} />
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
    </>
  );
}
