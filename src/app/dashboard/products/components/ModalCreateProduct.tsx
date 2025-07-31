"use client";
import ModalCreate from "@/app/components/modals/ModalCreate";
import React from "react";
import CreateProductForm from "./form-create-product/CreateProductForm";
import { useOpenModalStore } from "@/app/zustand/open-modal";

const ModalCreateProduct = () => {
	const { setIsOpen } = useOpenModalStore();
	const handleClick = () => {
		setIsOpen("create", true);
	};
	return (
		<ModalCreate
			classNameBtn="btn_segundary ml-auto"
			text="Rellena bien todos los campos para tener una mejor organizacion"
			title="Nuevo Producto"
			textBtn="Nuevo"
			type="create"
			handler={handleClick}
		>
			<CreateProductForm />
		</ModalCreate>
	);
};

export default ModalCreateProduct;
