import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
// Forma correcta para export const
// Reemplazá el import de AboutSection por este:
import { AboutSection } from './components/sections/AboutSection';
import { Projects } from "@/components/sections/Projects";


import { TrustSection } from "./components/sections/TrustSection";
import { TechSection } from "./components/sections/TechSection";
import { WhatsNext } from "./components/sections/Whatsnext";

function App() {
  return (
    <Layout>
      <Hero />
       <AboutSection />
      <TrustSection />
     
     
      <Projects />
      <TechSection />
      <WhatsNext />
    </Layout>
  );
}

export default App;
