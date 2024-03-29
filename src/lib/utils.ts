import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { EventoEvent } from "./type";
import { BASE_API_URL } from "@/constants/query";

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
	const res = await fetch(`${BASE_API_URL}/api/events/${slug}`);
	const event: EventoEvent = await res.json();
	return event;
};

export const getEvents = async (city: string) => {
	const res = await fetch(`${BASE_API_URL}/api/events?city=${city}`);
	const events: EventoEvent[] = await res.json();
	return events;
};
