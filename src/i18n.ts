import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const en = {
  translation: {
    hero: {
      badge: "Open to new opportunities",
      title1: "FULL STACK",
      title2: "DEVELOPER",
      description: "Full Stack Developer specializing in TypeScript, Angular and React. I transform business requirements into technical solutions within agile teams — from component architecture to production deployment.",
      viewWork: "View my projects",
      downloadCV: "Download CV",
      contact: "Let's talk"
    },
    profileCard: {
      role: "Hi! I'm Giuliana — a Full Stack Developer with a GPA of 8.72 and 3 production projects shipped."
    },
    about: {
      badge: "Full Stack Development",
      title: "Clean code,",
      titleItalic: "scalable solutions.",
      p1: "Hi! I'm <0>Giuliana</0>. I'm finishing my degree in Web Development, a journey where I've learned that my true strength lies in <1>merging solid backend architecture with clean, functional frontend experiences</1>.",
      p2: "I work with React, Node.js, TypeScript, Angular, Java and .NET, focusing on scalable architecture, code quality and clean APIs. My goal is to deliver digital products that are technically sound, maintainable and built to last.",
      stats: {
        exp: "8.72",
        expLabel: "GPA",
        dedication: "3",
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
          value: "3",
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
          longDescription: "I developed a custom digital solution for a vacation complex. The project ranged from UI design to search engine optimization (Local SEO) and the integration of direct booking channels, professionalizing lead acquisition without relying on external platforms."
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
        aura: {
          title: "Aura DJ Management System",
          category: "Full Stack — Turborepo Monorepo",
          description: "Business management platform for a DJ agency built as a Turborepo monorepo with 3 Next.js 15 apps.",
          longDescription: "End-to-end business management system for a DJ agency. Turborepo monorepo with 3 Next.js 15 (App Router) applications sharing a PostgreSQL database via Drizzle ORM on Supabase. Features: role-based access (facundo, aura_admin, aura_member), two-round booking system with unique tokens, client event portal, content CMS, and availability calendar. Supabase Auth with Row Level Security. In development."
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
          description: "Cross-platform project management app — web, desktop and mobile from one codebase.",
          longDescription: "Single React 19/TypeScript codebase running on web (Vercel), desktop (Electron for Win/Mac/Linux) and mobile (Capacitor for Android/iOS). Supabase backend with PostgreSQL, Auth, Storage and Row Level Security. Zustand for global state, GitHub Actions pipelines for Electron releases and Android builds. PWA support. In development."
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
        frontend: {
          title: "Frontend & Web",
          skills: "Angular 21 / Angular Signals / React 18 / Next.js 15 / Lit Element / TypeScript / JavaScript ES6+ / Tailwind CSS v4 / Framer Motion / Zustand / Vite / PWA",
          details: "Component-based development with Angular 21 (Signals), React 18 and Lit Element (Web Components). SSR with Next.js 15, fluid animations with Framer Motion, state management with Zustand and internationalization with react-i18next."
        },
        backend: {
          title: "Backend & Architecture",
          skills: "Node.js / Java Spring Boot / Spring Framework 4+ / Spring MVC / ASP.NET Core (.NET 9) / Supabase / WebRTC / Vercel Functions / PHP",
          details: "Scalable systems under Clean Architecture, SOLID and TDD. REST APIs with JWT, OAuth 2.0 and RBAC security. Supabase RLS, WebRTC for real-time features. Unit testing with JUnit and xUnit. Scrum with analysts, QAs and tech leads."
        },
        database: {
          title: "Databases & Data",
          skills: "PostgreSQL / MySQL / SQL Server / MongoDB / Firebase Firestore — Prisma / Drizzle ORM / Sequelize / Hibernate / Entity Framework Core",
          details: "Relational and non-relational schema design. ORM experience with Prisma, Drizzle ORM, Sequelize, Hibernate and Entity Framework Core — ensuring data integrity and query efficiency across complex systems."
        },
        devops: {
          title: "DevOps & Tooling",
          skills: "Git / GitHub Actions / Docker / Vercel / CI/CD / Electron / Capacitor (Android & iOS) / Core Web Vitals / Turborepo",
          details: "Automated pipelines with GitHub Actions, containerization with Docker and deploy on Vercel. Cross-platform development with Electron and Capacitor. Performance monitoring via Core Web Vitals and monorepo management with Turborepo."
        },
        languages: {
          title: "Languages & Communication",
          skills: "English (B2/C1) / Portuguese (Basic)",
          details: "Advanced technical and conversational English — able to work in international teams, write documentation and participate in code reviews fully in English."
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
    utn:        "Bachelor's in Data Science",
    utnSub:     "Starting August 2026",
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
      description: "Desarrolladora Full Stack especializada en TypeScript, Angular y React. Transformo requerimientos de negocio en soluciones técnicas dentro de equipos ágiles — desde la arquitectura de componentes hasta el deploy en producción.",
      viewWork: "Ver mis proyectos",
      downloadCV: "Descargar CV",
      contact: "Hablemos"
    },
    profileCard: {
      role: "¡Hola! Soy Giuliana — Desarrolladora Full Stack con promedio 8.72 y 3 proyectos en producción."
    },
    about: {
      badge: "Desarrollo Full Stack",
      title: "Código limpio,",
      titleItalic: "soluciones escalables.",
      p1: "¡Hola! Soy <0>Giuliana</0>. Estoy en la etapa final de mi formación como Desarrolladora Web, un camino donde descubrí que mi verdadera fortaleza está en <1>combinar arquitectura backend sólida con experiencias frontend limpias y funcionales</1>.",
      p2: "Trabajo con React, Node.js, TypeScript, Angular, Java y .NET, con foco en arquitectura escalable, calidad de código y APIs limpias. Mi objetivo es entregar productos digitales técnicamente sólidos, mantenibles y construidos para durar.",
      stats: {
        exp: "8.72",
        expLabel: "Promedio",
        dedication: "3",
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
          value: "3",
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
          longDescription: "Desarrollé una solución digital a medida para un complejo vacacional. El proyecto incluyó desde el diseño de interfaz hasta el posicionamiento en motores de búsqueda (SEO local) y la integración de canales de reserva directos, profesionalizando la captación de leads sin depender de plataformas externas."
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
          description: "App de gestión de proyectos multiplataforma — web, desktop y mobile desde un solo codebase.",
          longDescription: "Un único codebase React 19/TypeScript que corre en web (Vercel), desktop (Electron para Win/Mac/Linux) y mobile (Capacitor para Android/iOS). Backend Supabase con PostgreSQL, Auth, Storage y Row Level Security. Zustand para estado global, pipelines de GitHub Actions para releases de Electron y builds Android. Soporte PWA. En desarrollo."
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
        frontend: {
          title: "Frontend & Web",
          skills: "Angular 21 / Angular Signals / React 18 / Next.js 15 / Lit Element / TypeScript / JavaScript ES6+ / Tailwind CSS v4 / Framer Motion / Zustand / Vite / PWA",
          details: "Desarrollo basado en componentes con Angular 21 (Signals), React 18 y Lit Element (Web Components). SSR con Next.js 15, animaciones fluidas con Framer Motion, estado global con Zustand e internacionalización con react-i18next."
        },
        backend: {
          title: "Backend & Arquitectura",
          skills: "Node.js / Java Spring Boot / Spring Framework 4+ / Spring MVC / ASP.NET Core (.NET 9) / Supabase / WebRTC / Vercel Functions / PHP",
          details: "Sistemas escalables bajo Clean Architecture, SOLID y TDD. APIs REST con seguridad JWT, OAuth 2.0 y RBAC. Supabase RLS, WebRTC para funcionalidades en tiempo real. Pruebas unitarias con JUnit y xUnit. Colaboración Scrum con analistas, QAs y tech leads."
        },
        database: {
          title: "Bases de Datos & Data",
          skills: "PostgreSQL / MySQL / SQL Server / MongoDB / Firebase Firestore — Prisma / Drizzle ORM / Sequelize / Hibernate / Entity Framework Core",
          details: "Diseño de esquemas relacionales y no relacionales. Experiencia con ORMs: Prisma, Drizzle ORM, Sequelize, Hibernate y Entity Framework Core — garantizando integridad de datos y eficiencia en consultas de sistemas complejos."
        },
        devops: {
          title: "DevOps & Herramientas",
          skills: "Git / GitHub Actions / Docker / Vercel / CI/CD / Electron / Capacitor (Android & iOS) / Core Web Vitals / Turborepo",
          details: "Pipelines automatizados con GitHub Actions, contenedores con Docker y deploy en Vercel. Desarrollo multiplataforma con Electron y Capacitor. Monitoreo de performance con Core Web Vitals y gestión de monorepos con Turborepo."
        },
        languages: {
          title: "Idiomas & Comunicación",
          skills: "Inglés (B2/C1) / Portugués (Básico)",
          details: "Inglés técnico y conversacional avanzado — capaz de trabajar en equipos internacionales, escribir documentación y participar en code reviews completamente en inglés."
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
    utn:        "Licenciatura en Ciencias de Datos",
    utnSub:     "Inicio: agosto 2026",
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