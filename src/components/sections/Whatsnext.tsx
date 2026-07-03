import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export const WhatsNext = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "en" ? "en" : "es";
  const ref = useRef<HTMLElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const badge = lang === "en" ? "Roadmap" : "Ruta";

  const STATIONS = [
    {
      num: "01",
      color: "#10B981",
      status: { es: "Completado", en: "Completed" },
      title:  { es: "Tecnicatura en Desarrollo Web", en: "Web Development Degree" },
      ctx:    "UNLaM",
      body: {
        es: "18 de 20 materias aprobadas con promedio de 8.72. Egreso estimado en julio 2026.",
        en: "18 out of 20 subjects completed with an 8.72 GPA. Graduating in July 2026.",
      },
      tags: [] as string[],
    },
    {
      num: "02",
      color: "#CC1500",
      status: { es: "En curso", en: "In Progress" },
      title:  { es: "Especialización & Arquitecturas", en: "Deepening Engineering & Design" },
      ctx:    lang === "en" ? "Freelance + self-directed study" : "Freelance + estudio autodidacta",
      body: {
        es: "Profundizando en diseño de sistemas, arquitectura de componentes y bases de datos mientras sigo shippeando proyectos reales.",
        en: "Deepening system design, component architecture and databases while shipping real projects.",
      },
      tags: [
        t("whatsNext.items.litElement"),
        t("whatsNext.items.nextjs"),
        t("whatsNext.items.systemDesign"),
        t("whatsNext.items.postgres"),
      ],
    },
    {
      num: "03",
      color: "#7C3AED",
      status: { es: "Siguiente", en: "Upcoming" },
      title:  { es: t("whatsNext.items.utn"), en: t("whatsNext.items.utn") },
      ctx:    t("whatsNext.items.utnSub"),
      body: {
        es: "Formación de posgrado en IA para complementar el perfil full stack con machine learning y sistemas inteligentes.",
        en: "Postgraduate AI training to complement the full stack profile with machine learning and intelligent systems.",
      },
      tags: [] as string[],
    },
  ];

  const activeItem = STATIONS[activeIndex];

  return (
    <section
      ref={ref}
      id="whatsnext"
      className="bg-[#F5F4F0] py-20 md:py-32 px-5 sm:px-8 lg:px-10 relative overflow-hidden"
    >

      {/* Edge fades */}
      <div className="absolute inset-x-0 top-0 h-28 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, #F5F4F0, transparent)" }} />
      <div className="absolute inset-x-0 bottom-0 h-28 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top, #F5F4F0, transparent)" }} />

      {/* Label */}
      <div className="flex items-center gap-5 mb-14 relative z-10">
        <div className="flex items-center gap-2 font-mono text-[9px] text-[#CC1500] uppercase tracking-[0.25em]">
          <span>07</span>
          <span>//</span>
          <span>ROADMAP</span>
        </div>
        <div className="h-px flex-1 bg-[#0A0A0A]/[0.08]" />
        <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#0A0A0A]/25" style={{ fontFamily: "Poppins, sans-serif" }}>
          {badge}
        </span>
      </div>

      {/* Headline */}
      <div className="mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="block font-black uppercase leading-[0.88] text-[#0A0A0A]"
          style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(2.3rem, 6vw, 5.5rem)", letterSpacing: "-0.02em" }}
        >
          <span className="mr-3 select-none" style={{ WebkitTextStroke: "1.2px #0A0A0A", WebkitTextFillColor: "transparent", color: "transparent" }}>
            {lang === "en" ? "WHAT'S" : "QUÉ"}
          </span>
          <span className="text-[#0A0A0A]">
            {lang === "en" ? "NEXT." : "SIGUE."}
          </span>
        </motion.h2>
      </div>

      {/* Interactive tabs + detail panel — same pattern as Experience */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 max-w-7xl mx-auto">

        {/* Left column: station selector */}
        <div className="md:col-span-4 flex flex-col gap-3">
          {STATIONS.map((item, idx) => {
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
                  <span className="font-black" style={{ color: isActive ? item.color : "rgba(10,10,10,0.4)" }}>
                    {item.status[lang]}
                  </span>
                  <span style={{ color: isActive ? `${item.color}B0` : "rgba(10,10,10,0.2)" }}>
                    {item.num}
                  </span>
                </div>
                <div
                  className={`text-[12px] font-black uppercase tracking-wide transition-colors ${
                    isActive ? "text-[#0A0A0A]" : "text-[#0A0A0A]/45"
                  }`}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {item.title[lang]}
                </div>
                <div className={`text-[10px] truncate ${isActive ? "text-[#0A0A0A]/50 font-medium" : "text-[#0A0A0A]/35"}`}>
                  {item.ctx}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right column: active station detail */}
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
              <div className="flex justify-between items-center pb-4 border-b border-[#0A0A0A]/[0.08] font-mono text-[9.5px]">
                <div className="flex items-center gap-2 text-[#0A0A0A]/70 font-semibold uppercase">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: activeItem.color }} />
                  <span>{activeItem.ctx}</span>
                </div>
                <span className="uppercase tracking-wider font-black" style={{ color: activeItem.color }}>
                  {activeItem.status[lang]}
                </span>
              </div>

              <h3
                className="font-black uppercase text-[#0A0A0A] leading-tight"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.1rem, 2vw, 1.45rem)", letterSpacing: "-0.01em" }}
              >
                {activeItem.title[lang]}
              </h3>

              <p className="text-[#0A0A0A]/55 text-sm leading-relaxed max-w-2xl">
                {activeItem.body[lang]}
              </p>

              {activeItem.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#0A0A0A]/[0.06]">
                  {activeItem.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[9px] font-mono uppercase tracking-[0.2em] px-3 py-1.5"
                      style={{ color: activeItem.color, background: `${activeItem.color}0F`, border: `1px solid ${activeItem.color}26` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
