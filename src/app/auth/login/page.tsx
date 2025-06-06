import { caveat, handlee } from "@/app/layout";
import Image from "next/image";
import LoginForm from "./components/form/LoginForm";

export default function LoginPage() {
	const font = handlee.className;
	return (
		<article className="flex justify-center items-center h-screen w-screen p-4 md:p-0">
			<div className="flex relative w-full max-w-[400px]">
				<article
					className={`${font} shadow_primary z-50 bg-[var(--background)] flex flex-col w-full gap-4 border-[2px] border-[var(--primary-color-400)] rounded-sm p-8`}
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
					<p>Ingresa con Email y password</p>
					<LoginForm />
				</article>
				<Image
					className="absolute hidden right-[-8rem] bottom-0 md:block"
					src={"/woman_presenting.svg"}
					width={180}
					height={230}
					alt=""
				/>
			</div>
		</article>
	);
}
