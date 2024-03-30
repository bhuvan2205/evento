import Link from "next/link";
import React from "react";

export default function Page() {
	return (
		<main className="flex justify-center items-center flex-col min-h-[500px]">
			<h1 className="mb-8 text-6xl">Page not Found!</h1>
			<Link href="/" className="bg-white/50 text-white px-4 py-3 rounded-sm opacity-75 transition hover:opacity-100">Go to Home</Link>
		</main>
	);
}
