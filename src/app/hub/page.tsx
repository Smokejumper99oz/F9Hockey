import { HubLinkCard } from "@/components/hub-link-card";
import { siteConfig } from "@/lib/site-config";

const hubCards = [
  {
    title: "Upcoming Events",
    description:
      "Next games, practices, and team nights—so nobody misses a puck drop or a bus call.",
    href: "/events",
  },
  {
    title: "Schedule",
    description:
      "League sheet, ice times, and key dates for the whole season in one view.",
    href: "/schedule",
  },
  {
    title: "Pay Fees",
    description:
      "Team dues, jersey kit, and tournament splits—keep your account square with the bench.",
    href: "/fees",
  },
  {
    title: "Roster",
    description:
      "Skaters, positions, and numbers—know who you're dressing beside before you hit the room.",
    href: "/roster",
  },
  {
    title: "Past Events / Photos",
    description:
      "Wins, road trips, and locker-room shots—scroll the season after the final horn.",
    href: "/photos",
  },
  {
    title: "Contact",
    description:
      "Captains and managers for subs, absences, and anything that doesn't belong in the group chat.",
    href: "/contact",
  },
] as const;

export default function HubPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
          Team hub
        </h1>
        <p className="mt-3 text-zinc-400">
          {`Operations home for ${siteConfig.fullName}—what's next on the ice, who's on the sheet, and how to stay paid, informed, and in touch.`}
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
  );
}
