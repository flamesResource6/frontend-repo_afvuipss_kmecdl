import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsContactSection from './components/SkillsContactSection';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsContactSection />
      <footer className="border-t border-white/10 bg-slate-950/90 py-8 text-center text-sm text-slate-300">
        © {new Date().getFullYear()} Ibnu Nur Ramadani · Built with passion for code & creativity
      </footer>
    </div>
  );
}

export default App;
