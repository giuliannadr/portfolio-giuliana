import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { SPOTS_DARK } from "@/lib/textGradients";

const BLOBS = [
  { color: "#CC1500", w: 360, x: "8%",  y: "30%", op: 0.07, cls: "blob-1" },
  { color: "#06B6D4", w: 280, x: "85%", y: "60%", op: 0.06, cls: "blob-2" },
];

const COLORS = [
  "#CC1500", "#7C3AED", "#06B6D4", "#EC4899", "#D97706",
  "#10B981", "#CC1500", "#7C3AED", "#06B6D4", "#EC4899",
];

const CATEGORY_KEYS = [
  "languages", "frontend", "backend", "security", "database",
  "architecture", "testing", "devops", "methodologies",
];

export const TechSection = () => {
  const { t } = useTranslation();
  const ref  = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const blobY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  const categories = useMemo(() =>
    CATEGORY_KEYS.map((key, i) => ({
      id:     String(i + 1).padStart(2, "0"),
      key,
      title:  t(`tech.categories.${key}.title`),
      skills: t(`tech.categories.${key}.skills`).split(" / ").map(s => s.trim()),
      color:  COLORS[i],
    })), [t]);

  /* spoken languages — separate full-width row */
  const spokenSkills = useMemo(() =>
    t("tech.categories.spokenLangs.skills").split(" / ").map(s => s.trim()), [t]);

  return (
    <section
      ref={ref}
      id="tech"
      className="bg-[#0A0A0A] py-20 md:py-32 px-5 sm:px-8 lg:px-10 relative overflow-hidden"
    >
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
        <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white/25" style={{ fontFamily: "Poppins, sans-serif" }}>06</span>
        <div className="h-px flex-1 bg-white/[0.07]" />
        <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white/25" style={{ fontFamily: "Poppins, sans-serif" }}>{t("tech.subtitle")}</span>
      </div>

      {/* Headline */}
      <div className="mb-14 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 22 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="block font-black uppercase leading-[0.88]"
          style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(2.5rem, 6vw, 6.5rem)", letterSpacing: "-0.03em", backgroundImage: SPOTS_DARK, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
        >
          {t("tech.title")}
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 18 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="block font-serif italic font-light leading-[1.05] text-white/20"
          style={{ fontSize: "clamp(2rem, 5vw, 5.5rem)" }}
        >
          {t("tech.titleItalic")}
        </motion.h2>
      </div>

      {/* ── Main grid (9 categories) ── */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] mb-px">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.key}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
            className="bg-[#0A0A0A] p-6 group hover:bg-white/[0.03] transition-colors duration-300"
          >
            {/* Accent line */}
            <motion.div
              className="h-[2px] w-8 mb-5 origin-left"
              style={{ background: cat.color }}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
            />

            {/* Number + title */}
            <div className="flex items-baseline gap-2.5 mb-4">
              <span className="text-[9px] font-black font-mono leading-none shrink-0" style={{ color: cat.color, fontFamily: "Poppins, sans-serif" }}>
                {cat.id}
              </span>
              <h3 className="font-black uppercase text-white/55 group-hover:text-white/90 transition-colors duration-300 leading-tight"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(0.72rem, 1.1vw, 0.82rem)", letterSpacing: "0.04em" }}>
                {cat.title}
              </h3>
            </div>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[8px] font-mono text-white/28 px-2 py-[3px] border border-white/[0.07] bg-white/[0.02] leading-none group-hover:text-white/45 group-hover:border-white/12 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Spoken Languages — full-width bar ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="relative z-10 bg-[#0A0A0A] border-t-0 group hover:bg-white/[0.03] transition-colors duration-300"
        style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.06)" }}
      >
        <div className="px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4">
          {/* Left: label */}
          <div className="flex items-center gap-2.5 shrink-0">
            <motion.div
              className="h-[2px] w-6 origin-left"
              style={{ background: "#EC4899" }}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.65 }}
            />
            <span className="text-[9px] font-black font-mono" style={{ color: "#EC4899", fontFamily: "Poppins, sans-serif" }}>10</span>
            <h3 className="font-black uppercase text-white/55 group-hover:text-white/90 transition-colors duration-300"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.78rem", letterSpacing: "0.04em" }}>
              {t("tech.categories.spokenLangs.title")}
            </h3>
          </div>

          {/* Divider */}
          <div className="hidden sm:block h-px flex-shrink-0 w-6 bg-white/10" />

          {/* Right: language pills */}
          <div className="flex flex-wrap gap-2">
            {spokenSkills.map((lang) => (
              <span key={lang}
                className="text-[8.5px] font-mono text-white/35 px-3 py-1.5 border border-white/[0.08] bg-white/[0.02] group-hover:text-white/55 group-hover:border-white/15 transition-colors duration-300 leading-none">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
};
