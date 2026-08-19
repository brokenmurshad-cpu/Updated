export type SeoLandingPage = {
  slug: string;
  title: string;
  heading: string;
  description: string;
  eyebrow: string;
  intro: string;
  keywords: string[];
  sections: Array<{
    title: string;
    body: string;
  }>;
};

export const seoServicePages: SeoLandingPage[] = [
  {
    slug: "web-development",
    title: "Web Development Services | Muhammad Husnain",
    heading: "Web Development for Modern Brands",
    description:
      "Custom web development by Muhammad Husnain, a Full Stack Developer and AI Engineer in Dubai. Modern websites, marketing websites, education platforms, e-commerce websites, Shopify stores and scalable web applications.",
    eyebrow: "Service 01 / Web Development",
    intro:
      "I build custom-coded websites and web applications that combine strong front-end engineering, scalable full-stack architecture, clear UX and intentional motion. My experience spans Junior Front-End Developer, Front-End Developer and Full Stack Developer & AI Engineer roles across marketing, education, healthcare, e-commerce and SaaS products.",
    keywords: [
      "web development",
      "web developer",
      "full stack developer",
      "front-end developer",
      "junior front-end developer",
      "full stack developer and AI engineer",
      "modern websites",
      "marketing website",
      "education website",
      "ecommerce website",
      "e-commerce website",
      "Shopify store",
      "Shopify website",
      "website development",
      "custom website",
      "Next.js developer",
      "React developer",
      "TypeScript developer",
      "Tailwind CSS",
      "GSAP developer",
      "Framer Motion developer",
      "Dubai web developer",
    ],
    sections: [
      {
        title: "Modern websites built to scale",
        body:
          "Each website is engineered around performance, accessibility, responsive layouts and reusable systems. I work with JavaScript, TypeScript, React, Next.js and Tailwind CSS to build maintainable interfaces that can grow with a product or brand.",
      },
      {
        title: "Marketing, education and e-commerce websites",
        body:
          "My portfolio includes conversion-focused marketing websites, education platforms with dashboards, healthcare experiences, e-commerce websites and Shopify storefronts. Projects can include APIs, authentication, databases, analytics, product flows and WhatsApp automation.",
      },
      {
        title: "Motion and animation without sacrificing speed",
        body:
          "GSAP and Framer Motion are used where animation improves storytelling and usability. Motion is treated as part of the product system with attention to rendering performance, responsive behavior and Core Web Vitals.",
      },
    ],
  },

  {
    slug: "ai-engineering",
    title: "AI Engineering & LLM Integration | Muhammad Husnain",
    heading: "AI Engineering & Intelligent Product Development",
    description:
      "AI engineering services covering AI agents, LLM integration, OpenAI, intelligent interfaces, agent workflows and AI automation by Muhammad Husnain.",
    eyebrow: "Service 02 / AI Engineering",
    intro:
      "I design AI-assisted products, AI agents, LLM integrations and intelligent interfaces that turn model capabilities into usable product experiences. The focus is practical automation, reliable workflows, strong UX and integration with modern web applications.",
    keywords: [
      "AI engineering",
      "AI engineer",
      "AI agents",
      "AI agent developer",
      "LLM integration",
      "LLM developer",
      "OpenAI",
      "OpenAI developer",
      "agent workflows",
      "AI automation",
      "AI web application",
      "AI website",
      "AI SaaS",
      "intelligent interfaces",
      "Gumloop",
      "Node.js",
      "Express.js",
      "REST APIs",
    ],
    sections: [
      {
        title: "AI agents and agent workflows",
        body:
          "I build agent workflows that connect language models with product data, APIs, business logic and human approval steps. The goal is useful production automation rather than isolated AI demos.",
      },
      {
        title: "LLM and OpenAI integration",
        body:
          "AI features can be integrated into Next.js and Node.js applications for support copilots, lead qualification, intelligent search, content workflows, summarization and business automation.",
      },
      {
        title: "AI experiences designed for real users",
        body:
          "Strong AI products need more than a model call. I combine interface design, loading states, structured outputs, backend APIs and clear user journeys so AI features feel dependable and understandable.",
      },
    ],
  },

  {
    slug: "saas-product-development",
    title: "SaaS Product Development | Muhammad Husnain",
    heading: "SaaS Product Building from MVP to Production",
    description:
      "Full-stack SaaS development for dashboards, admin systems, product workflows and scalable web applications using Next.js, Node.js, PostgreSQL and Prisma.",
    eyebrow: "Service 03 / SaaS Product Building",
    intro:
      "From MVP to polished platform, I build SaaS products with clear information architecture, reusable product systems, dashboards, backend APIs and production-ready performance. The work combines product thinking with full-stack engineering.",
    keywords: [
      "SaaS project",
      "SaaS projects",
      "SaaS product",
      "SaaS product development",
      "SaaS developer",
      "full stack SaaS",
      "dashboard development",
      "admin dashboard",
      "product systems",
      "Next.js SaaS",
      "React SaaS",
      "Node.js SaaS",
      "PostgreSQL",
      "Prisma",
      "MongoDB",
      "full stack development",
    ],
    sections: [
      {
        title: "MVP architecture and product systems",
        body:
          "I structure SaaS applications around reusable components, predictable data flows and clear product boundaries so an MVP can evolve without unnecessary rewrites.",
      },
      {
        title: "Dashboards, admin panels and workflows",
        body:
          "SaaS work can include analytics dashboards, admin workspaces, instructor dashboards, onboarding flows, permission-aware interfaces, tables, forms, filters and automated workflows.",
      },
      {
        title: "Modern full-stack foundations",
        body:
          "Typical foundations include Next.js, TypeScript, Node.js, REST APIs, PostgreSQL, Prisma or MongoDB with deployment and development workflows using Git, Vercel and Docker.",
      },
    ],
  },

  {
    slug: "performance-optimization",
    title: "Next.js Website Performance Optimization | Muhammad Husnain",
    heading: "Performance & Optimization for Modern Websites",
    description:
      "Website performance optimization for Next.js, React, animation-heavy websites, hero videos and Core Web Vitals.",
    eyebrow: "Service 04 / Performance & Optimization",
    intro:
      "I optimize websites and web applications so they load quickly, render smoothly and stay responsive across devices. Performance work covers Core Web Vitals, image and video delivery, JavaScript cost, animation performance and practical production profiling.",
    keywords: [
      "website performance",
      "website optimization",
      "web performance",
      "Next.js optimization",
      "React performance",
      "Core Web Vitals",
      "website speed",
      "GSAP performance",
      "animation performance",
      "portfolio performance",
      "video optimization",
      "hero video optimization",
      "website loading speed",
    ],
    sections: [
      {
        title: "Core Web Vitals and loading performance",
        body:
          "Optimization starts with the real loading path including images, fonts, JavaScript, rendering, caching and the resources that influence LCP, INP and CLS.",
      },
      {
        title: "Animation and interaction performance",
        body:
          "Motion-heavy portfolios and marketing websites need careful animation architecture. I reduce unnecessary work and keep interactive experiences smooth across desktop and mobile devices.",
      },
      {
        title: "Video, images and production delivery",
        body:
          "Hero videos, portfolio previews and responsive images are optimized through appropriate formats, dimensions, compression, loading strategies and browser-friendly rendering patterns.",
      },
    ],
  },
];

