import React from "react";
import { columnsProducts } from "./columns";
import { getCookieStore } from "@/app/api/common/get-cookies";
import { DataTableFilter } from "@/app/components/tables/DataTableFilter";
import { productService } from "@/app/services/product.service";

async function getAll() {
	const { companyId, token } = await getCookieStore();
	return await productService.getAllProducts
		.execute(companyId, token)
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
