import { useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { SPOTS_LIGHT } from "@/lib/textGradients";

const TIMELINE = [
  {
    num: "01",
    color: "#CC1500",
    from: { es: "Dic 2025", en: "Dec 2025" },
    to:   { es: "Presente", en: "Present"  },
    role: { es: "Desarrolladora Web Full-Stack", en: "Full-Stack Web Developer" },
    ctx:  { es: "Freelance",                     en: "Freelance"                },
    body: {
      es: "Transformación de requerimientos de negocio en soluciones técnicas: plataformas web y e-commerce con React, TypeScript y Node.js de punta a punta. Co-fundadora de CosteAR — startup B2B semifinalista de Emprende U 2026. GitFlow, CI/CD con GitHub Actions y documentación de APIs REST bajo Scrum.",
      en: "Business requirements into technical solutions: web platforms and e-commerce with React, TypeScript and Node.js end to end. Co-founder of CosteAR — B2B startup semifinalist at Emprende U 2026. GitFlow, CI/CD with GitHub Actions and REST API documentation under Scrum.",
    },
    tags: ["React", "TypeScript", "Node.js", "Next.js", "GitHub Actions", "Vercel"],
  },
  {
    num: "02",
    color: "#CC1500",
    from: { es: "Ago 2024", en: "Aug 2024" },
    to:   { es: "Presente", en: "Present" },
    role: { es: "Mentora Técnica en Desarrollo Web", en: "Web Development Mentor" },
    ctx:  { es: "Particular · UNLaM",               en: "Private · UNLaM"        },
    body: {
      es: "Diseño de itinerarios en algoritmos, estructuras de datos, JavaScript, Java, React, Node.js y SQL para estudiantes universitarios. Code reviews con retroalimentación en Clean Code, Git y diseño relacional.",
      en: "Learning path design in algorithms, data structures, JavaScript, Java, React, Node.js and SQL for university students. Code reviews with Clean Code, Git and relational design feedback.",
    },
    tags: ["JavaScript", "Java", "React", "Node.js", "SQL", "Algorithms", "Git"],
  },
  {
    num: "03",
    color: "#CC1500",
    from: { es: "2024",     en: "2024"     },
    to:   { es: "Jul 2026", en: "Jul 2026" },
    role: { es: "Tecnicatura en Desarrollo Web", en: "Web Development Degree" },
    ctx:  { es: "UNLaM · 18/20 materias · Promedio 8.72 · Egreso julio 2026", en: "UNLaM · 18/20 subjects · GPA 8.72 · Graduating July 2026" },
    body: {
      es: "Carrera orientada al desarrollo full stack. Materias clave: Algoritmos y ED, POO, Bases de Datos Relacionales, Ingeniería de Software, Redes.",
      en: "Full stack-focused degree. Key subjects: Algorithms & DS, OOP, Relational Databases, Software Engineering, Networks.",
    },
    tags: ["Java", "Spring", "SQL", "Angular", ".NET", "Scrum"],
  },
];

export const ExperienceSection = () => {
  const { i18n } = useTranslation();
  const lang    = i18n.language === "en" ? "en" : "es";
  const ref     = useRef<HTMLElement>(null);

  const headline = lang === "en" ? "My journey."    : "Mi camino.";
  const italic   = lang === "en" ? "so far."        : "hasta ahora.";
  const badge    = lang === "en" ? "Experience"     : "Experiencia";

  return (
    <section ref={ref} id="experience" className="bg-[#F5F4F0] pt-0 pb-20 md:pb-28 px-5 sm:px-8 lg:px-10 relative">

      {/* Edge fades */}
      <div className="absolute inset-x-0 top-0 h-28 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, #F5F4F0, transparent)" }} />
      <div className="absolute inset-x-0 bottom-0 h-28 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top, #F5F4F0, transparent)" }} />

      {/* Label */}
      <div className="flex items-center gap-5 mb-14 relative z-10">
        <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#0A0A0A]/25" style={{ fontFamily: "Poppins, sans-serif" }}>03</span>
        <div className="h-px flex-1 bg-[#0A0A0A]/[0.08]" />
        <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#0A0A0A]/25" style={{ fontFamily: "Poppins, sans-serif" }}>{badge}</span>
      </div>

      {/* Headline */}
      <div className="mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="block font-black uppercase leading-[0.88]"
          style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(2.5rem, 6vw, 6.5rem)", letterSpacing: "-0.03em", backgroundImage: SPOTS_LIGHT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
        >
          {headline}
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="block font-black uppercase leading-[1.05] text-[#0A0A0A]/15 mt-1"
          style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.2rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
        >
          {italic}
        </motion.h2>
      </div>

      {/* ── DESKTOP: 3 columns in a row ── */}
      <div className="hidden lg:block relative z-10">
        {/* Horizontal connector line */}
        <div className="absolute top-[5px] left-0 right-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(to right, rgba(204,21,0,0.06) 0%, rgba(204,21,0,0.25) 15%, rgba(204,21,0,0.25) 85%, rgba(204,21,0,0.06) 100%)" }} />

        <div className="flex gap-10 xl:gap-14">
          {TIMELINE.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: i * 0.13, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 min-w-0 font-sans"
            >
              {/* Dot */}
              <motion.div
                className="w-3 h-3 rounded-full mb-7 shrink-0"
                style={{ background: item.color, boxShadow: `0 0 0 4px ${item.color}15` }}
                initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.13, type: "spring", stiffness: 300 }}
              />

              {/* Date */}
              <span
                className="block text-[9px] font-mono uppercase tracking-[0.25em] mb-2"
                style={{ color: item.color }}
              >
                {item.from[lang]} — {item.to[lang]}
              </span>

              {/* Role */}
              <h3
                className="font-black uppercase text-[#0A0A0A]/85 leading-tight mb-0.5"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(0.95rem, 1.4vw, 1.2rem)", letterSpacing: "-0.02em" }}
              >
                {item.role[lang]}
              </h3>

              {/* Context */}
              <p className="text-[9px] font-mono uppercase tracking-[0.22em] text-[#0A0A0A]/40 mb-4">
                {item.ctx[lang]}
              </p>

              {/* Body */}
              <p className="text-[#0A0A0A]/50 text-xs md:text-sm leading-relaxed mb-5">{item.body[lang]}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-[8px] font-mono uppercase tracking-[0.2em] px-2.5 py-1"
                    style={{ color: item.color, background: `${item.color}08`, border: `1px solid ${item.color}20` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── MOBILE: vertical timeline ── */}
      <div className="lg:hidden relative z-10 max-w-3xl">
        {TIMELINE.map((item, i) => (
          <motion.div
            key={item.num}
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, delay: i * 0.13, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex gap-7 pb-14 last:pb-0"
          >
            {/* Dot + vertical line */}
            <div className="flex flex-col items-center shrink-0 pt-1.5">
              <motion.div
                className="w-3 h-3 rounded-full shrink-0"
                style={{ background: item.color, boxShadow: `0 0 0 4px ${item.color}15` }}
                initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.13, type: "spring", stiffness: 300 }}
              />
              {i < TIMELINE.length - 1 && (
                <motion.div
                  className="w-px flex-1 mt-3 origin-top"
                  style={{ background: `linear-gradient(to bottom, rgba(204,21,0,0.18) 0%, transparent 100%)` }}
                  initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.13 }}
                />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <span
                className="inline-block text-[9px] font-mono uppercase tracking-[0.25em] mb-2"
                style={{ color: item.color }}
              >
                {item.from[lang]} — {item.to[lang]}
              </span>

              <h3
                className="font-black uppercase text-[#0A0A0A]/85 leading-tight mb-0.5"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1rem, 2.2vw, 1.4rem)", letterSpacing: "-0.02em" }}
              >
                {item.role[lang]}
              </h3>

              <p className="text-[9px] font-mono uppercase tracking-[0.22em] text-[#0A0A0A]/40 mb-3.5">
                {item.ctx[lang]}
              </p>

              <p className="text-[#0A0A0A]/50 text-xs md:text-sm leading-relaxed mb-4 max-w-xl">{item.body[lang]}</p>

              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-[8px] font-mono uppercase tracking-[0.2em] px-2.5 py-1"
                    style={{ color: item.color, background: `${item.color}08`, border: `1px solid ${item.color}20` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
