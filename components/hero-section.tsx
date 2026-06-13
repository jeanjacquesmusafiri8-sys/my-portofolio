import Image from "next/image"
import { ArrowDown, Download, MapPin, Cpu } from "lucide-react"
import { profile } from "@/lib/portfolio-data"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden grid-bg pt-20"
    >
      <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
        <div className="grid gap-8 items-center md:grid-cols-2">
          <div className="relative md:order-last animate-fade-up">
            <div className="mx-auto mb-6 w-44 h-56 sm:w-52 sm:h-72 md:w-full md:max-w-none">
              <div className="relative mx-auto w-full h-full min-h-[180px] rounded-lg overflow-hidden avatar-frame bg-card">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Disponible pour de nouveaux défis
          </div>

          <h1 className="text-pretty text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Salut, je suis <span className="text-primary">{profile.name}</span>
          </h1>

          <p className="mt-4 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            {profile.title}. Basé à Bukavu, je construis des applications robustes,
            <span className="text-foreground"> hors-ligne d&apos;abord</span> et optimisées
            <span className="text-foreground"> low-data</span>, prêtes à relever les défis
            technologiques locaux comme mondiaux.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 font-mono text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              {profile.location}
            </span>
            <span className="inline-flex flex-wrap items-center gap-2">
              <Cpu className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>{profile.community}</span>
              <a
                href="https://pleiade-tech.web.app"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline"
              >
                pleiade-tech.web.app
              </a>
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Voir mes projets
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="/cv-musafiri-jean-jacques.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Télécharger mon CV
            </a>
          </div>
          </div>
          
          
        </div>
      </div>
    </section>
  )
}
