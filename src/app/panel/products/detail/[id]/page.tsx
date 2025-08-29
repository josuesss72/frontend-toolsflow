"use client";
import { productService } from "@/app/services/product.service";
import { ArrowLeft, Edit2Icon, ShoppingCartIcon, Trash2 } from "lucide-react";
import { useParams } from "next/navigation";
import Cookies from "js-cookie";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Product } from "@/domain/entities/product/product.entity";
import { DataTable } from "@/app/components/tables/DataTable";
import { columnsPresentations } from "@/app/panel/components/colums-tables/presentationColums";
import { presentationService } from "@/app/services/presentation.service";
import { Presentation } from "@/domain/entities/presentation/presentation.entity";

export default function DetailProductPage() {
	const [product, setProduct] = useState<Product | null>(null);
	const [presentations, setPresentations] = useState<Presentation[] | null>(
		null
	);
	const { id } = useParams();
	const token = Cookies.get("token") || "";

	//
	const createdAt = product?.createdAt
		? new Date(product?.createdAt).toLocaleDateString()
		: "";
	const updatedAt = product?.updatedAt
		? new Date(product?.updatedAt).toLocaleDateString()
		: "";

	// obtenemos el producto
	const getProduct = async () => {
		const response = await productService.getProduct.execute(
			id as string,
			token
		);
		setProduct(response.product);
	};

	// obtenemos las presentaciones
	const getPresentations = async () => {
		const response = await presentationService.getAllPresentations.execute(
			id as string,
			token
		);
		setPresentations(response.presentations);
	};

	useEffect(() => {
		getProduct();
		getPresentations();
	}, []);

	// clases
	const CONTAINER_INFO =
		"bg-[var(--background)] p-4 font-light rounded-sm h-full";
	const ITEM_FOOTER =
		"border-[1px] border-gray-700 p-4 w-full rounded-sm flex flex-col gap-2 cursor-pointer";
	return (
		<main className="p-4">
			<nav className="p-4">
				<Link
					href="/panel/products"
					className="text-blue-400/80 flex items-center gap-2 w-fit"
				>
					<ArrowLeft className="w-4 h-4" /> Volver al Inventario
				</Link>
			</nav>

			<article className="grid grid-cols-3 max-w-[1024px] mx-auto">
				<header className="bg-[var(--segundary-color)] col-span-3 flex justify-between items-center p-4 rounded-t-xl">
					<section>
						<h4 className="text-2xl font-bold">{product?.name}</h4>
						<p className="font-light text-lg">codigo: {product?.code}</p>
					</section>
					<section className="flex gap-2">
						<button className="p-2 bg-blue-700/80 h-fit flex cursor-pointer items-center gap-2 rounded-sm">
							<Edit2Icon className="w-4 h-4" /> Editar
						</button>
						<button className="p-2 bg-red-400/80 h-fit flex cursor-pointer items-center gap-2 rounded-sm">
							<Trash2 className="w-4 h-4" /> Eliminar
						</button>
					</section>
				</header>
				<main className="grid grid-cols-3 gap-8 bg-black col-span-3 p-6">
					<section className="col-span-2 flex flex-col gap-4">
						<div className="flex items-center justify-between">
							<h5 className="font-semibold text-xl">Presentaciones</h5>
							<Link
								href={`/panel/products/detail/${id}/presentation`}
								className="bg-blue-700/80 p-2 rounded-sm w-fit"
							>
								Gestionar Presentaciones
							</Link>
						</div>
						<div className={CONTAINER_INFO}>
							<DataTable
								columns={columnsPresentations}
								data={presentations || []}
							/>
						</div>
					</section>
					{/* <section className="row-start-2 col-span-2 flex flex-col gap-4">
						<h5 className="font-semibold text-xl">Especificaciones</h5>
						<ul className={`${CONTAINER_INFO} flex flex-wrap justify-between`}>
							<li>
								<span>Procesador</span>
								<p>Intel Core i7</p>
							</li>
							<li>
								<span>RAM</span>
								<p>16GB</p>
							</li>
							<li>
								<span>Almacenamiento</span>
								<p>512GB SSD</p>
							</li>
							<li>
								<span>Pantalla</span>
								<p>13.4</p>
							</li>
							<li>
								<span>Sistema Operativo</span>
								<p>Windows 11 Pro</p>
							</li>
						</ul>
					</section> */}
					<section className="row-start-3 col-span-2 flex flex-col gap-4">
						<h5 className="font-semibold text-xl">Historial de Stock</h5>
						<div className={CONTAINER_INFO}></div>
					</section>
					<aside className="row-start-1 col-3 flex flex-col gap-4">
						<div className="bg-[var(--background)] p-4 rounded-sm flex flex-col gap-4">
							<section className="border-b-[1px] border-gray-700 pb-4">
								<ul className="flex flex-col gap-2">
									<li className="flex gap-2 font-light">
										Stock Total:
										<span className="font-bold text-lg">
											{product?.totalStock}
										</span>
									</li>
									{/* <li className="flex gap-2 font-light">
										Stock Minimo:
										<span className="font-semibold">2 unidades</span>
									</li> */}
								</ul>
							</section>
							<section className="border-b-[1px] border-gray-700 pb-4">
								<ul className="flex flex-col gap-2">
									<li>
										Categoría:{" "}
										<span className="font-light">
											{product?.category ? product?.category.name : "N/A"}
										</span>
									</li>
									<li>
										Creado el: <span className="font-light">{createdAt}</span>
									</li>
									<li>
										Última Actualización{" "}
										<span className="font-light">{updatedAt}</span>
									</li>
								</ul>
							</section>
							<section>
								<button className="bg-blue-700/80 p-4 rounded-sm flex items-center gap-2 cursor-pointer">
									<ShoppingCartIcon className="w-4 h-4" /> Realizar Pedido
								</button>
							</section>
						</div>
						<section className="bg-[var(--background)] p-4 rounded-sm flex flex-col gap-2">
							<h5 className="font-semibold">Proveedores</h5>
							<p className="font-light text-sm">Dell Latinoamérica</p>
							<Link className="text-blue-400/80 text-sm" href="/panel">
								Ver proveedor
							</Link>
						</section>
					</aside>
					<footer className="row-start-4 col-span-3 flex flex-col gap-4 ">
						<h5 className="text-xl font-semibold">Productos Relacionados</h5>
						<div className="flex gap-4 justify-between">
							<article className={ITEM_FOOTER}>
								<section className="flex flex-col gap-1">
									<h6 className="font-semibold">Dell XPS 15</h6>
									<p className="font-light">$1599.99</p>
								</section>
								<div>
									<Link
										className="text-blue-400/80 text-sm"
										href="/panel/products/detail/1234567"
									>
										Ver detalles
									</Link>
								</div>
							</article>
							<article className={ITEM_FOOTER}>
								<section className="flex flex-col gap-1">
									<h6 className="font-semibold">Dell XPS 15</h6>
									<p className="font-light">$1599.99</p>
								</section>
								<div>
									<Link
										className="text-blue-400/80 text-sm"
										href="/panel/products/detail/1234567"
									>
										Ver detalles
									</Link>
								</div>
							</article>
							<article className={ITEM_FOOTER}>
								<section className="flex flex-col gap-1">
									<h6 className="font-semibold">Dell XPS 15</h6>
									<p className="font-light">$1599.99</p>
								</section>
								<div>
									<Link
										className="text-blue-400/80 text-sm"
										href="/panel/products/detail/1234567"
									>
										Ver detalles
									</Link>
								</div>
							</article>
						</div>
					</footer>
				</main>
			</article>
		</main>
	);
}
