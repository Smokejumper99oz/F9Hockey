import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "2026 Skate Outlook | F9 Hockey",
  description:
    "Tentative ice times, games, and team skates for the Frontier Airlines Hockey Club 2026 season.",
};

type ScheduleBlockProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

function ScheduleBlock({ eyebrow, title, children }: ScheduleBlockProps) {
  return (
    <article className="rounded-xl border border-zinc-800/90 bg-zinc-900/50 p-6 shadow-lg shadow-black/15 sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500/90">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-50 sm:text-2xl">
        {title}
      </h2>
      <div className="mt-4 space-y-3 text-base leading-relaxed text-zinc-400">
        {children}
      </div>
    </article>
  );
}

export default function SchedulePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
          2026 Skate Outlook
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-400">
          Tentative ice times, games, and team skates for the 2026 season.
        </p>
      </header>

      <div className="mt-10 flex flex-col gap-6">
        <section className="rounded-xl border border-amber-500/40 bg-gradient-to-br from-amber-950/55 via-zinc-900/50 to-zinc-950 px-6 py-6 shadow-lg shadow-amber-950/25 ring-1 ring-amber-500/20 sm:px-7 sm:py-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-400/95">
            TO BE SCHEDULED
          </p>
          <p className="mt-3 text-base leading-relaxed text-zinc-300 sm:text-lg">
            We may add something in{" "}
            <span className="font-medium text-amber-200/90">Denver, CO</span>{" "}
            in{" "}
            <span className="font-medium text-amber-200/90">
              August or September
            </span>
            —Check back for dates.
          </p>
        </section>

        <ScheduleBlock
          eyebrow="January 23–25, 2026 · Lake Nokomis, Minneapolis, MN"
          title="21st Annual U.S. Pond Hockey Championships"
        >
          <p>
            As part of the 2026 U.S. Pond Hockey season, this outdoor event will
            feature teams from across the country competing on the ice.
          </p>
          <p className="text-zinc-300">
            Spectating is free—join us, bring friends and family, and be part of
            the action.
          </p>
          <p>
            Organized by Capt. Allan Neher · Questions?{" "}
            <Link
              href="/contact"
              className="font-medium text-emerald-500/95 underline-offset-2 transition hover:text-emerald-400 hover:underline"
            >
              Just ask
            </Link>
            .
          </p>
        </ScheduleBlock>

        <article className="rounded-xl border border-zinc-800/90 bg-zinc-900/50 p-6 shadow-lg shadow-black/15 sm:p-7">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
            <div className="mx-auto shrink-0 sm:mx-0">
              <div className="flex h-[128px] w-[128px] items-center justify-center overflow-hidden rounded-full bg-zinc-50 p-1.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.75)] ring-1 ring-zinc-300/90 sm:h-[152px] sm:w-[152px]">
                <Image
                  src="/images/schedule/clearwater-skate-2026.png"
                  alt="Frontier Airlines Hockey Club — Clearwater, FL — March 10–11, 2026"
                  width={176}
                  height={176}
                  className="h-full w-full rounded-full object-contain object-center"
                  sizes="(min-width: 640px) 152px, 128px"
                  priority
                />
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500/90">
                March 10–11, 2026 · Clearwater, FL
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-50 sm:text-2xl">
                3rd Annual Clearwater Skate
              </h2>
              <div className="mt-4 space-y-3 text-base leading-relaxed text-zinc-400">
                <div className="space-y-2">
                  <p>
                    <span className="text-zinc-300">March 10</span> — 7:00 p.m. vs
                    Allegiant Airlines
                  </p>
                  <p>
                    <span className="text-zinc-300">March 11</span> — 9:00 a.m. vs
                    Drunken Clammers
                  </p>
                </div>
                <div className="space-y-3">
                  <p>
                    The 3rd Annual Clearwater skate brings Frontier crew together
                    for a night of hockey, followed by our usual social at{" "}
                    <a
                      href="https://mugssportsbar.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-emerald-500/95 underline-offset-2 transition hover:text-emerald-400 hover:underline"
                    >
                      Mugs Sports Bar &amp; Grill
                    </a>
                    .
                  </p>
                  <p>
                    We’ll kick things off against Allegiant Airlines, then return to
                    the ice the next morning for a skate with the Drunken Clammers.
                  </p>
                  <p className="text-zinc-300">
                    Spectating is free—bring friends and family.
                  </p>
                </div>
                <p>
                  Organized by Capt. Sven Folmer · Questions?{" "}
                  <Link
                    href="/contact"
                    className="font-medium text-emerald-500/95 underline-offset-2 transition hover:text-emerald-400 hover:underline"
                  >
                    Just ask
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </article>

        <ScheduleBlock
          eyebrow="May 12–14, 2026 · Chicago, IL"
          title="Boom Boom Cup (Airline Invitational)"
        >
          <p className="text-zinc-300">
            Fifth Third Arena — Blackhawks Practice Facility
          </p>
          <p>
            Expected airline clubs include United, Delta, American, and Air
            Canada. Sun Country may add a few skaters to our roster if they are
            short of a full team.
          </p>
          <p>
            Organized by Capt. Allan Neher · Questions?{" "}
            <Link
              href="/contact"
              className="font-medium text-emerald-500/95 underline-offset-2 transition hover:text-emerald-400 hover:underline"
            >
              Just ask
            </Link>
            .
          </p>
        </ScheduleBlock>

        <ScheduleBlock
          eyebrow="October 13–16, 2026 · Nashville, TN"
          title="Boom Boom Cup (Airline Invitational)"
        >
          <p className="text-zinc-300">Centennial Sportsplex</p>
          <p>
            Airline invitational weekend in Nashville—details and registration
            will be shared as the event gets closer.
          </p>
          <p>
            Organized by Capt. Allan Neher · Questions?{" "}
            <Link
              href="/contact"
              className="font-medium text-emerald-500/95 underline-offset-2 transition hover:text-emerald-400 hover:underline"
            >
              Just ask
            </Link>
            .
          </p>
        </ScheduleBlock>

        <ScheduleBlock
          eyebrow="November 11–15, 2026 · Prague"
          title="International Tournament · Czechia"
        >
          <p>
            High-skill tournament with clubs from Switzerland, Finland, Air
            Canada, WestJet, and others. Expect a fast, competitive pace.
          </p>
          <p>
            Organized by Capt. Allan Neher · Questions?{" "}
            <Link
              href="/contact"
              className="font-medium text-emerald-500/95 underline-offset-2 transition hover:text-emerald-400 hover:underline"
            >
              Just ask
            </Link>
            .
          </p>
        </ScheduleBlock>
      </div>
    </div>
  );
}
