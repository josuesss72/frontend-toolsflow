import React from "react";

const LogoSmall = ({
	className,
	dark,
}: {
	className?: string;
	dark?: boolean;
}) => {
	return (
		<span
			className={`${className} ${
				dark ? "text-black" : "text-blue-500/80"
			} font-bold`}
		>
			Gesnigo
		</span>
	);
};

export default LogoSmall;
