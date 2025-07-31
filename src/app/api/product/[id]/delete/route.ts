import { getCookieStore } from "@/app/api/common/get-cookies";
import { ProductRepository } from "@/application/repositories/product/product.repository";
import DeleteProductUseCase from "@/application/use-cases/product/delete-product.usecase";
import { NextRequest, NextResponse } from "next/server";

const repository = new ProductRepository(process.env.NEXT_PUBLIC_BASE_URL);

export async function DELETE(
	req: NextRequest,
	context: { params: { id: string } }
) {
	const { companyId, token } = await getCookieStore();
	const { id } = context.params;
	try {
		const response = await new DeleteProductUseCase(
			repository,
			id,
			token,
			companyId
		).execute();
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
