import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { SITE } from "@/lib/site";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SRI SIVA RAJESHWARI WELDING WORKS" },
      { name: "description", content: "Family-run welding workshop with 15+ years of trusted craftsmanship across gates, grills and structural fabrication." },
      { property: "og:title", content: "About Us — Sri Siva Rajeshwari Welding" },
      { property: "og:description", content: "Family-run welding workshop with 15+ years of trusted craftsmanship." },
    ],
  }),
  component: About,
});

function About() {
  const points = [
    "Skilled welders with 15+ years of hands-on experience",
    "Custom designs tailored to your space and budget",
    "Premium grade steel & anti-corrosion finishes",
    "On-site visits, measurements and installation",
    "Transparent pricing with no hidden costs",
  ];
  return (
    <SiteLayout>
      <section className="mx-auto max-w-5xl px-4 sm:px-6 pt-16 pb-12">
        <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">About Us</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-bold">A workshop built on <span className="text-gradient-spark">trust & sparks</span></h1>
        <p className="mt-6 text-lg text-muted-foreground">
          {SITE.name} has been serving the community for over a decade, fabricating
          everything from elegant home gates to heavy industrial structures. Every
          project is treated like our own — with attention to detail and a commitment
          to lasting quality.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-20 grid md:grid-cols-2 gap-10">
        <div className="p-8 rounded-2xl bg-card border border-border">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="mt-3 text-muted-foreground">
            To deliver welding work that combines strength, function, and beauty —
            built by skilled hands and backed by honest service.
          </p>
        </div>
        <div className="p-8 rounded-2xl bg-card border border-border">
          <h2 className="text-2xl font-bold">Why Choose Us</h2>
          <ul className="mt-4 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}
