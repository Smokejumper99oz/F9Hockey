import Link from "next/link";
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
    <div className="flex flex-col">
      <section className="relative overflow-hidden border-b border-zinc-800/80">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-950/30 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-500/90">
            {siteConfig.siteName}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
            {siteConfig.fullName}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Adult hockey built around camaraderie, competition, and showing up
            for each other—on and off the ice.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/hub"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-950/40 transition hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              Open Team Hub
            </Link>
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900/60 px-6 py-3.5 text-base font-semibold text-zinc-200 transition hover:border-zinc-600 hover:bg-zinc-800/80"
            >
              View schedule
            </Link>
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
  );
}
