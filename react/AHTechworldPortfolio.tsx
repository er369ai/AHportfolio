"use client";

/**
 * A&H Techworld Ltd — standalone portfolio page.
 * Single-file React component. Drop into any React app (Next.js app router,
 * Vite, Remix) and render <AHTechworldPortfolio />.
 *
 * Zero config: Tailwind (browser build) and the fonts are loaded at runtime,
 * so no tailwind.config / postcss setup is required.
 * Deep links: #/ and #/work/<slug>.
 */

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Boxes,
  Brain,
  Check,
  Compass,
  Cpu,
  Layers,
  Moon,
  Plug,
  Sparkles,
  Sun,
  Workflow,
} from "lucide-react";

const cn = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");

const THEME_CSS = String.raw`
@custom-variant dark (&:is(.dark *));

/*
 * Design system definition.
 *
 * The @theme inline block maps CSS custom properties to Tailwind utility
 * classes (e.g. --color-primary -> bg-primary, text-primary).
 *
 * The :root and .dark blocks define the actual color values using oklch.
 * All colors MUST use oklch format.
 *
 * To add a new semantic color:
 * 1. Add the variable to :root (light value) and .dark (dark value)
 * 2. Register it in @theme inline as --color-<name>: var(--<name>)
 */

@theme inline {
  --font-display: "Space Grotesk", ui-sans-serif, system-ui, sans-serif;
  --font-sans: "DM Sans", ui-sans-serif, system-ui, sans-serif;
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);
  --radius-3xl: calc(var(--radius) + 12px);
  --radius-4xl: calc(var(--radius) + 16px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-ring-offset-background: var(--background);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

:root {
  /* Charcoal & Ember — light */
  --radius: 0.375rem;
  --background: oklch(0.975 0.004 70);
  --foreground: oklch(0.215 0.008 50);
  --card: oklch(0.995 0.003 70);
  --card-foreground: oklch(0.215 0.008 50);
  --popover: oklch(0.995 0.003 70);
  --popover-foreground: oklch(0.215 0.008 50);
  --primary: oklch(0.575 0.176 39);
  --primary-foreground: oklch(0.985 0.005 70);
  --secondary: oklch(0.935 0.006 70);
  --secondary-foreground: oklch(0.215 0.008 50);
  --muted: oklch(0.935 0.006 70);
  --muted-foreground: oklch(0.485 0.012 55);
  --accent: oklch(0.575 0.176 39);
  --accent-foreground: oklch(0.985 0.005 70);
  --destructive: oklch(0.55 0.22 25);
  --destructive-foreground: oklch(0.98 0 0);
  --border: oklch(0.875 0.006 70);
  --input: oklch(0.875 0.006 70);
  --ring: oklch(0.575 0.176 39);
  --chart-1: oklch(0.575 0.176 39);
  --chart-2: oklch(0.68 0.13 55);
  --chart-3: oklch(0.6 0.02 60);
  --chart-4: oklch(0.8 0.008 70);
  --chart-5: oklch(0.45 0.06 45);
  --sidebar: oklch(0.955 0.005 70);
  --sidebar-foreground: oklch(0.215 0.008 50);
  --sidebar-primary: oklch(0.575 0.176 39);
  --sidebar-primary-foreground: oklch(0.985 0.005 70);
  --sidebar-accent: oklch(0.935 0.006 70);
  --sidebar-accent-foreground: oklch(0.215 0.008 50);
  --sidebar-border: oklch(0.875 0.006 70);
  --sidebar-ring: oklch(0.575 0.176 39);
}

.dark {
  /* Charcoal & Ember — dark */
  --background: oklch(0.178 0 0);
  --foreground: oklch(0.955 0.004 60);
  --card: oklch(0.229 0 0);
  --card-foreground: oklch(0.955 0.004 60);
  --popover: oklch(0.229 0 0);
  --popover-foreground: oklch(0.955 0.004 60);
  --primary: oklch(0.66 0.176 39);
  --primary-foreground: oklch(0.16 0.01 40);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.955 0.004 60);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.688 0.008 60);
  --accent: oklch(0.66 0.176 39);
  --accent-foreground: oklch(0.16 0.01 40);
  --destructive: oklch(0.62 0.22 25);
  --destructive-foreground: oklch(0.98 0 0);
  --border: oklch(0.318 0 0);
  --input: oklch(0.318 0 0);
  --ring: oklch(0.66 0.176 39);
  --chart-1: oklch(0.66 0.176 39);
  --chart-2: oklch(0.75 0.13 55);
  --chart-3: oklch(0.55 0.02 60);
  --chart-4: oklch(0.435 0 0);
  --chart-5: oklch(0.85 0.06 45);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.955 0.004 60);
  --sidebar-primary: oklch(0.66 0.176 39);
  --sidebar-primary-foreground: oklch(0.16 0.01 40);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.955 0.004 60);
  --sidebar-border: oklch(0.318 0 0);
  --sidebar-ring: oklch(0.66 0.176 39);
}

@layer base {
  * {
    border-color: var(--color-border);
  }

  body {
    background-color: var(--color-background);
    color: var(--color-foreground);
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: var(--font-display);
    letter-spacing: -0.03em;
  }
}

@utility font-display {
  font-family: var(--font-display);
}

@utility ember-dot {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  background: var(--color-accent);
  box-shadow: 0 0 12px 2px color-mix(in oklab, var(--color-accent) 55%, transparent);
}

@utility grain {
  position: relative;
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0.35;
    background-image: radial-gradient(
      circle at 1px 1px,
      color-mix(in oklab, var(--color-foreground) 8%, transparent) 1px,
      transparent 0
    );
    background-size: 4px 4px;
  }
}

@utility tile {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  background: var(--color-card);
  transition:
    border-color 0.4s ease,
    transform 0.4s ease,
    box-shadow 0.4s ease;
  &:hover {
    border-color: color-mix(in oklab, var(--color-accent) 55%, transparent);
    box-shadow: 0 24px 60px -30px color-mix(in oklab, var(--color-accent) 60%, transparent);
  }
}

@utility ember-underline {
  background-image: linear-gradient(to right, var(--color-accent), var(--color-accent));
  background-repeat: no-repeat;
  background-size: 0% 1px;
  background-position: 0 100%;
  transition: background-size 0.4s ease;
  &:hover {
    background-size: 100% 1px;
  }
}`;

