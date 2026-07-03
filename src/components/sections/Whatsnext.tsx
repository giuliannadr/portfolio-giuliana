import { useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BookOpen, Code2, CheckCircle2, PlayCircle, CalendarRange } from "lucide-react";
import { SPOTS_DARK } from "@/lib/textGradients";

export const WhatsNext = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "en" ? "en" : "es";
  const ref = useRef<HTMLElement>(null);

  const badge = lang === "en" ? "Roadmap" : "Ruta";

  const learningItems = [
    { label: t("whatsNext.items.litElement"),    tag: t("whatsNext.tags.building"),   icon: <Code2 className="w-3.5 h-3.5" /> },
    { label: t("whatsNext.items.nextjs"),        tag: t("whatsNext.tags.exploring"),  icon: <Code2 className="w-3.5 h-3.5" /> },
    { label: t("whatsNext.items.systemDesign"),  tag: t("whatsNext.tags.studying"),   icon: <Code2 className="w-3.5 h-3.5" /> },
    { label: t("whatsNext.items.postgres"),      tag: t("whatsNext.tags.practicing"), icon: <Code2 className="w-3.5 h-3.5" /> },
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
          style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(2.2rem, 5vw, 5.5rem)", letterSpacing: "-0.03em" }}
        >
          <span style={{ backgroundImage: SPOTS_DARK, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            {t("whatsNext.title")}
          </span>
        </motion.h2>
      </div>

      {/* Roadmap Pipeline Grid Layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
        
        {/* Phase 1: Completed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4 border border-white/[0.06] bg-white/[0.01] p-6 rounded-2xl h-full min-h-[300px]"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] font-mono text-[9.5px]">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold uppercase">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{lang === "en" ? "COMPLETED" : "COMPLETADO"}</span>
            </div>
            <span className="text-white/30">[PHASE-01]</span>
          </div>

          {/* Card */}
          <div className="flex flex-col gap-3 p-5 bg-white/[0.02] border border-white/[0.05] rounded-xl font-mono text-xs">
            <span className="text-[#CC1500] font-bold text-[9px] uppercase tracking-widest">
              {lang === "en" ? "DEGREE COMPLETED" : "CARRERA COMPLETADA"}
            </span>
            <p className="text-white/80 font-black text-sm font-sans tracking-wide uppercase leading-tight pt-1">
              {lang === "en" ? "Web Development Degree" : "Tecnicatura en Desarrollo Web"}
            </p>
            <div className="flex justify-between items-baseline pt-2 border-t border-white/[0.04] text-[10px] text-white/50">
              <span>UNLaM</span>
              <span>18/20 Materias</span>
            </div>
            <div className="flex justify-between items-baseline pt-1 text-[10px] text-white/50">
              <span>GPA</span>
              <span className="text-emerald-400 font-black">8.72</span>
            </div>
          </div>
        </motion.div>

        {/* Phase 2: In Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4 border border-[#CC1500]/20 bg-[#CC1500]/2 p-6 rounded-2xl h-full min-h-[300px]"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] font-mono text-[9.5px]">
            <div className="flex items-center gap-2 text-[#CC1500] font-semibold uppercase">
              <PlayCircle className="w-3.5 h-3.5" />
              <span>{lang === "en" ? "IN PROGRESS" : "EN CURSO"}</span>
            </div>
            <span className="text-white/30">[PHASE-02]</span>
          </div>

          {/* Cards Stack */}
          <div className="flex flex-col gap-3">
            {learningItems.map((item, i) => (
              <div 
                key={i}
                className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/[0.06] rounded-xl hover:border-white/15 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex items-center justify-center w-7 h-7 bg-white/5 border border-white/10 text-white/40 group-hover:text-[#CC1500] group-hover:border-[#CC1500]/30 transition-all duration-300 rounded-lg shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-white/70 text-xs font-medium truncate tracking-wide" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {item.label}
                  </span>
                </div>
                <span className="font-mono text-[8px] uppercase tracking-wider text-white/30 shrink-0 group-hover:text-[#CC1500]/65 transition-colors">
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Phase 3: Upcoming */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4 border border-white/[0.06] bg-white/[0.01] p-6 rounded-2xl h-full min-h-[300px]"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] font-mono text-[9.5px]">
            <div className="flex items-center gap-2 text-white/50 font-semibold uppercase">
              <CalendarRange className="w-3.5 h-3.5" />
              <span>{lang === "en" ? "UPCOMING" : "SIGUIENTE"}</span>
            </div>
            <span className="text-white/30">[PHASE-03]</span>
          </div>

          {/* Card */}
          <div className="flex flex-col gap-3 p-5 bg-white/[0.02] border border-white/[0.05] rounded-xl font-mono text-xs">
            <span className="text-white/40 font-bold text-[9px] uppercase tracking-widest flex items-center gap-1.5">
              <BookOpen className="w-3 h-3 text-[#CC1500]" />
              {t("whatsNext.tags.starting")}
            </span>
            <p className="text-white/80 font-black text-sm font-sans tracking-wide uppercase leading-tight pt-1">
              {t("whatsNext.items.utn")}
            </p>
            <div className="flex justify-between items-baseline pt-2 border-t border-white/[0.04] text-[10px] text-white/50">
              <span>{t("whatsNext.items.utnSub")}</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
