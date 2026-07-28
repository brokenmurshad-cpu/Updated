export type ShowcaseProject = {
  id: string;
  index: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
  github?: string;
};

const sourceProject = (slug: string) =>
  "https://ahmedragab-div.vercel.app/projects/" + slug;

const sourceImage = (name: string) =>
  "https://ahmedragab-div.vercel.app/images/projects/" + name + ".webp";

export const projects: ShowcaseProject[] = [
  {
    id: "ajmarketing-website-with-ai-whatsapp-automation",
    index: "01",
    title: "AjMarketing â€” AI & WhatsApp Automation",
    category: "Web Platform",
    description: "A conversion-focused agency platform with an AI lead flow and direct WhatsApp automation.",
    tags: ["Next.js", "TypeScript", "OpenAI"],
    image: sourceImage("ajmarketing"),
    href: sourceProject("ajmarketing-website-with-ai-whatsapp-automation"),
  },
  {
    id: "education-platform-admin-instructor-dashboard",
    index: "02",
    title: "Education Platform + Dashboard",
    category: "Web Application",
    description: "A full learning experience with connected administration and instructor workspaces.",
    tags: ["Next.js", "Prisma", "GSAP"],
    image: sourceImage("ahmed_academy"),
    href: sourceProject("education-platform-admin-instructor-dashboard"),
  },
  {
    id: "garden-physio-clinic-multilingual-web-platform",
    index: "03",
    title: "Garden Physio Clinic",
    category: "Healthcare Platform",
    description: "A calm, bilingual appointment and information platform for a modern clinic.",
    tags: ["Next.js", "React", "Next-Intl"],
    image: sourceImage("garden"),
    href: "https://www.gardenphysioclinic.com",
  },
  {
    id: "spylt-award-inspired-animation-showcase",
    index: "04",
    title: "Spylt â€” Animation Showcase",
    category: "Creative Development",
    description: "A high-energy interactive presentation with carefully choreographed web motion.",
    tags: ["Next.js", "TypeScript", "GSAP"],
    image: sourceImage("spylt"),
    href: sourceProject("spylt-award-inspired-animation-showcase"),
  },
  {
    id: "wattar-luxury-perfume-e-commerce-platform",
    index: "05",
    title: "Wattar â€” Luxury Perfume",
    category: "E-Commerce",
    description: "A rich, sensory store experience designed to make premium fragrances feel tangible online.",
    tags: ["Shopify", "Liquid", "Motion"],
    image: sourceImage("wattar"),
    href: "https://wattareg.com",
  },
  {
    id: "veon-fashion-e-commerce-platform",
    index: "06",
    title: "VEON â€” Fashion E-Commerce",
    category: "E-Commerce",
    description: "A clean fashion storefront with focused product discovery and a polished shopping flow.",
    tags: ["React 19", "TypeScript", "Vite"],
    image: sourceImage("wattar"),
    href: sourceProject("veon-fashion-e-commerce-platform"),
  },
  {
    id: "fizzi-3d-interactive-soda-landing-page",
    index: "07",
    title: "Fizzi â€” Interactive Soda",
    category: "3D Experience",
    description: "A playful animated product landing page built around tactile 3D interactions.",
    tags: ["Next.js", "Three.js", "R3F"],
    image: sourceImage("spylt"),
    href: sourceProject("fizzi-3d-interactive-soda-landing-page"),
  },
  {
    id: "elementis-website-clone",
    index: "08",
    title: "Elementis Website",
    category: "Corporate Website",
    description: "A crisp, responsive digital brand experience with editorial structure and movement.",
    tags: ["Next.js 15", "React 19", "TypeScript"],
    image: sourceImage("garden"),
    href: sourceProject("elementis-website-clone"),
  },
  {
    id: "horai-restaurant-website",
    index: "09",
    title: "Horai â€” Restaurant Website",
    category: "Hospitality",
    description: "An immersive restaurant story that balances atmosphere with practical browsing.",
    tags: ["React 19", "TypeScript", "Vite"],
    image: sourceImage("ajmarketing"),
    href: sourceProject("horai-restaurant-website"),
  },
  {
    id: "symmetry-stones-corporate-website-remodeling-contractor",
    index: "10",
    title: "Symmetry Stones",
    category: "Corporate Website",
    description: "A confident contractor website with case studies, visual proof, and clear conversion paths.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: sourceImage("wattar"),
    href: "https://symmetrystones.com",
  },
  {
    id: "medical-website-with-admin-dashboard",
    index: "11",
    title: "Medical Platform + Dashboard",
    category: "Web Application",
    description: "A health-focused web platform pairing a patient experience with simple operations.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: sourceImage("ahmed_academy"),
    href: sourceProject("medical-website-with-admin-dashboard"),
  },
  {
    id: "3d-portfolio",
    index: "12",
    title: "3D Portfolio",
    category: "Creative Development",
    description: "An experimental spatial portfolio centred on smooth real-time interaction.",
    tags: ["Next.js", "TypeScript", "Three.js"],
    image: sourceImage("spylt"),
    href: sourceProject("3d-portfolio"),
  },
  {
    id: "ghadeer-studio-portfolio-with-advanced-motion",
    index: "13",
    title: "Ghadeer Studio",
    category: "Portfolio",
    description: "A refined studio portfolio where visual rhythm and motion lead the experience.",
    tags: ["React", "TypeScript", "Framer Motion"],
    image: sourceImage("garden"),
    href: sourceProject("ghadeer-studio-portfolio-with-advanced-motion"),
  },
];

export const projectById = (id: string) =>
  projects.find((project) => project.id === id);


