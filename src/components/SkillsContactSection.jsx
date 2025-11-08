import { Mail, Linkedin, Github, Award, Layers, Cpu, Server } from 'lucide-react';

const skills = [
  { name: 'HTML/CSS', icon: Layers },
  { name: 'JavaScript', icon: Cpu },
  { name: 'React', icon: Layers },
  { name: 'Node.js', icon: Cpu },
  { name: 'UI/UX', icon: Award },
  { name: 'Network', icon: Server },
];

export default function SkillsContactSection() {
  return (
    <section id="skills" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <h2 className="text-3xl font-bold text-slate-900">Keahlian</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {skills.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.name} className="group flex flex-col items-center rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:bg-white hover:shadow">
                <Icon className="text-slate-700" size={22} />
                <span className="mt-2 text-sm font-medium text-slate-800">{s.name}</span>
              </div>
            );
          })}
        </div>

        <div id="contact" className="mt-16 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-8">
          <h3 className="text-2xl font-semibold text-slate-900">Kontak</h3>
          <p className="mt-2 text-slate-600">Siap kolaborasi atau diskusi proyek? Kirim pesan langsung.</p>
          <form className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <input type="text" placeholder="Nama" className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:outline-none" />
            <input type="email" placeholder="Email" className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:outline-none" />
            <textarea placeholder="Pesan" className="md:col-span-2 h-32 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:outline-none" />
            <button type="button" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-800">Kirim</button>
          </form>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a href="mailto:ibnu@example.com" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900"><Mail size={18}/> Email</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900"><Linkedin size={18}/> LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900"><Github size={18}/> GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
