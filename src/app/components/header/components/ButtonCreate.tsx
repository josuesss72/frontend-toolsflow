"use client";
import { Plus } from "lucide-react";
import React from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ButtonCreate = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="btn_segundary">
				<Plus className="h-4 w-4" />
				Crear
			</DropdownMenuTrigger>
			<DropdownMenuContent className="bg-black text-white border-gray-700">
				{/* <DropdownMenuItem className="hover:bg-gray-700">
					<Link href={"/dashboard/products"}>Productos</Link>
				</DropdownMenuItem>
				<DropdownMenuItem className="hover:bg-gray-700">
					<Link href={"/dashboard/headquarters"}>Sucursales</Link>
				</DropdownMenuItem> */}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default ButtonCreate;
