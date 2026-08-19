import Hero from "@/components/sections/Hero";
import RoleMarquee from "@/components/sections/RoleMarquee";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import ShowreelVideo from "@/components/sections/ShowreelVideo";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
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
  );
}
