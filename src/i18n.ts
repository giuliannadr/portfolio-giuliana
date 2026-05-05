import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const en = {
  translation: {
    hero: {
      badge: "Open to new opportunities",
      title1: "FULL STACK",
      title2: "DEVELOPER",
      description: "Junior Full Stack Developer specializing in React, Node.js and TypeScript. I build scalable web applications end to end — from architecture to production deployment.",
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
          tooltip: "18 of 20 subjects completed at Universidad Nacional de La Matanza, graduating 2025."
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
          skills: "React / Angular / TypeScript / JavaScript (ES6+) / HTML5 / CSS3 / WebSockets",
          details: "Developing modern, reactive interfaces using next-gen frameworks, featuring dynamic rendering support (Razor, Thymeleaf) and robust styling with Bootstrap."
        },
        backend: {
          title: "Backend & Architecture",
          skills: "Node.js / .NET 9 / Java Spring Boot / PHP / Python / Microservices",
          details: "Building scalable systems under SOLID principles and Clean Code. Experience in distributed architectures and data persistence using ORMs like Prisma, Entity Framework, and Hibernate."
        },
        database: {
          title: "Databases & Data",
          skills: "PostgreSQL / SQL Server / MySQL / MongoDB (NoSQL)",
          details: "Design and optimization of relational and non-relational schemas, ensuring data integrity and efficiency in complex queries."
        },
        devops: {
          title: "DevOps & Methodologies",
          skills: "Docker / CI/CD (GitHub Actions) / Git / Vercel / RESTful APIs / Scrum",
          details: "Software lifecycle management through containerization, automated deployments, and agile methodologies for a professional and collaborative workflow."
        },
        languages: {
          title: "Languages & Communication",
          skills: "English (B2/C1) / Portuguese (Basic)",
          details: "Ability to work in international environments with an advanced level of technical and conversational English, facilitating communication within global teams."
        }
      }
    },
   whatsNext: {
  badge: "Growth mindset",
  title: "Always",
  titleItalic: "moving forward.",
  tags: {
    starting:   "Incoming 2027",
    exploring:  "Exploring",
    studying:   "Studying",
    practicing: "Practicing",
  },
  items: {
    utn:        "Information Systems Engineering — UTN",
    utnSub:     "Universidad Tecnológica Nacional · Entrance course: 2026 · Degree start: 2027",
    nextjs:     "Next.js App Router & Server Components",
    systemDesign: "System Design & Scalable Architectures",
    postgres:   "PostgreSQL — advanced queries & performance",
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
      description: "Desarrolladora Full Stack especializada en React, Node.js y TypeScript. Construyo aplicaciones web escalables de punta a punta — desde la arquitectura hasta el deploy en producción.",
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
          tooltip: "18 de 20 materias promocionadas en la Universidad Nacional de La Matanza, egreso 2025."
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
          skills: "React / Angular / TypeScript / JavaScript (ES6+) / HTML5 / CSS3 / WebSockets",
          details: "Desarrollo de interfaces modernas y reactivas utilizando frameworks de última generación, con soporte para renderizado dinámico (Razor, Thymeleaf) y estilos robustos con Bootstrap."
        },
        backend: {
          title: "Backend & Arquitectura",
          skills: "Node.js / .NET 9 / Java Spring Boot / PHP / Python / Microservicios",
          details: "Construcción de sistemas escalables bajo principios SOLID y Clean Code. Experiencia en arquitecturas distribuidas y persistencia de datos con ORMs como Prisma, Entity Framework y Hibernate."
        },
        database: {
          title: "Bases de Datos & Data",
          skills: "PostgreSQL / SQL Server / MySQL / MongoDB (NoSQL)",
          details: "Diseño y optimización de esquemas relacionales y no relacionales, garantizando la integridad de los datos y la eficiencia en consultas complejas."
        },
        devops: {
          title: "DevOps & Metodologías",
          skills: "Docker / CI/CD (GitHub Actions) / Git / Vercel / APIs RESTful / Scrum",
          details: "Gestión del ciclo de vida del software mediante contenedores, automatización de despliegues y metodologías ágiles para un flujo de trabajo profesional y colaborativo."
        },
        languages: {
          title: "Idiomas & Comunicación",
          skills: "Inglés (B2/C1) / Portugués (Básico)",
          details: "Capacidad para trabajar en entornos internacionales con un nivel avanzado de inglés técnico y conversacional, facilitando la comunicación en equipos globales."
        }
      }
    },
    whatsNext: {
  badge: "Crecimiento continuo",
  title: "Siempre",
  titleItalic: "en movimiento.",
  tags: {
    starting:   "Ingreso 2027",
    exploring:  "Explorando",
    studying:   "Estudiando",
    practicing: "Practicando",
  },
  items: {
    utn:        "Ingeniería en Sistemas de la Información — UTN",
    utnSub:     "Universidad Tecnológica Nacional · Curso de ingreso: 2026 · Inicio carrera: 2027",
    nextjs:     "Next.js App Router & Server Components",
    systemDesign: "System Design & Arquitecturas Escalables",
    postgres:   "PostgreSQL — queries avanzadas y performance",
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