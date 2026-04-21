import type { Metadata } from "next";
import { PageIceBackdrop } from "@/components/page-ice-backdrop";

export const metadata: Metadata = {
  title: "Login | F9 Hockey",
  description:
    "Access the Locker Room for team updates, payments, and admin tools. Player and admin access coming soon.",
};

export default function LoginPage() {
  return (
    <div className="relative min-h-[calc(100vh-8rem)] overflow-hidden bg-zinc-950">
      <PageIceBackdrop />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto w-full max-w-xl lg:max-w-2xl">
          <header>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
              Login
            </h1>
            <div className="mt-4 space-y-3 text-lg leading-relaxed text-zinc-400">
              <p>
                Access the Locker Room for team updates, payments, and admin
                tools.
              </p>
              <p>Player and admin access coming soon.</p>
            </div>
          </header>

          <div className="mt-12 rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <button
                type="button"
                className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-sm font-medium text-zinc-100 transition hover:border-zinc-600 hover:bg-zinc-800"
              >
                Player Login
              </button>
              <button
                type="button"
                className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-sm font-medium text-zinc-100 transition hover:border-zinc-600 hover:bg-zinc-800"
              >
                Admin Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
