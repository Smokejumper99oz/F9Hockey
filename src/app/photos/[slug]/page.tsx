import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PhotoGalleryLightboxGrid } from "@/components/photo-gallery-lightbox-grid";
import {
  getPastPhotoEventBySlug,
  getPastPhotoEventFullTitle,
  getPastPhotoEventSlugs,
  getPhotoEventDateDisplay,
} from "@/lib/photos-data";
import { siteConfig } from "@/lib/site-config";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getPastPhotoEventSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const event = getPastPhotoEventBySlug(params.slug);
  if (!event) {
    return { title: "Gallery | F9 Hockey" };
  }
  return {
    title: `${getPastPhotoEventFullTitle(event)} | Photos | ${siteConfig.siteName}`,
    description: event.shortDescription,
  };
}

export default function PhotoGalleryDetailPage({ params }: Props) {
  const event = getPastPhotoEventBySlug(params.slug);
  if (!event?.slug) {
    notFound();
  }

  const bodyHeading = event.bodyHeading;
  const paragraphs = event.bodyParagraphs ?? [];
  const extraImages = event.galleryImageUrls ?? [];

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <nav className="text-sm">
        <Link
          href="/photos"
          className="font-medium text-emerald-500/95 transition hover:text-emerald-400"
        >
          ← Past Events &amp; Photos
        </Link>
      </nav>

      <header className="mt-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-500/85">
          {event.eventType}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
          <span className="block">{event.title}</span>
          {event.subtitle ? (
            <span className="mt-1 block text-2xl font-semibold text-zinc-400 sm:text-3xl">
              {event.subtitle}
            </span>
          ) : null}
        </h1>
        <p className="mt-3 text-sm font-medium text-zinc-300">
          {getPhotoEventDateDisplay(event)}
        </p>
        <dl className="mt-4 space-y-1 text-sm text-zinc-400">
          <div>
            <dt className="sr-only">Location</dt>
            <dd>{event.location}</dd>
          </div>
          <div>
            <dt className="sr-only">City and state</dt>
            <dd className="font-medium text-zinc-500">{event.cityState}</dd>
          </div>
        </dl>
      </header>

      {event.omitGalleryHero ? (
        <div
          className="mt-10 flex min-h-[12rem] w-full flex-col items-center justify-center rounded-xl bg-gradient-to-br from-zinc-800 via-zinc-900 to-emerald-950/50 px-4 sm:min-h-[14rem]"
          role="img"
          aria-label="Gallery cover placeholder"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-500/75">
            {event.eventType}
          </span>
          <span className="mt-2 text-center text-[11px] font-medium uppercase tracking-wide text-zinc-500">
            Cover coming from storage
          </span>
        </div>
      ) : event.coverImageUrl ? (
        <Image
          src={event.coverImageUrl}
          alt={getPastPhotoEventFullTitle(event)}
          width={1920}
          height={1280}
          className="mt-10 w-full h-auto rounded-xl"
          sizes="(min-width: 1024px) 896px, 100vw"
          priority
        />
      ) : null}

      {bodyHeading ? (
        <h2 className="mt-10 text-xl font-semibold tracking-tight text-zinc-100 sm:text-2xl">
          {bodyHeading}
        </h2>
      ) : null}

      {paragraphs.length > 0 ? (
        <div
          className={`space-y-4 text-base leading-relaxed text-zinc-400 ${bodyHeading ? "mt-6" : "mt-10"}`}
        >
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      ) : !bodyHeading ? (
        <p className="mt-10 text-zinc-500">
          Write-up coming soon—check back for the full story.
        </p>
      ) : null}

      <section className="mt-12" aria-labelledby="gallery-heading">
        <h2
          id="gallery-heading"
          className="text-lg font-semibold tracking-tight text-zinc-100"
        >
          Photos
        </h2>
        {extraImages.length > 0 ? (
          <PhotoGalleryLightboxGrid images={extraImages} />
        ) : (
          <p className="mt-4 text-sm text-zinc-500">
            More images will appear here as they&apos;re added—drop paths into{" "}
            <code className="rounded bg-zinc-900 px-1.5 py-0.5 text-xs text-zinc-400">
              galleryImageUrls
            </code>{" "}
            in{" "}
            <code className="rounded bg-zinc-900 px-1.5 py-0.5 text-xs text-zinc-400">
              photos-data.ts
            </code>{" "}
            for this event.
          </p>
        )}
      </section>
    </div>
  );
}
