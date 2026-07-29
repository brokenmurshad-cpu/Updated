export type ShowcaseProject = {
  id: string;
  index: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
  technologyLine?: string;
  pills?: string[];
  github?: string;
};

const sourceImage = (name: string) =>
  "https://ahmedragab-div.vercel.app/images/projects/" + name + ".webp";

export const selectedProjects: ShowcaseProject[] = [
  {
    id: "ajmarketing-website-with-ai-whatsapp-automation",
    index: "01",
    title: "AjMarketing Website with AI & WhatsApp Automation",
    category: "Web Platform",
    description:
      "A conversion-focused agency platform with an AI lead flow and direct WhatsApp automation.",
    tags: ["Next.js", "TypeScript", "OpenAI"],
    technologyLine:
      "Next.js & TypeScript & Tailwind CSS & OpenAI & Twilio WhatsApp API & Framer Motion & Matter.js & EmailJS",
    pills: ["Next.js", "TypeScript", "2025"],
    image: sourceImage("ajmarketing"),
    href: "https://www.ajmarketing.pro/",
  },
  {
    id: "education-platform-admin-instructor-dashboard",
    index: "02",
    title: "Education Platform + Admin & Instructor Dashboard",
    category: "Web Application",
    description:
      "A full learning experience with connected administration and instructor workspaces.",
    tags: ["Next.js", "Prisma", "GSAP"],
    technologyLine:
      "Next.js & TypeScript & Tailwind CSS & shadcn/ui & Prisma & Neon PostgreSQL & Redux Toolkit & JWT & GSAP & Swiper & EmailJS",
    pills: ["Next.js", "TypeScript", "2024"],
    image: sourceImage("ahmed_academy"),
    href: "https://ahmed-academy.vercel.app/",
  },
  {
    id: "garden-physio-clinic-multilingual-web-platform",
    index: "03",
    title: "Garden Physio Clinic Multilingual Web Platform",
    category: "Healthcare Platform",
    description:
      "A calm, bilingual appointment and information platform for a modern clinic.",
    tags: ["Next.js", "React", "Next-Intl"],
    technologyLine:
      "Next.js & React & Tailwind CSS & Framer Motion & Next-Intl & Google Apps Script",
    pills: ["Next.js", "React", "2025"],
    image: sourceImage("garden"),
    href: "https://www.gardenphysioclinic.com/",
  },
  {
    id: "spylt-award-inspired-animation-showcase",
    index: "04",
    title: "Spylt Award-Inspired Animation Showcase",
    category: "Creative Development",
    description:
      "A high-energy interactive presentation with carefully choreographed web motion.",
    tags: ["Next.js", "TypeScript", "GSAP"],
    technologyLine: "Next.js & TypeScript & Tailwind CSS & GSAP",
    pills: ["Next.js", "TypeScript", "2025"],
    image: sourceImage("spylt"),
    href: "https://spylt-gsap-website.vercel.app/",
  },
  {
    id: "wattar-luxury-perfume-e-commerce-platform",
    index: "05",
    title: "Wattar - Luxury Perfume E-Commerce Platform",
    category: "E-Commerce",
    description:
      "A rich, sensory store experience designed to make premium fragrances feel tangible online.",
    tags: ["Shopify", "Liquid", "Motion"],
    technologyLine: "Shopify & Liquid",
    pills: ["Shopify", "Liquid", "2026"],
    image: sourceImage("wattar"),
    href: "https://wattareg.com/",
  },
];

