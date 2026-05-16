import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://licencebot.com";

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/check-key`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/cookie-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/demo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/docs`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/docs/api`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/features`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/gdpr`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/help`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.5 },
    { url: `${base}/how-it-works`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/integrations`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/pricing`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/refund-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/status`, lastModified: new Date(), changeFrequency: "daily", priority: 0.5 },
    { url: `${base}/store`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.5 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
  ];
}
