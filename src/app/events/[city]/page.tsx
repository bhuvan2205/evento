import EventList from "@/components/event-list";
import H1 from "@/components/h1";
import { capitalize } from "@/lib/utils";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";

type EventsPageProps = {
	params: {
		city: string;
	};
};

export function generateMetadata({ params }: EventsPageProps): Metadata {
	return {
		title: params?.city === "all" ? "All Events" : `Events in ${params?.city}`,
	};
}

export default async function Page({ params }: EventsPageProps) {
	const { city } = params;

	return (
		<main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
			<H1 className="mb-28">
				{city === "all" ? "All Events" : `Events in ${capitalize(city)}`}
			</H1>
			<Suspense fallback={<Loading />}>
				<EventList city={city} />
			</Suspense>
		</main>
	);
}
