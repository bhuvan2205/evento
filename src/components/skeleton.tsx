import { cn } from "@/lib/utils";

export default function Skeleton({ className }: { className?: string }) {
	return (
		<div
			className={cn(
				"h-4 animate-pulse w-[550px] rounded-md bg-white/5",
				className
			)}
		/>
	);
}
