import type { RosterPlayer } from "@/lib/roster-data";
import { nhlTeamLogoLightUrl } from "@/lib/nhl-team-logos";

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

type RosterPlayerCardProps = {
  player: RosterPlayer;
};

function jerseyLabel(jerseyNumber: number | null) {
  if (jerseyNumber == null) return "—";
  return `#${jerseyNumber}`;
}

export function RosterPlayerCard({ player }: RosterPlayerCardProps) {
  const isTeamCaptain = player.isTeamCaptain === true;

  return (
    <article
      className={`flex flex-col overflow-hidden rounded-xl border bg-zinc-900/60 shadow-lg shadow-black/20 transition-colors duration-150 hover:border-emerald-500/50 ${
        isTeamCaptain
          ? "border-emerald-500/45 ring-1 ring-emerald-500/25"
          : "border-zinc-800"
      }`}
    >
      {/* Fixed height so every card’s photo area matches regardless of source aspect ratio */}
      <div className="relative h-64 w-full shrink-0 overflow-hidden bg-zinc-800/80 sm:h-72">
        {player.photoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element -- Supabase public URLs; swap to next/image + remotePatterns when ready
          <img
            src={player.photoUrl}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover ${
              player.photoObjectPosition == null ? "object-top" : ""
            } ${player.photoZoom != null ? "origin-top" : ""}`}
            style={{
              ...(player.photoObjectPosition != null
                ? { objectPosition: player.photoObjectPosition }
                : {}),
              ...(player.photoZoom != null
                ? { transform: `scale(${player.photoZoom})` }
                : {}),
            }}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-zinc-800 to-zinc-900">
            <span className="text-3xl font-bold tracking-tight text-zinc-500 sm:text-4xl">
              {initials(player.name)}
            </span>
            <span className="mt-2 font-mono text-sm text-zinc-600">
              {jerseyLabel(player.jerseyNumber)}
            </span>
          </div>
        )}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-24 bg-gradient-to-t from-[#09090b] via-[#09090b]/70 to-transparent sm:h-28"
          aria-hidden
        />
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
          <h2 className="min-w-0 text-lg font-semibold tracking-tight text-zinc-100">
            {player.name}
          </h2>
          {isTeamCaptain ? (
            <span className="shrink-0 rounded-md bg-emerald-600/90 px-2 py-0.5 text-xs font-bold tracking-wide text-white shadow-sm">
              Team Captain
            </span>
          ) : null}
        </div>
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
            <dd className="font-mono text-zinc-300">
              {jerseyLabel(player.jerseyNumber)}
            </dd>
          </div>
          <div className="flex justify-between gap-2">
            <dt className="text-zinc-500">Position</dt>
            <dd className="text-right text-zinc-300">{player.hockeyPosition}</dd>
          </div>
        </dl>
        <div className="mt-3 border-t border-zinc-800/80 pt-3">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
            <span className="text-sm text-zinc-500">NHL Team:</span>
            {player.nhlTeam ? (
              <span className="flex items-center justify-end gap-2.5 text-sm text-zinc-300">
                {/* eslint-disable-next-line @next/next/no-img-element -- NHL league SVG; remote asset */}
                <img
                  src={nhlTeamLogoLightUrl(player.nhlTeam.logoAbbr)}
                  alt=""
                  className="h-8 w-8 shrink-0 object-contain"
                  width={32}
                  height={32}
                />
                <span className="text-right leading-snug">
                  {player.nhlTeam.name}
                </span>
              </span>
            ) : (
              <span className="text-sm text-zinc-600 sm:text-right">—</span>
            )}
          </div>
        </div>
        {player.bioShort ? (
          <p className="mt-3 border-t border-zinc-800/80 pt-3 text-sm leading-relaxed text-zinc-500">
            {player.bioShort}
          </p>
        ) : null}
      </div>
    </article>
  );
}
