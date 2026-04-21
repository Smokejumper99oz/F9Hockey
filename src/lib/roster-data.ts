/**
 * Static roster source. Replace with Supabase fetch later; keep `RosterPlayer`
 * fields aligned with your table columns (map snake_case ↔ camelCase in API layer).
 */

export type RosterRoleType =
  | "Captain"
  | "First Officer"
  | "Player"
  | "Dispatcher"
  | "Ramper";

export type RosterPlayer = {
  /** Stable row id — use UUID from Supabase when wired up */
  id: string;
  name: string;
  /** Airline role (Captain / First Officer / etc.) */
  roleType: RosterRoleType;
  /** Hockey club captain — photo badge + accent; separate from company `roleType` */
  isTeamCaptain?: boolean;
  /** Crew domicile / base code */
  crewBase: string;
  /** Jersey number; null when TBD */
  jerseyNumber: number | null;
  hockeyPosition: string;
  /** Public URL to headshot; null shows initials placeholder */
  photoUrl: string | null;
  /** >1 zooms the photo inside the frame (crop); optional per-player tuning */
  photoZoom?: number;
  /** CSS `object-position` for `object-cover` (e.g. `center 32%` to show more subject, less sky/stadium) */
  photoObjectPosition?: string;
  bioShort?: string;
  /** Omit until known; `logoAbbr` is the 3-letter NHL code for league SVG assets */
  nhlTeam?: {
    name: string;
    logoAbbr: string;
  };
};

/**
 * Order: (1) fixed top six — Allan, Sven, Dennis, Mark Moser, Zach, Blake;
 * (2) remaining players with photos (alphabetical by last name);
 * (3) remaining players without photos (alphabetical by last name).
 * Photo = `photoUrl` is set; grid shows pictured players first after the top six.
 */
