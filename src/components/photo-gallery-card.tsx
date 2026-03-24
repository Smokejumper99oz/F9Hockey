import type { PastPhotoEvent } from "@/lib/photos-data";
import { formatPastEventDate } from "@/lib/photos-data";

type PhotoGalleryCardProps = {
  item: PastPhotoEvent;
};

export function PhotoGalleryCard({ item }: PhotoGalleryCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 shadow-lg shadow-black/20 transition duration-200 hover:-translate-y-0.5 hover:border-emerald-500/35 hover:bg-zinc-800/50 hover:shadow-emerald-950/10">
      <div className="relative h-44 w-full shrink-0 bg-zinc-800/80 sm:h-48">
        {item.coverImageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element -- Supabase Storage public URLs; use next/image + remotePatterns when wired
          <img
            src={item.coverImageUrl}
            alt=""
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-zinc-800 via-zinc-900 to-emerald-950/50 px-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-500/75">
              {item.eventType}
            </span>
            <span className="mt-2 text-center text-[11px] font-medium uppercase tracking-wide text-zinc-500">
              Cover coming from storage
            </span>
          </div>
        )}
        <span className="absolute bottom-3 left-3 rounded-md border border-zinc-700/80 bg-zinc-950/85 px-2 py-1 text-xs font-semibold tabular-nums text-zinc-200 backdrop-blur-sm">
          {item.galleryCount} photos
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h2 className="text-lg font-semibold leading-snug tracking-tight text-zinc-100">
          {item.title}
        </h2>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-emerald-500/85">
          {item.eventType}
        </p>

        <p className="mt-3 text-sm font-medium text-zinc-300">
          {formatPastEventDate(item.eventDate)}
        </p>

        <dl className="mt-3 space-y-1.5 text-sm text-zinc-400">
          <div>
            <dt className="sr-only">Location</dt>
            <dd>{item.location}</dd>
          </div>
          <div>
            <dt className="sr-only">City and state</dt>
            <dd className="font-medium text-zinc-500">{item.cityState}</dd>
          </div>
        </dl>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-500">
          {item.shortDescription}
        </p>

        <button
          type="button"
          className="mt-5 w-full rounded-lg border border-zinc-700 bg-zinc-800/60 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-emerald-500/40 hover:bg-zinc-800 hover:text-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
        >
          View Gallery
        </button>
      </div>
    </article>
  );
}
