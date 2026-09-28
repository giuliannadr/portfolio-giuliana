// Todo el texto del sitio vive acá, en los dos idiomas lado a lado.
// Regla: nada que no esté respaldado por un proyecto, el CV o un repo.

export type Lang = "es" | "en";
export type L = Record<Lang, string>;

export type ProjectLink = { label: L; href: string };

export type Featured = {
  id: string;
  name: string;
  image: { src: string; w: number; h: number; position?: string };
  context: L;
  summary: L;
  points: L[];
  stack: string[];
  links: ProjectLink[];
};

export type MoreProject = {
  id: string;
  name: string;
  image: { src: string; w: number; h: number; position?: string };
  context: L;
  summary: L;
  stack: string[];
  links: ProjectLink[];
};

export type ClientSite = { name: string; summary: L; href: string };

const site: L = { es: "Ver sitio", en: "Visit site" };
const code: L = { es: "Código", en: "Code" };
const frontendCode: L = { es: "Código frontend", en: "Frontend code" };
const backendCode: L = { es: "Código backend", en: "Backend code" };
const crmCode: L = { es: "Código del CRM", en: "CRM code" };

export const EMAIL = "giulianadiroccodev@gmail.com";
export const LINKEDIN = "https://linkedin.com/in/giulianadirocco";
export const GITHUB = "https://github.com/giuliannadr";
export const WHATSAPP = "5491128341223";
export const CV: L = { es: "/CV_Giuliana_DiRocco_ES.pdf", en: "/CV_Giuliana_DiRocco_EN.pdf" };

export const ui = {
  skip: { es: "Saltar al contenido", en: "Skip to content" },
  nav: {
    projects: { es: "Proyectos", en: "Projects" },
    experience: { es: "Experiencia", en: "Experience" },
    stack: { es: "Stack", en: "Stack" },
    contact: { es: "Contacto", en: "Contact" },
    switchTo: { es: "View in English", en: "Ver en español" },
    cv: { es: "CV", en: "CV" },
  },
  hero: {
    role: { es: "Desarrolladora full stack en Buenos Aires.", en: "Full stack developer based in Buenos Aires." },
    lead: {
      es: "Trabajo con React, Node.js y TypeScript, del modelo de datos al deploy. Cofundé Costear, una plataforma de costeo con IA para pymes argentinas, y armo CRMs a medida para que mis clientes publiquen su contenido sin depender de un desarrollador.",
      en: "I work with React, Node.js and TypeScript, from the data model to the deploy. I co-founded Costear, an AI costing platform for Argentine SMEs, and I build custom CRMs so my clients can publish their own content without needing a developer.",
    },
    projects: { es: "Ver proyectos", en: "See projects" },
    cv: { es: "Descargar CV", en: "Download CV" },
    status: {
      es: "Disponible para puestos full stack, remoto o en Buenos Aires.",
      en: "Open to full stack roles, remote or in Buenos Aires.",
    },
  },
  projects: {
    title: { es: "Proyectos", en: "Projects" },
    intro: {
      es: "Los cuatro trabajos que mejor muestran cómo resuelvo problemas: qué construí, qué decisiones técnicas tomé y dónde verlo andando.",
      en: "The four projects that best show how I solve problems: what I built, the technical decisions behind it, and where to see it running.",
    },
    solved: { es: "Lo que resolví", en: "What I solved" },
    moreTitle: { es: "Más proyectos", en: "More projects" },
    details: { es: "Ver detalle", en: "View details" },
    close: { es: "Cerrar", en: "Close" },
    prev: { es: "Proyecto anterior", en: "Previous project" },
    next: { es: "Proyecto siguiente", en: "Next project" },
    sitesTitle: { es: "Sitios para clientes", en: "Client websites" },
    sitesIntro: {
      es: "Sitios institucionales y landings, diseñados y desarrollados de punta a punta.",
      en: "Company sites and landing pages, designed and built end to end.",
    },
    newTab: { es: "(se abre en otra pestaña)", en: "(opens in a new tab)" },
  },
  experience: {
    title: { es: "Experiencia", en: "Experience" },
    education: { es: "Formación", en: "Education" },
  },
  stack: {
    title: { es: "Stack", en: "Stack" },
    intro: {
      es: "Todo lo que figura acá lo usé en proyectos, no solo en cursos.",
      en: "Everything listed here I have used in actual projects, not just courses.",
    },
  },
  contact: {
    title: { es: "Hablemos", en: "Let's talk" },
    body: {
      es: "Si tenés un puesto o un proyecto en mente, escribime.",
      en: "If you have a role or a project in mind, write to me.",
    },
    copy: { es: "Copiar email", en: "Copy email" },
    copied: { es: "Email copiado", en: "Email copied" },
    whatsappMessage: {
      es: "¡Hola Giuliana! Vi tu portfolio y me gustaría hablar sobre una oportunidad.",
      en: "Hi Giuliana! I saw your portfolio and I'd like to talk about an opportunity.",
    },
  },
};

