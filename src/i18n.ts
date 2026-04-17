import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const en = {
  translation: {
  hero: {
  badge: "Available for new ideas",
  title1: "CRAFTING YOUR",
  title2: "DIGITAL ESSENCE.",
  description: "I design and develop custom web experiences where aesthetics and technology meet. My approach is simple: walking alongside you to create a site that truly reflects the heart of your project.",
  viewWork: "View my work",
  contact: "Let's talk"
},
  profileCard: {
  role: "Hi! I'm Giuli, and I'm ready to work together to transform your business."
},
"about": {
    "badge": "Development & Design",
    "title": "Technical Engineering,",
    "titleItalic": "aesthetics with soul.",
    "p1": "Hi! I'm <0>Giuliana</0>. I'm finishing my degree in Web Development, a journey where I've learned that my true strength lies in <1>merging backend logic with a unique visual sensitivity</1>.",
    "p2": "I work with a stack including <1>React, Angular, Java, and .NET</1>. I focus on building real-world, functional solutions, prioritizing code quality as much as user experience. My goal is to add value through digital products that not only run flawlessly but also carry a polished visual identity using tools like Affinity.",
    "stats": {
      "exp": "Jr.",
      "expLabel": "Level",
      "dedication": "100%",
      "dedicationLabel": "Dedication"
    }
},
"trust": {
  "badge": "Quality Assurance",
  "title": "Impactful projects,",
  "titleFaded": "precision code.",
  "description": "I get involved in every stage of development to ensure the final product exceeds both technical and visual expectations.",
  "metrics": {
    "speed": { 
      "label": "Performance", 
      "value": "Optimized", 
      "tooltip": "Focused on Core Web Vitals to ensure minimal load times and a seamless user experience." 
    },
    "direct": { 
      "label": "Transparency", 
      "value": "Effective", 
      "tooltip": "Clear communication and constant technical progress reporting throughout the development cycle." 
    },
    "modern": { 
      "label": "Modern Stack", 
      "value": "Scalable", 
      "tooltip": "Architectures built with leading technologies that guarantee security and easy long-term maintenance." 
    }
  },
  "testimonials": {
    "miri": { 
      "role": "La Quinta Miri — Client", 
      "text": "Giuliana immediately understood the warmth I wanted to convey. Since we launched the web, inquiries have become more professional and the booking process is much smoother." 
    },
    "camila": { 
      "role": "Unik — Creative Director", 
      "text": "Moving from a static portfolio to an interactive website changed how the market perceives us. Giuliana achieved a high-level digital identity with top-tier animations." 
    },
    "iara": { 
      "role": "Unik — Business Strategy", 
      "text": "We were looking for professional and direct integration. Giuliana provided a flawless solution that optimized our new client acquisition flow." 
    }
  }
},
process: {
  "badge": "Technical Workflow",
  "title": "From concept,",
  "titleItalic": "to deployment.",
  "quote": "\"Solid architecture and thorough planning are the foundation of a successful digital product.\"",
  "steps": {
    "step1": {
      "title": "Requirements & Analysis",
      "description": "I analyze project needs to define the ideal architecture. I don't write code without first understanding the technical and functional impact of the product.",
      "tags": ["Roadmap", "Tech definition", "Goals"]
    },
    "step2": {
      "title": "Architecture & Prototyping",
      "description": "I define the data structure and user flow. I use Affinity to design high-fidelity interfaces that serve as a blueprint before development begins.",
      "tags": ["UI/UX Design", "Structure", "Validation"]
    },
    "step3": {
      "title": "Development & Testing",
      "description": "I implement the solution using a modern, scalable stack. I apply Clean Code best practices and conduct testing to ensure bug-free delivery.",
      "tags": ["Full Stack Dev", "Code Quality", "Optimization"]
    },
    "step4": {
      "title": "Deployment & Maintenance",
      "description": "Product launch in production environments (like Vercel/Azure). I ensure the system is autonomous and provide support for future scalability.",
      "tags": ["Deployment", "Tech Support", "Scalability"]
    }
  }
},
  projects: {
  "subtitle": "Selected Works",
  "title": "Technical quality,",
  "titleFaded": "business results.",
  "tabs": {
    "professional": "Freelance",
    "academic": "Academic Projects"
  },
  "labels": {
    "challenge": "Technical Challenge",
    "stack": "Core Stack",
    "github": "View on GitHub",
    "live": "Live Site",
    "viewProcess": "View Design Process",
    "viewWork": "View Final Web"
  },
  "items": {
    "unik": {
      "title": "Unik Agency",
      "category": "Frontend Development",
      "description": "Migration from static assets (Canva) to high-performance interactive web platform.",
      "longDescription": "I led the digital transition for Unik agency, transforming a static portfolio into a seamless web experience. I implemented advanced animations with Framer Motion and optimized performance to achieve minimal load times, elevating brand perception for their corporate clients."
    },
    "miri": {
      "title": "La Quinta Miri",
      "category": "Full Stack & SEO",
      "description": "Full-scale digitization and direct contact system for the tourism sector.",
      "longDescription": "I developed a custom digital solution for a vacation complex. The project ranged from UI design to search engine optimization (Local SEO) and the integration of direct booking channels, professionalizing lead acquisition without relying on external platforms."
    },
    "trivia": {
      "title": "Distributed Trivia Engine",
      "category": "Backend Engineering",
      "description": "Real-time multiplayer platform with distributed session synchronization.",
      "longDescription": "A high-complexity technical project focused on distributed systems. I implemented real-time game logic via WebSockets and Spring MVC, ensuring data consistency across multiple concurrent clients."
    },
    "hardware": {
      "title": "Enterprise Inventory Hub",
      "category": "Full Stack Development",
      "description": "Inventory management system with RESTful architecture and RBAC.",
      "longDescription": "Development of an administrative e-commerce platform. I designed the Role-Based Access Control (RBAC) and internal APIs under REST standards, using Sequelize for MySQL persistence management."
    },
    "nlp": {
      "title": "AI Semantic Engine",
      "category": "Software Architecture",
      "description": "Natural Language Processing (NLP) platform for automated assessment.",
      "longDescription": "Implementation of a semantic engine under .NET 9. I worked on the persistence layer with Entity Framework and data processing logic for dynamic analytical report generation."
    }
  }
},
   
  tech: {
    "subtitle": "Tech Stack",
    "title": "Tools &",
    "titleItalic": "Technologies",
    "categories": {
      "frontend": {
        "title": "Frontend & Web",
        "skills": "React / Angular / TypeScript / JavaScript (ES6+) / HTML5 / CSS3 / WebSockets",
        "details": "Developing modern, reactive interfaces using next-gen frameworks, featuring dynamic rendering support (Razor, Thymeleaf) and robust styling with Bootstrap."
      },
      "backend": {
        "title": "Backend & Architecture",
        "skills": "Node.js / .NET 9 / Java Spring Boot / PHP / Python / Microservices",
        "details": "Building scalable systems under SOLID principles and Clean Code. Experience in distributed architectures and data persistence using ORMs like Prisma, Entity Framework, and Hibernate."
      },
      "database": {
        "title": "Databases & Data",
        "skills": "PostgreSQL / SQL Server / MySQL / MongoDB (NoSQL)",
        "details": "Design and optimization of relational and non-relational schemas, ensuring data integrity and efficiency in complex queries."
      },
      "devops": {
        "title": "DevOps & Methodologies",
        "skills": "Docker / CI/CD (GitHub Actions) / Git / Vercel / RESTful APIs / Scrum",
        "details": "Software lifecycle management through containerization, automated deployments, and agile methodologies for a professional and collaborative workflow."
      },
      "languages": {
        "title": "Languages & Communication",
        "skills": "English (B2/C1) / Portuguese (Basic)",
        "details": "Ability to work in international environments with an advanced level of technical and conversational English, facilitating communication within global teams."
      }
    }
  }
},
   
   footer: {
  "status": "Available for new projects",
  "titleLine1": "Let's work",
  "titleLine2": "together.",
  "location": "Buenos Aires, Argentina",
  "backToTop": "Back to top",
  "emailSubject": "Contact from your Portfolio"
}
  
};

