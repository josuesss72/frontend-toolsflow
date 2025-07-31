import { NextResponse } from "next/server";
import { CategoryRepository } from "@/application/repositories/category/category.repository";
import { GetAllCategoriesUseCase } from "@/application/use-cases/category/get-all.usecase";
import { getCookieStore } from "../../common/get-cookies";

const repository = new CategoryRepository(
	`${process.env.NEXT_PUBLIC_BASE_URL}`
);

export async function GET() {
	try {
		const { companyId, token } = await getCookieStore();

		if (!token || !companyId) {
			return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
		}

		const response = await new GetAllCategoriesUseCase(repository).execute(
			token,
			companyId
		);
		return NextResponse.json(response);
	} catch (error) {
		console.error("GET error:", error);
		return NextResponse.json(
			{ message: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
