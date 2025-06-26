"use client";
import Image from "next/image";
import RegisterForm from "./components/form/RegisterForm";
import { motion } from "framer-motion";

export default function RegisterPage() {
	return (
		<article className="flex justify-center items-center h-screen w-screen p-4 md:p-0">
			<div className="flex relative">
				<motion.article
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					className={`card z-10`}
				>
					<section className="flex gap-1 justify-center">
						<h1 className={`text-4xl text-blue-500/80 font-bold`}>Gesnigo</h1>
					</section>
					<p className="text-[var(--text-color-segundary)]">
						Registrate para usar en totalidad nuestras herramientas
					</p>
					<RegisterForm />
				</motion.article>
				<Image
					className="absolute hidden left-[-10rem] bottom-0 md:block"
					src={"/man_lift.svg"}
					width={200}
					height={250}
					alt=""
				/>
			</div>
		</article>
	);
}
