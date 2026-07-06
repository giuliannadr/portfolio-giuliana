import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

const BLOBS = [
  { color: "#CC1500", w: 350, x: "15%", y: "25%", op: 0.03, cls: "blob-1" },
  { color: "#7C3AED", w: 400, x: "85%", y: "45%", op: 0.035, cls: "blob-2" },
  { color: "#008299", w: 300, x: "30%", y: "75%", op: 0.03, cls: "blob-1" },
];

const CARD_COLORS = [
  "#CC1500", // Red
  "#7C3AED", // Purple
  "#008299", // Cyan/Blue
  "#10B981", // Green
  "#E67E22", // Orange
];

const CATEGORY_KEYS = [
  "languages",
  "frontend",
  "backend",
  "security",
  "database",
  "architecture",
  "testing",
  "devops",
  "methodologies",
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
    details: t(`tech.categories.${key}.details`),
    skills: (t(`tech.categories.${key}.skills`) as string).split(" / "),
    color: CARD_COLORS[i % CARD_COLORS.length],
  }));

  const spokenSkills = (t("tech.categories.spokenLangs.skills") as string).split(" / ");
  const spokenDetails = t("tech.categories.spokenLangs.details");

  return (
    <section ref={ref} id="tech" className="bg-[#F5F4F0] py-20 md:py-32 px-5 sm:px-8 lg:px-10 relative overflow-hidden">

      {/* Edge fades */}
      <div className="absolute inset-x-0 top-0 h-28 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, #F5F4F0, transparent)" }} />
      <div className="absolute inset-x-0 bottom-0 h-28 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top, #F5F4F0, transparent)" }} />

      {/* Morphing Blobs */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: blobY }}>
        {BLOBS.map((b, i) => (
          <div 
            key={i} 
            className={`${b.cls} absolute blur-3xl`}
            style={{ 
              background: b.color, 
              width: b.w, 
              height: b.w, 
              left: b.x, 
              top: b.y, 
              opacity: b.op, 
              transform: "translate(-50%,-50%)" 
            }} 
          />
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Label */}
        <div className="flex items-center gap-5 mb-14">
          <div className="flex items-center gap-2 font-mono text-[9px] text-[#CC1500] uppercase tracking-[0.25em]">
            <span>06</span>
            <span>//</span>
            <span>STACK</span>
          </div>
          <div className="h-px flex-1 bg-[#0A0A0A]/[0.08]" />
          <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#0A0A0A]/25" style={{ fontFamily: "Poppins, sans-serif" }}>
            {t("tech.subtitle")}
          </span>
        </div>

        {/* Headline */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }} 
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="block font-black uppercase leading-[0.88] text-[#0A0A0A]"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(2.3rem, 6vw, 5.5rem)", letterSpacing: "-0.02em" }}
          >
            <span className="mr-3 select-none" style={{ WebkitTextStroke: "1.2px #0A0A0A", WebkitTextFillColor: "transparent", color: "transparent" }}>
              {lang === "en" ? "MY" : "MIS"}
            </span>
            <span className="text-[#0A0A0A] block sm:inline">
              {lang === "en" ? "STACK." : "HERRAMIENTAS."}
            </span>
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/70 backdrop-blur-md border border-[#0A0A0A]/[0.05] rounded-2xl p-6 md:p-8 flex flex-col gap-4 shadow-[0_4px_20px_-4px_rgba(10,10,10,0.02)] transition-all duration-300 hover:shadow-[0_12px_30px_-6px_rgba(10,10,10,0.08)] hover:-translate-y-1 hover:border-[#0A0A0A]/10 group"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#0A0A0A]/[0.05]">
                <h3 className="font-black uppercase text-[#0A0A0A]/80 tracking-wider text-[12.5px] md:text-[13px] font-display transition-colors duration-300 group-hover:text-[#CC1500]">
                  {cat.title}
                </h3>
                <span className="text-[10px] font-black font-mono shrink-0" style={{ color: cat.color }}>
                  {cat.id}
                </span>
              </div>

              {/* Details */}
              <p className="text-[#0A0A0A]/60 text-[12.5px] leading-relaxed font-medium">
                {cat.details}
              </p>

              {/* Skills tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-[#0A0A0A]/[0.05]">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{ "--hover-color": cat.color } as React.CSSProperties}
                    className="text-[9.5px] font-mono text-[#0A0A0A]/65 px-2 py-0.5 rounded border border-[#0A0A0A]/[0.06] bg-[#0A0A0A]/[0.01] hover:text-[var(--hover-color)] hover:border-[var(--hover-color)]/25 hover:bg-[var(--hover-color)]/5 transition-all duration-200 leading-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* ── 10 — Spoken Languages: Full-width card ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/70 backdrop-blur-md border border-[#0A0A0A]/[0.05] rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_-4px_rgba(10,10,10,0.02)] transition-all duration-300 hover:shadow-[0_12px_30px_-6px_rgba(10,10,10,0.08)] hover:-translate-y-1 hover:border-[#0A0A0A]/10 group lg:col-span-3 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
          >
            {/* Left part: details (cols 6) */}
            <div className="lg:col-span-6 flex flex-col gap-3">
              <div className="flex items-center justify-between pb-3 border-b border-[#0A0A0A]/[0.05]">
                <h3 className="font-black uppercase text-[#0A0A0A]/80 tracking-wider text-[12.5px] md:text-[13px] font-display transition-colors duration-300 group-hover:text-[#CC1500]">
                  {t("tech.categories.spokenLangs.title")}
                </h3>
                <span className="text-[10px] font-black font-mono text-[#CC1500] shrink-0">10</span>
              </div>
              <p className="text-[#0A0A0A]/60 text-[12.5px] leading-relaxed font-medium">
                {spokenDetails}
              </p>
            </div>

            {/* Divider at lg */}
            <div className="hidden lg:block lg:col-span-1 h-12 w-px bg-[#0A0A0A]/[0.08] mx-auto" />

            {/* Right part: skills pills (cols 5) */}
            <div className="lg:col-span-5 flex flex-wrap gap-2">
              {spokenSkills.map((lang) => (
                <span
                  key={lang}
                  className="text-[9.5px] font-mono text-[#0A0A0A]/65 px-3 py-1.5 rounded border border-[#0A0A0A]/[0.06] bg-[#0A0A0A]/[0.01] hover:text-[#CC1500] hover:border-[#CC1500]/25 hover:bg-[#CC1500]/5 transition-all duration-200"
                >
                  {lang}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
