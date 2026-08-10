import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function ClosingCta() {
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <div className="tile flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                Ready to build something solid<span className="text-accent">?</span>
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                Send the brief and get a candid assessment from the project lead within 24 hours.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
