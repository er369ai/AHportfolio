import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "../components/PageShell";
import { Reveal } from "../components/Reveal";

const expectations = [
  {
    title: "A reply from the project lead",
    body: "Not a sales inbox and not an account manager — the person who would run the build answers you directly.",
  },
  {
    title: "An answer within 24 hours",
    body: "Including a clear no, with a reason, if the work is not right for us or we cannot do it justice.",
  },
  {
    title: "A candid technical read",
    body: "Send the schema, the integration requirement or the brief. You get an honest assessment of the hard parts.",
  },
];

export function ContactPage() {
  return (
    <>
      <PageHeader
        kicker="Next project"
        title={
          <>
            Ready to build something solid<span className="text-accent">?</span>
          </>
        }
        lede="Tell us about your product, schema or integration requirement. You get a candid assessment from the project lead within 24 hours — including a clear no, with a reason, if it is not right for us."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <div className="tile flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Email us
              </p>
              <p className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
                hello@ahtechworld.com
              </p>
            </div>
            <a
              href="mailto:hello@ahtechworld.com"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {expectations.map((e, i) => (
            <Reveal key={e.title} delay={i * 70}>
              <div className="border-t border-border pt-5">
                <p className="font-mono text-xs tracking-[0.22em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 text-base font-semibold leading-snug text-foreground">
                  {e.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={240}>
          <p className="mt-12 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Cyprus · working worldwide · remote-first
          </p>
        </Reveal>
      </section>
    </>
  );
}
