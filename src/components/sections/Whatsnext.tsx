import { useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const WhatsNext = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "en" ? "en" : "es";
  const ref = useRef<HTMLElement>(null);

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

      {/* Subtle morphing background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.035]">
        <div className="absolute w-[400px] h-[400px] bg-[#CC1500] blur-[100px] rounded-full -top-40 -left-40 animate-pulse" style={{ animationDuration: "12s" }} />
        <div className="absolute w-[450px] h-[450px] bg-[#7C3AED] blur-[120px] rounded-full -bottom-40 -right-20 animate-pulse" style={{ animationDuration: "16s" }} />
      </div>

      {/* Label */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Label */}
        <div className="flex items-center gap-5 mb-14">
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
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Horizontal timeline line (desktop) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="absolute top-[28px] left-[16.66%] right-[16.66%] h-[2px] bg-gradient-to-r from-[#10B981] via-[#CC1500] to-[#7C3AED] hidden md:block opacity-[0.25] origin-left z-0"
          />

          {/* Stations/Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative z-10">
            {STATIONS.map((item, idx) => {
              const isCompleted = item.num === "01";
              const isInProgress = item.num === "02";
              const isUpcoming = item.num === "03";

              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 * idx, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-row md:flex-col items-start gap-5 md:gap-0 relative"
                >
                  {/* Segmented local timeline line (mobile only) */}
                  {idx < STATIONS.length - 1 && (
                    <div 
                      className="absolute left-[27px] top-[28px] bottom-[-68px] w-[2px] md:hidden opacity-[0.25] z-0"
                      style={{
                        background: `linear-gradient(to bottom, ${item.color}, ${STATIONS[idx + 1].color})`
                      }}
                    />
                  )}

                  {/* Timeline node container */}
                  <div className="w-14 h-14 md:mx-auto md:mb-6 flex items-center justify-center shrink-0 relative bg-[#F5F4F0] rounded-full z-20">
                    {/* Status Indicator circle */}
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300"
                      style={{ 
                        borderColor: item.color,
                        backgroundColor: `${item.color}15`,
                        color: item.color,
                        borderStyle: isUpcoming ? "dashed" : "solid"
                      }}
                    >
                      {isCompleted && (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                      {isInProgress && (
                        <>
                          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                          <span className="absolute inset-0 rounded-full border-2 opacity-50 animate-ping pointer-events-none" style={{ borderColor: item.color }} />
                        </>
                      )}
                      {isUpcoming && (
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                      )}
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="flex-1 w-full bg-white/70 backdrop-blur-md border border-[#0A0A0A]/[0.05] rounded-2xl p-6 md:p-8 flex flex-col gap-4 shadow-[0_4px_20px_-4px_rgba(10,10,10,0.02)] transition-all duration-300 hover:shadow-[0_12px_30px_-6px_rgba(10,10,10,0.08)] hover:-translate-y-1 hover:border-[#0A0A0A]/10 group">
                    <div className="flex justify-between items-center font-mono text-[9px] uppercase tracking-wider pb-3 border-b border-[#0A0A0A]/[0.05]">
                      <span className="font-black" style={{ color: item.color }}>
                        {item.status[lang]}
                      </span>
                      <span className="text-[#0A0A0A]/30 font-black">
                        {item.num}
                      </span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <h3 
                        className="text-[14px] md:text-[15px] font-black uppercase text-[#0A0A0A] leading-snug tracking-tight font-display transition-colors duration-300 group-hover:text-[#CC1500]"
                      >
                        {item.title[lang]}
                      </h3>
                      <span className="text-[10px] md:text-[10.5px] font-mono text-[#0A0A0A]/40 font-semibold leading-tight">
                        {item.ctx}
                      </span>
                    </div>

                    <p className="text-[#0A0A0A]/55 text-[12.5px] leading-relaxed font-medium">
                      {item.body[lang]}
                    </p>

                    {item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#0A0A0A]/[0.05] mt-auto">
                        {item.tags.map(tag => (
                          <span
                            key={tag}
                            className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded"
                            style={{ 
                              color: item.color, 
                              backgroundColor: `${item.color}0D`, 
                              border: `1px solid ${item.color}18` 
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
