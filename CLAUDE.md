# Portfolio — Giuliana Di Rocco

## Contexto del proyecto
Portfolio personal orientado a conseguir empleo como Junior Full Stack Developer.
Stack: React + react-i18next (archivos de traducción en /src/i18n o similar).
El sitio tiene dos idiomas: español (es) y inglés (en).
SIEMPRE modificar ambos idiomas en paralelo cuando se toque cualquier texto.

## Audiencia objetivo
- Recruiters no técnicos: ven el hero, el about y los testimonios.
- Tech leads y CTOs: van directo a proyectos y al GitHub.
- ATS: indexan keywords técnicas del título y la descripción.

## Stack técnico del portfolio
- React
- react-i18next para internacionalización
- Framer Motion para animaciones
- Vercel para deploy

## Perfil profesional de Giuliana
- Junior Full Stack Developer especializada en React, Node.js y TypeScript
- Estudiante avanzada UNLaM (18/20 materias, promedio 8.72, egreso estimado 2025)
- Experiencia freelance desde enero 2025
- Mentora técnica desde 2024
- Inglés B2/C1
- GitHub: github.com/giuliannadr
- Portfolio: dev.giulianadirocco.com
- LinkedIn: linkedin.com/in/giulianadirocco

## Cambios pendientes — en orden de prioridad

### 🔴 CRÍTICO

**1. Hero — reescribir copy con foco en recruiter**
El copy actual está orientado a clientes freelance. Debe comunicar
quién es Giuliana como desarrolladora, no como proveedora de servicios.

Nuevo copy EN:
- Badge: "Open to new opportunities"
- Title1: "FULL STACK"
- Title2: "DEVELOPER"
- Description: "Junior Full Stack Developer specializing in React,
  Node.js and TypeScript. I build scalable web applications end to end —
  from architecture to production deployment."
- Botón primario: "View my projects"
- Botón secundario: "Download CV"
- Botón terciario: "Let's talk"

Nuevo copy ES:
- Badge: "Disponible para nuevas oportunidades"
- Title1: "DESARROLLADORA"
- Title2: "FULL STACK"
- Description: "Desarrolladora Full Stack especializada en React,
  Node.js y TypeScript. Construyo aplicaciones web escalables
  de punta a punta — desde la arquitectura hasta el deploy en producción."
- Botón primario: "Ver mis proyectos"
- Botón secundario: "Descargar CV"
- Botón terciario: "Hablemos"

**2. Profile card — reemplazar copy**
Actual: "Hi! I'm Giuli, and I'm ready to work together to transform
your business." → suena a agencia, no a desarrolladora buscando empleo.

Nuevo EN: "Hi! I'm Giuliana — a Full Stack Developer with a GPA of
8.72 and 3 production projects shipped."
Nuevo ES: "¡Hola! Soy Giuliana — Desarrolladora Full Stack con
promedio 8.72 y 3 proyectos en producción."

### 🟠 IMPORTANTE

**3. About — tres cambios**

a) Eliminar toda mención a "Affinity" — es una herramienta de diseño
   gráfico que confunde el perfil técnico.

b) Reemplazar el párrafo p2:
   EN: "I work with React, Node.js, TypeScript, Angular, Java and .NET,
   focusing on scalable architecture, code quality and clean APIs.
   My goal is to deliver digital products that are technically sound,
   maintainable and built to last."
   ES: "Trabajo con React, Node.js, TypeScript, Angular, Java y .NET,
   con foco en arquitectura escalable, calidad de código y APIs limpias.
   Mi objetivo es entregar productos digitales técnicamente sólidos,
   mantenibles y construidos para durar."

c) Reemplazar las stats:
   - Stat 1: valor "8.72" / label EN "GPA" / label ES "Promedio"
   - Stat 2: valor "3" / label EN "Production projects" / label ES "Proyectos en producción"

**4. Footer / Contact — agregar LinkedIn**
Agregar link a linkedin.com/in/giulianadirocco junto al email
en la sección de contacto y en el footer.

### 🟡 CUANDO ESTÉN LOS LINKS DE GITHUB

**5. Projects — agregar links de GitHub a proyectos académicos**
Los tres proyectos académicos (Distributed Trivia Engine,
Enterprise Inventory Hub, AI Semantic Engine) no tienen GitHub link.
Cuando Giuliana provea las URLs, agregarlas en el objeto de cada
proyecto en el i18n y en el componente de projects.

**6. Projects — agregar métricas de negocio a proyectos freelance**
- Unik: agregar métrica de impacto cuando esté disponible.
- La Quinta Miri: agregar métrica de reservas o tráfico cuando
  esté disponible.

## Reglas generales
- Nunca tocar el diseño visual, colores, tipografía ni animaciones.
- Solo modificar textos y lógica funcional.
- Siempre modificar EN y ES en paralelo — nunca uno sin el otro.
- Mantener la estructura exacta del objeto i18n existente.
- No agregar nuevas keys al i18n sin consultarlo primero.
- Antes de cada cambio, mostrar el diff y esperar confirmación.
- Usar siempre nombres de variables y estructura de componentes
  existentes — no renombrar ni refactorizar sin pedido explícito.