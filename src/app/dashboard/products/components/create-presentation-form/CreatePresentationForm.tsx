"use client";
import { selectStyle } from "@/app/components/select-style";
import React from "react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useOpenModalStore } from "@/app/zustand/open-modal";
import { usePresentationStore } from "@/app/zustand/product-presentations-store";
import { useLabelsStore } from "@/app/zustand/labels-product.store";
import Errors from "@/app/components/errors/Errors";
import {
	FormDataPresentation,
	presentationShema,
} from "@/app/utils/zod/shemas/presentation.shema";

type OptionType = {
	value: string;
	label: string;
};

const CreatePresentationForm = () => {
	const { setIsOpen } = useOpenModalStore();
	const { addPresentation } = usePresentationStore();
	const { options, selected, addOption, setSelected, resetLabels } =
		useLabelsStore();
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<FormDataPresentation>({
		resolver: zodResolver(presentationShema),
	});

	const onSubmit = (data: FormDataPresentation) => {
		data.uid = crypto.randomUUID();
		const labels = selected.map((option) => option.value);
		data.labels = ["labels", ...labels];
		addPresentation(data); // Agrega la presentacion
		setIsOpen("create", false); // Cierra el modal
		resetLabels();
	};

	function allowOnlyNumbers(value: string) {
		return value.replace(/\D/g, "");
	}

	const renderNumberInput = (
		name: keyof FormDataPresentation,
		label: string
	) => (
		<Controller
			name={name}
			control={control}
			defaultValue=""
			render={({ field }) => (
				<div className="flex flex-col gap-1">
					<label className="text-sm">{label}</label>
					<input
						{...field}
						inputMode="numeric"
						placeholder="0"
						onChange={(e) => {
							field.onChange(allowOnlyNumbers(e.target.value));
						}}
						value={field.value?.toLocaleString()}
						className="input_segundary"
					/>
				</div>
			)}
		/>
	);

	return (
		<div className="space-y-4">
			<div className="flex gap-2">
				{renderNumberInput("salePrice", "Precio de venta")}
				{renderNumberInput("purchasePrice", "Precio de compra")}
				{renderNumberInput("iva", "IVA")}
			</div>
			<div className="flex flex-col gap-1">
				<label htmlFor="medidas" className="text-sm">
					Medidas
				</label>
				<Controller
					name="medidas"
					control={control}
					render={({ field }) => (
						<Select<OptionType, true>
							isMulti
							styles={selectStyle}
							classNamePrefix="select"
							options={[
								{ value: "UND", label: "Unidad" },
								{ value: "G", label: "Gramo" },
								{ value: "KG", label: "Kilogramo" },
								{ value: "L", label: "Litro" },
								{ value: "M", label: "Metro" },
							]}
							{...field}
						/>
					)}
				/>
			</div>
			<div className="flex flex-col gap-1">
				<label htmlFor="medidas" className="text-sm">
					Proveedor
				</label>
				<Controller
					name="supplier"
					control={control}
					render={({ field }) => (
						<Select
							styles={selectStyle}
							classNamePrefix="select"
							options={[]}
							{...field}
						/>
					)}
				/>
			</div>
			<div className="flex flex-col gap-1">
				<label htmlFor="labels" className="text-sm">
					Etiquetas
				</label>
				<CreatableSelect
					name="labels"
					isMulti
					styles={selectStyle}
					options={options}
					value={selected}
					onChange={(newValue) => setSelected(newValue as typeof selected)}
					onCreateOption={(inputValue) => {
						const newOption = {
							label: inputValue,
							value: inputValue.toLowerCase(),
						};
						addOption(newOption);
					}}
					placeholder="Escribe y presiona enter para crear..."
				/>
			</div>
			<button
				onClick={handleSubmit(onSubmit)}
				type="button"
				className="btn_segundary"
			>
				Agregar
			</button>
			<Errors errors={errors} />
		</div>
	);
};

export default CreatePresentationForm;
