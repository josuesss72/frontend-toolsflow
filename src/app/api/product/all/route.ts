import { NextResponse } from "next/server";
import { getCookieStore } from "../../common/get-cookies";
import { productService } from "@/app/services/product.service";

export default async function GET() {
	try {
		const { companyId, token } = await getCookieStore();

		if (!token || !companyId) {
			return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
		}

		const response = await productService.getAllProducts
			.execute(companyId, token)
			.then((res) => {
				return res.products;
			});
		return NextResponse.json(response);
	} catch (error) {
		console.error("GET error:", error);
		return NextResponse.json(
			{ message: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
