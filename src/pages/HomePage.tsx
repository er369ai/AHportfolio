import { ArrowUpRight } from "lucide-react";
import { ClosingCta } from "../components/ClosingCta";
import { Reveal } from "../components/Reveal";
import { proof } from "../data/portfolioData";

const teasers = [
  {
    href: "/ourworks",
    kicker: "Our works",
    title: "Four platforms live in production",
    body: "Parking, transport, education and automation systems — each designed, built and still operated by the same three people.",
  },
  {
    href: "/ai",
    kicker: "AI",
    title: "AI integration & client-owned models",
    body: "AI built in where it earns its place: a working part of the system, on models the client owns.",
  },
  {
    href: "/capabilities",
    kicker: "Capabilities",
    title: "Six disciplines under one roof",
    body: "Architecture, integrations, interface and delivery, so nothing gets lost in handoffs between vendors.",
  },
  {
    href: "/why-us",
    kicker: "Why us",
    title: "Eight reasons the difficult build should come here",
    body: "Three people can hold an entire system in their heads. That is what makes the hard parts tractable.",
  },
];

export function HomePage() {
  return (
    <>
      <section className="grain relative overflow-hidden border-b border-border/60">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--color-accent), transparent 65%)" }}
        />
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-24 sm:pt-32">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              <span className="ember-dot" aria-hidden="true" />
              Cyprus · working worldwide · selected work 2025
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[0.95] text-foreground sm:text-7xl lg:text-[5.5rem]">
              Whole products.
              <br />
              <span className="text-muted-foreground">Start to finish.</span>
              <br />
              No <span className="text-accent">handover</span>.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A&H Techworld is a Cyprus-based, three-person product company that takes on the builds
              other teams turn down — real data models, awkward integrations, unattended automation,
              and interfaces that survive daily operational use. Backend, UX/UI and delivery under
              one roof, from the first schema to the year after launch.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="/ourworks"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                See our works
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
              >
                Start a project
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <dl className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {proof.map((p) => (
                <div key={p.label} className="bg-background/80 p-6">
                  <dt className="font-display text-4xl font-semibold text-foreground">
                    {p.value}
                    <span className="text-accent">.</span>
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
            Where to go next
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
            The whole company, four pages
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {teasers.map((t, i) => (
            <Reveal key={t.href} delay={i * 70}>
              <a href={t.href} className="tile group flex h-full flex-col p-7">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                  {t.kicker}
                </p>
                <h3 className="mt-4 text-xl font-semibold leading-snug text-foreground">
                  {t.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
                <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  Open
                  <ArrowUpRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
