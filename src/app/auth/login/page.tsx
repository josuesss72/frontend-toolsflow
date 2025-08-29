import Image from "next/image";
import LoginForm from "./components/form/LoginForm";

export default function LoginPage() {
	return (
		<main className="grid grid-cols-[1fr_1fr] h-screen w-screen">
			<div className="flex w-full h-full bg-[var(--segundary-color)]">
				<Image
					src="/desktop/publicidad_login_desktop.png"
					width={1240}
					height={1748}
					className="w-full h-screen object-contain"
					alt=""
				/>
			</div>
			<div className="bg-[var(--background-color)] flex justify-center items-center">
				<LoginForm />
			</div>
		</main>
	);
}
