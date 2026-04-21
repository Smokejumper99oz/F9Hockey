import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageIceBackdrop } from "@/components/page-ice-backdrop";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact | F9 Hockey",
  description: "Contact Frontier Airlines Hockey Club leadership",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-[calc(100vh-8rem)] overflow-hidden bg-zinc-950">
      <PageIceBackdrop />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="ml-auto w-full max-w-xl lg:max-w-2xl">
          <header>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
              Contact
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-zinc-400">
              Have questions about {siteConfig.siteName}? We’re here to help — Submit
              the form below.
            </p>
          </header>

          <div className="mt-12 rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 sm:p-8">
            <h2 className="text-lg font-semibold text-zinc-100">
              Send a message
            </h2>
            <p className="mt-2 text-sm text-zinc-500">
              Fill out the form and we’ll follow up shortly.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
