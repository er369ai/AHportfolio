import { useEffect, useRef, useState } from "react";
import { CaseStudyView } from "./components/CaseStudyView";
import { PageShell } from "./components/PageShell";
import { getProject } from "./data/portfolioData";
import { AiPage } from "./pages/AiPage";
import { CapabilitiesPage } from "./pages/CapabilitiesPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { OurWorksPage } from "./pages/OurWorksPage";
import { WhyUsPage } from "./pages/WhyUsPage";
import "./index.css";

const pages: Record<string, () => JSX.Element> = {
  "/": HomePage,
  "/ourworks": OurWorksPage,
  "/ai": AiPage,
  "/capabilities": CapabilitiesPage,
  "/why-us": WhyUsPage,
  "/contact": ContactPage,
};

function useLocation() {
  const [location, setLocation] = useState(() => ({
    pathname: window.location.pathname,
    hash: window.location.hash,
    key: 0,
  }));

  useEffect(() => {
    const sync = () =>
      setLocation((prev) => ({
        pathname: window.location.pathname,
        hash: window.location.hash,
        key: prev.key + 1,
      }));

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element).closest("a");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      const href = anchor.getAttribute("href");
      if (!href) return;
      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return;
      event.preventDefault();
      if (url.href !== window.location.href) window.history.pushState(null, "", url.href);
      sync();
    };

    window.addEventListener("popstate", sync);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("popstate", sync);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return location;
}

export default function App() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const lastPathname = useRef<string | null>(null);
  useEffect(() => {
    const behavior: ScrollBehavior = lastPathname.current === pathname ? "smooth" : "instant";
    lastPathname.current = pathname;
    const target = hash ? document.getElementById(hash.slice(1)) : null;
    if (target) target.scrollIntoView({ behavior });
    else window.scrollTo({ top: 0, behavior });
  }, [key]);

  const caseStudy = /^\/ourworks\/([\w-]+)\/?$/.exec(pathname);
  const project = caseStudy ? getProject(caseStudy[1]!) : undefined;
  if (project) return <CaseStudyView project={project} pathname={pathname} />;

  const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const Page = pages[normalized] ?? HomePage;
  return (
    <PageShell pathname={normalized}>
      <Page />
    </PageShell>
  );
}
