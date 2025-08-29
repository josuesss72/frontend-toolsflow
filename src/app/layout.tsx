import type { Metadata } from "next";
import { Caveat, Handlee } from "next/font/google";
import "./globals.css";

export const caveat = Caveat({
	variable: "--font-caveat",
	subsets: ["latin"],
});

export const handlee = Handlee({
	variable: "--font-handlee",
	subsets: ["latin"],
	weight: ["400"],
});

export const metadata: Metadata = {
	title: "Gesnigo",
	description:
		"La aplicación Gesnigo es una plataforma web para la gestión de inventarios de productos. Permite a los usuarios registrar, editar y eliminar productos, así como crear y administrar presentaciones de producto. También ofrece una funcionalidad de búsqueda eficaz para encontrar productos rápidamente.",
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`bg-[var(--background)] text-[var(--text-color-primary)]`}
			>
				{children}
			</body>
		</html>
	);
}
