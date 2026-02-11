// Shared list URL – used for iframe embed and "View all places" link.
// If the short link cannot be embedded (X-Frame-Options), the CTA below still opens the list in a new tab.
const GOOGLE_MAPS_LIST_URL = "https://maps.app.goo.gl/8RGsWaKvgUW8vYyS6";

const PLACES: {
  id: string;
  name: string;
  description: string;
  googleMapsUrl: string;
  imageUrl: string;
}[] = [
  {
    id: "1",
    name: "Hometown BBQ",
    description: "Barbecue restaurant",
    googleMapsUrl: GOOGLE_MAPS_LIST_URL,
    imageUrl: "https://picsum.photos/seed/place1/200/200",
  },
  {
    id: "2",
    name: "Variety Coffee Roasters",
    description: "Coffee shop",
    googleMapsUrl: GOOGLE_MAPS_LIST_URL,
    imageUrl: "https://picsum.photos/seed/place2/200/200",
  },
  {
    id: "3",
    name: "Placeholder",
    description: "Restaurant",
    googleMapsUrl: GOOGLE_MAPS_LIST_URL,
    imageUrl: "https://picsum.photos/seed/place3/200/200",
  },
];

export default function WhatToDoSection() {
  return (
    <section
      id="what-to-do"
      className="border-t border-border bg-bg px-6 py-12"
      aria-labelledby="what-to-do-heading"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-4">
          <h2
            id="what-to-do-heading"
            className="font-heading text-heading-s text-black text-center"
          >
            While you&apos;re here, try our favorite places
          </h2>
          <a
            href={GOOGLE_MAPS_LIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-fit rounded-full border border-border bg-surface px-5 py-2.5 font-body text-body-s text-mutedText hover:bg-muted"
          >
            View all places on Google Maps
          </a>
        </div>
        <div className="mt-10">
          <ul className="flex flex-col gap-4" aria-label="Favorite places list">
            {PLACES.map((place) => (
              <li key={place.id}>
                <article className="flex flex-row items-center gap-4 overflow-hidden rounded-[12px] border border-border bg-surface p-4">
                  <div className="flex size-[100px] shrink-0 items-center justify-center overflow-hidden rounded-[12px] bg-muted">
                    <img
                      src={place.imageUrl}
                      alt=""
                      className="h-full w-full object-cover"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col gap-2">
                    <h3 className="font-heading text-heading-xs text-black">
                      {place.name}
                    </h3>
                    <p className="font-body text-body-s text-text">
                      {place.description}
                    </p>
                    <a
                      href={place.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block w-fit rounded-full border border-border bg-surface px-4 py-2 font-body text-body-s text-mutedText hover:bg-muted"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
