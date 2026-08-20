import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, ExternalLink, MapPin } from "lucide-react";
import Container from "@/components/Container";
import { getContent, getEventBySlug } from "@/lib/content";

export function generateStaticParams() {
  return getContent().events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return {};
  return {
    title: event.metaTitle || event.title,
    description: event.metaDescription || event.summary,
    alternates: { canonical: `/events/${event.slug}` },
    openGraph: { title: event.metaTitle || event.title, description: event.metaDescription || event.summary, images: [{ url: event.socialImage || event.image }] },
  };
}

export default async function EventDetailPage({ params }) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.summary,
    startDate: event.date,
    endDate: event.endDate || event.date,
    eventStatus: event.status.toLowerCase().includes("past") ? "https://schema.org/EventCompleted" : "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: { "@type": "Place", name: event.location },
    image: [`${siteUrl}${event.image}`],
    url: `${siteUrl}/events/${event.slug}`,
    organizer: event.organizer ? { "@type": "Organization", name: event.organizer } : undefined,
  };
  const date = new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(new Date(`${event.date}T12:00:00`));

  return (
    <article className="pb-24 pt-10 sm:pt-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replaceAll("<", "\\u003c") }} />
      <Container>
        <Link href="/events" className="btn btn-ghost btn-sm rounded-full -ml-3"><ArrowLeft size={16} /> Back to events</Link>
        <div className="mt-8 max-w-5xl">
          <span className="badge badge-primary badge-outline">{event.status}</span>
          <h1 className="mt-5 text-balance text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">{event.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-base-content/62">{event.summary}</p>
          <div className="mt-7 flex flex-wrap gap-4 text-sm text-base-content/58">
            <span className="inline-flex items-center gap-2"><CalendarDays size={17} /> {date}</span>
            <span className="inline-flex items-center gap-2"><MapPin size={17} /> {event.location}</span>
          </div>
        </div>
        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[2.5rem] border border-base-content/10 bg-base-200">
          <Image src={event.image} alt={event.title} fill priority className="object-cover" sizes="100vw" />
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-[-0.03em]">About the event</h2>
            <p className="mt-4 text-base leading-8 text-base-content/62">{event.description}</p>
          </div>
          {event.registrationUrl ? <Link href={event.registrationUrl} className="btn btn-primary rounded-full" target="_blank" rel="noreferrer">Event link <ExternalLink size={17} /></Link> : null}
        </div>
      </Container>
    </article>
  );
}
