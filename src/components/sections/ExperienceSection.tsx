import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import { SPOTS_DARK } from "@/lib/textGradients";

const BLOBS = [
  { color: "#CC1500", w: 380, x: "88%", y: "22%", op: 0.07, cls: "blob-1" },
  { color: "#7C3AED", w: 300, x: "5%",  y: "68%", op: 0.06, cls: "blob-2" },
  { color: "#06B6D4", w: 220, x: "52%", y: "92%", op: 0.04, cls: "blob-1" },
];

const TIMELINE = [
  {
    num: "01",
    color: "#CC1500",
    from: { es: "Dic 2025", en: "Dec 2025" },
    to:   { es: "Presente", en: "Present"  },
    role: { es: "Desarrolladora Web Full-Stack", en: "Full-Stack Web Developer" },
    ctx:  { es: "Freelance",                     en: "Freelance"                },
    body: {
      es: "Transformación de requerimientos de negocio en soluciones técnicas: plataformas web y e-commerce con React, TypeScript y Node.js de punta a punta. Optimización de performance en Vercel con reducción del 30% en tiempos de carga. GitFlow, CI/CD con GitHub Actions y documentación de APIs REST bajo Scrum.",
      en: "Business requirements into technical solutions: web platforms and e-commerce with React, TypeScript and Node.js end to end. Performance optimization on Vercel with 30% reduction in load times. GitFlow, CI/CD with GitHub Actions and REST API documentation under Scrum.",
    },
    tags: ["React", "TypeScript", "Node.js", "Next.js", "GitHub Actions", "Vercel"],
  },
  {
    num: "02",
    color: "#7C3AED",
    from: { es: "Ago 2024", en: "Aug 2024" },
    to:   { es: "Presente", en: "Present" },
    role: { es: "Mentora Técnica en Desarrollo Web", en: "Web Development Mentor" },
    ctx:  { es: "Particular · UNLaM",               en: "Private · UNLaM"        },
    body: {
      es: "Diseño de itinerarios en algoritmos, estructuras de datos, JavaScript, React y SQL para estudiantes universitarios. Code reviews con retroalimentación en Clean Code, Git y diseño relacional.",
      en: "Learning path design in algorithms, data structures, JavaScript, React and SQL for university students. Code reviews with Clean Code, Git and relational design feedback.",
    },
    tags: ["JavaScript", "React", "SQL", "Algorithms", "Git"],
  },
  {
    num: "03",
    color: "#06B6D4",
    from: { es: "2024",    en: "2024"    },
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
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const blobY   = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  const headline = lang === "en" ? "My journey."    : "Mi camino.";
  const italic   = lang === "en" ? "so far."        : "hasta ahora.";
  const badge    = lang === "en" ? "Experience"     : "Experiencia";

  return (
    <section ref={ref} id="experience" className="bg-[#0A0A0A] py-20 md:py-32 px-5 sm:px-8 lg:px-10 relative">

      {/* Edge fades */}
      <div className="absolute inset-x-0 top-0 h-28 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, #0A0A0A, transparent)" }} />
      <div className="absolute inset-x-0 bottom-0 h-28 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top, #0A0A0A, transparent)" }} />

      {/* Blobs */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: blobY }}>
        {BLOBS.map((b, i) => (
          <div key={i} className={`${b.cls} absolute blur-3xl`}
            style={{ background: b.color, width: b.w, height: b.w, left: b.x, top: b.y, opacity: b.op, transform: "translate(-50%,-50%)" }} />
        ))}
      </motion.div>

      {/* Label */}
      <div className="flex items-center gap-5 mb-14 relative z-10">
        <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white/25" style={{ fontFamily: "Poppins, sans-serif" }}>03</span>
        <div className="h-px flex-1 bg-white/[0.06]" />
        <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white/25" style={{ fontFamily: "Poppins, sans-serif" }}>{badge}</span>
      </div>

      {/* Headline */}
      <div className="mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="block font-black uppercase leading-[0.88]"
          style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(2.5rem, 6vw, 6.5rem)", letterSpacing: "-0.03em", backgroundImage: SPOTS_DARK, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
        >
          {headline}
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="block font-serif italic font-light leading-[1.05] text-white/20"
          style={{ fontSize: "clamp(2rem, 5vw, 5.5rem)" }}
        >
          {italic}
        </motion.h2>
      </div>

      {/* Timeline */}
      <div className="relative z-10 max-w-3xl">
        {TIMELINE.map((item, i) => (
          <motion.div
            key={item.num}
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, delay: i * 0.13, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex gap-7 md:gap-10 pb-14 last:pb-0"
          >
            {/* Dot + vertical line */}
            <div className="flex flex-col items-center shrink-0 pt-1.5">
              <motion.div
                className="w-3 h-3 rounded-full shrink-0"
                style={{ background: item.color, boxShadow: `0 0 0 4px ${item.color}20` }}
                initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.13, type: "spring", stiffness: 300 }}
              />
              {i < TIMELINE.length - 1 && (
                <motion.div
                  className="w-px flex-1 mt-3 origin-top"
                  style={{ background: `linear-gradient(to bottom, ${item.color}35, transparent)` }}
                  initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.13 }}
                />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <span
                className="inline-block text-[9px] font-black uppercase tracking-[0.25em] mb-2"
                style={{ fontFamily: "Poppins, sans-serif", color: item.color }}
              >
                {item.from[lang]} — {item.to[lang]}
              </span>

              <h3
                className="font-black uppercase text-white leading-tight mb-0.5"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1rem, 2.2vw, 1.4rem)", letterSpacing: "-0.02em" }}
              >
                {item.role[lang]}
              </h3>

              <p className="text-[9px] font-black uppercase tracking-[0.22em] text-white/25 mb-3.5" style={{ fontFamily: "Poppins, sans-serif" }}>
                {item.ctx[lang]}
              </p>

              <p className="text-white/40 text-sm leading-relaxed mb-4 max-w-xl">
                {item.body[lang]}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-[8px] font-black uppercase tracking-[0.2em] px-2.5 py-1"
                    style={{ fontFamily: "Poppins, sans-serif", color: item.color, background: `${item.color}10`, border: `1px solid ${item.color}22` }}
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
