import { useEffect, useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import {
  aiFeatures,
  capabilities,
  getProject,
  process,
  projects,
  proof,
  reasons,
  vibequest,
} from "./data/portfolioData";
import { CaseStudyView } from "./components/CaseStudyView";
import { Reveal } from "./components/Reveal";
import { SiteFooter } from "./components/SiteFooter";
import { SiteNav } from "./components/SiteNav";
import "./index.css";

function useHashRoute() {
  const [hash, setHash] = useState("#/");

  useEffect(() => {
    const read = () => setHash(window.location.hash || "#/");
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);

  return hash;
}

function Home() {
  const hero = projects[0]!;
  const rest = projects.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="pt-16">
        {/* Hero */}
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
                A&H Techworld is a Cyprus-based, three-person product company that takes on the
                builds other teams turn down — real data models, awkward integrations, unattended
                automation, and interfaces that survive daily operational use. Backend, UX/UI and
                delivery under one roof, from the first schema to the year after launch.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  See the work
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="mailto:hello@ahtechworld.com"
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

        {/* Bento grid */}
        <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Recent builds
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
              Four platforms live in production
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Each one designed, built and still operated by the same three people. Open a build to
              inspect its data model, architecture decisions and operational outcomes.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3 md:grid-rows-[22rem_15rem_15rem_15rem]">
            {/* Hero tile */}
            <Reveal className="md:col-span-2 md:row-span-2" delay={0}>
              <a
                href={"#/work/" + hero.slug}
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
                  <h3 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
                    {hero.name}
                  </h3>
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

            {/* Stat tiles */}
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

            {/* Remaining projects */}
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={200 + i * 80} className="md:col-span-1">
                <a
                  href={"#/work/" + p.slug}
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
                    <h3 className="mt-2 text-2xl font-semibold text-foreground">{p.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {p.hardPart}
                    </p>
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
                  Working worldwide, remote-first, on difficult and demanding projects from every timezone.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* In build now — VibeQuest */}
        <section id="vibequest" className="scroll-mt-20 border-t border-border/60">
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
                We are currently building VibeQuest for a client — a social platform designed to
                change what social media is for: less feed, more shared experience. Architecture,
                real-time backend, AI layer and the entire interface are ours, end to end.
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

        {/* Capabilities */}
        <section id="capabilities" className="scroll-mt-20 border-y border-border/60 bg-card/30">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Expertise
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
                Six disciplines under one roof
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                We cover the full spectrum of product engineering, so nothing gets lost in handoffs
                between separate vendors.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((c, i) => (
                <Reveal key={c.title} delay={i * 60}>
                  <div className="group h-full bg-background p-7 transition-colors hover:bg-card">
                    <c.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                    <h3 className="mt-5 text-lg font-semibold text-foreground">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={300}>
                <div className="flex h-full flex-col justify-center bg-background p-7">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Need something adjacent to this list? Ask — small teams say no clearly.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* AI integration & client models */}
        <section id="ai" className="scroll-mt-20">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <Reveal>
              <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                <span className="ember-dot" aria-hidden="true" />
                Specialized capability
              </p>
              <h2 className="mt-6 max-w-3xl text-3xl font-semibold text-foreground sm:text-4xl">
                AI integration & client-owned models
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                We build AI into products where it actually earns its place — not as a novelty, but as a working part of the system.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {aiFeatures.map((f, i) => (
                <Reveal key={f.title} delay={i * 80} {...(i === 0 ? { className: "md:col-span-2" } : {})}>
                  <div className="tile h-full p-7 sm:p-8">
                    <div className="flex items-start gap-5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10">
                        <f.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{f.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section id="why-us" className="scroll-mt-20 border-y border-border/60 bg-card/30">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Philosophy
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-foreground sm:text-4xl">
                Eight reasons the difficult build should come here
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Most of what follows is a consequence of one decision: staying small on purpose.
                Three people can hold an entire system in their heads, and that is what makes the
                hard parts tractable.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {reasons.map((r, i) => (
                <Reveal key={r.title} delay={(i % 4) * 60}>
                  <div className="border-t border-border pt-5">
                    <p className="font-mono text-xs tracking-[0.22em] text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 text-base font-semibold leading-snug text-foreground">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">How a project runs</h2>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((s, i) => (
              <Reveal key={s.step} delay={i * 70}>
                <div className="border-t border-border pt-5">
                  <p className="font-mono text-xs tracking-[0.22em] text-accent">{s.step}</p>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="border-t border-border/60">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Next project
              </p>
              <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
                Ready to build something solid?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Tell us about your product, schema or integration requirement. You get a candid
                assessment from the project lead within 24 hours — including a clear no, with a
                reason, if it is not right for us.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="mailto:hello@ahtechworld.com"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  hello@ahtechworld.com
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <span className="text-sm text-muted-foreground">
                  Replies from the project lead, not a sales inbox.
                </span>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

export default function App() {
  const hash = useHashRoute();
  const match = /^#\/work\/([\w-]+)/.exec(hash);
  const project = match ? getProject(match[1]!) : undefined;

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo({ top: 0 });
  }, [hash]);

  if (project) return <CaseStudyView project={project} />;
  return <Home />;
}
