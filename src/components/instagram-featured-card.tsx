import { FaInstagram } from "react-icons/fa";
import { INSTAGRAM_FEATURE_POST_URL } from "@/lib/instagram-feature";
import { siteConfig } from "@/lib/site-config";

const card =
  "flex items-center justify-between gap-3 rounded-xl border border-amber-500/40 bg-gradient-to-br from-amber-950/55 via-zinc-900/50 to-zinc-950 px-4 py-3 shadow-lg shadow-amber-950/25 ring-1 ring-amber-500/20 transition hover:border-amber-400/50 hover:ring-amber-400/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500/80 sm:gap-4 sm:px-5 sm:py-3.5";

export function InstagramFeaturedCard() {
  return (
    <a
      href={INSTAGRAM_FEATURE_POST_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${card} group`}
    >
      <div className="flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3">
        <FaInstagram
          className="h-5 w-5 shrink-0 text-pink-500"
          aria-hidden
        />

        <div className="min-w-0">
          <p className="truncate text-sm font-semibold leading-tight text-zinc-100">
            Follow {siteConfig.siteName} on Instagram
          </p>
          <p className="mt-0.5 truncate text-xs leading-snug text-zinc-400">
            Game-day moments, highlights, and team updates.
          </p>
        </div>
      </div>

      <span className="shrink-0 text-xs font-medium text-amber-400/95 transition group-hover:text-amber-300 sm:text-sm">
        View →
      </span>
    </a>
  );
}
