"use client";
import ModalCreate from "@/app/components/modals/ModalCreate";
import React from "react";
import { Edit } from "lucide-react";
import { useOpenModalStore } from "@/app/zustand/open-modal";
import Cookies from "js-cookie";

interface ButtonEditProps<T> {
	data: T;
	cookieKey: string;
	formComponent: React.ReactNode;
}

const ButtonEdit = <T,>({
	data,
	cookieKey,
	formComponent,
}: ButtonEditProps<T>) => {
	const { setIsOpen } = useOpenModalStore();
	const handleClick = () => {
		setIsOpen("edit", true);
		Cookies.set(cookieKey, JSON.stringify(data));
	};
	return (
		<ModalCreate
			classNameBtn="cursor-pointer"
			text="Rellena bien todos los campos para tener una mejor organizacion"
			title="Editar"
			textBtn={<Edit className="w-4 h-4 text-white" />}
			handler={handleClick}
			type="edit"
		>
			{formComponent}
		</ModalCreate>
	);
};

export default ButtonEdit;
