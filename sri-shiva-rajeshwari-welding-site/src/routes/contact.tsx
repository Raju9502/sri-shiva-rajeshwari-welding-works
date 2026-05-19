import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { SITE, waLink } from "@/lib/site";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sri Siva Rajeshwari Welding Works" },
      { name: "description", content: "Reach us by phone, WhatsApp or visit our workshop. Address, hours and location map for Sri Siva Rajeshwari Welding Works." },
      { property: "og:title", content: "Contact Sri Siva Rajeshwari Welding Works" },
      { property: "og:description", content: "Phone, WhatsApp, email, address & location map." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}&output=embed`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address)}`;
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-10">
        <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Get in Touch</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-bold">Contact <span className="text-gradient-spark">Us</span></h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          Call us, message on WhatsApp, or visit our workshop — we're happy to help.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-20 grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {[
            { icon: Phone, t: "Phone", v: SITE.phone, href: SITE.phoneHref },
            { icon: MessageCircle, t: "WhatsApp", v: "Chat with us instantly", href: waLink() },
            { icon: Mail, t: "Email", v: SITE.email, href: `mailto:${SITE.email}` },
            { icon: MapPin, t: "Workshop", v: SITE.address, href: mapsLink },
          ].map(({ icon: Icon, t, v, href }) => (
            <a key={t} href={href} target={t === "WhatsApp" || t === "Workshop" ? "_blank" : undefined} rel="noopener noreferrer"
              className="flex gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition group">
              <div className="h-11 w-11 rounded-lg bg-gradient-spark grid place-items-center text-primary-foreground shrink-0 shadow-glow">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-primary font-semibold uppercase tracking-wider">{t}</div>
                <div className="font-medium group-hover:text-primary transition break-words">{v}</div>
              </div>
            </a>
          ))}

          <div className="p-5 rounded-xl bg-card border border-border">
            <div className="flex gap-3 items-center">
              <Clock className="h-5 w-5 text-primary" />
              <div className="font-semibold">Business Hours</div>
            </div>
            <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              {SITE.hours.map((h) => (
                <div key={h.d} className="flex justify-between">
                  <span>{h.d}</span><span className="text-foreground">{h.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 rounded-xl overflow-hidden border border-border bg-card min-h-[420px]">
          <iframe
            title="Workshop location"
            src={mapsEmbed}
            className="w-full h-full min-h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </SiteLayout>
  );
}