export const featured: Featured[] = [
  {
    id: "costear",
    name: "Costear",
    image: { src: "/costear-mockup.webp", w: 1600, h: 1000 },
    context: {
      es: "Startup que cofundé, semifinalista de Emprende U 2026. En producción con su primer cliente desde agosto de 2026.",
      en: "Startup I co-founded, semifinalist at Emprende U 2026. In production with its first client since August 2026.",
    },
    summary: {
      es: "Plataforma de costeo para pymes argentinas que actualiza los costos por inflación, dólar y paritarias con datos del BCRA y el INDEC. Los operarios cargan costos, facturas y remitos por Telegram o WhatsApp, un clasificador con IA los ordena y el dueño ve margen, contribución marginal y punto de equilibrio en un tablero.",
      en: "A costing platform for Argentine SMEs that keeps costs up to date with inflation, the exchange rate and wage agreements using BCRA and INDEC data. Operators submit costs, invoices and delivery notes over Telegram or WhatsApp, an AI classifier files them, and the owner sees margin, contribution margin and break-even on a dashboard.",
    },
    points: [
      {
        es: "Un asesor con RAG que responde solo con la base de conocimiento del equipo: cita la nota de la que sale cada respuesta y se niega a contestar cuando no tiene respaldo.",
        en: "A RAG advisor that answers only from the team's knowledge base: it cites the note behind every answer and refuses when nothing supports one.",
      },
      {
        es: "Búsqueda híbrida (pgvector y texto completo sobre el mismo PostgreSQL) con reranking de Voyage AI, y un set dorado de preguntas que corre en CI y frena el merge si la calidad baja.",
        en: "Hybrid search (pgvector plus full-text on the same PostgreSQL) with Voyage AI reranking, and a golden question set that runs in CI and blocks the merge if quality drops.",
      },
      {
        es: "Motor de cálculo con decimal.js, sin floats en montos: costeo variable, punto de equilibrio y capacidad ociosa, con paquetes por rubro como avícola y construcción modular. Redis y BullMQ recalculan sin bloquear la API.",
        en: "A calculation engine built on decimal.js, with no floats in amounts: variable costing, break-even and idle capacity, with industry packages such as poultry and modular construction. Redis and BullMQ recalculate without blocking the API.",
      },
      {
        es: "Multi-tenant con row-level security y un rol de Postgres sin BYPASSRLS, JWT RS256 con refresh tokens, Sentry y más de 2.000 tests automatizados en CI.",
        en: "Multi-tenant with row-level security and a Postgres role without BYPASSRLS, RS256 JWTs with refresh tokens, Sentry, and over 2,000 automated tests in CI.",
      },
    ],
    stack: ["Node.js 22", "Fastify", "Prisma", "PostgreSQL", "pgvector", "Redis", "BullMQ", "React 19", "TanStack Router", "Tailwind CSS"],
    links: [
      { label: site, href: "https://coste-ar.com" },
      { label: frontendCode, href: "https://github.com/SantiagoBriz/CosteAR-frontend" },
      { label: backendCode, href: "https://github.com/giuliannadr/CosteAR-backend" },
    ],
  },
  {
    id: "craftstudio",
    name: "Craft Studio",
    image: { src: "/craftstudio-preview.webp", w: 1600, h: 1000 },
    context: { es: "Cliente freelance. Sitio público y CRM propio.", en: "Freelance client. Public site and custom CRM." },
    summary: {
      es: "Sitio para un estudio de identidad de marca de Buenos Aires, con trabajo 3D en Three.js, y un CRM donde el equipo arma y publica sus casos de estudio sin pasar por un desarrollador.",
      en: "A site for a brand identity studio in Buenos Aires, with 3D work in Three.js, plus a CRM where the team composes and publishes its own case studies without a developer.",
    },
    points: [
      {
        es: "El CRM es un editor visual: cada caso se compone con nueve tipos de bloque, como imagen sola, par de imágenes, imagen con texto, testimonios o métricas.",
        en: "The CRM is a visual page builder: each case study is composed from nine block types, such as single image, image pair, image with text, testimonials or stats.",
      },
      {
        es: "Cada bloque controla la división de columnas, la relación de aspecto, el orden en mobile y la tipografía por breakpoint, con vista previa en vivo.",
        en: "Every block controls column split, aspect ratio, mobile ordering and per-breakpoint typography, with a live preview.",
      },
      {
        es: "El CRM comparte el esquema de bloques del sitio público, guardado en Supabase, y las imágenes se sirven desde Cloudinary.",
        en: "The CRM shares the public site's block schema, stored in Supabase, and images are served through Cloudinary.",
      },
    ],
    stack: ["React 19", "TypeScript", "Three.js", "React Three Fiber", "GSAP", "Supabase", "Cloudinary"],
    links: [
      { label: site, href: "https://craftstudio.com.ar/" },
      { label: code, href: "https://github.com/CraftStudioAR/CraftStudio" },
      { label: crmCode, href: "https://github.com/CraftStudioAR/CraftStudio-CRM" },
    ],
  },
  {
    id: "afselect",
    name: "Fidalgo Select",
    image: { src: "/fidalgoselect-preview.webp", w: 1600, h: 1000 },
    context: { es: "Cliente freelance. Marketplace y CRM propio.", en: "Freelance client. Marketplace and custom CRM." },
    summary: {
      es: "Marketplace de autos y propiedades de alta gama en Tucumán, Salta y Buenos Aires. El cliente publica, edita y cotiza todo desde un CRM hecho a medida.",
      en: "A marketplace for high-end cars and properties across Tucumán, Salta and Buenos Aires. The client publishes, edits and prices everything from a custom CRM.",
    },
    points: [
      {
        es: "Catálogo con filtros, mapas con Leaflet y consultas que abren WhatsApp con el título, el precio y el link de la publicación ya escritos.",
        en: "Filterable catalog, Leaflet maps, and enquiries that open WhatsApp with the listing's title, price and link already written.",
      },
      {
        es: "En el CRM, cada sección del catálogo define sus propios campos. Incluye bandeja de leads y carga de imágenes.",
        en: "In the CRM, each catalog section defines its own fields. It includes a leads inbox and image uploads.",
      },
      {
        es: "Un tablero con la valuación del catálogo separada en dólares y pesos.",
        en: "A dashboard with the catalog's valuation split into US dollars and pesos.",
      },
      {
        es: "SEO técnico: meta tags dinámicos, JSON-LD, sitemap y Search Console.",
        en: "Technical SEO: dynamic meta tags, JSON-LD, sitemap and Search Console.",
      },
    ],
    stack: ["React 18", "JavaScript", "Supabase", "PostgreSQL", "Leaflet", "Tailwind CSS"],
    links: [
      { label: site, href: "https://fidalgoselect.com/" },
      { label: code, href: "https://github.com/AFSelection/AFSelection" },
      { label: crmCode, href: "https://github.com/AFSelection/AFSelection-CRM" },
    ],
  },
  {
    id: "nido",
    name: "Nido",
    image: { src: "/nido-mockup.webp", w: 1600, h: 900 },
    context: { es: "Proyecto final de la tecnicatura, en equipo de 8. Trabajé full stack.", en: "Final degree project, team of 8. I worked full stack." },
    summary: {
      es: "App para organizar un hogar compartido: qué cocinar, qué comprar, qué hay en la alacena y cómo se reparten los gastos. Sacamos el MVP en dos meses.",
      en: "An app for running a shared household: what to cook, what to buy, what is in the pantry and how expenses are split. We shipped the MVP in two months.",
    },
    points: [
      {
        es: "Asistente de recetas con IA, planificador de comidas y lista de compras.",
        en: "An AI recipe assistant, a meal planner and a shopping list.",
      },
      {
        es: "Escaneo de tickets con OCR para cargar la compra en la alacena sin tipear.",
        en: "OCR receipt scanning to add groceries to the pantry without typing.",
      },
      {
        es: "Finanzas compartidas del hogar, con los gastos de cada integrante.",
        en: "Shared household finances, tracking what each member spends.",
      },
      {
        es: "Backend en .NET 9 con Clean Architecture sobre PostgreSQL y frontend en Angular.",
        en: ".NET 9 backend with Clean Architecture on PostgreSQL, and an Angular frontend.",
      },
    ],
    stack: ["Angular", ".NET 9", "C#", "PostgreSQL", "Clean Architecture"],
    links: [
      { label: site, href: "https://nidoapp.online" },
      { label: frontendCode, href: "https://github.com/nicolassbon/nido-frontend" },
      { label: backendCode, href: "https://github.com/nicolassbon/nido-backend" },
    ],
  },
];