function useRuntimeStyles() {
  useEffect(() => {
    if (!document.getElementById("ahtw-fonts")) {
      const link = document.createElement("link");
      link.id = "ahtw-fonts";
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@400;500;600&display=swap";
      document.head.appendChild(link);
    }
    if (!document.getElementById("ahtw-theme")) {
      const style = document.createElement("style");
      style.id = "ahtw-theme";
      style.setAttribute("type", "text/tailwindcss");
      style.textContent = THEME_CSS;
      document.head.appendChild(style);
    }
    if (!document.getElementById("ahtw-tw")) {
      const s = document.createElement("script");
      s.id = "ahtw-tw";
      s.src = "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4";
      document.head.appendChild(s);
    }
  }, []);
}

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


function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { setShown(true); return; }
    const obs = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { setShown(true); obs.disconnect(); }
    }, { threshold, rootMargin: "0px 0px -8% 0px" });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, shown };
}

function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const { ref, shown } = useReveal();
  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

type Project = {
  slug: string;
  name: string;
  domain: string;
  url: string;
  year: string;
  kicker: string;
  tagline: string;
  summary: string;
  cover: string;
  disciplines: string[];
  role: string;
  team: string;
  duration: string;
  status: string;
  hardPart: string;
  problem: { heading: string; body: string[] };
  decisions: { title: string; body: string }[];
  architecture: { layer: string; detail: string }[];
  outcomes: { heading: string; note: string; points: string[] };
};

