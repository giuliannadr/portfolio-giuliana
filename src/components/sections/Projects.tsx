import { ArrowUpRight, X, Eye, ChevronLeft, ChevronRight, ChevronDown, Github } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import { RAW_PROJECT_DATA } from "@/data/projectsData";

const BG = "#0F0F11";
const BLOBS = [
  { color: "#CC1500", w: 500, x: "15%", y: "20%", op: 0.04, cls: "blob-1" },
  { color: "#7C3AED", w: 550, x: "85%", y: "50%", op: 0.05, cls: "blob-2" },
  { color: "#06B6D4", w: 450, x: "25%", y: "85%", op: 0.04, cls: "blob-1" },
];
const ACCENTS = ["#CC1500", "#CC1500", "#CC1500", "#CC1500", "#CC1500"];

type ProjectCategory = "professional" | "academic";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image?: string;
  video?: string;
  liveUrl?: string;
  githubUrl?: string;
  githubBackendUrl?: string;
  visitLabel?: string;
  inProgress?: boolean;
  stack: string[];
  type: ProjectCategory;
  process?: string[];
}

const AutoplayVideo = ({ src, className }: { src: string; className?: string }) => (
  <video
    ref={(el) => { if (el) el.muted = true; }}
    src={src}
    muted
    loop
    playsInline
    autoPlay
    className={className}
  />
);

