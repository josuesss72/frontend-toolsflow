import React from "react";
import { styleHeaderBoard } from "../styles";
import { AlertCircleIcon } from "lucide-react";

const ExpireProduct = () => {
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
			<div className={`${CONTAINER_ICON} bg-red-400/50`}>
				<AlertCircleIcon className={`${ICON}`} />
			</div>
			<div className={`${CONTAINER_CONTENT}`}>
				<p className={`${TEXT_TITLE}`}>Productos por vencer</p>
				<p className={`${TEXT_VALUE}`}>0 Productos</p>
			</div>
		</article>
	);
};

export default ExpireProduct;