const projects: Project[] = [
  {
    slug: "automateonline",
    name: "AutomateOnline",
    domain: "automateonline.app",
    url: "https://www.automateonline.app/",
    year: "2025",
    kicker: "Product platform",
    tagline: "Latest build",
    summary:
      "A platform for automating recurring online work: scheduling, background processing, retries and a full audit trail, with an interface an operator can actually run it from.",
    cover: "https://wow-showcase-magic.lovable.app/covers/cover-automateonline.jpg",
    disciplines: ["Data model", "Backend architecture", "Queues & automation", "UX/UI", "Front-end"],
    role: "Data model, backend, UX/UI, delivery",
    team: "Three — lead + two developers",
    duration: "Multi-phase, ongoing",
    status: "Live, operated by the client",
    hardPart: "Unattended work that reports honestly",
    problem: {
      heading: "Recurring work is easy to script once and hard to run for a year",
      body: [
        "A script that automates a task is a weekend. A system that runs hundreds of those tasks unattended, survives a third party going down mid-run, and can be explained to an auditor eighteen months later is a different piece of engineering entirely.",
        "The brief was a platform non-engineers could operate: schedule work, see what ran, understand what failed and why, and retry it without asking a developer. That requirement drove the data model before it drove a single screen.",
      ],
    },
    decisions: [
      {
        title: "Schema before screens",
        body: "Jobs, runs, attempts and results were modelled as first-class records. Every later feature — reporting, retries, permissions — was a query against that, not a new table.",
      },
      {
        title: "Queue-backed execution",
        body: "Work is dispatched to idempotent workers, so a retry cannot double-charge, double-send or double-write. Failures land in a dead-letter queue with their input intact.",
      },
      {
        title: "Reporting that admits failure",
        body: "The dashboard leads with what did not work. Silent success is the default state and needs no attention; the exceptions are what the interface is for.",
      },
      {
        title: "An operator's interface",
        body: "Designed against real run volumes, not seed data: dense tables, keyboard-first filtering, and a retry that is one click from the row that failed.",
      },
    ],
    architecture: [
      { layer: "Data", detail: "Relational and normalised; migrations in version control, no schema drift between environments." },
      { layer: "API", detail: "One versioned contract used by the interface and by clients — no private back door for the UI." },
      { layer: "Background work", detail: "Queue with retry policy, backoff and dead-letter capture per job type." },
      { layer: "Integrations", detail: "Each third party behind its own adapter, so an upstream change is a one-file change." },
      { layer: "Interface", detail: "Server-driven, mobile-first, accessible; measured on a mid-range phone." },
      { layer: "Observability", detail: "Structured logs and an audit trail per run, queryable by the operator, not just by us." },
    ],
    outcomes: {
      heading: "Operated by the client, not by us",
      note: "Volume and uptime figures for this build are the client's to share; available on request.",
      points: [
        "Day-to-day scheduling and retries are handled by non-technical staff without developer involvement.",
        "Third-party outages degrade a single integration instead of stopping the platform.",
        "Every run is reconstructable after the fact, with its inputs, attempts and result.",
        "New job types ship as configuration and one adapter, not as a new subsystem.",
      ],
    },
  },
  {
    slug: "kibride",
    name: "KibRide",
    domain: "kktc.kibride.com",
    url: "https://kktc.kibride.com/",
    year: "2025",
    kicker: "Ride-hailing platform",
    tagline: "Live",
    summary:
      "A ride-hailing platform for North Cyprus — passengers, drivers, live tracking, upfront fares and scheduling, all driven by one real-time state model.",
    cover: "https://wow-showcase-magic.lovable.app/covers/cover-kibride.jpg",
    disciplines: ["Real-time state", "Backend architecture", "Mobile-first UI", "Operations tooling", "UX/UI"],
    role: "Real-time backend, driver & passenger UX, operations dashboard",
    team: "Three — lead + two developers",
    duration: "Concept to production",
    status: "Live in North Cyprus",
    hardPart: "One state model for three different audiences",
    problem: {
      heading: "Three audiences, one truth about where the car is",
      body: [
        "Ride-hailing in a smaller market has to earn trust immediately: the passenger needs to know where the driver is and what they will pay, the driver needs a flow that keeps them driving instead of reading menus, and the operator needs to see the whole board.",
        "Three interfaces reading three versions of the truth is how these products fail. So the trip — its location, fare and status — was modelled once and everything else was made a view of it.",
      ],
    },
    decisions: [
      {
        title: "The trip is the record",
        body: "Location, fare, status and driver assignment are one authoritative record. Passenger app, driver app and dispatch dashboard all read the same thing, so nothing needs reconciling later.",
      },
      {
        title: "Upfront fare, no surprises",
        body: "Fares are quoted before the trip is accepted and locked to the record, which removes the single biggest cause of disputes in a new market.",
      },
      {
        title: "A driver flow with almost no interface",
        body: "The driver screen is one decision at a time, thumb-reachable, readable in daylight, and safe to use in a moving vehicle.",
      },
      {
        title: "Degrades instead of dying",
        body: "Weak mobile coverage is normal, not exceptional: position updates buffer and reconcile, and the interface says what it knows rather than freezing.",
      },
    ],
    architecture: [
      { layer: "Data", detail: "One canonical trip record; driver, vehicle and passenger as related entities with an auditable status history." },
      { layer: "Real time", detail: "Streaming position and status updates with buffering and reconciliation over unreliable mobile networks." },
      { layer: "Pricing", detail: "Fare quoted, versioned and locked to the trip before acceptance." },
      { layer: "Interface", detail: "Separate passenger, driver and dispatch surfaces on one shared contract; mobile-first throughout." },
      { layer: "Operations", detail: "Live dispatch view with vehicle verification, trip history and intervention on any active ride." },
      { layer: "Observability", detail: "Every status transition logged, so any completed or cancelled trip can be replayed." },
    ],
    outcomes: {
      heading: "A live market platform, not a prototype",
      note: "Trip volume figures are the client's to share; available on request.",
      points: [
        "Passengers, drivers and dispatch operate from one consistent picture of every ride.",
        "Fare disputes are answerable from the record instead of from memory.",
        "New cities or vehicle classes are configuration on the existing model.",
        "The same three people who built it still run and extend it.",
      ],
    },
  },
  {
    slug: "mituteed",
    name: "Mituteed",
    domain: "mituteed.ee",
    url: "https://www.mituteed.ee/",
    year: "2025",
    kicker: "Web platform",
    tagline: "Live",
    summary:
      "A public-facing Estonian platform built on a schema designed to stay legible as the product grows, with the interface drawn against the real data rather than a mockup.",
    cover: "https://wow-showcase-magic.lovable.app/covers/cover-mituteed.jpg",
    disciplines: ["Content architecture", "Backend", "Performance", "UX/UI", "Front-end"],
    role: "Backend architecture, UX/UI, front-end delivery",
    team: "Three — lead + two developers",
    duration: "Design to launch",
    status: "Live",
    hardPart: "Staying fast while the catalogue keeps growing",
    problem: {
      heading: "A public product that has to stay fast while it keeps growing",
      body: [
        "Public platforms accumulate content and traffic in the same period they accumulate features. Get the model wrong and the third content type is the one that starts the rewrite.",
        "We designed for the version of the product two years out: content modelled generically enough to extend, specific enough to query cheaply, and pages that stay fast on a mid-range phone over mobile data.",
      ],
    },
    decisions: [
      {
        title: "One content model, several shapes",
        body: "A single well-shaped model serves the list, the detail page and the search index, so adding a category does not mean adding a subsystem.",
      },
      {
        title: "Interface drawn on real records",
        body: "Layouts were built against production-shaped data from the first week — including the long names and the empty states.",
      },
      {
        title: "Mobile-first delivery",
        body: "The phone layout was designed first and measured on a mid-range device; the desktop view is the same page with more room.",
      },
      {
        title: "Editing that non-developers own",
        body: "Content, copy and structure are maintained by the client's own team without touching code or waiting on a deploy.",
      },
    ],
    architecture: [
      { layer: "Data", detail: "Relational schema with the growth path designed in; indexes chosen from the real query set." },
      { layer: "API", detail: "One read path shared by pages and search, cached where the data allows it." },
      { layer: "Interface", detail: "Mobile-first, accessible markup, no client-side framework where the page does not need one." },
      { layer: "Integrations", detail: "Third-party services isolated so a slow response never blocks a page render." },
      { layer: "Content", detail: "Client-editable structure and copy, versioned, with no deploy in the loop." },
      { layer: "Delivery", detail: "Measured on a mid-range phone over mobile data before each release." },
    ],
    outcomes: {
      heading: "Live, and maintained by the client",
      note: "Traffic and performance figures are the client's to share; available on request.",
      points: [
        "The client's team publishes and restructures content without engineering time.",
        "New content types have shipped without schema rewrites.",
        "Page performance holds on mid-range phones as the catalogue grows.",
        "Same three people still available after launch — no maintenance handover.",
      ],
    },
  },
  {
    slug: "saastupark",
    name: "Säästupark",
    domain: "saastupark.ee",
    url: "https://www.saastupark.ee/",
    year: "2025",
    kicker: "Web platform",
    tagline: "Live",
    summary:
      "A consumer-facing platform where third-party systems are held at arm's length from the core, so an outage upstream degrades one feature instead of the product.",
    cover: "https://wow-showcase-magic.lovable.app/covers/cover-saastupark.jpg",
    disciplines: ["Integrations", "Backend", "Resilience", "Responsive UI", "UX/UI"],
    role: "Backend architecture, integrations, UX/UI",
    team: "Three — lead + two developers",
    duration: "Design to launch",
    status: "Live",
    hardPart: "Surviving other people's downtime",
    problem: {
      heading: "The product depends on systems it does not control",
      body: [
        "Anything consumer-facing that pulls data from outside inherits every one of those services' bad days: timeouts, changed fields, silent partial responses.",
        "So the integration boundary became the design problem. Each external service was given its own adapter, its own failure mode and its own cached last-known-good state, and the interface was designed to be honest about what is stale.",
      ],
    },
    decisions: [
      {
        title: "Adapters, not direct calls",
        body: "No page talks to a third party. Each service sits behind an adapter with a timeout, a retry policy and a documented response shape.",
      },
      {
        title: "Last-known-good state",
        body: "When an upstream fails, the platform serves the last verified data and says so, instead of showing an error or, worse, a blank.",
      },
      {
        title: "Honest interface states",
        body: "Loading, stale and unavailable are designed states with real copy — not spinners standing in for a decision nobody made.",
      },
      {
        title: "Consumer-grade front end",
        body: "Fast first render, accessible controls, and layouts that hold up on the phones the audience actually uses.",
      },
    ],
    architecture: [
      { layer: "Data", detail: "Own canonical records; external data stored as cached, timestamped copies." },
      { layer: "API", detail: "Single contract; no external call made in the request path of a page render." },
      { layer: "Integrations", detail: "One adapter per service with timeout, retry and schema validation at the boundary." },
      { layer: "Background work", detail: "Scheduled refreshes with backoff; failures alert instead of silently ageing." },
      { layer: "Interface", detail: "Designed states for loading, stale and unavailable; mobile-first, accessible." },
      { layer: "Observability", detail: "Per-integration health visible to the client, not buried in our logs." },
    ],
    outcomes: {
      heading: "Upstream failures stopped being incidents",
      note: "Availability and traffic figures are the client's to share; available on request.",
      points: [
        "An external outage now degrades one feature and shows a clear state instead of breaking pages.",
        "Integration changes are contained to a single adapter file.",
        "The client can see the health of each external dependency without asking us.",
        "Consumer-facing performance held through launch traffic.",
      ],
    },
  },
];

