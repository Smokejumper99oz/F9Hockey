import Link from "next/link";

type HubLinkCardProps = {
  title: string;
  description: string;
  href: string;
};

export function HubLinkCard({ title, description, href }: HubLinkCardProps) {
  const className =
    "group block rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 sm:p-6 shadow-lg shadow-black/20 transition duration-200 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:bg-zinc-800/60 hover:shadow-emerald-950/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500";

  const inner = (
    <>
      <h2 className="text-lg font-semibold tracking-tight text-zinc-100 transition group-hover:text-emerald-400">
        {title}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{description}</p>
      <span className="mt-4 inline-flex items-center text-sm font-medium text-emerald-500/90 group-hover:text-emerald-400">
        Open
        <span
          aria-hidden
          className="ml-1 transition-transform group-hover:translate-x-0.5"
        >
          →
        </span>
      </span>
    </>
  );

  if (href === "#") {
    return (
      <a href="#" className={className}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}
