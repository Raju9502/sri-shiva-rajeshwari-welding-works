// Central site config. Update these values to customize the website.
export const SITE = {
  name: "SRI SHIVA RAJESHWARI WELDING WORKS",
  shortName: "Sri Shiva Rajeshwari Welding",
  tagline: "Custom fabrication, gates, grills & structural welding",
  phone: "+91 95026 41307",
  phoneHref: "tel:+919502641307",
  whatsapp: "919502641307", // international format, no +
  whatsappMessage: "Hello, I'd like to enquire about your welding services.",
  email: "info@srishivarajeshwariwelding.com",
  address:
    "Sri Shiva Rajeshwari Welding Works, Rajam, Vizianagaram Dist, AP 532127",
  mapsQuery: "Sri Shiva Rajeshwari Welding Works, Razam",
  mapsUrl: "https://maps.app.goo.gl/KypSuoafPhDgR5T89",
  rating: 5.0,
  reviewCount: 8,
  hours: [
    { d: "Mon – Sun", t: "9:00 AM – 7:00 PM" },
    { d: "Open", t: "All 7 days a week" },
  ],
};

export const waLink = (msg = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