const getProject = (slug: string) => projects.find((p) => p.slug === slug);

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem("theme") as Theme | null;
    const initial: Theme = stored ?? "dark";
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    window.localStorage.setItem("theme", next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#/" className="group flex items-center gap-2.5">
          <span className="ember-dot" aria-hidden="true" />
          <span className="font-display text-sm font-semibold tracking-tight text-foreground">
            A&H Techworld
          </span>
          <span className="text-muted-foreground">Ltd</span>
        </a>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#work" className="transition-colors hover:text-foreground">
            Work
          </a>
          <a href="#ai" className="hidden transition-colors hover:text-foreground sm:inline">
            AI
          </a>
          <a href="#vibequest" className="hidden transition-colors hover:text-foreground lg:inline">
            VibeQuest
          </a>
          <a href="#capabilities" className="hidden transition-colors hover:text-foreground sm:inline">
            Capabilities
          </a>
          <a href="#why-us" className="hidden transition-colors hover:text-foreground lg:inline">
            Why us
          </a>
          <a
            href="mailto:hello@ahtechworld.com"
            className="rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Contact
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>A&H Techworld Ltd. Backend, UX/UI and delivery, end to end.</p>
        <p className="font-mono text-xs uppercase tracking-[0.2em]">Cyprus · Worldwide</p>
      </div>
    </footer>
  );
}


