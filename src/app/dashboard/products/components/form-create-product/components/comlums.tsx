"use client";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Presentation = {
	salePrice: string;
	purchasePrice: string;
	iva: string;
	stock: string;
	maxAllowed: string;
	minAllowed: string;
	equivalence: string;
	medidas: [
		{
			value: string;
			label: string;
		},
		...{
			value: string;
			label: string;
		}[]
	];
	labels?: string[] | undefined;
	uid?: string | undefined;
};

export const columnsPresentations: ColumnDef<Presentation>[] = [
	{
		accessorKey: "salePrice",
		header: "Precio de venta",
	},
	{
		accessorKey: "purchasePrice",
		header: "Precio de compra",
	},
	{
		accessorKey: "iva",
		header: "IVA",
	},
	{
		accessorKey: "medidas",
		header: "Medidas",
		cell: ({ row }) => {
			const medidas = row.original.medidas;
			return (
				<ul className="flex gap-1">
					{medidas.map((medida) => (
						<li
							className="text-xs p-1 bg-orange-500/80 rounded border border-gray-700"
							key={medida.value}
						>
							{medida.label}
						</li>
					))}
				</ul>
			);
		},
	},
	{
		accessorKey: "labels",
		header: "Etiquetas",
		cell: ({ row }) => {
			const labels = row.original.labels;
			return (
				<ul className="flex gap-1">
					{labels?.map((label) => (
						<li
							className="text-xs p-1 bg-blue-500/50 rounded border border-gray-700"
							key={label}
						>
							{label}
						</li>
					))}
				</ul>
			);
		},
	},
	{
		accessorKey: "actions",
		enableHiding: false,
		cell: ({ row }) => {
			const presentation = row.original;
			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() => navigator.clipboard.writeText(presentation.uid!)}
						>
							Copy ID
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>View customer</DropdownMenuItem>
						<DropdownMenuItem>View payment details</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
