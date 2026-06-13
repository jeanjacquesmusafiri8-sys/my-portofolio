import Image from "next/image"
import { GraduationCap, Users, ShieldCheck } from "lucide-react"
import { profile } from "@/lib/portfolio-data"

const highlights = [
  {
    icon: GraduationCap,
    title: "Parcours académique",
    text: `En Bac2 Informatique à l'${profile.institution}, où je consolide mes bases théoriques et pratiques.`,
  },
  {
    icon: Users,
    title: "Engagement communautaire",
    text: "Membre actif du GDG (Google Developers Group) Bukavu, je partage et apprends au sein de l'écosystème tech local.",
  },
  {
    icon: ShieldCheck,
    title: "Philosophie de dev",
    text: "Créer des applications robustes, hors-ligne d'abord, légères et adaptées aux réalités du terrain congolais.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mb-12 flex items-center gap-3">
          <span className="font-mono text-sm text-primary">01.</span>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">À propos</h2>
          <span className="h-px flex-1 bg-border" />
        </div>

        <p className="max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Développeur full-stack passionné, je vis et travaille à{" "}
          <span className="text-foreground">{profile.location}</span>. Mon objectif :
          concevoir des solutions performantes malgré une connectivité instable, en
          plaçant la résilience et la légèreté au cœur de chaque projet.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <h.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-semibold">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
