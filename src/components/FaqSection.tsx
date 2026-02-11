const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "When should I RSVP by?",
    answer:
      "Please RSVP by August 1, 2026 so we can finalize our headcount and seating.",
  },
  {
    question: "Is there transportation to and from the ceremony?",
    answer:
      "We’re not providing shuttle service. The venue is easy to reach by subway, or by cab, Uber, or Lyft.",
  },
  {
    question: "Where should I stay?",
    answer:
      "We don’t have a room block. Check the Travel page for area recommendations. Note that some buildings have Airbnb restrictions.",
  },
  {
    question: "Can I bring a date?",
    answer:
      "We’re keeping the guest list tight and can’t accommodate additional plus-ones unless your invitation specifically includes a guest.",
  },
  {
    question: "What's the dress code?",
    answer:
      "Semi-formal. The ceremony may be partly outdoors, so shoes you’re comfortable in are a good idea.",
  },
  {
    question: "What's the best airport to use?",
    answer:
      "New York is served by LaGuardia (LGA), JFK, and Newark (EWR). All work; choose based on your airline and where you’re staying.",
  },
  {
    question: "Where are you registered?",
    answer:
      "Your presence is the best gift. If you’d like to give something, contributing toward travel or our stay would mean a lot.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="border-t border-border bg-bg px-6 py-12">
      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <h2 className="font-heading text-heading-s text-black md:mb-0">
          FAQ
        </h2>
        <div className="flex flex-col divide-y divide-border">
          {FAQ_ITEMS.map(({ question, answer }) => (
            <div key={question} className="flex flex-col gap-2 py-6 first:pt-0 last:pb-0">
              <h3 className="font-heading text-heading-s text-black">
                {question}
              </h3>
              <p className="font-body text-body-s text-text">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
