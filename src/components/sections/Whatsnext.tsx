import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BookOpen, Code2, ArrowUpRight } from "lucide-react";

interface LearningItem {
  label: string;
  tag: string;
  icon: React.ReactNode;
  href?: string;
}

export const WhatsNext = () => {
  const { t } = useTranslation();

  const learningItems: LearningItem[] = [
    {
      label: t("whatsNext.items.nextjs"),
      tag: t("whatsNext.tags.exploring"),
      icon: <Code2 className="w-4 h-4" />,
    },
    {
      label: t("whatsNext.items.systemDesign"),
      tag: t("whatsNext.tags.studying"),
      icon: <Code2 className="w-4 h-4" />,
    },
    {
      label: t("whatsNext.items.postgres"),
      tag: t("whatsNext.tags.practicing"),
      icon: <Code2 className="w-4 h-4" />,
    },
  ];

  return (
    <section className="w-full py-8">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <span className="text-[#FF6F00] text-[10px] font-bold uppercase tracking-[0.4em] block mb-4">
          {t("whatsNext.badge")}
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight text-white">
          {t("whatsNext.title")}{" "}
          <span className="text-[#FF6F00] italic font-light font-serif">
            {t("whatsNext.titleItalic")}
          </span>
        </h2>
      </motion.div>

      <div className="flex flex-col gap-5">

        {/* UTN Card — destacada */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative overflow-hidden rounded-[2rem] border border-[#FF6F00]/30 bg-[#FF6F00]/5 backdrop-blur-[20px] p-7 group"
        >
          {/* Glow sutil */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FF6F00]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#FF6F00]/10 border border-[#FF6F00]/20 text-[#FF6F00] shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-1.5">
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] px-3 py-1 rounded-full bg-[#FF6F00] text-white">
                  {t("whatsNext.tags.starting")} 
                </span>
              </div>
              <p className="text-white font-bold text-base md:text-lg tracking-tight">
                {t("whatsNext.items.utn")}
              </p>
              <p className="text-white/40 text-xs mt-0.5 font-mono">
                {t("whatsNext.items.utnSub")}
              </p>
            </div>

            
          </div>
        </motion.div>

        {/* Currently learning items */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {learningItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="relative rounded-[1.5rem] border border-white/8 bg-zinc-800/40 backdrop-blur-[20px] p-5 group hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-white/40 group-hover:text-[#FF6F00] group-hover:border-[#FF6F00]/30 transition-all duration-300">
                  {item.icon}
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/30 group-hover:text-[#FF6F00]/60 transition-colors duration-300 mt-1">
                  {item.tag}
                </span>
              </div>
              <p className="text-white/70 text-sm font-medium leading-snug group-hover:text-white/90 transition-colors duration-300">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
