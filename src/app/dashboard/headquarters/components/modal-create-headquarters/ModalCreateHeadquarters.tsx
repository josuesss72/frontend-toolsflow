"use client";
import ModalCreate from "@/app/components/modals/ModalCreate";
import React from "react";
import CreateHeadquartersForm from "../forms/CreateHeadquartersForm";
import { useOpenModalStore } from "@/app/zustand/open-modal";

const ModalCreateHeadquarters = () => {
	const { setIsOpen } = useOpenModalStore();
	const handleClick = () => {
		setIsOpen("create", true);
	};
	return (
		<ModalCreate
			classNameBtn="btn_segundary ml-auto"
			text="Rellena bien todos los campos para tener una mejor organizacion"
			title="Nueva Sucursal"
			textBtn="Nuevo"
			handler={handleClick}
			type="create"
		>
			<CreateHeadquartersForm />
		</ModalCreate>
	);
};

export default ModalCreateHeadquarters;
