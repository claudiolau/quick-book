import type { SVGProps } from "react";

export function InfoIcon(
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="10" />
			<title>InfoIcon</title>
			<path d="M12 16v-4" />
			<path d="M12 8h.01" />
		</svg>
	);
}
