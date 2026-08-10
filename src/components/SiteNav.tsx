import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/", label: "Home", className: "hidden sm:inline" },
  { href: "/ourworks", label: "Our Works" },
  { href: "/ai", label: "AI", className: "hidden sm:inline" },
  { href: "/capabilities", label: "Capabilities", className: "hidden sm:inline" },
  { href: "/why-us", label: "Why us", className: "hidden lg:inline" },
];

const isActive = (href: string, pathname: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

export function SiteNav({ pathname, showHome = true }: { pathname: string; showHome?: boolean }) {
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
          {links.map((link) => {
            if (link.href === "/" && !showHome) return null;
            const active = isActive(link.href, pathname);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`transition-colors hover:text-foreground ${link.className ?? ""} ${
                  active ? "text-foreground" : ""
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
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
