import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";

const MONTHS: Record<string, number> = {
  jan: 0, january: 0, feb: 1, february: 1, mar: 2, march: 2, apr: 3, april: 3,
  may: 4, jun: 5, june: 5, jul: 6, july: 6, aug: 7, august: 7, sep: 8, sept: 8,
  september: 8, oct: 9, october: 9, nov: 10, november: 10, dec: 11, december: 11,
};

/** Parse timeline date string to months since year 0 (for spacing math). */
function parseTimelineDate(dateStr: string): number {
  const s = dateStr.trim().toLowerCase();
  const yearMatch = s.match(/(?:^|\s)(20\d{2})\b/);
  const year = yearMatch ? parseInt(yearMatch[1], 10) : new Date().getFullYear();
  for (const [name, month] of Object.entries(MONTHS)) {
    if (s.startsWith(name) || s.includes(" " + name + " ")) {
      return year * 12 + month;
    }
  }
  return year * 12;
}

const PX_PER_MONTH = 5;
const MIN_GAP_PX = 24;

const TIMELINE: { date: string; description: string }[] = [
  { date: "July 2018", description: "Greg and Chloe match on Tinder" },
  { date: "July 2018", description: "Chloe ghosts Greg" },
  { date: "April 2019", description: "Greg and Chloe match on Hinge" },
  { date: "April 2019", description: "Greg and Chloe first date at Rockarolla" },
  { date: "Dec 2019", description: "Greg and Chloe come to Pittsburgh" },
  { date: "Jan 2020", description: "Chloe meets Greg's family in Chicago" },
  {
    date: "March 2020",
    description:
      "Greg moves in with Chloe and her parents for 9 months. It was as insane as it sounds.",
  },
  {
    date: "March 28 2021",
    description:
      "Greg and Chloe visit Montauk and Greg learns Brooklyn is on Long Island",
  },
  { date: "May 2021", description: "Greg and Chloe move in together" },
  {
    date: "June 2022",
    description:
      "Greg and Chloe get pushed out of their apartment by Lindsay Lohan's brother and move into a new apartment a block away.",
  },
  {
    date: "2023",
    description: "Greg and Chloe travel to Vietnam with Chloe's family",
  },
  {
    date: "Oct 2023",
    description: "Greg and Chloe travel to Orlando with Greg's family",
  },
  {
    date: "Jan 2024",
    description: "Greg and Chloe travel to Vietnam with Chloe's family",
  },
  { date: "July 2024", description: "Greg and Chloe meet Cork" },
  {
    date: "Sept 2025",
    description:
      "Greg proposes on the bridge Chloe's Dad built over the creek in their back yard. Chloe cries all weekend.",
  },
];

export default function DetailsPage() {
  return (
    <main className="min-h-screen bg-bg font-body text-text">
      <Hero />
      <Nav activeLabel="Love story" />
      <section
        id="love-story"
        className="scroll-mt-28 border-t border-border bg-bg px-8 py-12"
      >
        <div className="mx-auto max-w-[960px]">
          <h2 className="text-center font-heading text-heading-s text-black">
            How it began
          </h2>
          <div className="relative mt-12">
            <div
              className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-px bg-border"
              aria-hidden
            />
            <div className="mx-auto flex max-w-2xl flex-col">
              {TIMELINE.map(({ date, description }, i) => {
                const monthsToNext =
                  i < TIMELINE.length - 1
                    ? parseTimelineDate(TIMELINE[i + 1].date) -
                      parseTimelineDate(date)
                    : 0;
                const gapPx = Math.max(
                  MIN_GAP_PX,
                  Math.round(monthsToNext * PX_PER_MONTH)
                );
                return (
                  <div
                    key={i}
                    className="grid grid-cols-2 gap-x-4"
                    style={{ marginBottom: i < TIMELINE.length - 1 ? gapPx : 0 }}
                  >
                    <p className="pr-8 text-right font-body text-body-m text-[#1d1d1d]">
                      {date}
                    </p>
                    <p className="pl-8 text-left font-body text-body-m text-[#1d1d1d]">
                      {description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
