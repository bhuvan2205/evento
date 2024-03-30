import Link from "next/link";

type PaginationControlsProps = {
	prevPath: string;
	nextPath: string;
};

export default function PaginationControls({
	prevPath,
	nextPath,
}: PaginationControlsProps) {
	const btnStyles = `bg-white/5 px-5 py-3 text-white rounded-md opacity-75 transition text-sm hover:opacity-100`;
	return (
		<section className="flex justify-between w-full">
			{prevPath ? (
				<Link href={prevPath} className={btnStyles}>
					Previous
				</Link>
			) : (
				<span />
			)}
			{nextPath && (
				<Link href={nextPath} className={btnStyles}>
					Next
				</Link>
			)}
		</section>
	);
}
