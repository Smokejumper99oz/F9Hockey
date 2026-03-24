import Image from "next/image";
import Link from "next/link";
import { HomeAtmosphere } from "@/components/home-atmosphere";
import { InstagramLatestSection } from "@/components/instagram-latest-section";
import { siteConfig } from "@/lib/site-config";

const actionCards = [
  {
    title: "Team hub",
    body: "Registration, fees, schedule shortcuts, and more in one place.",
    href: "/hub",
  },
  {
    title: "Schedule",
    body: "Ice times and games—full calendar coming soon.",
    href: "/schedule",
  },
  {
    title: "Roster",
    body: "Meet the squad—player list coming soon.",
    href: "/roster",
  },
  {
    title: "Contact",
    body: "Questions for the captain or managers.",
    href: "/contact",
  },
] as const;

export default function HomePage() {
  return (
    <div className="relative isolate overflow-x-hidden">
      <HomeAtmosphere />
      <div className="relative z-10 flex flex-col">
      <section className="relative w-full overflow-hidden border-b border-zinc-800/80">
        <div className="relative h-[65vh] min-h-[16rem] w-full max-h-[70vh]">
          <Image
            src="/images/team-hero.png"
            alt={`${siteConfig.fullName} team photo on the ice`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_85%_at_50%_45%,transparent_55%,rgba(0,0,0,0.14)_100%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-t from-black/25 to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.06]"
            aria-hidden
          />
        </div>
      </section>

      <section className="border-b border-zinc-800/80">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500/90">
              {siteConfig.siteName}
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-zinc-50 sm:text-5xl sm:leading-[1.06] lg:text-6xl">
              {siteConfig.fullName}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              Adult hockey built around camaraderie, competition, and showing up
              for each other—on and off the ice.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/hub"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-950/40 ring-1 ring-emerald-400/25 transition hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
              >
                Open Team Hub
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

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-lg font-semibold text-zinc-100">Quick links</h2>
        <p className="mt-1 text-sm text-zinc-500">
          Jump to what you need—more content is on the way.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {actionCards.map((card) => (
            <li key={card.href}>
              <Link
                href={card.href}
                className="flex h-full flex-col rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition hover:-translate-y-0.5 hover:border-emerald-500/35 hover:bg-zinc-800/50 hover:shadow-lg hover:shadow-black/25"
              >
                <span className="text-base font-semibold text-zinc-100">
                  {card.title}
                </span>
                <span className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                  {card.body}
                </span>
                <span className="mt-4 text-sm font-medium text-emerald-500/90">
                  Go →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <InstagramLatestSection />

      <section className="border-t border-zinc-800/80 bg-zinc-900/20">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-zinc-100">About the team</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {siteConfig.fullName} is a community of players who love the game
            and the people beside them in the locker room. This site is the home
            for schedules, roster info, and team updates—starting here and growing
            as the season does.
          </p>
        </div>
      </section>
      </div>
    </div>
  );
}
