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
  {
    id: "4",
    name: "Sunset Bar",
    description: "Cocktail bar",
    googleMapsUrl: GOOGLE_MAPS_LIST_URL,
    imageUrl: "https://picsum.photos/seed/place4/200/200",
  },
  {
    id: "5",
    name: "Green Garden Cafe",
    description: "Cafe",
    googleMapsUrl: GOOGLE_MAPS_LIST_URL,
    imageUrl: "https://picsum.photos/seed/place5/200/200",
  },
  {
    id: "6",
    name: "Harbor Seafood",
    description: "Seafood restaurant",
    googleMapsUrl: GOOGLE_MAPS_LIST_URL,
    imageUrl: "https://picsum.photos/seed/place6/200/200",
  },
  {
    id: "7",
    name: "Morning Bakery",
    description: "Bakery",
    googleMapsUrl: GOOGLE_MAPS_LIST_URL,
    imageUrl: "https://picsum.photos/seed/place7/200/200",
  },
  {
    id: "8",
    name: "Park View Diner",
    description: "Diner",
    googleMapsUrl: GOOGLE_MAPS_LIST_URL,
    imageUrl: "https://picsum.photos/seed/place8/200/200",
  },
  {
    id: "9",
    name: "Downtown Pizza",
    description: "Pizza restaurant",
    googleMapsUrl: GOOGLE_MAPS_LIST_URL,
    imageUrl: "https://picsum.photos/seed/place9/200/200",
  },
  {
    id: "10",
    name: "Riverside Tavern",
    description: "Pub",
    googleMapsUrl: GOOGLE_MAPS_LIST_URL,
    imageUrl: "https://picsum.photos/seed/place10/200/200",
  },
  {
    id: "11",
    name: "The Corner Bistro",
    description: "Bistro",
    googleMapsUrl: GOOGLE_MAPS_LIST_URL,
    imageUrl: "https://picsum.photos/seed/place11/200/200",
  },
  {
    id: "12",
    name: "Luna Wine Bar",
    description: "Wine bar",
    googleMapsUrl: GOOGLE_MAPS_LIST_URL,
    imageUrl: "https://picsum.photos/seed/place12/200/200",
  },
  {
    id: "13",
    name: "Maple Brunch Spot",
    description: "Brunch",
    googleMapsUrl: GOOGLE_MAPS_LIST_URL,
    imageUrl: "https://picsum.photos/seed/place13/200/200",
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
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2" aria-label="Favorite places list">
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
