import React from "react";

interface Props {
	children?: React.ReactNode;
}

const Main = ({ children }: Props) => {
	return (
		<main className="page flex flex-col gap-4 max-w-[1000px] min-w-[800px] mx-auto">
			{children}
		</main>
	);
};

export default Main;
