export const siteConfig = {
  name: "Clínica Arvorear",
  founder: "Yara Nicolette Dutra Pereira",
  phoneDisplay: "(43) 99842-1200",
  phoneInternational: "5543998421200",
  email: "arvorear@contato.com.br",
  address: "Rua Professor Júlio Estrela Moreira, 1040, Londrina/PR",
  whatsappMessage:
    "Olá, vim pelo site da Arvorear e gostaria de saber mais sobre os atendimentos.",
} as const;

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");

export const hasPublicSiteUrl = Boolean(
  configuredSiteUrl && /^https?:\/\//.test(configuredSiteUrl),
);
export const siteUrl = hasPublicSiteUrl
  ? (configuredSiteUrl as string)
  : "http://localhost:3000";

const configuredInstagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL?.trim();
export const instagramUrl =
  configuredInstagramUrl && /^https:\/\/(www\.)?instagram\.com\//.test(configuredInstagramUrl)
    ? configuredInstagramUrl
    : undefined;

export const whatsappUrl = `https://wa.me/${siteConfig.phoneInternational}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`;
