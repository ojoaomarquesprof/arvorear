"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

type GalleryImage = {
  src: string;
  alt: string;
  label: string;
};

export function SpaceGallery({ images }: Readonly<{ images: ReadonlyArray<GalleryImage> }>) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const lastTriggerIndex = useRef(0);
  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);
  const previous = useCallback(() => {
    setActiveIndex((current) => current === null ? null : (current - 1 + images.length) % images.length);
  }, [images.length]);
  const next = useCallback(() => {
    setActiveIndex((current) => current === null ? null : (current + 1) % images.length);
  }, [images.length]);

  function open(index: number) {
    lastTriggerIndex.current = index;
    setActiveIndex(index);
  }

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const triggers = triggerRefs.current;
    document.body.style.overflow = "hidden";
    const focusFrame = window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();

      if (event.key === "Tab" && dialogRef.current) {
        const controls = Array.from(dialogRef.current.querySelectorAll<HTMLElement>("button:not([disabled])"));
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      window.requestAnimationFrame(() => triggers[lastTriggerIndex.current]?.focus());
    };
  }, [close, isOpen, next, previous]);

  const activeImage = activeIndex === null ? null : images[activeIndex];
  const [featuredSpace, ...supportingSpaces] = images;

  return (
    <>
      <div className="mt-14 grid gap-3 lg:mt-20 lg:grid-cols-[1.35fr_0.65fr] lg:gap-4">
        <Reveal className="h-full">
          <button
            ref={(element) => { triggerRefs.current[0] = element; }}
            type="button"
            onClick={() => open(0)}
            className="group relative block min-h-[440px] w-full overflow-hidden rounded-[3.5rem_3.5rem_1rem_3.5rem] bg-serene/30 text-left shadow-[0_22px_60px_rgba(52,56,45,0.12)] sm:min-h-[560px] lg:min-h-[720px]"
            aria-label={`Ampliar imagem: ${featuredSpace.label}`}
          >
            <Image
              src={featuredSpace.src}
              alt={featuredSpace.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 68vw"
              className="object-cover transition duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transform-none"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/5 to-transparent" aria-hidden="true" />
            <span className="absolute right-6 top-6 grid size-11 place-items-center rounded-full border border-sand/25 bg-ink/35 text-sand opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" aria-hidden="true"><Maximize2 size={18} /></span>
            <span className="absolute inset-x-0 bottom-0 p-6 text-sand sm:p-9 lg:p-11">
              <span className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-peach">{featuredSpace.label}</span>
              <span className="mt-3 block max-w-xl font-display text-2xl leading-snug sm:text-4xl">Um lugar para chegar com calma, reconhecer o ambiente e começar no próprio ritmo.</span>
            </span>
          </button>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 lg:gap-4">
          {supportingSpaces.map((image, index) => {
            const galleryIndex = index + 1;
            return (
              <Reveal key={image.src} delay={index * 0.025} className={index === 0 ? "col-span-2" : "col-span-1"}>
                <button
                  ref={(element) => { triggerRefs.current[galleryIndex] = element; }}
                  type="button"
                  onClick={() => open(galleryIndex)}
                  className={`group relative block h-full min-h-[190px] w-full overflow-hidden bg-serene/30 text-left shadow-[0_14px_38px_rgba(52,56,45,0.09)] sm:min-h-[230px] lg:min-h-0 ${index === 0 ? "rounded-[2.5rem_2.5rem_0.75rem_2.5rem]" : "rounded-[1.4rem_1.4rem_0.5rem_1.4rem]"}`}
                  aria-label={`Ampliar imagem: ${image.label}`}
                >
                  <Image src={image.src} alt={image.alt} fill sizes="(max-width: 1024px) 50vw, 24vw" className="object-cover transition duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transform-none" />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" aria-hidden="true" />
                  <span className="absolute right-3 top-3 grid size-9 place-items-center rounded-full border border-sand/25 bg-ink/35 text-sand opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" aria-hidden="true"><Maximize2 size={15} /></span>
                  <span className="absolute bottom-0 left-0 p-4 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-sand sm:p-5">{image.label}</span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      {activeImage ? (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`Imagem ampliada: ${activeImage.label}`}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 p-3 backdrop-blur-xl sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <p className="absolute left-4 top-4 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-sand/60 sm:left-7 sm:top-7" aria-live="polite">
            {activeIndex! + 1} de {images.length}
          </p>
          <button ref={closeButtonRef} type="button" onClick={close} className="absolute right-4 top-4 z-10 grid size-12 place-items-center rounded-full border border-sand/20 bg-sand/10 text-sand transition hover:bg-sand/20 sm:right-7 sm:top-7" aria-label="Fechar imagem ampliada">
            <X size={22} />
          </button>

          <button type="button" onClick={previous} className="absolute bottom-4 left-4 z-10 grid size-12 place-items-center rounded-full border border-sand/20 bg-sand/10 text-sand transition hover:bg-sand/20 sm:bottom-auto sm:left-7 sm:top-1/2 sm:-translate-y-1/2" aria-label="Imagem anterior">
            <ChevronLeft size={24} />
          </button>
          <button type="button" onClick={next} className="absolute bottom-4 right-4 z-10 grid size-12 place-items-center rounded-full border border-sand/20 bg-sand/10 text-sand transition hover:bg-sand/20 sm:bottom-auto sm:right-7 sm:top-1/2 sm:-translate-y-1/2" aria-label="Próxima imagem">
            <ChevronRight size={24} />
          </button>

          <figure className="flex h-[calc(100dvh-7rem)] w-full max-w-6xl flex-col items-center justify-center sm:h-[calc(100dvh-5rem)] sm:px-16">
            <div className="relative min-h-0 w-full flex-1">
              <Image src={activeImage.src} alt={activeImage.alt} fill sizes="100vw" quality={90} className="object-contain" />
            </div>
            <figcaption className="mt-3 max-w-2xl text-center font-display text-xl text-sand sm:text-2xl">{activeImage.label}</figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
