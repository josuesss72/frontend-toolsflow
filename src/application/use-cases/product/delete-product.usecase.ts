import { ProductRepository } from "@/application/repositories/product/product.repository";

export default class DeleteProductUseCase {
	constructor(private productRepository: ProductRepository) {}

	async execute(id: string, token: string, companyId: string) {
		return await this.productRepository.delete(id, token, companyId);
	}
}
