import React from "react";
import { styleHeaderBoard } from "../styles";
import { AlertTriangle } from "lucide-react";

const StockLow = () => {
	const {
		ITEM_CARD,
		CONTAINER_ICON,
		ICON,
		CONTAINER_CONTENT,
		TEXT_TITLE,
		TEXT_VALUE,
	} = styleHeaderBoard;
	return (
		<article className={`${ITEM_CARD}`}>
			<div className={`${CONTAINER_ICON} bg-yellow-400/50`}>
				<AlertTriangle className={`${ICON}`} />
			</div>
			<div className={`${CONTAINER_CONTENT}`}>
				<p className={`${TEXT_TITLE}`}>Stock bajo</p>
				<p className={`${TEXT_VALUE}`}>0 Productos</p>
			</div>
		</article>
	);
};

export default StockLow;
