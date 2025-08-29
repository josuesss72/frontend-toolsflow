import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const NavigationBackRoute = ({
	href,
	text,
}: {
	href: string;
	text: string;
}) => {
	return (
		<nav className="p-4">
			<Link
				href={href}
				className="text-blue-400/80 flex items-center gap-2 w-fit"
			>
				<ArrowLeft className="w-4 h-4" /> {text}
			</Link>
		</nav>
	);
};

export default NavigationBackRoute;