const es = {
  translation: {
   hero: {
  badge: "Disponible para nuevas ideas",
  title1: "CREANDO TU",
  title2: "ESENCIA DIGITAL.", // Esta palabra cambiará lentamente a naranja
  description: "Diseño y desarrollo experiencias web a medida donde la estética y la técnica se encuentran. Mi enfoque es simple: acompañarte en el proceso para crear un sitio que refleje la esencia de tu proyecto.",
  viewWork: "Ver mis trabajos",
  contact: "Hablemos de tu idea"
},
    profileCard: {
  role: "¡Hola! Soy Giuli, y estoy lista para que trabajemos juntos en transformar tu negocio."
},
  
about: {
    "badge": "Desarrollo y Diseño",
    "title": "Ingeniería técnica,",
    "titleItalic": "estética con alma.",
    "p1": "¡Hola! Soy <0>Giuliana</0>. Estoy en la etapa final de mi formación como Desarrolladora Web, un camino donde descubrí que mi verdadera pasión es <1>unir la lógica de backend con una sensibilidad visual única</1>.",
    "p2": "Trabajo con un stack que incluye <1>React, Angular, Node.js, Java y .NET</1>. Me enfoco en crear soluciones reales y funcionales, cuidando la calidad del código tanto como la experiencia del usuario. Mi objetivo es aportar valor a través de productos digitales que no solo funcionen bien, sino que tengan una identidad visual cuidada desde herramientas como Affinity.",
    "stats": {
      "exp": "Jr.",
      "expLabel": "Nivel",
      "dedication": "100%",
      "dedicationLabel": "Compromiso"
    }
},
trust: {
  "badge": "Garantía de calidad",
  "title": "Proyectos con impacto,",
  "titleFaded": "código de precisión.",
  "description": "Me involucro en cada etapa del desarrollo para asegurar que el producto final supere las expectativas técnicas y visuales.",
  "metrics": {
    "speed": { 
      "label": "Performance", 
      "value": "Optimizado", 
      "tooltip": "Enfoque en Core Web Vitals para asegurar tiempos de carga mínimos y una experiencia fluida." 
    },
    "direct": { 
      "label": "Transparencia", 
      "value": "Efectiva", 
      "tooltip": "Comunicación clara y reporte de avances técnicos constantes durante todo el ciclo de desarrollo." 
    },
    "modern": { 
      "label": "Stack Moderno", 
      "value": "Escalable", 
      "tooltip": "Arquitecturas construidas con tecnologías líderes que garantizan seguridad y fácil mantenimiento a futuro." 
    }
  },
  "testimonials": {
    "miri": { 
      "role": "La Quinta Miri — Client", 
      "text": "Giuliana entendió enseguida la calidez que quería transmitir. Desde que lanzamos la web, las consultas se profesionalizaron y el proceso de reserva es mucho más fluido." 
    },
    "camila": { 
      "role": "Unik — Creative Director", 
      "text": "Pasar de un portfolio estático a una web interactiva cambió cómo nos percibe el mercado. Giuliana logró una identidad digital con animaciones de alto nivel." 
    },
    "iara": { 
      "role": "Unik — Business Strategy", 
      "text": "Buscábamos una integración directa y profesional. Giuliana nos dio una solución impecable que optimizó el flujo de llegada de nuevos clientes." 
    }
  }
},
process: {
  "badge": "Workflow técnico",
  "title": "Del concepto,",
  "titleItalic": "al despliegue.",
  "quote": "\"La arquitectura sólida y la planificación son la base de un producto digital exitoso.\"",
  "steps": {
    "step1": {
      "title": "Requerimientos & Análisis",
      "description": "Analizo las necesidades del proyecto para definir la arquitectura ideal. No escribo código sin antes entender el impacto técnico y funcional del producto.",
      "tags": ["Roadmap", "Definición técnica", "Objetivos"]
    },
    "step2": {
      "title": "Arquitectura & Prototipado",
      "description": "Defino la estructura de datos y el flujo de usuario. Utilizo Affinity para diseñar interfaces de alta fidelidad que sirven como blueprint antes del desarrollo.",
      "tags": ["UI/UX Design", "Estructura", "Validación"]
    },
    "step3": {
      "title": "Desarrollo & Testing",
      "description": "Implemento la solución utilizando un stack moderno y escalable. Aplico buenas prácticas de Clean Code y realizo pruebas para garantizar un código libre de errores.",
      "tags": ["Full Stack Dev", "Code Quality", "Optimization"]
    },
    "step4": {
      "title": "Despliegue & Mantenimiento",
      "description": "Lanzamiento del producto en entornos de producción (como Vercel/Azure). Aseguro que el sistema sea autónomo y brindo soporte para futuras escalabilidades.",
      "tags": ["Deployment", "Soporte técnico", "Escalabilidad"]
    }
  }
},
   projects: {
  "subtitle": "Trabajos Seleccionados",
  "title": "Calidad técnica,",
  "titleFaded": "resultados de negocio.",
  "tabs": {
    "professional": "Freelance",
    "academic": "Proyectos Académicos"
  },
  "labels": {
    "challenge": "Desafío Técnico",
    "stack": "Stack Principal",
    "github": "Ver en GitHub",
    "live": "Sitio en Vivo",
    "viewProcess": "Ver Proceso de Diseño",
    "viewWork": "Ver Web Final"
  },
  "items": {
    "unik": {
      "title": "Unik Agency",
      "category": "Frontend Development",
      "description": "Migración de activo estático (Canva) a plataforma web interactiva de alto rendimiento.",
      "longDescription": "Lideré la transición digital de la agencia Unik, transformando un portfolio estático en una experiencia web fluida. Implementé animaciones avanzadas con Framer Motion y optimicé el rendimiento logrando tiempos de carga mínimos, elevando la percepción de marca frente a sus clientes corporativos."
    },
    "miri": {
      "title": "La Quinta Miri",
      "category": "Full Stack & SEO",
      "description": "Digitalización integral y sistema de contacto directo para sector turístico.",
      "longDescription": "Desarrollé una solución digital a medida para un complejo vacacional. El proyecto incluyó desde el diseño de interfaz hasta el posicionamiento en motores de búsqueda (SEO local) y la integración de canales de reserva directos, profesionalizando la captación de leads sin depender de plataformas externas."
    },
    "trivia": {
      "title": "Motor de Trivia Distribuido",
      "category": "Backend Engineering",
      "description": "Plataforma multijugador en tiempo real con sincronización de sesiones distribuida.",
      "longDescription": "Proyecto de alta complejidad técnica centrado en sistemas distribuidos. Implementé la lógica de juego real-time mediante WebSockets y Spring MVC, asegurando la consistencia de datos entre múltiples clientes concurrentes."
    },
    "hardware": {
      "title": "Enterprise Inventory Hub",
      "category": "Full Stack Development",
      "description": "Sistema de gestión de inventario con arquitectura RESTful y RBAC.",
      "longDescription": "Desarrollo de una plataforma administrativa de e-commerce. Diseñé el control de acceso basado en roles (RBAC) y las APIs de consumo interno bajo estándares REST, utilizando Sequelize para el manejo de persistencia en MySQL."
    },
    "nlp": {
      "title": "AI Semantic Engine",
      "category": "Software Architecture",
      "description": "Plataforma de procesamiento de lenguaje natural (NLP) para evaluación automatizada.",
      "longDescription": "Implementación de un motor semántico bajo .NET 9. Trabajé en la capa de persistencia con Entity Framework y en la lógica de procesamiento de datos para la generación dinámica de reportes analíticos."
    }
  }
},
 

  tech: {
    "subtitle": "Stack Tecnológico",
    "title": "Herramientas &",
    "titleItalic": "Tecnologías",
    "categories": {
      "frontend": {
        "title": "Frontend & Web",
        "skills": "React / Angular / TypeScript / JavaScript (ES6+) / HTML5 / CSS3 / WebSockets",
        "details": "Desarrollo de interfaces modernas y reactivas utilizando frameworks de última generación, con soporte para renderizado dinámico (Razor, Thymeleaf) y estilos robustos con Bootstrap."
      },
      "backend": {
        "title": "Backend & Arquitectura",
        "skills": "Node.js / .NET 9 / Java Spring Boot / PHP / Python / Microservicios",
        "details": "Construcción de sistemas escalables bajo principios SOLID y Clean Code. Experiencia en arquitecturas distribuidas y persistencia de datos con ORMs como Prisma, Entity Framework y Hibernate."
      },
      "database": {
        "title": "Bases de Datos & Data",
        "skills": "PostgreSQL / SQL Server / MySQL / MongoDB (NoSQL)",
        "details": "Diseño y optimización de esquemas relacionales y no relacionales, garantizando la integridad de los datos y la eficiencia en consultas complejas."
      },
      "devops": {
        "title": "DevOps & Metodologías",
        "skills": "Docker / CI/CD (GitHub Actions) / Git / Vercel / APIs RESTful / Scrum",
        "details": "Gestión del ciclo de vida del software mediante contenedores, automatización de despliegues y metodologías ágiles para un flujo de trabajo profesional y colaborativo."
      },
      "languages": {
        "title": "Idiomas & Comunicación",
        "skills": "Inglés (B2/C1) / Portugués (Básico)",
        "details": "Capacidad para trabajar en entornos internacionales con un nivel avanzado de inglés técnico y conversacional, facilitando la comunicación en equipos globales."
      }
    }
  },
   footer: {
  "status": "Disponible para nuevos proyectos",
  "titleLine1": "Trabajemos",
  "titleLine2": "juntos.",
  "location": "Buenos Aires, Argentina",
  "backToTop": "Volver arriba",
  "emailSubject": "Contacto desde tu Portfolio"
}
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en,
      es
    },
    lng: "es", 
    fallbackLng: "es",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;