export const more: MoreProject[] = [
  {
    id: "9669",
    name: "9669 Club",
    image: { src: "/9669-preview.webp", w: 1080, h: 1350, position: "center 55%" },
    context: { es: "Proyecto propio, en desarrollo.", en: "Personal project, in development." },
    summary: {
      es: "Streaming en vivo para eventos: los invitados transmiten desde el celular por WebRTC, sin instalar nada, y un admin elige hasta cuatro cámaras para el proyector.",
      en: "Live streaming for events: guests broadcast from their phones over WebRTC, no install needed, and an admin picks up to four feeds for the projector.",
    },
    stack: ["LiveKit", "WebRTC", "React", "Vite", "Next.js 14", "pnpm workspaces"],
    links: [
      { label: { es: "Ver panel", en: "View panel" }, href: "https://av-admin-dashboard.vercel.app" },
      { label: code, href: "https://github.com/giuliannadr/9669club" },
    ],
  },
  {
    id: "muda",
    name: "MUDA",
    image: { src: "/muda-mockup.webp", w: 1600, h: 1200 },
    context: { es: "Cliente freelance.", en: "Freelance client." },
    summary: {
      es: "Sitio y panel de administración para un estudio creativo de moda. Modelos y fotógrafos se postulan desde el sitio, y al aceptar la postulación el perfil se publica solo.",
      en: "Site and admin panel for a creative fashion studio. Models and photographers apply on the site, and accepting an application publishes their profile automatically.",
    },
    stack: ["React", "TypeScript", "Supabase", "Cloudinary"],
    links: [
      { label: site, href: "https://mudaagcy.com/" },
      { label: code, href: "https://github.com/Muda-Studio/MUDA" },
    ],
  },
  {
    id: "pulseguard",
    name: "PulseGuard",
    image: { src: "/pulseguard.webp", w: 1437, h: 920, position: "center top" },
    context: { es: "Challenge técnico de una semana para un proceso de selección.", en: "One-week take-home challenge for a hiring process." },
    summary: {
      es: "Monitoreo de uptime con alertas por email, Discord o Slack, y auditorías de commits de GitHub con la API de Gemini que marcan riesgos como inyección SQL o credenciales expuestas.",
      en: "Uptime monitoring with email, Discord or Slack alerts, plus GitHub commit audits using the Gemini API that flag risks such as SQL injection or exposed credentials.",
    },
    stack: ["Next.js", "NestJS", "TypeScript", "Prisma", "PostgreSQL", "Gemini API"],
    links: [
      { label: site, href: "https://pulseguard-frontend.vercel.app/" },
      { label: frontendCode, href: "https://github.com/giuliannadr/pulseguard-frontend" },
      { label: backendCode, href: "https://github.com/giuliannadr/pulseguard-backend" },
    ],
  },
];

