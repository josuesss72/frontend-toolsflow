import { ChartNoAxesColumnIcon } from "lucide-react";
import React from "react";
import { styleHeaderBoard } from "../styles";

const SalesToday = () => {
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
			<div className={`${CONTAINER_ICON} bg-[var(--segundary-color-400)]`}>
				<ChartNoAxesColumnIcon className={`${ICON}`} />
			</div>
			<div className={`${CONTAINER_CONTENT}`}>
				<p className={`${TEXT_TITLE}`}>Ventas hoy</p>
				<p className={`${TEXT_VALUE}`}>$0000</p>
			</div>
		</article>
	);
};

export default SalesToday;
