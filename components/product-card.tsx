export interface ProductCardProps {
  name: string;
  maker: string;
  price: string;
  tag?: string;
  aspectClass?: string;
  className?: string;
}

export function ProductCard({
  name,
  maker,
  price,
  tag,
  aspectClass = "aspect-[3/4]",
  className = "",
}: ProductCardProps) {
  return (
    <article
      className={`group flex flex-col ${className}`}
      role="article"
    >
      {/* Image placeholder */}
      <div
        className={`${aspectClass} w-full overflow-hidden rounded-sm bg-clay/40 dark:bg-charcoal`}
      >
        <div className="flex h-full w-full items-center justify-center text-walnut/50">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
            className="transition-transform duration-500 group-hover:scale-105"
          >
            <rect
              x="8"
              y="12"
              width="32"
              height="24"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="18" cy="22" r="3" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M8 32l10-8 6 5 8-6 8 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Details */}
      <div className="mt-4 flex flex-col gap-1">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-sm font-medium text-ink dark:text-parchment">
            {name}
          </h3>
          {tag && (
            <span className="shrink-0 text-[10px] uppercase tracking-[0.15em] text-kiln">
              {tag}
            </span>
          )}
        </div>
        <p className="text-xs text-walnut">{maker}</p>
        <p className="mt-1 text-sm text-ink dark:text-parchment">{price}</p>
      </div>
    </article>
  );
}
