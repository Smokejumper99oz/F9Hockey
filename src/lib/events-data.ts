/**
 * Static upcoming events. Swap for Supabase rows later; map DB columns
 * (snake_case) to these fields in your fetch layer.
 */

export type EventType = "Tournament" | "Game" | "Practice" | "Team Night";

export type RegistrationStatus = "Open" | "Coming Soon" | "Closed";

export type TeamEvent = {
  id: string;
  title: string;
  eventType: EventType;
  /** ISO 8601 date-time string */
  startDate: string;
  /** ISO 8601 date-time string; omit for single instant / single day */
  endDate?: string;
  location: string;
  cityState: string;
  /** USD; omit when there is no fee */
  feeAmount?: number;
  registrationStatus: RegistrationStatus;
  shortDescription: string;
  /** Public image URL; omit or null for placeholder art */
  imageUrl?: string | null;
};

export const upcomingEvents: TeamEvent[] = [
  {
    id: "evt-01",
    title: "League Night vs. Mile High Brewers",
    eventType: "Game",
    startDate: "2025-04-12T20:15:00.000-06:00",
    endDate: "2025-04-12T22:00:00.000-06:00",
    location: "Family Sports Center — Rink 2",
    cityState: "Centennial, CO",
    registrationStatus: "Open",
    shortDescription:
      "Home sheet. White jerseys, arrive 45 minutes early for warm-ups and line combos.",
    imageUrl: null,
  },
  {
    id: "evt-02",
    title: "Thursday Skills & Conditioning",
    eventType: "Practice",
    startDate: "2025-04-17T06:15:00.000-06:00",
    endDate: "2025-04-17T07:15:00.000-06:00",
    location: "South Suburban Sports Complex",
    cityState: "Littleton, CO",
    registrationStatus: "Open",
    shortDescription:
      "Optional skate before work—edges, shooting stations, and small-area games.",
    imageUrl: null,
  },
  {
    id: "evt-03",
    title: "RMHL Spring Invitational",
    eventType: "Tournament",
    startDate: "2025-05-03T08:00:00.000-06:00",
    endDate: "2025-05-04T18:00:00.000-06:00",
    location: "Multiple venues (schedule TBD)",
    cityState: "Denver metro, CO",
    feeAmount: 185,
    registrationStatus: "Coming Soon",
    shortDescription:
      "Two-day weekend tournament. Hotel block and roster lock details will post with registration.",
    imageUrl: null,
  },
  {
    id: "evt-04",
    title: "Post-Game Team Night — Blake Street",
    eventType: "Team Night",
    startDate: "2025-04-12T22:30:00.000-06:00",
    location: "Blake Street Tavern",
    cityState: "Denver, CO",
    registrationStatus: "Open",
    shortDescription:
      "After the Brewers game—food, drinks, and stories. Families welcome in the side room.",
    imageUrl: null,
  },
  {
    id: "evt-05",
    title: "Away Game @ Boulder Yeti",
    eventType: "Game",
    startDate: "2025-04-19T19:00:00.000-06:00",
    endDate: "2025-04-19T20:45:00.000-06:00",
    location: "University of Colorado Rec Ice",
    cityState: "Boulder, CO",
    registrationStatus: "Open",
    shortDescription:
      "Dark jerseys. Carpool sheet is in the team chat—ice time is tight, don’t be late.",
    imageUrl: null,
  },
  {
    id: "evt-06",
    title: "Goalie & D Skate (By Invitation)",
    eventType: "Practice",
    startDate: "2025-04-22T19:30:00.000-06:00",
    endDate: "2025-04-22T20:45:00.000-06:00",
    location: "Big Bear Ice Arena",
    cityState: "Denver, CO",
    registrationStatus: "Closed",
    shortDescription:
      "Extra reps for netminders and blue-liners. Full roster—waitlist opens if spots free up.",
    imageUrl: null,
  },
  {
    id: "evt-07",
    title: "Season Wrap BBQ & Awards",
    eventType: "Team Night",
    startDate: "2025-06-14T17:00:00.000-06:00",
    endDate: "2025-06-14T21:00:00.000-06:00",
    location: "Curtis Park Pavilion",
    cityState: "Denver, CO",
    feeAmount: 25,
    registrationStatus: "Coming Soon",
    shortDescription:
      "Kids welcome. BYO chair; team covers mains—sign-up for sides coming with RSVP link.",
    imageUrl: null,
  },
];

const dateFmt = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  month: "short",
  day: "numeric",
  year: "numeric",
});

const timeFmt = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "2-digit",
  timeZoneName: "short",
});

export function formatEventWhen(startIso: string, endIso?: string): string {
  const start = new Date(startIso);
  const end = endIso ? new Date(endIso) : null;

  const datePart = dateFmt.format(start);
  const startTime = timeFmt.format(start);

  if (!end) {
    return `${datePart} · ${startTime}`;
  }

  const sameCalendarDay =
    start.getFullYear() === end.getFullYear() &&
    start.getMonth() === end.getMonth() &&
    start.getDate() === end.getDate();

  if (sameCalendarDay) {
    return `${datePart} · ${startTime} – ${timeFmt.format(end)}`;
  }

  return `${dateFmt.format(start)} ${startTime} → ${dateFmt.format(end)} ${timeFmt.format(end)}`;
}

export function formatFeeUsd(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}
