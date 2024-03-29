import H1 from "@/components/h1";
import { UNSPLASH_API_IMAGE_URL } from "@/constants/query";
import { EventoEvent } from "@/lib/type";
import { getEvent } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import { ReactNode } from "react";

type EventPageProps = {
	params: {
		slug: string;
	};
};

export async function generateMetadata({
	params,
}: EventPageProps): Promise<Metadata> {
	const event: EventoEvent = await getEvent(params.slug);
	return {
		title: event.name,
	};
}

export default async function EventPage({ params }: EventPageProps) {
	const { slug } = params;
	const event: EventoEvent = await getEvent(slug);

	const { name, date, description, location, organizerName } = event || {};

	return (
		<main>
			<section className="relative overflow-hidden flex justify-center items-center py-14 md:py-20">
				<Image
					src={`${UNSPLASH_API_IMAGE_URL}/400×300?${name}`}
					className="object-cover z-0 blur-3xl"
					alt="Event background image"
					fill
					quality={50}
					sizes="(max-width: 1280px) 100vw, 1280px"
					priority
				/>

				<div className="z-1 flex flex-col gap-6 lg:gap-16 lg:flex-row relative">
					<Image
						src={`${UNSPLASH_API_IMAGE_URL}/400×300?${name}`}
						alt={name}
						width={350}
						height={250}
						className="rounded-xl border-2 border-white/50 object-cover h-[250px]"
					/>

					<div className="flex flex-col">
						<p className="text-white/75">
							{new Date(date).toLocaleDateString("en-US", {
								weekday: "long",
								month: "long",
								day: "numeric",
							})}
						</p>

						<H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">{name}</H1>

						<p className="whitespace-nowrap text-xl text-white/75">
							Organized by <span className="italic">{organizerName}</span>
						</p>

						<button className="bg-white/20 text-lg capitalize bg-blur mt-5 lg:mt-auto w-[95vw] rounded-md border-white/10 border-2 sm:w-full py-2 state-effects">
							Get tickets
						</button>
					</div>
				</div>
			</section>

			<div className="text-center px-5 py-16 min-h-[75vh]">
				<Section>
					<SectionHeading>About this event</SectionHeading>
					<SectionContent>{description}</SectionContent>
				</Section>
				<Section>
					<SectionHeading>Location</SectionHeading>
					<SectionContent>{location}</SectionContent>
				</Section>
			</div>
		</main>
	);
}

type SectionProps = {
	children: ReactNode;
};

export const Section = ({ children }: SectionProps) => {
	return <section className="mb-12">{children}</section>;
};

export const SectionHeading = ({ children }: SectionProps) => {
	return <h2 className="text-2xl mb-8">{children}</h2>;
};

export const SectionContent = ({ children }: SectionProps) => {
	return (
		<p className="max-w-4xl mx-auto text-lg leading-8 text-white/75">
			{children}
		</p>
	);
};
