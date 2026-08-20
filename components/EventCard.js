import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";

export default function EventCard({ event }) {
  const date = new Intl.DateTimeFormat("en", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(`${event.date}T12:00:00`));
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-base-content/10 bg-base-200/45" data-reveal>
      <Link href={`/events/${event.slug}`} className="grid md:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-64 overflow-hidden bg-base-300">
          <Image src={event.image} alt={`${event.title} event`} fill className="object-cover transition duration-500 group-hover:scale-[1.025]" sizes="(max-width: 768px) 100vw, 45vw" />
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-8">
          <span className="badge badge-primary badge-outline w-fit">{event.status}</span>
          <h3 className="mt-5 text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">{event.title}</h3>
          <p className="mt-4 leading-7 text-base-content/60">{event.summary}</p>
          <div className="mt-6 grid gap-2 text-sm text-base-content/55">
            <span className="inline-flex items-center gap-2"><CalendarDays size={16} /> {date}</span>
            <span className="inline-flex items-center gap-2"><MapPin size={16} /> {event.location}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
