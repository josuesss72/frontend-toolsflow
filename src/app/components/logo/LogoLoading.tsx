"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const letters = ["G", "e", "s", "n", "i", "g", "o"];

const LogoLoading = () => {
	const [step, setStep] = useState(0);

	// Esta funcion utiliza useEffect para crear un ciclo de animación que va desde 0
	// (mostrar circulo) hasta 7 (mostrar todas las letras y reiniciar)
	useEffect(() => {
		let timeout: NodeJS.Timeout;

		if (step === 0) {
			// Mostrar círculo por 1.5 segundos
			timeout = setTimeout(() => setStep(1), 1500);
		} else if (step === 1) {
			// Pausa breve para desaparecer suavemente
			timeout = setTimeout(() => setStep(2), 700);
		} else if (step >= 2 && step < letters.length + 2) {
			// Mostrar letras una por una
			timeout = setTimeout(() => setStep((prev) => prev + 1), 300);
		} else {
			// Reiniciar ciclo
			timeout = setTimeout(() => setStep(0), 1000);
		}

		return () => clearTimeout(timeout);
	}, [step]);

	return (
		<div className="flex items-center justify-center flex-col h-screen relative">
			<AnimatePresence>
				{step === 0 && (
					<motion.div
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 1.5, opacity: 0 }}
						transition={{ duration: 1 }}
						className="bg-[var(--segundary-color-400)] w-40 h-40 rounded-full absolute"
					/>
				)}
			</AnimatePresence>

			{step >= 2 && (
				<div className="flex">
					{letters.map((letter, index) => (
						<motion.h1
							key={index}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: step > index + 1 ? 1 : 0, y: 0 }}
							transition={{ duration: 0.3 }}
							className="text-6xl font-bold text-blue-500/80"
						>
							{letter}
						</motion.h1>
					))}
				</div>
			)}
		</div>
	);
};

export default LogoLoading;
