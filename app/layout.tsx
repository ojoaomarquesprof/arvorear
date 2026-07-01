import type { Metadata, Viewport } from "next";
import { hasPublicSiteUrl, siteUrl } from "@/lib/site-config";
import "./globals.css";

const title = "Clínica Arvorear | Desenvolvimento Infantil em Londrina";
const description =
  "Clínica multidisciplinar em Londrina com avaliação responsável, intervenção individualizada e orientação familiar.";
const socialImage = "/assets/arvorear/brand/banners/webp/12-banner-crianca-natureza.webp";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Clínica Arvorear",
  title: {
    default: title,
    template: "%s | Clínica Arvorear",
  },
  description,
  keywords: [
    "desenvolvimento infantil",
    "clínica infantil Londrina",
    "equipe multidisciplinar infantil",
    "terapia infantil",
    "intervenção precoce Londrina",
    "orientação familiar",
  ],
  authors: [{ name: "Clínica Arvorear" }],
  creator: "Clínica Arvorear",
  publisher: "Clínica Arvorear",
  category: "Saúde e desenvolvimento infantil",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Clínica Arvorear",
    title,
    description,
    images: [
      {
        url: socialImage,
        width: 1920,
        height: 1080,
        alt: "Clínica Arvorear em Londrina — Afeto, Ciência e Desenvolvimento",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
  robots: hasPublicSiteUrl
    ? { index: true, follow: true }
    : { index: false, follow: false, noarchive: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fef8ec",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <a
          href="#conteudo"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-sand transition focus:translate-y-0"
        >
          Pular para o conteúdo
        </a>
        {children}
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
