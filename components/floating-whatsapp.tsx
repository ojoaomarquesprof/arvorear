import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site-config";

export function FloatingWhatsApp() {
  return (
    <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar com a Clínica Arvorear pelo WhatsApp" className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 flex min-h-14 items-center gap-2 rounded-[1rem_1rem_1rem_0.35rem] border border-sand/20 bg-root px-4 text-[0.95rem] font-bold leading-6 text-sand shadow-[0_14px_38px_rgba(52,56,45,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#505544] hover:shadow-[0_18px_44px_rgba(52,56,45,0.28)] sm:bottom-7 sm:right-7 sm:px-5 motion-reduce:transform-none">
      <MessageCircle size={20} aria-hidden="true" /><span className="hidden sm:inline">Falar pelo WhatsApp</span>
    </a>
  );
}
