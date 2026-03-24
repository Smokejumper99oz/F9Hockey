/**
 * Static contact directory. Later: fetch from CMS/Supabase or env-backed
 * secrets; keep this shape for a simple swap-in.
 */

export const contactConfig = {
  primaryContactName: "Marcus Webb",
  primaryContactRole: "Team Captain",
  primaryContactEmail: "captain@f9hockey.com",
  secondaryContactName: "Elena Vasquez",
  secondaryContactRole: "Team Manager",
  secondaryContactEmail: "manager@f9hockey.com",
} as const;
