import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { contactConfig } from "@/lib/contact-config";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact | F9 Hockey",
  description: "Contact Frontier Airlines Hockey Club leadership",
};

function ContactCard({
  name,
  role,
  email,
  variant,
}: {
  name: string;
  role: string;
  email: string;
  variant: "primary" | "secondary";
}) {
  return (
    <div
      className={`rounded-xl border p-5 sm:p-6 ${
        variant === "primary"
          ? "border-emerald-500/35 bg-zinc-900/70 ring-1 ring-emerald-500/15"
          : "border-zinc-800 bg-zinc-900/50"
      }`}
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-emerald-500/85">
        {variant === "primary" ? "Primary" : "Secondary"}
      </p>
      <h2 className="mt-2 text-lg font-semibold text-zinc-100">{name}</h2>
      <p className="mt-1 text-sm text-zinc-400">{role}</p>
      <a
        href={`mailto:${email}`}
        className="mt-4 inline-flex break-all text-sm font-medium text-emerald-400 transition hover:text-emerald-300"
      >
        {email}
      </a>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
          Contact
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-400">
          Reach {siteConfig.siteName} leadership for subs, schedule conflicts,
          fees questions, or anything that needs a decision before puck drop.
        </p>
      </header>

      <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 sm:p-8">
            <h2 className="text-lg font-semibold text-zinc-100">
              Send a message
            </h2>
            <p className="mt-2 text-sm text-zinc-500">
              Use the form below once email routing is live. Fields match what
              we will post to a secure endpoint later.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>

        <aside className="lg:col-span-5">
          <h2 className="text-lg font-semibold text-zinc-100">
            Reach directly
          </h2>
          <p className="mt-2 text-sm text-zinc-500">
            Prefer email today? Tap an address to open your mail app.
          </p>
          <div className="mt-6 flex flex-col gap-4">
            <ContactCard
              variant="primary"
              name={contactConfig.primaryContactName}
              role={contactConfig.primaryContactRole}
              email={contactConfig.primaryContactEmail}
            />
            <ContactCard
              variant="secondary"
              name={contactConfig.secondaryContactName}
              role={contactConfig.secondaryContactRole}
              email={contactConfig.secondaryContactEmail}
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
