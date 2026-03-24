/**
 * Static past events / galleries. Replace with Supabase rows + Storage public URLs
 * for `coverImageUrl`; map snake_case columns in your API layer.
 */

export type PastEventType = "Tournament" | "Game" | "Practice" | "Team Night";

export type PastPhotoEvent = {
  id: string;
  title: string;
  eventType: PastEventType;
  /** ISO 8601 date-time or date string */
  eventDate: string;
  location: string;
  cityState: string;
  /** Supabase Storage public URL, or null for placeholder cover */
  coverImageUrl: string | null;
  /** Number of images in the gallery (future lightbox) */
  galleryCount: number;
  shortDescription: string;
};

export const pastPhotoEvents: PastPhotoEvent[] = [
  {
    id: "gal-01",
    title: "Winter Classic vs. Flatirons FC",
    eventType: "Game",
    eventDate: "2025-02-08T19:00:00.000-07:00",
    location: "Outdoor rink — Stanley Marketplace",
    cityState: "Aurora, CO",
    coverImageUrl: null,
    galleryCount: 24,
    shortDescription:
      "Cold air, dark jerseys, and a shootout finish—full bench shots and ice-level set.",
  },
  {
    id: "gal-02",
    title: "RMHL Holiday Skate & Toy Drive",
    eventType: "Team Night",
    eventDate: "2024-12-14T18:30:00.000-07:00",
    location: "Big Bear Ice Arena",
    cityState: "Denver, CO",
    coverImageUrl: null,
    galleryCount: 18,
    shortDescription:
      "Skate with the kids, donation pile by the Zamboni door, and post-game cocoa.",
  },
  {
    id: "gal-03",
    title: "Away Weekend — Colorado Springs",
    eventType: "Tournament",
    eventDate: "2024-11-02T08:00:00.000-06:00",
    location: "Sertich Ice Center",
    cityState: "Colorado Springs, CO",
    coverImageUrl: null,
    galleryCount: 56,
    shortDescription:
      "Two games, one hotel hallway, and too many pizza boxes—road trip highlights.",
  },
  {
    id: "gal-04",
    title: "Captain’s Practice — Before Playoffs",
    eventType: "Practice",
    eventDate: "2025-03-20T06:00:00.000-06:00",
    location: "Family Sports Center — Rink 1",
    cityState: "Centennial, CO",
    coverImageUrl: null,
    galleryCount: 12,
    shortDescription:
      "Early bag skate, empty barn, and a few ugly goals that still made the clip reel.",
  },
  {
    id: "gal-05",
    title: "League Home Opener",
    eventType: "Game",
    eventDate: "2024-09-21T20:30:00.000-06:00",
    location: "South Suburban Sports Complex",
    cityState: "Littleton, CO",
    coverImageUrl: null,
    galleryCount: 31,
    shortDescription:
      "Banner night, starting line intros, and the first W on the board this season.",
  },
];

const dateDisplay = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  month: "short",
  day: "numeric",
  year: "numeric",
});

const timeDisplay = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "2-digit",
  timeZoneName: "short",
});

export function formatPastEventDate(iso: string): string {
  const d = new Date(iso);
  return `${dateDisplay.format(d)} · ${timeDisplay.format(d)}`;
}
