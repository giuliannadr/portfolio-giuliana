import { useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import { SPOTS_LIGHT } from "@/lib/textGradients";
import { DEPLOYED_COUNT } from "@/data/projectsData";

export const AboutSection = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "en" ? "en" : "es";
  const ref  = useRef<HTMLElement>(null);

  const headline = lang === "en" ? "About me." : "Sobre mí.";
  const italic   = lang === "en" ? "what makes me different." : "lo que me hace diferente.";
  const badge    = lang === "en" ? "About" : "Sobre mí";

  // Principles / Focus Areas (formerly Pillars)
  const principles = [
    {
      num: "01",
      title: lang === "en" ? "Academic Base" : "Base Académica",
      body: lang === "en" 
        ? "Degree in Web Development at UNLaM. 18 out of 20 subjects completed with an 8.72 GPA. Graduating in July 2026. Specialized in backend engineering, database modeling, and software architectures."
        : "Tecnicatura en Desarrollo Web en la UNLaM. 18 de 20 materias aprobadas con promedio de 8.72. Egreso estimado en julio 2026. Formación sólida en backend, bases de datos y arquitectura de software.",
    },
    {
      num: "02",
      title: lang === "en" ? "Production Shipped" : "Producción Real",
      body: lang === "en"
        ? `13 real-world projects deployed and running. Co-founder of CosteAR (B2B SaaS startup for agribusiness costs, semifinalist at Emprende U 2026). Active freelancer building robust web applications.`
        : `13 proyectos reales deployados y en producción. Co-fundadora de CosteAR (SaaS B2B para costos agroindustriales, semifinalista de Emprende U 2026). Freelancer activa creando apps estables y rápidas.`,
    },
    {
      num: "03",
      title: lang === "en" ? "Versatile Stack" : "Stack Versátil",
      body: lang === "en"
        ? "Fluent in React, Node.js, TypeScript, Angular, Java (Spring), C# (.NET 9), and SQL. I don't write code tied to a single framework; I pick the best tool for the problem at hand."
        : "Domino React, Node.js, TypeScript, Angular, Java (Spring), C# (.NET 9) y SQL. No me ato a un solo lenguaje; selecciono la herramienta ideal para solucionar el problema técnico.",
    },
  ];

  // Technical Fiche / Metadata
  const metadata = [
    { label: lang === "en" ? "GPA" : "Promedio", value: "8.72 / 10" },
    { label: lang === "en" ? "Graduation" : "Graduación", value: lang === "en" ? "July 2026" : "Julio 2026" },
    { label: lang === "en" ? "Degree" : "Carrera", value: "Desarrollo Web (UNLaM)" },
    { label: lang === "en" ? "Startup" : "Startup", value: "Co-founder @ CosteAR" },
    { label: lang === "en" ? "English" : "Inglés", value: "B2 / C1 Level" },
    { label: lang === "en" ? "Location" : "Ubicación", value: "Buenos Aires, ARG" },
  ];

  return (
    <section ref={ref} id="about" className="bg-[#F5F4F0] py-20 md:py-32 px-5 sm:px-8 lg:px-10 relative overflow-hidden">

      {/* Edge fades */}
      <div className="absolute inset-x-0 top-0 h-28 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, #F5F4F0, transparent)" }} />
      <div className="absolute inset-x-0 bottom-0 h-28 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top, #F5F4F0, transparent)" }} />

      {/* Label */}
      <div className="flex items-center gap-5 mb-14 relative z-10">
        <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#0A0A0A]/25" style={{ fontFamily: "Poppins, sans-serif" }}>02</span>
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

      {/* Redesigned Grid Layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-7xl mx-auto">
        
        {/* Left Column: Narrative + Principles */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          
          {/* Narrative paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <p className="font-medium text-[#0A0A0A]/75 leading-relaxed text-sm md:text-base" style={{ fontFamily: "Poppins, sans-serif" }}>
              <Trans 
                i18nKey="about.p1" 
                components={[
                  <strong className="text-black font-black" key="0" />, 
                  <span className="text-[#CC1500]" key="1" />
                ]} 
              />
            </p>
            <p className="text-[#0A0A0A]/55 leading-relaxed text-sm md:text-base">
              {t("about.p2")}
            </p>
          </motion.div>

          {/* Vertical principles list with thin dividers */}
          <div className="flex flex-col border-t border-[#0A0A0A]/[0.08]">
            {principles.map((pr, idx) => (
              <motion.div
                key={pr.num}
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="py-6 border-b border-[#0A0A0A]/[0.08] flex flex-col md:flex-row gap-4 md:gap-8 items-start"
              >
                <span className="font-mono text-xs font-black text-[#CC1500] tracking-wider shrink-0 md:pt-1">{pr.num}</span>
                <div className="flex-1">
                  <h3 className="font-black uppercase text-[#0A0A0A]/85 text-xs md:text-sm tracking-wider mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {pr.title}
                  </h3>
                  <p className="text-[#0A0A0A]/50 text-xs md:text-sm leading-relaxed">
                    {pr.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Right Column: Photo + Technical Fiche */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          
          {/* Photo frame with green status dot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative shrink-0">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden"
                style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.08), 0 8px 30px rgba(0,0,0,0.04)" }}>
                <img src="/giuliprofile.jpeg" alt="Giuliana Di Rocco"
                  className="w-full h-full object-cover object-center"
                  style={{ filter: "contrast(1.03) brightness(1.02)" }} />
              </div>
              
              {/* Status pill overlay */}
              <div className="absolute -bottom-3 right-4 bg-white px-3 py-1.5 rounded-full flex items-center gap-2 border border-[#0A0A0A]/[0.08] shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#0A0A0A]/50" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {lang === "en" ? "Open to work" : "Disponible"}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Technical Fiche Metadata Table */}
          <motion.div
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="border border-[#0A0A0A]/[0.08] bg-white/[0.02] p-6 rounded-2xl flex flex-col gap-4 shadow-sm"
          >
            <div className="flex items-center gap-3 pb-3 border-b border-[#0A0A0A]/[0.08]">
              <div className="w-2 h-2 rounded-full bg-[#CC1500]" />
              <span className="font-mono text-[10px] font-black uppercase tracking-wider text-[#0A0A0A]/70">
                {lang === "en" ? "TECHNICAL FICHE" : "FICHA TÉCNICA"}
              </span>
            </div>

            <div className="flex flex-col gap-3 font-mono text-xs">
              {metadata.map((item) => (
                <div key={item.label} className="flex justify-between items-baseline py-1.5 border-b border-[#0A0A0A]/[0.04] last:border-0 last:pb-0">
                  <span className="text-[#0A0A0A]/40 uppercase text-[10px]">{item.label}</span>
                  <span className="text-[#0A0A0A]/80 font-medium text-right max-w-[70%] truncate">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
};
