import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Clínica Arvorear",
    short_name: "Arvorear",
    description:
      "Clínica multidisciplinar em Londrina com cuidado individualizado e orientação familiar.",
    start_url: "/",
    display: "standalone",
    background_color: "#fef8ec",
    theme_color: "#636853",
    lang: "pt-BR",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
