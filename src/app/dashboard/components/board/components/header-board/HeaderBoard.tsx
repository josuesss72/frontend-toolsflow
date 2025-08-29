import React from "react";
import SalesToday from "./components/SalesToday";
import SalesMonth from "./components/SalesMonth";
import StockLow from "./components/StockLow";
import ExpireProduct from "./components/ExpireProduct";

const HeaderBoard = () => {
	return (
		<header className="grid grid-cols-4 grid-rows-1 col-span-8 row-start-2 gap-4">
			<SalesToday />
			<SalesMonth />
			<StockLow />
			<ExpireProduct />
		</header>
	);
};

export default HeaderBoard;