const capabilities = [
  { icon: Layers, title: "Backend architecture", body: "Relational data models, clean migrations and versioned APIs built for long-term maintainability and zero schema drift." },
  { icon: Plug, title: "Custom integrations", body: "Third-party services isolated behind adapters with retries, timeouts and fallbacks, so external downtime never breaks your product." },
  { icon: Workflow, title: "Unattended automation", body: "Background queues, idempotent job handlers, dead-letter processing and audit logs that give operators real control." },
  { icon: Compass, title: "Responsive interfaces", body: "Mobile-first UX/UI designed against real operational data volumes and edge-case content, not static mockups." },
  { icon: Boxes, title: "AI context engineering", body: "Retrieval pipelines, prompt structure, structured output validation and token-cost control for AI that has to be reliable." },
  { icon: Brain, title: "Technical leadership", body: "Direct work with your lead from scope definition through launch and the long operational tail afterwards." },
];

const reasons = [
  {
    title: "The same three people, schema to launch",
    body: "No account layer, no rotating bench, no junior learning your domain on your budget. The person who designed your data model answers you in month nine.",
  },
  {
    title: "The data model is decided first",
    body: "Screens follow the model, not the reverse. That is why the fifth feature costs roughly what the second one did instead of three times as much.",
  },
  {
    title: "We take the part others declined",
    body: "Undocumented endpoints, a legacy database nobody wants to touch, a half-finished build with no author left. We quote after reading it, not before.",
  },
  {
    title: "One team for backend and interface",
    body: "Nothing is lost in the handoff between an agency and a dev shop, because there is no handoff. Design decisions are made with the query cost known.",
  },
  {
    title: "Written down as it is built",
    body: "Schema, architecture and the reasoning behind each decision are documented as we go — so month twenty is as legible as month two, to us and to you.",
  },
  {
    title: "Automation that reports honestly",
    body: "Unattended work is only useful if it tells you when it fails. Retries, dead letters and an audit trail are in the first version, not a later hardening phase.",
  },
  {
    title: "AI only where it earns its place",
    body: "We will tell you when a model is the wrong tool. When it is the right one, the work is context, retries, evaluation and cost — not the demo.",
  },
  {
    title: "Small teams say no clearly",
    body: "If your build is not right for us you hear that in the first conversation, with a reason and, where we can, a name to talk to instead.",
  },
];

