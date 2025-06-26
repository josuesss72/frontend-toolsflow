"use client";
import ModalCreate from "@/app/components/modals/ModalCreate";
import React from "react";
import EditHeadquarters from "../../forms/EditHeadquarters";
import { Edit } from "lucide-react";
import { Headquarters } from "@/domain/entities/headquarters/headquarters.entity";
import { useOpenModalStore } from "@/app/zustand/open-modal";
import Cookies from "js-cookie";

const ButtonEdit = ({ hq }: { hq: Headquarters }) => {
	const { setIsOpen } = useOpenModalStore();
	const handleClick = () => {
		setIsOpen("edit", true);
		Cookies.set("headquarters", JSON.stringify(hq));
	};
	return (
		<ModalCreate
			classNameBtn="cursor-pointer mr-4"
			text="Rellena bien todos los campos para tener una mejor organizacion"
			title="Editar Sucursal"
			textBtn={<Edit className="w-6 h-6" />}
			handler={handleClick}
			type="edit"
		>
			<EditHeadquarters />
		</ModalCreate>
	);
};

export default ButtonEdit;
