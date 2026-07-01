import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Header } from "@/components/header";
import { Approach } from "@/components/sections/approach";
import { Contact } from "@/components/sections/contact";
import { Faq } from "@/components/sections/faq";
import { Families } from "@/components/sections/families";
import { Hero } from "@/components/sections/hero";
import { Multidisciplinary } from "@/components/sections/multidisciplinary";
import { Space } from "@/components/sections/space";
import { SupportSigns } from "@/components/sections/support-signs";
import { WhyArvorear } from "@/components/sections/why-arvorear";
import { instagramUrl, siteConfig, siteUrl } from "@/lib/site-config";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": `${siteUrl}/#clinica`,
  name: siteConfig.name,
  url: siteUrl,
  description:
    "Clínica multidisciplinar de desenvolvimento infantil com intervenção individualizada e suporte familiar.",
  image: `${siteUrl}/assets/arvorear/brand/banners/webp/12-banner-crianca-natureza.webp`,
  logo: `${siteUrl}/assets/arvorear/brand/logos/png/simbolo-coral-transparent.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Londrina",
    addressRegion: "PR",
    addressCountry: "BR",
    streetAddress: "Rua Professor Júlio Estrela Moreira, 1040",
  },
  telephone: siteConfig.phoneDisplay,
  email: siteConfig.email,
  founder: { "@type": "Person", name: siteConfig.founder },
  areaServed: "Londrina e região",
  ...(instagramUrl ? { sameAs: [instagramUrl] } : {}),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main id="conteudo">
        <Hero />
        <WhyArvorear />
        <SupportSigns />
        <Multidisciplinary />
        <Approach />
        <Space />
        <Families />
        <Faq />
        <Contact />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
