import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { L, Lang } from "./content";

const STORAGE_KEY = "lang";

const initialLang = (): Lang => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "es" || saved === "en") return saved;
  } catch {
    // Sin acceso a storage (modo privado, etc.): se decide por el navegador.
  }
  return navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
};

type LangContext = { lang: Lang; toggle: () => void; t: (text: L) => string };

const Ctx = createContext<LangContext | null>(null);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(initialLang);

  // <html lang> sigue al idioma activo para buscadores y lectores de pantalla.
  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignorado: el idioma igual cambia, solo no se recuerda.
    }
  }, [lang]);

  const toggle = () => setLang(l => (l === "es" ? "en" : "es"));
  const t = (text: L) => text[lang];

  return <Ctx.Provider value={{ lang, toggle, t }}>{children}</Ctx.Provider>;
};

export const useLang = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
};
