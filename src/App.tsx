import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "./components/sections/AboutSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";

import { Projects } from "@/components/sections/Projects";
import { TechSection } from "./components/sections/TechSection";
import { WhatsNext } from "./components/sections/Whatsnext";
import { Loader } from "@/components/ui/Loader";

function App() {
  return (
    <>
      <Loader onDone={() => {}} />
      <Layout>
        <Hero />
        <AboutSection />
        <ExperienceSection />
        {/* <TrustSection /> */}
        <Projects />
        <TechSection />
        <WhatsNext />
      </Layout>
    </>
  );
}

export default App;
