import { handlee } from "@/app/layout";

const RegisterSuccessPage = () => {
	return (
		<article
			className={`${handlee.className} flex flex-col w-screen h-screen p-4 justify-center items-center`}
		>
			<div className="flex flex-col items-center justify-center">
				<h1 className="text-3xl font-bold mb-4">Registro Exitoso</h1>
				<p className="text-lg text-gray-400 mb-6">
					Gracias por registrarte. Tu cuenta ha sido creada exitosamente.
				</p>
				<a href="/auth/login" className="btn_primary text-center">
					Iniciar Sesión
				</a>
			</div>
		</article>
	);
};

export default RegisterSuccessPage;
