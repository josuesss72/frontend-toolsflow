"use client";
import Errors from "@/app/components/errors/Errors";
import ModalCreate from "@/app/components/modals/ModalCreate";
import { usePresentationStore } from "@/app/zustand/product-presentations-store";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { selectStyle } from "@/app/components/select-style";
import { Toaster } from "sonner";
import useCategory from "./hooks/use-category.hook";
import useFormProduct from "./hooks/use-form.hook";
import { useEffect } from "react";
import { Controller } from "react-hook-form";
import { DataTable } from "@/app/components/tables/DataTable";
import { DynamicCreatableSelect } from "@/app/common/imports-libraries-client";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from "@/components/ui/input-otp";
import FormCreatePresentation from "../form-create-presentation/FormCreatePresentation";
import { columnsPresentations } from "./components/colums";
import { FormDataPresentation } from "@/app/utils/zod/shemas/presentation.shema";
import { useOpenModalStore } from "@/app/zustand/open-modal";
import { useLabelsStore } from "@/app/zustand/labels-product.store";

const FormCreateProduct = () => {
	const { register, handleSubmit, control, errors, submit, handleOpenModal } =
		useFormProduct();
	const { getAllCategories, createCategory, categories } = useCategory();
	// Zustand
	const { presentations, addPresentation } = usePresentationStore();
	const { setIsOpen } = useOpenModalStore();
	const { selected, resetLabels } = useLabelsStore();

	const handleSubmitPresentation = (data: FormDataPresentation) => {
		//data.id = crypto.randomUUID();
		const labels = selected.map((option) => option.value);
		data.labels = ["labels", ...labels];
		addPresentation(data); // Agrega la presentacion
		setIsOpen("create", false); // Cierra el modal
		resetLabels();
	};

	useEffect(() => {
		getAllCategories();
	}, []);

	return (
		<form
			onSubmit={handleSubmit(submit)}
			className="flex flex-col gap-2"
			action=""
		>
			<div className="flex gap-4">
				<div className="flex flex-col gap-1">
					<label htmlFor="name" className="text-sm">
						Nombre
					</label>
					<input
						type="text"
						placeholder="Nombre"
						className="input_segundary w-full"
						{...register("name")}
					/>
				</div>
			</div>
			<section className="flex gap-4">
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
								placeholder="Busca o crea una categoria"
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
				<div className="flex flex-col gap-1 justify-between">
					<label htmlFor="code" className="text-sm">
						Codigo
					</label>
					<Controller
						name="code"
						control={control}
						render={({ field: { onChange, value } }) => (
							<InputOTP
								maxLength={7}
								value={value || ""}
								onChange={(value) => {
									onChange(value);
								}}
							>
								<InputOTPGroup>
									<InputOTPSlot index={0} />
									<InputOTPSlot index={1} />
									<InputOTPSlot index={2} />
									<InputOTPSlot index={3} />
								</InputOTPGroup>
								<InputOTPSeparator />
								<InputOTPGroup>
									<InputOTPSlot index={4} />
									<InputOTPSlot index={5} />
									<InputOTPSlot index={6} />
								</InputOTPGroup>
							</InputOTP>
						)}
					/>
				</div>
			</section>
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
						<FormCreatePresentation onSubmit={handleSubmitPresentation} />
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

export default FormCreateProduct;
