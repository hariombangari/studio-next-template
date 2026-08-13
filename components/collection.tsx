import { ProductCard } from "./product-card";

const PRODUCTS = [
  {
    name: "Raku Tea Bowl",
    maker: "Atelier Kōsō",
    price: "¥8,400",
    tag: "New",
    aspectClass: "aspect-[3/4]",
  },
  {
    name: "Linen Table Runner",
    maker: "Fog & Thread",
    price: "€78",
    aspectClass: "aspect-square",
  },
  {
    name: "Stoneware Pouring Vessel",
    maker: "Yuri Nomura",
    price: "¥12,600",
    aspectClass: "aspect-[4/5]",
  },
  {
    name: "Hand-Forged Brass Spoon",
    maker: "Ōji Masanori",
    price: "¥6,200",
    tag: "Limited",
    aspectClass: "aspect-[3/4]",
  },
  {
    name: "Indigo Cushion Cover",
    maker: "Buaisou",
    price: "¥9,800",
    aspectClass: "aspect-square",
  },
  {
    name: "Cedar Incense Holder",
    maker: "Kōbi Workshop",
    price: "¥3,400",
    aspectClass: "aspect-[4/5]",
  },
] as const;

export function Collection() {
  return (
    <section
      id="collection"
      className="bg-parchment px-6 py-20 dark:bg-ink lg:px-12 lg:py-32"
      aria-labelledby="collection-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between lg:mb-20">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-walnut">
              The collection
            </p>
            <h2
              id="collection-heading"
              className="font-display text-3xl text-ink dark:text-parchment lg:text-5xl"
            >
              Everyday objects,
              <br />
              carefully made
            </h2>
          </div>
          <a
            href="#collection"
            className="self-start text-sm tracking-wide text-walnut transition-colors hover:text-ink dark:hover:text-parchment sm:self-auto"
          >
            View all →
          </a>
        </div>

        {/* Product grid — staggered for visual rhythm */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {PRODUCTS.map((product, i) => (
            <ProductCard
              key={product.name}
              {...product}
              className={i % 3 === 1 ? "lg:mt-12" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
