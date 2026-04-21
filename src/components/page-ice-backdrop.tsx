import type { CSSProperties } from "react";

/** Shared ice texture (`/images/f9-contact-ice-bg.png`) — cover + soft edge mask + gradient overlay. */
const iceImageLayerStyle: CSSProperties = {
  backgroundImage: 'url("/images/f9-contact-ice-bg.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  WebkitMaskImage:
    "radial-gradient(ellipse 108% 102% at 50% 50%, #fff 36%, rgba(255,255,255,0.45) 62%, transparent 100%)",
  maskImage:
    "radial-gradient(ellipse 108% 102% at 50% 50%, #fff 36%, rgba(255,255,255,0.45) 62%, transparent 100%)",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  maskPosition: "center",
  WebkitMaskSize: "100% 100%",
  maskSize: "100% 100%",
};

/**
 * Decorative layers only — place inside a `relative min-h-* overflow-hidden bg-zinc-950` wrapper,
 * with page content in a sibling `relative z-10` container.
 */
export function PageIceBackdrop() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0"
        style={iceImageLayerStyle}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/78 to-zinc-950/[0.9]"
        aria-hidden
      />
    </>
  );
}
