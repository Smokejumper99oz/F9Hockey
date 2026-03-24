/**
 * Static roster source. Replace with Supabase fetch later; keep `RosterPlayer`
 * fields aligned with your table columns (map snake_case ↔ camelCase in API layer).
 */

export type RosterRoleType = "Captain" | "First Officer" | "Player";

export type RosterPlayer = {
  /** Stable row id — use UUID from Supabase when wired up */
  id: string;
  name: string;
  roleType: RosterRoleType;
  /** Crew domicile / base code */
  crewBase: string;
  jerseyNumber: number;
  hockeyPosition: string;
  /** Public URL to headshot; null shows initials placeholder */
  photoUrl: string | null;
  bioShort?: string;
};

export const rosterPlayers: RosterPlayer[] = [
  {
    id: "p-01",
    name: "Marcus Webb",
    roleType: "Captain",
    crewBase: "DEN",
    jerseyNumber: 9,
    hockeyPosition: "Center",
    photoUrl: null,
    bioShort: "Sets the tone on the ice and in the room.",
  },
  {
    id: "p-02",
    name: "Elena Vasquez",
    roleType: "First Officer",
    crewBase: "LAS",
    jerseyNumber: 17,
    hockeyPosition: "Left Wing",
    photoUrl: null,
    bioShort: "Power-play trigger and road-trip DJ.",
  },
  {
    id: "p-03",
    name: "Tyler Okonkwo",
    roleType: "Player",
    crewBase: "DEN",
    jerseyNumber: 4,
    hockeyPosition: "Defense",
    photoUrl: null,
  },
  {
    id: "p-04",
    name: "Jordan Reeves",
    roleType: "Player",
    crewBase: "MCO",
    jerseyNumber: 31,
    hockeyPosition: "Goalie",
    photoUrl: null,
    bioShort: "Quiet in the crease, loud after a shutout.",
  },
  {
    id: "p-05",
    name: "Sam Okada",
    roleType: "Player",
    crewBase: "PHX",
    jerseyNumber: 22,
    hockeyPosition: "Right Wing",
    photoUrl: null,
  },
  {
    id: "p-06",
    name: "Riley Brennan",
    roleType: "Player",
    crewBase: "DEN",
    jerseyNumber: 7,
    hockeyPosition: "Defense",
    photoUrl: null,
  },
  {
    id: "p-07",
    name: "Chris Mendez",
    roleType: "Player",
    crewBase: "ATL",
    jerseyNumber: 11,
    hockeyPosition: "Center",
    photoUrl: null,
  },
  {
    id: "p-08",
    name: "Pat Kowalski",
    roleType: "Player",
    crewBase: "DEN",
    jerseyNumber: 44,
    hockeyPosition: "Left Wing",
    photoUrl: null,
    bioShort: "Forecheck first, questions later.",
  },
];
