"use client";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import React from "react";
import ButtonDelete from "../../buttons/ButtonDelete";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

const ButtonActions = ({ row }: { row: any }) => {
	const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="h-8 w-8 p-0 cursor-pointer">
					<span className="sr-only">Open menu</span>
					<MoreHorizontal />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="bg-black text-white border-gray-700"
				align="end"
			>
				<DropdownMenuLabel>Acciones</DropdownMenuLabel>
				<DropdownMenuSeparator className="bg-gray-700" />
				<DropdownMenuCheckboxItem
					className="cursor-pointer"
					checked={showActivityBar}
					onCheckedChange={setShowActivityBar}
				>
					Activo
				</DropdownMenuCheckboxItem>
				<DropdownMenuItem className="cursor-pointer">Editar</DropdownMenuItem>
				<DropdownMenuItem className="cursor-pointer">
					<ButtonDelete data={row.original} apiRoute={"product"} />
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default ButtonActions;
