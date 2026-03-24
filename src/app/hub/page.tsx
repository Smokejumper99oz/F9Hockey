import { HubLinkCard } from "@/components/hub-link-card";
import { siteConfig } from "@/lib/site-config";

const hubCards = [
  {
    title: "Register",
    description: "Sign up for the season and reserve your spot.",
    href: "#",
  },
  {
    title: "Pay Fees",
    description: "Team dues and payments (link coming soon).",
    href: "#",
  },
  {
    title: "View Schedule",
    description: "Games, ice times, and key dates.",
    href: "/schedule",
  },
  {
    title: "Team Roster",
    description: "Players and positions.",
    href: "/roster",
  },
  {
    title: "Contact Captain",
    description: "Reach the team leadership.",
    href: "/contact",
  },
  {
    title: "Photos / Social",
    description: "Highlights and community links.",
    href: "#",
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
          Everything for {siteConfig.fullName}—quick access to registration,
          payments, schedule, roster, and contacts.
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
