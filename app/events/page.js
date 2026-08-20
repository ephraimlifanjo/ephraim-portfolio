import Container from "@/components/Container";
import EventCard from "@/components/EventCard";
import SectionHeading from "@/components/SectionHeading";
import { getContent } from "@/lib/content";

export const metadata = {
  title: "Events",
  description: "Events, technology bootcamps and community participation by Ephraim Lifanjo Sewa.",
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  const content = getContent();
  const events = [...content.events].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <section className="section-space min-h-[70svh]">
      <Container>
        <SectionHeading eyebrow={content.copy.eventsPageEyebrow} title={content.copy.eventsPageTitle} description={content.copy.eventsPageDescription} />
        <div className="mt-10 space-y-6">{events.map((event) => <EventCard key={event.slug} event={event} />)}</div>
      </Container>
    </section>
  );
}
