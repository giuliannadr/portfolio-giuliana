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
    <section ref={ref} id="whatsnext" className="bg-[#F5F4F0] py-20 md:py-32 px-5 sm:px-8 lg:px-10 relative overflow-hidden">

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
          <span className="text-[#CC1500]">
            {lang === "en" ? "NEXT." : "SIGUE."}
          </span>
        </motion.h2>
      </div>

      {/* Connected Infographic Roadmap Station Grid (Metro Line Style) */}
      <div className="relative z-10 max-w-7xl mx-auto py-10 px-2">
        
        {/* Horizontal line for desktop (hidden on mobile) */}
        <div className="hidden lg:block absolute left-4 right-4 top-[50%] h-[3px] bg-gradient-to-r from-emerald-500/30 via-[#CC1500]/30 to-purple-500/30 -translate-y-1/2 z-0" />
        
        {/* Vertical line for mobile (hidden on desktop) */}
        <div className="lg:hidden absolute left-[21px] top-6 bottom-6 w-[3px] bg-gradient-to-b from-emerald-500/30 via-[#CC1500]/30 to-purple-500/30 z-0" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
          
          {/* Station 1: Completed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 lg:items-center relative"
          >
            {/* Metro Dot Indicator */}
            <div className="w-11 h-11 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center shadow-sm shrink-0 z-10 self-start lg:self-center">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            </div>

            {/* Station Card */}
            <div className="w-full bg-white border border-[#0A0A0A]/[0.06] hover:border-emerald-500/30 p-6 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-300 flex flex-col gap-3 font-mono text-xs border-l-4 border-l-emerald-500">
              <div className="text-[9px] text-[#0A0A0A]/40 uppercase tracking-widest font-black flex justify-between items-center">
                <span>[STATION 01]</span>
                <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">{lang === "en" ? "COMPLETED" : "COMPLETADO"}</span>
              </div>
              
              <h3 className="text-[#0A0A0A] font-black text-[13px] font-sans tracking-wide uppercase leading-tight pt-1">
                {lang === "en" ? "Web Development Degree" : "Tecnicatura en Desarrollo Web"}
              </h3>
              
              <div className="flex justify-between items-baseline pt-3 border-t border-[#0A0A0A]/[0.05] text-[10px] text-[#0A0A0A]/50">
                <span>UNLaM</span>
                <span>18 / 20 {lang === "en" ? "Subjects" : "Materias"}</span>
              </div>
              <div className="flex justify-between items-baseline pt-1 text-[10px] text-[#0A0A0A]/50">
                <span>{lang === "en" ? "GPA / AVERAGE" : "PROMEDIO / RENDIMIENTO"}</span>
                <span className="text-emerald-600 font-black text-xs">8.72 / 10</span>
              </div>
            </div>
          </motion.div>

          {/* Station 2: In Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 lg:items-center relative"
          >
            {/* Metro Dot Indicator (Pulsing Red) */}
            <div className="w-11 h-11 rounded-full bg-white border-2 border-[#CC1500] flex items-center justify-center shadow-sm shrink-0 z-10 self-start lg:self-center relative">
              <PlayCircle className="w-5 h-5 text-[#CC1500]" />
              <div className="absolute inset-0 rounded-full border border-[#CC1500] animate-ping opacity-75" />
            </div>

            {/* Station Card */}
            <div className="w-full bg-white border border-[#0A0A0A]/[0.06] hover:border-[#CC1500]/30 p-6 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-300 flex flex-col gap-4 border-l-4 border-l-[#CC1500]">
              <div className="font-mono text-[9px] text-[#0A0A0A]/40 uppercase tracking-widest font-black flex justify-between items-center">
                <span>[STATION 02]</span>
                <span className="text-[#CC1500] font-bold bg-[#CC1500]/5 px-2 py-0.5 rounded">{lang === "en" ? "IN PROGRESS" : "EN CURSO"}</span>
              </div>

              <h3 className="text-[#0A0A0A] font-black text-[13px] uppercase tracking-wide leading-tight" style={{ fontFamily: "Poppins, sans-serif" }}>
                {lang === "en" ? "Deepening Engineering & Design" : "Especialización & Arquitecturas"}
              </h3>
              
              {/* Vertical Stack list of items */}
              <div className="flex flex-col gap-2 border-t border-[#0A0A0A]/[0.05] pt-3.5 font-mono text-[9.5px]">
                {learningItems.map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-1 border-b border-[#0A0A0A]/[0.03] last:border-0 last:pb-0">
                    <span className="text-[#0A0A0A]/70">{item.label}</span>
                    <span className="text-[#CC1500] text-[8px] font-black uppercase tracking-widest">{item.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Station 3: Upcoming */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 lg:items-center relative"
          >
            {/* Metro Dot Indicator (Purple) */}
            <div className="w-11 h-11 rounded-full bg-white border-2 border-purple-500 flex items-center justify-center shadow-sm shrink-0 z-10 self-start lg:self-center">
              <CalendarRange className="w-5 h-5 text-purple-500" />
            </div>

            {/* Station Card */}
            <div className="w-full bg-white border border-[#0A0A0A]/[0.06] hover:border-purple-500/30 p-6 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-300 flex flex-col gap-3 font-mono text-xs border-l-4 border-l-purple-500">
              <div className="text-[9px] text-[#0A0A0A]/40 uppercase tracking-widest font-black flex justify-between items-center">
                <span>[STATION 03]</span>
                <span className="text-purple-600 font-bold bg-purple-50 px-2 py-0.5 rounded">{lang === "en" ? "UPCOMING" : "SIGUIENTE"}</span>
              </div>

              <h3 className="text-[#0A0A0A] font-black text-[13px] font-sans tracking-wide uppercase leading-tight pt-1">
                {t("whatsNext.items.utn")}
              </h3>
              
              <div className="flex justify-between items-baseline pt-3 border-t border-[#0A0A0A]/[0.05] text-[10px] text-[#0A0A0A]/50">
                <span>{t("whatsNext.items.utnSub")}</span>
              </div>
              <div className="pt-1 text-[8.5px] text-purple-600 font-black tracking-widest uppercase">
                {t("whatsNext.tags.starting")}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
