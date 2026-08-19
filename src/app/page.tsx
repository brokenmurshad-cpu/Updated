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

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Husnain Portfolio",
  alternateName: [
    "Muhammad Husnain Portfolio",
    "Muhammad Husnain Developer Portfolio",
    "husnainportfolio.online",
  ],
  url: `${seo.url}/`,
  description:
    "Portfolio of Muhammad Husnain, Full Stack Developer and AI Engineer specializing in web development, AI engineering, SaaS products, modern portfolio websites, e-commerce and interactive web experiences.",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd),
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
