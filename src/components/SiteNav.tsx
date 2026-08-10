import { ThemeToggle } from "./ThemeToggle";

export function SiteNav({ showHome = true }: { showHome?: boolean }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/" className="group flex items-center gap-2.5 whitespace-nowrap">
          <span className="ember-dot" aria-hidden="true" />
          <span className="font-display text-sm font-semibold tracking-tight text-foreground">
            A&H Techworld
          </span>
          <span className="hidden text-muted-foreground sm:inline">Ltd</span>
        </a>
        <nav className="flex items-center gap-3 whitespace-nowrap text-sm text-muted-foreground sm:gap-6">
          {showHome && (
            <a href="/" className="hidden transition-colors hover:text-foreground sm:inline">
              Home
            </a>
          )}
          <a href="/#ourworks" className="transition-colors hover:text-foreground">
            Our Works
          </a>
          <a href="/#ai" className="hidden transition-colors hover:text-foreground sm:inline">
            AI
          </a>
          <a href="/#capabilities" className="hidden transition-colors hover:text-foreground sm:inline">
            Capabilities
          </a>
          <a href="/#why-us" className="hidden transition-colors hover:text-foreground lg:inline">
            Why us
          </a>
          <a
            href="mailto:hello@ahtechworld.com"
            className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground sm:px-4"
          >
            Contact
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
