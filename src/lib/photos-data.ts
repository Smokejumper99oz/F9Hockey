/**
 * Static past events / galleries. Replace with Supabase rows + Storage public URLs
 * for `coverImageUrl`; map snake_case columns in your API layer.
 */

export type PastEventType = "Tournament" | "Game" | "Practice" | "Team Night";

export type PastPhotoEvent = {
  id: string;
  title: string;
  /** Optional second line under the title on cards and gallery pages */
  subtitle?: string;
  eventType: PastEventType;
  /** ISO 8601 date-time or date string */
  eventDate: string;
  location: string;
  cityState: string;
  /** Supabase Storage public URL, or null for placeholder cover. Used for `/photos/[slug]` hero. */
  coverImageUrl: string | null;
  /**
   * When set, the `/photos` grid card image only (detail hero still uses `coverImageUrl`).
   * Use when the large gallery hero and the small card should show different art.
   */
  gridCardImageUrl?: string | null;
  /**
   * CSS `object-position` for the gallery hero on `/photos/[slug]`.
   */
  coverObjectPosition?: string;
  /**
   * Optional override for the past-events card thumbnail only (short strip).
   */
  coverCardObjectPosition?: string;
  /**
   * When true, the /photos grid card has no top image (detail page still uses `coverImageUrl`).
   */
  omitCardCover?: boolean;
  /**
   * When true, the grid card shows the “Cover coming from storage” strip even if `coverImageUrl` is set (hero on `/photos/[slug]` unchanged).
   */
  useCardCoverPlaceholder?: boolean;
  /**
   * When true, `/photos/[slug]` shows the hero placeholder instead of `coverImageUrl` (card unchanged).
   */
  omitGalleryHero?: boolean;
  shortDescription: string;
  /** When set, shown on cards instead of formatting `eventDate` (e.g. multi-day ranges) */
  dateDisplayOverride?: string;
  /** When set, `/photos/[slug]` exists and the card links to it */
  slug?: string;
  /** Optional subheading above the recap body on `/photos/[slug]` */
  bodyHeading?: string;
  /** Long-form copy for the gallery detail page */
  bodyParagraphs?: string[];
  /** Extra images beyond the hero cover (paths under `/public`) */
  galleryImageUrls?: string[];
};

