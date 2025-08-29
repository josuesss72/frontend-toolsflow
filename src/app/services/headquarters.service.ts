import { HeadquartersRepository } from "@/application/repositories/headquarters/headquarters.repository";
import { CreateHeadquartersUseCase } from "@/application/use-cases/headquarters/create-headquarters.usecase";
import { DeleteHeadquartersUseCase } from "@/application/use-cases/headquarters/delete-headquarters.usecase";
import { GetAllHeadquartersUseCase } from "@/application/use-cases/headquarters/get-all-headquarters.usecase";
import { GetHeadquartersUseCase } from "@/application/use-cases/headquarters/get-headquarters.usecase";
import { UpdateHeadquartersUseCase } from "@/application/use-cases/headquarters/update-headquarters.usecase";

const instancia = new HeadquartersRepository(process.env.NEXT_PUBLIC_BASE_URL);

export const headquartersService = {
	getHeadquarters: new GetHeadquartersUseCase(instancia),
	getAllHeadquarters: new GetAllHeadquartersUseCase(instancia),
	registerHeadquarters: new CreateHeadquartersUseCase(instancia),
	updateHeadquarters: new UpdateHeadquartersUseCase(instancia),
	deleteHeadquarters: new DeleteHeadquartersUseCase(instancia),
};