export const clientSites: ClientSite[] = [
  {
    name: "Luciana Thibaut",
    summary: {
      es: "Portfolio de una ingeniera civil, con láminas de planos navegables por especialidad.",
      en: "Portfolio for a civil engineer, with drawing sheets browsable by discipline.",
    },
    href: "https://lucianathibaut.vercel.app/",
  },
  {
    name: "The Magical Duo",
    summary: { es: "Agencia de viajes a Disney, Universal y el Caribe.", en: "Travel agency for Disney, Universal and the Caribbean." },
    href: "https://themagicalduo.com/",
  },
  {
    name: "Emme Digital",
    summary: { es: "Agencia de marketing digital.", en: "Digital marketing agency." },
    href: "https://www.emmedigital.com.ar/",
  },
  {
    name: "Unik",
    summary: {
      es: "Agencia de publicidad que pasó de un portfolio en Canva a un sitio en Next.js.",
      en: "Advertising agency that moved from a Canva portfolio to a Next.js site.",
    },
    href: "https://somosunik.vercel.app/",
  },
  {
    name: "La Quinta Miri",
    summary: {
      es: "Alquiler de una quinta en Ituzaingó, con SEO local y consultas directas.",
      en: "Country house rental in Ituzaingó, with local SEO and direct enquiries.",
    },
    href: "https://laquintamiri.vercel.app/",
  },
  {
    name: "Hidrorescate",
    summary: {
      es: "Servicio técnico de bombas de agua, con formulario de prediagnóstico y contacto por WhatsApp.",
      en: "Water pump repair service, with a pre-diagnosis form and WhatsApp contact.",
    },
    href: "https://hidrorescate.com.ar/",
  },
];

