import SkeletonCard from "@/components/skeleton-card";

export default function Loading() {
	return (
		<div className="flex flex-wrap justify-center mx-auto px-[20px] py-24 max-w-[1100px] gap-20">
			{[...Array(6)]?.map((_, i: number) => (
				<SkeletonCard key={`card-${i}`} />
			))}
		</div>
	);
}
