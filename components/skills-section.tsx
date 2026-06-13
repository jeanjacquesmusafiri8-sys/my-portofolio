import { CheckCircle2, Sparkles, Wrench } from "lucide-react"
import { skillGroups } from "@/lib/portfolio-data"

const icons = [CheckCircle2, Sparkles, Wrench]

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mb-12 flex items-center gap-3">
          <span className="font-mono text-sm text-primary">02.</span>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Compétences</h2>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = icons[i]
            return (
              <div key={group.label} className="rounded-lg border border-border bg-card p-6">
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  <h3 className="font-semibold">{group.label}</h3>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{group.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
