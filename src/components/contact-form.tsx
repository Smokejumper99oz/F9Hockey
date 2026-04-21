"use client";

import { useForm, ValidationError } from "@formspree/react";
import { contactConfig } from "@/lib/contact-config";

type ContactFormFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function ContactForm() {
  const [state, handleSubmit, reset] = useForm<ContactFormFields>(
    contactConfig.formspreeFormId,
  );

  if (state.succeeded) {
    return (
      <div className="space-y-5">
        <div className="rounded-lg border border-emerald-500/35 bg-emerald-950/25 px-4 py-6 text-center shadow-inner shadow-black/10 sm:px-6">
          <p className="text-lg font-semibold text-zinc-100">Message sent</p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            Thanks—we&apos;ll get back to you soon.
          </p>
        </div>
        <button
          type="button"
          onClick={reset}
          className="w-full rounded-xl border border-zinc-600 bg-zinc-900/80 px-4 py-3 text-sm font-semibold text-zinc-200 transition hover:border-emerald-500/40 hover:text-emerald-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 sm:w-auto"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-medium text-zinc-300"
        >
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className="mt-1.5 w-full rounded-lg border border-zinc-700 bg-zinc-900/60 px-3 py-2.5 text-zinc-100 placeholder:text-zinc-600 shadow-inner shadow-black/20 outline-none transition focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/25"
          placeholder='Ross "The Boss" Rhea'
        />
        <ValidationError
          field="name"
          errors={state.errors}
          className="mt-1.5 text-sm text-red-400/95"
        />
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-medium text-zinc-300"
        >
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          className="mt-1.5 w-full rounded-lg border border-zinc-700 bg-zinc-900/60 px-3 py-2.5 text-zinc-100 placeholder:text-zinc-600 shadow-inner shadow-black/20 outline-none transition focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/25"
          placeholder="ross@dropthegloves.com"
        />
        <ValidationError
          field="email"
          errors={state.errors}
          className="mt-1.5 text-sm text-red-400/95"
        />
      </div>

      <div>
        <label
          htmlFor="contact-subject"
          className="block text-sm font-medium text-zinc-300"
        >
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          autoComplete="off"
          className="mt-1.5 w-full rounded-lg border border-zinc-700 bg-zinc-900/60 px-3 py-2.5 text-zinc-100 placeholder:text-zinc-600 shadow-inner shadow-black/20 outline-none transition focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/25"
          placeholder="e.g. What’s the Call — Game Day, Schedule, or something else?"
        />
        <ValidationError
          field="subject"
          errors={state.errors}
          className="mt-1.5 text-sm text-red-400/95"
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-zinc-300"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          className="mt-1.5 w-full resize-y rounded-lg border border-zinc-700 bg-zinc-900/60 px-3 py-2.5 text-zinc-100 placeholder:text-zinc-600 shadow-inner shadow-black/20 outline-none transition focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/25"
          placeholder="How can we help you on and off the ice?"
        />
        <ValidationError
          field="message"
          errors={state.errors}
          className="mt-1.5 text-sm text-red-400/95"
        />
      </div>

      <ValidationError
        errors={state.errors}
        className="rounded-lg border border-red-500/30 bg-red-950/25 px-3 py-2.5 text-sm text-red-200/95"
      />

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-950/30 transition hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[12rem]"
      >
        {state.submitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
