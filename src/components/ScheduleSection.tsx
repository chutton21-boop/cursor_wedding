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

function EventCard({ dateTime, title, description, location }: Event) {
  return (
    <article className="flex flex-col gap-4 border-b border-border py-8 first:pt-0 last:border-b-0">
      <p className="font-body text-body-s text-muted">{dateTime}</p>
      <h3 className="font-heading text-heading-xs text-text">{title}</h3>
      <p className="font-body text-body-s text-text">{description}</p>
      <p className="font-body text-body-s text-muted">{location}</p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="#"
          className="rounded-full border border-border bg-surface px-4 py-2 font-body text-body-s text-text hover:bg-muted"
        >
          Get directions
        </Link>
        <Link
          href="#"
          className="rounded-full border border-border bg-surface px-4 py-2 font-body text-body-s text-text hover:bg-muted"
        >
          Add to calendar
        </Link>
      </div>
    </article>
  );
}

export default function ScheduleSection() {
  return (
    <section id="schedule" className="border-t border-border bg-bg px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-heading text-heading-s text-text mb-10">
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
