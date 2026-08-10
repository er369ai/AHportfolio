import { ClosingCta } from "../components/ClosingCta";
import { PageHeader } from "../components/PageShell";
import { Reveal } from "../components/Reveal";
import { process, reasons } from "../data/portfolioData";

export function WhyUsPage() {
  return (
    <>
      <PageHeader
        kicker="Philosophy"
        title={
          <>
            Eight reasons the difficult build should come here<span className="text-accent">.</span>
          </>
        }
        lede="Most of what follows is a consequence of one decision: staying small on purpose. Three people can hold an entire system in their heads, and that is what makes the hard parts tractable."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 4) * 60}>
              <div className="border-t border-border pt-5">
                <p className="font-mono text-xs tracking-[0.22em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 text-base font-semibold leading-snug text-foreground">
                  {r.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Process
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
              How a project runs
            </h2>
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
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