/* ── PROCESS OVERLAY ───────────────────────────────────────── */
const ProcessOverlay = ({ project, lang, onClose }: { project: Project; lang: string; onClose: () => void }) => {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const before = project.process?.slice(0, 3) ?? [];
  const after  = project.process?.slice(3) ?? [];
  const all    = project.process ?? [];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1100] bg-black/98 overflow-y-auto p-6 md:p-10 flex flex-col">
      <div className="flex justify-between items-center pb-6 border-b border-white/8 mb-8">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[#CC1500] font-black text-xs uppercase tracking-wider">[PROCESS]</span>
          <span className="text-white/40 text-sm font-semibold uppercase">{project.title}</span>
        </div>
        <button onClick={onClose}
          className="w-10 h-10 flex items-center justify-center border border-white/10 bg-white/5 text-white/60 hover:border-[#CC1500] hover:text-white transition-all rounded-lg">
          <X size={16} />
        </button>
      </div>

      <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col justify-center">
        <div className="mb-10 text-center">
          <h2 className="font-black tracking-tighter uppercase leading-[0.88] text-white"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(3rem, 9vw, 8rem)", letterSpacing: "-0.03em" }}>
            {project.title}
          </h2>
          <span className="block font-black uppercase text-white/15 leading-none mt-1"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.2rem, 4vw, 2.5rem)", letterSpacing: "-0.02em" }}>
            {lang === "en" ? "before & after." : "antes & después."}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h4 className="font-mono text-[#CC1500] font-black text-xs uppercase tracking-wider mb-4 text-center">BEFORE</h4>
            <div className="grid grid-cols-1 gap-4">
              {before.map((img, i) => (
                <div key={i} className="relative aspect-video bg-white/5 overflow-hidden border border-white/10 cursor-zoom-in hover:border-white/30 transition-all rounded-xl"
                  onClick={() => setLightboxIdx(i)}>
                  <img src={img} alt="Before" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-mono text-emerald-500 font-black text-xs uppercase tracking-wider mb-4 text-center">AFTER (REDESIGN)</h4>
            <div className="grid grid-cols-1 gap-4">
              {after.map((img, i) => (
                <div key={i} className="relative aspect-video bg-white/5 overflow-hidden border border-white/10 cursor-zoom-in hover:border-white/30 transition-all rounded-xl"
                  onClick={() => setLightboxIdx(i + before.length)}>
                  <img src={img} alt="After" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1200] bg-black/98 flex flex-col items-center justify-center p-4"
            onClick={() => setLightboxIdx(null)}>
            <button onClick={(e) => { e.stopPropagation(); setLightboxIdx(null); }}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 text-white/60 hover:text-white rounded-lg">
              <X size={16} />
            </button>
            {lightboxIdx > 0 && (
              <button onClick={(e) => { e.stopPropagation(); setLightboxIdx(prev => (prev! - 1 + all.length) % all.length); }}
                className="absolute left-6 w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 text-white/60 hover:text-white rounded-lg">
                <ChevronLeft size={16} />
              </button>
            )}
            {lightboxIdx < all.length - 1 && (
              <button onClick={(e) => { e.stopPropagation(); setLightboxIdx(prev => (prev! + 1) % all.length); }}
                className="absolute right-6 w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 text-white/60 hover:text-white rounded-lg">
                <ChevronRight size={16} />
              </button>
            )}
            <div className="max-w-5xl max-h-[80vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <img src={all[lightboxIdx]} alt="Zoomed" className="max-w-full max-h-[80vh] object-contain rounded-xl" />
            </div>
            <div className="absolute bottom-6 text-white/40 font-mono text-[10px]">
              {lightboxIdx + 1} / {all.length} — {lightboxIdx < before.length ? "BEFORE" : "AFTER"}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ── PROJECTS SECTION ───────────────────────────────────────── */
export const Projects = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "en" ? "en" : "es";
  const ref  = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const blobY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const [activeTab, setActiveTab]   = useState<ProjectCategory>("professional");
  const [showAll, setShowAll]       = useState(false);
  const [hoveredId, setHoveredId]   = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [processId, setProcessId]   = useState<string | null>(null);

  const VISIBLE_COUNT = 6;

  const rawData = RAW_PROJECT_DATA;
  const projects: Project[] = rawData.map(p => {
    const key = p.id === "la-quinta-miri" ? "miri"
      : p.id === "inv-boda" ? "invBoda"
      : p.id === "inv-xv"   ? "invXv"
      : p.id;
    return {
      ...p,
      title:           t(`projects.items.${key}.title`),
      category:        t(`projects.items.${key}.category`),
      description:     t(`projects.items.${key}.description`),
      longDescription: t(`projects.items.${key}.longDescription`),
      type: p.type as ProjectCategory,
    } as Project;
  });

  const filtered    = projects.filter(p => p.type === activeTab);
  const visible     = showAll ? filtered : filtered.slice(0, VISIBLE_COUNT);
  const selected    = projects.find(p => p.id === selectedId);
  const processProj = projects.find(p => p.id === processId);

  useEffect(() => { setShowAll(false); }, [activeTab]);

  return (
    <section ref={ref} id="projects" className="bg-[#0F0F11] pt-14 md:pt-20 pb-20 md:pb-28 px-5 sm:px-8 lg:px-10 relative overflow-hidden">

      {/* Edge fades */}
      <div className="absolute inset-x-0 top-0 h-24 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, #0F0F11, transparent)" }} />
      <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top, #0F0F11, transparent)" }} />

      {/* Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute inset-0" style={{ y: blobY }}>
          {BLOBS.map((b, i) => (
            <div key={i} className={`${b.cls} absolute blur-3xl`}
              style={{ background: b.color, width: b.w, height: b.w, left: b.x, top: b.y, opacity: b.op, transform: "translate(-50%,-50%)" }} />
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-20">
        {/* Label */}
        <div className="flex items-center gap-5 mb-14 border-b border-white/10 pb-8">
          <div className="flex items-center gap-2 font-mono text-[9px] text-[#CC1500] uppercase tracking-[0.25em]">
            <span>05</span>
            <span>//</span>
            <span>WORKS</span>
          </div>
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white/20" style={{ fontFamily: "Poppins, sans-serif" }}>{t("projects.subtitle")}</span>
        </div>

        {/* Title */}
        <div className="mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="block font-black uppercase leading-[0.88] text-white"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(2.3rem, 6vw, 5.5rem)", letterSpacing: "-0.02em" }}
          >
            <span className="mr-3 select-none" style={{ WebkitTextStroke: "1.2px rgba(255,255,255,0.9)", WebkitTextFillColor: "transparent", color: "transparent" }}>
              {lang === "en" ? "MY" : "MI"}
            </span>
            <span className="text-white">
              {lang === "en" ? "WORK." : "TRABAJO."}
            </span>
          </motion.h2>
        </div>

        {/* Tabs */}
        <div className="flex gap-10 border-b border-white/10 mb-10">
          {(["professional", "academic"] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-5 text-[11px] font-black uppercase tracking-[0.3em] transition-all relative ${activeTab === tab ? "text-white animate-pulse" : "text-white/40 hover:text-white/70"}`}
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {t(`projects.tabs.${tab}`)}
              {activeTab === tab && (
                <motion.div layoutId="projects-active-indicator"
                  className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#CC1500]" />
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid of Packages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-14">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => {
              const accent = ACCENTS[projects.indexOf(p) % ACCENTS.length];
              const isHov  = hoveredId === p.id;

              return (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true, margin: "-40px" }}
                  onHoverStart={() => setHoveredId(p.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  onClick={() => setSelectedId(p.id)}
                  className="group relative border border-white/[0.08] hover:border-[#CC1500]/40 bg-white/[0.01] rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full cursor-pointer select-none"
                >
                  {/* Card Header (PKG bar) */}
                  <div className="bg-white/[0.02] border-b border-white/[0.06] px-4 py-2.5 flex items-center justify-between font-mono text-[9px] text-white/40 uppercase tracking-wider shrink-0 select-none">
                    <div className="flex items-center gap-1.5 font-bold text-white/50">
                      <span className="text-[#CC1500]">[PKG-{String(projects.indexOf(p) + 1).padStart(2, "0")}]</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {p.inProgress ? (
                        <span className="text-amber-500 font-bold tracking-widest">{lang === "en" ? "IN_PROGRESS" : "EN_PROCESO"}</span>
                      ) : (
                        <span className="text-emerald-500 font-bold tracking-widest">{lang === "en" ? "LIVE" : "COMPLETO"}</span>
                      )}
                    </div>
                  </div>

                  {/* Media Preview Area */}
                  <div className="relative aspect-[16/10] bg-[#0A0A0A] overflow-hidden shrink-0 border-b border-white/[0.04]">
                    <motion.div className="w-full h-full" animate={{ scale: isHov ? 1.03 : 1 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
                      {p.video ? (
                        <AutoplayVideo src={p.video} className="w-full h-full object-cover" />
                      ) : p.image ? (
                        <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full" style={{ background: `radial-gradient(ellipse 65% 80% at 28% 40%, ${accent}30 0%, transparent 62%), #0A0A0A` }} />
                      )}
                    </motion.div>
                    <div className="absolute inset-0 bg-[#0A0A0A]/20 pointer-events-none transition-opacity duration-300 group-hover:opacity-0" />
                  </div>

                  {/* Tech Specs Table Area */}
                  <div className="p-4 flex-1 flex flex-col justify-between font-mono text-[10px]">
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-baseline py-1 border-b border-white/[0.04]">
                        <span className="text-white/30 uppercase text-[9px]">NAME</span>
                        <span className="text-white/80 font-bold tracking-wide truncate max-w-[65%]" style={{ fontFamily: "Poppins, sans-serif" }}>{p.title}</span>
                      </div>
                      <div className="flex justify-between items-baseline py-1 border-b border-white/[0.04]">
                        <span className="text-white/30 uppercase text-[9px]">SCOPE</span>
                        <span className="text-white/60 uppercase text-[9px] tracking-wider">{p.category}</span>
                      </div>
                      <div className="flex justify-between items-baseline py-1">
                        <span className="text-white/30 uppercase text-[9px]">STACK</span>
                        <span className="text-white/60 truncate max-w-[65%] text-right">{p.stack.slice(0, 3).join(", ")}</span>
                      </div>
                    </div>
                    
                    {/* Click overlay indicator */}
                    <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-white/[0.04] text-[8.5px] text-[#CC1500]/70 font-bold tracking-wider justify-end">
                      <span>{lang === "en" ? "VIEW DETAILS" : "VER DETALLES"}</span>
                      <ArrowUpRight size={10} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Show more / Show less */}
        {filtered.length > VISIBLE_COUNT && (
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex justify-center mt-6"
          >
            <button
              onClick={() => setShowAll(prev => !prev)}
              className="flex items-center gap-2.5 px-7 py-3.5 border border-white/10 text-white/40 hover:border-[#CC1500] hover:text-[#CC1500] transition-all duration-300"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {showAll
                ? (lang === "en" ? "Show less" : "Ver menos")
                : (lang === "en" ? `Show more · ${filtered.length - VISIBLE_COUNT} more` : `Ver más · ${filtered.length - VISIBLE_COUNT} más`)
              }
              <motion.span animate={{ rotate: showAll ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown size={11} />
              </motion.span>
            </button>
          </motion.div>
        )}
      </div>

      {/* ── SLIDE-OUT SIDE DRAWER ── */}
      <AnimatePresence>
        {selectedId && selected && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 0.6 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm pointer-events-auto" 
            />

            {/* Side Panel Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[1001] w-full max-w-xl sm:max-w-2xl bg-[#0F0F11] border-l border-white/10 flex flex-col shadow-2xl pointer-events-auto overflow-hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 md:px-8 py-4 border-b border-white/[0.08] shrink-0 bg-white/[0.01]">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[#CC1500] font-black uppercase text-[10px] tracking-widest">
                    [PKG-{String(projects.indexOf(selected) + 1).padStart(2, "0")}]
                  </span>
                  <span className="text-white/20">|</span>
                  <span className="font-mono text-white/40 uppercase text-[9px] tracking-widest">
                    {selected.category}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {selected.process && (
                    <button 
                      onClick={() => { setSelectedId(null); setProcessId(selected.id); }}
                      className="flex items-center gap-2 px-3 py-1.5 text-[9px] font-black uppercase tracking-widest border border-[#CC1500]/30 text-[#CC1500] hover:bg-[#CC1500] hover:text-white transition-all"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      <Eye size={11} /> {lang === "en" ? "Process" : "Proceso"}
                    </button>
                  )}
                  <button 
                    onClick={() => setSelectedId(null)}
                    className="w-8 h-8 flex items-center justify-center border border-white/10 bg-white/[0.02] text-white/40 hover:border-[#CC1500] hover:text-white transition-all rounded-lg"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto scrollbar-hide p-6 md:p-8 flex flex-col gap-6">
                
                {/* Media Banner */}
                <div className="relative aspect-[16/10] bg-[#0A0A0A] overflow-hidden rounded-xl border border-white/[0.06] shrink-0">
                  {selected.video ? (
                    <AutoplayVideo src={selected.video} className="w-full h-full object-cover" />
                  ) : selected.image ? (
                    <img src={selected.image} className="w-full h-full object-cover" alt={selected.title} />
                  ) : (
                    <div className="w-full h-full" style={{ background: `radial-gradient(ellipse 80% 80% at 35% 45%, #CC150045 0%, transparent 60%), #0A0A0A` }} />
                  )}
                </div>

                {/* Progress Alert */}
                {selected.inProgress && (
                  <div className="flex items-center gap-3 px-4 py-3 border border-amber-500/25 bg-amber-500/5 rounded-xl shrink-0">
                    <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
                    <span className="text-amber-400 font-bold text-[9px] uppercase tracking-[0.28em] font-mono">
                      {lang === "en" ? "IN_PROGRESS — SHIPPED BETA" : "EN_PROCESO — SHIPPED BETA"}
                    </span>
                  </div>
                )}

                {/* Info & Description */}
                <div className="flex flex-col gap-3">
                  <h2 
                    className="font-black uppercase tracking-tight text-white leading-none"
                    style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", letterSpacing: "-0.02em" }}
                  >
                    {selected.title}
                  </h2>
                  <p className="text-white/50 text-sm leading-relaxed max-w-xl pt-2">
                    {selected.longDescription}
                  </p>
                </div>

                {/* Technical specs table block */}
                <div className="flex flex-col gap-6 pt-6 border-t border-white/[0.08]">
                  <div className="flex flex-col gap-2 bg-white/[0.01] border border-white/[0.06] p-5 rounded-xl font-mono text-xs">
                    <div className="flex justify-between items-baseline py-1.5 border-b border-white/[0.04]">
                      <span className="text-white/30 uppercase text-[9px]">PACKAGE CODE</span>
                      <span className="text-[#CC1500] font-black uppercase text-[10px]">[PKG-{String(projects.indexOf(selected) + 1).padStart(2, "0")}]</span>
                    </div>
                    <div className="flex justify-between items-baseline py-1.5 border-b border-white/[0.04]">
                      <span className="text-white/30 uppercase text-[9px]">CLASSIFICATION</span>
                      <span className="text-white/70 uppercase">{selected.category}</span>
                    </div>
                    <div className="flex justify-between items-baseline py-1.5 last:border-0 last:pb-0">
                      <span className="text-white/30 uppercase text-[9px]">DEPLOYMENT</span>
                      <span className="text-emerald-500 font-bold uppercase">{selected.liveUrl ? "VERCEL_PROD" : "GITHUB_SRC"}</span>
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div>
                    <h4 className="text-white/30 text-[9px] uppercase tracking-[0.25em] font-bold mb-3 font-mono">SPECIFICATION STACK</h4>
                    <div className="flex flex-wrap gap-2">
                      {selected.stack.map(tech => (
                        <span key={tech} className="px-3 py-1.5 bg-white/5 text-[9px] text-white/50 font-black uppercase border border-white/5 flex items-center gap-2 rounded font-mono">
                          <div className="w-1 h-1 bg-[#CC1500]" /> {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    {selected.liveUrl && (
                      <a href={selected.liveUrl} target="_blank" rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-3 py-4 bg-white text-black font-black text-[10px] uppercase tracking-widest hover:bg-[#CC1500] hover:text-white transition-all group rounded-lg"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        {selected.visitLabel ?? (lang === "en" ? "Visit site" : "Ver sitio")}
                        <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                    {selected.githubUrl && (
                      <a href={selected.githubUrl} target="_blank" rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-3 py-4 bg-white/5 text-white border border-white/10 font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all group rounded-lg"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        <Github size={13} className="text-[#CC1500] group-hover:scale-110 transition-transform" />
                        {selected.githubBackendUrl ? "Frontend" : "GitHub"}
                      </a>
                    )}
                    {selected.githubBackendUrl && (
                      <a href={selected.githubBackendUrl} target="_blank" rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-3 py-4 bg-white/5 text-white border border-white/10 font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all group rounded-lg"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        <Github size={13} className="text-[#CC1500] group-hover:scale-110 transition-transform" />
                        Backend
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── PROCESS OVERLAY ── */}
      <AnimatePresence>
        {processId && processProj && (
          <ProcessOverlay project={processProj} lang={lang} onClose={() => setProcessId(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};
