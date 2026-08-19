import Hero from "@/components/sections/Hero";
import RoleMarquee from "@/components/sections/RoleMarquee";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import ShowreelVideo from "@/components/sections/ShowreelVideo";
import Contact from "@/components/sections/Contact";
import { seo } from "@/data/content";

const homepageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${seo.url}/#website`,
      name: seo.siteName,
      alternateName: ["Husnain Portfolio", "husnainportfolio.online"],
      url: `${seo.url}/`,
      description: seo.description,
      publisher: { "@id": `${seo.url}/#person` },
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      "@id": `${seo.url}/#profile-page`,
      name: seo.siteName,
      url: `${seo.url}/`,
      dateModified: seo.lastUpdated,
      isPartOf: { "@id": `${seo.url}/#website` },
      mainEntity: { "@id": `${seo.url}/#person` },
      inLanguage: "en",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageJsonLd),
        }}
      />

      <main>
        <Hero />
        <About />
        <Services />
        <RoleMarquee />
        <Experience />
        <Projects />
        <Testimonials />
        <ShowreelVideo />
        <Contact />
      </main>
    </>
  );
}
