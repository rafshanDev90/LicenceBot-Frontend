import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_checkout/", "/_products/"],
      },
    ],
    sitemap: "https://licencebot.com/sitemap.xml",
  };
}
