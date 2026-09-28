import { useEffect } from "react";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import { Stack } from "./components/Stack";
import { ui } from "./content";
import { LangProvider, useLang } from "./lang";

// Los links internos (#proyectos, #experiencia…) hacen scroll sin dejar el hash
// en la URL. Se mantienen como <a href="#…"> para teclado y lectores de pantalla.
const useCleanAnchors = () => {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element).closest?.('a[href^="#"]');
      const id = link?.getAttribute("href")?.slice(1);
      const target = id ? document.getElementById(id) : null;
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ block: "start" });
      if (id === "main") {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }
    };
    document.addEventListener("click", onClick);

    // Si alguien entra con un link viejo (/#experiencia), se respeta el scroll y se limpia la URL.
    if (location.hash) {
      document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView({ block: "start" });
      history.replaceState(null, "", location.pathname + location.search);
    }

    return () => document.removeEventListener("click", onClick);
  }, []);
};

const Page = () => {
  const { t } = useLang();
  useCleanAnchors();
  return (
    <>
      <a href="#main" className="skip-link">{t(ui.skip)}</a>
      <Nav />
      <main id="main">
        <Hero />
        <Projects />
        <Experience />
        <Stack />
      </main>
      <Contact />
    </>
  );
};

const App = () => (
  <LangProvider>
    <Page />
  </LangProvider>
);

export default App;
