import Link from "next/link";

type HubLinkCardProps = {
  title: string;
  description: string;
  href: string;
};

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function HubLinkCard({ title, description, href }: HubLinkCardProps) {
  const className =
    "block rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 sm:p-6 shadow-lg shadow-black/20 transition-colors duration-150 hover:border-emerald-500/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500";

  const external = isExternalHref(href);

  const inner = (
    <>
      <h2 className="text-lg font-semibold tracking-tight text-zinc-100">
        {title}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{description}</p>
      <span className="mt-4 inline-flex items-center text-sm font-medium text-emerald-500/90">
        Open
        {external ? (
          <span className="sr-only"> (opens in new tab)</span>
        ) : null}
        <span aria-hidden className="ml-1">
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

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
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
