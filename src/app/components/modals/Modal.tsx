"use client";
import React from "react";
import { motion } from "framer-motion";
import { useOpenModalStore } from "@/app/zustand/open-modal";

interface ModalProps {
	children?: React.ReactNode;
	type: "create" | "edit" | "confirm";
}

const Modal = ({ children, type }: ModalProps) => {
	const { setIsOpen } = useOpenModalStore();
	return (
		<div
			onClick={() => setIsOpen(type, false)}
			className="fixed inset-0 bg-black/40 flex items-center justify-center"
		>
			<motion.article
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				onClick={(e) => e.stopPropagation()}
				className="bg-[var(--background)] flex flex-col gap-4 border-[1px] border-[var(--primary-color-300)] shadow-lg shadow-black rounded-sm p-4  max-w-[400px]"
			>
				{children}
			</motion.article>
		</div>
	);
};

export default Modal;
