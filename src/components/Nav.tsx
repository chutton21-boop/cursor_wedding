import Link from "next/link";

const ITEMS = [
  { href: "/#schedule", label: "Schedule" },
  { href: "/faq#faq", label: "FAQ" },
  { href: "/details#travel", label: "Travel" },
  { href: "/details#love-story", label: "Love story" },
  { href: "/what-to-do", label: "What to do" },
  { href: "/gallery", label: "Gallery" },
] as const;

type NavProps = { activeLabel?: string };

export default function Nav({ activeLabel = "Schedule" }: NavProps) {
  return (
    <nav className="sticky top-0 z-10 bg-bg px-6 py-6" aria-label="Main">
      <ul className="flex flex-wrap justify-center gap-3">
        {ITEMS.map(({ href, label }) => {
          const isActive = label === activeLabel;
          return (
            <li key={label}>
              <Link
                href={href}
                className={`inline-block rounded-full px-5 py-2.5 font-body text-body-s ${
                  isActive
                    ? "bg-accent text-bg"
                    : "border border-border bg-surface text-mutedText hover:bg-muted"
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
