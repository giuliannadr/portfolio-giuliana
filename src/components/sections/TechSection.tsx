import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";


const BLOBS: { color: string; w: number; x: string; y: string; op: number; cls: string; }[] = [];

const COLORS = [
  "#CC1500", "#CC1500", "#CC1500", "#CC1500", "#CC1500",
  "#CC1500", "#CC1500", "#CC1500", "#CC1500", "#CC1500",
];

const CATEGORY_KEYS = [
  "languages",
  "frontend",
  "backend",
  "databases",
  "methodologies",
  "ci_cd",
  "architecture",
  "testing",
  "tools",
];

export const TechSection = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "en" ? "en" : "es";
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const blobY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  const categories = CATEGORY_KEYS.map((key, i) => ({
    key,
    id: String(i + 1).padStart(2, "0"),
    title: t(`tech.categories.${key}.title`),
    skills: (t(`tech.categories.${key}.skills`) as string).split(" / "),
    color: COLORS[i % COLORS.length],
  }));

  const spokenSkills = (t("tech.categories.spokenLangs.skills") as string).split(" / ");

  return (
    <section ref={ref} id="tech" className="bg-[#F5F4F0] py-20 md:py-32 px-5 sm:px-8 lg:px-10 relative overflow-hidden">

      {/* Edge fades */}
      <div className="absolute inset-x-0 top-0 h-28 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, #F5F4F0, transparent)" }} />
      <div className="absolute inset-x-0 bottom-0 h-28 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top, #F5F4F0, transparent)" }} />

      {/* Blobs */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: blobY }}>
        {BLOBS.map((b, i) => (
          <div key={i} className={`${b.cls} absolute blur-3xl`}
            style={{ background: b.color, width: b.w, height: b.w, left: b.x, top: b.y, opacity: b.op, transform: "translate(-50%,-50%)" }} />
        ))}
      </motion.div>

      {/* Label */}
      <div className="flex items-center gap-5 mb-14 relative z-10">
        <div className="flex items-center gap-2 font-mono text-[9px] text-[#CC1500] uppercase tracking-[0.25em]">
          <span>06</span>
          <span>//</span>
          <span>STACK</span>
        </div>
        <div className="h-px flex-1 bg-[#0A0A0A]/[0.08]" />
        <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#0A0A0A]/25" style={{ fontFamily: "Poppins, sans-serif" }}>{t("tech.subtitle")}</span>
      </div>

      {/* Headline */}
      <div className="mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="block font-black uppercase leading-[0.88] text-[#0A0A0A]"
          style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(2.3rem, 6vw, 5.5rem)", letterSpacing: "-0.02em" }}
        >
          <span className="mr-3 select-none" style={{ WebkitTextStroke: "1.2px #0A0A0A", WebkitTextFillColor: "transparent", color: "transparent" }}>
            {lang === "en" ? "MY" : "MIS"}
          </span>
          <span className="text-[#0A0A0A]">
            {lang === "en" ? "STACK." : "HERRAMIENTAS."}
          </span>
        </motion.h2>
      </div>

      {/* ── Grid: 9 categories + spoken languages (10th, beside 09 at 2-col / full-width at 3-col) ── */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0A0A0A]/[0.08] border border-[#0A0A0A]/[0.08]">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.key}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
            className="bg-[#F5F4F0] p-6 group transition-colors duration-300"
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
              <h3 className="font-black uppercase text-[#0A0A0A]/55 group-hover:text-[#0A0A0A]/90 transition-colors duration-300 leading-tight"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(0.72rem, 1.1vw, 0.82rem)", letterSpacing: "0.04em" }}>
                {cat.title}
              </h3>
            </div>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[9.5px] font-mono text-[#0A0A0A]/40 px-2 py-[3px] border border-[#0A0A0A]/[0.08] bg-[#0A0A0A]/[0.02] leading-none group-hover:text-[#0A0A0A]/60 group-hover:border-[#0A0A0A]/15 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

        {/* ── 10 — Spoken Languages: beside 09 at sm (2-col), full-width at lg (3-col) ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-[#F5F4F0] p-6 group transition-colors duration-300 lg:col-span-3 border-t border-[#0A0A0A]/[0.08] lg:border-t-0"
        >
          {/* Accent line */}
          <motion.div
            className="h-[2px] w-8 mb-5 origin-left"
            style={{ background: "#CC1500" }}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
          />

          {/* Number + title + pills — horizontal at lg */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <div className="flex items-baseline gap-2.5 shrink-0">
              <span className="text-[9px] font-black font-mono leading-none text-[#CC1500]" style={{ fontFamily: "Poppins, sans-serif" }}>10</span>
              <h3 className="font-black uppercase text-[#0A0A0A]/55 group-hover:text-[#0A0A0A]/90 transition-colors duration-300 leading-tight"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(0.72rem, 1.1vw, 0.82rem)", letterSpacing: "0.04em" }}>
                {t("tech.categories.spokenLangs.title")}
              </h3>
            </div>
            <div className="hidden lg:block h-px w-6 bg-[#0A0A0A]/10 shrink-0" />
            <div className="flex flex-wrap gap-1.5">
              {spokenSkills.map((lang) => (
                <span key={lang}
                  className="text-[9.5px] font-mono text-[#0A0A0A]/40 px-2 py-[3px] border border-[#0A0A0A]/[0.08] bg-[#0A0A0A]/[0.02] leading-none group-hover:text-[#0A0A0A]/60 group-hover:border-[#0A0A0A]/15 transition-colors duration-300">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