export const portfolioSeoPage: SeoLandingPage = {
  slug: "portfolio-web-design",
  title: "Portfolio Website Design & Motion | Muhammad Husnain",
  heading: "Portfolio Web Design with Motion, Video & Interactive Hero Sections",
  description:
    "A modern developer portfolio by Muhammad Husnain, combining Next.js, TypeScript, GSAP motion, video, responsive design and project case studies.",
  eyebrow: "Portfolio Web / Design & Motion",
  intro:
    "Husnain Portfolio is a modern developer portfolio website focused on premium web design, cinematic motion, project storytelling and production engineering. The experience combines a portfolio hero section, hero background video, interactive project previews, responsive layouts and reusable Next.js architecture.",
  keywords: [
    "portfolio website",
    "portfolio",
    "portfolio web",
    "portfolio web design",
    "portfolio website design",
    "portfolio design",
    "portfolio theme",
    "portfolio website theme",
    "portfolio template",
    "portfolio video",
    "portfolio hero section",
    "portfolio hero video",
    "hero section",
    "website hero section",
    "portfolio repository",
    "portfolio source code",
    "developer portfolio",
    "web developer portfolio",
    "full stack developer portfolio",
    "AI engineer portfolio",
    "animated portfolio",
    "modern portfolio",
    "premium portfolio",
    "GSAP portfolio",
    "Next.js portfolio",
    "React portfolio",
    "Framer Motion portfolio",
    "TypeScript portfolio",
    "Tailwind portfolio",
  ],
  sections: [
    {
      title: "Portfolio hero section and hero video",
      body:
        "The homepage uses a cinematic portfolio hero section with strong typography, motion and video-led visual storytelling. The hero is designed to create a clear first impression while keeping the page usable, responsive and performance-conscious.",
    },
    {
      title: "Portfolio theme and visual design system",
      body:
        "The portfolio theme combines editorial typography, premium layouts, project imagery, dark and light interface treatments and motion patterns. The design system stays consistent across services, experience, projects, testimonials and contact.",
    },
    {
      title: "Portfolio repository and modern development stack",
      body:
        "The portfolio repository is structured as a modern Next.js and TypeScript application with reusable React components, Tailwind CSS, data-driven project pages, SEO metadata, sitemap generation and Vercel deployment. GSAP and Framer Motion support interactive motion while important content remains crawlable.",
    },
  ],
};

export const seoServiceBySlug = (slug: string) =>
  seoServicePages.find((page) => page.slug === slug);
