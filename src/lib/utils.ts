import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { prisma } from "./db";
import { notFound } from "next/navigation";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function capitalize(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export const sleep = (delay = 1000) => {
	return new Promise((resolve) => {
		setTimeout(resolve, delay);
	});
};

export const getEvent = async (slug: string) => {
	const event = await prisma.eventoEvent.findUnique({
		where: {
			slug: slug,
		},
	});

	if (!event) {
		return notFound();
	} 

	return event;
};

export const getEvents = async (city: string, page = 1) => {
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
};
