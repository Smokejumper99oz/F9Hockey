import { siteConfig } from "@/lib/site-config";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
        Contact
      </h1>
      <p className="mt-4 max-w-xl text-zinc-400">
        Reach out to the {siteConfig.siteName} captain or managers. Contact
        form and details will be added here soon.
      </p>
      <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
        <p className="text-sm text-zinc-500">
          For now, use your team chat or email thread. This page will list the
          official contact path for the season.
        </p>
      </div>
    </div>
  );
}