export const pastPhotoEvents: PastPhotoEvent[] = [
  {
    id: "gal-clearwater-3rd",
    title: "3rd Annual Clearwater Skate",
    eventType: "Game",
    eventDate: "2026-03-10T19:00:00.000-04:00",
    dateDisplayOverride: "March 10–11, 2026",
    location: "Clearwater Ice Arena",
    cityState: "Clearwater, FL",
    coverImageUrl: "/images/clearwater-skate-3rd-annual.png",
    shortDescription:
      "Another standout 3rd Annual Clearwater skate—Tuesday evening we hosted Allegiant at the rink, with teammates, friends, and coworkers turning out in force (and plenty more cheering from home on the live stream), then kept the night going at Mugs. Wednesday morning brought our friends and rivals the Drunken Clammers, who have backed this Florida tradition for a decade—great hockey, lasting memories, and the kind of camaraderie that defines Frontier on the road.",
    slug: "clearwater-3rd-annual",
    bodyHeading:
      "Frontier Airlines Hockey – 3rd Annual Clearwater Event Recap",
    bodyParagraphs: [
      "The Frontier Airlines Hockey Club recently wrapped up our 3rd Annual Clearwater, Florida skate, and once again it was a fantastic event both on and off the ice.",
      "The games kicked off on Tuesday evening, March 10, with a game against the newly formed Allegiant Airlines team, followed by a great social gathering at Mugs Sports Bar & Grill. We were thrilled to see such strong support from friends and coworkers, with around 40 spectators attending the game in person, while others tuned in remotely using the rink’s live-streaming app.",
      "On Wednesday morning, March 11, we faced the Drunken Clammers, a local team celebrating 10 years since their founding. The Clammers, led by Richard Werges (Founder and Captain), and their community of more than 100 members, have always been incredibly supportive of our Florida skates. As a proud member myself, I want to extend a special thank-you to the entire Clammers organization for their continued support and for helping make this event one of our favorite annual traditions.",
      "I would also like to thank my fellow Frontier coworkers who took time out of their busy schedules to fly or drive in to enjoy some hockey together—whether as players or spectators. Events like this are a great reminder of the camaraderie that exists within our aviation community.",
      "Planning has already begun for the 4th Annual Clearwater Skate next year, and we hope to see even more teammates, friends, and family come out to join us on the ice or cheer from the stands.",
    ],
    galleryImageUrls: ["/images/clearwater-skate-3rd-drunken-clammers-logo.png"],
  },
  {
    id: "gal-pond-hockey-2026",
    title: "2026 U.S. Pond Hockey Championships",
    eventType: "Tournament",
    eventDate: "2026-01-24T12:00:00.000-06:00",
    dateDisplayOverride: "January 24–25, 2026",
    location: "Lake Nokomis",
    cityState: "Minneapolis, MN",
    coverImageUrl: "/images/pond-hockey-2026-team.png",
    shortDescription:
      "With many players planning other commitments—including trips to Europe for the Olympic Games—only three skaters represented the Frontier Hockey Club at the 2026 U.S. Pond Hockey Championships. John K., Dennis F., and Allan N. carried the banner and teamed up with our friends from Sun Country to form a full roster. Despite the smaller presence, the group represented Frontier Hockey Club well and kept the tradition alive on the ice.",
    slug: "pond-hockey-2026",
    bodyHeading: "2026 U.S. Pond Hockey Championships – Minneapolis, MN",
    bodyParagraphs: [
      "With many players planning other commitments—including trips to Europe for the Olympic Games—only three skaters represented the Frontier Hockey Club at the 2026 U.S. Pond Hockey Championships. John K., Dennis F., and Allan N. carried the banner and teamed up with our friends from Sun Country to form a full roster.",
      "Despite the smaller presence, the group represented Frontier Hockey Club well and kept the tradition alive on the ice.",
    ],
    galleryImageUrls: [],
  },
  {
    id: "gal-boom-boom-2025",
    title: "2025 Boom Boom Cup",
    subtitle: "(Airline Invitational)",
    eventType: "Tournament",
    eventDate: "2025-10-14T12:00:00.000-05:00",
    dateDisplayOverride: "October 14–17, 2025",
    location: "Centennial Sportsplex",
    cityState: "Nashville, TN",
    coverImageUrl: "/images/boom-boom-cup-2025-team.png",
    shortDescription:
      "Two Frontier teams at the 2025 Boom Boom Cup in Nashville—an all-the-way run to the final and second place after a tight championship game. Great hockey with United and the rest of the aviation community; already looking forward to the next one.",
    slug: "boom-boom-cup-2025",
    bodyHeading: "2025 Boom Boom Cup – Nashville, TN",
    bodyParagraphs: [
      "The Frontier Airlines Hockey Club returned to Nashville, Tennessee for the 2025 Boom Boom Cup, once again representing the airline at one of the premier aviation hockey tournaments. The invitational brings together airline and aviation teams from across the industry for a weekend of competitive hockey and strong camaraderie off the ice.",
      "This year, Frontier showed up in full force with two teams, logging plenty of ice time and making a strong run all the way to the championship game, ultimately finishing in 2nd place after a tight final. Along the way, players stepped in to support other airlines—especially first-time participants—continuing the spirit of teamwork that defines the event.",
      "We also enjoyed a great social skate with our friends from United Airlines and reconnected with teams from across the aviation community, including new additions like PSA Airlines and Southwest Airlines. While the competition is real, the tournament is ultimately about bringing aviation professionals together to share their passion for hockey.",
      "Another outstanding event in Nashville—and we’re already looking forward to the next one.",
    ],
    galleryImageUrls: [
      "/images/boom-boom-cup-2025-jetblue-frontier.png",
      "/images/boom-boom-cup-2025-rink-duo.png",
      "/images/boom-boom-cup-2025-locker-room.png",
    ],
  },
  {
    id: "gal-clearwater-2nd",
    title: "2nd Annual Clearwater Skate",
    eventType: "Game",
    eventDate: "2025-03-18T12:00:00.000-04:00",
    dateDisplayOverride: "March 18–19, 2025",
    location: "Clearwater Ice Arena",
    cityState: "Clearwater, FL",
    coverImageUrl: "/images/clearwater-skate-2nd-annual.png",
    shortDescription:
      "Year two of the Clearwater tradition—another skate against the Drunken Clammers with strong turnout from teammates, friends, and locals under the Florida sun.",
    slug: "clearwater-2nd-annual",
    bodyHeading: "2nd Annual Clearwater Skate – Clearwater, FL",
    bodyParagraphs: [
      "We came together once again for our 2nd Annual Clearwater Skate in Florida, continuing what’s quickly becoming a great tradition. As always, we faced off against the Drunken Clammers, who have been a huge part of the event and strong supporters since the very beginning.",
      "Florida continues to deliver a great turnout, bringing together teammates, friends, and local players for a fun and competitive atmosphere.",
      "There’s nothing quite like playing hockey in the Sunshine State—great games, great people, and a perfect setting to keep building the Frontier Hockey Club culture.",
    ],
    galleryImageUrls: [
      "/images/clearwater-skate-2nd-bench.png",
      "/images/clearwater-skate-2nd-game.png",
    ],
  },
  {
    id: "gal-pond-hockey-2025",
    title: "2025 U.S. Pond Hockey Championships",
    eventType: "Tournament",
    eventDate: "2025-01-23T12:00:00.000-06:00",
    dateDisplayOverride: "January 23–25, 2025",
    location: "Lake Nokomis",
    cityState: "Minneapolis, MN",
    coverImageUrl: "/images/pond-hockey-2025-team.png",
    shortDescription:
      "After the 2024 cancellation, we took our shot at the 2025 U.S. Pond Hockey Championships in Minneapolis and battled to the championship game—then finished short-handed as work and flights called teammates home. Unforgettable hockey, great memories, and brutally cold conditions.",
    slug: "pond-hockey-2025",
    bodyHeading: "2025 U.S. Pond Hockey Championships – Minneapolis, MN",
    bodyParagraphs: [
      "After the 2024 cancellation, we finally got our shot at the 2025 U.S. Pond Hockey Championships—and made the most of it. The team battled through the tournament and advanced all the way to the championship game.",
      "With tight schedules and flights calling, our roster started thinning as players had to head home for work, leaving us short-handed for the final push. Still, it was an unforgettable run filled with great hockey, great memories—and brutally cold conditions.",
    ],
    galleryImageUrls: [
      "/images/pond-hockey-2025-01.png",
      "/images/pond-hockey-2025-02.png",
      "/images/pond-hockey-2025-03.png",
      "/images/pond-hockey-2025-04.png",
      "/images/pond-hockey-2025-05.png",
      "/images/pond-hockey-2025-06.png",
      "/images/pond-hockey-2025-07.png",
      "/images/pond-hockey-2025-08.png",
      "/images/pond-hockey-2025-09.png",
      "/images/pond-hockey-2025-10.png",
      "/images/pond-hockey-2025-11.png",
    ],
  },
  {
    id: "gal-boom-boom-2024",
    title: "2024 Boom Boom Cup",
    subtitle: "(Airline Invitational)",
    eventType: "Tournament",
    eventDate: "2024-10-16T12:00:00.000-05:00",
    dateDisplayOverride: "October 16–18, 2024",
    location: "Centennial Sportsplex",
    cityState: "Nashville, TN",
    coverImageUrl: "/images/boom-boom-cup-2024-team.png",
    shortDescription:
      "Our first Boom Boom Cup in Nashville—Airline Invitational hockey in Music City, reconnecting with friends across the industry, and time off the ice in Nashville including an NHL game. We’ll be back.",
    slug: "boom-boom-cup-2024",
    bodyHeading: "2024 Boom Boom Cup – Nashville, TN",
    bodyParagraphs: [
      "The Frontier Airlines Hockey Club hit the ice in Nashville, Tennessee for the 2024 Boom Boom Cup—our first airline tournament experience. The Airline Invitational brought together aviation teams from across the industry for a great weekend of competitive hockey in Music City.",
      "We had our share of wins and losses but came together as a team and finished strong. It was also great to compete alongside and reconnect with familiar faces, including our friends from JetBlue, Sun Country Airlines, United Airlines, and Delta Air Lines, among others.",
      "Off the ice, the group enjoyed everything Nashville has to offer, including taking in an NHL game to round out the experience.",
      "It was an unforgettable first tournament for the club, and one thing is certain—we’ll be back.",
    ],
    galleryImageUrls: [
      "/images/boom-boom-cup-2024-two-teams.png",
      "/images/boom-boom-cup-2024-trophy-group.png",
      "/images/boom-boom-cup-2024-tournament-schedule.png",
      "/images/boom-boom-cup-2024-smashville-group.png",
    ],
  },
  {
    id: "gal-clearwater-1st",
    title: "1st Annual Clearwater Skate",
    eventType: "Game",
    eventDate: "2024-04-24T12:00:00.000-04:00",
    dateDisplayOverride: "April 24–25, 2024",
    location: "Oldsmar Ice Arena",
    cityState: "Oldsmar, FL",
    coverImageUrl: "/images/clearwater-skate-1st-annual.png",
    shortDescription:
      "At Oldsmar Ice Arena—back-to-back games against the Drunken Clammers with local beer league players rounding out the rosters. After the second skate, the crew celebrated FO Sven Folmer’s birthday at his place with teammates and Frontier coworkers.",
    slug: "clearwater-1st-annual",
    bodyHeading: "1st Annual Clearwater Skate – Oldsmar, FL",
    bodyParagraphs: [
      "Our 1st Annual Clearwater Skate took place at Oldsmar Ice Arena. We faced off against the Drunken Clammers both days, with additional support from local beer league players, making for a competitive and fun couple of days on the ice.",
      "After the second skate, the team kept things going with a spontaneous after-skate gathering at First Officer Sven Folmer’s house, celebrating his birthday alongside teammates and fellow Frontier coworkers who joined the festivities.",
    ],
    galleryImageUrls: [
      "/images/clearwater-1st-annual-gathering.png",
      "/images/clearwater-1st-annual-ice-trio.png",
    ],
  },
  {
    id: "gal-pond-hockey-2024",
    title: "2024 U.S. Pond Hockey Championships",
    eventType: "Tournament",
    eventDate: "2024-01-26T12:00:00.000-06:00",
    dateDisplayOverride: "January 26–28, 2024",
    location: "Lake Nokomis",
    cityState: "Minneapolis, MN",
    coverImageUrl: "/images/pond-hockey-2024-main.png",
    gridCardImageUrl: "/images/pond-hockey-2024-usphc.png",
    coverObjectPosition: "center 48%",
    shortDescription:
      "Our first team outing with the new squad: Lake Nokomis for the 2024 U.S. Pond Hockey Championships—cut short when warm weather canceled the Golden Weekend and the ice turned to slush. We’re guaranteed a spot in 2025.",
    slug: "pond-hockey-2024",
    bodyHeading: "2024 U.S. Pond Hockey Championships – Minneapolis, MN",
    bodyParagraphs: [
      "Our first team event with the newly founded squad brought us to Lake Nokomis for the 2024 U.S. Pond Hockey Championships.",
      "Due to unseasonably warm weather, the “Golden Weekend” (Jan 26–28) was ultimately canceled—the first weather-related cancellation in the event’s nearly 20-year history—as deteriorating ice conditions turned the surface into unplayable slush. While some games were held during the first weekend, approximately 300 teams were impacted by the cancellation.",
      "Despite the outdoor setting, our games were played indoors using traditional pond hockey rules—no goalies and pond-style nets—which made for a fast-paced and unique experience.",
      "With the cancellation, our team secured a guaranteed entry for the 2025 tournament—so we’ll be back.",
    ],
    galleryImageUrls: [
      "/images/pond-hockey-2024-07.png",
      "/images/pond-hockey-2024-01.png",
      "/images/pond-hockey-2024-02.png",
      "/images/pond-hockey-2024-03.png",
      "/images/pond-hockey-2024-04.png",
      "/images/pond-hockey-2024-05.png",
      "/images/pond-hockey-2024-06.png",
      "/images/pond-hockey-2024-08.png",
      "/images/pond-hockey-2024-09.png",
    ],
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

/** Card + gallery detail line for when the event spans multiple days. */
export function getPhotoEventDateDisplay(event: PastPhotoEvent): string {
  return event.dateDisplayOverride ?? formatPastEventDate(event.eventDate);
}

/** Full title for metadata, alt text, and other single-string uses. */
export function getPastPhotoEventFullTitle(event: PastPhotoEvent): string {
  return event.subtitle ? `${event.title} ${event.subtitle}` : event.title;
}

/** Cover image (if any) plus `galleryImageUrls` — matches files referenced in data. */
export function getPastPhotoEventGalleryPhotoCount(
  event: PastPhotoEvent,
): number {
  const cover = event.coverImageUrl ? 1 : 0;
  const extras = event.galleryImageUrls?.length ?? 0;
  return cover + extras;
}

export function getPastPhotoEventBySlug(
  slug: string,
): PastPhotoEvent | undefined {
  return pastPhotoEvents.find((e) => e.slug === slug);
}

export function getPastPhotoEventSlugs(): string[] {
  return pastPhotoEvents
    .map((e) => e.slug)
    .filter((s): s is string => Boolean(s));
}
