import type { Metadata } from "next";
import { PageIceBackdrop } from "@/components/page-ice-backdrop";

export const metadata: Metadata = {
  title: "Upcoming events | F9 Hockey",
  description:
    "Tournaments and key dates for Frontier Airlines Hockey Club.",
};

export default function FeesPage() {
  return (
    <div className="relative min-h-[calc(100vh-8rem)] overflow-hidden bg-zinc-950">
      <PageIceBackdrop />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <h1 className="mb-2 text-3xl font-semibold text-zinc-50">
            Upcoming Events
          </h1>
          <p className="text-zinc-400">
            Tournaments and key dates for the team.
          </p>
        </div>

        <div>
          <div className="grid gap-4">
            <div className="flex items-start justify-between gap-4 rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
              <div className="min-w-0">
                <p className="font-medium text-zinc-50">
                  Boom Boom Cup (Airline Invitational)
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  October 13–16, 2026 · Nashville, TN
                </p>
              </div>
              <span className="shrink-0 text-xs text-zinc-500">Coming Soon</span>
            </div>

            <div className="flex items-start justify-between gap-4 rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
              <div className="min-w-0">
                <p className="font-medium text-zinc-50">
                  International Tournament · Czechia
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  November 11–15, 2026 · Prague
                </p>
              </div>
              <span className="shrink-0 text-xs text-zinc-500">Coming Soon</span>
            </div>

            <div className="flex items-start justify-between gap-4 rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
              <div className="min-w-0">
                <p className="font-medium text-zinc-50">
                  2027 U.S. POND HOCKEY CHAMPIONSHIPS, Lake Nokomis, Minneapolis, MN
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Date: JANUARY 29–31, 2027
                </p>
              </div>
              <span className="shrink-0 text-xs text-zinc-500">Coming Soon</span>
            </div>

            <div className="flex items-start justify-between gap-4 rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
              <div className="min-w-0">
                <p className="font-medium text-zinc-50">
                  4th Annual Clearwater Skate, Clearwater, FL
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Date: TBA - March 2027
                </p>
              </div>
              <span className="shrink-0 text-xs text-zinc-500">Coming Soon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
