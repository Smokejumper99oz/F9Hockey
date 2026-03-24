import type { RosterPlayer } from "@/lib/roster-data";

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

type RosterPlayerCardProps = {
  player: RosterPlayer;
};

export function RosterPlayerCard({ player }: RosterPlayerCardProps) {
  const isCaptain = player.roleType === "Captain";

  return (
    <article
      className={`flex flex-col overflow-hidden rounded-xl border bg-zinc-900/60 shadow-lg shadow-black/20 transition duration-200 hover:-translate-y-0.5 hover:border-emerald-500/35 hover:bg-zinc-800/50 hover:shadow-emerald-950/10 ${
        isCaptain
          ? "border-emerald-500/45 ring-1 ring-emerald-500/25"
          : "border-zinc-800"
      }`}
    >
      <div className="relative aspect-[4/5] w-full bg-zinc-800/80">
        {player.photoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element -- Supabase public URLs; swap to next/image + remotePatterns when ready
          <img
            src={player.photoUrl}
            alt=""
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-zinc-800 to-zinc-900">
            <span className="text-3xl font-bold tracking-tight text-zinc-500 sm:text-4xl">
              {initials(player.name)}
            </span>
            <span className="mt-2 font-mono text-sm text-zinc-600">
              #{player.jerseyNumber}
            </span>
          </div>
        )}
        {isCaptain ? (
          <span className="absolute left-3 top-3 rounded-md bg-emerald-600/90 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-white shadow-md">
            Captain
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h2 className="text-lg font-semibold tracking-tight text-zinc-100">
          {player.name}
        </h2>
        <p className="mt-1 text-sm font-medium text-emerald-500/90">
          {player.roleType}
        </p>
        <dl className="mt-3 space-y-2 text-sm text-zinc-400">
          <div className="flex justify-between gap-2">
            <dt className="text-zinc-500">Base</dt>
            <dd className="font-mono text-zinc-300">{player.crewBase}</dd>
          </div>
          <div className="flex justify-between gap-2">
            <dt className="text-zinc-500">Jersey</dt>
            <dd className="font-mono text-zinc-300">#{player.jerseyNumber}</dd>
          </div>
          <div className="flex justify-between gap-2">
            <dt className="text-zinc-500">Position</dt>
            <dd className="text-right text-zinc-300">{player.hockeyPosition}</dd>
          </div>
        </dl>
        {player.bioShort ? (
          <p className="mt-3 border-t border-zinc-800/80 pt-3 text-sm leading-relaxed text-zinc-500">
            {player.bioShort}
          </p>
        ) : null}
      </div>
    </article>
  );
}
