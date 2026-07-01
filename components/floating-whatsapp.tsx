import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site-config";

export function FloatingWhatsApp() {
  return (
    <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Conversar com a Clínica Arvorear pelo WhatsApp" className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 flex min-h-14 items-center gap-2 rounded-full border border-sand/20 bg-root px-4 text-sm font-bold text-sand shadow-[0_16px_45px_rgba(52,56,45,0.24)] transition duration-500 hover:-translate-y-1 hover:bg-[#505544] hover:shadow-[0_22px_55px_rgba(52,56,45,0.30)] sm:bottom-7 sm:right-7 sm:px-5 motion-reduce:transform-none">
      <MessageCircle size={21} aria-hidden="true" /><span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
