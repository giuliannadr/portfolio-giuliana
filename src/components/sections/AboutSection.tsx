import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import { SPOTS_LIGHT } from "@/lib/textGradients";

const BLOBS = [
  { color: "#CC1500", w: 480, x: "88%", y: "28%", op: 0.06, cls: "blob-1" },
  { color: "#7C3AED", w: 360, x: "4%",  y: "66%", op: 0.05, cls: "blob-2" },
  { color: "#EC4899", w: 260, x: "46%", y: "95%", op: 0.04, cls: "blob-1" },
];

const STATS = [
  { es: "8.72 · Promedio UNLaM",         en: "8.72 · GPA UNLaM",              color: "#CC1500" },
  { es: "7 proyectos en producción",      en: "7 production projects",          color: "#7C3AED" },
  { es: "UNLAM · Egreso Jul 2026",          en: "UNLAM · Graduating Jul 2026",    color: "#06B6D4" },
];

const PILLARS = [
  {
    num: "01", color: "#CC1500",
    es: { title: "Base académica sólida",   body: "Tecnicatura en Desarrollo Web — UNLaM. 18/20 materias, promedio 8.72. Egreso julio 2026. Formación en backend, bases de datos, ingeniería de software y redes." },
    en: { title: "Strong academic base",    body: "Web Development Degree — UNLaM. 18/20 subjects, 8.72 GPA. Graduating July 2026. Training in backend, databases, software engineering and networking." },
  },
  {
    num: "02", color: "#7C3AED",
    es: { title: "Experiencia en producción", body: "3 proyectos reales deployados y funcionando. Trabajo freelance desde diciembre 2025. Cada uno implicó planificación real, deadlines reales y clientes reales." },
    en: { title: "Production experience",   body: "3 real projects deployed and running. Freelance work since December 2025. Each one involved real planning, real deadlines and real clients." },
  },
  {
    num: "03", color: "#06B6D4",
    es: { title: "Stack moderno y versátil", body: "React, Node.js, TypeScript, Angular, Java y .NET. No me limito a un lenguaje — elijo la mejor herramienta para cada problema y aprendo lo que haga falta." },
    en: { title: "Modern & versatile stack", body: "React, Node.js, TypeScript, Angular, Java and .NET. I'm not limited to one language — I pick the best tool for each problem and learn whatever's needed." },
  },
];

export const AboutSection = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language === "en" ? "en" : "es";
  const ref  = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const blobY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  const headline = lang === "en" ? "About me." : "Sobre mí.";
  const italic   = lang === "en" ? "what makes me different." : "lo que me hace diferente.";
  const badge    = lang === "en" ? "About" : "Sobre mí";
  const quote    = lang === "en"
    ? "Hi! I'm Giuliana — a Full Stack Developer with a GPA of 8.72 and 3 production projects shipped."
    : "¡Hola! Soy Giuliana — Desarrolladora Full Stack con promedio 8.72 y 3 proyectos en producción.";

  return (
    <section ref={ref} id="about" className="bg-[#F5F5F5] py-20 md:py-32 px-5 sm:px-8 lg:px-10 relative">

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
        <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#0A0A0A]/25" style={{ fontFamily: "Poppins, sans-serif" }}>02</span>
        <div className="h-px flex-1 bg-[#0A0A0A]/[0.08]" />
        <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#0A0A0A]/25" style={{ fontFamily: "Poppins, sans-serif" }}>{badge}</span>
      </div>

      {/* Headline */}
      <div className="mb-14 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="block font-black uppercase leading-[0.88]"
          style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(2.5rem, 6vw, 6.5rem)", letterSpacing: "-0.03em", backgroundImage: SPOTS_LIGHT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
        >
          {headline}
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="block font-serif italic font-light leading-[1.05] text-[#0A0A0A]/20"
          style={{ fontSize: "clamp(2rem, 5vw, 5.5rem)" }}
        >
          {italic}
        </motion.h2>
      </div>

      {/* Photo + quote + identity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex justify-center mb-14"
      >
        <div className="flex flex-col sm:flex-row items-center gap-8">
          {/* Circular photo */}
          <div className="relative shrink-0">
            <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden"
              style={{ boxShadow: "0 0 0 2px rgba(0,0,0,0.08), 0 0 0 4px rgba(204,21,0,0.20)" }}>
              <img src="/giuliprofile.jpeg" alt="Giuliana Di Rocco"
                className="w-full h-full object-cover object-center"
                style={{ filter: "contrast(1.08) saturate(1.1) brightness(1.02)" }} />
            </div>
            <div className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-[#F5F5F5] flex items-center justify-center"
              style={{ boxShadow: "0 0 0 2px rgba(0,0,0,0.08)" }}>
              <div className="w-4 h-4 rounded-full bg-emerald-500 animate-pulse" />
            </div>
          </div>

          {/* Quote + identity + stats */}
          <div className="flex flex-col gap-4 text-center sm:text-left">
            <p className="font-serif italic text-[#0A0A0A]/60 leading-snug" style={{ fontSize: "clamp(1.1rem, 2vw, 1.7rem)" }}>
              "{quote}"
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-3 gap-y-1">
              <span className="font-black text-[#0A0A0A]/70 text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>Giuliana Di Rocco</span>
              <span className="text-[#0A0A0A]/15">·</span>
              <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#0A0A0A]/30" style={{ fontFamily: "Poppins, sans-serif" }}>
                {lang === "en" ? "Full Stack Developer · UNLAM" : "Desarrolladora Full Stack · UNLAM"}
              </span>
              <span className="text-[#0A0A0A]/15">·</span>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#0A0A0A]/30" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {lang === "en" ? "Open to work" : "Disponible"}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
              {STATS.map((s, i) => (
                <span key={i} className="text-[8.5px] font-black uppercase tracking-[0.2em] px-3 py-1.5"
                  style={{ fontFamily: "Poppins, sans-serif", color: s.color, background: `${s.color}10`, border: `1px solid ${s.color}22` }}>
                  {lang === "en" ? s.en : s.es}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Pillars */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#0A0A0A]/[0.06]">
        {PILLARS.map((p, i) => {
          const c = lang === "en" ? p.en : p.es;
          return (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="py-8 md:px-8 first:md:pl-0 last:md:pr-0"
            >
              <motion.div className="h-[2px] w-8 mb-6 origin-left" style={{ background: p.color }}
                initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }} />
              <span className="block font-black mb-3 leading-none" style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.65rem", letterSpacing: "0.15em", color: p.color }}>{p.num}</span>
              <h3 className="font-black uppercase leading-none text-[#0A0A0A] mb-3" style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1rem, 2vw, 1.35rem)", letterSpacing: "-0.02em" }}>{c.title}</h3>
              <p className="text-[#0A0A0A]/40 text-sm leading-relaxed">{c.body}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
