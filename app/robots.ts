import type { MetadataRoute } from "next";
import { hasPublicSiteUrl, siteUrl } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: hasPublicSiteUrl
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" },
    ...(hasPublicSiteUrl ? { sitemap: `${siteUrl}/sitemap.xml`, host: siteUrl } : {}),
  };
}
