import { FolderGit2, ArrowUpRight } from "lucide-react"
import { projects } from "@/lib/portfolio-data"

export function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mb-12 flex items-center gap-3">
          <span className="font-mono text-sm text-primary">03.</span>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Projets</h2>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-lg border border-border bg-card overflow-hidden transition-colors hover:border-primary/40 card-shadow"
            >
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4 gap-3">
                  <FolderGit2 className="h-7 w-7 text-primary" aria-hidden="true" />
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary transition hover:text-primary/80"
                  >
                    Voir le dépôt
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-accent px-2.5 py-1 font-mono text-xs text-accent-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
