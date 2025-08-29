import PresentationRepository from "@/application/repositories/presentation/presentation.repository";

export class GetAllPresentationsUseCase {
	constructor(private presentationRepository: PresentationRepository) {}

	async execute(productId: string, token: string) {
		return this.presentationRepository.findAll(productId, token);
	}
}
