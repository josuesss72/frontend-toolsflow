import { ProductRepository } from "@/application/repositories/product/product.repository";

export default class DeleteProductUseCase {
	constructor(
		private productRepository: ProductRepository,
		private readonly id: string,
		private readonly token: string,
		private readonly companyId: string
	) {}

	async execute() {
		return await this.productRepository.delete(
			this.id,
			this.token,
			this.companyId
		);
	}
}
