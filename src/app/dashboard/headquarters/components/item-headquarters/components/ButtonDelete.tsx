"use client";
import { Headquarters } from "@/domain/entities/headquarters/headquarters.entity";
import { Trash2 } from "lucide-react";
import React from "react";
import { HeadquartersRepository } from "@/application/repositories/headquarters/headquarters.repository";
import { DeleteHeadquartersUseCase } from "@/application/use-cases/headquarters/delete-headquarters.usecase";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import ModalCreate from "@/app/components/modals/ModalCreate";
import { useOpenModalStore } from "@/app/zustand/open-modal";

const headquartersRepository = new HeadquartersRepository(
	`${process.env.NEXT_PUBLIC_BASE_URL}`
);

const ButtonDelete = ({ hq }: { hq: Headquarters }) => {
	const { setIsOpen } = useOpenModalStore();
	const router = useRouter();
	const handleClick = async () => {
		const token = Cookies.get("token") || "";
		try {
			const deleteHeadquarters = await new DeleteHeadquartersUseCase(
				headquartersRepository
			).execute(hq.id, token);
			if (deleteHeadquarters.status.ok) {
				router.refresh();
				setIsOpen("confirm", false);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<ModalCreate
			text="Una vez eliminada no podras ingresar,las ventas y operaciones relaciadas a esta sucursal se perderan"
			title="Estas seguro?"
			textBtn={<Trash2 className="w-6 h-6 cursor-pointer text-red-400" />}
			handler={() => setIsOpen("confirm", true)}
			type="confirm"
		>
			<div className="flex justify-between mt-4">
				<button
					className="btn_segundary"
					onClick={() => setIsOpen("confirm", false)}
				>
					Cancelar
				</button>
				<button
					className="bg-red-800 border-[1px] border-red-500 p-2 rounded-md text-base cursor-pointer"
					onClick={handleClick}
				>
					Eliminar
				</button>
			</div>
		</ModalCreate>
	);
};

export default ButtonDelete;
