"use client";
import { Presentation } from "@/domain/entities/presentation/presentation.entity";
import { ColumnDef } from "@tanstack/react-table";

export const columnsPresentations: ColumnDef<Presentation>[] = [
	{
		accessorKey: "labels",
		header: "Etiquetas",
		cell: ({ row }) => {
			// Realizamos el filter por que viene el label "labels" por defecto
			const labels = row.original.labels.filter((label) => label !== "labels");
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
		accessorKey: "salePrice",
		header: "Precio de venta",
		cell: ({ row }) => {
			return <p className="font-semibold">{row.original.salePrice}</p>;
		},
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
		accessorKey: "measureSale",
		header: "Medidas",
		cell: ({ row }) => {
			const medidas = row.original.measureSale;
			return (
				<ul className="flex gap-1 justify-center">
					{medidas.map((measure) => (
						<li
							className="text-xs p-1 bg-orange-500/80 rounded border border-gray-700"
							key={measure}
						>
							{measure}
						</li>
					))}
				</ul>
			);
		},
	},
	{
		accessorKey: "stock",
		header: "Stock",
		cell: ({ row }) => {
			return (
				<p className="font-semibold">{row.original.StockOfAllInventaries}</p>
			);
		},
	},
	{
		accessorKey: "supplier",
		header: "Proveedor",
		cell: ({ row }) => {
			return (
				<p className="font-semibold">{row.original.supplier?.companyName}</p>
			);
		},
	},
	// {
	// 	accessorKey: "actions",
	// 	enableHiding: false,
	// 	cell: ({ row }) => {
	// 		const presentation = row.original;
	// 		return (
	// 			<DropdownMenu>
	// 				<DropdownMenuTrigger asChild>
	// 					<Button variant="ghost" className="h-8 w-8 p-0">
	// 						<span className="sr-only">Open menu</span>
	// 						<MoreHorizontal />
	// 					</Button>
	// 				</DropdownMenuTrigger>
	// 				<DropdownMenuContent align="end">
	// 					<DropdownMenuLabel>Actions</DropdownMenuLabel>
	// 					<DropdownMenuItem
	// 						onClick={() => navigator.clipboard.writeText(presentation.id!)}
	// 					>
	// 						Copy ID
	// 					</DropdownMenuItem>
	// 					<DropdownMenuSeparator />
	// 					<DropdownMenuItem>View customer</DropdownMenuItem>
	// 					<DropdownMenuItem>View payment details</DropdownMenuItem>
	// 				</DropdownMenuContent>
	// 			</DropdownMenu>
	// 		);
	// 	},
	// },
];
