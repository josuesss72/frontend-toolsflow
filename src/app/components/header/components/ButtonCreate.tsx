"use client";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ButtonCreate = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="relative">
			<button onMouseEnter={() => setIsOpen(true)} className="btn_segundary">
				<Plus className="h-4 w-4" />
				Crear
			</button>
			{isOpen && (
				<motion.ul
					initial={{
						opacity: 0,
						scale: 0,
					}}
					animate={{
						scale: 1,
						opacity: 1,
					}}
					onMouseLeave={() => setIsOpen(false)}
					className={`absolute flex flex-col gap-2 text-sm top-12 right-0 bg-[var(--background)] shadow-lg rounded-sm p-2 w-40`}
				>
					<Link href={"/dashboard/products"} className="hover:text-blue-300">
						Productos
					</Link>
					<Link
						href={"/dashboard/headquarters"}
						className="hover:text-blue-300"
					>
						Sucursales
					</Link>
				</motion.ul>
			)}
		</div>
	);
};

export default ButtonCreate;
