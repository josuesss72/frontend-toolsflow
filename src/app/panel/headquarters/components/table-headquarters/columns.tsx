"use client";
import ButtonActions from "@/app/components/tables/components/ButtonActions";
import { ColumnDef } from "@tanstack/react-table";
import { Link2Icon } from "lucide-react";
import Link from "next/link";
import { Headquarters } from "@/domain/entities/headquarters/headquarters.entity";

export const columnsHeadquarters: ColumnDef<Headquarters>[] = [
	{
		accessorKey: "id",
		header: "Ver",
		cell: ({ row }) => {
			return (
				<Link href={`/dashboard/headquarters/${row.original.id}`}>
					<Link2Icon className="text-blue-500 h-4 w-4" />
				</Link>
			);
		},
	},
	{
		accessorKey: "name",
		header: "SUCURSAL",
	},
	{
		accessorKey: "code",
		header: "CODIGO",
	},
	{
		accessorKey: "address",
		header: "DIRECCION",
	},
	{
		accessorKey: "city",
		header: "CIUDAD",
	},
	{
		accessorKey: "country",
		header: "PAIS",
	},
	{
		accessorKey: "phone",
		header: "TELEFONO",
	},
	{
		accessorKey: "email",
		header: "EMAIL",
	},
	{
		accessorKey: "state",
		header: "ESTADO",
		cell: ({ row }) => {
			const state =
				row.original.state === "ACTIVE" ? (
					<p className="bg-green-500/50 font-semibold p-1 rounded w-fit">
						Activo
					</p>
				) : (
					<p className="bg-red-500/50 font-semibold p-1 rounded w-fit">
						Inactivo
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
