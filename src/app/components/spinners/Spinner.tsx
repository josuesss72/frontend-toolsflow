import React from "react";

const Spinner = () => {
	return (
		<div className="flex items-center justify-center">
			<div
				className="h-6 w-6 animate-spin rounded-full border-2 border-current border-t-transparent text-white"
				role="status"
				aria-label="Cargando"
			></div>
		</div>
	);
};

export default Spinner;
