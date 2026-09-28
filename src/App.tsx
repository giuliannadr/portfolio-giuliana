import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import { Stack } from "./components/Stack";
import { ui } from "./content";
import { LangProvider, useLang } from "./lang";

const Page = () => {
  const { t } = useLang();
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
