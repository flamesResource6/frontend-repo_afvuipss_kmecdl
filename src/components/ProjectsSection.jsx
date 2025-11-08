import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Web App – Task Manager',
    desc: 'Aplikasi manajemen tugas dengan drag & drop dan dashboard analitik.',
    link: '#',
  },
  {
    title: 'Automation – Network Deploy',
    desc: 'Script otomatisasi deployment konfigurasi jaringan berskala kecil-menengah.',
    link: '#',
  },
  {
    title: 'Creative – 3D Portfolio',
    desc: 'Eksplorasi Three.js/Spline untuk presentasi interaktif yang modern.',
    link: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-bold text-slate-900">Proyek Pilihan</h2>
          <a href="#contact" className="text-sm text-slate-600 hover:text-slate-900">Butuh proyek custom? Hubungi saya</a>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="aspect-video w-full bg-gradient-to-br from-slate-100 to-slate-200" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                <a href={p.link} className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:underline">
                  Lihat selengkapnya <ExternalLink size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
