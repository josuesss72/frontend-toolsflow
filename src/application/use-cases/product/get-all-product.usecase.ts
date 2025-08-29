import { ProductRepository } from "@/application/repositories/product/product.repository";

export class GetAllProductsUseCase {
	constructor(private readonly productRepository: ProductRepository) {}

	async execute(companyId: string, token: string) {
		return await this.productRepository.getAll(token, companyId);
	}
}
