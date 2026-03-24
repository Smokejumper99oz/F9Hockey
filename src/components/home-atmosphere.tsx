const iceNoiseSvg =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='0.5'/%3E%3C/svg%3E\")";

const particles: { left: string; top: string; delay: string; duration: string }[] =
  [
    { left: "8%", top: "18%", delay: "0s", duration: "9s" },
    { left: "22%", top: "42%", delay: "1.2s", duration: "11s" },
    { left: "78%", top: "28%", delay: "0.4s", duration: "10s" },
    { left: "88%", top: "55%", delay: "2s", duration: "12s" },
    { left: "14%", top: "72%", delay: "1.8s", duration: "8.5s" },
    { left: "62%", top: "68%", delay: "0.9s", duration: "9.5s" },
  ];

/**
 * Subtle CSS-only motion for the homepage. Paired with `.home-atmosphere` rules
 * in globals.css for `prefers-reduced-motion`.
 */
export function HomeAtmosphere() {
  return (
    <div
      className="home-atmosphere pointer-events-none absolute inset-0 overflow-hidden bg-zinc-950"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_-15%,rgba(16,185,129,0.07),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_80%_100%,rgba(6,78,59,0.12),transparent_55%)]" />

      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{ backgroundImage: iceNoiseSvg }}
      />

      <div className="absolute -left-[20%] top-[5%] h-[min(85vh,38rem)] w-[min(90vw,42rem)] rounded-full bg-emerald-500/25 blur-[120px] will-change-transform motion-reduce:animate-none animate-home-aurora-a [transform:translateZ(0)]" />

      <div className="absolute -right-[15%] bottom-[10%] h-[min(70vh,32rem)] w-[min(85vw,36rem)] rounded-full bg-teal-600/20 blur-[100px] will-change-transform motion-reduce:animate-none animate-home-aurora-b [transform:translateZ(0)]" />

      <div className="absolute -left-1/4 top-0 h-full w-1/2 bg-gradient-to-b from-white/[0.07] via-white/[0.02] to-transparent blur-md will-change-transform motion-reduce:animate-none animate-home-beam [transform:translateZ(0)]" />

      <div className="absolute -right-1/4 top-[15%] h-[85%] w-[45%] bg-gradient-to-b from-emerald-200/[0.06] via-transparent to-transparent blur-md will-change-transform motion-reduce:animate-none animate-home-beam-slow [transform:translateZ(0)]" />

      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white/25 shadow-[0_0_8px_rgba(255,255,255,0.15)] motion-reduce:animate-none animate-home-drift will-change-transform [animation-timing-function:ease-in-out]"
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}
