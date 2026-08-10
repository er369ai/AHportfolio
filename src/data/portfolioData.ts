import {
  Boxes,
  Brain,
  Compass,
  Cpu,
  Layers,
  Plug,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type Project = {
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

export const projects: Project[] = [
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

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export type Capability = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export const capabilities: Capability[] = [
  { icon: Layers, title: "Backend architecture", body: "Relational data models, clean migrations and versioned APIs built for long-term maintainability and zero schema drift." },
  { icon: Plug, title: "Custom integrations", body: "Third-party services isolated behind adapters with retries, timeouts and fallbacks, so external downtime never breaks your product." },
  { icon: Workflow, title: "Unattended automation", body: "Background queues, idempotent job handlers, dead-letter processing and audit logs that give operators real control." },
  { icon: Compass, title: "Responsive interfaces", body: "Mobile-first UX/UI designed against real operational data volumes and edge-case content, not static mockups." },
  { icon: Boxes, title: "AI context engineering", body: "Retrieval pipelines, prompt structure, structured output validation and token-cost control for AI that has to be reliable." },
  { icon: Brain, title: "Technical leadership", body: "Direct work with your lead from scope definition through launch and the long operational tail afterwards." },
];

export const reasons = [
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

export const proof = [
  { value: "4", label: "platforms live in production" },
  { value: "3", label: "people, on every project, end to end" },
  { value: "1", label: "team for backend and interface — no vendor seam" },
  { value: "6", label: "disciplines under one roof, from schema to AI" },
];

export const process = [
  { step: "01", title: "Scope", body: "We map the actual workflow before agreeing on screens." },
  { step: "02", title: "Model", body: "The data model is decided first; the UI follows it." },
  { step: "03", title: "Build", body: "Backend and interface progress together, weekly." },
  { step: "04", title: "Launch & iterate", body: "Same team after launch — no handover gap." },
];

export const aiFeatures = [
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

export const vibequest = [
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
