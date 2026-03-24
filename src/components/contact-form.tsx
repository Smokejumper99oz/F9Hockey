"use client";

import type { FormEvent } from "react";

export function ContactForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Future: server action or API route → Resend / transactional provider
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
      aria-describedby="contact-form-note"
    >
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
          className="mt-1.5 w-full rounded-lg border border-zinc-700 bg-zinc-900/60 px-3 py-2.5 text-zinc-100 placeholder:text-zinc-600 shadow-inner shadow-black/20 outline-none transition focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/25"
          placeholder="Your name"
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
          className="mt-1.5 w-full rounded-lg border border-zinc-700 bg-zinc-900/60 px-3 py-2.5 text-zinc-100 placeholder:text-zinc-600 shadow-inner shadow-black/20 outline-none transition focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/25"
          placeholder="you@example.com"
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
          placeholder="e.g. Sub for Tuesday league game"
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
          className="mt-1.5 w-full resize-y rounded-lg border border-zinc-700 bg-zinc-900/60 px-3 py-2.5 text-zinc-100 placeholder:text-zinc-600 shadow-inner shadow-black/20 outline-none transition focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/25"
          placeholder="What do you need from the leadership team?"
        />
      </div>

      <p
        id="contact-form-note"
        className="rounded-lg border border-amber-500/25 bg-amber-950/20 px-3 py-2.5 text-sm leading-relaxed text-amber-200/90"
      >
        <strong className="font-semibold text-amber-100">Coming soon:</strong>{" "}
        submissions from this form will route to the team inbox automatically.
        Until then, use the emails beside this form or your usual team thread.
      </p>

      <button
        type="submit"
        className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-950/30 transition hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 sm:w-auto sm:min-w-[12rem]"
      >
        Send Message
      </button>
    </form>
  );
}
