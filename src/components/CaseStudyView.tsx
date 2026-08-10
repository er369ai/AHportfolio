import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import type { Project } from "../data/portfolioData";
import { Reveal } from "./Reveal";
import { SiteFooter } from "./SiteFooter";
import { SiteNav } from "./SiteNav";

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-border py-4">
      <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-1.5 text-sm text-foreground">{value}</p>
    </div>
  );
}

export function CaseStudyView({ project }: { project: Project }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="pt-16">
        <section className="relative border-b border-border/60">
          <div className="relative h-[22rem] overflow-hidden sm:h-[28rem]">
            <img
              src={project.cover}
              alt={`${project.name} cover artwork`}
              width={1600}
              height={1008}
              className="h-full w-full object-cover opacity-70"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, var(--color-background) 6%, transparent 70%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-5xl px-6 pb-14">
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> All work
            </a>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.28em] text-accent">
              {project.kicker} · {project.year} · {project.domain}
            </p>
            <h1 className="mt-4 text-5xl font-semibold text-foreground sm:text-6xl">
              {project.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {project.summary}
            </p>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Visit {project.domain}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section className="mx-auto grid max-w-5xl gap-12 px-6 py-20 lg:grid-cols-[1fr_18rem]">
          <div className="space-y-16">
            {/* Problem */}
            <Reveal>
              <article>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  The problem
                </p>
                <h2 className="mt-4 text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
                  {project.problem.heading}
                </h2>
                {project.problem.body.map((p) => (
                  <p key={p} className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
              </article>
            </Reveal>

            {/* Decisions */}
            <div>
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  What we built
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-foreground sm:text-3xl">
                  Four decisions that shaped it
                </h2>
              </Reveal>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {project.decisions.map((d, i) => (
                  <Reveal key={d.title} delay={i * 70}>
                    <div className="tile h-full p-6">
                      <p className="font-mono text-xs tracking-[0.22em] text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-3 text-lg font-semibold text-foreground">{d.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Architecture */}
            <div>
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  Architecture
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-foreground sm:text-3xl">
                  How it is put together
                </h2>
              </Reveal>
              <Reveal delay={60}>
                <dl className="mt-8 overflow-hidden rounded-xl border border-border">
                  {project.architecture.map((a, i) => (
                    <div
                      key={a.layer}
                      className={`grid gap-1 p-5 sm:grid-cols-[9rem_1fr] sm:gap-6 ${
                        i % 2 === 0 ? "bg-card/40" : "bg-background"
                      }`}
                    >
                      <dt className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                        {a.layer}
                      </dt>
                      <dd className="text-sm leading-relaxed text-muted-foreground">{a.detail}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            {/* Outcomes */}
            <div>
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  Outcomes
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-foreground sm:text-3xl">
                  {project.outcomes.heading}
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">{project.outcomes.note}</p>
              </Reveal>
              <ul className="mt-7 space-y-3">
                {project.outcomes.points.map((p, i) => (
                  <Reveal key={p} delay={i * 60}>
                    <li className="flex gap-3 border-t border-border pt-3 text-sm leading-relaxed text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                      <span>{p}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>

            <Reveal>
              <div className="flex flex-wrap gap-2">
                {project.disciplines.map((d) => (
                  <span
                    key={d}
                    className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs text-muted-foreground"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <div className="tile flex flex-col gap-4 p-7 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-base text-foreground">
                  Have a build like this one? Send the brief and get a candid assessment within 24 hours.
                </p>
                <a
                  href="mailto:hello@ahtechworld.com"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  Start a project
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <Meta label="Our role" value={project.role} />
            <Meta label="Team" value={project.team} />
            <Meta label="Duration" value={project.duration} />
            <Meta label="Status" value={project.status} />
            <Meta label="Hard part" value={project.hardPart} />
          </aside>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
