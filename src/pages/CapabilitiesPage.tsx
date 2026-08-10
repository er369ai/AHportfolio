import { ClosingCta } from "../components/ClosingCta";
import { PageHeader } from "../components/PageShell";
import { Reveal } from "../components/Reveal";
import { capabilities } from "../data/portfolioData";

export function CapabilitiesPage() {
  return (
    <>
      <PageHeader
        kicker="Expertise"
        title={
          <>
            Six disciplines under one roof<span className="text-accent">.</span>
          </>
        }
        lede="We cover the full spectrum of product engineering, so nothing gets lost in handoffs between separate vendors."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <div className="group h-full bg-background p-7 transition-colors hover:bg-card">
                <c.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                <h2 className="mt-5 text-lg font-semibold text-foreground">{c.title}</h2>
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
      </section>

      <ClosingCta />
    </>
  );
}
