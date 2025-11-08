export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-white py-20 text-slate-800">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-950/10 to-transparent" />
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Tentang Saya</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Saya adalah Ibnu Nur Ramadani — seorang programmer dengan basis teknik komputer & jaringan, yang tumbuh
              bersama kode dan kreativitas. Passion saya adalah mengembangkan solusi digital yang fungsional dan estetik,
              dengan pengalaman mengelola berbagai proyek teknologi, mulai dari aplikasi web, otomasi sistem, hingga
              digital branding untuk organisasi.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Pengalaman saya di organisasi Pramuka, khususnya sebagai Ketua CYBER JURNALIS di DKR Jeruklegi, telah
              membentuk karakter kepemimpinan, kemampuan komunikasi, dan skill kolaborasi dalam tim. Saya selalu haus
              belajar hal baru — mulai dari backend & frontend development, network deployment, hingga eksplorasi
              teknologi 3D dan UI/UX design.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Bagi saya, coding adalah seni berpikir logis — mengubah ide sederhana menjadi solusi nyata. Dengan
              pendekatan kreatif dan mindset problem-solving, saya siap bersaing di era digital dan berkontribusi
              membangun ekosistem teknologi yang inklusif.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Highlight</h3>
            <ul className="mt-4 grid grid-cols-1 gap-3 text-slate-700 md:grid-cols-2">
              <li className="rounded-lg bg-white p-3 shadow-sm">Pencinta teknologi & problem solver</li>
              <li className="rounded-lg bg-white p-3 shadow-sm">Desain clean modern, UI/UX, animasi 3D</li>
              <li className="rounded-lg bg-white p-3 shadow-sm">Leadership & teamwork (CYBER JURNALIS)</li>
              <li className="rounded-lg bg-white p-3 shadow-sm">Web dev & creative coding</li>
              <li className="rounded-lg bg-white p-3 shadow-sm">Eksplorasi teknologi terkini</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
