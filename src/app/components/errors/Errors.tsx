import { toast, Toaster } from "sonner";
import { useEffect } from "react";

type Props = {
	errors: Record<string, { message?: string }>;
};

/**
 * Este componente recibe un objeto con errores y los muestra en una lista con un estilo de alerta en la parte inferior derecha de la pantalla
 * @param {object} errors - objeto con errores
 * @returns {JSX.Element} - lista de errores
 */
function Errors({ errors }: Props) {
	useEffect(() => {
		const errorMessages = Object.values(errors);
		if (errorMessages.length > 0) {
			toast.error(errorMessages[0]?.message);
		}
	}, [errors]);

	return (
		<Toaster
			position="top-center"
			theme="dark"
			expand={true}
			richColors={true}
		/>
	);
}

export default Errors;
