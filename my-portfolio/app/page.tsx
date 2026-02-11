const projects = [
  {
    title: "Project One",
    description:
      "A brief description of the project, what it does, and the technologies used.",
    link: "#",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Project Two",
    description:
      "Another project description. Replace this with real content when ready.",
    link: "#",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
  },
  {
    title: "Project Three",
    description:
      "One more project to showcase. Add as many as you like by extending this array.",
    link: "#",
    tags: ["Python", "FastAPI", "Docker"],
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-background font-sans text-foreground">
      <main className="w-full max-w-2xl px-6 py-24 sm:py-32">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Eugene Cho
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Developer &amp; builder. I create things for the web and beyond.
            Currently exploring new ideas and shipping projects.
          </p>
          <nav className="mt-6 flex gap-5 text-sm font-medium">
            <a
              href="https://github.com/eugenecho"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition-colors hover:text-foreground dark:text-zinc-400"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition-colors hover:text-foreground dark:text-zinc-400"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hello@example.com"
              className="text-zinc-500 transition-colors hover:text-foreground dark:text-zinc-400"
            >
              Email
            </a>
          </nav>
        </header>

        {/* About */}
        <section className="mb-16">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            About
          </h2>
          <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">
            Replace this with a paragraph about yourself — your background,
            interests, what you&apos;re working on, and what drives you. Keep it
            honest and concise.
          </p>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Projects
          </h2>
          <div className="flex flex-col gap-8">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group -mx-4 rounded-lg p-4 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900"
              >
                <h3 className="font-semibold group-hover:text-black dark:group-hover:text-white">
                  {project.title}
                  <span className="ml-1 inline-block transition-transform group-hover:translate-x-0.5">
                    &rarr;
                  </span>
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Experience
          </h2>
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex items-baseline justify-between">
                <h3 className="font-semibold">Company Name</h3>
                <span className="text-sm text-zinc-400 dark:text-zinc-500">
                  2024 — Present
                </span>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Role / Title
              </p>
              <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Brief description of what you did, technologies used, and impact
                made.
              </p>
            </div>
            <div>
              <div className="flex items-baseline justify-between">
                <h3 className="font-semibold">Another Company</h3>
                <span className="text-sm text-zinc-400 dark:text-zinc-500">
                  2022 — 2024
                </span>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Role / Title
              </p>
              <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Brief description of what you did at this position.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <p className="text-sm text-zinc-400 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} Eugene Cho. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
