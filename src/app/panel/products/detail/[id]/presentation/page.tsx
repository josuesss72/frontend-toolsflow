"use client";
import NavigationBackRoute from "@/app/components/navegation/NavigationBackRoute";
import { useParams } from "next/navigation";

export default function PanelPresentationPage() {
	const { id } = useParams();
	return (
		<main>
			<NavigationBackRoute
				href={`/panel/products/detail/${id}`}
				text="Volver atras"
			/>
			<h1>PanelPresentationPage</h1>
		</main>
	);
}
