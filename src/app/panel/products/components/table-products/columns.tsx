"use client";
import ButtonActions from "@/app/components/tables/components/ButtonActions";
import { Product } from "@/domain/entities/product/product.entity";
import { ColumnDef } from "@tanstack/react-table";
import { Link2Icon } from "lucide-react";
import Link from "next/link";

export const columnsProducts: ColumnDef<Product>[] = [
	{
		accessorKey: "id",
		header: "Ver",
		cell: ({ row }) => {
			return (
				<Link href={`/panel/products/detail/${row.original.id}`}>
					<Link2Icon className="text-blue-500 h-4 w-4" />
				</Link>
			);
		},
	},
	{
		accessorKey: "name",
		header: "PRODUCTO",
	},
	{
		accessorKey: "code",
		header: "CODIGO",
	},
	{
		accessorKey: "category",
		header: "CATEGORIA",
		cell: ({ row }) => {
			return <p>{row.original.category?.name || "Ninguna"}</p>;
		},
	},
	{
		accessorKey: "state",
		header: "ESTADO",
		cell: ({ row }) => {
			const state =
				row.original.state === "AVALIBLE" ? (
					<p className="bg-green-500/50 font-semibold p-1 rounded w-fit">
						Disponible
					</p>
				) : (
					<p className="bg-red-500/50 font-semibold p-1 rounded w-fit">
						No disponible
					</p>
				);
			return state;
		},
	},
	{
		accessorKey: "actions",
		header: "ACCIONES",
		enableHiding: false,
		cell: ({ row }) => {
			return <ButtonActions row={row} />;
		},
	},
];
