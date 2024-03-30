"use client";

import H1 from "@/components/h1";
import { useEffect } from "react";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.log(error);
	}, [error]);
	return (
		<main className="text-center py-24">
			<H1 className="mb-5">Something went wrong!</H1>
			<button className="bg-white/50 text-white px-4 py-3 rounded-sm opacity-75 transition hover:opacity-100" onClick={reset}>Try again</button>
		</main>
	);
}