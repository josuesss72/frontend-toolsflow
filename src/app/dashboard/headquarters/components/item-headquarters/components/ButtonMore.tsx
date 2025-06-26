"use client";
import React from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	DropdownMenuCheckboxItem,
	DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

type Checked = string;

const ButtonMore = ({ checked }: { checked: Checked }) => {
	const [showStatusBar, setShowStatusBar] = React.useState(
		checked === "ACTIVE" ? true : false
	);
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="text-gray-500 hover:text-gray-300 cursor-pointer">
				<span className="text-3xl">.</span>
				<span className="text-3xl">.</span>
				<span className="text-3xl">.</span>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="bg-[var(--background)] text-white border-[var(--border-color)]">
				<DropdownMenuCheckboxItem
					checked={showStatusBar}
					onCheckedChange={(checked) => setShowStatusBar(checked)}
					className="cursor-pointer"
				>
					Activo
				</DropdownMenuCheckboxItem>
				<DropdownMenuSeparator className="bg-[var(--border-color)]" />
				<DropdownMenuItem className="cursor-pointer">Eliminar</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default ButtonMore;
