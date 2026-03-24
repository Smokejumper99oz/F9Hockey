import Link from "next/link";
import {
  INSTAGRAM_FEATURE_CAPTION,
  INSTAGRAM_FEATURE_POST_URL,
} from "@/lib/instagram-feature";

const btnPrimary =
  "inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-950/40 transition hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400";

const btnSecondary =
  "inline-flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900/60 px-6 py-3.5 text-base font-semibold text-zinc-200 transition hover:border-zinc-600 hover:bg-zinc-800/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500";

export function InstagramLatestSection() {
  return (
    <section className="border-t border-zinc-800/80 bg-zinc-900/25">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-lg font-semibold text-zinc-100">
          Latest from Instagram
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-300">
          {INSTAGRAM_FEATURE_CAPTION}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={INSTAGRAM_FEATURE_POST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={btnPrimary}
          >
            View on Instagram
          </a>
          <Link href="/contact" className={btnSecondary}>
            Join F9 Hockey
          </Link>
        </div>
      </div>
    </section>
  );
}
