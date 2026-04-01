import type { Metadata } from "next";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { PublicFooter } from "@/components/public/PublicFooter";
import { StoreClient } from "@/components/public/StoreClient";

export const metadata: Metadata = {
  title: "Demo Store | LicenceBot",
  description: "Browse our demonstration store featuring high-quality digital products powered by our automated licence delivery engine.",
  openGraph: {
    title: "Demo Store | LicenceBot",
    description: "Shop for digital licences with instant delivery.",
    type: "website",
  },
};

export default function StorePage() {
  return (
    <main className="relative bg-background overflow-hidden min-h-screen flex flex-col">
      <PublicNavbar />
      <div className="flex-1">
        <StoreClient />
      </div>
      <PublicFooter />
    </main>
  );
}
