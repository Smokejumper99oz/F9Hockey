import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950/80">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-zinc-500">
          {siteConfig.siteName} – {siteConfig.fullName}
        </p>
      </div>
    </footer>
  );
}
