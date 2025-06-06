import { caveat, handlee } from "@/app/layout";
import Image from "next/image";
import RegisterForm from "./components/form/RegisterForm";

export default function RegisterPage() {
	const font = handlee.className;
	return (
		<article className="flex justify-center items-center h-screen w-screen p-4 md:p-0">
			<div className="flex relative">
				<article
					className={`${font} shadow_primary z-50 bg-[var(--background)] flex flex-col w-full max-w-[400px] gap-4 border-[2px] border-[var(--primary-color-400)] rounded-sm p-8`}
				>
					<section className="flex gap-1">
						<Image
							src={"/logo.avif"}
							width={1024}
							height={1024}
							alt="logo"
							className="w-[35px] h-[35px]"
						/>
						<h1 className={`${caveat.className} text-4xl`}>ToolsFlow</h1>
					</section>
					<p>Registrate para usar en totalidad nuestras herramientas</p>
					<RegisterForm />
				</article>
				<Image
					className="absolute hidden left-[-12rem] bottom-0 md:block"
					src={"/man_lift.svg"}
					width={300}
					height={350}
					alt=""
				/>
			</div>
		</article>
	);
}
