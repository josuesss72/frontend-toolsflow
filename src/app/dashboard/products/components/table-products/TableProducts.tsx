import React from "react";
import { columnsProducts } from "./columns";
import { getCookieStore } from "@/app/api/common/get-cookies";
import { GetAllProductsUseCase } from "@/application/use-cases/product/get-all-product.usecase";
import { ProductRepository } from "@/application/repositories/product/product.repository";
import { DataTableFilter } from "@/app/components/tables/DataTableFilter";

const repository = new ProductRepository(process.env.NEXT_PUBLIC_BASE_URL);

async function getAll() {
	const { companyId, token } = await getCookieStore();
	return await new GetAllProductsUseCase(repository, token)
		.execute(companyId)
		.then((res) => {
			return res.products;
		});
}

const TableProducts = async () => {
	const products = await getAll();
	return (
		<DataTableFilter
			columns={columnsProducts}
			data={products}
			columnFilter="name"
		/>
	);
};

export default TableProducts;
