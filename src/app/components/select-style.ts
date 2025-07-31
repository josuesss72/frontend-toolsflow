export const selectStyle = {
	control: (base: any) => ({
		...base,
		backgroundColor: "black", // fondo
		borderColor: "#454545", // azul Tailwind
		minHeight: "40px",
	}),
	menu: (base: any) => ({
		...base,
		backgroundColor: "black",
		zIndex: 100,
	}),
	input: (base: any) => ({
		...base,
		color: "white", // Cambia el color del texto que escribes
		fontWeight: "light",
	}),
	singleValue: (base: any) => ({
		...base,
		color: "white",
		fontWeight: "semibold",
	}),
	option: (base: any, { isFocused, isSelected }: any) => ({
		...base,
		backgroundColor: isSelected
			? "#454545"
			: isFocused
			? "#454545"
			: "transparent",
		color: isSelected ? "white" : "#ffffff",
		cursor: "pointer",
	}),
	multiValue: (base: any) => ({
		...base,
		backgroundColor: "#454545", // azul claro
		color: "#ffffff",
	}),
	multiValueLabel: (base: any) => ({
		...base,
		color: "#ffffff",
	}),
	multiValueRemove: (base: any) => ({
		...base,
		color: "#ffffff",
		":hover": {
			backgroundColor: "#bfdbfe",
			color: "#1e3a8a",
		},
	}),
};
