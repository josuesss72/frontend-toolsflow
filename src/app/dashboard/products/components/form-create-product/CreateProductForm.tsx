"use client";
import dynamic from "next/dynamic";
import Errors from "@/app/components/errors/Errors";
import ModalCreate from "@/app/components/modals/ModalCreate";
import CreatePresentationForm from "../create-presentation-form/CreatePresentationForm";
import { usePresentationStore } from "@/app/zustand/product-presentations-store";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { selectStyle } from "@/app/components/select-style";
import { Toaster } from "sonner";
import useCategory from "./hooks/use-category.hook";
import useFormProduct from "./hooks/use-form.hook";
import { useEffect } from "react";
import { Controller } from "react-hook-form";
import { DataTable } from "@/app/components/tables/DataTable";
import { columnsPresentations } from "./components/comlums";
// Dynamically import CreatableSelect with SSR disabled
const DynamicCreatableSelect = dynamic(
	() => import("react-select/creatable").then((mod) => mod.default),
	{
		loading: () => <div className="p-2 text-sm">Cargando categorías...</div>,
		ssr: false,
	}
);

const CreateProductForm = () => {
	const { register, handleSubmit, control, errors, submit, handleOpenModal } =
		useFormProduct();
	const { getAllCategories, createCategory, categories } = useCategory();
	// Zustand
	const { presentations } = usePresentationStore();

	useEffect(() => {
		getAllCategories();
	}, []);

	return (
		<form
			onSubmit={handleSubmit(submit)}
			className="flex flex-col gap-2"
			action=""
		>
			<div className="flex gap-2">
				<input
					type="text"
					placeholder="Nombre"
					className="input_segundary w-full"
					{...register("name")}
				/>
				<input
					type="text"
					placeholder="codigo"
					className="input_segundary"
					{...register("code")}
				/>
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="category" className="text-sm">
					Categoria
				</label>
				<Controller
					name="category"
					control={control}
					render={({ field }) => (
						<DynamicCreatableSelect
							{...field}
							styles={selectStyle}
							options={categories}
							onCreateOption={async (newValue) => {
								const newCategory = await createCategory(newValue);
								if (newCategory) {
									field.onChange({ value: newCategory.id, label: newValue });
								}
							}}
							placeholder="Escribe y presiona enter para crear..."
							isClearable
							noOptionsMessage={() => "No hay opciones"}
							loadingMessage={() => "Cargando..."}
							className="text-sm"
							value={field.value}
							onChange={(selectedOption) => field.onChange(selectedOption)}
						/>
					)}
				/>
			</div>
			<Separator className="bg-white/20 h-[1px] my-2" />
			<p className="text-sm text-center">
				Crea presentaciones para el producto
			</p>
			<section className="flex flex-col gap-2">
				<section className="flex gap-4">
					<h2>Presentaciones</h2>
					<ModalCreate
						classNameBtn="btn_terciary"
						text="Crea presentaciones para el producto"
						title="Nueva Presentacion"
						textBtn="Agregar"
						handler={handleOpenModal}
						type="create"
					>
						<CreatePresentationForm />
					</ModalCreate>
				</section>
				{/* {presentations.length > 0 && (
					<section className="flex flex-col gap-2">
						{presentations.map((presentation) => (
							<CardPresentationProduct
								key={presentation.uid}
								presentation={presentation}
							/>
						))}
					</section>
				)} */}
				<DataTable columns={columnsPresentations} data={presentations} />
			</section>
			<button type="submit" className="btn_segundary mt-4">
				Crear
			</button>
			<Errors errors={errors} />
			{!errors && (
				<Toaster
					position="top-center"
					theme="dark"
					expand={true}
					richColors={true}
				/>
			)}
		</form>
	);
};

export default CreateProductForm;
