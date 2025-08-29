"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

interface ButtonDeleteProps<DATA extends { id: string }> {
	data: DATA;
	apiRoute: string;
}

const ButtonDelete = <DATA extends { id: string }>({
	data,
	apiRoute,
}: ButtonDeleteProps<DATA>) => {
	const router = useRouter();

	const handleConfirmDelete = async (data: DATA) => {
		return await axios
			.delete(`/api/${apiRoute}/${data.id}/delete`)
			.then((res) => {
				if (res.data.status.ok) {
					router.refresh();
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<button
			className="cursor-pointer flex items-center gap-2"
			onClick={() => {
				toast("Estas seguro que quieres eliminar este producto?", {
					action: {
						label: "Confirmar",
						onClick: () =>
							toast.promise(handleConfirmDelete(data), {
								loading: "Eliminando...",
								success: "Producto eliminado exitosamente",
								error: "No se pudo eliminar el producto",
							}),
					},
				});
			}}
		>
			<Trash2 className="w-4 h-4 text-red-400" /> Eliminar
		</button>
	);
};

export default ButtonDelete;
