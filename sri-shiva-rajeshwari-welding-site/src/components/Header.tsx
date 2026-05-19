import { Link } from "@tanstack/react-router";
import { Flame, Menu, X } from "lucide-react";
import { useState } from "react";
import { SITE } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/75 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid place-items-center h-9 w-9 rounded-md bg-gradient-spark shadow-glow">
            <Flame className="h-5 w-5 text-primary-foreground" />
          </span>
          <span className="font-bold tracking-wide text-sm sm:text-base leading-tight">
            <span className="block text-foreground">SRI SHIVA RAJESHWARI</span>
            <span className="block text-[10px] text-muted-foreground tracking-[0.2em]">
              WELDING WORKS
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
              activeProps={{ className: "text-primary font-semibold" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={SITE.phoneHref}
            className="ml-2 px-4 py-2 rounded-md bg-gradient-spark text-primary-foreground text-sm font-semibold hover:opacity-90 transition shadow-glow"
          >
            Call Now
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="flex flex-col p-4 gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-foreground hover:bg-muted"
                activeProps={{ className: "text-primary font-semibold" }}
              >
                {n.label}
              </Link>
            ))}
            <a href={SITE.phoneHref} className="mt-2 px-4 py-3 rounded-md bg-gradient-spark text-primary-foreground text-center font-semibold">
              Call {SITE.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
