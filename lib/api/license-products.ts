
export interface LicenseProduct {
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
  status: string;
  slug: string | null;
}

interface ApiProductResponse {
  id: string;
  name: string;
  productName: string;
  slug: string | null;
  short_description: string | null;
  image_url: string | null;
  regular_price: number;
  sale_price: number;
  availableKeys: number;
  stock_quantity: number;
  sold_count: number;
  status: string;
  product_type?: string;
  license_type?: string;
  category_id?: string | null;
}

interface ProductsResponse {
  success: boolean;
  count: number;
  products: ApiProductResponse[];
  data: ApiProductResponse[];
}

const API_BASE_URL = "https://yiczembsfiqqviqxxdxl.supabase.co/functions/v1/public-inventory";
const SHARED_SECRET_KEY = process.env.NEXT_PUBLIC_SHARED_SECRET_KEY || "rrDqhBMWoQfHJCcu4wNGnqz+JDP4HR40wLpKpE83qiQ=";

/**
 * Professional API service for interacting with the License Backend
 */
export async function fetchLicenseProducts(): Promise<LicenseProduct[]> {
  console.log("[LicenseAPI] Fetching from:", API_BASE_URL);
  
  try {
    const response = await fetch(API_BASE_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": SHARED_SECRET_KEY,
        "Authorization": `Bearer ${SHARED_SECRET_KEY}`,
      },
      next: { revalidate: 300 }, // Cache for 5 minutes
    });

    console.log("[LicenseAPI] Response Status:", response.status);
    
    const text = await response.text();
    console.log("[LicenseAPI] Raw Response Text (first 200 chars):", text.substring(0, 200));

    if (!response.ok) {
      let errorData;
      try {
        errorData = JSON.parse(text);
      } catch (e) {
        errorData = { error: text || `API Error: ${response.status}` };
      }
      throw new Error(errorData.error || `API Error: ${response.status}`);
    }

    const data = JSON.parse(text);
    // Handle multiple possible response structures
    const productsSource = Array.isArray(data) ? data : (data.products || data.data || []);

    console.log("[LicenseAPI] Parsed products count:", productsSource.length);

    return productsSource.map((p: any) => ({
      id: p.id || p._id,
      name: p.name || p.productName || "Unnamed Product",
      short_description: p.short_description || p.description || null,
      image_url: p.image_url || p.imageUrl || null,
      regular_price: p.regular_price || p.price || 0,
      sale_price: p.sale_price || p.sellPrice || p.price || 0,
      stock_count: p.stock_count || p.availableKeys || p.stock_quantity || 0,
      sold_count: p.sold_count || 0,
      product_type: p.product_type || "Software",
      license_type: p.license_type || null,
      category_id: p.category_id || null,
      status: p.status || "active",
      slug: p.slug || null,
    }));
  } catch (error) {
    console.error("Error fetching license products:", error);
    throw error;
  }
}
