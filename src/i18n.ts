import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const en = {
  translation: {
    about: {
      p1: "Hi! I'm <0>Giuliana</0>. I'm a Universitary Technician in Web Development from UNLaM (8.72 GPA), currently studying a Bachelor's in AI at UBP. I build software that solves real, day-to-day problems and delivers actual business value.",
      p2: "I work across the full stack: designing robust APIs in Node.js, Java, or C#, modeling relational databases, and crafting fast, responsive frontends with React or Angular."
    },
    trust: {
      // Not currently rendered: TrustSection.STATIC_REVIEWS is empty while we wait
      // for the technical testimonials. Kept here so the translated copy isn't lost.
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
      tabs: {
        professional: "Freelance",
        academic: "Academic Projects"
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
        nido: {
          title: "Nido",
          category: "Home Management Platform",
          description: "Home management platform with AI-assisted recipes, shared finances, chore tracking and OCR receipt scanning.",
          longDescription: "Final degree project developed with an 8-person team, shipping the MVP in about 2 months. I worked full stack with Angular and .NET 9 under Clean Architecture. Nido centralizes a shared household's pantry, recipes, chores and finances, with AI recipe recommendations, an in-recipe cooking assistant chat, automatic receipt scanning via OCR, and price comparison across supermarkets."
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
        craftstudio: {
          title: "Craft Studio",
          category: "Website + Custom Page Builder",
          description: "Site for a branding studio, plus a custom CRM where the team composes each case study from typed layout blocks — no code, no developer in the loop.",
          longDescription: "Public site and private CRM for Craft Studio, a brand identity and strategic communication studio in Buenos Aires. The site is React 19 + Vite with Three.js and React Three Fiber for the 3D work, GSAP and Lenis for motion and smooth scrolling, and Tailwind CSS v4 — sections for services, projects, the studio, Craft Lab and contact, with case studies and lab entries read from Supabase and images served through Cloudinary. The interesting half is the CRM: rather than a plain admin form, it's a visual page builder. Each case study is composed from typed layout blocks — single image, image pair, image + text, feature triptych, keywords, testimonials, stats — and every block exposes real layout control: column split (50/50, 60/40, 70/30 and more), aspect ratio, which side the main image sits on, mobile ordering and stacking, text alignment, optional container, and per-breakpoint typography. The builder renders a live preview from the same block contract the public site consumes, so what the team arranges is exactly what ships. The studio publishes and restyles its own portfolio without a developer in the loop."
        },
        fidalgoselect: {
          title: "AF Select",
          category: "Marketplace + Custom CRM",
          description: "Luxury vehicle and property marketplace with a custom-built CRM — dynamic catalog sections, lead capture and USD/ARS portfolio valuation.",
          longDescription: "Two applications built end to end for AF Select, a curated marketplace for high-end vehicles and properties across Tucumán, Salta and Buenos Aires. The public site is a React 18 + Vite SPA on Supabase: filterable catalog, listing detail pages, map views with Leaflet, a sell-your-asset form, testimonials, and inquiry flows that open WhatsApp with the message already composed from the listing's title, price and link. Full technical SEO — dynamic meta tags, JSON-LD structured data, robots.txt, sitemap and Search Console verification. The second application is a private CRM the client runs themselves: a listings manager with image upload and deletion, a section manager where each catalog section defines its own configurable fields, hero management, a leads inbox, and a dashboard with catalog valuation KPIs split by USD and ARS using es-AR price formatting. The client publishes, edits and prices everything without touching code."
        },
        costear: {
          title: "CosteAR",
          category: "Full Stack · Enterprise Tools",
          description: "Financial copilot for agro-industrial SMEs — co-founded project, semifinalist at Emprende U 2026. RAG advisor grounded in the team's knowledge vault, operator chat for data ingestion and real-time cost analytics.",
          longDescription: "CosteAR is a financial copilot and cost management system designed for agro-industrial SMEs. Co-founded and built end to end. The goal isn't to replace the cost analyst, but to save them time: a process that used to be manual and paper-based is now digitized, with a direct communication bridge between the plant operator and the analyst. Instead of generic messaging apps, operators submit cost data, invoices and delivery notes through a built-in chat, and an AI classifier files them for the analyst, who validates everything from a real-time dashboard. The core differentiator is a retrieval-augmented advisor that answers cost-accounting questions using only the team's knowledge vault — an Obsidian/Markdown repository of lecture notes from cost-accounting professors — never the model's general knowledge. Notes are chunked by heading rather than by fixed size, embedded with Voyage AI (voyage-4-large, 1024 dimensions) and stored as vectors in pgvector on the existing PostgreSQL, with no separate vector database. Every chunk carries a SHA-256 content hash and the vault commit it came from, so re-indexing is idempotent and each answer traces back to a specific note. At query time the question is embedded and matched by cosine distance against a similarity threshold, and the model is forced to cite its sources and to refuse when the retrieved context doesn't support an answer — each response returns a confidence level. Questions the vault couldn't answer are logged as signals for a nightly pipeline that drafts vault edits for a human administrator to approve, so the knowledge base improves from real usage instead of guesswork. Two background job queues (Redis + BullMQ) handle work that can't run inline: syncing macroeconomic data from external sources and recalculating cost structures whenever those variables change — requests return immediately and failed jobs retry on their own. Multi-tenant with row-level security, JWT RS256 with refresh tokens, and Sentry for error tracking and performance profiling across the API and the internal back-office. Clean Architecture on the backend (Node.js 22, Fastify, Prisma, PostgreSQL, pgvector, Redis, BullMQ), React 19 (TypeScript, TanStack Router/Query, Tailwind CSS v4) on the client app, plus a separate admin panel for user management, vault curation and system alerts. The concept has been validated in multiple meetings with agro-industrial professionals, with consistently positive feedback. Currently a semifinalist at Emprende U 2026, featured in La Gaceta (Tucumán)."
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
      items: {
        utn:          "Bachelor's in Artificial Intelligence",
        utnSub:       "UBP — Universidad Blas Pascal · 1st semester in progress",
        nextjs:       "Next.js App Router & Server Components",
        systemDesign: "System Design & Scalable Architectures",
        postgres:     "PostgreSQL — advanced queries & performance",
        litElement:   "Lit Element 3 — Web Components Design System"
      }
    }
  }
};

const es = {
  translation: {
    about: {
      p1: "¡Hola! Soy <0>Giuliana</0>. Soy Técnica Universitaria en Desarrollo Web (UNLaM, promedio 8.72) y actualmente curso la Licenciatura en Inteligencia Artificial en la UBP. Escribo código para resolver problemas reales del día a día y aportar valor tangible.",
      p2: "Trabajo en todo el stack: diseño APIs estructuradas en Node.js, Java o C#, modelo bases de datos relacionales y construyo interfaces interactivas con React o Angular."
    },
    trust: {
      // No se renderiza hoy: TrustSection.STATIC_REVIEWS está vacío mientras
      // esperamos los testimonios técnicos. Se conserva para no perder la copy.
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
      tabs: {
        professional: "Freelance",
        academic: "Proyectos Académicos"
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
        nido: {
          title: "Nido",
          category: "Plataforma de Gestión del Hogar",
          description: "Plataforma de gestión del hogar con recetas asistidas por IA, finanzas compartidas, gestión de tareas y escaneo OCR de tickets.",
          longDescription: "Proyecto final de carrera desarrollado en equipo de 8 personas, con MVP entregado en aproximadamente 2 meses. Trabajé full stack con Angular y .NET 9 bajo Clean Architecture. Nido centraliza la alacena, las recetas, las tareas y las finanzas de un hogar compartido, con recomendación de recetas por IA, un chat asistente de cocina dentro de cada receta, escaneo automático de tickets por OCR y comparación de precios entre supermercados."
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
          description: "Copiloto financiero para PyMEs agroindustriales — proyecto co-fundado y semifinalista de Emprende U 2026. Consejero RAG anclado a la bóveda de conocimiento del equipo, chat de operarios y dashboard analítico en tiempo real.",
          longDescription: "CosteAR es un copiloto financiero y sistema de gestión de costos diseñado para PyMEs agroindustriales. Proyecto co-fundado y desarrollado de punta a punta. El objetivo no es reemplazar al costista, sino ahorrarle tiempo: un proceso que antes era manual y en papel ahora está digitalizado, con un puente de comunicación directo entre el operario de planta y el costista. En lugar de apps de mensajería genéricas, los operarios envían datos de costos, facturas y remitos por un chat propio integrado, y un clasificador de IA los ordena para el analista, que valida todo desde un dashboard en tiempo real. El diferencial técnico es un consejero con RAG que responde preguntas de costeo usando únicamente la bóveda de conocimiento del equipo — un repositorio Obsidian/Markdown con las notas de clase de los profesores de costos — y nunca el conocimiento general del modelo. Las notas se trocean por headers en vez de por tamaño fijo, se embeddean con Voyage AI (voyage-4-large, 1024 dimensiones) y se guardan como vectores en pgvector sobre el PostgreSQL que ya existía, sin sumar una base vectorial aparte. Cada chunk lleva un hash SHA-256 de su contenido y el commit de la bóveda del que salió, así la reindexación es idempotente y cada respuesta se puede trazar hasta una nota concreta. En tiempo de consulta la pregunta se embeddea y se busca por distancia coseno contra un umbral de similitud, y el modelo está obligado a citar sus fuentes y a negarse cuando el contexto recuperado no alcanza — cada respuesta devuelve un nivel de confianza. Las preguntas que la bóveda no supo responder quedan registradas como señales para un pipeline nocturno que redacta propuestas de edición de la bóveda para que las apruebe un administrador humano, de modo que la base de conocimiento mejora con uso real y no a ciegas. Dos colas de trabajo en segundo plano (Redis + BullMQ) manejan las tareas que no pueden correr en el mismo request: sincronizar datos macroeconómicos externos y recalcular las estructuras de costos cuando esas variables cambian — las respuestas son inmediatas y los jobs fallidos reintentan solos. Multi-tenancy con row-level security, JWT RS256 con refresh tokens, y Sentry para error tracking y performance profiling tanto en la API como en el back-office interno. Clean Architecture en el backend (Node.js 22, Fastify, Prisma, PostgreSQL, pgvector, Redis, BullMQ), React 19 (TypeScript, TanStack Router/Query, Tailwind CSS v4) en la app del cliente, más un panel de administración aparte para gestión de usuarios, curaduría de la bóveda y alertas del sistema. La propuesta fue validada en múltiples reuniones con profesionales del sector agroindustrial, con devolución consistentemente positiva. Actualmente semifinalista en Emprende U 2026, con cobertura en La Gaceta (Tucumán)."
        },
        craftstudio: {
          title: "Craft Studio",
          category: "Sitio Web + Page Builder Propio",
          description: "Sitio del estudio de branding, más un CRM propio donde el equipo arma cada case study con bloques de layout tipados — sin código y sin depender de un desarrollador.",
          longDescription: "Sitio público y CRM privado para Craft Studio, estudio de identidad visual y comunicación estratégica en Buenos Aires. El sitio es React 19 + Vite con Three.js y React Three Fiber para las piezas 3D, GSAP y Lenis para el movimiento y el scroll suave, y Tailwind CSS v4 — secciones de servicios, proyectos, el estudio, Craft Lab y contacto, con los case studies y las entradas del lab leídos desde Supabase e imágenes servidas por Cloudinary. La mitad interesante es el CRM: en lugar de un ABM tradicional, es un page builder visual. Cada case study se compone con bloques de layout tipados — imagen sola, par de imágenes, imagen + texto, tríptico destacado, keywords, testimonios, métricas — y cada bloque expone control real de maquetado: split de columnas (50/50, 60/40, 70/30 y más), aspect ratio, de qué lado va la imagen principal, orden y apilado en mobile, alineación del texto, contenedor opcional y tipografía por breakpoint. El builder muestra un preview en vivo usando el mismo contrato de bloques que consume el sitio público, así lo que el equipo arma es exactamente lo que sale publicado. El estudio publica y reordena su propio portfolio sin necesitar un desarrollador."
        },
        fidalgoselect: {
          title: "AF Select",
          category: "Marketplace + CRM Propio",
          description: "Marketplace de vehículos de alta gama y propiedades con CRM propio — secciones de catálogo dinámicas, captación de leads y valuación de cartera en USD y ARS.",
          longDescription: "Dos aplicaciones desarrolladas de punta a punta para AF Select, un marketplace curado de vehículos de alta gama y propiedades en Tucumán, Salta y Buenos Aires. El sitio público es una SPA React 18 + Vite sobre Supabase: catálogo con filtros, fichas de detalle, vistas de mapa con Leaflet, formulario para vender, testimonios y flujos de consulta que abren WhatsApp con el mensaje ya redactado a partir del título, el precio y el link de la publicación. SEO técnico completo — meta tags dinámicos, datos estructurados JSON-LD, robots.txt, sitemap y verificación en Search Console. La segunda aplicación es un CRM privado que opera el propio cliente: gestor de publicaciones con carga y borrado de imágenes, administrador de secciones donde cada sección del catálogo define sus propios campos configurables, gestión del hero, bandeja de leads y un dashboard con KPIs de valuación del catálogo separados en USD y ARS con formato de precios es-AR. El cliente publica, edita y cotiza todo sin tocar código."
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
      items: {
        utn:          "Licenciatura en Inteligencia Artificial",
        utnSub:       "UBP — Universidad Blas Pascal · Cursando 1er cuatrimestre",
        nextjs:       "Next.js App Router & Server Components",
        systemDesign: "System Design & Arquitecturas Escalables",
        postgres:     "PostgreSQL — queries avanzadas y performance",
        litElement:   "Lit Element 3 — Design System con Web Components"
      }
    },
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