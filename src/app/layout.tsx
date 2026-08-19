import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Preloader from "@/components/layout/Preloader";
import Header from "@/components/layout/Header";
import CustomCursor from "@/components/layout/CustomCursor";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ClickRipple from "@/components/layout/ClickRipple";
import Particles from "@/components/layout/Particles";
import { seo, personal, socials } from "@/data/content";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const emitha = localFont({
  src: "./fonts/Emitha-Script.otf",
  variable: "--font-emitha",
  weight: "400",
  style: "normal",
  display: "swap",
  fallback: ["cursive"],
});

export const metadata: Metadata = {
  metadataBase: new URL(seo.url),
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: personal.fullName }],
  creator: personal.fullName,
  robots: { index: true, follow: true },
  alternates: { canonical: seo.url },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: seo.url,
    siteName: "Husnain Portfolio",
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: "/og.png",
        width: 1728,
        height: 900,
        alt: `${personal.fullName} — Full Stack Developer, AI Engineer, and SaaS Builder`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#090917" },
    { media: "(prefers-color-scheme: light)", color: "#f0ede5" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.fullName,
  jobTitle: personal.roles,
  url: seo.url,
  image: `${seo.url}/images/profile.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "UAE",
  },
  email: personal.email,
  sameAs: [socials.tiktok, personal.website],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${manrope.variable} ${bricolage.variable} ${emitha.variable}`}
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{document.documentElement.dataset.theme=localStorage.getItem('portfolio-theme-v2')==='dark'?'dark':'light'}catch(e){document.documentElement.dataset.theme='light'}",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Preloader />
        <CustomCursor />
        <ClickRipple />
        <Particles />
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
