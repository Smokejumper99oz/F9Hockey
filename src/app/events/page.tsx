import type { Metadata } from "next";
import { EventCard } from "@/components/event-card";
import { upcomingEvents } from "@/lib/events-data";

export const metadata: Metadata = {
  title: "Upcoming Events | F9 Hockey",
  description: "Frontier Airlines Hockey Club upcoming games, practices, and team nights",
};

export default function EventsPage() {
  const sorted = [...upcomingEvents].sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
          Upcoming events
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-400">
          Rinks, ice times, and team nights for{" "}
          <span className="text-zinc-300">Frontier Airlines Hockey Club</span>.
          Registration status is shown on each card so the room knows what is
          open, coming up, or full.
        </p>
      </header>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {sorted.map((event) => (
          <li key={event.id}>
            <EventCard event={event} />
          </li>
        ))}
      </ul>
    </div>
  );
}