export type Job = { from: L; to: L; role: L; org: L; body: L };

export const jobs: Job[] = [
  {
    from: { es: "Sep 2026", en: "Sep 2026" },
    to: { es: "hoy", en: "now" },
    role: { es: "Cofundadora", en: "Co-founder" },
    org: { es: "Heacky", en: "Heacky" },
    body: {
      es: "App que desarrollo con un socio para que los entrenadores personales compartan con cada cliente su rutina siempre actualizada y, si quieren, un plan de alimentación. Más adelante va a sumar pasos, sueño y otras métricas desde el smartwatch del cliente. Backend en Java 21 y Spring Boot con Clean Architecture, web en React. Está en etapa inicial.",
      en: "An app I'm building with a partner so personal trainers can share an always up-to-date routine with each client, plus an optional meal plan. Later it will add steps, sleep and other metrics from the client's smartwatch. Java 21 and Spring Boot backend with Clean Architecture, React web app. Early stage.",
    },
  },
  {
    from: { es: "2026", en: "2026" },
    to: { es: "hoy", en: "now" },
    role: { es: "Cofundadora", en: "Co-founder" },
    org: { es: "Costear", en: "Costear" },
    body: {
      es: "Plataforma de costeo con IA para pymes argentinas, semifinalista de Emprende U 2026 y en producción con su primer cliente. Trabajo en el backend y en el asesor con RAG, y soy la responsable del dominio de costeo: reviso y apruebo los cambios del motor de costos.",
      en: "An AI costing platform for Argentine SMEs, semifinalist at Emprende U 2026 and in production with its first client. I work on the backend and the RAG advisor, and I own the costing domain: I review and approve changes to the cost engine.",
    },
  },
  {
    from: { es: "Dic 2025", en: "Dec 2025" },
    to: { es: "hoy", en: "now" },
    role: { es: "Desarrolladora full stack", en: "Full stack developer" },
    org: { es: "Freelance", en: "Freelance" },
    body: {
      es: "Sitios y sistemas a medida para estudios, agencias y comercios: arquitectura, frontend, APIs, CRMs propios y deploy en Vercel.",
      en: "Custom sites and systems for studios, agencies and small businesses: architecture, frontend, APIs, custom CRMs and deployment on Vercel.",
    },
  },
  {
    from: { es: "Ago 2024", en: "Aug 2024" },
    to: { es: "Mar 2026", en: "Mar 2026" },
    role: { es: "Mentora técnica", en: "Technical mentor" },
    org: { es: "Estudiantes de la UNLaM", en: "UNLaM students" },
    body: {
      es: "Planes de estudio y code reviews en JavaScript, Java, React, Node.js y SQL, con foco en código limpio, Git y diseño de bases de datos.",
      en: "Study plans and code reviews in JavaScript, Java, React, Node.js and SQL, focused on clean code, Git and database design.",
    },
  },
];

