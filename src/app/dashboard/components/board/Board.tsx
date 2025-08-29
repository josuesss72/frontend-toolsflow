import React from "react";
import HeaderBoard from "./components/header-board/HeaderBoard";
import Sales from "./components/sales/Sales";

const Board = () => {
	return (
		<article className="grid grid-cols-8 grid-rows-[auto_1fr_1fr_1fr_1fr] h-screen w-[80%] ml-auto mr-8 mt-16 gap-4">
			<h1 className="text-3xl font-bold">Dashboard</h1>
			<HeaderBoard />
			<Sales />
		</article>
	);
};

export default Board;
