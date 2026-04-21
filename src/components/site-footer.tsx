export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950/80 pb-[env(safe-area-inset-bottom,0px)]">
      <div className="mx-auto max-w-6xl py-8 ps-[max(1rem,env(safe-area-inset-left,0px))] pe-[max(1rem,env(safe-area-inset-right,0px))] sm:ps-[max(1.5rem,env(safe-area-inset-left,0px))] sm:pe-[max(1.5rem,env(safe-area-inset-right,0px))] lg:ps-[max(2rem,env(safe-area-inset-left,0px))] lg:pe-[max(2rem,env(safe-area-inset-right,0px))]">
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