export type Study = { when: L; title: L; org: string; note: L };

export const studies: Study[] = [
  {
    when: { es: "2024 a 2026", en: "2024 to 2026" },
    title: { es: "Técnica Universitaria en Desarrollo Web", en: "Associate degree in Web Development" },
    org: "UNLaM",
    note: { es: "Egresada con promedio 8,72 y las 20 materias aprobadas.", en: "Graduated with an 8.72 GPA, all 20 courses passed." },
  },
  {
    when: { es: "2026 a dic 2027", en: "2026 to Dec 2027" },
    title: { es: "Licenciatura en Inteligencia Artificial", en: "Bachelor's in Artificial Intelligence" },
    org: "Universidad Blas Pascal",
    note: { es: "En curso, en modalidad asincrónica. Termino en diciembre de 2027.", en: "In progress, fully asynchronous. Graduating in December 2027." },
  },
  {
    when: { es: "Desde 2027", en: "Starting 2027" },
    title: { es: "Licenciatura en Ciberdefensa", en: "Bachelor's in Cyber Defense" },
    org: "Universidad de la Defensa Nacional (UNDEF)",
    note: { es: "Próximo paso: empiezo en 2027, en modalidad asincrónica.", en: "Next step: starting in 2027, fully asynchronous." },
  },
];

export const stackGroups: { title: L; items: L }[] = [
  {
    title: { es: "Frontend", en: "Frontend" },
    items: {
      es: "React, Next.js, TypeScript, Angular, TanStack Router y Query, Zustand, Tailwind CSS, Three.js",
      en: "React, Next.js, TypeScript, Angular, TanStack Router and Query, Zustand, Tailwind CSS, Three.js",
    },
  },
  {
    title: { es: "Backend", en: "Backend" },
    items: {
      es: "Node.js, Fastify, NestJS, Java con Spring Boot, C# con .NET 9, APIs REST",
      en: "Node.js, Fastify, NestJS, Java with Spring Boot, C# with .NET 9, REST APIs",
    },
  },
  {
    title: { es: "Datos", en: "Data" },
    items: {
      es: "PostgreSQL, Prisma, Supabase con RLS, Redis y BullMQ, MySQL, SQL Server",
      en: "PostgreSQL, Prisma, Supabase with RLS, Redis and BullMQ, MySQL, SQL Server",
    },
  },
  {
    title: { es: "IA", en: "AI" },
    items: {
      es: "RAG con Voyage AI y pgvector, API de Gemini. Desarrollo con agentes: Claude Code, Antigravity y dos agentes de Codex orquestados sobre PRs y CI",
      en: "RAG with Voyage AI and pgvector, Gemini API. Agentic development: Claude Code, Antigravity and two orchestrated Codex agents working through PRs and CI",
    },
  },
  {
    title: { es: "Infraestructura", en: "Infrastructure" },
    items: { es: "Vercel, Railway, GitHub Actions, Docker, Sentry", en: "Vercel, Railway, GitHub Actions, Docker, Sentry" },
  },
  {
    title: { es: "Idiomas", en: "Languages" },
    items: { es: "Español nativo, inglés B2 (upper intermediate)", en: "Spanish (native), English B2 (upper intermediate)" },
  },
];
