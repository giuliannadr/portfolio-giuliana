import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { MessageSquarePlus, ChevronLeft, ChevronRight } from "lucide-react";
import { SPOTS_DARK } from "@/lib/textGradients";
import { ReviewForm } from "@/components/ui/ReviewForm";
import { fetchPublishedReviews, type Review as DynReview } from "@/lib/firebase";
import { useTranslation } from "react-i18next";
import { DEPLOYED_COUNT } from "@/data/projectsData";

// ─── Static fallback reviews ──────────────────────────────────────────────────
// Temporarily empty — waiting on technical testimonials (Santi + one more) before re-populating.
const STATIC_REVIEWS = {
  es: [] as { key: string; name: string; initial: string; color: string; isStatic: boolean; text: string; role: string }[],
  en: [] as { key: string; name: string; initial: string; color: string; isStatic: boolean; text: string; role: string }[],
};

const METRICS = [
  { num: `${DEPLOYED_COUNT}`, color: "#7C3AED", es: "Proyectos en producción",   en: "Production projects"      },
  { num: "B2/C1",             color: "#06B6D4", es: "Nivel de inglés",           en: "English level"            },
];

const PALETTE = ["#CC1500", "#7C3AED", "#06B6D4", "#EC4899", "#F59E0B", "#10B981"];
const colorFor = (name: string) =>
  PALETTE[[...name].reduce((a, c) => a + c.charCodeAt(0), 0) % PALETTE.length];

type CarouselItem = {
  key: string; name: string; initial: string; color: string; isStatic: boolean;
  id?: string; text?: string; role?: string;
};

// ─── Star icon ────────────────────────────────────────────────────────────────
const Star = ({ color }: { color: string }) => (
  <svg viewBox="0 0 12 12" style={{ width: 11, height: 11, fill: color }}>
    <path d="M6 0 7.35 4.15H12L8.25 6.75l1.35 4.1L6 8.25l-3.6 2.6 1.35-4.1L0 4.15h4.65Z" />
  </svg>
);

// ─── Slide variants ───────────────────────────────────────────────────────────
const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "55%" : "-55%",
    opacity: 0,
    scale: 0.97,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (dir: number) => ({
    x: dir < 0 ? "55%" : "-55%",
    opacity: 0,
    scale: 0.97,
  }),
};

// ─── Review card ──────────────────────────────────────────────────────────────
const ReviewCard = ({ item, lang }: { item: CarouselItem; lang: string }) => (
  <div
    className="flex flex-col relative overflow-hidden"
    style={{
      background: "rgba(255,255,255,0.04)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: "1px solid rgba(255,255,255,0.07)",
      borderTop: `2px solid ${item.color}`,
      boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
    }}
  >
    {/* Top glow */}
    <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
      style={{ background: `linear-gradient(to bottom, ${item.color}14, transparent)` }} />

    {/* Glass top highlight */}
    <div className="absolute top-0 left-6 right-6 h-px pointer-events-none"
      style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.12), transparent)" }} />

    <div className="p-7 lg:p-10 flex flex-col relative">
      {/* Stars + decorative quote */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex gap-1">
          {[1,2,3,4,5].map(i => <Star key={i} color={item.color} />)}
        </div>
        <span
          className="font-serif leading-none select-none"
          style={{ fontSize: "3rem", lineHeight: 1, color: `${item.color}35` }}
        >"</span>
      </div>

      {/* Quote text */}
      <blockquote
        className="text-white/75 leading-relaxed mb-8"
        style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)" }}
      >
        {item.text}
      </blockquote>

      {/* Author row */}
      <div className="flex items-center gap-4 pt-6"
        style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black shrink-0"
          style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem", background: item.color }}
        >
          {item.initial}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-black text-white leading-tight"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.9rem" }}>
            {item.name}
          </p>
          <p className="text-[8.5px] uppercase tracking-[0.28em] text-white/30 truncate mt-0.5">
            {item.role || (lang === "en" ? "Client" : "Cliente")}
          </p>
        </div>
        <span
          className="text-[7px] font-black uppercase tracking-[0.18em] px-2.5 py-1.5 shrink-0"
          style={{
            fontFamily: "Poppins, sans-serif",
            color: item.color,
            background: `${item.color}14`,
            border: `1px solid ${item.color}30`,
          }}
        >
          ✓ {lang === "en" ? "Verified" : "Verificado"}
        </span>
      </div>
    </div>
  </div>
);

