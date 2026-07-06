import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";


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
    from: { es: "Mar 2024", en: "Mar 2024" },
    to:   { es: "Jul 2026", en: "Jul 2026" },
    role: { es: "Tecnicatura en Desarrollo Web", en: "Web Development Degree" },
    ctx:  { es: "UNLaM · 18/20 materias",            en: "UNLaM · 18/20 subjects"     },
    body: {
      es: "Carrera universitaria de desarrollo full stack. Materias clave: Algoritmos y Estructuras de Datos, Programación Orientada a Objetos, Bases de Datos Relacionales, Ingeniería de Software y Redes.",
      en: "University full stack development degree. Key subjects: Algorithms & Data Structures, OOP, Relational Databases, Software Engineering, and Networks.",
    },
    tags: ["Java", "Spring", "SQL", "Angular", ".NET", "Scrum"],
  },
];

export const ExperienceSection = () => {
  const { t, i18n } = useTranslation();
  const lang    = i18n.language === "en" ? "en" : "es";
  const ref     = useRef<HTMLElement>(null);
  
  const [activeIndex, setActiveIndex] = useState(0);

  const headline = lang === "en" ? "My journey."    : "Mi camino.";
  const badge    = lang === "en" ? "Experience"     : "Experiencia";

  const activeItem = TIMELINE[activeIndex];

  return (
    <section ref={ref} id="experience" className="bg-[#F5F4F0] pt-0 pb-20 md:pb-32 px-5 sm:px-8 lg:px-10 relative">

      {/* Edge fades */}
      <div className="absolute inset-x-0 top-0 h-28 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, #F5F4F0, transparent)" }} />
      <div className="absolute inset-x-0 bottom-0 h-28 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top, #F5F4F0, transparent)" }} />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Label */}
        <div className="flex items-center gap-5 mb-14">
          <div className="flex items-center gap-2 font-mono text-[9px] text-[#CC1500] uppercase tracking-[0.25em]">
            <span>03</span>
            <span>//</span>
            <span>JOURNEY</span>
          </div>
          <div className="h-px flex-1 bg-[#0A0A0A]/[0.08]" />
          <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#0A0A0A]/25" style={{ fontFamily: "Poppins, sans-serif" }}>{badge}</span>
        </div>

        {/* Headline */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="block font-black uppercase leading-[0.88] text-[#0A0A0A]"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(2.3rem, 6vw, 5.5rem)", letterSpacing: "-0.02em" }}
          >
            <span className="mr-3 select-none" style={{ WebkitTextStroke: "1.2px #0A0A0A", WebkitTextFillColor: "transparent", color: "transparent" }}>
              {lang === "en" ? "MY" : "MI"}
            </span>
            <span className="text-[#0A0A0A]">
              {lang === "en" ? "JOURNEY." : "CAMINO."}
            </span>
          </motion.h2>
        </div>

        {/* Interactive Split-Panel Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Left Column: Vertical Tabs Selector */}
          <div className="md:col-span-4 flex flex-col gap-3">
            {TIMELINE.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={item.num}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left p-5 border transition-all duration-300 flex flex-col gap-1.5 rounded-xl ${
                    isActive 
                      ? "bg-white border-[#0A0A0A]/[0.08] shadow-sm" 
                      : "border-transparent hover:bg-white/40 hover:border-[#0A0A0A]/[0.04]"
                  }`}
                >
                  <div className="flex justify-between items-center font-mono text-[9px] uppercase tracking-wider">
                    <span className={isActive ? "text-[#CC1500] font-black" : "text-[#0A0A0A]/40"}>
                      {item.from[lang]} — {item.to[lang]}
                    </span>
                    <span className={isActive ? "text-[#CC1500]/70" : "text-[#0A0A0A]/20"}>
                      {item.num}
                    </span>
                  </div>
                  <div 
                    className={`text-[12px] font-black uppercase tracking-wide transition-colors ${
                      isActive ? "text-[#0A0A0A]" : "text-[#0A0A0A]/45"
                    }`} 
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {item.ctx[lang]}
                  </div>
                  <div className={`text-[10px] truncate ${isActive ? "text-[#0A0A0A]/50 font-medium" : "text-[#0A0A0A]/35"}`}>
                    {item.role[lang]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Fiche Details with Smooth Transition */}
          <div className="md:col-span-8 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="border border-[#0A0A0A]/[0.08] bg-white/[0.02] p-8 md:p-10 rounded-2xl shadow-sm flex flex-col gap-6 relative"
              >
                {/* Coordinate / Info Header */}
                <div className="flex justify-between items-center pb-4 border-b border-[#0A0A0A]/[0.08] font-mono text-[9.5px]">
                  <div className="flex items-center gap-2 text-[#0A0A0A]/70 font-semibold uppercase">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#CC1500]" />
                    <span>{activeItem.ctx[lang]}</span>
                  </div>
                  <span className="text-[#0A0A0A]/35 uppercase tracking-wider">
                    {activeItem.from[lang]} — {activeItem.to[lang]}
                  </span>
                </div>

                {/* Role Title */}
                <div className="flex flex-col gap-1">
                  <h3 
                    className="font-black uppercase text-[#0A0A0A] leading-tight"
                    style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.1rem, 2vw, 1.45rem)", letterSpacing: "-0.01em" }}
                  >
                    {activeItem.role[lang]}
                  </h3>
                </div>

                {/* Description Body */}
                <p className="text-[#0A0A0A]/55 text-sm leading-relaxed max-w-2xl">
                  {activeItem.body[lang]}
                </p>

                {/* Stack Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#0A0A0A]/[0.06]">
                  {activeItem.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[9px] font-mono uppercase tracking-[0.2em] px-3 py-1.5"
                      style={{ color: "#CC1500", background: "rgba(204,21,0,0.06)", border: "1px solid rgba(204,21,0,0.15)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
