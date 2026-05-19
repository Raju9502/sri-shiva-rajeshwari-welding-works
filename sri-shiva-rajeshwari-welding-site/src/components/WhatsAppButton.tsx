import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid place-items-center h-14 w-14 rounded-full bg-whatsapp text-whatsapp-foreground shadow-elevate hover:scale-110 transition-transform animate-spark"
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp/40 animate-ping" />
      <MessageCircle className="relative h-7 w-7" />
    </a>
  );
}
