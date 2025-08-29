import PresentationRepository from "@/application/repositories/presentation/presentation.repository";
import CreatePresentationUseCase from "@/application/use-cases/presentation/create-presentation.usecase";
import { GetAllPresentationsUseCase } from "@/application/use-cases/presentation/get-all-presentations.usecase";

const repository = new PresentationRepository(process.env.NEXT_PUBLIC_BASE_URL);

export const presentationService = {
	createPresentation: new CreatePresentationUseCase(repository),
	getAllPresentations: new GetAllPresentationsUseCase(repository),
};
