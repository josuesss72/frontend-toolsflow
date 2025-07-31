"use client";
import Modal from "@/app/components/modals/Modal";
import { useOpenModalStore } from "@/app/zustand/open-modal";
import React from "react";

interface Props {
	children?: React.ReactNode;
	title: string;
	text: string;
	textBtn: string | React.ReactNode;
	classNameBtn?: string;
	handler?: () => void;
	type: "create" | "edit" | "confirm";
}

const ModalCreate = ({
	children,
	title,
	text,
	textBtn,
	classNameBtn,
	handler,
	type,
}: Props) => {
	const { isOpen } = useOpenModalStore();
	return (
		<>
			<button type="button" onClick={handler} className={classNameBtn}>
				{textBtn}
			</button>
			{isOpen[type] && (
				<Modal type={type}>
					<h2 className="font-semibold text-xl">{title}</h2>
					<div className=" text-sm text-[var(--text-color-segundary)]">
						{text}
					</div>
					{children}
				</Modal>
			)}
		</>
	);
};

export default ModalCreate;
