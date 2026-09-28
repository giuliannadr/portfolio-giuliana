# Portfolio — Giuliana Di Rocco

## Contexto
Portfolio personal para conseguir empleo como desarrolladora full stack.
En vivo en dev.giulianadirocco.com (Vercel). Rediseñado en septiembre de 2026.

Audiencia:
- Recruiters: leen el hero y la experiencia en menos de un minuto.
- Tech leads: van a los case studies y a los repos.
- ATS / buscadores: meta tags y JSON-LD en `index.html`.

## Dónde está cada cosa
- Todo el texto: `src/content.ts`, con español e inglés juntos (`{ es, en }`).
- Idioma activo: `src/lang.tsx` (`useLang()` devuelve `lang`, `toggle` y `t`).
- Secciones: `src/components/` (Nav, Hero, Projects, Experience, Stack, Contact).
- Estilos y tokens: `src/index.css` (sin Tailwind; modo oscuro por `prefers-color-scheme`).
- Imágenes de proyectos: `public/*.webp`, máximo 1600 px de ancho.

## Criterio de contenido
- Cuatro proyectos destacados (case studies), tres en "Más proyectos" y el
  resto de los sitios de clientes como una línea con link en "Sitios para clientes".
- Landings, invitaciones y sitios institucionales nuevos van a "Sitios para clientes", no como cards.
- Nada que no esté respaldado por un proyecto, un repo o el CV. Sin métricas inventadas.
- El stack lista solo tecnologías usadas en proyectos.

## Reglas
- Siempre modificar ES y EN en paralelo.
- Verificar en navegador (desktop, mobile y modo oscuro) antes de subir.
- Si cambia algo del perfil (título, proyectos, links), revisar también el CV en `public/`
  y la meta description / JSON-LD de `index.html`.