const proof = [
  { value: "4", label: "platforms live in production" },
  { value: "3", label: "people, on every project, end to end" },
  { value: "1", label: "team for backend and interface — no vendor seam" },
  { value: "6", label: "disciplines under one roof, from schema to AI" },
];

const process = [
  { step: "01", title: "Scope", body: "We map the actual workflow before agreeing on screens." },
  { step: "02", title: "Model", body: "The data model is decided first; the UI follows it." },
  { step: "03", title: "Build", body: "Backend and interface progress together, weekly." },
  { step: "04", title: "Launch & iterate", body: "Same team after launch — no handover gap." },
];

const aiFeatures = [
  {
    icon: Brain,
    title: "Specialized AI integration",
    body: "We integrate LLMs, embeddings, retrieval systems and agents into products where they solve a real workflow, not just demo well. The hard work is context, retries, safety, and making the output useful inside your existing data model.",
  },
  {
    icon: Cpu,
    title: "Client-owned models",
    body: "When off-the-shelf AI isn't enough, we help clients train, fine-tune and deploy their own models. The result is proprietary intelligence that keeps sensitive data under the client's control and fits the business precisely.",
  },
];

const vibequest = [
  {
    title: "Experience over feed",
    body: "The core object isn't a post — it's a shared quest people join, build on and finish together. The ranking problem becomes a matching problem.",
  },
  {
    title: "Real-time by default",
    body: "Presence, state and interaction are streamed from one canonical model, so every participant sees the same moment at the same time.",
  },
  {
    title: "AI that curates, not addicts",
    body: "Matching, moderation and personalisation run on models tuned for relevance and safety, with the client owning the model and the data behind it.",
  },
];

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
              <a href={"#/work/" + hero.slug}
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
                  style={{ background: "linear-gradient(to top, var(--color-card) 12%, transparent 75%)" }}
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
                <a href={"#/work/" + p.slug}
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
                    style={{ background: "linear-gradient(to top, var(--color-card) 15%, transparent 80%)" }}
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
        <section id="capabilities" className="border-y border-border/60 bg-card/30 scroll-mt-20">
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


