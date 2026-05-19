import { useEffect, useState } from "react";

const KEY = "ssrww-gallery-uploads";

export type Upload = { id: string; src: string; title: string };

export function useGalleryUploads() {
  const [items, setItems] = useState<Upload[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  const persist = (next: Upload[]) => {
    setItems(next);
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
    } catch {}
  };

  const compress = (file: File, maxW = 1280, quality = 0.8): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          const scale = Math.min(1, maxW / img.width);
          const canvas = document.createElement("canvas");
          canvas.width = Math.round(img.width * scale);
          canvas.height = Math.round(img.height * scale);
          const ctx = canvas.getContext("2d");
          if (!ctx) return reject(new Error("no ctx"));
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL("image/jpeg", quality));
        };
        img.onerror = reject;
        img.src = reader.result as string;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const addFiles = async (files: FileList | File[]) => {
    const arr = Array.from(files).filter((f) => f.type.startsWith("image/"));
    const next: Upload[] = [...items];
    for (const f of arr) {
      try {
        const src = await compress(f);
        next.unshift({
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
          src,
          title: f.name.replace(/\.[^.]+$/, ""),
        });
      } catch {}
    }
    persist(next);
  };

  const remove = (id: string) => persist(items.filter((i) => i.id !== id));
  const clear = () => persist([]);

  return { items, addFiles, remove, clear };
}
