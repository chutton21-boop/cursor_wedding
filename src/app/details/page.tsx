import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import { Fragment } from "react";

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
        className="border-t border-border bg-bg px-8 py-12"
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
            <div className="mx-auto grid max-w-2xl grid-cols-2 gap-y-10">
              {TIMELINE.map(({ date, description }, i) => (
                <Fragment key={i}>
                  <p className="pr-8 text-right font-body text-body-m font-semibold text-mutedText">
                    {date}
                  </p>
                  <p className="pl-8 text-left font-body text-body-m text-text">
                    {description}
                  </p>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
