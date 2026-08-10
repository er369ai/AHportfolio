const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/ourworks", label: "Our Works" },
  { href: "/ai", label: "AI" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/why-us", label: "Why us" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-8 flex flex-col gap-4 border-t border-border/60 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>A&H Techworld Ltd. Backend, UX/UI and delivery, end to end.</p>
          <p className="font-mono text-xs uppercase tracking-[0.2em]">Cyprus · Worldwide</p>
        </div>
      </div>
    </footer>
  );
}
