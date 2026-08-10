import { ArrowUpRight, Sparkles } from "lucide-react";
import { ClosingCta } from "../components/ClosingCta";
import { PageHeader } from "../components/PageShell";
import { Reveal } from "../components/Reveal";
import { projects, vibequest } from "../data/portfolioData";

export function OurWorksPage() {
  const hero = projects[0]!;
  const rest = projects.slice(1);

  return (
    <>
      <PageHeader
        kicker="Recent builds"
        title={
          <>
            Four platforms live in production<span className="text-accent">.</span>
          </>
        }
        lede="Each one designed, built and still operated by the same three people. Open a build to inspect its data model, architecture decisions and operational outcomes."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-4 md:grid-cols-3 md:grid-rows-[22rem_15rem_15rem_15rem]">
          <Reveal className="md:col-span-2 md:row-span-2" delay={0}>
            <a
              href={"/ourworks/" + hero.slug}
              className="tile group flex h-full min-h-[26rem] flex-col justify-end"
            >
              <img
                src={hero.cover}
                alt=""
                width={1600}
                height={1008}
                className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, var(--color-card) 12%, transparent 75%)",
                }}
              />
              <div className="relative p-7">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                  {hero.kicker} · {hero.tagline}
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
                  {hero.name}
                </h2>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                  {hero.summary}
                </p>
                <dl className="mt-5 grid max-w-lg gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                      Our role
                    </dt>
                    <dd className="mt-1 text-sm text-foreground">{hero.role}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                      Hard part
                    </dt>
                    <dd className="mt-1 text-sm text-foreground">{hero.hardPart}</dd>
                  </div>
                </dl>
                <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  View case study <ArrowUpRight className="h-4 w-4 text-accent" />
                </p>
              </div>
            </a>
          </Reveal>

          <Reveal delay={80}>
            <div className="tile flex h-full min-h-[10rem] flex-col justify-between p-6">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Team
              </p>
              <p className="font-display text-5xl font-semibold text-foreground">
                3<span className="text-accent">.</span>
              </p>
              <p className="text-sm text-muted-foreground">
                One project lead, two developers — the same three on every project, end to end.
              </p>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="tile flex h-full min-h-[10rem] flex-col justify-between p-6">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Scope
              </p>
              <p className="font-display text-2xl font-semibold leading-tight text-foreground">
                Backend
                <span className="text-accent"> + </span>
                UX/UI
              </p>
              <p className="text-sm text-muted-foreground">
                Architecture, integrations, interface and delivery under one roof.
              </p>
            </div>
          </Reveal>

          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={200 + i * 80} className="md:col-span-1">
              <a
                href={"/ourworks/" + p.slug}
                className="tile group flex h-full min-h-[16rem] flex-col justify-end"
              >
                <img
                  src={p.cover}
                  alt=""
                  loading="lazy"
                  width={1600}
                  height={1008}
                  className="absolute inset-0 h-full w-full object-cover opacity-45 transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, var(--color-card) 15%, transparent 80%)",
                  }}
                />
                <div className="relative p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                    {p.kicker}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-foreground">{p.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.hardPart}</p>
                  <p className="mt-2 font-mono text-xs text-muted-foreground">{p.domain}</p>
                </div>
              </a>
            </Reveal>
          ))}

          <Reveal delay={360} className="md:col-span-3">
            <div className="tile flex h-full min-h-[10rem] flex-col justify-between p-6 sm:flex-row sm:items-center sm:gap-8">
              <div className="space-y-1">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Based in
                </p>
                <p className="font-display text-3xl font-semibold text-foreground">
                  Cyprus<span className="text-accent">.</span>
                </p>
              </div>
              <p className="max-w-md text-sm text-muted-foreground">
                Working worldwide, remote-first, on difficult and demanding projects from every
                timezone.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              <span className="ember-dot" aria-hidden="true" />
              In build now
            </p>
            <h2 className="mt-6 max-w-3xl font-display text-3xl font-semibold text-foreground sm:text-4xl">
              VibeQuest<span className="text-accent">.</span> A next-level social platform
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We are currently building VibeQuest for a client — a social platform designed to change
              what social media is for: less feed, more shared experience. Architecture, real-time
              backend, AI layer and the entire interface are ours, end to end.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {vibequest.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="tile h-full p-7">
                  <Sparkles className="h-5 w-5 text-accent" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={280}>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Status: in active development · details under NDA until launch
            </p>
          </Reveal>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
