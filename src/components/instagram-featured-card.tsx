import Link from "next/link";
import {
  INSTAGRAM_FEATURE_CAPTION,
  INSTAGRAM_FEATURE_POST_URL,
} from "@/lib/instagram-feature";

const btnPrimary =
  "inline-flex flex-1 items-center justify-center rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-950/30 transition hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 sm:flex-none sm:px-5";

const btnSecondary =
  "inline-flex flex-1 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800/60 px-4 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-emerald-500/40 hover:bg-zinc-800 hover:text-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 sm:flex-none sm:px-5";

export function InstagramFeaturedCard() {
  return (
    <article className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 shadow-lg shadow-black/20 transition duration-200 hover:border-emerald-500/30 hover:shadow-emerald-950/10 md:flex md:min-h-[220px]">
      <div className="relative flex h-44 shrink-0 items-center justify-center bg-gradient-to-br from-fuchsia-950/50 via-purple-950/40 to-zinc-900 md:h-auto md:w-[42%] md:max-w-md">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(236,72,153,0.35), transparent 50%), radial-gradient(circle at 70% 80%, rgba(168,85,247,0.25), transparent 45%)",
          }}
        />
        <span className="relative text-xs font-bold uppercase tracking-widest text-pink-300/90">
          Instagram
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-500/85">
          Featured · Social
        </p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-100">
          Latest from Instagram
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
          {INSTAGRAM_FEATURE_CAPTION}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
    </article>
  );
}
