import PresentationRepository from "@/application/repositories/presentation/presentation.repository";
import { PayloadPresentation } from "@/domain/entities/presentation/presentation.entity";

export default class CreatePresentationUseCase {
	constructor(private repository: PresentationRepository) {}

	async execute(data: PayloadPresentation, token: string) {
		return await this.repository.create(data, token);
	}
}
