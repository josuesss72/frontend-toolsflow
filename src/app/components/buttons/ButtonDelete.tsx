"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useOpenModalStore } from "@/app/zustand/open-modal";
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
	const { setSelectedData, dataSelected } = useOpenModalStore();
	const router = useRouter();

	const handleConfirmDelete = async () => {
		const id = dataSelected.id ? dataSelected.id : "";
		return await axios
			.delete(`/api/${apiRoute}/${id}/delete`)
			.then((res) => {
				if (res.data.status.ok) {
					toast.success("Producto eliminado");
					setSelectedData(null);
					router.refresh();
				}
			})
			.catch((error) => {
				toast.error("Error al eliminar");
			});
	};

	return (
		<button
			className="cursor-pointer flex items-center gap-2"
			onClick={() => {
				setSelectedData(data);
				toast("Estas seguro que quieres eliminar este producto?", {
					action: {
						label: "Confirmar",
						onClick: () => {
							toast.promise(handleConfirmDelete(), {
								loading: "Eliminando...",
							});
						},
					},
				});
			}}
		>
			<Trash2 className="w-4 h-4 text-red-400" /> Eliminar
		</button>
	);
};

export default ButtonDelete;
