"use client";

import { UNSPLASH_API_IMAGE_URL } from "@/constants/query";
import { EventoEvent } from "@prisma/client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type EventCardProps = {
	event: EventoEvent;
};

const MotionLink = motion(Link);

export default function EventCard({ event }: EventCardProps) {
	const { name, slug, location, date, organizerName } = event || {};
	const linkRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: linkRef,
		offset: ["0 1", "1.5 1"],
	});

	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

	return (
		<MotionLink
			href={`/event/${slug}`}
			ref={linkRef}
			className="flex-1 basis-80 h-[380px] max-w-[500px]"
			style={{
				// @ts-ignore
				scale: scaleProgress,
				// @ts-ignore
				opacity: opacityProgress,
			}}
			initial={{
				scale: 0.8,
				opacity: 0,
			}}>
			<section className="w-full h-full flex flex-col bg-white/[3%] rounded-xl overflow-hidden relative state-effects">
				<Image
					src={`${UNSPLASH_API_IMAGE_URL}/500×400?${name}`}
					alt={name}
					width={500}
					height={280}
					className="h-[60%] object-cover"
				/>

				<div className="flex flex-col flex-1 justify-center items-center">
					<h2 className="text-2xl font-semibold">{name}</h2>
					<p className="italic text-white/75">By {organizerName}</p>
					<p className="text-sm text-white/50 mt-4">{location}</p>
				</div>

				<section className="absolute flex flex-col justify-center items-center left-[12px] top-[12px] h-[45px] w-[45px] bg-black/30 rounded-md">
					<p className="text-xl font-bold -mb-[5px]">
						{new Date(date).toLocaleDateString("en-US", {
							day: "2-digit",
						})}
					</p>
					<p className="text-xs uppercase text-accent">
						{new Date(date).toLocaleDateString("en-US", {
							month: "short",
						})}
					</p>
				</section>
			</section>
		</MotionLink>
	);
}
