import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { SiteFooter } from "./SiteFooter";
import { SiteNav } from "./SiteNav";

export function PageShell({
  pathname,
  showHome = true,
  children,
}: {
  pathname: string;
  showHome?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav pathname={pathname} showHome={showHome} />
      <main className="pt-16">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHeader({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: ReactNode;
  lede: string;
}) {
  return (
    <section className="grain relative overflow-hidden border-b border-border/60">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-56 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-accent), transparent 65%)" }}
      />
      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-20 sm:pt-24">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
            <span className="ember-dot" aria-hidden="true" />
            {kicker}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-7 max-w-3xl text-4xl font-semibold leading-[1.03] text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{lede}</p>
        </Reveal>
      </div>
    </section>
  );
}
