"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { useTranslation } from "react-i18next";

const menuItems = [
  { id: "home",       es: "Inicio",       en: "Home"       },
  { id: "about",      es: "Sobre mí",     en: "About"      },
  { id: "experience", es: "Experiencia",  en: "Experience" },
  { id: "trust",      es: "Feedback",     en: "Feedback"   },
  { id: "projects",   es: "Proyectos",    en: "Projects"   },
  { id: "tech",       es: "Tecnologías",  en: "Tech"       },
  { id: "contact",    es: "Contacto",     en: "Contact"    },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { i18n } = useTranslation();
  const lang = i18n.language === "en" ? "en" : "es";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    window.history.pushState("", document.title, window.location.pathname);
    setIsOpen(false);
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(lang === "en" ? "es" : "en");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      if (isAtBottom) { setActiveSection("contact"); return; }
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const top = (section as HTMLElement).offsetTop;
        if (window.scrollY >= top - window.innerHeight / 3) {
          if (menuItems.some(item => item.id === section.id)) {
            setActiveSection(section.id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── DESKTOP NAV ── */}
      <nav
        className={`hidden xl:flex fixed top-0 left-0 right-0 z-50 h-16 items-center justify-between px-10 xl:px-14 transition-all duration-300 ${
          scrolled
            ? "bg-[#0A0A0A] border-b border-white/8 shadow-[0_1px_0_0_rgba(255,255,255,0.04)]"
            : "bg-transparent"
        }`}
      >
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="font-black tracking-tighter uppercase text-sm text-white hover:text-[#CC1500] transition-colors"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Giuliana Di Rocco
        </a>

        <div className="flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`relative text-[10px] font-bold uppercase tracking-[0.2em] pb-0.5 transition-all ${
                activeSection === item.id
                  ? "text-white"
                  : "text-white/30 hover:text-white"
              }`}
            >
              {item[lang]}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNavLine"
                  className="absolute -bottom-1 left-0 right-0 h-[1px] bg-[#CC1500]"
                />
              )}
            </a>
          ))}

          <a
            href={lang === "en" ? "/CV_Giuliana_DiRocco_EN.pdf" : "/CV_Giuliana_DiRocco_ES.pdf"}
            download
            className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.2em] bg-white text-[#0A0A0A] hover:bg-white/85 px-3 py-1.5 transition-all duration-300"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <Download size={10} />
            CV
          </a>
          <button
            onClick={toggleLanguage}
            className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 hover:text-[#CC1500] transition-colors border-l border-white/10 pl-8"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
        </div>
      </nav>

      {/* ── MOBILE HEADER ── */}
      <div
        className={`xl:hidden fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-5 transition-all duration-300 ${
          scrolled ? "bg-[#0A0A0A] border-b border-white/8" : "bg-transparent"
        }`}
      >
        <a
          href="#home"
          className="font-black tracking-tighter uppercase text-[11px] text-white"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Giuliana Di Rocco
        </a>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-[#CC1500] transition-colors"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
          <button onClick={() => setIsOpen(true)} className="p-1 text-white">
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* ── MOBILE MENU OVERLAY ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden fixed inset-0 z-[100] bg-[#0A0A0A] flex flex-col px-6 py-8"
          >
            <div className="flex justify-between items-center mb-16">
              <span
                className="font-black tracking-tighter uppercase text-[11px] text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Giuliana Di Rocco
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-white/40 hover:text-white transition-colors"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  initial={{ x: -24, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center justify-between py-5 border-b border-white/5 group"
                >
                  <span
                    className="text-4xl font-black uppercase tracking-tighter"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      backgroundImage: "linear-gradient(120deg, #CC1500 0%, #ffffff 45%, #7C3AED 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: activeSection === item.id ? "white" : "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {item[lang]}
                  </span>
                  <span className="text-white/20 group-hover:text-[#CC1500] transition-colors text-2xl">
                    →
                  </span>
                </motion.a>
              ))}
            </nav>

            <a
              href={lang === "en" ? "/CV_Giuliana_DiRocco_EN.pdf" : "/CV_Giuliana_DiRocco_ES.pdf"}
              download
              className="inline-flex items-center gap-2 mt-8 mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-white/35 hover:text-white transition-colors"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <Download size={11} />
              {lang === "en" ? "Download CV" : "Descargar CV"}
            </a>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
              © 2026 Giuliana Di Rocco
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
