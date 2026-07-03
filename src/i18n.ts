import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const en = {
  translation: {
    hero: {
      badge: "Open to new opportunities",
      title1: "FULL STACK",
      title2: "DEVELOPER",
      description: "Full Stack Developer. I write structured code, design efficient databases, and deploy web applications that work. I don't just study theory: I co-founded a B2B startup and have shipped 13 production projects.",
      viewWork: "View my projects",
      downloadCV: "Download CV",
      contact: "Let's talk"
    },
    profileCard: {
      role: "Hi! I'm Giuliana — a Full Stack Developer with a GPA of 8.72 and 13 production projects shipped."
    },
    about: {
      badge: "Full Stack Development",
      title: "Clean code,",
      titleItalic: "resilient software.",
      p1: "Hi! I'm <0>Giuliana</0>. I'm a Web Development graduate from UNLaM (8.72 GPA). I build software that solves real, day-to-day problems and delivers actual business value.",
      p2: "I work across the full stack: designing robust APIs in Node.js, Java, or C#, modeling relational databases, and crafting fast, responsive frontends with React or Angular.",
      stats: {
        exp: "8.72",
        expLabel: "GPA",
        dedication: "13",
        dedicationLabel: "Production projects"
      }
    },
    trust: {
      badge: "Quality Assurance",
      title: "Impactful projects,",
      titleFaded: "precision code.",
      description: "I get involved in every stage of development to ensure the final product exceeds both technical and visual expectations.",
      metrics: {
        speed: {
          label: "Load time",
          value: "-30%",
          tooltip: "Performance optimization on Vercel through asset compression, lazy loading and cache configuration."
        },
        direct: {
          label: "Production projects",
          value: "7",
          tooltip: "End-to-end delivery: from architecture and development to deployment and post-launch support."
        },
        modern: {
          label: "GPA",
          value: "8.72",
          tooltip: "18 of 20 subjects completed at Universidad Nacional de La Matanza, graduating July 2026."
        }
      },
      testimonials: {
        miri: {
          role: "La Quinta Miri — Client",
          text: "Giuliana immediately understood the warmth I wanted to convey. Since we launched the web, inquiries have become more professional and the booking process is much smoother."
        },
        camila: {
          role: "Unik — Creative Director",
          text: "Moving from a static portfolio to an interactive website changed how the market perceives us. Giuliana achieved a high-level digital identity with top-tier animations."
        },
        iara: {
          role: "Unik — Business Strategy",
          text: "We were looking for professional and direct integration. Giuliana provided a flawless solution that optimized our new client acquisition flow."
        }
      }
    },
    projects: {
      subtitle: "Selected Works",
      title: "Technical quality,",
      titleFaded: "business results.",
      tabs: {
        professional: "Freelance",
        academic: "Academic Projects"
      },
      labels: {
        challenge: "Technical Challenge",
        stack: "Core Stack",
        github: "View on GitHub",
        live: "Live Site",
        viewProcess: "View Design Process",
        viewWork: "View Final Web"
      },
      items: {
        pulseguard: {
          title: "PulseGuard",
          category: "Full Stack · AI Security Tooling",
          description: "Full-stack uptime monitoring platform with an AI-powered static security scanner for GitHub repositories, built for a technical hiring challenge.",
          longDescription: "Full-stack SaaS platform for real-time uptime and performance monitoring, paired with a static security scanner for GitHub repositories powered by the Google Gemini API. Frontend in Next.js (App Router) and TypeScript; backend in NestJS with Prisma ORM on PostgreSQL (Supabase). Features an interactive dashboard with 12-week status history, AI-driven commit audits flagging risks like SQL injection and exposed credentials, and configurable email and Discord/Slack webhook alerts. Built as a take-home technical challenge for a job application — it showcases backend architecture and AI integration, not just frontend."
        },
        hidrorescate: {
          title: "Hidrorescate",
          category: "Frontend Development",
          description: "Service site for a multi-brand water pump and pressurization technician, built to convert visits into WhatsApp leads.",
          longDescription: "Built the marketing site for Hidrorescate's multi-brand technical service (pump installation, repair and pressurization) across Buenos Aires and AMBA. React SPA with Vite and TypeScript, structured around trust signals — written warranty, real job photos, licensed technicians — with a WhatsApp-first contact flow and a lead-qualifying Pre-Diagnóstico form."
        },
        magicalduo: {
          title: "The Magical Duo",
          category: "Frontend Development",
          description: "Travel agency site for Disney, Universal and Caribbean vacations, organized around pre-designed, bookable packages.",
          longDescription: "Built the site for a travel agency specializing in Disney, Universal, cruise and Caribbean packages. React SPA with Vite and TypeScript, organized by destination and package type, designed to turn browsing into a direct quote request."
        },
        unik: {
          title: "Unik Agency",
          category: "Frontend Development",
          description: "Migration from static assets (Canva) to high-performance interactive web platform.",
          longDescription: "I led the digital transition for Unik agency, transforming a static portfolio into a seamless web experience. I implemented advanced animations with Framer Motion and optimized performance to achieve minimal load times, elevating brand perception for their corporate clients."
        },
        miri: {
          title: "La Quinta Miri",
          category: "Full Stack & SEO",
          description: "Full-scale digitization and direct contact system for the tourism sector.",
          longDescription: "I developed a custom digital solution for a vacation complex. The project ranged from UI design to search engine optimization (Local SEO) and the integration of direct booking channels, professionalizing lead acquisition without relying on external platforms. Since launch, the Google Business Profile recorded 267 interactions and 25 direct website clicks (Feb–Jul 2026)."
        },
        trivia: {
          title: "Distributed Trivia Engine",
          category: "Backend Engineering",
          description: "Real-time multiplayer platform with distributed session synchronization.",
          longDescription: "A high-complexity technical project focused on distributed systems. I implemented real-time game logic via WebSockets and Spring MVC, ensuring data consistency across multiple concurrent clients."
        },
        hardware: {
          title: "Enterprise Inventory Hub",
          category: "Full Stack Development",
          description: "Inventory management system with RESTful architecture and RBAC.",
          longDescription: "Development of an administrative e-commerce platform. I designed the Role-Based Access Control (RBAC) and internal APIs under REST standards, using Sequelize for MySQL persistence management."
        },
        nlp: {
          title: "AI Semantic Engine",
          category: "Software Architecture",
          description: "Natural Language Processing (NLP) platform for automated assessment.",
          longDescription: "Implementation of a semantic engine under .NET 9. I worked on the persistence layer with Entity Framework and data processing logic for dynamic analytical report generation."
        },
        muda: {
          title: "MUDA",
          category: "Full Stack Development",
          description: "End-to-end digital presence for a creative fashion studio — public SPA + custom admin panel.",
          longDescription: "Designed and developed MUDA's complete digital presence from scratch. Multi-section SPA covering creative productions, art direction, social content, talent agency, events and studio rental — each section with its own SEO-friendly URL. Includes an interactive talent database where models, photographers and makeup artists upload their profile and apply to join the agency. The custom admin panel manages talents, productions and applications in real time — accepting an application automatically converts it into a published talent. Full technical SEO: local business structured data, sitemap, Open Graph and Google Search Console verification."
        },
        emme: {
          title: "Emme Digital",
          category: "Frontend Development",
          description: "High-performance website for a creative digital agency.",
          longDescription: "Full design and development of the corporate site for Emme Digital agency. I implemented fluid animations with Framer Motion, performance optimization and a visual identity aligned with their brand positioning."
        },
        invBoda: {
          title: "Wedding Invitation",
          category: "Creative Development",
          description: "Animated digital invitation for a wedding with RSVP system.",
          longDescription: "Custom web invitation with cinematic animations and a guest confirmation system. Optimized for mobile and cross-browser compatibility to ensure a memorable experience for every guest."
        },
        invXv: {
          title: "XV Invitation",
          category: "Creative Development",
          description: "Interactive digital invitation for a XV years celebration.",
          longDescription: "Custom design for a XV years party invitation. Smooth animations, custom typography and a responsive layout that captures the celebration's aesthetic perfectly."
        },
        repostory: {
          title: "Repostory",
          category: "SaaS · Generative AI",
          description: "SaaS that analyzes GitHub repositories with Generative AI — automated technical descriptions via advanced prompt engineering.",
          longDescription: "SaaS in active development that analyzes GitHub repositories with Generative AI. Backend in FastAPI with authenticated REST endpoints, modular architecture and horizontal scalability design. Pipeline with Groq API and llama-3.3-70b to generate precise technical descriptions through advanced prompt engineering. Built to scale from the ground up."
        },
        aura: {
          title: "Aura DJ Management System",
          category: "Full Stack — Turborepo Monorepo",
          description: "Business management platform for a DJ agency built as a Turborepo monorepo with 3 Next.js 15 apps.",
          longDescription: "End-to-end business management system for a DJ agency. Turborepo monorepo with 3 Next.js 15 (App Router) applications sharing a PostgreSQL database via Drizzle ORM on Supabase. Features: role-based access (facundo, aura_admin, aura_member), two-round booking system with unique tokens, client event portal, content CMS, and availability calendar. Supabase Auth with Row Level Security. In development."
        },
        costear: {
          title: "CosteAR",
          category: "Full Stack · Enterprise Tools",
          description: "Financial copilot and operator portal for agro-industrial SMEs — co-founded project and semifinalist at Emprende U 2026. Custom operator chat for data ingestion and real-time cost analytics dashboard.",
          longDescription: "CosteAR is a financial copilot and cost management system designed for agro-industrial SMEs. Co-founded and built end-to-end. The goal isn't to replace the cost analyst, but to save them time: a process that used to be manual and paper-based is now digitized, with a direct communication bridge between the plant operator and the analyst. Instead of using generic messaging apps, it features a built-in custom operator portal where workshop operators can submit raw cost data, invoices, and PDFs directly through an integrated chat interface. An automated AI assistant classifies these documents for the cost analyst, who validates them via a dynamic dashboard. Two background job queues (Redis + BullMQ) handle work that can't run inline: syncing macroeconomic data from external sources and recalculating cost structures whenever those variables change. Queuing this work keeps the app responsive and resilient — requests return immediately, and failed jobs retry automatically instead of breaking the flow. Built with Clean Architecture on the backend (Node.js, Fastify, Prisma, PostgreSQL, Redis, BullMQ) and React 19 (TypeScript, TanStack Router, Tailwind CSS v4) on the frontend. The concept has been validated in multiple meetings with agro-industrial professionals, with consistently positive feedback. Currently a semifinalist at Emprende U 2026, featured in La Gaceta (Tucumán)."
        },
        portfolio: {
          title: "Personal Portfolio",
          category: "Frontend + Design System",
          description: "Bilingual portfolio with an embedded Lit Element 3 design system — real web components shipped to production.",
          longDescription: "React 18 + TypeScript + Vite. Full EN/ES internationalization (react-i18next), Framer Motion animations, Firebase Firestore for dynamic reviews, technical SEO with og:tags and canonical URL, CI/CD on Vercel with Speed Insights. Includes a live Design System built with Lit Element 3: reusable, framework-agnostic web components using Shadow DOM, CSS custom properties and TypeScript reactive properties — deployed at /design-system."
        },
        "9669": {
          title: "9669 Club",
          category: "Real-time Engineering",
          description: "Live event streaming: guests broadcast from their phones via WebRTC, admin selects up to 4 simultaneous feeds, projector shows them with retro film effects — all in real time.",
          longDescription: "Real-time live streaming platform for events — parties, shows, concerts. Three roles: Guest scans a QR code on their phone and streams from their camera via WebRTC — no app install needed. Admin has a control panel with all connected cameras visible in real time, selects up to 4 simultaneous feeds for the projector, controls visual effects (Retro B&W filter + event name overlay) and generates the guest QR. Stage/Projector displays fullscreen the feeds chosen by the admin — with the retro filter: B&W video, film grain, VHS glitches and an old-camera HUD with timecode and event name. Effects are applied only in the projector view; guests always stream in original quality. QR never shown on the projector. Built with LiveKit Cloud for WebRTC, Turborepo monorepo with pnpm workspaces, Vercel Functions. In development."
        },
        atout: {
          title: "Atout",
          category: "Cross-platform App",
          description: "All-in-one platform for freelancers and digital agencies — project management, content calendars, invoicing, booking and team in one codebase for web, desktop and mobile.",
          longDescription: "All-in-one management platform for freelancers and digital agencies. Five core modules: Project management with phases, deliverables, review rounds and a client portal where clients track progress in real time — without accessing the admin panel. Community Manager with monthly content calendar, Kanban pipeline (Draft → Scheduled → Published), per-post metadata (caption, platforms, priority, cover image, media via Supabase Storage, inspiration links, performance metrics) and client-facing calendar sharing. Task system with priorities, subtasks, deadlines and team assignment. Invoice generator with payment tracking. Booking system with configurable availability (/book/your-name public link). Team management with shared resources and internal notes. Plans: free / pro / agency. Single React 19/TypeScript codebase on web (Vercel), desktop (Electron for Win/Mac/Linux) and mobile (Capacitor for Android/iOS). Supabase: PostgreSQL, Auth, Storage, Row Level Security. Zustand, GitHub Actions CI/CD, PWA. In development."
        },
        "design-system": {
          title: "Web Components Design System",
          category: "Frontend Engineering",
          description: "Design system built with Lit Element 3 — reusable web components that work in any framework.",
          longDescription: "Collection of web components built with Lit 3 + TypeScript following the portfolio's design language. Uses Shadow DOM for style encapsulation, CSS custom properties for theming, and reactive properties with type safety. Components are framework-agnostic — they work in React, Angular, Vue or vanilla HTML."
        }
      }
    },
    tech: {
      subtitle: "Tech Stack",
      title: "Tools &",
      titleItalic: "Technologies",
      categories: {
        languages: {
          title: "Languages",
          skills: "TypeScript / JavaScript ES6+ / Java 1.8+ / C# .NET 9 / PHP / Python",
          details: "Core programming languages across all projects. TypeScript as primary language for type-safe full-stack development, Java for enterprise backend with Spring, C# for .NET 9 projects, PHP for legacy integrations, and Python for scripting and data tooling."
        },
        frontend: {
          title: "Frontend & Web",
          skills: "Angular 21 / Angular Signals / React 18/19 / Next.js 15 / Lit Element / Tailwind CSS v4 / Framer Motion / Zustand / react-i18next / Vite / PWA / Barcode API",
          details: "Component-based development with Angular 21 (Signals), React 18/19 and Lit Element (Web Components). SSR with Next.js 15, fluid animations with Framer Motion, state management with Zustand, internationalization with react-i18next and fast builds with Vite. PWA and Barcode API for mobile features."
        },
        backend: {
          title: "Backend",
          skills: "Node.js / ASP.NET Core (.NET 9) / Java Spring Boot / Spring Framework 4+ / Spring MVC / Supabase / WebRTC / REST APIs / Vercel Functions",
          details: "Scalable server-side systems with Node.js, ASP.NET Core (.NET 9) and Java Spring Boot / Spring MVC. Supabase for hosted PostgreSQL with RLS, WebRTC via LiveKit for real-time features, REST APIs under Clean Architecture, and Vercel Functions for serverless endpoints."
        },
        security: {
          title: "Security",
          skills: "JWT / OAuth 2.0 / RBAC / Supabase RLS / Bearer Tokens",
          details: "Authentication and authorization across all layers: JWT for stateless API security, OAuth 2.0 for third-party integrations, RBAC for multi-role access control, Supabase Row Level Security for database-level policies, and Bearer Tokens for service-to-service communication."
        },
        database: {
          title: "Databases",
          skills: "PostgreSQL / MySQL / SQL Server / MongoDB / Firebase Firestore / Prisma / Drizzle ORM / Sequelize / Hibernate / Entity Framework Core",
          details: "Relational and non-relational schema design. ORM tooling: Prisma and Drizzle ORM for modern TypeScript projects, Sequelize for Node.js, Hibernate for Java, and Entity Framework Core for .NET — ensuring data integrity and query efficiency across complex systems."
        },
        architecture: {
          title: "Architecture",
          skills: "Clean Architecture / SOLID / Design Patterns / Microservices / Turborepo / Monorepos",
          details: "Software design with Clean Architecture and SOLID principles. Familiarity with common Design Patterns (Repository, Factory, Observer). Experience with Microservices decomposition and Turborepo/Monorepo setups for multi-app workspaces sharing libraries and tooling."
        },
        testing: {
          title: "Testing",
          skills: "JUnit / xUnit / TDD / Unit Testing / in-memory fakes",
          details: "Unit testing across the full stack: JUnit for Java Spring applications, xUnit for .NET projects, and in-memory fakes for isolating dependencies. Test-Driven Development (TDD) as a design methodology to build more maintainable, well-scoped components from the ground up."
        },
        devops: {
          title: "DevOps",
          skills: "Git / GitHub Actions / Docker / Vercel / CI/CD / Electron / Capacitor (Android & iOS) / Core Web Vitals / Turborepo",
          details: "Automated CI/CD pipelines with GitHub Actions for web, Electron desktop (Win/Mac/Linux) and Capacitor mobile (Android/iOS) releases. Containerization with Docker, deployments on Vercel with Speed Insights and Core Web Vitals monitoring. Monorepo orchestration with Turborepo."
        },
        methodologies: {
          title: "Methodologies",
          skills: "Scrum / Agile / AI-Assisted Development / Technical SEO / Code Review",
          details: "Agile development with Scrum — sprint planning, retrospectives and cross-functional collaboration with analysts, QAs and tech leads. AI-Assisted Development using Claude Code and Antigravity to boost productivity. Technical SEO best practices and structured code review process."
        },
        spokenLangs: {
          title: "Spoken Languages",
          skills: "Spanish (native) / English B2/C1 / Portuguese (basic)",
          details: "Spanish native speaker. Advanced English (B2/C1) — able to work in international teams, write technical documentation and participate in code reviews fully in English. Basic Portuguese for reading and written communication."
        }
      }
    },
   whatsNext: {
  badge: "Growth mindset",
  title: "Always",
  titleItalic: "moving forward.",
  tags: {
    starting:   "Starting Aug 2026",
    exploring:  "Exploring",
    studying:   "Studying",
    practicing: "Practicing",
    building:   "Building",
  },
  items: {
    utn:        "Bachelor's in Artificial Intelligence",
    utnSub:     "UBP — Universidad Blas Pascal · Starting August 2026",
    nextjs:     "Next.js App Router & Server Components",
    systemDesign: "System Design & Scalable Architectures",
    postgres:   "PostgreSQL — advanced queries & performance",
    litElement: "Lit Element 3 — Web Components Design System",
  },
},
    footer: {
      status: "Available for new opportunities",
      titleLine1: "Let's work",
      titleLine2: "together.",
      location: "Buenos Aires, Argentina",
      backToTop: "Back to top",
      emailSubject: "Contact from Portfolio — "
    }
  }
};

