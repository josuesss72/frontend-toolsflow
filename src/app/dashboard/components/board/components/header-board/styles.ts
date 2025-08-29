import { styleBoard } from "../../styles";

export const styleHeaderBoard = {
	ITEM_CARD: `flex items-center gap-4 ${styleBoard.CARD}`,
	CONTAINER_ICON: "h-12 w-12 flex items-center justify-center rounded-full",
	ICON: "h-[30px] w-[30px]",
	CONTAINER_CONTENT: "flex flex-col gap-2",
	TEXT_TITLE: "text-sm font-light text-[var(--text-color-segundary)]",
	TEXT_VALUE: "text-xl font-semibold text-[var(--text-color-primary)]",
};
