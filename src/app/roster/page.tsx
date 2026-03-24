import type { Metadata } from "next";
import { RosterPlayerCard } from "@/components/roster-player-card";
import { rosterPlayers } from "@/lib/roster-data";

export const metadata: Metadata = {
  title: "Roster | F9 Hockey",
  description: "Frontier Airlines Hockey Club roster",
};

export default function RosterPage() {
  const ordered = [...rosterPlayers].sort((a, b) => {
    const rank = (r: string) =>
      r === "Captain" ? 0 : r === "First Officer" ? 1 : 2;
    const byRole = rank(a.roleType) - rank(b.roleType);
    if (byRole !== 0) return byRole;
    return a.jerseyNumber - b.jerseyNumber;
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
          Team roster
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-400">
          The skaters behind{" "}
          <span className="text-zinc-300">Frontier Airlines Hockey Club</span>
          —crew bases, jersey numbers, and positions for game night and the road
          ahead.
        </p>
      </header>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {ordered.map((player) => (
          <li key={player.id}>
            <RosterPlayerCard player={player} />
          </li>
        ))}
      </ul>
    </div>
  );
}