export const projectList: ShowcaseProject[] = [
  {
    id: "veon-fashion-e-commerce-platform",
    index: "01",
    title: "VEON - Fashion E-Commerce Platform",
    category: "E-Commerce",
    description:
      "A clean fashion storefront with focused product discovery and a polished shopping flow.",
    tags: ["React 19", "TypeScript", "Vite"],
    image: sourceImage("veon"),
    href: "https://veon-red.vercel.app/",
  },
  {
    id: "fizzi-3d-interactive-soda-landing-page",
    index: "02",
    title: "Fizzi - A 3D Interactive Soda Landing Page",
    category: "3D Experience",
    description:
      "A playful animated product landing page built around tactile 3D interactions.",
    tags: ["Next.js 14", "Three.js", "React Three Fiber"],
    image: sourceImage("fizzi"),
    href: "https://fizzi-six-eta.vercel.app/",
  },
  {
    id: "elementis-website-clone",
    index: "03",
    title: "Elementis Website Clone",
    category: "Corporate Website",
    description:
      "A crisp, responsive digital brand experience with editorial structure and movement.",
    tags: ["Next.js 15", "React 19", "TypeScript"],
    image: sourceImage("elementis"),
    href: "https://elementis-three.vercel.app/",
  },
  {
    id: "horai-restaurant-website",
    index: "04",
    title: "Horai - Restaurant Website",
    category: "Hospitality",
    description:
      "An immersive restaurant story that balances atmosphere with practical browsing.",
    tags: ["React 19", "TypeScript", "Vite"],
    image: sourceImage("horai"),
    href: "https://horai-restaurant.vercel.app/",
  },
  {
    id: "symmetry-stones-corporate-website-remodeling-contractor",
    index: "05",
    title: "Symmetry Stones – Corporate Website for Remodeling Contractor",
    category: "Corporate Website",
    description:
      "A confident contractor website with case studies, visual proof, and clear conversion paths.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: sourceImage("symmetry"),
    href: "https://symmetrystones.com/",
  },
  {
    id: "medical-website-with-admin-dashboard",
    index: "06",
    title: "Medical Website with Admin Dashboard",
    category: "Web Application",
    description:
      "A health-focused web platform pairing a patient experience with simple operations.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: sourceImage("reema"),
    href: "https://www.drreemaalmujaini.site/",
  },
  {
    id: "3d-portfolio",
    index: "07",
    title: "3D Portfolio",
    category: "Creative Development",
    description:
      "An experimental spatial portfolio centred on smooth real-time interaction.",
    tags: ["Next.js", "TypeScript", "Three.js"],
    image: sourceImage("3d-portfolio"),
    href: "https://3d-portfolio-eta-six.vercel.app/",
  },
  {
    id: "compute-ai-agents-distributed-computing",
    index: "08",
    title: "COMPUTE — AI Agents for Distributed Computing",
    category: "AI Platform",
    description:
      "A distributed computing platform that coordinates intelligent agents across connected resources.",
    tags: ["Next.js 16", "React 19", "TypeScript"],
    image: sourceImage("compute"),
    href: "https://compute-platform-eight.vercel.app/",
  },
  {
    id: "suburbia-3d-skateboard",
    index: "09",
    title: "Suburbia 3D Skateboard",
    category: "3D Experience",
    description:
      "An immersive skateboard showcase built around real-time 3D scenes and playful motion.",
    tags: ["Next.js 15", "Three.js", "React Three Fiber"],
    image: sourceImage("suburbia"),
    href: "https://suburbia-skateboards-eight.vercel.app/",
  },
  {
    id: "previous-personal-portfolio",
    index: "10",
    title: "Previous Personal Portfolio",
    category: "Portfolio",
    description:
      "An earlier personal portfolio combining 3D interaction, project storytelling, and responsive presentation.",
    tags: ["React", "Vite", "Three.js"],
    image: "/og.png",
    href: "https://new-olive-tau.vercel.app/",
  },
  {
    id: "premium-e-commerce-platform-with-whatsapp-integration",
    index: "11",
    title: "Premium E-Commerce Platform with WhatsApp Integration",
    category: "E-Commerce",
    description:
      "A premium storefront with polished product browsing and a direct WhatsApp-assisted purchase flow.",
    tags: ["React", "Vite", "Tailwind CSS"],
    image: sourceImage("creativityy"),
    href: "https://creativity-store.vercel.app/",
  },
  {
    id: "ghadeer-studio-portfolio-with-advanced-motion",
    index: "12",
    title: "Ghadeer Studio – Portfolio with Advanced Motion",
    category: "Portfolio",
    description:
      "A refined studio portfolio where visual rhythm and motion lead the experience.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    image: sourceImage("ghadeer"),
    href: "https://www.ghadeerstudio.com/",
  },
];

export const projects = [...selectedProjects, ...projectList];

export const projectById = (id: string) =>
  projects.find((project) => project.id === id);