const es = {
  translation: {
    hero: {
      badge: "Disponible para nuevas oportunidades",
      title1: "DESARROLLADORA",
      title2: "FULL STACK",
      description: "Desarrolladora Full Stack. Escribo código estructurado, diseño bases de datos eficientes y deployo aplicaciones web que funcionan. No me quedo en la teoría: co-fundé una startup y tengo 13 proyectos reales puestos en producción.",
      viewWork: "Ver mis proyectos",
      downloadCV: "Descargar CV",
      contact: "Hablemos"
    },
    profileCard: {
      role: "¡Hola! Soy Giuliana — Desarrolladora Full Stack con promedio 8.72 y 13 proyectos en producción."
    },
    about: {
      badge: "Desarrollo Full Stack",
      title: "Código limpio,",
      titleItalic: "software resiliente.",
      p1: "¡Hola! Soy <0>Giuliana</0>. Me gradué en Desarrollo Web en la UNLaM con un promedio de 8.72. Escribo código para resolver problemas reales del día a día y aportar valor tangible.",
      p2: "Trabajo en todo el stack: diseño APIs estructuradas en Node.js, Java o C#, modelo bases de datos relacionales y construyo interfaces interactivas con React o Angular.",
      stats: {
        exp: "8.72",
        expLabel: "Promedio",
        dedication: "13",
        dedicationLabel: "Proyectos en producción"
      }
    },
    trust: {
      badge: "Garantía de calidad",
      title: "Proyectos con impacto,",
      titleFaded: "código de precisión.",
      description: "Me involucro en cada etapa del desarrollo para asegurar que el producto final supere las expectativas técnicas y visuales.",
      metrics: {
        speed: {
          label: "Tiempo de carga",
          value: "-30%",
          tooltip: "Optimización de performance en Vercel mediante compresión de assets, lazy loading y configuración de caché."
        },
        direct: {
          label: "Proyectos en producción",
          value: "7",
          tooltip: "Entrega end-to-end: desde arquitectura y desarrollo hasta deploy y soporte post-lanzamiento."
        },
        modern: {
          label: "Promedio académico",
          value: "8.72",
          tooltip: "18 de 20 materias promocionadas en la Universidad Nacional de La Matanza, egreso julio 2026."
        }
      },
      testimonials: {
        miri: {
          role: "La Quinta Miri — Cliente",
          text: "Giuliana entendió enseguida la calidez que quería transmitir. Desde que lanzamos la web, las consultas se profesionalizaron y el proceso de reserva es mucho más fluido."
        },
        camila: {
          role: "Unik — Directora Creativa",
          text: "Pasar de un portfolio estático a una web interactiva cambió cómo nos percibe el mercado. Giuliana logró una identidad digital con animaciones de alto nivel."
        },
        iara: {
          role: "Unik — Estrategia de Negocio",
          text: "Buscábamos una integración directa y profesional. Giuliana nos dio una solución impecable que optimizó el flujo de llegada de nuevos clientes."
        }
      }
    },
    projects: {
      subtitle: "Trabajos Seleccionados",
      title: "Calidad técnica,",
      titleFaded: "resultados de negocio.",
      tabs: {
        professional: "Freelance",
        academic: "Proyectos Académicos"
      },
      labels: {
        challenge: "Desafío Técnico",
        stack: "Stack Principal",
        github: "Ver en GitHub",
        live: "Sitio en Vivo",
        viewProcess: "Ver Proceso de Diseño",
        viewWork: "Ver Web Final"
      },
      items: {
        pulseguard: {
          title: "PulseGuard",
          category: "Full Stack · AI Security Tooling",
          description: "Plataforma full-stack de monitoreo de uptime con un motor de auditoría de seguridad por IA para repositorios de GitHub, desarrollada para un challenge técnico de selección laboral.",
          longDescription: "Plataforma SaaS full-stack para monitorear uptime y rendimiento en tiempo real, junto con un motor de auditoría de seguridad estático para repositorios de GitHub potenciado por la API de Google Gemini. Frontend en Next.js (App Router) y TypeScript; backend en NestJS con Prisma ORM sobre PostgreSQL (Supabase). Incluye un dashboard interactivo con historial de 12 semanas, auditoría de commits por IA que detecta riesgos como inyecciones SQL y credenciales expuestas, y alertas configurables por email y webhooks a Discord/Slack. Desarrollado como challenge técnico para un proceso de selección laboral — muestra arquitectura de backend e integración de IA, no solo frontend."
        },
        hidrorescate: {
          title: "Hidrorescate",
          category: "Frontend Development",
          description: "Sitio de servicio técnico multimarca de bombas de agua y presurizadores, pensado para convertir visitas en consultas por WhatsApp.",
          longDescription: "Desarrollé el sitio de Hidrorescate, servicio técnico multimarca de instalación, reparación y presurización de bombas de agua en Buenos Aires y AMBA. SPA en React con Vite y TypeScript, estructurada en torno a señales de confianza — garantía por escrito, fotos reales de trabajos, técnicos matriculados — con un flujo de contacto WhatsApp-first y un formulario de Pre-Diagnóstico que califica leads."
        },
        magicalduo: {
          title: "The Magical Duo",
          category: "Frontend Development",
          description: "Sitio para una agencia de viajes especializada en Disney, Universal y Caribe, organizado en paquetes prediseñados y listos para reservar.",
          longDescription: "Desarrollé el sitio de una agencia de viajes especializada en paquetes de Disney, Universal, cruceros y Caribe. SPA en React con Vite y TypeScript, organizada por destino y tipo de paquete, pensada para convertir la navegación en una cotización directa."
        },
        unik: {
          title: "Unik Agency",
          category: "Frontend Development",
          description: "Migración de activo estático (Canva) a plataforma web interactiva de alto rendimiento.",
          longDescription: "Lideré la transición digital de la agencia Unik, transformando un portfolio estático en una experiencia web fluida. Implementé animaciones avanzadas con Framer Motion y optimicé el rendimiento logrando tiempos de carga mínimos, elevando la percepción de marca frente a sus clientes corporativos."
        },
        miri: {
          title: "La Quinta Miri",
          category: "Full Stack & SEO",
          description: "Digitalización integral y sistema de contacto directo para sector turístico.",
          longDescription: "Desarrollé una solución digital a medida para un complejo vacacional. El proyecto incluyó desde el diseño de interfaz hasta el posicionamiento en motores de búsqueda (SEO local) y la integración de canales de reserva directos, profesionalizando la captación de leads sin depender de plataformas externas. Desde el lanzamiento, el Perfil de Negocio de Google registró 267 interacciones y 25 clics directos al sitio (feb–jul 2026)."
        },
        trivia: {
          title: "Motor de Trivia Distribuido",
          category: "Backend Engineering",
          description: "Plataforma multijugador en tiempo real con sincronización de sesiones distribuida.",
          longDescription: "Proyecto de alta complejidad técnica centrado en sistemas distribuidos. Implementé la lógica de juego real-time mediante WebSockets y Spring MVC, asegurando la consistencia de datos entre múltiples clientes concurrentes."
        },
        hardware: {
          title: "Enterprise Inventory Hub",
          category: "Full Stack Development",
          description: "Sistema de gestión de inventario con arquitectura RESTful y RBAC.",
          longDescription: "Desarrollo de una plataforma administrativa de e-commerce. Diseñé el control de acceso basado en roles (RBAC) y las APIs de consumo interno bajo estándares REST, utilizando Sequelize para el manejo de persistencia en MySQL."
        },
        nlp: {
          title: "AI Semantic Engine",
          category: "Software Architecture",
          description: "Plataforma de procesamiento de lenguaje natural (NLP) para evaluación automatizada.",
          longDescription: "Implementación de un motor semántico bajo .NET 9. Trabajé en la capa de persistencia con Entity Framework y en la lógica de procesamiento de datos para la generación dinámica de reportes analíticos."
        },
        muda: {
          title: "MUDA",
          category: "Full Stack Development",
          description: "Presencia digital completa para una productora creativa de moda — SPA pública + panel admin a medida.",
          longDescription: "Diseñé y desarrollé de cero la presencia digital completa de MUDA. SPA multisección con identidad editorial que cubre producciones creativas, dirección artística, contenido para redes, agencia de talentos, eventos y alquiler de estudio — cada sección con su propia URL para SEO. Incluye una base de talentos interactiva donde modelos, fotógrafxs y maquilladorxs cargan su perfil y postulan para entrar a la agencia. El panel admin gestiona talentos, producciones y postulaciones en tiempo real — aceptar una postulación la convierte automáticamente en talento publicado. SEO técnico integral: datos estructurados de negocio local, sitemap, Open Graph y verificación en Google Search Console."
        },
        emme: {
          title: "Emme Digital",
          category: "Frontend Development",
          description: "Sitio web de alta performance para una agencia creativa digital.",
          longDescription: "Diseño y desarrollo completo del sitio corporativo de la agencia Emme Digital. Implementé animaciones fluidas con Framer Motion, optimización de performance e identidad visual alineada con su posicionamiento de marca."
        },
        invBoda: {
          title: "Invitación de Boda",
          category: "Desarrollo Creativo",
          description: "Invitación digital animada para una boda con sistema de confirmación.",
          longDescription: "Invitación web personalizada con animaciones cinematográficas y sistema de confirmación de asistencia. Optimizada para mobile y compatibilidad cross-browser para garantizar una experiencia memorable."
        },
        invXv: {
          title: "Invitación de XV",
          category: "Desarrollo Creativo",
          description: "Invitación digital interactiva para una celebración de 15 años.",
          longDescription: "Diseño a medida para invitación de XV años. Animaciones suaves, tipografía personalizada y layout responsive que captura perfectamente la estética de la celebración."
        },
        costear: {
          title: "CosteAR",
          category: "Full Stack · Herramientas Enterprise",
          description: "Copiloto financiero y portal de operarios para PyMEs agroindustriales — proyecto co-fundado y semifinalista de Emprende U 2026. Chat propio para ingesta de datos y dashboard analítico en tiempo real.",
          longDescription: "CosteAR es un copiloto financiero y sistema de gestión de costos diseñado para PyMEs agroindustriales. Proyecto co-fundado y desarrollado de punta a punta. El objetivo no es reemplazar al costista, sino ahorrarle tiempo: un proceso que antes era manual y en papel ahora está digitalizado, con un puente de comunicación directo entre el operario de planta y el costista. En lugar de usar apps de mensajería genéricas, cuenta con un portal propio integrado donde los operarios envían datos de costos, facturas y remitos mediante un chat interno. Un asistente de IA clasifica automáticamente estos documentos para el analista de costos, quien los valida desde un dashboard analítico en tiempo real. Dos colas de trabajo en segundo plano (Redis + BullMQ) manejan las tareas que no pueden correr en el mismo request: sincronizar datos macroeconómicos externos y recalcular las estructuras de costos cuando esas variables cambian. Encolar ese trabajo mantiene la app responsiva y resiliente — las respuestas son inmediatas, y los jobs fallidos reintentan solos en vez de romper el flujo. Desarrollado bajo Clean Architecture en el backend (Node.js, Fastify, Prisma, PostgreSQL, Redis, BullMQ) y React 19 (TypeScript, TanStack Router, Tailwind CSS v4) en el frontend. La propuesta fue validada en múltiples reuniones con profesionales del sector agroindustrial, con devolución consistentemente positiva. Actualmente semifinalista en Emprende U 2026, con cobertura en La Gaceta (Tucumán)."
        },
        repostory: {
          title: "Repostory",
          category: "SaaS · IA Generativa",
          description: "SaaS que analiza repositorios GitHub con IA Generativa — descripciones técnicas automatizadas via prompt engineering avanzado.",
          longDescription: "SaaS en desarrollo activo que analiza repositorios GitHub con IA Generativa. Backend en FastAPI con endpoints REST autenticados, arquitectura modular y diseño para escalabilidad horizontal. Pipeline con Groq API y llama-3.3-70b para generar descripciones técnicas precisas via prompt engineering avanzado. Construido para escalar desde la arquitectura."
        },
        aura: {
          title: "Aura DJ Management System",
          category: "Full Stack — Turborepo Monorepo",
          description: "Plataforma de gestión para una agencia de DJs construida como monorepo Turborepo con 3 apps Next.js 15.",
          longDescription: "Sistema de gestión end-to-end para una agencia de DJs. Monorepo Turborepo con 3 aplicaciones Next.js 15 (App Router) que comparten una base de datos PostgreSQL via Drizzle ORM en Supabase. Incluye: control de acceso por roles (facundo, aura_admin, aura_member), sistema de reservas de dos rondas con tokens únicos, portal de eventos para clientes, CMS de contenido y calendario de disponibilidad. Supabase Auth con Row Level Security. En desarrollo."
        },
        portfolio: {
          title: "Portfolio Personal",
          category: "Frontend + Design System",
          description: "Portfolio bilingüe con un design system en Lit Element 3 integrado — web components reales en producción.",
          longDescription: "React 18 + TypeScript + Vite. Internacionalización EN/ES completa (react-i18next), animaciones con Framer Motion, Firebase Firestore para reviews dinámicas, SEO técnico con og:tags y canonical URL, CI/CD en Vercel con Speed Insights. Incluye un Design System en vivo construido con Lit Element 3: web components reutilizables y agnósticos al framework usando Shadow DOM, CSS custom properties y reactive properties con TypeScript — deployado en /design-system."
        },
        "9669": {
          title: "9669 Club",
          category: "Ingeniería en Tiempo Real",
          description: "Streaming en vivo para eventos: los invitados transmiten desde el celular via WebRTC, el admin selecciona hasta 4 feeds simultáneos, el proyector los muestra con efectos retro — todo en tiempo real.",
          longDescription: "Plataforma de streaming en vivo en tiempo real para eventos — fiestas, shows, conciertos. Tres roles: el Invitado escanea un QR desde su celular y transmite su cámara via WebRTC — sin instalar nada. El Admin tiene un panel de control con todas las cámaras conectadas en tiempo real, selecciona hasta 4 feeds simultáneos para el proyector, controla efectos visuales (filtro Retro B&N + nombre del evento) y genera el QR para los invitados. El Proyector/Stage muestra en fullscreen los feeds elegidos por el admin — con filtro retro: video en blanco y negro, grano de película, glitches de VHS y HUD de cámara antigua con timecode y nombre del evento. Los efectos se aplican solo en la vista del proyector; los invitados siempre graban en calidad original. El QR nunca aparece en el proyector. Construido con LiveKit Cloud para WebRTC, monorepo Turborepo con pnpm workspaces, Vercel Functions. En desarrollo."
        },
        atout: {
          title: "Atout",
          category: "App Multiplataforma",
          description: "Plataforma todo-en-uno para freelancers y agencias digitales — gestión de proyectos, calendarios de contenido, facturación, reservas y equipo en un codebase para web, desktop y mobile.",
          longDescription: "Plataforma de gestión todo-en-uno para freelancers y agencias digitales. Cinco módulos principales: Gestión de proyectos con fases, entregables, rondas de revisión y portal del cliente en tiempo real — los clientes ven el progreso sin acceder al panel interno. Community Manager con calendario de contenido mensual, pipeline Kanban (Borrador → Programado → Publicado), metadatos por post (caption, plataformas, prioridad, imagen de portada, archivos multimedia via Supabase Storage, links de inspiración, métricas de performance) y calendario compartible con el cliente. Sistema de tareas con prioridades, subtareas, fechas límite y asignación de equipo. Generador de facturas + seguimiento de pagos. Sistema de reservas con disponibilidad configurable (link público /book/tu-nombre). Gestión de equipo con recursos compartidos y notas internas. Planes: free / pro / agency. Un único codebase React 19/TypeScript en web (Vercel), desktop (Electron para Win/Mac/Linux) y mobile (Capacitor para Android/iOS). Supabase: PostgreSQL, Auth, Storage, Row Level Security. Zustand, GitHub Actions CI/CD, PWA. En desarrollo."
        },
        "design-system": {
          title: "Design System con Web Components",
          category: "Frontend Engineering",
          description: "Design system con Lit Element 3 — web components reutilizables que funcionan en cualquier framework.",
          longDescription: "Colección de web components construidos con Lit 3 + TypeScript siguiendo el lenguaje visual del portfolio. Usa Shadow DOM para encapsulación de estilos, CSS custom properties para theming, y reactive properties con tipado TypeScript. Los componentes son agnósticos al framework — funcionan en React, Angular, Vue o HTML vanilla."
        }
      }
    },
    tech: {
      subtitle: "Stack Tecnológico",
      title: "Herramientas &",
      titleItalic: "Tecnologías",
      categories: {
        languages: {
          title: "Lenguajes",
          skills: "TypeScript / JavaScript ES6+ / Java 1.8+ / C# .NET 9 / PHP / Python",
          details: "Lenguajes de programación principales en todos los proyectos. TypeScript como lenguaje primario para desarrollo full-stack con tipos seguros, Java para backend empresarial con Spring, C# para proyectos .NET 9, PHP para integraciones legacy y Python para scripting y herramientas de datos."
        },
        frontend: {
          title: "Frontend & Web",
          skills: "Angular 21 / Angular Signals / React 18/19 / Next.js 15 / Lit Element / Tailwind CSS v4 / Framer Motion / Zustand / react-i18next / Vite / PWA / Barcode API",
          details: "Desarrollo basado en componentes con Angular 21 (Signals), React 18/19 y Lit Element (Web Components). SSR con Next.js 15, animaciones fluidas con Framer Motion, estado global con Zustand, internacionalización con react-i18next y builds rápidos con Vite. Soporte PWA y Barcode API para funciones mobile."
        },
        backend: {
          title: "Backend",
          skills: "Node.js / ASP.NET Core (.NET 9) / Java Spring Boot / Spring Framework 4+ / Spring MVC / Supabase / WebRTC / REST APIs / Vercel Functions",
          details: "Sistemas de servidor escalables con Node.js, ASP.NET Core (.NET 9) y Java Spring Boot / Spring MVC. Supabase para PostgreSQL alojado con RLS, WebRTC via LiveKit para funciones en tiempo real, APIs REST bajo Clean Architecture y Vercel Functions para endpoints serverless."
        },
        security: {
          title: "Seguridad",
          skills: "JWT / OAuth 2.0 / RBAC / Supabase RLS / Bearer Tokens",
          details: "Autenticación y autorización en todas las capas: JWT para seguridad de APIs sin estado, OAuth 2.0 para integraciones de terceros, RBAC para control de acceso multi-rol, Supabase Row Level Security para políticas a nivel de base de datos y Bearer Tokens para comunicación entre servicios."
        },
        database: {
          title: "Bases de Datos",
          skills: "PostgreSQL / MySQL / SQL Server / MongoDB / Firebase Firestore / Prisma / Drizzle ORM / Sequelize / Hibernate / Entity Framework Core",
          details: "Diseño de esquemas relacionales y no relacionales. ORMs: Prisma y Drizzle ORM para proyectos TypeScript modernos, Sequelize para Node.js, Hibernate para Java y Entity Framework Core para .NET — garantizando integridad de datos y eficiencia en consultas de sistemas complejos."
        },
        architecture: {
          title: "Arquitectura",
          skills: "Clean Architecture / SOLID / Design Patterns / Microservices / Turborepo / Monorepos",
          details: "Diseño de software con Clean Architecture y principios SOLID. Familiaridad con patrones de diseño comunes (Repository, Factory, Observer). Experiencia con descomposición en Microservicios y configuraciones Turborepo/Monorepo para workspaces multi-aplicación con librerías y herramientas compartidas."
        },
        testing: {
          title: "Testing",
          skills: "JUnit / xUnit / TDD / Unit Testing / in-memory fakes",
          details: "Pruebas unitarias en todo el stack: JUnit para aplicaciones Java Spring, xUnit para proyectos .NET e in-memory fakes para aislar dependencias. Test-Driven Development (TDD) como metodología de diseño para construir componentes más mantenibles y bien delimitados desde el inicio."
        },
        devops: {
          title: "DevOps",
          skills: "Git / GitHub Actions / Docker / Vercel / CI/CD / Electron / Capacitor (Android & iOS) / Core Web Vitals / Turborepo",
          details: "Pipelines de CI/CD automatizados con GitHub Actions para releases web, desktop con Electron (Win/Mac/Linux) y mobile con Capacitor (Android/iOS). Contenedores con Docker, deploys en Vercel con Speed Insights y monitoreo de Core Web Vitals. Orquestación de monorepos con Turborepo."
        },
        methodologies: {
          title: "Metodologías",
          skills: "Scrum / Agile / Desarrollo Asistido por IA / SEO Técnico / Code Review",
          details: "Desarrollo ágil con Scrum — planificación de sprints, retrospectivas y colaboración multifuncional con analistas, QAs y tech leads. Desarrollo Asistido por IA con Claude Code y Antigravity para aumentar la productividad. Buenas prácticas de SEO técnico y proceso estructurado de code review."
        },
        spokenLangs: {
          title: "Idiomas",
          skills: "Español (nativo) / Inglés B2/C1 / Portugués (básico)",
          details: "Hablante nativa de español. Inglés avanzado (B2/C1) — capaz de trabajar en equipos internacionales, escribir documentación técnica y participar en code reviews completamente en inglés. Portugués básico para lectura y comunicación escrita."
        }
      }
    },
    whatsNext: {
  badge: "Crecimiento continuo",
  title: "Siempre",
  titleItalic: "en movimiento.",
  tags: {
    starting:   "Agosto 2026",
    exploring:  "Explorando",
    studying:   "Estudiando",
    practicing: "Practicando",
    building:   "Construyendo",
  },
  items: {
    utn:        "Licenciatura en Inteligencia Artificial",
    utnSub:     "UBP — Universidad Blas Pascal · Inicio: agosto 2026",
    nextjs:     "Next.js App Router & Server Components",
    systemDesign: "System Design & Arquitecturas Escalables",
    postgres:   "PostgreSQL — queries avanzadas y performance",
    litElement: "Lit Element 3 — Design System con Web Components",
  },
},
    footer: {
      status: "Disponible para nuevas oportunidades",
      titleLine1: "Trabajemos",
      titleLine2: "juntos.",
      location: "Buenos Aires, Argentina",
      backToTop: "Volver arriba",
      emailSubject: "Contacto desde Portfolio — "
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources: { en, es },
    lng: "es",
    fallbackLng: "es",
    interpolation: { escapeValue: false }
  });

export default i18n;