import Link from 'next/link';

export default function Home() {
  const projects = [
    {
      title: "CurSurf",
      description:
        "Java android application for wireless control of desktop computer using network communication, enabling mouse, keyboard, and game controller functionality.",
      tech: ["Java", "C#", "Android"],
      externalLink: "https://cursurf-website.vercel.app/",
    },

    {
        title: "RFID Attendance & Payroll Management System",
        description:
          "Web-based employee attendance and payroll system using RFID authentication with automated time tracking and salary computation.",
        tech: ["OrangePi", "MariaDB", "LAMP", "RFID", "JavaScript"],
        externalLink: "https://rfid-attendance-system.vercel.app/",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Container */}
      <div className="mx-auto flex max-w-5xl flex-col px-6 py-20">
        
        {/* Hero */}
        <section className="mb-24">
          <p className="mb-3 text-sm text-zinc-500">
            LIGHTPULP / PORTFOLIO
          </p>

          <h1 className="mb-6 max-w-3xl text-5xl font-bold tracking-tight">
            I build hardware, software, and weird side projects.
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-zinc-400">
            Java Dev, Robotics, ESP32 projects, 3D printing, embedded systems, and web
            development.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-80"
            >
              View Projects
            </a>

            <a
              href="https://github.com/lightpulp"
              target="_blank"
              className="rounded-xl border border-zinc-800 px-5 py-3 text-sm text-zinc-300 transition hover:border-zinc-600"
            >
              GitHub
            </a>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-24">
          <h2 className="mb-8 text-2xl font-semibold">Projects</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-zinc-700"
              >
                <h3 className="mb-3 text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="mb-5 text-sm leading-7 text-zinc-400">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  {project.externalLink && (
                    <a
                      href={project.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-lg bg-zinc-800 px-6 py-2.5 text-sm font-medium text-zinc-200 transition hover:bg-zinc-700 hover:scale-105"                    >
                      View Project →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>



        {/* Footer */}
        <footer className="border-t border-zinc-900 pt-6 text-sm text-zinc-500">
          © 2026 Lightpulp. All rights reserved.
        </footer>
      </div>
    </main>
  );
}