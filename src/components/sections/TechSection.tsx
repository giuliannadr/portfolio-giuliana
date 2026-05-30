import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { SPOTS_DARK } from "@/lib/textGradients";

const BLOBS = [
  { color: "#CC1500", w: 360, x: "8%",  y: "30%", op: 0.07, cls: "blob-1" },
  { color: "#06B6D4", w: 280, x: "85%", y: "60%", op: 0.06, cls: "blob-2" },
];

interface Category {
  id: string;
  title: string;
  skills: string;
  details: string;
}

export const TechSection = () => {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos,     setMousePos]     = useState({ x: -100, y: -100 });
  const [isInside,     setIsInside]     = useState(false);
  const [isMobile,     setIsMobile]     = useState(false);

  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const blobY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  const categories: Category[] = useMemo(() => (
    [
      { id: "01", key: "frontend"  },
      { id: "02", key: "backend"   },
      { id: "03", key: "database"  },
      { id: "04", key: "devops"    },
      { id: "05", key: "languages" },
    ].map(cat => ({
      id:      cat.id,
      title:   t(`tech.categories.${cat.key}.title`),
      skills:  t(`tech.categories.${cat.key}.skills`),
      details: t(`tech.categories.${cat.key}.details`),
    }))
  ), [t]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    const handleMouseMove = (e: MouseEvent) => { if (!isMobile) setMousePos({ x: e.clientX, y: e.clientY }); };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);

  return (
    <section
      ref={ref}
      id="tech"
      onMouseEnter={() => !isMobile && setIsInside(true)}
      onMouseLeave={() => { if (!isMobile) setIsInside(false); setHoveredIndex(null); }}
      className={`bg-[#0A0A0A] py-20 md:py-32 px-5 sm:px-8 lg:px-10 relative overflow-hidden select-none transition-all duration-300 ${isInside && !isMobile ? "cursor-none" : "cursor-default"}`}
    >
      {/* Custom cursor dot */}
      <AnimatePresence>
        {isInside && !isMobile && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1.5 }} exit={{ opacity: 0, scale: 0 }}
            className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
            style={{ x: mousePos.x, y: mousePos.y, translateX: "-50%", translateY: "-50%", width: "8px", height: "8px", backgroundColor: "#CC1500", mixBlendMode: "difference" }}
            transition={{ type: "spring", damping: 35, stiffness: 400, mass: 0.3 }}
          />
        )}
      </AnimatePresence>

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

      {/* Accordion list */}
      <div className="flex flex-col border-t border-white/[0.06] relative z-10">
        {categories.map((cat, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onMouseEnter={() => !isMobile && setHoveredIndex(index)}
              onMouseLeave={() => !isMobile && setHoveredIndex(null)}
              onClick={() => isMobile && setHoveredIndex(hoveredIndex === index ? null : index)}
              className="group relative py-6 md:py-8 border-b border-white/[0.05] cursor-pointer overflow-hidden"
            >
              {/* Background gradient */}
              <motion.div
                initial={false}
                animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                className="absolute inset-0 z-0 bg-gradient-to-r from-[#CC1500]/6 to-transparent pointer-events-none"
              />
              {/* Red left accent line — separate so it never overlaps the number */}
              <motion.div
                initial={false}
                animate={{ opacity: isHovered ? 1 : 0 }}
                className="absolute left-0 inset-y-0 w-[2px] z-0 pointer-events-none"
                style={{ background: "#CC1500" }}
              />
              <div className="relative z-10 flex flex-col pl-3">
                <div className="flex items-center gap-4">
                  <span className={`text-[10px] font-mono transition-colors duration-500 ${isHovered ? "text-[#CC1500]" : "text-white/10"}`}>
                    {cat.id}
                  </span>
                  <h3 className={`text-xl md:text-3xl font-bold transition-all duration-500 ease-out italic font-serif ${isHovered ? "text-white md:translate-x-4" : "text-white/30"}`}>
                    {cat.title}
                  </h3>
                  <div className={`ml-auto hidden md:block transition-all duration-500 ${isHovered ? "opacity-0 translate-x-4" : "opacity-25"}`}>
                    <p className="text-[10px] font-medium tracking-widest uppercase text-white">
                      {cat.skills.split("/").slice(0, 3).join(" / ")}...
                    </p>
                  </div>
                </div>
                <motion.div
                  initial={false}
                  animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0, marginTop: isHovered ? 12 : 0 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="overflow-hidden md:ml-12"
                >
                  <p className="text-[#CC1500] text-[11px] md:text-xs font-bold tracking-[0.2em] mb-2 uppercase">{cat.skills}</p>
                  <p className="text-white/40 text-[11px] md:text-sm max-w-3xl leading-relaxed">{cat.details}</p>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
