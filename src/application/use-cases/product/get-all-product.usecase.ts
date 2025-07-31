import { ProductRepository } from "@/application/repositories/product/product.repository";

export class GetAllProductsUseCase {
	constructor(
		private readonly productRepository: ProductRepository,
		private readonly token: string
	) {}

	async execute(companyId: string) {
		return await this.productRepository.getAll(this.token, companyId);
	}
}
