/**
 * Static contact directory. Later: fetch from CMS/Supabase or env-backed
 * secrets; keep this shape for a simple swap-in.
 *
 * Formspree notification email is configured in the Formspree dashboard for
 * `formspreeFormId`, not in this file.
 */

export const contactConfig = {
  primaryContactName: "Allan Neher",
  primaryContactRole: "Team Captain",
  primaryContactEmail: "captain@f9hockey.com",
  secondaryContactName: "Sven Folmer",
  secondaryContactRole: "Alternate Captains",
  secondaryContactEmail: "manager@f9hockey.com",
  /** Formspree form id (path segment after /f/ in the form endpoint URL). */
  formspreeFormId: "mkovzkqr",
} as const;
