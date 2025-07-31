import { DeleteHeadquartersUseCase } from "@/application/use-cases/headquarters/delete-headquarters.usecase";
import { NextRequest, NextResponse } from "next/server";
import { HeadquartersRepository } from "@/application/repositories/headquarters/headquarters.repository";
import { getCookieStore } from "@/app/api/common/get-cookies";

const repository = new HeadquartersRepository(
	`${process.env.NEXT_PUBLIC_BASE_URL}`
);
export async function DELETE(
	req: NextRequest,
	context: { params: { id: string } }
) {
	const { params } = context;
	const id = params.id;
	const { token } = await getCookieStore();

	if (!token)
		return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

	try {
		const useCase = new DeleteHeadquartersUseCase(repository);
		const result = await useCase.execute(id, token);
		return NextResponse.json(result, { status: 200 });
	} catch (error) {
		console.error("DELETE error:", error);
		return NextResponse.json(
			{ message: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
