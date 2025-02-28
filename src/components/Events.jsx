import Header from "./Header";
import eventsList from "../data/eventsList.json";

const EventCard = ({ event }) => (
  <article className="grid grid-cols-[1fr_2fr] grid-rows-1 border-b-1 border-b-[#8f8f8f] pb-2">
    <div className="grid grid-cols-[1fr_2fr] grid-rows-[28px_28px]">
      <h3 className="font-title row-span-2 flex items-start text-5xl">
        {event.number_day}
      </h3>
      <small>{event.week_day_name}</small>
      <small>{event.time}</small>
    </div>
    <div>
      <p className="font-semibold">{event.title_event}</p>
      <small>{event.description}</small>
      <div className="mt-1.5 flex flex-row justify-between">
        <small className="italic opacity-80">{event.category}</small>
        <small className="italic opacity-80">{event.price}</small>
      </div>
    </div>
  </article>
);

const DisplayEvents = () => (
  <section className="space-y-8 px-5">
    <h2 className="font-title text-primaryBrighter text-3xl">March</h2>
    {eventsList.map((event, i) => (
      <EventCard key={i} event={event} />
    ))}
  </section>
);

export function Events() {
  return (
    <aside className="bg-dark text-light font-paragraph dn-scrollbar-hidden h-screen max-h-[calc(100vh-80px)] space-y-6 overflow-auto py-12">
      <Header title="Events" hierarchy="h1" color="light" />
      <DisplayEvents />
    </aside>
  );
}
