import EventList from "@/components/eventlist";
import H1 from "@/components/h1";
import { EventoEvent } from "@/lib/type";
import { capitalize } from "@/lib/utils";

type EventsPageProps = {
	params: {
		city: string;
	};
};

export default async function Page({ params }: EventsPageProps) {
	const { city } = params;
	const res = await fetch(
		`https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
	);
	const events: EventoEvent[] = await res.json();

	return (
		<main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
			<H1 className="mb-28">
				{city === "all" ? "All Events" : `Events in ${capitalize(city)}`}
			</H1>
			<EventList events={events} />
		</main>
	);
}
