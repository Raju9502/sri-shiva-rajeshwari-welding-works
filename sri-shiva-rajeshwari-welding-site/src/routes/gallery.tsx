import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { works } from "@/lib/works";
import { useGalleryUploads } from "@/lib/useGalleryUploads";
import { Upload, Trash2, ImagePlus } from "lucide-react";
import { useRef } from "react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Sri Shiva Rajeshwari Welding Works" },
      { name: "description", content: "Browse photos of completed welding projects: gates, grills, railings, shutters and structural fabrication." },
      { property: "og:title", content: "Welding Project Gallery" },
      { property: "og:description", content: "Completed welding projects and fabrication samples." },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const { items, addFiles, remove } = useGalleryUploads();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-6">
        <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Portfolio</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-bold">Our <span className="text-gradient-spark">Work</span></h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          A glimpse of recent projects delivered for homes, shops and industries.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => {
              if (e.target.files) addFiles(e.target.files);
              if (inputRef.current) inputRef.current.value = "";
            }}
          />
          <button
            onClick={() => inputRef.current?.click()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-gradient-spark text-primary-foreground font-semibold shadow-glow hover:opacity-90 transition"
          >
            <Upload className="h-4 w-4" /> Upload Gallery Images
          </button>
          <span className="text-xs text-muted-foreground">
            Images are saved in your browser. Add as many as you like.
          </span>
        </div>
      </section>

      {items.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-10">
          <h2 className="text-xl font-semibold mb-4">Your Uploads</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((u) => (
              <figure key={u.id} className="group relative overflow-hidden rounded-xl border border-border bg-card">
                <img src={u.src} alt={u.title} loading="lazy"
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110" />
                <button
                  onClick={() => remove(u.id)}
                  aria-label="Remove image"
                  className="absolute top-3 right-3 grid place-items-center h-9 w-9 rounded-full bg-background/80 backdrop-blur border border-border hover:bg-destructive hover:text-destructive-foreground transition"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
                <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background/95 via-background/60 to-transparent">
                  <div className="text-sm font-semibold truncate">{u.title}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {items.length === 0 && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-10">
          <div className="rounded-xl border border-dashed border-border bg-card/40 p-10 text-center">
            <ImagePlus className="h-8 w-8 text-primary mx-auto" />
            <p className="mt-3 text-sm text-muted-foreground">
              No uploads yet — click <strong>Upload Gallery Images</strong> to add your photos.
            </p>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-20">
        <h2 className="text-xl font-semibold mb-4">Featured Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {works.map((w) => (
            <figure key={w.title} className="group relative overflow-hidden rounded-xl border border-border bg-card">
              <img src={w.src} alt={w.title} loading="lazy" width={1024} height={1024}
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-background/95 via-background/60 to-transparent">
                <div className="text-xs text-primary font-semibold uppercase tracking-wider">{w.category}</div>
                <div className="text-base font-semibold mt-0.5">{w.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
