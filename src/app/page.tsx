import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <StatsBar />
        <About />
        <Services />
        <Projects />
        <InteractiveTerminal />
        <ExperienceTimeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
