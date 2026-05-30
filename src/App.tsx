import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/ui/Marquee";
import { AboutSection } from "./components/sections/AboutSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { TrustSection } from "./components/sections/TrustSection";
import { Projects } from "@/components/sections/Projects";
import { TechSection } from "./components/sections/TechSection";
import { WhatsNext } from "./components/sections/Whatsnext";

function App() {
  return (
    <Layout>
      <Hero />
      <Marquee />
      <AboutSection />
      <ExperienceSection />
      <TrustSection />
      <Projects />
      <TechSection />
      <WhatsNext />
    </Layout>
  );
}

export default App;
