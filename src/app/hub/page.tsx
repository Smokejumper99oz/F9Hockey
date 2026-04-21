import type { Metadata } from "next";
import { HubLinkCard } from "@/components/hub-link-card";
import { PageIceBackdrop } from "@/components/page-ice-backdrop";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "The Bench | F9 Hockey",
  description: "Frontier Airlines Hockey Club team operations",
};

const hubCards = [
  {
    title: "Past Events & Photos",
    description:
      "Wins, road trips, and locker-room shots—scroll the season after the final horn.",
    href: "/photos",
  },
  {
    title: "Pay Fees",
    description:
      "Tournament & Event Payments, Waitlist and more - Keep your account squared with The Bench.",
    href: "/fees",
  },
  {
    title: "Team Store",
    description:
      "Custom gear by Verbero™ — Jerseys, Socks, Bags and more",
    href: "https://www.verbero.com/pages/team-store/frontier-airlines-team-store",
  },
] as const;

export default function HubPage() {
  return (
    <div className="relative min-h-[calc(100vh-8rem)] overflow-hidden bg-zinc-950">
      <PageIceBackdrop />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
            The Bench
          </h1>
          <p className="mt-3 text-zinc-400">
            The Bench is the operations home for {siteConfig.siteName} — Past
            Events, Tournament Payments, and The Team Store. All in one place.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hubCards.map((card) => (
            <li key={card.title}>
              <HubLinkCard
                title={card.title}
                description={card.description}
                href={card.href}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
