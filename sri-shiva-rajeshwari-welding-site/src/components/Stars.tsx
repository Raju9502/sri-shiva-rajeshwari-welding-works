import { Star } from "lucide-react";

export function Stars({ value, size = 16 }: { value: number; size?: number }) {
  const full = Math.round(value);
  return (
    <div className="inline-flex items-center gap-0.5" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          style={{ width: size, height: size }}
          className={i < full ? "fill-primary text-primary" : "text-muted-foreground/40"}
        />
      ))}
    </div>
  );
}
