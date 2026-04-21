import type { RegistrationStatus, TeamEvent } from "@/lib/events-data";
import { formatEventWhen, formatFeeUsd } from "@/lib/events-data";

const statusStyles: Record<
  RegistrationStatus,
  { label: string; className: string }
> = {
  Open: {
    label: "Open",
    className:
      "border-emerald-500/40 bg-emerald-950/50 text-emerald-400 ring-1 ring-emerald-500/20",
  },
  "Coming Soon": {
    label: "Coming soon",
    className:
      "border-amber-500/40 bg-amber-950/40 text-amber-300 ring-1 ring-amber-500/20",
  },
  Closed: {
    label: "Closed",
    className:
      "border-zinc-600 bg-zinc-800/80 text-zinc-400 ring-1 ring-zinc-700/50",
  },
};

type EventCardProps = {
  event: TeamEvent;
};

export function EventCard({ event }: EventCardProps) {
  const badge = statusStyles[event.registrationStatus];

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 shadow-lg shadow-black/20 transition-colors duration-150 hover:border-emerald-500/50">
      <div className="relative h-36 w-full shrink-0 bg-zinc-800/80 sm:h-40">
        {event.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element -- Supabase URLs later; add next/image + remotePatterns when ready
          <img
            src={event.imageUrl}
            alt=""
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-800 via-zinc-900 to-emerald-950/40 px-4">
            <span className="text-center text-sm font-bold uppercase tracking-widest text-emerald-500/75">
              {event.eventType}
            </span>
          </div>
        )}
        <span
          className={`absolute right-3 top-3 rounded-md border px-2.5 py-1 text-xs font-bold uppercase tracking-wide ${badge.className}`}
        >
          {badge.label}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h2 className="text-lg font-semibold leading-snug tracking-tight text-zinc-100">
            {event.title}
          </h2>
        </div>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-emerald-500/85">
          {event.eventType}
        </p>

        <p className="mt-3 text-sm font-medium text-zinc-300">
          {formatEventWhen(event.startDate, event.endDate)}
        </p>

        <dl className="mt-3 space-y-2 text-sm text-zinc-400">
          <div>
            <dt className="sr-only">Location</dt>
            <dd>{event.location}</dd>
          </div>
          <div>
            <dt className="sr-only">City and state</dt>
            <dd className="font-medium text-zinc-500">{event.cityState}</dd>
          </div>
          {event.feeAmount != null ? (
            <div className="flex items-baseline justify-between gap-2 border-t border-zinc-800/80 pt-2">
              <dt className="text-zinc-500">Fee</dt>
              <dd className="font-mono text-zinc-200">
                {formatFeeUsd(event.feeAmount)}
              </dd>
            </div>
          ) : null}
        </dl>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-500">
          {event.shortDescription}
        </p>

        <button
          type="button"
          className="mt-5 w-full rounded-lg border border-zinc-700 bg-zinc-800/60 py-2.5 text-sm font-semibold text-zinc-200 transition-colors duration-150 hover:border-emerald-500/50 hover:text-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
        >
          View Details
        </button>
      </div>
    </article>
  );
}
