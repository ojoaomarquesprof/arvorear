"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/logo";
import { navigation } from "@/lib/site-data";
import { whatsappUrl } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition duration-300",
        scrolled ? "border-root/10 bg-sand/90 shadow-[0_8px_35px_rgba(52,56,45,0.06)] backdrop-blur-xl" : "border-transparent bg-sand/75 backdrop-blur-md",
      )}
    >
      <Container className="flex h-[4.75rem] items-center justify-between sm:h-[5.25rem]">
        <Link href="/#inicio" className="rounded-lg" aria-label="Clínica Arvorear — ir para o início">
          <Logo priority className="-ml-3" />
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="rounded-md py-2 text-[0.8rem] font-semibold text-ink/70 transition hover:text-root">
              {item.label}
            </a>
          ))}
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-primary ml-2">
            <MessageCircle size={17} aria-hidden="true" /> Conversar com a equipe
          </a>
        </nav>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-root/15 bg-sand/75 text-root shadow-[0_8px_24px_rgba(52,56,45,0.06)] transition hover:border-root/30 hover:bg-sand xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-x-0 top-[4.75rem] h-[calc(100dvh-4.75rem)] overflow-y-auto border-t border-root/10 bg-sand/95 backdrop-blur-xl sm:top-[5.25rem] sm:h-[calc(100dvh-5.25rem)] xl:hidden"
            initial={reduceMotion ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
          >
            <Container className="flex min-h-full flex-col py-7 sm:py-9">
              <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-root/50">Afeto • Ciência • Desenvolvimento</p>
              <nav className="flex flex-col" aria-label="Navegação móvel">
                {navigation.map((item, index) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="group border-b border-root/10 py-3.5 font-display text-[1.85rem] text-root transition hover:pl-2 hover:text-ink sm:py-4 sm:text-3xl motion-reduce:transform-none">
                    <span className="mr-3 align-middle font-sans text-xs text-earth">0{index + 1}</span>{item.label}
                  </a>
                ))}
              </nav>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="button-primary mt-auto w-full">
                <MessageCircle size={18} aria-hidden="true" /> Conversar com a equipe
              </a>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