export const rosterPlayers: RosterPlayer[] = [
  {
    id: "p-01",
    name: "Allan Neher",
    roleType: "Captain",
    isTeamCaptain: true,
    crewBase: "DEN",
    jerseyNumber: 91,
    hockeyPosition: "Center",
    photoUrl: "/images/players/allan-neher.png",
    nhlTeam: { name: "Pittsburgh Penguins", logoAbbr: "PIT" },
  },
  {
    id: "p-02",
    name: "Sven Folmer",
    roleType: "Captain",
    crewBase: "ALT",
    jerseyNumber: 92,
    hockeyPosition: "Left Wing/Center",
    photoUrl: "/images/players/sven-folmer.png",
    nhlTeam: { name: "Tampa Bay Lightning", logoAbbr: "TBL" },
  },
  {
    id: "p-03",
    name: "Dennis Feldhausen",
    roleType: "Captain",
    crewBase: "PHX",
    jerseyNumber: 82,
    hockeyPosition: "Center, Defense (Right)",
    photoUrl: "/images/players/dennis-feldhausen.png",
    nhlTeam: { name: "Pittsburgh Penguins", logoAbbr: "PIT" },
  },
  {
    id: "p-04",
    name: "Mark Moser",
    roleType: "Captain",
    crewBase: "DFW/DEN",
    jerseyNumber: 28,
    hockeyPosition: "Forward",
    photoUrl: "/images/players/mark-moser.png",
    nhlTeam: { name: "Colorado Avalanche", logoAbbr: "COL" },
  },
  {
    id: "p-05",
    name: "Zach Parks",
    roleType: "Captain",
    crewBase: "PHL",
    jerseyNumber: 7,
    hockeyPosition: "Left Wing",
    photoUrl: "/images/players/zach-parks.png",
    nhlTeam: { name: "Pittsburgh Penguins", logoAbbr: "PIT" },
  },
  {
    id: "p-06",
    name: "Blake Eric Wolanin",
    roleType: "First Officer",
    crewBase: "MCO",
    jerseyNumber: 25,
    hockeyPosition: "Water Boy/Forward",
    photoUrl: "/images/players/blake-eric-wolanin.png",
    photoZoom: 1.28,
    nhlTeam: { name: "Boston Bruins", logoAbbr: "BOS" },
  },
  {
    id: "p-29",
    name: "Noah Austin",
    roleType: "First Officer",
    crewBase: "MCO",
    jerseyNumber: 11,
    hockeyPosition: "Forward",
    photoUrl: "/images/players/noah-austin.png",
    nhlTeam: { name: "Boston Bruins", logoAbbr: "BOS" },
  },
  {
    id: "p-15",
    name: "Chase Catherman",
    roleType: "Captain",
    crewBase: "PHL",
    jerseyNumber: 14,
    hockeyPosition: "Defense",
    photoUrl: "/images/players/chase-catherman.png",
    nhlTeam: { name: "Philadelphia Flyers", logoAbbr: "PHI" },
  },
  {
    id: "p-07",
    name: "Jason Drean",
    roleType: "Captain",
    crewBase: "MCO",
    jerseyNumber: 71,
    hockeyPosition: "Forward",
    photoUrl: "/images/players/jason-drean.png",
    nhlTeam: { name: "Colorado Avalanche", logoAbbr: "COL" },
  },
  {
    id: "p-08",
    name: "Jeff Johnston",
    roleType: "Captain",
    crewBase: "MIA",
    jerseyNumber: 13,
    hockeyPosition: "Defense",
    photoUrl: "/images/players/jeff-johnston.png",
    nhlTeam: { name: "Buffalo Sabres", logoAbbr: "BUF" },
  },
  {
    id: "p-18",
    name: "Joel Keil",
    roleType: "Dispatcher",
    crewBase: "DEN",
    jerseyNumber: 19,
    hockeyPosition: "Forward",
    photoUrl: "/images/players/joel-keil.png",
    nhlTeam: { name: "Colorado Avalanche", logoAbbr: "COL" },
  },
  {
    id: "p-09",
    name: "John Kerkaert",
    roleType: "Captain",
    crewBase: "SJU",
    jerseyNumber: 3,
    hockeyPosition: "Center",
    photoUrl: "/images/players/john-kerkaert.png",
    nhlTeam: { name: "Colorado Avalanche", logoAbbr: "COL" },
  },
  {
    id: "p-10",
    name: "David Lytle",
    roleType: "Captain",
    crewBase: "SJU",
    jerseyNumber: 22,
    hockeyPosition: "Defense",
    photoUrl: "/images/players/david-lytle.png",
    photoZoom: 1.35,
    photoObjectPosition: "center 32%",
    nhlTeam: { name: "New Jersey Devils", logoAbbr: "NJD" },
  },
  {
    id: "p-11",
    name: "Kyle Pendelton",
    roleType: "Captain",
    crewBase: "TPA",
    jerseyNumber: 0,
    hockeyPosition: "Defence",
    photoUrl: "/images/players/kyle-pendelton.png",
    nhlTeam: { name: "Vegas Golden Knights", logoAbbr: "VGK" },
  },
  {
    id: "p-12",
    name: "Roan Perschke",
    roleType: "Ramper",
    crewBase: "TPA",
    jerseyNumber: 0,
    hockeyPosition: "Goalie",
    photoUrl: "/images/players/roan-perschke.png",
    nhlTeam: { name: "Colorado Avalanche", logoAbbr: "COL" },
  },
  {
    id: "p-13",
    name: "Dalton Sears",
    roleType: "First Officer",
    crewBase: "TPA",
    jerseyNumber: 88,
    hockeyPosition: "Defense",
    photoUrl: "/images/players/dalton-sears.png",
    nhlTeam: { name: "Tampa Bay Lightning", logoAbbr: "TBL" },
  },
  {
    id: "p-14",
    name: "Jordan Shepherd",
    roleType: "First Officer",
    crewBase: "PHL",
    jerseyNumber: 93,
    hockeyPosition: "Forward",
    photoUrl: "/images/players/jordan-shepherd.png",
    nhlTeam: { name: "Edmonton Oilers", logoAbbr: "EDM" },
  },
  {
    id: "p-25",
    name: "Matt Siegrist",
    roleType: "Captain",
    crewBase: "TPA",
    jerseyNumber: 87,
    hockeyPosition: "Forward",
    photoUrl: "/images/players/matt-siegrist.png",
    nhlTeam: { name: "Tampa Bay Lightning", logoAbbr: "TBL" },
  },
  {
    id: "p-16",
    name: "Jason DuVernay",
    roleType: "Captain",
    crewBase: "TPA",
    jerseyNumber: 19,
    hockeyPosition: "Forward",
    photoUrl: null,
    nhlTeam: { name: "Tampa Bay Lightning", logoAbbr: "TBL" },
  },
  {
    id: "p-19",
    name: "Michael Medeiros",
    roleType: "Captain",
    crewBase: "ATL",
    jerseyNumber: 6,
    hockeyPosition: "Defense",
    photoUrl: null,
  },
  {
    id: "p-20",
    name: "Jacob Norberg",
    roleType: "First Officer",
    crewBase: "LAS",
    jerseyNumber: null,
    hockeyPosition: "Forward",
    photoUrl: null,
    nhlTeam: { name: "Vegas Golden Knights", logoAbbr: "VGK" },
  },
  {
    id: "p-21",
    name: "Erik Pike",
    roleType: "Captain",
    crewBase: "MCO",
    jerseyNumber: 5,
    hockeyPosition: "Left Wing",
    photoUrl: null,
    nhlTeam: { name: "Buffalo Sabres", logoAbbr: "BUF" },
  },
  {
    id: "p-22",
    name: "Henry Reed",
    roleType: "Captain",
    crewBase: "MCO",
    jerseyNumber: 43,
    hockeyPosition: "Forward",
    photoUrl: null,
  },
  {
    id: "p-23",
    name: "Ryan Richter",
    roleType: "Captain",
    crewBase: "MCO",
    jerseyNumber: null,
    hockeyPosition: "Defense",
    photoUrl: null,
  },
  {
    id: "p-17",
    name: "Ron Rishman",
    roleType: "Captain",
    crewBase: "LAS",
    jerseyNumber: 11,
    hockeyPosition: "Defense",
    photoUrl: null,
    nhlTeam: { name: "Vegas Golden Knights", logoAbbr: "VGK" },
  },
  {
    id: "p-24",
    name: "Justin Scofield",
    roleType: "First Officer",
    crewBase: "MCO",
    jerseyNumber: 3,
    hockeyPosition: "Forward",
    photoUrl: null,
    nhlTeam: { name: "Florida Panthers", logoAbbr: "FLA" },
  },
  {
    id: "p-26",
    name: "Kyle Usiak",
    roleType: "First Officer",
    crewBase: "MCO",
    jerseyNumber: 43,
    hockeyPosition: "Forward",
    photoUrl: null,
    nhlTeam: { name: "Buffalo Sabres", logoAbbr: "BUF" },
  },
  {
    id: "p-27",
    name: "Nick Van Remortel",
    roleType: "Captain",
    crewBase: "DEN",
    jerseyNumber: 18,
    hockeyPosition: "Defense",
    photoUrl: null,
    nhlTeam: { name: "Colorado Avalanche", logoAbbr: "COL" },
  },
  {
    id: "p-28",
    name: "Will Wood",
    roleType: "Captain",
    crewBase: "DEN",
    jerseyNumber: 12,
    hockeyPosition: "Defence",
    photoUrl: null,
    nhlTeam: { name: "Colorado Avalanche", logoAbbr: "COL" },
  },
];
