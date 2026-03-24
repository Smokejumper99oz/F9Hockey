import type { Metadata } from "next";
import { InstagramFeaturedCard } from "@/components/instagram-featured-card";
import { PhotoGalleryCard } from "@/components/photo-gallery-card";
import { pastPhotoEvents } from "@/lib/photos-data";

export const metadata: Metadata = {
  title: "Past Events & Photos | F9 Hockey",
  description:
    "Frontier Airlines Hockey Club photo galleries and past event highlights",
};

export default function PhotosPage() {
  const sorted = [...pastPhotoEvents].sort(
    (a, b) => new Date(b.eventDate).getTime() - new Date(a.eventDate).getTime(),
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
          Past events &amp; photos
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-400">
          Season highlights and galleries for{" "}
          <span className="text-zinc-300">Frontier Airlines Hockey Club</span>.
          Each card links to a future lightbox—covers will pull from team
          storage when we wire it up.
        </p>
      </header>

      <div className="mt-12">
        <InstagramFeaturedCard />
      </div>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {sorted.map((item) => (
          <li key={item.id}>
            <PhotoGalleryCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