function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-border py-4">
      <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-1.5 text-sm text-foreground">{value}</p>
    </div>
  );
}

function CaseStudy({ project }: { project: Project }) {
  

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="pt-16">
        <section className="relative border-b border-border/60">
          <div className="relative h-[22rem] overflow-hidden sm:h-[28rem]">
            <img
              src={project.cover}
              alt={`${project.name} cover artwork`}
              width={1600}
              height={1008}
              className="h-full w-full object-cover opacity-70"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, var(--color-background) 6%, transparent 70%)" }}
            />
          </div>
          <div className="mx-auto max-w-5xl px-6 pb-14">
            <a href="#work"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> All work
            </a>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.28em] text-accent">
              {project.kicker} · {project.year} · {project.domain}
            </p>
            <h1 className="mt-4 text-5xl font-semibold text-foreground sm:text-6xl">
              {project.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {project.summary}
            </p>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Visit {project.domain}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section className="mx-auto grid max-w-5xl gap-12 px-6 py-20 lg:grid-cols-[1fr_18rem]">
          <div className="space-y-16">
            {/* Problem */}
            <Reveal>
              <article>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  The problem
                </p>
                <h2 className="mt-4 text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
                  {project.problem.heading}
                </h2>
                {project.problem.body.map((p) => (
                  <p key={p} className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
              </article>
            </Reveal>

            {/* Decisions */}
            <div>
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  What we built
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-foreground sm:text-3xl">
                  Four decisions that shaped it
                </h2>
              </Reveal>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {project.decisions.map((d, i) => (
                  <Reveal key={d.title} delay={i * 70}>
                    <div className="tile h-full p-6">
                      <p className="font-mono text-xs tracking-[0.22em] text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-3 text-lg font-semibold text-foreground">{d.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Architecture */}
            <div>
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  Architecture
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-foreground sm:text-3xl">
                  How it is put together
                </h2>
              </Reveal>
              <Reveal delay={60}>
                <dl className="mt-8 overflow-hidden rounded-xl border border-border">
                  {project.architecture.map((a, i) => (
                    <div
                      key={a.layer}
                      className={`grid gap-1 p-5 sm:grid-cols-[9rem_1fr] sm:gap-6 ${
                        i % 2 === 0 ? "bg-card/40" : "bg-background"
                      }`}
                    >
                      <dt className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                        {a.layer}
                      </dt>
                      <dd className="text-sm leading-relaxed text-muted-foreground">{a.detail}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            {/* Outcomes */}
            <div>
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  Outcomes
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-foreground sm:text-3xl">
                  {project.outcomes.heading}
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">{project.outcomes.note}</p>
              </Reveal>
              <ul className="mt-7 space-y-3">
                {project.outcomes.points.map((p, i) => (
                  <Reveal key={p} delay={i * 60}>
                    <li className="flex gap-3 border-t border-border pt-3 text-sm leading-relaxed text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                      <span>{p}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>

            <Reveal>
              <div className="flex flex-wrap gap-2">
                {project.disciplines.map((d) => (
                  <span
                    key={d}
                    className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs text-muted-foreground"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <div className="tile flex flex-col gap-4 p-7 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-base text-foreground">
                  Have a build like this one? Send the brief and get a candid assessment within 24 hours.
                </p>
                <a
                  href="mailto:hello@ahtechworld.com"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  Start a project
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <Meta label="Our role" value={project.role} />
            <Meta label="Team" value={project.team} />
            <Meta label="Duration" value={project.duration} />
            <Meta label="Status" value={project.status} />
            <Meta label="Hard part" value={project.hardPart} />
          </aside>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

export default function AHTechworldPortfolio() {
  useRuntimeStyles();
  const hash = useHashRoute();
  const match = /^#\/work\/([\w-]+)/.exec(hash);
  const project = match ? getProject(match[1]!) : undefined;

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo({ top: 0 });
  }, [hash]);

  if (project) return <CaseStudy project={project} />;
  return <Home />;
}
