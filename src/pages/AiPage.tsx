import { ClosingCta } from "../components/ClosingCta";
import { PageHeader } from "../components/PageShell";
import { Reveal } from "../components/Reveal";
import { aiFeatures } from "../data/portfolioData";

export function AiPage() {
  return (
    <>
      <PageHeader
        kicker="Specialized capability"
        title={
          <>
            AI integration & client-owned models<span className="text-accent">.</span>
          </>
        }
        lede="We build AI into products where it actually earns its place — not as a novelty, but as a working part of the system."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-4 md:grid-cols-2">
          {aiFeatures.map((f, i) => (
            <Reveal key={f.title} delay={i * 80} {...(i === 0 ? { className: "md:col-span-2" } : {})}>
              <div className="tile h-full p-7 sm:p-8">
                <div className="flex items-start gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <f.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">{f.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
