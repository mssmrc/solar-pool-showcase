import { MessageCircle } from "lucide-react";
import { buildWhatsappUrl, siteConfig } from "@/config/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsappUrl(`Olá! Vim pelo site da ${siteConfig.name}.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-elegant transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
