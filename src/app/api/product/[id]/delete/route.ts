import { getCookieStore } from "@/app/api/common/get-cookies";
import { productService } from "@/app/services/product.service";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
	req: NextRequest,
	context: { params: { id: string } }
) {
	const { companyId, token } = await getCookieStore();
	const { id } = context.params;
	try {
		const response = await productService.deleteProduct.execute(
			id,
			token,
			companyId
		);
		if (!response.status.ok) {
			return NextResponse.json(
				{ message: "No se pudo eliminar" },
				{ status: 400 }
			);
		}
		return NextResponse.json(response, { status: 200 });
	} catch (error) {
		console.error("DELETE error:", error);
		return NextResponse.json(
			{ message: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
