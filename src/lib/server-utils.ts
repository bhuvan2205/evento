import "server-only";

import { notFound } from "next/navigation";
import { prisma } from "./db";
import { capitalize } from "./utils";
import { unstable_cache } from "next/cache";

export const getEvent = unstable_cache(async (slug: string) => {
	const event = await prisma.eventoEvent.findUnique({
		where: {
			slug: slug,
		},
	});

	if (!event) {
		return notFound();
	}

	return event;
});

export const getEvents = unstable_cache(async (city: string, page = 1) => {
	const events = await prisma.eventoEvent.findMany({
		where: {
			city: city === "all" ? undefined : capitalize(city),
		},
		orderBy: {
			date: "asc",
		},
		take: 6,
		skip: (page - 1) * 6,
	});

	const totalCount = await prisma.eventoEvent.count({
		where: {
			city: city === "all" ? undefined : capitalize(city),
		},
	});
	return { totalCount, events };
});