// ─── Section ──────────────────────────────────────────────────────────────────
export const TrustSection = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language === "en" ? "en" : "es";

  const [showForm,   setShowForm]   = useState(false);
  const [dynReviews, setDynReviews] = useState<DynReview[]>([]);
  const [hovBtn,     setHovBtn]     = useState(false);

  // Carousel state
  const [current,   setCurrent]   = useState(0);
  const [direction, setDirection] = useState(0);

  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const blobY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  const loadReviews = useCallback(() => {
    fetchPublishedReviews().then(setDynReviews).catch(() => {});
  }, []);

  useEffect(() => { loadReviews(); }, [loadReviews]);

  const items = useMemo<CarouselItem[]>(() => {
    if (dynReviews.length > 0) {
      return dynReviews.map(r => ({
        key: r.id, name: r.name, initial: r.name.charAt(0).toUpperCase() || "?",
        color: colorFor(r.name), isStatic: false, text: r.comment, role: r.role,
      }));
    }
    return STATIC_REVIEWS[lang === "en" ? "en" : "es"];
  }, [dynReviews, lang]);

  // Reset to first card when items change
  useEffect(() => { setCurrent(0); }, [items.length]);

  // Auto-advance
  useEffect(() => {
    if (items.length <= 1) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent(c => (c + 1) % items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [items.length]);

  const prev = () => {
    setDirection(-1);
    setCurrent(c => (c - 1 + items.length) % items.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent(c => (c + 1) % items.length);
  };

  return (
    <section ref={ref} id="trust" className="bg-[#0A0A0A] pt-16 pb-10 md:pt-24 md:pb-14 px-5 sm:px-8 lg:px-10 relative">

      {/* Edge fades */}
      <div className="absolute inset-x-0 top-0 h-28 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, #0A0A0A, transparent)" }} />
      <div className="absolute inset-x-0 bottom-0 h-16 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top, #0A0A0A, transparent)" }} />

      {/* Blobs */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: blobY }}>
        <div className="blob-2 absolute blur-3xl"
          style={{ background: "#7C3AED", width: 480, height: 480, left: "80%", top: "35%", opacity: 0.08, transform: "translate(-50%,-50%)" }} />
        <div className="blob-1 absolute blur-3xl"
          style={{ background: "#CC1500", width: 320, height: 320, left: "8%", top: "65%", opacity: 0.06, transform: "translate(-50%,-50%)" }} />
      </motion.div>

      {/* Label */}
      <div className="flex items-center gap-5 mb-14 relative z-10">
        <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white/25"
          style={{ fontFamily: "Poppins, sans-serif" }}>04</span>
        <div className="h-px flex-1 bg-white/[0.06]" />
        <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white/25"
          style={{ fontFamily: "Poppins, sans-serif" }}>
          {lang === "en" ? "Trust" : "Confianza"}
        </span>
      </div>

      {/* Headline + leave a review button */}
      <div className="mb-12 relative z-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="block font-black uppercase leading-[0.85]"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(1.85rem, 9vw, 8rem)",
              letterSpacing: "-0.03em",
              backgroundImage: SPOTS_DARK,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {lang === "en" ? "What they" : "Lo que dicen"}
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="block font-serif italic font-light leading-[1.05] text-white/20"
            style={{ fontSize: "clamp(1.2rem, 6vw, 5.5rem)" }}
          >
            {lang === "en" ? "say." : "mis clientes."}
          </motion.h2>
        </div>

        {/* Leave a review button */}
        <motion.button
          onClick={() => setShowForm(true)}
          onHoverStart={() => setHovBtn(true)}
          onHoverEnd={() => setHovBtn(false)}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          whileTap={{ scale: 0.97 }}
          className="group relative inline-flex items-center gap-2.5 px-5 py-3 self-start sm:self-auto overflow-hidden shrink-0"
          style={{
            fontFamily: "Poppins, sans-serif",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ opacity: hovBtn ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ background: "rgba(255,255,255,0.05)" }}
          />
          <span className="relative z-10 flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.3em] text-white/45 group-hover:text-white/75 transition-colors duration-300">
            {lang === "en" ? "Leave a review" : "Dejar una reseña"}
            <MessageSquarePlus size={12} />
          </span>
        </motion.button>
      </div>

      {/* ── Carousel ── */}
      {items.length > 0 && (
        <motion.div
          className="relative z-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Card slide area */}
          <div className="relative overflow-hidden" style={{ minHeight: "260px" }}>
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) next();
                  else if (info.offset.x > 60) prev();
                }}
                style={{ cursor: "grab" }}
              >
                <ReviewCard item={items[current]} lang={lang} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation row: arrow · dots · arrow */}
          <div className="flex items-center justify-center gap-5 mt-7">
            {/* Prev */}
            <button
              onClick={prev}
              aria-label="Previous review"
              className="w-9 h-9 flex items-center justify-center text-white/30 hover:text-white transition-colors duration-300"
              style={{ border: "1px solid rgba(255,255,255,0.10)" }}
            >
              <ChevronLeft size={16} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {items.map((item, i) => (
                <button
                  key={item.key}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  aria-label={`Go to review ${i + 1}`}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? "1.75rem" : "0.375rem",
                    background: i === current ? items[current].color : "rgba(255,255,255,0.18)",
                  }}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={next}
              aria-label="Next review"
              className="w-9 h-9 flex items-center justify-center text-white/30 hover:text-white transition-colors duration-300"
              style={{ border: "1px solid rgba(255,255,255,0.10)" }}
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Progress bar */}
          {items.length > 1 && (
            <div className="mt-4 h-px w-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
              <motion.div
                key={`progress-${current}`}
                className="h-full origin-left"
                style={{ background: items[current].color }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 5, ease: "linear" }}
              />
            </div>
          )}
        </motion.div>
      )}

      {/* Metrics */}
      <div className="relative z-10 border-t border-white/[0.06] mt-12 pt-8 grid grid-cols-2 divide-x divide-white/[0.06]">
        {METRICS.map(({ num, color, es, en }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="py-6 px-3 sm:px-8 first:pl-0 last:pr-0 flex flex-col gap-1"
          >
            <p className="font-black leading-none text-white"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.4rem, 5vw, 3rem)" }}>
              {num}
            </p>
            <p className="text-white/25 leading-tight"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(0.55rem, 1.2vw, 0.65rem)", textTransform: "uppercase", letterSpacing: "0.3em" }}>
              {lang === "en" ? en : es}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Review form overlay */}
      <AnimatePresence>
        {showForm && (
          <ReviewForm
            lang={lang}
            onClose={() => setShowForm(false)}
            onSuccess={() => {
              setShowForm(false);
              setTimeout(loadReviews, 800);
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
