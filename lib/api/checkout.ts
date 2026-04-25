const BASE_URL = "https://yiczembsfiqqviqxxdxl.supabase.co/functions/v1";
const SHARED_SECRET_KEY = process.env.NEXT_PUBLIC_SHARED_SECRET_KEY || "rrDqhBMWoQfHJCcu4wNGnqz+JDP4HR40wLpKpE83qiQ=";

export interface Gateway {
  gateway: string;
  display_name: string;
  kind: "card" | "crypto" | "wallet";
}

export interface CheckoutRequest {
  items: {
    product_slug: string;
    quantity: number;
  }[];
  customer: {
    email: string;
    name: string;
  };
  gateway: string;
  return_url: string;
  cancel_url: string;
}

export interface CheckoutResponse {
  success: boolean;
  order_id: string;
  order_number: string;
  total: number;
  currency: string;
  checkout_url: string;
}

/**
 * Step 1: Fetch available payment gateways
 */
export async function fetchGateways(): Promise<Gateway[]> {
  try {
    const response = await fetch(`${BASE_URL}/public-gateways`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": SHARED_SECRET_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch gateways: ${response.status}`);
    }

    const data = await response.json();
    return data.gateways || [];
  } catch (error) {
    console.error("Error fetching gateways:", error);
    return [];
  }
}

/**
 * Step 2: Create an order and get the checkout URL
 */
export async function createCheckout(request: CheckoutRequest): Promise<CheckoutResponse> {
  try {
    const response = await fetch(`${BASE_URL}/public-checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": SHARED_SECRET_KEY,
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Checkout failed: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating checkout:", error);
    throw error;
  }
}
