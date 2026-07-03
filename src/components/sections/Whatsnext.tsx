import { useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { CheckCircle2, PlayCircle, CalendarRange } from "lucide-react";

export const WhatsNext = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "en" ? "en" : "es";
  const ref = useRef<HTMLElement>(null);

  const badge = lang === "en" ? "Roadmap" : "Ruta";

  const learningItems = [
    { label: t("whatsNext.items.litElement"),    tag: t("whatsNext.tags.building") },
    { label: t("whatsNext.items.nextjs"),        tag: t("whatsNext.tags.exploring") },
    { label: t("whatsNext.items.systemDesign"),  tag: t("whatsNext.tags.studying") },
    { label: t("whatsNext.items.postgres"),      tag: t("whatsNext.tags.practicing") },
  ];

  return (
    <section ref={ref} id="whatsnext" className="bg-[#0F0F11] py-20 md:py-32 px-5 sm:px-8 lg:px-10 relative overflow-hidden">

      {/* Edge fades */}
      <div className="absolute inset-x-0 top-0 h-28 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, #0F0F11, transparent)" }} />
      <div className="absolute inset-x-0 bottom-0 h-28 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top, #0F0F11, transparent)" }} />

      {/* Label */}
      <div className="flex items-center gap-5 mb-14 relative z-10">
        <div className="flex items-center gap-2 font-mono text-[9px] text-[#CC1500] uppercase tracking-[0.25em]">
          <span>07</span>
          <span>//</span>
          <span>ROADMAP</span>
        </div>
        <div className="h-px flex-1 bg-white/10" />
        <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white/20" style={{ fontFamily: "Poppins, sans-serif" }}>
          {badge}
        </span>
      </div>

      {/* Headline */}
      <div className="mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="block font-black uppercase leading-[0.88] text-white"
          style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(2.3rem, 6vw, 5.5rem)", letterSpacing: "-0.02em" }}
        >
          <span className="mr-3 select-none" style={{ WebkitTextStroke: "1.2px rgba(255,255,255,0.9)", WebkitTextFillColor: "transparent", color: "transparent" }}>
            {lang === "en" ? "WHAT'S" : "QUÉ"}
          </span>
          <span className="text-white">
            {lang === "en" ? "NEXT." : "SIGUE."}
          </span>
        </motion.h2>
      </div>

      {/* Connected Vertical Pipeline Roadmap */}
      <div className="relative z-10 max-w-4xl mx-auto pl-7 md:pl-12">
        
        {/* Connected Vertical line */}
        <div className="absolute left-[9px] md:left-[13px] top-4 bottom-4 w-px bg-white/10" />

        <div className="flex flex-col gap-12">
          
          {/* Phase 1: Completed */}
          <motion.div
            initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col gap-2.5 pl-6 md:pl-10"
          >
            {/* Circle Node */}
            <div className="absolute left-[-24px] md:left-[-38px] top-1.5 w-[19px] h-[19px] rounded-full border border-emerald-500 bg-[#0F0F11] flex items-center justify-center z-20">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>

            {/* Header info */}
            <div className="flex items-center gap-3 font-mono text-[9px] text-emerald-400 uppercase tracking-widest">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{lang === "en" ? "PHASE 01 // COMPLETED" : "FASE 01 // COMPLETADO"}</span>
            </div>

            {/* Card Content */}
            <div className="border border-white/[0.06] bg-white/[0.01] p-5 rounded-2xl max-w-2xl font-mono text-xs flex flex-col gap-2">
              <div className="text-[10px] text-[#CC1500] font-black uppercase tracking-wider">
                {lang === "en" ? "DEGREE COMPLETED" : "CARRERA COMPLETADA"}
              </div>
              <h3 className="text-white/80 font-black text-sm font-sans tracking-wide uppercase leading-tight pt-1">
                {lang === "en" ? "Web Development Degree" : "Tecnicatura en Desarrollo Web"}
              </h3>
              <div className="flex justify-between items-baseline pt-2 border-t border-white/[0.04] text-[10px] text-white/40">
                <span>UNLaM</span>
                <span>18/20 {lang === "en" ? "Subjects" : "Materias"}</span>
              </div>
              <div className="flex justify-between items-baseline pt-1 text-[10px] text-white/40">
                <span>{lang === "en" ? "GPA / AVERAGE" : "PROMEDIO / RENDIMIENTO"}</span>
                <span className="text-emerald-400 font-bold">8.72 / 10</span>
              </div>
            </div>
          </motion.div>

          {/* Phase 2: In Progress */}
          <motion.div
            initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col gap-2.5 pl-6 md:pl-10"
          >
            {/* Circle Node (Pulsing) */}
            <div className="absolute left-[-24px] md:left-[-38px] top-1.5 w-[19px] h-[19px] rounded-full border border-[#CC1500] bg-[#0F0F11] flex items-center justify-center z-20">
              <div className="w-1.5 h-1.5 rounded-full bg-[#CC1500] animate-pulse" />
            </div>

            {/* Header info */}
            <div className="flex items-center gap-3 font-mono text-[9px] text-[#CC1500] uppercase tracking-widest">
              <PlayCircle className="w-3.5 h-3.5" />
              <span>{lang === "en" ? "PHASE 02 // IN PROGRESS" : "FASE 02 // EN CURSO"}</span>
            </div>

            {/* Card Content */}
            <div className="border border-[#CC1500]/25 bg-[#CC1500]/[0.01] p-5 rounded-2xl max-w-2xl flex flex-col gap-4">
              <div className="font-mono text-[10px] text-[#CC1500] font-black uppercase tracking-wider">
                {lang === "en" ? "SPECIALIZATION & FRONTIER TECH" : "ESPECIALIZACIÓN Y STACK AVANZADO"}
              </div>
              <h3 className="text-white/80 font-black text-sm uppercase tracking-wide leading-tight" style={{ fontFamily: "Poppins, sans-serif" }}>
                {lang === "en" ? "Deepening Engineering & Optimization" : "Profundizando Arquitecturas & Optimización"}
              </h3>
              
              {/* Grid list of technologies */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 border-t border-white/[0.04] pt-4 font-mono text-[10px]">
                {learningItems.map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-2.5 bg-white/[0.02] border border-white/[0.05] rounded-lg">
                    <span className="text-white/70">{item.label}</span>
                    <span className="text-[#CC1500]/70 text-[8px] font-black uppercase tracking-widest">{item.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Phase 3: Upcoming */}
          <motion.div
            initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col gap-2.5 pl-6 md:pl-10"
          >
            {/* Circle Node */}
            <div className="absolute left-[-24px] md:left-[-38px] top-1.5 w-[19px] h-[19px] rounded-full border border-white/20 bg-[#0F0F11] flex items-center justify-center z-20">
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            </div>

            {/* Header info */}
            <div className="flex items-center gap-3 font-mono text-[9px] text-white/40 uppercase tracking-widest">
              <CalendarRange className="w-3.5 h-3.5" />
              <span>{lang === "en" ? "PHASE 03 // UPCOMING" : "FASE 03 // SIGUIENTE"}</span>
            </div>

            {/* Card Content */}
            <div className="border border-white/[0.06] bg-white/[0.01] p-5 rounded-2xl max-w-2xl font-mono text-xs flex flex-col gap-2">
              <div className="text-[10px] text-white/30 font-black uppercase tracking-widest flex items-center gap-1.5">
                {t("whatsNext.tags.starting")}
              </div>
              <h3 className="text-white/80 font-black text-sm font-sans tracking-wide uppercase leading-tight pt-1">
                {t("whatsNext.items.utn")}
              </h3>
              <div className="flex justify-between items-baseline pt-2 border-t border-white/[0.04] text-[10px] text-white/40">
                <span>{t("whatsNext.items.utnSub")}</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
};
