import FormCompany from "./components/form/FormCompany";
import LogoSmall from "@/app/components/logo/Logo";

export default function CreateCompany() {
	return (
		<main className="w-screen h-screen flex justify-center items-center">
			<article className="card w-full max-w-[400px]">
				<LogoSmall className="text-xl" />
				<h1 className="text-xl font-semibold text-center">Tu Compañia</h1>
				<div>
					<p className="text-[var(--text-color-segundary)]">
						Crea tu compañia y gestiona hoy mismo.
					</p>
					<p className="text-[var(--text-color-segundary)]">
						Llena todos los campos para disfrutar de todas la funciones
					</p>
				</div>
				<FormCompany />
			</article>
		</main>
	);
}
