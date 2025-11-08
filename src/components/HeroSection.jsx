import Spline from '@splinetool/react-spline';
import { ArrowRight, Code } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950 pointer-events-none" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-center px-6 py-24 md:px-10 lg:px-12 lg:py-32">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium backdrop-blur">
          <Code size={14} /> Coding Programmer Vibes
        </span>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Ibnu Nur Ramadani
        </h1>
        <p className="mt-3 text-lg text-slate-200 sm:text-xl italic">
          Creative Programmer & Digital Leader
        </p>
        <p className="mt-6 max-w-2xl text-slate-300">
          "Coding is my playground — solving problems, building dreams."
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-slate-900 transition hover:bg-slate-100"
          >
            Lihat Proyek
            <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/0 px-5 py-3 text-white transition hover:bg-white/10"
          >
            Kontak Saya
          </a>
        </div>
      </div>
    </section>
  );
}
