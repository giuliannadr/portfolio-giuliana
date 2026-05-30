import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BookOpen, Code2 } from "lucide-react";
import { SPOTS_LIGHT } from "@/lib/textGradients";

const BLOBS = [
  { color: "#7C3AED", w: 400, x: "88%", y: "40%", op: 0.07, cls: "blob-2" },
  { color: "#06B6D4", w: 260, x: "6%",  y: "72%", op: 0.05, cls: "blob-1" },
];

export const WhatsNext = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const blobY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  const learningItems = [
    { label: t("whatsNext.items.nextjs"),        tag: t("whatsNext.tags.exploring"),  icon: <Code2 className="w-4 h-4" /> },
    { label: t("whatsNext.items.systemDesign"),  tag: t("whatsNext.tags.studying"),   icon: <Code2 className="w-4 h-4" /> },
    { label: t("whatsNext.items.postgres"),      tag: t("whatsNext.tags.practicing"), icon: <Code2 className="w-4 h-4" /> },
  ];

  return (
    <section ref={ref} id="whatsnext" className="bg-[#F5F5F5] py-20 md:py-32 px-5 sm:px-8 lg:px-10 relative">

      {/* Edge fades */}
      <div className="absolute inset-x-0 top-0 h-28 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, #F5F5F5, transparent)" }} />
      <div className="absolute inset-x-0 bottom-0 h-28 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top, #F5F5F5, transparent)" }} />

      {/* Blobs */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: blobY }}>
        {BLOBS.map((b, i) => (
          <div key={i} className={`${b.cls} absolute blur-3xl`}
            style={{ background: b.color, width: b.w, height: b.w, left: b.x, top: b.y, opacity: b.op, transform: "translate(-50%,-50%)" }} />
        ))}
      </motion.div>

      {/* Label */}
      <div className="flex items-center gap-5 mb-14 relative z-10">
        <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#0A0A0A]/25" style={{ fontFamily: "Poppins, sans-serif" }}>07</span>
        <div className="h-px flex-1 bg-[#0A0A0A]/[0.07]" />
        <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#0A0A0A]/25" style={{ fontFamily: "Poppins, sans-serif" }}>
          {t("whatsNext.badge")}
        </span>
      </div>

      {/* Headline */}
      <div className="mb-14 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="block font-black uppercase leading-[0.88]"
          style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(2.5rem, 6vw, 6.5rem)", letterSpacing: "-0.03em", backgroundImage: SPOTS_LIGHT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
        >
          {t("whatsNext.title")}
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="block font-serif italic font-light leading-[1.05] text-[#0A0A0A]/20"
          style={{ fontSize: "clamp(2rem, 5vw, 5.5rem)" }}
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
              <p className="text-[#0A0A0A] font-black text-base md:text-lg tracking-tight" style={{ fontFamily: "Poppins, sans-serif" }}>
                {t("whatsNext.items.utn")}
              </p>
              <p className="text-[#0A0A0A]/40 text-xs mt-0.5 font-mono">{t("whatsNext.items.utnSub")}</p>
            </div>
          </div>
        </motion.div>

        {/* Learning items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {learningItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="relative border border-[#0A0A0A]/[0.06] bg-[#0A0A0A]/[0.03] p-5 group hover:border-[#0A0A0A]/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center justify-center w-9 h-9 bg-[#0A0A0A]/5 border border-[#0A0A0A]/10 text-[#0A0A0A]/40 group-hover:text-[#CC1500] group-hover:border-[#CC1500]/30 transition-all duration-300">
                  {item.icon}
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#0A0A0A]/30 group-hover:text-[#CC1500]/60 transition-colors duration-300 mt-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {item.tag}
                </span>
              </div>
              <p className="text-[#0A0A0A]/70 text-sm font-medium leading-snug group-hover:text-[#0A0A0A]/90 transition-colors duration-300">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
