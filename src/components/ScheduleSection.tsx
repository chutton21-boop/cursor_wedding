import Link from "next/link";

type Event = {
  dateTime: string;
  title: string;
  description: string;
  location: string;
  directionsHref?: string;
};

const EVENTS: Event[] = [
  {
    dateTime: "Fri Oct 9 · 7:00pm - 10:00pm",
    title: "Welcome drinks",
    description: "There will be a few light bites and drinks to kick off the weekend.",
    location: "Brokenland",
    directionsHref:
      "https://www.google.com/maps/place/Broken+Land/@40.7295225,-73.9577526,17z/data=!3m1!4b1!4m6!3m5!1s0x89c259404bff7eaf:0x42b7be6e0fe29b08!8m2!3d40.7295225!4d-73.9577526!16s%2Fg%2F1t_khfx9?entry=ttu",
  },
  {
    dateTime: "Sat Oct 10 · 4:00pm",
    title: "Ceremony",
    description: "We’ll say I do with our nearest and dearest.",
    location: "Venue name",
  },
  {
    dateTime: "Sat Oct 10 · 6:00pm - 11:00pm",
    title: "Reception",
    description: "Dinner, dancing, and celebration.",
    location: "Venue name",
  },
  {
    dateTime: "Sat Oct 10 · 11:00pm - late",
    title: "Afters",
    description: "Keep the party going.",
    location: "TBD",
  },
];

function EventCard({ dateTime, title, description, location, directionsHref }: Event) {
  return (
    <article className="flex flex-col gap-4 border-b border-border py-8 first:pt-0 last:border-b-0">
      <p className="font-body text-body-s text-mutedText">{dateTime}</p>
      <h2 className="font-heading text-heading-s text-black">{title}</h2>
      <p className="font-body text-body-s text-text">{description}</p>
      <p className="font-body text-body-s text-mutedText">{location}</p>
      <div className="flex flex-wrap gap-3">
        <Link
          href={directionsHref ?? "#"}
          target={directionsHref ? "_blank" : undefined}
          rel={directionsHref ? "noopener noreferrer" : undefined}
          className="rounded-full border border-border bg-transparent px-4 py-2 font-body text-body-s text-mutedText hover:bg-muted"
        >
          Get directions
        </Link>
        <Link
          href="#"
          className="rounded-full border border-border bg-transparent px-4 py-2 font-body text-body-s text-mutedText hover:bg-muted"
        >
          Add to calendar
        </Link>
      </div>
    </article>
  );
}

export default function ScheduleSection() {
  return (
    <section id="schedule" className="scroll-mt-28 bg-bg px-8 py-12">
      <div className="mx-auto grid max-w-[960px] grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
        <h2 className="sticky top-24 z-[9] self-start bg-bg pb-4 font-heading text-heading-s text-black md:mb-0">
          Here&apos;s the general plan for the weekend
        </h2>
        <div className="flex flex-col">
          {EVENTS.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
