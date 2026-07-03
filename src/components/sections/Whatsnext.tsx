import { useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BookOpen, Code2 } from "lucide-react";
import { SPOTS_DARK } from "@/lib/textGradients";

export const WhatsNext = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);

  const learningItems = [
    { label: t("whatsNext.items.litElement"),    tag: t("whatsNext.tags.building"),   icon: <Code2 className="w-4 h-4" /> },
    { label: t("whatsNext.items.nextjs"),        tag: t("whatsNext.tags.exploring"),  icon: <Code2 className="w-4 h-4" /> },
    { label: t("whatsNext.items.systemDesign"),  tag: t("whatsNext.tags.studying"),   icon: <Code2 className="w-4 h-4" /> },
    { label: t("whatsNext.items.postgres"),      tag: t("whatsNext.tags.practicing"), icon: <Code2 className="w-4 h-4" /> },
  ];

  return (
    <section ref={ref} id="whatsnext" className="bg-[#0F0F11] py-20 md:py-32 px-5 sm:px-8 lg:px-10 relative">

      {/* Edge fades */}
      <div className="absolute inset-x-0 top-0 h-28 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, #0F0F11, transparent)" }} />
      <div className="absolute inset-x-0 bottom-0 h-28 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top, #0F0F11, transparent)" }} />

      {/* Label */}
      <div className="flex items-center gap-5 mb-14 relative z-10">
        <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white/20" style={{ fontFamily: "Poppins, sans-serif" }}>07</span>
        <div className="h-px flex-1 bg-white/10" />
        <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white/20" style={{ fontFamily: "Poppins, sans-serif" }}>
          {t("whatsNext.badge")}
        </span>
      </div>

      {/* Headline */}
      <div className="mb-14 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="block font-black uppercase leading-[0.88]"
          style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(2.5rem, 6vw, 6.5rem)", letterSpacing: "-0.03em", backgroundImage: SPOTS_DARK, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
        >
          {t("whatsNext.title")}
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="block font-black uppercase leading-[1.05] text-white/15 mt-1"
          style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.2rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
        >
          {t("whatsNext.titleItalic")}
        </motion.h2>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-5 relative z-10">

        {/* UTN Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative overflow-hidden border border-[#CC1500]/30 bg-[#CC1500]/5 p-7 group"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#CC1500]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex items-center justify-center w-12 h-12 bg-[#CC1500]/10 border border-[#CC1500]/20 text-[#CC1500] shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-1.5">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] px-3 py-1 bg-[#CC1500] text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {t("whatsNext.tags.starting")}
                </span>
              </div>
              <p className="text-white/90 font-black text-base md:text-lg tracking-tight" style={{ fontFamily: "Poppins, sans-serif" }}>
                {t("whatsNext.items.utn")}
              </p>
              <p className="text-white/40 text-xs mt-0.5 font-mono">{t("whatsNext.items.utnSub")}</p>
            </div>
          </div>
        </motion.div>

        {/* Learning items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {learningItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="relative border border-white/[0.06] bg-white/[0.01] p-5 group hover:border-white/15 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center justify-center w-9 h-9 bg-white/5 border border-white/10 text-white/40 group-hover:text-[#CC1500] group-hover:border-[#CC1500]/30 transition-all duration-300">
                  {item.icon}
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30 group-hover:text-[#CC1500]/60 transition-colors duration-300 mt-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {item.tag}
                </span>
              </div>
              <p className="text-white/60 text-sm font-medium leading-snug group-hover:text-white/80 transition-colors duration-300">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
