"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type PhotoGalleryLightboxGridProps = {
  images: string[];
};

export function PhotoGalleryLightboxGrid({ images }: PhotoGalleryLightboxGridProps) {
  const [openSrc, setOpenSrc] = useState<string | null>(null);

  const close = useCallback(() => setOpenSrc(null), []);

  useEffect(() => {
    if (!openSrc) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [openSrc, close]);

  return (
    <>
      <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {images.map((src) => (
          <li
            key={src}
            className="relative aspect-[4/3] overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/60"
          >
            <button
              type="button"
              onClick={() => setOpenSrc(src)}
              className="group absolute inset-0 block cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              aria-label="View larger image"
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover transition duration-200 group-hover:brightness-110"
                sizes="(min-width: 640px) 25vw, 50vw"
              />
            </button>
          </li>
        ))}
      </ul>

      {openSrc ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged photo"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-10 rounded-md border border-zinc-600 bg-zinc-900 px-3 py-1.5 text-sm font-medium text-zinc-200 hover:bg-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            Close
          </button>
          {/* Large view: native img so full file scales without fixed aspect box */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={openSrc}
            alt=""
            className="max-h-[90vh] max-w-full object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </>
  );
}
