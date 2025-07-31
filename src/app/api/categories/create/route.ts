import { NextResponse } from "next/server";
import { getCookieStore } from "../../common/get-cookies";
import { CreateCategoryUseCase } from "@/application/use-cases/category/create.usecase";
import { CategoryRepository } from "@/application/repositories/category/category.repository";

const repository = new CategoryRepository(
	`${process.env.NEXT_PUBLIC_BASE_URL}`
);

export async function POST(req: Request) {
	try {
		const { companyId, token } = await getCookieStore();

		const payload = await req.json();

		if (!token || !companyId) {
			return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
		}

		console.log(payload);

		const response = await new CreateCategoryUseCase(
			repository,
			payload,
			token,
			companyId
		).execute();
		return NextResponse.json(response);
	} catch (error) {
		console.error("POST error:", error);
		return NextResponse.json(
			{ message: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
