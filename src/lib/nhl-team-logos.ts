/**
 * Official NHL team logo SVGs from the league CDN. Pattern:
 * `https://assets.nhle.com/logos/nhl/svg/{TEAM}_light.svg`
 *
 * Browse current assets under that path (team abbreviations are 3 letters, e.g.
 * TBL, VGK, COL, TOR, NYR). `_dark.svg` variants exist for some teams.
 */
export const NHL_TEAM_LOGO_BASE =
  "https://assets.nhle.com/logos/nhl/svg" as const;

export function nhlTeamLogoLightUrl(teamAbbr: string): string {
  return `${NHL_TEAM_LOGO_BASE}/${teamAbbr.trim().toUpperCase()}_light.svg`;
}
