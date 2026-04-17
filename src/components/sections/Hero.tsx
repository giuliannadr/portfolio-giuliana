"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

// --- COMPONENTE TECH CARROUSEL ---
const technologies = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: ".NET", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "SQL Server", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", white: true },
];

const TechCarrousel = () => {
  const repeatedTechs = [...technologies, ...technologies, ...technologies];

  return (
    <div className="relative w-full mt-16 overflow-hidden">
      {/* Estilos inyectados para evitar errores de TypeScript */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 40s linear infinite;
        }
      `}} />

      <div
        className="relative overflow-hidden py-4"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)"
        }}
      >
        <div className="flex animate-marquee whitespace-nowrap gap-12 hover:[animation-play-state:paused]">
          {repeatedTechs.map((tech, idx) => (
            <div key={idx} className="group flex flex-col items-center justify-center min-w-[70px] cursor-pointer">
              <img
                src={tech.logo}
                alt={tech.name}
                className={`w-8 h-8 md:w-9 md:h-9 transition-all duration-300 transform-gpu group-hover:scale-110 
                  ${tech.white ? "dark:brightness-0 dark:invert" : ""}`}
              />
              <span className="mt-2 text-zinc-500 dark:text-zinc-400 font-medium text-[10px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- COMPONENTE HERO ---
export const Hero = () => {
  const { t } = useTranslation();
  const whatsappNumber = "5491128341223"; 
  const message = encodeURIComponent("¡Hola! Vi tu portfolio y me gustaría hablar sobre una idea que tengo.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section id="home" className="w-full pt-4 lg:pt-10 pr-6 sm:pr-8">
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center lg:text-left max-w-full lg:max-w-[750px]"
      >
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF6F00]/20 bg-[#FF6F00]/5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF6F00] mx-auto lg:mx-0">
          <Sparkles size={12} className="animate-pulse" />
          {t('hero.badge')}
        </div>

        {/* Title Container */}
        <h1 className="font-black tracking-tighter text-zinc-900 dark:text-white mb-8 leading-[0.9] flex flex-col">
          <span className="block whitespace-nowrap text-[clamp(1.8rem,5vw,4rem)] uppercase">
            {t('hero.title1')}
          </span>
          <span 
            className="text-[#FF6F00] italic font-light font-serif whitespace-nowrap transition-all duration-[1500ms] ease-in-out hover:brightness-125 cursor-pointer block leading-[1.1] text-[clamp(1.5rem,4.5vw,5rem)]"
          >
            {t('hero.title2')}
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-xl text-lg md:text-xl text-zinc-500 dark:text-zinc-400 mb-12 leading-relaxed mx-auto lg:mx-0 font-medium italic">
          "{t('hero.description')}"
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
          <a
            href="#projects"
            className="group px-10 py-5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-2xl hover:scale-[1.03] transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-black/5"
          >
            {t('hero.viewWork')} 
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden px-10 py-5 bg-transparent border-2 border-zinc-100 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 font-bold rounded-2xl transition-all duration-500 ease-in-out text-center hover:border-[#FF6F00]/50 hover:bg-[#FF6F00]/5 hover:text-[#FF6F00] hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,111,0,0.1)] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-150%] hover:before:translate-x-[150%] before:transition-transform before:duration-700 before:ease-in-out"
          >
            <span className="relative z-10">{t('hero.contact')}</span>
          </a>
        </div>

        <TechCarrousel />
      </motion.div>
    </section>
  );
};