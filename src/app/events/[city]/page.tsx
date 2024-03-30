import EventList from "@/components/event-list";
import H1 from "@/components/h1";
import { capitalize } from "@/lib/utils";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import * as z from "zod";

type PageProps = {
	params: {
		city: string;
	};
};

type EventsPageProps = PageProps & {
	searchParams: {
		[key: string]: string | undefined | string[];
	};
};

export function generateMetadata({ params }: PageProps): Metadata {
	return {
		title: params?.city === "all" ? "All Events" : `Events in ${params?.city}`,
	};
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function Page({ params, searchParams }: EventsPageProps) {
	const { city } = params;
	const parsePage = pageNumberSchema.safeParse(searchParams.page);

	if (!parsePage.success) {
		throw new Error("Invalid page number");
	}

	return (
		<main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
			<H1 className="mb-28">
				{city === "all" ? "All Events" : `Events in ${capitalize(city)}`}
			</H1>
			<Suspense key={`${city}?page=${parsePage.data}`} fallback={<Loading />}>
				<EventList city={city} page={parsePage.data} />
			</Suspense>
		</main>
	);
}
