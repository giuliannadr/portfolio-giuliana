import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Copy, Check, Instagram, Linkedin, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

const BLOBS = [
  { color: "#ff2200", w: 500, x: "75%", y: "30%", op: 0.18, cls: "blob-1" },
  { color: "#7C3AED", w: 350, x: "15%", y: "60%", op: 0.10, cls: "blob-2" },
  { color: "#EC4899", w: 280, x: "50%", y: "85%", op: 0.08, cls: "blob-1" },
];

export const Footer = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language === "en" ? "en" : "es";
  const [copied, setCopied] = useState(false);
  const [btnHov, setBtnHov] = useState(false);
  const email = "giulianadiroccodev@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const blobScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.05, 0.9]);

  // Mouse gradient
  const [lx, setLx] = useState(50);
  const [ly, setLy] = useState(50);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const blobX = useSpring(useTransform(rawX, [-1, 1], [-20, 20]), { stiffness: 30, damping: 25 });
  const blobY = useSpring(useTransform(rawY, [-1, 1], [-20, 20]), { stiffness: 30, damping: 25 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const nx = e.clientX / window.innerWidth;
      const ny = e.clientY / window.innerHeight;
      setLx(nx * 100);
      setLy(ny * 100);
      rawX.set((nx - 0.5) * 2);
      rawY.set((ny - 0.5) * 2);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [rawX, rawY]);

  const gradient = `
    radial-gradient(ellipse 60% 80% at ${72 + lx * 0.08}% ${38 + ly * 0.10}%, rgba(255,80,20,1) 0%, transparent 55%),
    radial-gradient(ellipse 45% 70% at ${15 + lx * 0.06}% ${58 + ly * 0.08}%, rgba(180,80,255,0.9) 0%, transparent 50%),
    radial-gradient(ellipse 40% 55% at ${50 + lx * 0.04}% ${10 + ly * 0.12}%, rgba(236,72,153,0.7) 0%, transparent 45%),
    linear-gradient(rgba(255,255,255,1), rgba(255,255,255,1))
  `;

  const whatsappUrl = `https://wa.me/5491150403408?text=${encodeURIComponent(
    lang === "en"
      ? "Hi! I saw your portfolio and I'd love to talk."
      : "¡Hola! Vi tu portfolio y me gustaría hablar."
  )}`;

  const headline  = lang === "en" ? "Let's connect."  : "Conectemos.";
  const sub       = lang === "en"
    ? "I'm open to new opportunities. Drop me a message and I'll reply within 24 hours."
    : "Estoy disponible para nuevas oportunidades. Escribime y te respondo en menos de 24 horas.";
  const btn       = lang === "en" ? "Write on WhatsApp" : "Escribime por WhatsApp";
  const note      = lang === "en" ? "No commitment. Just a conversation." : "Sin compromiso. Solo una charla.";
  const label     = lang === "en" ? "Open to work"    : "Disponible";

  const socials = [
    { icon: Instagram, href: "https://instagram.com/giulianna.dev",     label: "Instagram" },
    { icon: Linkedin,  href: "https://linkedin.com/in/giulianadirocco",  label: "LinkedIn"  },
    { icon: Github,    href: "https://github.com/giuliannadr",            label: "GitHub"    },
  ];

  return (
    <footer
      ref={ref}
      id="contact"
      className="relative bg-[#0A0A0A] py-28 md:py-40 px-5 sm:px-8 lg:px-10 flex flex-col items-center justify-center text-center"
    >
      {/* Edge fades */}
      <div className="absolute inset-x-0 top-0 h-28 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, #0A0A0A, transparent)" }} />
      <div className="absolute inset-x-0 bottom-0 h-28 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top, #0A0A0A, transparent)" }} />

      {/* Blob wrapper */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute inset-0" style={{ x: blobX, y: blobY, scale: blobScale }}>
          {BLOBS.map((b, i) => (
            <div key={i}
              className={`${b.cls} absolute blur-3xl`}
              style={{ background: b.color, width: b.w, height: b.w, left: b.x, top: b.y, opacity: b.op, transform: "translate(-50%,-50%)" }}
            />
          ))}
        </motion.div>
      </div>

      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex items-center gap-4 mb-10"
      >
        <div className="h-px w-12 bg-white/15" />
        <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white/30" style={{ fontFamily: "Poppins, sans-serif" }}>
          {label}
        </span>
        <div className="h-px w-12 bg-white/15" />
      </motion.div>

      {/* Headline with mouse gradient */}
      <div className="relative z-10 mb-6">
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-black uppercase leading-none"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "clamp(1.8rem, 10vw, 9rem)",
            letterSpacing: "-0.04em",
            paddingBottom: "0.12em",
            backgroundImage: gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {headline}
        </motion.h2>
      </div>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative z-10 text-white/45 mb-12 leading-relaxed"
        style={{ fontSize: "clamp(1rem, 2vw, 1.3rem)", maxWidth: "min(560px,88vw)" }}
      >
        {sub}
      </motion.p>

      {/* CTA Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.35 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onHoverStart={() => setBtnHov(true)}
        onHoverEnd={() => setBtnHov(false)}
        className="relative z-10 inline-flex items-center gap-3 overflow-hidden bg-white text-[#0A0A0A] font-black text-[10px] uppercase tracking-[0.3em] px-10 py-5 mb-5"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <span
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            opacity: btnHov ? 1 : 0,
            background: [
              "radial-gradient(ellipse 90% 160% at 8% 50%, rgba(204,21,0,0.50), transparent 55%)",
              "radial-gradient(ellipse 80% 140% at 92% 50%, rgba(124,58,237,0.42), transparent 55%)",
              "radial-gradient(ellipse 60% 110% at 50% -15%, rgba(6,182,212,0.30), transparent 50%)",
              "#ffffff",
            ].join(", "),
          }}
        />
        <span className="relative z-10 flex items-center gap-3">
          {btn}
          <ArrowUpRight size={14} />
        </span>
      </motion.a>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.55 }}
        className="relative z-10 text-[9px] font-black uppercase tracking-[0.4em] text-white/20 mb-8"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {note}
      </motion.p>

      {/* Email copy + social icons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-0 border border-white/10 overflow-hidden w-full sm:w-auto max-w-[min(460px,90vw)] sm:max-w-none"
      >
        {/* Copy email */}
        <button
          onClick={handleCopy}
          className="group flex items-center justify-between sm:justify-start gap-3 px-5 py-3.5 text-white/40 hover:text-white hover:bg-white/5 transition-all duration-300 border-b sm:border-b-0 sm:border-r border-white/10"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ fontFamily: "Poppins, sans-serif" }}>
            {copied ? (lang === "en" ? "Copied!" : "¡Copiado!") : (lang === "en" ? "Copy email" : "Copiar email")}
          </span>
          <motion.div animate={{ scale: copied ? 1.2 : 1 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
            {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
          </motion.div>
        </button>

        {/* Social icons */}
        <div className="flex">
          {socials.map(({ icon: Icon, href, label: lbl }, i) => (
            <a
              key={lbl}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={lbl}
              className={`flex flex-1 sm:flex-none items-center justify-center px-4 py-3.5 text-white/30 hover:text-white hover:bg-white/5 transition-all duration-300 ${i < socials.length - 1 ? "border-r border-white/10" : ""}`}
            >
              <Icon size={13} />
            </a>
          ))}
        </div>
      </motion.div>

      {/* Copyright line */}
      <div className="absolute bottom-0 inset-x-0 border-t border-white/[0.07] flex items-center justify-between px-5 sm:px-8 lg:px-10 py-4">
        <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/50" style={{ fontFamily: "Poppins, sans-serif" }}>
          © {new Date().getFullYear()} — Giuliana Di Rocco
        </p>
        <a
          href="#home"
          className="text-[9px] font-black uppercase tracking-[0.4em] text-white/50 hover:text-white transition-colors"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {lang === "en" ? "Back to top" : "Volver arriba"} ↑
        </a>
      </div>
    </footer>
  );
};
