import Image from "next/image";
import Link from "next/link";
import { HomeIntroSplash } from "@/components/home-intro-splash";
import { HomeAtmosphere } from "@/components/home-atmosphere";

export default function HomePage() {
  return (
    <div className="relative isolate overflow-x-hidden">
      <HomeIntroSplash />
      <HomeAtmosphere />
      <div className="relative z-10 flex flex-col">
      {/* Visual-first: triptych only; copy lives in the next section */}
      <section className="relative w-full overflow-hidden border-b border-zinc-800/80">
        <div className="relative h-[52vh] min-h-[14rem] w-full max-h-[68vh] sm:h-[58vh] md:h-[65vh]">
          <div className="grid h-full grid-cols-1 grid-rows-3 gap-0 md:grid-cols-[28fr_44fr_28fr] md:grid-rows-1">
            <div className="relative min-h-0 overflow-hidden">
              <Image
                src="/images/bench.jpg"
                alt=""
                fill
                sizes="(min-width: 768px) 28vw, 100vw"
                className="object-cover object-[48%_42%]"
              />
              {/* Inner-right edge blend (seam with center) */}
              <div
                className="pointer-events-none absolute inset-y-0 right-0 z-[5] hidden w-11 bg-gradient-to-l from-black/22 via-black/8 to-transparent shadow-[inset_-6px_0_10px_rgba(0,0,0,0.08)] md:block"
                aria-hidden
              />
            </div>
            <div className="relative min-h-0 overflow-hidden">
              <Image
                src="/images/team.jpg"
                alt=""
                fill
                priority
                sizes="(min-width: 768px) 44vw, 100vw"
                className="object-cover object-[center_38%]"
              />
              <div
                className="pointer-events-none absolute inset-y-0 left-0 z-[5] hidden w-11 bg-gradient-to-r from-black/18 via-black/6 to-transparent shadow-[inset_6px_0_10px_rgba(0,0,0,0.07)] md:block"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-y-0 right-0 z-[5] hidden w-11 bg-gradient-to-l from-black/18 via-black/6 to-transparent shadow-[inset_-6px_0_10px_rgba(0,0,0,0.07)] md:block"
                aria-hidden
              />
            </div>
            <div className="relative min-h-0 overflow-hidden">
              {/* Must be this exact file — not F9HockeyStanleycupplate.png. Bump ?v= when replacing to bust browser cache. */}
              <Image
                src="/images/F9cupimage.png?v=2"
                alt="Frontier Hockey 2026–27 roster engraved on silver trophy plaque, blurred arena and rink in the background"
                fill
                sizes="(min-width: 768px) 28vw, 100vw"
                className="object-cover object-[32%_center] sm:object-[36%_center] md:object-[38%_center]"
              />
              <div
                className="pointer-events-none absolute inset-y-0 left-0 z-[5] hidden w-11 bg-gradient-to-r from-black/22 via-black/8 to-transparent shadow-[inset_6px_0_10px_rgba(0,0,0,0.08)] md:block"
                aria-hidden
              />
            </div>
          </div>

          {/* Rink-trim style seams (desktop only — column seams) */}
          <div
            className="pointer-events-none absolute inset-y-0 left-[28%] z-[15] hidden w-[3px] -translate-x-1/2 bg-gradient-to-b from-red-950/90 via-red-800/85 to-red-950/90 opacity-[0.72] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.22)] md:block"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 left-[72%] z-[15] hidden w-[3px] -translate-x-1/2 bg-gradient-to-b from-red-950/90 via-red-800/85 to-red-950/90 opacity-[0.72] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.22)] md:block"
            aria-hidden
          />

          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-zinc-950/40 via-zinc-950/10 to-transparent sm:h-24"
            aria-hidden
          />
        </div>
      </section>

      <section className="border-b border-zinc-800/80 bg-zinc-950/40">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-500/95 sm:text-sm">
              F9 HOCKEY
            </p>
            <h1 className="mt-3 text-balance text-[clamp(1.75rem,4vw+0.5rem,3.25rem)] font-bold leading-[1.06] tracking-tight text-zinc-50 sm:mt-4">
              Frontier Airlines Hockey Club
            </h1>
            <p className="mt-4 max-w-3xl text-pretty text-base leading-[1.65] text-zinc-400 sm:mt-5 sm:text-lg sm:leading-[1.7]">
              {`We're Frontier Airline pilots and dispatchers who love flying, hockey, and the time we spend together off the clock. Frontier Airlines Hockey Club is more than just a team—it's a group that brings the same energy from the flight deck to the locker room. This site is where we keep it all together: schedules, roster info, and team updates as the season unfolds.`}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/hub"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-950/40 ring-1 ring-emerald-400/25 transition hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
              >
                Open The Bench
              </Link>
              <Link
                href="/schedule"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900/60 px-7 py-3.5 text-base font-semibold text-zinc-200 transition hover:border-zinc-600 hover:bg-zinc-800/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
              >
                View schedule
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#09090b] py-14 sm:py-16">
        <div className="mx-auto max-w-2xl px-5 text-center sm:px-6">
          <a
            href="https://crewrules.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mx-auto block w-1/2 max-w-2xl"
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- sponsor asset; explicit dimensions not required */}
            <img
              src="/images/crewrules-sponsor.png"
              alt="CrewRules Proud Sponsor of Frontier Airlines Hockey Team"
              className="relative z-[1] w-full opacity-[0.88] transition duration-500 ease-out group-hover:opacity-100"
            />
            <div
              className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_78%_82%_at_50%_48%,transparent_42%,#09090b_96%)] opacity-45 transition duration-500 ease-out group-hover:opacity-30"
              aria-hidden
            />
          </a>
        </div>
      </section>

      </div>
    </div>
  );
}
