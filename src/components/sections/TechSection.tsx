import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

interface Category {
  id: string;
  title: string;
  skills: string;
  details: string;
}

export const TechSection = () => {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isInside, setIsInside] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const categories: Category[] = useMemo(() => [
    { id: "01", key: "frontend" },
    { id: "02", key: "backend" },
    { id: "03", key: "database" },
    { id: "04", key: "devops" },
    { id: "05", key: "languages" },
  ].map(cat => ({
    id: cat.id,
    title: t(`tech.categories.${cat.key}.title`),
    skills: t(`tech.categories.${cat.key}.skills`),
    details: t(`tech.categories.${cat.key}.details`),
  })), [t]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) setMousePos({ x: e.clientX, y: e.clientY });
    };
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
      onMouseLeave={() => {
        !isMobile && setIsInside(false);
        setHoveredIndex(null);
      }}
      className={`scroll-mt-20 relative py-12 md:py-16 select-none overflow-hidden transition-all duration-300 ${
        isInside && !isMobile ? "cursor-none" : "cursor-default"
      }`}
    >
      <AnimatePresence>
        {isInside && !isMobile && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1.5 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
            style={{
              x: mousePos.x, y: mousePos.y,
              translateX: "-50%", translateY: "-50%",
              width: "8px", height: "8px",
              backgroundColor: "#FF6F00",
              mixBlendMode: "difference",
            }}
            transition={{ type: "spring", damping: 35, stiffness: 400, mass: 0.3 }}
          />
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER COMPRIMIDO */}
        <div className="mb-10 md:mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="flex items-center gap-3 mb-2"
          >
            <div className="h-[1px] w-6 bg-[#FF6F00]" />
            <span className="text-[#FF6F00] text-[9px] font-bold uppercase tracking-[0.4em]">
              {t('tech.subtitle')}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-none uppercase"
          >
            {t('tech.title')}{" "}
            <span className="text-white/20 italic font-serif font-light">
              {t('tech.titleItalic')}
            </span>
          </motion.h2>
        </div>

        {/* LISTA COMPACTA */}
        <div className="flex flex-col border-t border-white/10">
          {categories.map((cat, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                onClick={() => isMobile && setHoveredIndex(hoveredIndex === index ? null : index)}
                className="group relative py-6 md:py-8 px-2 md:px-6 border-b border-white/5 cursor-pointer overflow-hidden"
              >
                <motion.div
                  initial={false}
                  animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                  className="absolute inset-0 z-0 bg-gradient-to-r from-[#FF6F00]/5 to-transparent pointer-events-none"
                  style={{ borderLeft: isHovered ? "2px solid #FF6F00" : "2px solid transparent" }}
                />

                <div className="relative z-10 flex flex-col">
                  <div className="flex items-center gap-4">
                    <span className={`text-[10px] font-mono transition-colors duration-500 ${isHovered ? "text-[#FF6F00]" : "text-white/10"}`}>
                      {cat.id}
                    </span>
                    <h3 className={`text-xl md:text-3xl font-bold transition-all duration-500 ease-out italic font-serif ${isHovered ? "text-white md:translate-x-4" : "text-white/30"}`}>
                      {cat.title}
                    </h3>
                    
                    {/* Skills visibles pero sutiles cuando no hay hover */}
                    <div className={`ml-auto hidden md:block transition-all duration-500 ${isHovered ? "opacity-0 translate-x-4" : "opacity-20"}`}>
                       <p className="text-[10px] font-medium tracking-widest uppercase">
                        {cat.skills.split('/').slice(0, 3).join(' / ')}...
                      </p>
                    </div>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isHovered ? "auto" : 0,
                      opacity: isHovered ? 1 : 0,
                      marginTop: isHovered ? 12 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden md:ml-12"
                  >
                    <p className="text-[#FF6F00] text-[11px] md:text-xs font-bold tracking-[0.2em] mb-2 uppercase">
                      {cat.skills}
                    </p>
                    <p className="text-white/40 text-[11px] md:text-sm max-w-3xl leading-relaxed">
                      {cat.details}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};