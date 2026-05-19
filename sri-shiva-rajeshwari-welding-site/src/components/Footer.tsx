import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="text-lg font-bold text-gradient-spark">{SITE.name}</h3>
          <p className="mt-3 text-sm text-muted-foreground max-w-md">
            {SITE.tagline}. Trusted craftsmanship for homes, shops, and industries.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3 text-foreground">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3 text-foreground">Reach Us</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" /><a href={SITE.phoneHref} className="hover:text-primary">{SITE.phone}</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary" /><a href={`mailto:${SITE.email}`} className="hover:text-primary break-all">{SITE.email}</a></li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /><span>{SITE.address}</span></li>
            <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 text-primary" /><span>{SITE.hours[0].d}: {SITE.hours[0].t}</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
