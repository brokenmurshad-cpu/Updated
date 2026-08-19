export type ProjectSeoContent = {
  overview: string;
  buildFocus: string;
  experienceFocus: string;
  internalLinks: {
    href: string;
    label: string;
  }[];
};

export const projectSeoContent: Record<string, ProjectSeoContent> = {
  "ajmarketing-website-with-ai-whatsapp-automation": {
    overview:
      "AjMarketing is a conversion-focused marketing website that combines modern web development with AI-assisted lead handling and WhatsApp automation. The project demonstrates how a business website can connect presentation, lead generation and intelligent automation inside one digital experience.",
    buildFocus:
      "The implementation combines Next.js, TypeScript, Tailwind CSS, OpenAI, Twilio WhatsApp API, Framer Motion, Matter.js and EmailJS. The development focus is a responsive marketing website architecture with clear conversion paths and integrated AI-powered workflows.",
    experienceFocus:
      "The interface balances visual motion with practical business actions. Visitors can understand the agency offer quickly while the platform supports direct communication and automated lead workflows behind the experience.",
    internalLinks: [
      {
        href: "/services/web-development",
        label: "Web Development",
      },
      {
        href: "/services/ai-engineering",
        label: "AI Engineering & Automation",
      },
      {
        href: "/services/performance-optimization",
        label: "Website Performance",
      },
    ],
  },

  "education-platform-admin-instructor-dashboard": {
    overview:
      "This education platform is a full web application combining the learner experience with dedicated admin and instructor dashboards. It represents a SaaS-style product architecture rather than a simple education landing website.",
    buildFocus:
      "The technology stack includes Next.js, TypeScript, Tailwind CSS, Prisma, Neon PostgreSQL, Redux Toolkit, JWT, GSAP, Swiper and EmailJS. The platform demonstrates full-stack development across application UI, structured data, authentication-oriented workflows and dashboard interfaces.",
    experienceFocus:
      "The project focuses on separating student, instructor and administrative journeys while keeping the overall product experience consistent. Dashboard information, learning content and controls are organized around clear user roles.",
    internalLinks: [
      {
        href: "/services/saas-product-development",
        label: "SaaS Product Development",
      },
      {
        href: "/services/web-development",
        label: "Full Stack Web Development",
      },
      {
        href: "/services/performance-optimization",
        label: "Performance & Optimization",
      },
    ],
  },

  "garden-physio-clinic-multilingual-web-platform": {
    overview:
      "Garden Physio Clinic is a multilingual healthcare web platform designed around clinic information, services and appointment-oriented user journeys. The project combines modern healthcare website design with bilingual content delivery.",
    buildFocus:
      "The website uses Next.js, React, Tailwind CSS, Framer Motion, Next-Intl and Google Apps Script. The development approach focuses on responsive layouts, multilingual architecture and maintainable front-end components.",
    experienceFocus:
      "Healthcare websites need clarity and low-friction navigation. The interface therefore prioritizes readable information, service discovery and a calm visual experience across desktop and mobile devices.",
    internalLinks: [
      {
        href: "/services/web-development",
        label: "Healthcare Web Development",
      },
      {
        href: "/services/performance-optimization",
        label: "Website Optimization",
      },
    ],
  },

  "spylt-award-inspired-animation-showcase": {
    overview:
      "Spylt is an award-inspired interactive website focused on expressive digital motion, visual storytelling and creative front-end development. It explores how animation can become part of the main product experience rather than simple decoration.",
    buildFocus:
      "Built with Next.js, TypeScript, Tailwind CSS and GSAP, the project focuses on timeline-based animation, scroll interaction, responsive transitions and reusable front-end structure.",
    experienceFocus:
      "The main challenge of motion-heavy websites is maintaining visual energy without making navigation difficult. The project uses animation to guide attention while preserving readable content and clear interaction.",
    internalLinks: [
      {
        href: "/portfolio-web-design",
        label: "Animated Portfolio & Web Design",
      },
      {
        href: "/services/web-development",
        label: "Creative Web Development",
      },
      {
        href: "/services/performance-optimization",
        label: "GSAP & Animation Performance",
      },
    ],
  },

  "wattar-luxury-perfume-e-commerce-platform": {
    overview:
      "Wattar is a luxury perfume e-commerce platform built to present fragrance products through a premium digital storefront. The project combines Shopify development with brand-focused product presentation and e-commerce UX.",
    buildFocus:
      "The storefront uses Shopify and Liquid for its commerce architecture. Development focuses on structured product presentation, responsive storefront behavior and theme-level customization for a luxury retail experience.",
    experienceFocus:
      "Luxury e-commerce depends strongly on visual identity and product confidence. The interface is designed to make fragrance collections easy to explore while maintaining a premium brand atmosphere.",
    internalLinks: [
      {
        href: "/services/web-development",
        label: "E-Commerce & Shopify Development",
      },
      {
        href: "/services/performance-optimization",
        label: "E-Commerce Performance",
      },
    ],
  },

  "veon-fashion-e-commerce-platform": {
    overview:
      "VEON is a fashion e-commerce platform focused on product discovery, visual merchandising and a polished shopping experience. It demonstrates modern React-based storefront development for fashion and retail products.",
    buildFocus:
      "The project uses React 19, TypeScript and Vite. The technical focus is component-based storefront architecture, responsive product presentation and maintainable front-end development.",
    experienceFocus:
      "Fashion storefronts need fast browsing and strong product imagery. The interface keeps shopping interactions clear while allowing the visual identity of the products to remain prominent.",
    internalLinks: [
      {
        href: "/services/web-development",
        label: "E-Commerce Web Development",
      },
      {
        href: "/services/performance-optimization",
        label: "Storefront Performance",
      },
    ],
  },

  "fizzi-3d-interactive-soda-landing-page": {
    overview:
      "Fizzi is a 3D interactive product landing page that combines web development, real-time graphics and motion-based storytelling. The project explores how immersive product presentation can work inside a modern browser experience.",
    buildFocus:
      "Built with Next.js 14, Three.js and React Three Fiber, the project combines React application architecture with real-time 3D scenes and interactive product animation.",
    experienceFocus:
      "The experience uses 3D interaction to make the product feel tactile and memorable while maintaining a structured landing-page journey around the visual presentation.",
    internalLinks: [
      {
        href: "/services/web-development",
        label: "Interactive Web Development",
      },
      {
        href: "/portfolio-web-design",
        label: "3D Portfolio & Interactive Design",
      },
      {
        href: "/services/performance-optimization",
        label: "3D Web Performance",
      },
    ],
  },

  "elementis-website-clone": {
    overview:
      "Elementis is a corporate website implementation focused on responsive layouts, editorial structure and polished brand presentation. The project demonstrates recreation of a modern corporate web experience with attention to layout and interaction.",
    buildFocus:
      "The implementation uses Next.js 15, React 19 and TypeScript. Component structure, responsive behavior and reusable front-end patterns form the technical foundation.",
    experienceFocus:
      "Corporate website design needs hierarchy and clarity. The interface organizes brand information into a structured browsing experience while maintaining strong visual presentation.",
    internalLinks: [
      {
        href: "/services/web-development",
        label: "Corporate Website Development",
      },
      {
        href: "/services/performance-optimization",
        label: "Next.js Optimization",
      },
    ],
  },

  "horai-restaurant-website": {
    overview:
      "Horai is an immersive restaurant website designed to combine hospitality branding with practical information and browsing. The project presents restaurant identity through modern front-end development and atmospheric visual design.",
    buildFocus:
      "The website uses React 19, TypeScript and Vite. Development centers on responsive composition, reusable React components and smooth interactive presentation.",
    experienceFocus:
      "Restaurant websites need to create atmosphere while still making useful information easy to access. The interface balances storytelling, imagery and navigation around the hospitality experience.",
    internalLinks: [
      {
        href: "/services/web-development",
        label: "Restaurant & Hospitality Web Development",
      },
      {
        href: "/services/performance-optimization",
        label: "Website Performance",
      },
    ],
  },

  "symmetry-stones-corporate-website-remodeling-contractor": {
    overview:
      "Symmetry Stones is a corporate website for a remodeling contractor. The website focuses on presenting services, completed work and business credibility through a modern responsive web experience.",
    buildFocus:
      "Built with Next.js, TypeScript and Tailwind CSS, the project uses reusable components and structured content to support contractor services and project presentation.",
    experienceFocus:
      "For service businesses, visitors need to understand expertise quickly. The interface emphasizes clear service communication, visual project proof and direct conversion paths.",
    internalLinks: [
      {
        href: "/services/web-development",
        label: "Business Website Development",
      },
      {
        href: "/services/performance-optimization",
        label: "Website Speed & Optimization",
      },
    ],
  },

  "medical-website-with-admin-dashboard": {
    overview:
      "This medical website combines a public healthcare experience with an administrative dashboard. It demonstrates how a service website and operational web application can exist within one product ecosystem.",
    buildFocus:
      "The project uses Next.js, TypeScript and Tailwind CSS. Development focuses on responsive patient-facing pages, reusable interface components and dashboard-oriented administration.",
    experienceFocus:
      "The patient side prioritizes accessibility and clarity while the administrative side organizes operational information into a more structured application interface.",
    internalLinks: [
      {
        href: "/services/web-development",
        label: "Healthcare Web Development",
      },
      {
        href: "/services/saas-product-development",
        label: "Admin Dashboard Development",
      },
    ],
  },

  "3d-portfolio": {
    overview:
      "This 3D portfolio is an experimental developer portfolio focused on spatial interaction, real-time graphics and immersive project presentation.",
    buildFocus:
      "The experience uses Next.js, TypeScript and Three.js to combine conventional portfolio content with real-time 3D rendering and interactive scenes.",
    experienceFocus:
      "The project explores how a developer portfolio can move beyond standard cards and sections while still presenting identity, skills and projects in an understandable way.",
    internalLinks: [
      {
        href: "/portfolio-web-design",
        label: "Portfolio Website Design",
      },
      {
        href: "/services/web-development",
        label: "Interactive Web Development",
      },
      {
        href: "/services/performance-optimization",
        label: "3D & Animation Performance",
      },
    ],
  },

  "compute-ai-agents-distributed-computing": {
    overview:
      "COMPUTE is an AI platform concept centered on intelligent agents and distributed computing resources. The project represents AI engineering within a modern web product interface.",
    buildFocus:
      "Built with Next.js 16, React 19 and TypeScript, the platform focuses on presenting distributed computing workflows and AI-agent concepts through a structured application experience.",
    experienceFocus:
      "Complex AI infrastructure can be difficult to understand through raw technical interfaces. The product design therefore emphasizes clear hierarchy, understandable system states and a modern AI platform experience.",
    internalLinks: [
      {
        href: "/services/ai-engineering",
        label: "AI Engineering & AI Agents",
      },
      {
        href: "/services/saas-product-development",
        label: "SaaS Platform Development",
      },
      {
        href: "/services/web-development",
        label: "Full Stack Development",
      },
    ],
  },

  "suburbia-3d-skateboard": {
    overview:
      "Suburbia is an interactive 3D skateboard experience built around product visualization, motion and real-time web graphics.",
    buildFocus:
      "The project uses Next.js 15, Three.js and React Three Fiber. It combines web application structure with real-time 3D scenes and interactive visual behavior.",
    experienceFocus:
      "The project demonstrates how a physical product can be presented through a more immersive browser experience while maintaining responsive interaction.",
    internalLinks: [
      {
        href: "/services/web-development",
        label: "3D Web Development",
      },
      {
        href: "/portfolio-web-design",
        label: "Interactive Portfolio Design",
      },
      {
        href: "/services/performance-optimization",
        label: "3D Performance Optimization",
      },
    ],
  },

  "previous-personal-portfolio": {
    overview:
      "This previous personal portfolio represents an earlier iteration of Muhammad Husnain's developer portfolio, combining project storytelling, responsive design and interactive 3D presentation.",
    buildFocus:
      "The portfolio uses React, Vite and Three.js. It demonstrates component-driven front-end architecture together with interactive visual experimentation.",
    experienceFocus:
      "The project focuses on personal branding, technical skills and project presentation while experimenting with a more immersive visual approach to a developer portfolio.",
    internalLinks: [
      {
        href: "/portfolio-web-design",
        label: "Modern Portfolio Website Design",
      },
      {
        href: "/services/web-development",
        label: "Front-End Development",
      },
    ],
  },

  "premium-e-commerce-platform-with-whatsapp-integration": {
    overview:
      "This premium e-commerce platform combines a modern storefront experience with direct WhatsApp-assisted customer communication.",
    buildFocus:
      "The project uses React, Vite and Tailwind CSS. Its front-end architecture focuses on responsive product presentation, reusable storefront components and a direct messaging conversion path.",
    experienceFocus:
      "The storefront is designed around easy product exploration and reduced friction between product discovery and direct customer conversation.",
    internalLinks: [
      {
        href: "/services/web-development",
        label: "E-Commerce Website Development",
      },
      {
        href: "/services/performance-optimization",
        label: "E-Commerce Optimization",
      },
    ],
  },

  "ghadeer-studio-portfolio-with-advanced-motion": {
    overview:
      "Ghadeer Studio is a portfolio website centered on premium visual presentation and advanced motion. The project demonstrates how portfolio design, typography and animation can work together as a cohesive studio experience.",
    buildFocus:
      "The website uses React, TypeScript and Tailwind CSS. Its development focuses on responsive layouts, reusable components and motion-oriented presentation.",
    experienceFocus:
      "The portfolio uses visual rhythm and interaction to guide visitors through creative work while preserving clear project discovery and readable content.",
    internalLinks: [
      {
        href: "/portfolio-web-design",
        label: "Portfolio Web Design",
      },
      {
        href: "/services/web-development",
        label: "Creative Web Development",
      },
      {
        href: "/services/performance-optimization",
        label: "Animation Performance",
      },
    ],
  },
};

export const projectSeoById = (id: string) =>
  projectSeoContent[id];
