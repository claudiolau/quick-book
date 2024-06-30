import type { PropsWithChildren } from "react";

export const CenterLayout = ({ children }: PropsWithChildren) => {
	return (
		<div className="flex items-center justify-center min-h-screen">
			{children}
		</div>
	);
};
