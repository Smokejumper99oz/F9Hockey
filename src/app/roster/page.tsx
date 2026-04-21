import type { Metadata } from "next";
import Link from "next/link";
import { RosterPlayerCard } from "@/components/roster-player-card";
import { rosterPlayers } from "@/lib/roster-data";

export const metadata: Metadata = {
  title: "Frontier Airlines Team Roster | F9 Hockey",
  description: "Frontier Airlines Hockey Club roster",
};

export default function RosterPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
          Frontier Airlines Team Roster
        </h1>
        <div className="mt-4 space-y-4 text-lg leading-relaxed text-zinc-400">
          <p>
            From the Flight Deck to the ice — Meet the crew behind{" "}
            <span className="text-zinc-300">F9 Hockey</span>.
          </p>
          <p>
            Airline pilots, dispatchers, and teammates who share a passion for
            hockey and the camaraderie that comes with it.
          </p>
          <p>
            From bases across the Frontier Airlines network, we come together to
            compete, connect, and enjoy the game.
          </p>
        </div>
      </header>

      <Link
        href="/contact"
        className="mt-10 block rounded-xl border border-amber-500/40 bg-gradient-to-br from-amber-950/55 via-zinc-900/50 to-zinc-950 px-5 py-4 shadow-lg shadow-amber-950/25 ring-1 ring-amber-500/20 transition hover:border-amber-400/50 hover:ring-amber-400/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500/80 sm:px-6 sm:py-4"
        aria-label="Join the Team — Frontier Airlines employees interested in skating with the crew? Contact Capt. Allan Neher. Opens contact page."
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-400/95">
          JOIN THE TEAM
        </p>
        <p className="mt-2 text-sm leading-snug text-zinc-300 sm:text-base sm:leading-snug">
          Frontier Airlines employees—interested in skating with the crew?
          <span
            className="mx-2 inline-block text-amber-400/80 select-none"
            aria-hidden
          >
            ·
          </span>
          Contact{" "}
          <span className="font-medium text-amber-200/90">Capt. Allan Neher</span>
          .
        </p>
      </Link>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {rosterPlayers.map((player) => (
          <li key={player.id}>
            <RosterPlayerCard player={player} />
          </li>
        ))}
      </ul>
    </div>
  );
}
