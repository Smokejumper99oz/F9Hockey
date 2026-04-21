"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { InstagramIcon } from "@/components/instagram-icon";
import { INSTAGRAM_PROFILE_URL } from "@/lib/instagram-feature";
import { siteConfig } from "@/lib/site-config";

const nav = [
  { label: "Home", href: "/" },
  { label: "The Bench", href: "/hub" },
  { label: "Schedule", href: "/schedule" },
  { label: "Roster", href: "/roster" },
  { label: "Contact", href: "/contact" },
  { label: "Login", href: "/login" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/90 pt-[env(safe-area-inset-top,0px)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 py-3 ps-[max(1rem,env(safe-area-inset-left,0px))] pe-[max(1rem,env(safe-area-inset-right,0px))] sm:gap-4 sm:ps-[max(1.5rem,env(safe-area-inset-left,0px))] sm:pe-[max(1.5rem,env(safe-area-inset-right,0px))] lg:ps-[max(2rem,env(safe-area-inset-left,0px))] lg:pe-[max(2rem,env(safe-area-inset-right,0px))]">
        <Link
          href="/"
          className="text-lg font-bold leading-none tracking-tight text-zinc-100 transition hover:text-emerald-400"
          onClick={() => setOpen(false)}
        >
          {siteConfig.siteName}
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-zinc-800 text-emerald-400"
                    : "text-zinc-400 hover:bg-zinc-800/80 hover:text-zinc-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-0.5 rounded-lg p-2 text-zinc-400 transition hover:bg-zinc-800/80 hover:text-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
            aria-label="Follow us on Instagram"
          >
            <InstagramIcon className="h-[1.125rem] w-[1.125rem]" />
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm font-medium text-zinc-200 transition hover:border-zinc-600 hover:bg-zinc-800 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-zinc-800/80 bg-zinc-950 py-3 ps-[max(1rem,env(safe-area-inset-left,0px))] pe-[max(1rem,env(safe-area-inset-right,0px))] pb-[max(0.75rem,env(safe-area-inset-bottom,0px))] md:hidden"
          aria-label="Mobile main"
        >
          <ul className="flex flex-col gap-1">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-lg px-3 py-3 text-base font-medium ${
                      active
                        ? "bg-zinc-800 text-emerald-400"
                        : "text-zinc-300 hover:bg-zinc-800/80"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <a
                href={INSTAGRAM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-lg px-3 py-3 text-base font-medium text-zinc-300 transition hover:bg-zinc-800/80"
                onClick={() => setOpen(false)}
              >
                <InstagramIcon className="h-5 w-5 shrink-0 text-pink-400/90" />
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
