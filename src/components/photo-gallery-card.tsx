import Link from "next/link";
import type { PastPhotoEvent } from "@/lib/photos-data";
import {
  getPastPhotoEventFullTitle,
  getPastPhotoEventGalleryPhotoCount,
  getPhotoEventDateDisplay,
} from "@/lib/photos-data";

type PhotoGalleryCardProps = {
  item: PastPhotoEvent;
};

const POND_2024_GALLERY_CARD_ID = "gal-pond-hockey-2024";

export function PhotoGalleryCard({ item }: PhotoGalleryCardProps) {
  const cardObjectPosition =
    item.coverCardObjectPosition ?? item.coverObjectPosition;
  const cardImageUrl = item.useCardCoverPlaceholder
    ? null
    : (item.gridCardImageUrl ?? item.coverImageUrl);
  const pond2024NaturalHeader =
    !item.omitCardCover &&
    item.id === POND_2024_GALLERY_CARD_ID &&
    cardImageUrl;
  const photoCount = getPastPhotoEventGalleryPhotoCount(item);
  const photoCountLabel = `${photoCount} ${photoCount === 1 ? "photo" : "photos"}`;

  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 shadow-lg shadow-black/20 transition-colors duration-150 hover:border-emerald-500/50">
      {!item.omitCardCover ? (
        pond2024NaturalHeader ? (
          <div className="relative w-full">
            {/* eslint-disable-next-line @next/next/no-img-element -- Supabase Storage public URLs; use next/image + remotePatterns when wired */}
            <img
              src={cardImageUrl!}
              alt={getPastPhotoEventFullTitle(item)}
              className="w-full h-auto rounded-t-xl"
            />
            <span className="absolute bottom-3 left-3 rounded-md border border-zinc-700/80 bg-zinc-950/85 px-2 py-1 text-xs font-semibold tabular-nums text-zinc-200 backdrop-blur-sm">
              {photoCountLabel}
            </span>
          </div>
        ) : (
          <div
            className={
              cardImageUrl
                ? "relative h-44 w-full shrink-0 sm:h-48"
                : "relative h-44 w-full shrink-0 bg-zinc-800/80 sm:h-48"
            }
          >
            {cardImageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element -- Supabase Storage public URLs; use next/image + remotePatterns when wired
              <img
                src={cardImageUrl}
                alt={getPastPhotoEventFullTitle(item)}
                className="block h-full w-full object-cover"
                style={
                  cardObjectPosition
                    ? { objectPosition: cardObjectPosition }
                    : undefined
                }
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
              {photoCountLabel}
            </span>
          </div>
        )
      ) : null}

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h2 className="text-lg font-semibold leading-snug tracking-tight text-zinc-100">
          <span className="block">{item.title}</span>
          {item.subtitle ? (
            <span className="mt-0.5 block text-base font-medium text-zinc-400">
              {item.subtitle}
            </span>
          ) : null}
        </h2>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-emerald-500/85">
          {item.eventType}
        </p>

        <p className="mt-3 text-sm font-medium text-zinc-300">
          {getPhotoEventDateDisplay(item)}
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

        {item.slug ? (
          <Link
            href={`/photos/${item.slug}`}
            className="mt-5 flex w-full items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800/60 py-2.5 text-sm font-semibold text-zinc-200 transition-colors duration-150 hover:border-emerald-500/50 hover:text-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
          >
            View Gallery
          </Link>
        ) : (
          <button
            type="button"
            disabled
            className="mt-5 w-full cursor-not-allowed rounded-lg border border-zinc-800 bg-zinc-900/50 py-2.5 text-sm font-semibold text-zinc-500"
          >
            View Gallery
          </button>
        )}
      </div>
    </article>
  );
}
