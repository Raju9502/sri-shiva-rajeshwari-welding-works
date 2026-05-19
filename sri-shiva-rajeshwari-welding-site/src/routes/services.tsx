import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { DoorOpen, Grid3x3, Building2, Wrench, Hammer, Truck } from "lucide-react";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Sri Siva Rajeshwari Welding Works" },
      { name: "description", content: "Custom gates, window grills, staircase railings, rolling shutters, structural fabrication and on-site welding services." },
      { property: "og:title", content: "Welding Services — Gates, Grills, Railings & More" },
      { property: "og:description", content: "Full-service welding & fabrication for homes, shops, and industries." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: DoorOpen, t: "Gates & Main Doors", d: "Wrought iron, steel and decorative gates — sliding, swing or automatic." },
  { icon: Grid3x3, t: "Window Grills", d: "Decorative and security grills, custom patterns to suit any window." },
  { icon: Building2, t: "Staircase Railings", d: "MS, SS and glass-combination railings with modern finishes." },
  { icon: Hammer, t: "Rolling Shutters", d: "Manual and motorized shutters for shops, godowns and garages." },
  { icon: Wrench, t: "Structural Fabrication", d: "Sheds, water tank stands, mezzanines and heavy structures." },
  { icon: Truck, t: "On-site Welding", d: "Repairs, modifications and emergency welding at your location." },
];

function Services() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-10">
        <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">What We Do</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-bold">Our <span className="text-gradient-spark">Services</span></h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          From simple repairs to large structural projects — we cover the full range of
          welding and fabrication needs.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map(({ icon: Icon, t, d }) => (
          <div key={t} className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:-translate-y-1 transition-all">
            <div className="h-12 w-12 rounded-lg bg-gradient-spark grid place-items-center text-primary-foreground shadow-glow">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-20">
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Don't see what you need?</h2>
          <p className="mt-2 text-muted-foreground">We take on custom projects of all sizes.</p>
          <a href={waLink("Hi, I have a custom welding project to discuss.")} target="_blank" rel="noopener noreferrer"
            className="mt-5 inline-block px-6 py-3 rounded-md bg-gradient-spark text-primary-foreground font-semibold shadow-glow">
            Discuss Your Project
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
