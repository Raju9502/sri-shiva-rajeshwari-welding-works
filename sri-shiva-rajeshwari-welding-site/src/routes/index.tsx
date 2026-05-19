import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Shield, Award, Clock, Wrench, MapPin } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { SITE, waLink } from "@/lib/site";
import { works } from "@/lib/works";
import { reviews } from "@/lib/reviews";
import { Stars } from "@/components/Stars";
import { useGalleryUploads } from "@/lib/useGalleryUploads";
import shopHero from "@/assets/shop-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SRI SHIVA RAJESHWARI WELDING WORKS — Custom Gates, Grills & Fabrication" },
      { name: "description", content: "Trusted welding workshop in Razam offering custom gates, grills, railings, shutters and structural fabrication. 5.0★ rated. Open 7 days." },
      { property: "og:title", content: "SRI SHIVA RAJESHWARI WELDING WORKS" },
      { property: "og:description", content: "Custom welding & fabrication — gates, grills, railings & structural work." },
      { property: "og:image", content: shopHero },
    ],
  }),
  component: Home,
});

function Home() {
  const { items: uploads } = useGalleryUploads();
  const recent = [
    ...uploads.slice(0, 6).map((u) => ({ src: u.src, title: u.title, category: "Your Upload" })),
    ...works,
  ].slice(0, 6);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 25% 20%, var(--primary) 0, transparent 40%), radial-gradient(circle at 80% 70%, var(--primary-glow) 0, transparent 35%)" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">
              <Wrench className="h-3.5 w-3.5" /> Established Craftsmanship
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
              Forging Strength.
              <span className="block text-gradient-spark">Welding Trust.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              {SITE.name} delivers custom welding and fabrication — gates, grills,
              railings, shutters, and heavy structural work — built to last.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <Stars value={SITE.rating} />
              <span className="text-sm font-semibold">{SITE.rating.toFixed(1)}</span>
              <span className="text-sm text-muted-foreground">({SITE.reviewCount} reviews)</span>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={waLink()} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-spark text-primary-foreground font-semibold shadow-glow hover:opacity-90 transition">
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/gallery"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-foreground hover:bg-card transition">
                View Our Work
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { n: "15+", l: "Years" },
                { n: "500+", l: "Projects" },
                { n: "7 Days", l: "Open" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-bold text-gradient-spark">{s.n}</div>
                  <div className="text-xs text-muted-foreground tracking-wider uppercase">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating shop image */}
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-spark opacity-20 blur-3xl rounded-full animate-spark" />
            <div className="relative animate-float">
              <div className="absolute -top-4 -left-4 h-24 w-24 border-2 border-primary/40 rounded-xl" />
              <div className="absolute -bottom-4 -right-4 h-24 w-24 border-2 border-primary-glow/40 rounded-xl" />
              <img
                src={shopHero}
                alt={`${SITE.name} workshop storefront`}
                width={1536}
                height={1152}
                className="relative rounded-2xl shadow-elevate object-cover w-full aspect-[4/3]"
              />
              <div className="absolute -bottom-5 left-6 right-6 sm:left-12 sm:right-12 bg-card/90 backdrop-blur border border-border rounded-xl p-4 flex items-center gap-3 shadow-elevate">
                <div className="h-10 w-10 rounded-full bg-gradient-spark grid place-items-center">
                  <Shield className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Quality Guaranteed</div>
                  <div className="text-xs text-muted-foreground">ISI grade materials</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 grid md:grid-cols-3 gap-6">
        {[
          { icon: Award, t: "Master Craftsmen", d: "Decades of welding expertise on every weld bead." },
          { icon: Clock, t: "Open 7 Days", d: "9 AM – 7 PM, every day. Visit or call anytime." },
          { icon: Shield, t: "Built to Last", d: "Premium grade steel, anti-rust finish, full warranty." },
        ].map(({ icon: Icon, t, d }) => (
          <div key={t} className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors">
            <div className="h-11 w-11 rounded-lg bg-primary/10 grid place-items-center text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>

      {/* GALLERY PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Portfolio</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Recent Works</h2>
          </div>
          <Link to="/gallery" className="text-sm text-primary hover:underline hidden sm:inline-flex items-center gap-1">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {recent.map((w, i) => (
            <figure key={`${w.title}-${i}`} className="group relative overflow-hidden rounded-xl border border-border bg-card">
              <img src={w.src} alt={w.title} loading="lazy" width={1024} height={1024}
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background/95 to-transparent">
                <div className="text-xs text-primary font-semibold">{w.category}</div>
                <div className="text-sm font-medium">{w.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Reviews & Ratings</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">What Customers Say</h2>
          <div className="mt-4 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-card border border-border">
            <Stars value={SITE.rating} size={20} />
            <span className="font-bold text-lg">{SITE.rating.toFixed(1)}</span>
            <span className="text-sm text-muted-foreground">based on {SITE.reviewCount} reviews</span>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition">
              <Stars value={r.rating} />
              <p className="mt-3 text-sm text-muted-foreground">"{r.text}"</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-semibold">{r.name}</span>
                <span className="text-xs text-muted-foreground">{r.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MAP / LOCATION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Visit Us</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Find Our Workshop</h2>
            <p className="mt-4 text-muted-foreground flex gap-2">
              <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>{SITE.address}</span>
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Open <strong className="text-foreground">9 AM – 7 PM</strong>, all 7 days a week.
              Just 600 m from the main road.
            </p>
            <a
              href={SITE.mapsUrl}
              target="_blank" rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-gradient-spark text-primary-foreground font-semibold shadow-glow"
            >
              Get Directions <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="lg:col-span-3 rounded-xl overflow-hidden border border-border bg-card min-h-[320px]">
            <iframe
              title="Workshop location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}&output=embed`}
              className="w-full h-full min-h-[320px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 my-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero border border-primary/30 p-10 sm:p-14 text-center">
          <div className="absolute inset-0 opacity-30 pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle at 50% 0%, var(--primary) 0, transparent 50%)" }} />
          <h2 className="relative text-3xl sm:text-4xl font-bold">Have a project in mind?</h2>
          <p className="relative mt-3 text-muted-foreground max-w-xl mx-auto">
            Send us a photo or sketch on WhatsApp and get a quick estimate. No obligations.
          </p>
          <a href={waLink()} target="_blank" rel="noopener noreferrer"
            className="relative mt-7 inline-flex items-center gap-2 px-7 py-3 rounded-md bg-gradient-spark text-primary-foreground font-semibold shadow-glow">
            Chat on WhatsApp <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
