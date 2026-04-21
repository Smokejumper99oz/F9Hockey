export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950/80">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-zinc-500">
          © 2023–2026 F9 Hockey Club
          <span className="text-zinc-600"> · </span>
          All rights reserved
          <span className="text-zinc-600"> · </span>
          Website developed by{" "}
          <a
            href="https://www.marvellagroup.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-500/90 underline-offset-2 transition hover:text-emerald-400 hover:underline"
          >
            Marvella Group LLC
          </a>
        </p>
      </div>
    </footer>
  );
}
